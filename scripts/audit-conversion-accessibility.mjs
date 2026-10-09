import fs from 'node:fs/promises';
import { chromium } from 'playwright-core';
const browser=await chromium.launch({headless:true,channel:'msedge'});
const base=process.env.AUDIT_URL||'http://127.0.0.1:4321';
const results=[];
try {
  const page=await browser.newPage({reducedMotion:'reduce'});
  const check=async(label)=>{
    const result=await page.evaluate(async()=>await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']}}));
    const violations=result.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>({target:n.target,html:n.html,summary:n.failureSummary}))}));
    results.push({label,violations,incomplete:result.incomplete.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))});
    console.log(label,JSON.stringify(violations.map(v=>({id:v.id,count:v.nodes.length,samples:v.nodes.slice(0,5).map(n=>n.target)}))));
  };
  for(const width of [1440,390]){
    await page.setViewportSize({width,height:1000});
    for(const route of ['/','/services/','/examples/','/contact/','/demos/current-electric/','/demos/clearflow-plumbing/','/demos/ridgeline-roofing/','/demos/current-electric/lighting/','/demos/form-studio/','/demos/clearflow-plumbing/water-heaters/','/services/review-requests/','/demos/current-electric/repairs/','/demos/clearflow-plumbing/drains/','/demos/ridgeline-roofing/roof-replacement/','/demos/form-studio/foundations/','/demos/olive-and-ember/private-dining/']){
      await page.goto(base+route,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
      await page.addScriptTag({path:'artifacts/conversion/axe.min.js'});
      await check(`${width} ${route}`);
      if(route==='/'){
        await page.screenshot({path:`artifacts/conversion/home-${width}-viewport.png`});
        for(const choice of ['missed-call','roof-inquiry','review','getting-started']){
          await page.locator('[data-journey="'+choice+'"]').click();
          for(let i=0;i<6;i++){
            await page.locator('[data-film-chapter="'+i+'"]').click();
            await check(width+' story:'+choice+' chapter:'+i);
          }
        }
      }
    }
  }
  await fs.writeFile('artifacts/conversion/accessibility.json',JSON.stringify(results,null,2));
  if(results.some(r=>r.violations.length))process.exitCode=1;
} finally {await browser.close();}
