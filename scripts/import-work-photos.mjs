import fs from 'node:fs/promises';
import { chromium } from 'playwright-core';
const selected=[
 ['plumbing-sink-work','plumbing-final-21','A plumber fitting a white drain trap beneath a bathroom sink'],
 ['water-heater-repair','plumbing-final-22','Close-up of a technician working on connections beneath an electric water heater'],
 ['drain-inspection','plumbing-final-30','A technician feeding an inspection camera into a drain and checking the monitor'],
 ['roof-crew','roof-detail-1','A roofing crew replacing shingles on a tornado-damaged home in Oklahoma'],
 ['roof-repair','roof-fema-8','A roofer fastening underlayment on a residential roof in Oklahoma'],
 ['roof-shingles','roof-install-3','A roofer fastening asphalt shingles over the roof underlayment'],
 ['roof-tiles','roof-install-10','A roofer fitting interlocking tiles over exposed timber battens'],
 ['roof-tile-work','roof-install-8','Roofers working around a roof window during tile installation'],
 ['roof-metal','roofers-9','A worker on a standing-seam metal roof at a rural property'],
 ['electrical-panel','electric-work-8','An electrician working inside an open electrical control panel'],
 ['electrical-connection','electric-work-6','An electrician connecting a generator to a home electrical panel'],
 ['lighting-install','light-install-1','An electrician replacing a ceiling light ballast during a lighting retrofit'],
 ['plumber-pipes','plumbing-work-2','A plumber adjusting white supply pipework during an installation'],
 ['plumbing-repair','plumber-2','A plumber working on a water connection in an unfinished apartment'],
 ['sink-repair','plumbing-work-5','A plumber tightening a pipe connection beneath a bathroom sink'],
 ['water-heater-install','water-heater-1','Two installed commercial water heaters with copper pipework and expansion tanks'],
 ['drain-lining','plumbing-work-1','Resin-coated lining being prepared for a trenchless sewer repair'],
 ['pilates-reformer','pilates-3','A person practicing Pilates on a reformer beside large studio windows'],
 ['pilates-equipment','pilates-2','Rows of Pilates reformers in a bright training studio'],
 ['kitchen-prep','chef-4','A chef preparing red onions at a kitchen counter'],
];
const catalog=[...JSON.parse(await fs.readFile('artifacts/work-photos/catalog.json','utf8')),...JSON.parse(await fs.readFile('artifacts/work-photos/light-install.json','utf8')),...JSON.parse(await fs.readFile('artifacts/work-photos/plumbing-final.json','utf8'))];
const dimensions=JSON.parse(await fs.readFile('src/data/photo-dimensions.json','utf8'));
const browser=await chromium.launch({headless:true,channel:'msedge'});
const credits=[];
try {
 const page=await browser.newPage();
 for(const [name,id,alt] of selected){
  const source=catalog.find(x=>x.id===id);
  const data=(await fs.readFile(`artifacts/work-photos/${id}.jpg`)).toString('base64');
  const result=await page.evaluate(async({data,credit})=>{
   const img=new Image();img.src=`data:image/jpeg;base64,${data}`;await img.decode();
   const variants={};const full=Math.min(1920,img.width);
   for(const width of [...new Set([640,960,full])]){const c=document.createElement('canvas');c.width=width;c.height=Math.round(width*img.height/img.width);c.getContext('2d').drawImage(img,0,0,c.width,c.height);variants[width]=c.toDataURL('image/webp',.86).split(',')[1];}
   const doc=new DOMParser().parseFromString(credit||'See source page','text/html');
   return {width:full,height:Math.round(full*img.height/img.width),variants,author:doc.body.textContent.trim()};
  },{data,credit:source.credit});
  for(const [width,encoded]of Object.entries(result.variants)){await fs.writeFile(`public/images/${name}${Number(width)===result.width?'':'-'+width}.webp`,Buffer.from(encoded,'base64'));}
  // Keep responsive filenames present even when the source itself is 960px wide.
  for(const width of [640,960])if(Number(width)===result.width)await fs.copyFile(`public/images/${name}.webp`,`public/images/${name}-${width}.webp`);
  dimensions[name]={width:result.width,height:result.height};
  credits.push({name,alt,title:source.title.replace(/^File:/,''),author:result.author,source:source.page,license:source.license,licenseUrl:source.licenseUrl||'https://creativecommons.org/publicdomain/mark/1.0/',changes:'Resized, converted to WebP, and cropped to fit layouts.'});
 }
 await fs.writeFile('src/data/work-photos.json',JSON.stringify(credits,null,2));
 await fs.writeFile('src/data/photo-dimensions.json',JSON.stringify(dimensions,null,2));
 console.log(`Imported ${credits.length} inspected photographs with source credits and responsive variants.`);
}finally{await browser.close();}
