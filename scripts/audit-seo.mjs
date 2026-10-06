import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
import {plainText,serializeJsonLd} from '../src/data/seo.mjs';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright-core');
const manifest=JSON.parse(await fs.readFile('dist/route-manifest.json','utf8'));
const origin='https://skipmanual.com';
const base=process.env.AUDIT_URL||'http://127.0.0.1:4321';
const browser=await chromium.launch({headless:true,...(process.env.BROWSER_PATH?{executablePath:process.env.BROWSER_PATH}:{channel:'msedge'})});
const indexed=manifest.filter(p=>!p.demo&&!p.noindex);
const indexedPaths=new Set(indexed.map(p=>p.path));
const titles=new Set(),descriptions=new Set(),reports=[],adjacency=new Map();
const serializationSample={text:'</script><h1>Not markup</h1> & "text"'};
assert(!serializeJsonLd(serializationSample).includes('<'));
assert.deepEqual(JSON.parse(serializeJsonLd(serializationSample)),serializationSample);
try {
  const page=await browser.newPage({viewport:{width:1440,height:1000}});
  for(const entry of manifest){
    const response=await page.goto(base+entry.path,{waitUntil:'load'});
    assert.equal(response.status(),200,entry.path);
    const data=await page.evaluate(()=>({
      title:document.title,description:document.querySelector('meta[name="description"]')?.content,
      h1:[...document.querySelectorAll('h1')].map(e=>e.textContent),lang:document.documentElement.lang,
      canonicals:[...document.querySelectorAll('link[rel="canonical"]')].map(e=>e.href),
      robots:document.querySelector('meta[name="robots"]')?.content,
      ogUrl:document.querySelector('meta[property="og:url"]')?.content,
      ogImage:document.querySelector('meta[property="og:image"]')?.content,
      graph:JSON.parse(document.querySelector('script[type="application/ld+json"]')?.textContent||'null')?.['@graph']||[],
      faqs:[...document.querySelectorAll('.faq-item')].map(e=>({q:e.querySelector('summary').textContent,a:e.querySelector('p').textContent})),
      breadcrumbs:[...document.querySelectorAll('[aria-label="Breadcrumb"] a,[aria-label="Breadcrumb"] [aria-current="page"]')].map(e=>({name:e.textContent,url:e.href||location.origin+location.pathname})),
      links:[...document.querySelectorAll('a[href]')].map(e=>e.getAttribute('href')),
      content:document.querySelector('main').innerText,
      articleText:[...document.querySelectorAll('.service-detail-content article')].map(e=>e.textContent).join(' '),
      headings:[...document.querySelectorAll('.service-detail-content article h2')].map(e=>e.textContent),
      schemaScripts:document.querySelectorAll('script[type="application/ld+json"]').length,
    }));
    const label=entry.path;
    assert.equal(data.lang,'en-US',label);
    assert.equal(data.h1.length,1,label);
    assert.deepEqual(data.canonicals,[origin+entry.path],label);
    assert.equal(data.ogUrl,origin+entry.path,label);
    assert.equal(data.ogImage,origin+'/images/social-card.png',label);
    assert(!/[\u2014]|&mdash;/.test(data.content+data.title+data.description),`Em dash: ${label}`);
    assert(!/\b\w+\?s\b/.test(data.content),`Damaged apostrophe: ${label}`);
    assert(data.title&&data.description,`Missing metadata: ${label}`);
    assert(!titles.has(data.title),`Duplicate title: ${label}`);titles.add(data.title);
    assert(!descriptions.has(data.description),`Duplicate description: ${label}`);descriptions.add(data.description);
    if(entry.demo||entry.noindex){assert.match(data.robots,/noindex/);assert.equal(data.graph.length,0,label);continue;}
    assert.match(data.robots,/^index,follow/);
    assert.equal(data.schemaScripts,1,label);
    const business=data.graph.find(n=>n['@type']==='LocalBusiness');
    assert.equal(business?.['@id'],origin+'/#business',label);
    assert.equal(business.areaServed.name,'United States',label);
    assert(!business.address&&!business.telephone&&!business.aggregateRating&&!business.review,`Unverified business details: ${label}`);
    const ids=data.graph.map(n=>n['@id']);assert.equal(ids.length,new Set(ids).size,`Repeated entity id: ${label}`);
    const webpage=data.graph.find(n=>['WebPage','AboutPage','ContactPage','CollectionPage'].includes(n['@type']));
    assert.equal(webpage.url,origin+entry.path,label);
    const breadcrumb=data.graph.find(n=>n['@type']==='BreadcrumbList');
    if(entry.path!=='/'){
      assert.equal(breadcrumb.itemListElement.length,data.breadcrumbs.length,label);
      breadcrumb.itemListElement.forEach((item,i)=>{
        assert.equal(item.position,i+1);assert.equal(item.name,data.breadcrumbs[i].name);
        assert.equal(new URL(item.item).pathname,new URL(data.breadcrumbs[i].url).pathname);
      });
    }
    const faq=data.graph.find(n=>n['@type']==='FAQPage');
    assert.equal(faq?.mainEntity.length||0,data.faqs.length,`FAQ count: ${label}`);
    faq?.mainEntity.forEach((q,i)=>{assert.equal(q.name,plainText(data.faqs[i].q));assert.equal(q.acceptedAnswer.text,plainText(data.faqs[i].a));});
    const service=data.graph.find(n=>n['@type']==='Service');
    if(/^\/(?:services|industries)\/.+/.test(entry.path)){
      assert(service,`Missing service entity: ${label}`);
      assert.equal(service.provider['@id'],business['@id']);
      assert(data.faqs.length>=3,`Missing service questions: ${label}`);
      assert(data.articleText.split(/\s+/).length>=150,`Thin service explanation: ${label}`);
    }
    const links=data.links.filter(l=>l.startsWith('/')).map(l=>new URL(l,origin).pathname);
    adjacency.set(entry.path,links.filter(l=>indexedPaths.has(l)));
    reports.push({path:label,title:data.title,titleLength:data.title.length,descriptionLength:data.description.length,service:service?.name||null,questions:data.faqs.length,contentWords:data.content.split(/\s+/).length,articleText:data.articleText});
  }
  // Every indexable page must be discoverable from the homepage through links.
  const reached=new Set(['/']);const queue=['/'];
  while(queue.length)for(const link of adjacency.get(queue.shift())||[])if(!reached.has(link)){reached.add(link);queue.push(link);}
  assert.deepEqual([...indexedPaths].filter(p=>!reached.has(p)),[],'Orphan pages');
  // Check industry content, excluding the shared navigation, pricing, and footer.
  const industryReports=reports.filter(r=>/^\/industries\/.+/.test(r.path));
  const shingles=text=>{const words=text.toLowerCase().split(/\s+/);return new Set(words.slice(0,-4).map((_,i)=>words.slice(i,i+5).join(' ')));};
  const similarity=[];
  for(let i=0;i<industryReports.length;i++)for(let j=i+1;j<industryReports.length;j++){
    const a=shingles(industryReports[i].articleText),b=shingles(industryReports[j].articleText);
    const overlap=[...a].filter(v=>b.has(v)).length/(new Set([...a,...b]).size||1);
    similarity.push({a:industryReports[i].path,b:industryReports[j].path,overlap:Number(overlap.toFixed(3))});
    assert(overlap<.35,'Industry pages repeat too much body copy');
  }
  const sitemap=await fs.readFile('dist/sitemap.xml','utf8');
  const urls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m=>m[1]);
  assert.deepEqual(urls.sort(),indexed.map(p=>origin+p.path).sort(),'Sitemap must contain only canonical, indexable pages');
  assert.match(await fs.readFile('dist/robots.txt','utf8'),/Sitemap: https:\/\/skipmanual\.com\/sitemap.xml/);
  const sitemapResponse=await fetch(base+'/sitemap.xml');assert.equal(sitemapResponse.status,200);
  assert((await sitemapResponse.text()).includes('<urlset'));
  assert.equal((await fetch(base+'/not-a-real-page/')).status,404,'Real 404 response');
  await page.goto(base+'/book/?interest=seo');assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'),origin+'/book/');
  const redirect=await fetch(base+'/pricing',{redirect:'manual'});assert.equal(redirect.status,301);assert.equal(redirect.headers.get('location'),'/pricing/');
  const config=JSON.parse(await fs.readFile('vercel.json','utf8'));
  assert(config.redirects.some(r=>r.permanent&&r.has.some(h=>h.type==='host'&&h.value==='www.skipmanual.com')&&r.destination==='https://skipmanual.com/:path*'));
  await fs.mkdir('artifacts/seo',{recursive:true});
  for(const width of [1440,390])for(const route of ['/','/services/missed-call-texts/','/industries/electricians/']){
    await page.setViewportSize({width,height:1000});await page.goto(base+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
    await page.screenshot({path:`artifacts/seo/${route.replaceAll('/','-')||'home'}-${width}.png`,fullPage:true});
  }
  const result={pages:manifest.length,indexablePages:indexed.length,sitemapUrls:urls.length,orphanPages:0,industryContentSimilarity:similarity,pagesReviewed:reports.map(({articleText,...r})=>r),status:'passed'};
  await fs.writeFile('artifacts/seo/results.json',JSON.stringify(result,null,2));
  console.log(`SEO audit passed: ${manifest.length} pages, ${indexed.length} indexable URLs, canonical and schema checks, visible FAQ parity, unique metadata, industry content, and no orphan pages.`);
} finally {await browser.close();}
