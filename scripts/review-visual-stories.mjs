import fs from 'node:fs/promises';
import { chromium } from 'playwright-core';
const browser=await chromium.launch({headless:true,channel:'msedge'});
await fs.mkdir('artifacts/visual-stories',{recursive:true});
try {
 const page=await browser.newPage({reducedMotion:'reduce'});
 for(const width of [1440,390]){
  await page.setViewportSize({width,height:1000});
  for(const [label,route]of [['home','/'],['electric','/demos/current-electric/'],['plumbing','/demos/clearflow-plumbing/'],['roofing','/demos/ridgeline-roofing/'],['studio','/demos/form-studio/'],['restaurant','/demos/olive-and-ember/'],['electric-repairs','/demos/current-electric/repairs/'],['plumbing-drains','/demos/clearflow-plumbing/drains/'],['roof-replacement','/demos/ridgeline-roofing/roof-replacement/'],['studio-foundations','/demos/form-studio/foundations/'],['restaurant-private','/demos/olive-and-ember/private-dining/']]){
   await page.goto('http://127.0.0.1:4321'+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
   await page.screenshot({path:`artifacts/visual-stories/${label}-${width}.png`});
   if(label==='home'){
    await page.locator('[data-film-chapter="2"]').click();
    await page.locator('[data-film-theater]').screenshot({path:`artifacts/visual-stories/film-${width}.png`});
    await page.screenshot({path:`artifacts/visual-stories/full-home-${width}.png`,fullPage:true});
   }
  }
 }
}finally{await browser.close();}
