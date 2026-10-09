import fs from 'node:fs/promises';
import { chromium } from 'playwright-core';
const browser = await chromium.launch({headless:true,channel:'msedge'});
await fs.mkdir('artifacts/references',{recursive:true});
try {
  await Promise.all([
    ['magic','https://www.themagicteam.com/'],
    ['beacon','https://www.beaconplumbing.com/'],
    ['roofing','https://www.idahoroofingcontractors.com/'],
    ['stone','https://stonesystems.io/'],
  ].map(async([name,url])=>{
    const page=await browser.newPage({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
    try {
      await page.goto(url,{waitUntil:'domcontentloaded',timeout:30000});
      await page.waitForTimeout(2500);
      await page.screenshot({path:`artifacts/references/${name}.png`});
      const content=await page.evaluate(()=>({title:document.title,headings:[...document.querySelectorAll('h1,h2')].slice(0,16).map(e=>e.textContent.trim()),images:[...document.images].slice(0,12).map(e=>({src:e.currentSrc,alt:e.alt})),colors:[...document.querySelectorAll('header,h1,h2,a[class*="button"]')].slice(0,16).map(e=>({tag:e.tagName,color:getComputedStyle(e).color,bg:getComputedStyle(e).backgroundColor,font:getComputedStyle(e).fontFamily}))}));
      await fs.writeFile(`artifacts/references/${name}.json`,JSON.stringify(content,null,2));
      console.log(name,content.title,content.headings.slice(0,5));
    } catch(error) { console.log(name,error.message); }
    finally { await page.close(); }
  }));
} finally {await browser.close();}
