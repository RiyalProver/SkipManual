import fs from 'node:fs/promises';
const edit=async(file,fn)=>fs.writeFile(file,fn(await fs.readFile(file,'utf8')));
await edit('src/pages/agency.mjs',s=>{
  const start=s.indexOf('const processSection =');const end=s.indexOf('function pricing()',start);s=s.slice(0,start)+s.slice(end);
  const a=s.indexOf('function contact()');const b=s.indexOf('function privacy()',a);s=s.slice(0,a)+s.slice(b);
  s=s.replace("import { packageOverview, scenarioSection } from '../components/package.mjs';\n",'').replace("import { packageServices } from '../data/package.mjs';\n",'');
  s=s.replace("import { site, faqs, processSteps as steps }","import { site, faqs }");
  s="import {photo} from '../components/photos.mjs';\n"+s;
  s=s.replace('<div class="about-mark">${mark()}</div>','<div class="about-photo">${photo(\'cafe\',{eager:true})}</div>');
  s=s.replace('Our role is to make the website side easier to understand, then design and build something you can confidently share.','We build the website and plan the customer follow-up with you: inquiry replies, missed-call texts, and review requests that fit the way you work. The aim is a clearer next step for your customers and a little less on your plate.');
  s=s.replace("{ path:'/services/', title:'Websites & Customer Follow-Up for Local Businesses | SkipManual'","{ path:'/services/', title:'What’s Included in the $249 Website Package | SkipManual'");
  s=s.replace('<h2>Website hosting</h2>','<h2>Booking a call</h2><p>${site.bookingUrl ? \'The booking button opens our external scheduling provider. That provider handles appointment details and confirmation under its own privacy terms.\' : \'The call page currently lets you prepare a local request. It does not reserve a time or send your information.\'}</p><h2>Website hosting</h2>');
  return s;
});
await edit('src/pages/agency-redesign.mjs',s=>s.replace('<div class="mosaic-stamp">Your business.<br><strong>Looking its best.</strong></div>',''));
await edit('src/data/example-content.mjs',s=>s
 .replace('A cup of coffee viewed from above','Cups of coffee with latte art')
 .replace('People practicing movement on exercise mats','A person practicing yoga beside the sea at sunset')
 .replace('An exercise space with training equipment','A person lifting a barbell in a training space')
 .replace('A calm space for movement practice','A group practicing yoga on a beach')
 .replace('A welcoming café interior','Coffee being prepared at a café counter')
 .replace('A furnished home dining area','A light-filled living room with natural textures')
 .replace("['pilates','studio-space','stretching','yoga-class','fitness']","['pilates','studio-space','stretching','yoga-class']")
 .replace("intro:'You do not need to arrive knowing the movements. A first class is a chance to become familiar with the space and find a comfortable starting point.',image:'studio-space'","intro:'You do not need to arrive knowing the movements. A first class is a chance to become familiar with the space and find a comfortable starting point.',image:'pilates'"));
await edit('src/pages/example-expansion.mjs',s=>s
 .replace("import {exampleContent}","import {exampleContent,photoLibrary}")
 .replace('aria-label="Enlarge image ${i+1}"','aria-label="Enlarge: ${escape(photoLibrary[name][0])}"')
 .replace("${['A closer look at the details','Space, light, and everyday life','An idea for your next visit','A different point of view'][i%4]}","${escape(photoLibrary[name][0])}")
 .replace('<img alt=""><p></p>','<img src="/images/${c.gallery[0]}.webp" alt="${escape(photoLibrary[c.gallery[0]][0])}" loading="lazy"><p></p>'));
await edit('src/pages/demos.mjs',s=>s
 .replace("explain.','request-a-quote'","explain.','repairs'")
 .replace("better for you.','request-a-quote'","better for you.','installations'")
 .replace("will be used.','request-a-quote'","will be used.','renovations'")
 .replace("r==='lighting' ? 'A closer look at lighting' : 'Tell us about the job'","'Explore this service'")
 .replace("dimage('electrician','Careful wiring work for an electrical installation','',true)","dimage('living-room','A living room arranged around natural light and practical lighting','',true)")
 .replace('<a href="/contact/">Want one like this?','<a href="/book/?example=${e.slug}">Want one like this?')
 .replace('${menus.map(([name,items],i)=>`<section class="menu-category" id="menu-${i}"><h2>','${menus.map(([name,items],i)=>`<section class="menu-category" id="menu-${i}">${photo([\'seasonal-plate\',\'restaurant\',\'dessert\'][i],{cls:\'menu-category-photo\'})}<h2>'));
await edit('src/pages/trades.mjs',s=>{
  s="import {photo as responsivePhoto} from '../components/photos.mjs';\n"+s;
  const a=s.indexOf('const photo =');const b=s.indexOf('const closing =',a);
  s=s.slice(0,a)+`const photo=(name,alt,eager=false)=>responsivePhoto(name,{alt,eager,sizes:name==='roofing'?'100vw':'(max-width:760px) 100vw, 50vw'});\n`+s.slice(b);
  s=s.replace("service:'Leaks & fixtures' }","service:'Leaks & fixtures', route:'leaks-and-fixtures' }")
    .replace("service:'Drains & blockages' }","service:'Drains & blockages', route:'drains' }")
    .replace("service:'Water heaters' }","service:'Water heaters', route:'water-heaters' }")
    .replace("service:'New fixtures' }","service:'New fixtures', route:'bathroom-kitchen' }");
  s=s.replace('href="/demos/${e.slug}/services/#${s.id}"','href="/demos/${e.slug}/${s.route}/"');
  s=s.replace("${link(e,'Ask about this service','request-a-visit',s.service,'demo-text-link')}","${link(e,'Explore this service',s.route,'','demo-text-link')}");
  s=s.replace("${link(e,'Discuss your roof','request-an-assessment',service,'demo-text-link')}","${link(e,'Explore this service',n==='01'?'roof-repairs':n==='02'?'roof-replacement':'assessment-process','','demo-text-link')}");
  return s;
});
