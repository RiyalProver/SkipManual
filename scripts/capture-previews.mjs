import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
import { examples } from '../src/data/examples.mjs';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
const browser=await chromium.launch({headless:true,...(process.env.BROWSER_PATH?{executablePath:process.env.BROWSER_PATH}:{channel:'msedge'})});
await fs.mkdir('public/images/examples',{recursive:true});
await fs.mkdir('artifacts/demo-review',{recursive:true});
try {
  const page=await browser.newPage();
  for(const e of examples) {
    for(const [device,width,height] of [['desktop',1440,1030],['mobile',390,844]]) {
      await page.setViewportSize({width,height});
      await page.goto(`http://127.0.0.1:4321/demos/${e.slug}/`,{waitUntil:'networkidle'});
      await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(async image=>{image.loading='eager';await image.decode();}));});
      await page.screenshot({path:`artifacts/demo-review/${e.slug}-${device}-full.png`,fullPage:true});
      // The surrounding agency notice is omitted from the thumbnail only. It stays on every live demo page.
      await page.locator('.demo-banner').evaluate(e=>{e.style.display='none';});
      const screenshot=await page.screenshot();
      const webp=await page.evaluate(async data=>{
        const picture=new Image();picture.src=`data:image/png;base64,${data}`;await picture.decode();
        const canvas=document.createElement('canvas');canvas.width=picture.naturalWidth;canvas.height=picture.naturalHeight;
        canvas.getContext('2d').drawImage(picture,0,0);
        return canvas.toDataURL('image/webp',.86).split(',')[1];
      },screenshot.toString('base64'));
      await fs.writeFile(`public/images/examples/${e.slug}-${device}.webp`,Buffer.from(webp,'base64'));
    }
    console.log(`Captured the actual ${e.name} website at desktop and mobile sizes.`);
  }
} finally {await browser.close();}
