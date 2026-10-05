import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});
await fs.mkdir('artifacts/redesign',{recursive:true});
try {
 const page=await browser.newPage();
 const routes=['/','/services/','/book/','/how-it-works/','/demos/olive-and-ember/','/demos/current-electric/repairs/','/demos/form-studio/gallery/','/demos/ridgeline-roofing/roof-replacement/'];
 for(const width of [1440,390]) {
  for(const route of routes){
   await page.setViewportSize({width,height:1000});await page.goto('http://127.0.0.1:4321'+route,{waitUntil:'networkidle'});await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].filter(i=>i.hasAttribute('src')).map(async i=>{i.loading='eager';try{await i.decode();}catch{}}));});
   await page.screenshot({path:`artifacts/redesign/${route.replaceAll('/','_')}-${width}.png`,fullPage:true});
   console.log(width,route,await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,errors:[...document.images].filter(i=>i.hasAttribute('src')&&!i.naturalWidth).map(i=>i.src)})));
   if(route==='/')await page.screenshot({path:`artifacts/redesign/hero-${width}.png`});
  }
 }
}finally{await browser.close();}
