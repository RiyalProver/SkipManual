import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
const browser=await chromium.launch({headless:true,...(process.env.BROWSER_PATH?{executablePath:process.env.BROWSER_PATH}:{channel:'msedge'})});
const routes=JSON.parse(await fs.readFile('dist/route-manifest.json','utf8'));
await fs.mkdir('artifacts/page-review',{recursive:true});
try{
 const page=await browser.newPage();
 for(const width of [1440,768,390]){
   for(const route of routes){
     await page.setViewportSize({width,height:900});
     await page.goto(`http://127.0.0.1:4321${route.path}`,{waitUntil:'networkidle'});
     await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(async image=>{image.loading='eager';try{await image.decode();}catch{}}));});
     await page.screenshot({path:`artifacts/page-review/${route.path.replaceAll('/','_')||'home'}-${width}.png`,fullPage:true});
   }
   console.log(`Captured ${routes.length} pages at ${width}px for visual review.`);
 }
}finally{await browser.close();}
