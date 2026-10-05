import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
import {photoLibrary} from '../src/data/example-content.mjs';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright-core');
const browser=await chromium.launch({headless:true,...(process.env.BROWSER_PATH?{executablePath:process.env.BROWSER_PATH}:{channel:'msedge'})});
await fs.mkdir('artifacts/redesign',{recursive:true});
try {
  const page=await browser.newPage({viewport:{width:1300,height:1200}});const tiles=[];const dimensions={};
  for(const [name,[alt]] of Object.entries(photoLibrary)) {
    const data=(await fs.readFile(`public/images/${name}.webp`)).toString('base64');
    const result=await page.evaluate(async({data})=>{
      const picture=new Image();picture.src=`data:image/webp;base64,${data}`;await picture.decode();
      const variants={};for(const width of [640,960]){const canvas=document.createElement('canvas');canvas.width=width;canvas.height=Math.round(picture.height*width/picture.width);canvas.getContext('2d').drawImage(picture,0,0,canvas.width,canvas.height);variants[width]=canvas.toDataURL('image/webp',.8).split(',')[1];}
      return {width:picture.width,height:picture.height,variants};
    },{data});
    dimensions[name]={width:result.width,height:result.height};
    for(const [size,encoded] of Object.entries(result.variants))await fs.writeFile(`public/images/${name}-${size}.webp`,Buffer.from(encoded,'base64'));
    tiles.push(`<figure><img src="data:image/webp;base64,${result.variants[640]}" alt="${alt}"><figcaption>${name}</figcaption></figure>`);
  }
  await fs.writeFile('src/data/photo-dimensions.json',JSON.stringify(dimensions,null,2));
  await page.setContent(`<style>body{margin:20px;font:16px Arial;background:#fff}main{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}figure{margin:0}img{width:100%;height:170px;object-fit:cover}figcaption{padding:8px}</style><main>${tiles.join('')}</main>`);
  await page.screenshot({path:'artifacts/redesign/photo-contact-sheet.png',fullPage:true});
  console.log(`Prepared responsive images for ${tiles.length} photographs.`);
}finally{await browser.close();}
