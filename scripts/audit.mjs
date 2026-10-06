import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const { chromium }=require(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
const base=process.env.AUDIT_URL || 'http://127.0.0.1:4321';
const executablePath=process.env.BROWSER_PATH;
const browser=await chromium.launch({headless:true,...(executablePath?{executablePath}:{channel:'msedge'})});
const output='artifacts';
await fs.mkdir(output,{recursive:true});
const pages=JSON.parse(await fs.readFile('dist/route-manifest.json','utf8'));
const errors=[];
const allChecks=[];
const titles=new Set();
const descriptions=new Set();
const links=new Set();
const context=await browser.newContext();
const page=await context.newPage();
page.on('pageerror',e=>errors.push(e.message));
page.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('/not-a-real-page/'))errors.push(`HTTP ${r.status()}: ${r.url()}`);});
try {
  for(const width of [1440,768,390,320]) {
    await page.setViewportSize({width,height:960});
    for(const entry of pages) {
      await page.goto(base+entry.path,{waitUntil:'networkidle'});
      await page.evaluate(()=>document.fonts.ready);
      await page.evaluate(async()=>{await Promise.all([...document.images].map(async image=>{image.loading='eager';try{await image.decode();}catch{}}));});
      if(entry.path==='/'&&(width===1440||width===390))await page.screenshot({path:`${output}/home-${width}.png`,fullPage:true});
      const result=await page.evaluate(()=>({
        title:document.title,
        description:document.querySelector('meta[name="description"]')?.content,
        h1:document.querySelectorAll('h1').length,
        overflow:document.documentElement.scrollWidth>innerWidth+1,
        overflows:[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.right>innerWidth+2;}).slice(0,5).map(e=>e.className),
        images:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),
        missingAlt:[...document.images].filter(i=>!i.hasAttribute('alt')).length,
        unlabeled:[...document.querySelectorAll('input:not([type="hidden"]),select,textarea')].filter(e=>!e.labels?.length&&!e.getAttribute('aria-label')).map(e=>e.id),
        orphanOptions:[...document.querySelectorAll('select')].filter(e=>[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim())).map(e=>e.id),
        links:[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')),
        brokenAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)))).map(a=>a.getAttribute('href')),
        fonts:[...document.fonts].filter(f=>f.status==='error').map(f=>f.family),
        robots:document.querySelector('meta[name="robots"]')?.content,
        schema:document.querySelector('script[type="application/ld+json"]')?.textContent,
        text:document.body.textContent,
        publicLabels:[...document.querySelectorAll('[aria-label],img[alt]')].map(e=>e.getAttribute('aria-label')||e.alt).join(' '),
      }));
      const label=`${width}px ${entry.path}`;
      assert(result.description?.length>35,`Missing description: ${label}`);
      assert.equal(result.h1,1,`One h1 required: ${label}`);
      assert(!result.overflow,`Horizontal overflow: ${label}; ${result.overflows}`);
      assert.equal(result.images.length,0,`Broken images: ${label}: ${result.images}`);
      assert.equal(result.missingAlt,0,`Missing image alt: ${label}`);
      assert.equal(result.unlabeled.length,0,`Unlabeled inputs: ${label}`);
      assert.equal(result.orphanOptions.length,0,`Malformed select options: ${label}: ${result.orphanOptions}`);
      assert.equal(result.brokenAnchors.length,0,`Missing anchor targets: ${label}: ${result.brokenAnchors}`);
      assert.equal(result.fonts.length,0,`Font errors: ${label}: ${result.fonts}`);
      assert(!/lorem ipsum|trusted by \d|five.star reviews|guaranteed rankings/i.test(result.text),`Placeholder or unsupported claim: ${label}`);
      assert(!/\bdemos?\b/i.test(result.text+' '+result.title+' '+result.description+' '+result.publicLabels),`Old public wording: ${label}`);
      if(entry.demo){assert.match(result.robots,/noindex/);assert.match(result.text,/fictional/i);assert(!result.schema,'Fictional demo must not carry LocalBusiness schema');}
      else if(!entry.noindex)assert(JSON.parse(result.schema)['@graph'].some(node=>node['@type']==='LocalBusiness'),'Missing business entity');
      if(width===1440){assert(!titles.has(result.title),'Duplicate title');titles.add(result.title);assert(!descriptions.has(result.description),'Duplicate description');descriptions.add(result.description);result.links.forEach(l=>links.add(l));}
      allChecks.push({width,path:entry.path,status:'passed'});
    }
    console.log(`Passed ${pages.length} page checks at ${width}px.`);
  }
  for(const href of links) {
    if(!href.startsWith('/'))continue;
    const response=await fetch(base+href);
    assert(response.ok,`Broken internal link: ${href}`);
    if(href.includes('#')){const id=decodeURIComponent(href.split('#')[1]);assert((await response.text()).includes(`id="${id}"`),`Missing anchor: ${href}`);}
  }
  await page.goto(base+'/faq/');
  const faq=page.locator('.faq-item').first();await faq.locator('summary').click();assert(await faq.evaluate(e=>e.open));
  await page.setViewportSize({width:390,height:844});await page.goto(base+'/');
  await page.locator('.mobile-nav summary').click();assert(await page.locator('.mobile-nav').evaluate(e=>e.open));
  await page.keyboard.press('Escape');assert(!(await page.locator('.mobile-nav').evaluate(e=>e.open)));
  assert.equal(await page.evaluate(()=>getComputedStyle(document.body).backgroundColor),'rgb(255, 255, 255)','Agency background should be white');
  assert(await page.locator('.mobile-action-bar').isVisible());
  assert.match(await page.locator('.hero-offer').textContent(),/249/);
  assert.equal(await page.locator('.plain-service-list a').count(),5);
  // All five example sites have ten reachable pages, complete menus, and usable image galleries.
  for(const slug of ['olive-and-ember','current-electric','form-studio','clearflow-plumbing','ridgeline-roofing']) {
    assert.equal(pages.filter(p=>p.path.startsWith(`/demos/${slug}/`)).length,10);
    await page.goto(base+`/demos/${slug}/gallery/`);
    const first=page.locator('[data-gallery-image]').first();await first.click();
    assert(await page.locator('.gallery-dialog').evaluate(e=>e.open));
    assert.match(await page.locator('[data-gallery-position]').textContent(),/^1 of/);
    await page.keyboard.press('ArrowRight');assert.match(await page.locator('[data-gallery-position]').textContent(),/^2 of/);
    await page.getByRole('button',{name:'Previous image',exact:true}).click();assert.match(await page.locator('[data-gallery-position]').textContent(),/^1 of/);
    await page.keyboard.press('Escape');assert(!(await page.locator('.gallery-dialog').evaluate(e=>e.open)));
    assert(await first.evaluate(e=>e===document.activeElement),'Gallery should restore keyboard focus');
    await page.locator('.demo-mobile summary').click();assert.equal(await page.locator('.demo-mobile nav a').count(),10);
    await page.locator('.demo-mobile nav a').last().click();assert(page.url().endsWith('/questions/'));
    await page.setViewportSize({width:1440,height:1000});await page.locator('.example-more summary').click();assert.equal(await page.locator('.example-more nav a').count(),10);
    await page.keyboard.press('Escape');assert(!(await page.locator('.example-more').evaluate(e=>e.open)));
    await page.setViewportSize({width:390,height:844});
  }
  await page.goto(base+'/book/?interest=missed-calls');
  assert.match(await page.locator('[data-inquiry-context]').textContent(),/Missed-call text replies/);
  assert.equal(await page.locator('.simple-inquiry [required]').count(),4);
  assert(!(await page.locator('.optional-inquiry').evaluate(e=>e.open)));
  await page.locator('.optional-inquiry summary').click();assert(await page.locator('#message').isVisible());
  await page.locator('#name').fill('Sample Owner');await page.locator('#business').fill('Sample Business');await page.locator('#email').fill('owner@example.com');await page.locator('#need').selectOption({label:'A new website'});
  await page.locator('[type="submit"]').click();assert.match(await page.locator('#brief').inputValue(),/Interested in: Missed-call text replies/);
  assert.match(await page.locator('.form-feedback').textContent(),/nothing has been sent/i);
  // Context survives the journey from detailed example pages into their request forms.
  for(const [route,field,expected] of [['/demos/olive-and-ember/private-dining/','#demo-occasion','Private dining'],['/demos/current-electric/repairs/','#demo-service','Repairs & fault finding'],['/demos/form-studio/foundations/','#demo-class','Foundations'],['/demos/clearflow-plumbing/drains/','#demo-service','Drains & blockages'],['/demos/ridgeline-roofing/roof-replacement/','#demo-service','Roof replacement']]) {
    await page.goto(base+route);await page.locator('.example-detail-hero .demo-button').click();assert.equal(await page.locator(field).inputValue(),expected);
  }
  // Everyday examples and both new service guides: every choice, keyboard use, and handoff.
  // Quick request buttons retain the service and never reload an in-progress form.
  for(const [route,field,expected] of [
    ['/demos/olive-and-ember/private-dining/','#demo-occasion','Private dining'],
    ['/demos/current-electric/repairs/','#demo-service','Repairs & fault finding'],
    ['/demos/current-electric/lighting/','#demo-service','Lighting & upgrades'],
    ['/demos/form-studio/private-sessions/','#demo-class','Private session'],
    ['/demos/clearflow-plumbing/drains/','#demo-service','Drains & blockages'],
    ['/demos/clearflow-plumbing/water-heaters/','#demo-service','Water heaters'],
    ['/demos/ridgeline-roofing/roof-replacement/','#demo-service','Roof replacement'],
  ]) {
    for(const width of [390,1440]) {
      await page.setViewportSize({width,height:844});await page.goto(base+route);
      const request=page.locator(width===390?'.example-mobile-action .demo-button':'.demo-nav > .demo-button');
      await request.click();assert.equal(await page.locator(field).inputValue(),expected);
      await page.locator('#demo-name').fill('Keep my request');
      await request.click();assert.equal(await page.locator('#demo-name').inputValue(),'Keep my request');
      assert.equal(new URL(page.url()).hash,'#demo-request');
      assert(Number.parseFloat(await page.locator('#demo-name').evaluate(e=>getComputedStyle(e).fontSize))>=16||width>760);
    }
  }
  await page.setViewportSize({width:390,height:844});
  await page.goto(base+'/book/?interest=reviews');await page.locator('#name').fill('Keep my agency request');
  await page.locator('.mobile-action-bar a').last().click();assert.equal(await page.locator('#name').inputValue(),'Keep my agency request');
  await page.locator('.mobile-nav summary').click();await page.locator('.mobile-nav .button').click();
  assert(!(await page.locator('.mobile-nav').evaluate(e=>e.open)));assert.equal(await page.locator('#name').inputValue(),'Keep my agency request');
  await page.goto(base+'/demos/olive-and-ember/book-a-table/?occasion=Private%20dining');
  await page.locator('#demo-name').fill('Sample Group');await page.locator('#demo-date').fill('2030-12-10');
  await page.locator('#demo-guests').selectOption('11–20 guests');await page.locator('#demo-time').selectOption('18:30');await page.locator('[type="submit"]').click();
  assert.match(await page.locator('.form-feedback').textContent(),/Private dining.*11–20 guests/);
  for(const [url,choices] of [['/',['missed-call','inquiry','review']],['/services/',['missed-call','inquiry','review']],['/demos/clearflow-plumbing/',['leaks','drains','hot-water','installations']],['/demos/ridgeline-roofing/repair-or-replace/',['isolated','widespread','unsure']]]) {
    await page.goto(base+url);
    for(const choice of choices) {
      const button=page.locator(`[data-choice="${choice}"]`);await button.focus();await page.keyboard.press('Enter');
      assert.equal(await button.getAttribute('aria-pressed'),'true');
      assert.equal(await page.locator('[data-choice-panel]:visible').count(),1);
      assert(await page.locator(`[data-choice-panel="${choice}"]`).isVisible());
    }
  }
  for(const [url,choice,expected] of [['/demos/clearflow-plumbing/','hot-water','Water heaters'],['/demos/ridgeline-roofing/repair-or-replace/','widespread','Roof replacement']]) {
    await page.goto(base+url);await page.locator(`[data-choice="${choice}"]`).click();
    await page.locator(`[data-choice-panel="${choice}"] .demo-button`).click();
    assert.equal(await page.locator('#demo-service').inputValue(),expected);
    await page.locator('.demo-mobile summary').click();assert(await page.locator('.demo-mobile').evaluate(e=>e.open));
    await page.keyboard.press('Escape');assert(!(await page.locator('.demo-mobile').evaluate(e=>e.open)));
    await page.locator('[type="submit"]').click();assert(await page.locator('#demo-name').evaluate(e=>e.validity.valueMissing));
    await page.locator('#demo-name').fill('Sample Homeowner');await page.locator('#demo-project').fill('A sample request for this example website.');
    await page.locator('[type="submit"]').click();assert.match(await page.locator('.form-feedback').textContent(),/Nothing has been sent or booked/);
    assert.match(await page.locator('.form-feedback').textContent(),new RegExp(expected));
  }
  await page.goto(base+'/demos/form-studio/classes/');await page.getByRole('button',{name:'Monday',exact:true}).click();assert.equal(await page.locator('[data-class-day]:visible').count(),2);
  await page.getByRole('button',{name:'All days',exact:true}).click();assert.equal(await page.locator('[data-class-day]:visible').count(),8);
  await page.goto(base+'/examples/form-studio/');await page.getByRole('button',{name:'Mobile',exact:true}).click();assert(await page.locator('#mobile-preview').isVisible());assert(!(await page.locator('#desktop-preview').isVisible()));
  await page.getByRole('button',{name:'Desktop',exact:true}).click();assert(await page.locator('#desktop-preview').isVisible());
  await page.goto(base+'/demos/form-studio/find-your-class/?class=Foundations');assert.equal(await page.locator('#demo-class').inputValue(),'Foundations');
  await page.locator('#demo-name').fill('Sample Student');await page.locator('#demo-experience').selectOption('This would be my first class');await page.locator('[type="submit"]').click();assert.match(await page.locator('.form-feedback').textContent(),/Nothing has been sent or booked/);
  await page.goto(base+'/demos/current-electric/request-a-quote/?service=Lighting%20%26%20upgrades');assert.equal(await page.locator('#demo-service').inputValue(),'Lighting & upgrades');
  await page.locator('#demo-name').fill('Sample Homeowner');await page.locator('#demo-project').fill('Kitchen lighting');await page.locator('[type="submit"]').click();assert.match(await page.locator('.form-feedback').textContent(),/Nothing has been sent or booked/);
  await page.goto(base+'/contact/');
  assert((await page.locator('.inquiry-form').boundingBox()).y<(await page.locator('.contact-points').boundingBox()).y,'Mobile contact form should precede supporting copy');
  await page.locator('button[type="submit"]').click();assert.equal(await page.locator('#name').evaluate(e=>e.validity.valueMissing),true);
  await page.locator('#name').fill('Alex Example');await page.locator('#business').fill('Test Business');await page.locator('#email').fill('invalid');
  assert.equal(await page.locator('#email').evaluate(e=>e.validity.typeMismatch),true);
  await page.locator('#email').fill('alex@example.com');await page.locator('#need').selectOption({label:'A new website'});await page.locator('[type="submit"]').click();
  assert.match(await page.locator('.form-feedback').textContent(),/nothing has been sent/i);
  assert(await page.locator('.brief-output').isVisible());
  await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw new Error('Clipboard unavailable');}}}));
  await page.getByRole('button',{name:'Copy brief',exact:true}).click();
  assert(await page.locator('#brief').evaluate(e=>e===document.activeElement&&e.selectionStart===0&&e.selectionEnd===e.value.length),'Manual copy must leave the brief focused and selected');
  const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Save brief'}).click();const download=await downloadPromise;assert.equal(download.suggestedFilename(),'skipmanual-website-brief.txt');
  // Check all endpoint states without sending any network request.
  await page.evaluate(()=>{document.querySelector('[data-inquiry]').dataset.endpoint='/audit-inquiry';});
  await page.route('**/audit-inquiry',route=>route.fulfill({status:503,body:'unavailable'}));
  await page.locator('[type="submit"]').click();await page.waitForFunction(()=>document.querySelector('.form-feedback').textContent.includes('couldn’t confirm'));
  assert.equal(await page.locator('#name').inputValue(),'Alex Example');
  await page.unroute('**/audit-inquiry');await page.route('**/audit-inquiry',route=>route.fulfill({status:200,contentType:'application/json',body:'{"success":true}'}));
  await page.locator('[type="submit"]').click();await page.waitForFunction(()=>document.querySelector('.form-feedback').textContent.includes('has been sent'));
  assert.equal(await page.locator('#name').inputValue(),'');
  await page.goto(base+'/book/?interest=reviews');
  await page.evaluate(()=>{document.querySelector('[data-inquiry]').dataset.endpoint='/audit-inquiry';});
  await page.locator('#name').fill('Sample Owner');await page.locator('#business').fill('Sample Business');await page.locator('#email').fill('sample@example.com');await page.locator('#need').selectOption('A new website');
  await page.locator('[type="submit"]').click();await page.waitForFunction(()=>document.querySelector('.form-feedback').textContent.includes('has been sent'));
  assert.equal(await page.locator('[name="interest"]').inputValue(),'Review requests','Reset must preserve the visible inquiry context');
  await page.goto(base+'/demos/olive-and-ember/book-a-table/');await page.locator('#demo-name').fill('Sample Guest');await page.locator('#demo-date').fill('2030-12-10');await page.locator('#demo-guests').selectOption('2 guests');await page.locator('#demo-time').selectOption('18:30');await page.locator('[type="submit"]').click();assert.match(await page.locator('.form-feedback').textContent(),/nothing has been sent or booked/i);
  const missing=await fetch(base+'/not-a-real-page/');assert.equal(missing.status,404);
  await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base+'/');assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');
  const noJS=await browser.newContext({javaScriptEnabled:false});const noJSPage=await noJS.newPage();await noJSPage.goto(base+'/');assert.equal(await noJSPage.locator('h1').count(),1);assert.equal(await noJSPage.locator('.work-card').count(),5);
  assert.equal(await noJSPage.locator('[data-choice-panel]:visible').count(),3);
  await noJSPage.goto(base+'/demos/clearflow-plumbing/');assert.equal(await noJSPage.locator('[data-choice-panel]:visible').count(),4);
  await noJSPage.goto(base+'/demos/ridgeline-roofing/repair-or-replace/');assert.equal(await noJSPage.locator('[data-choice-panel]:visible').count(),3);
  for(const route of ['/demos/clearflow-plumbing/request-a-visit/','/demos/ridgeline-roofing/request-an-assessment/']) { await noJSPage.goto(base+route);assert(await noJSPage.locator('[type="submit"]').isDisabled()); }
  await noJSPage.goto(base+'/contact/');assert(await noJSPage.locator('[type="submit"]').isDisabled());
  await noJSPage.goto(base+'/book/');assert(await noJSPage.locator('[type="submit"]').isDisabled());
  await noJSPage.goto(base+'/demos/olive-and-ember/gallery/');assert(await noJSPage.locator('[data-gallery-image]').first().isVisible());assert.match(await noJSPage.locator('[data-gallery-image]').first().getAttribute('href'),/\.webp$/);
  await noJSPage.goto(base+'/demos/current-electric/request-a-quote/');assert(await noJSPage.locator('[type="submit"]').isDisabled());await noJS.close();
  for(const [label,url,width,height] of [['home-desktop','/',1440,1000],['home-mobile','/',390,844],['examples','/examples/',1440,1000],['restaurant','/demos/olive-and-ember/',1440,1000],['electrical','/demos/current-electric/',1440,1000],['studio','/demos/form-studio/',1440,1000],['contact','/contact/',1440,1000]]) {
    await page.setViewportSize({width,height});await page.goto(base+url,{waitUntil:'networkidle'});await page.screenshot({path:`${output}/${label}.png`,fullPage:true});
  }
  // Real PNG for social previews, generated from the brand asset.
  await page.setViewportSize({width:1200,height:630});await page.goto(base+'/images/social-card.svg');await page.screenshot({path:'public/images/social-card.png'});
  const actualErrors=errors.filter(e=>!e.includes('/audit-inquiry'));
  assert.equal(actualErrors.length,0,actualErrors.join('\n'));
  await fs.writeFile(`${output}/audit-results.json`,JSON.stringify({pages:pages.length,pageChecks:allChecks.length,internalLinks:links.size,checks:allChecks,interactions:'passed',errors:actualErrors},null,2));
  console.log(`Audit passed: ${allChecks.length} responsive page checks, ${links.size} unique links, navigation, forms, filtering, reduced motion, no-JavaScript rendering, and 404 behavior.`);
} finally {await browser.close();}
