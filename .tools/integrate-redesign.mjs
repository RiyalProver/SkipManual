import fs from 'node:fs/promises';
const update=async(file,fn)=>{const source=await fs.readFile(file,'utf8');await fs.writeFile(file,fn(source));};
await update('src/data/site.mjs',s=>s.replace("  contactEndpoint: process.env.PUBLIC_CONTACT_ENDPOINT || '',","  contactEndpoint: process.env.PUBLIC_CONTACT_ENDPOINT || '',\n  bookingUrl: process.env.PUBLIC_BOOKING_URL || '',")
  .replace("{ href: '/services/', label: 'Services' }","{ href: '/services/', label: 'What’s included' }")
  .replace("{ href: '/examples/', label: 'Examples' }","{ href: '/examples/', label: 'Website examples' }")
  .replace("{ href: '/about/', label: 'About' }","{ href: '/how-it-works/', label: 'How it works' }"));
await update('src/data/examples.mjs',s=>"import {exampleContent} from './example-content.mjs';\n"+s+`\nfor(const example of examples) {
  const extra=exampleContent[example.theme].pages;
  example.pages.push(...extra.map(page=>page.label));
  example.routes.push(...extra.map(page=>page.route));
  example.features.push('An expanded photo gallery', 'Helpful answers and visitor guides');
}\n`);
await update('src/components/ui.mjs',s=>{
  s=s.replace("href = '/contact/'","href = '/book/'");
  s=s.replace('<header class="site-header">','<div class="site-utility"><div class="container"><span>Websites &amp; customer follow-up for local businesses</span><a href="/pricing/">All five services · <strong>$249/month</strong>${icon(\'arrow\')}</a></div></div><header class="site-header">');
  s=s.replaceAll("button('Let’s talk')","button('Book a call','/book/')");
  s=s.replace('<a href="/faq/">FAQ</a>','<a href="/about/">About SkipManual</a><a href="/faq/">Common questions</a>');
  s=s.replace('<a href="/pricing/">Pricing</a></div>','<a href="/pricing/">Pricing</a><a href="/how-it-works/">How it works</a></div>');
  s=s.replace('<a href="/contact/">Get started</a>','<a href="/contact/">Send an inquiry</a><a href="/book/">Book a call</a>');
  s=s.replace("button('Let’s build your website')","button('Let’s talk about your website','/book/')");
  s=s.replace('content="#f8f8f2"','content="#ffffff"');
  s=s.replace('<link rel="stylesheet" href="/styles/trades.css">','<link rel="stylesheet" href="/styles/trades.css"><link rel="stylesheet" href="/styles/example-expansion.css">');
  s=s.replace('<link rel="stylesheet" href="/styles/previews.css">','<link rel="stylesheet" href="/styles/previews.css"><link rel="stylesheet" href="/styles/agency.css">');
  s=s.replace("${demo ? '' : footer()}","${demo ? '' : footer()+`<nav class=\"mobile-action-bar\" aria-label=\"Quick actions\"><a href=\"/examples/\">Website examples</a><a href=\"/book/\">Book a call ${icon('arrow')}</a></nav>`}");
  return s;
});
await update('src/pages/agency.mjs',s=>{
  s="import {redesignedHome,redesignedServices,redesignedContact,additionalAgencyPages,directWorkCard} from './agency-redesign.mjs';\n"+s;
  s=s.replace('render:home','render:redesignedHome').replace('render:services','render:redesignedServices').replace('render:contact','render:redesignedContact');
  s=s.replace('export const agencyPages = [','export const agencyPages = [\n  ...additionalAgencyPages,');
  s=s.replace("title:'SkipManual — Websites that do your business justice'","title:'Websites & Customer Follow-Up for Local Businesses | SkipManual'");
  s=s.replace('Your business is the real deal. Look the part with a professional local business website from SkipManual. Explore the $249/month package and original example websites.','A 10–20 page website and customer follow-up for your local business, all in one $249/month package. Explore five complete example websites and get started.');
  const start=s.indexOf('function exampleIndex()');const end=s.indexOf('export function exampleDetail',start);
  s=s.slice(0,start)+`function exampleIndex() { return \`\${pageHero('Five businesses. Five different approaches.','Find a website<br>that feels like your business.','Every example has 10 pages to explore: service details, photographs, useful answers, and a clear inquiry path. Open one and see the whole experience.')}<nav class="container industry-filter" aria-label="Jump to an industry">\${examples.map(e=>\`<a href="#\${e.slug}">\${e.category}\${icon('arrow')}</a>\`).join('')}</nav><section class="section container examples-expanded"><p class="collection-disclosure">Original website examples for fictional businesses. These are design concepts, not client projects.</p><div class="work-grid">\${examples.map(directWorkCard).join('')}</div></section>\${cta('Something you like?<br>Let’s make it your own.')}\`; }\n\n`+s.slice(end);
  return s;
});
await update('src/pages/demos.mjs',s=>{
  s="import {extraRoutes,allPagesNavigation,exampleHomeExtension,expandedNavigation} from './example-expansion.mjs';\nimport {photo} from '../components/photos.mjs';\n"+s;
  const a=s.indexOf('const dimage =');const b=s.indexOf('const dkicker',a);
  s=s.slice(0,a)+`const dimage = (src,alt,cls='',eager=false) => photo(src,{alt,cls,eager});\n`+s.slice(b);
  s=s.replace('${nav}${dlink(e,c.action,c.contact)}</nav><details','${nav}${allPagesNavigation(e,page)}${dlink(e,c.action,c.contact)}</nav><details');
  s=s.replace('<a href="/demos/${e.slug}/">Home</a>${nav}${dlink(e,c.action,c.contact)}</nav></details>','${e.routes.map((route,i)=>`<a href="/demos/${e.slug}/${route?route+\'/\':\'\'}" ${page===route?\'aria-current="page"\':\'\'}>${e.pages[i]}</a>`).join(\'\')}</nav></details>');
  s=s.replace('<div id="demo-main">${content}</div>','<div id="demo-main">${expandedNavigation(e)}${content}</div>');
  s=s.replace('<a href="/demos/${e.slug}/">Home</a>${nav}<a href="/demos/${e.slug}/${c.contact}/">${c.action}</a>','${e.routes.map((route,i)=>`<a href="/demos/${e.slug}/${route?route+\'/\':\'\'}">${e.pages[i]}</a>`).join(\'\')}');
  s=s.replace('</div></div></footer></div>','</div></div></footer><nav class="example-mobile-action" aria-label="Quick website actions"><a href="/demos/${e.slug}/questions/">Questions?</a>${dlink(e,c.action,c.contact)}</nav></div>');
  s=s.replace('    return routes.map',`    routes.push(...extraRoutes(e));
    return routes.map`);
  s=s.replace('render:()=>shell(e,route,render(e))',`render:()=>{
      let body=render(e);
      if(route===''){
        const closing=Math.max(body.lastIndexOf('<section class="demo-closing"'),body.lastIndexOf('<section class="trade-closing"'));
        body=closing>=0?body.slice(0,closing)+exampleHomeExtension(e)+body.slice(closing):body+exampleHomeExtension(e);
      }
      return shell(e,route,body);
    }`);
  // Copy trade route arrays because the renderer can be evaluated more than once.
  s=s.replace('const routes=tradeRoutes[e.theme] || (','const routes=tradeRoutes[e.theme] ? [...tradeRoutes[e.theme]] : (');
  s=s.replace('<div class="field"><label for="demo-date">','<div class="field full"><label for="demo-occasion">Occasion <span>(optional)</span></label><input id="demo-occasion" name="occasion" maxlength="160" placeholder="Dinner, a birthday, or a group gathering"></div><div class="field"><label for="demo-date">');
  return s;
});
await update('src/pages/example-expansion.mjs',s=>s.replace('return `${expandedNavigation(e)}<section','return `<section'));
await update('src/styles/tokens.css',s=>s.replace('--color-background: var(--paper-50);','--color-background: #ffffff;').replace('--color-surface: var(--paper-100);','--color-surface: #f7f8fa;').replace('--color-border: var(--paper-200);','--color-border: #e4e7eb;'));
await update('scripts/build.mjs',s=>s.replace('const dist =',`if(site.bookingUrl) { const booking=new URL(site.bookingUrl); if(booking.protocol!=='https:'||booking.username||booking.password)throw new Error('PUBLIC_BOOKING_URL must be a verified HTTPS booking URL.'); }
const dist =`));
await update('.env.example',s=>s+'\n# Verified scheduling page; intentionally deferred until the design is approved.\nPUBLIC_BOOKING_URL=\n');
