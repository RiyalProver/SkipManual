import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});
await fs.mkdir('artifacts/resume',{recursive:true});
try {
  const page=await browser.newPage();
  const routes=JSON.parse(await fs.readFile('dist/route-manifest.json','utf8')).filter(r=>r.path.includes('/demos/clearflow')||r.path.includes('/demos/ridgeline')||['/','/services/','/pricing/','/examples/'].includes(r.path));
  for(const width of [1440,390]) {
    for(const route of routes) {
      await page.setViewportSize({width,height:1000});await page.goto('http://127.0.0.1:4321'+route.path,{waitUntil:'networkidle'});
      await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(async image=>{image.loading='eager';await image.decode();}));});
      await page.screenshot({path:`artifacts/resume/${route.path.replaceAll('/','_')}-${width}.png`,fullPage:true});
      if(route.path==='/') {
        for(const name of ['home-hero','package-overview','scenario-section','work-section'])await page.locator(`.${name}`).screenshot({path:`artifacts/resume/${name}-${width}.png`});
      }
    }
    console.log(`Captured ${routes.length} updated pages at ${width}px.`);
  }
} finally {await browser.close();}
