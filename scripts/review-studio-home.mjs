import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { chromium } from 'playwright-core';

const base = process.env.AUDIT_URL || 'http://127.0.0.1:4321';
const directory = 'artifacts/studio-home';
await fs.mkdir(directory, {recursive:true});
const browser = await chromium.launch({headless:true,channel:'msedge'});
const results = {layouts:[],accessibility:[],interactions:[]};
try {
  const page = await browser.newPage({reducedMotion:'reduce'});
  const errors = [];
  page.on('pageerror', error=>errors.push(error.message));
  for (const width of [1440,1024,800,768,600,390,320]) {
    await page.setViewportSize({width,height:1000});
    await page.goto(base+'/',{waitUntil:'networkidle'});
    await page.evaluate(()=>document.fonts.ready);
    assert.equal(await page.locator('h1').count(),1);
    assert(!/\$\s*\d|249/.test(await page.content()),'No homepage price in visible copy or metadata');
    assert.equal(await page.locator('.studio-review').count(),5);
    assert.equal(await page.locator('[data-customer-film]').count(),0);
    assert.equal(await page.locator('[data-studio-loop]').getAttribute('data-playing'),'false');
    for (let step=0; step<3; step++) {
      await page.locator(`[data-studio-step="${step}"]`).click();
      assert.equal(await page.locator('[data-studio-loop]').getAttribute('data-active'),String(step));
      assert(await page.locator('[data-studio-frame]').nth(step).evaluate(e=>!e.inert));
      assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),`Overflow at ${width}, frame ${step}`);
      if ([1440,390].includes(width)) {
        await page.addScriptTag({path:'artifacts/conversion/axe.min.js'});
        const accessibility = await page.evaluate(async()=>{
          const data=await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa']}});
          return data.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({target:n.target,summary:n.failureSummary}))}));
        });
        results.accessibility.push({width,step,violations:accessibility});
      }
    }
    await page.locator('[data-studio-step="0"]').click();
    await page.evaluate(()=>scrollTo(0,0));
    await page.screenshot({path:`${directory}/home-${width}.png`,fullPage:true});
    await page.screenshot({path:`${directory}/hero-${width}.png`});
    results.layouts.push({width,passed:true});
  }
  await page.setViewportSize({width:1440,height:1000});
  await page.goto(base+'/');
  for (const [label,selector] of [['services','#studio-services'],['work','#website-examples'],['depth','.studio-depth'],['process','#studio-process'],['reviews','#client-feedback'],['about','.studio-about'],['final','.studio-final']]) {
    await page.locator(selector).screenshot({path:`${directory}/${label}-1440.png`});
  }
  await page.setViewportSize({width:390,height:844});
  for (const [label,selector] of [['loop','[data-studio-loop]'],['reviews','#client-feedback'],['depth','.studio-depth']]) {
    await page.locator(selector).screenshot({path:`${directory}/${label}-390.png`});
  }
  await page.setViewportSize({width:1440,height:1000});
  await fs.writeFile(`${directory}/results.json`,JSON.stringify(results,null,2));
  await page.emulateMedia({reducedMotion:'no-preference'});
  await page.goto(base+'/');
  const loop = page.locator('[data-studio-loop]');
  await page.waitForFunction(()=>document.querySelector('[data-studio-loop]').dataset.playing==='true');
  for (const expected of ['1','2','0']) await page.waitForFunction(value=>document.querySelector('[data-studio-loop]').dataset.active===value,expected,{timeout:9000});
  await page.getByRole('button',{name:'Pause website animation'}).click();
  const paused = await loop.getAttribute('data-active');
  await page.waitForTimeout(700);
  assert.equal(await loop.getAttribute('data-active'),paused);
  assert.equal(await loop.getAttribute('data-playing'),'false');
  await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));
  await loop.scrollIntoViewIfNeeded();
  assert.equal(await loop.getAttribute('data-playing'),'false','Manual pause persists after scrolling');
  await page.getByRole('button',{name:'Resume website animation'}).focus();
  await page.keyboard.press('Enter');
  await page.waitForFunction(()=>document.querySelector('[data-studio-loop]').dataset.playing==='true');
  await page.evaluate(()=>scrollTo(0,document.body.scrollHeight));
  await page.waitForFunction(()=>document.querySelector('[data-studio-loop]').dataset.playing==='false');
  await loop.scrollIntoViewIfNeeded();
  await page.waitForFunction(()=>document.querySelector('[data-studio-loop]').dataset.playing==='true');
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.waitForFunction(()=>document.querySelector('[data-studio-loop]').dataset.playing==='false');
  assert(await page.getByRole('button',{name:'Pause website animation'}).isHidden());
  results.interactions.push('Autoplay, all three transitions, continuous wrap, keyboard pause/resume, persistent manual pause, offscreen suspension/resume, reduced motion');
  const noJS = await browser.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
  const fallback = await noJS.newPage();
  await fallback.goto(base+'/');
  assert.equal(await fallback.locator('.studio-review').count(),5);
  assert(await fallback.locator('[data-studio-frame]').first().isVisible());
  assert(await fallback.locator('[data-studio-controls]').isHidden());
  assert(await fallback.locator('.studio-static-note').isVisible());
  await fallback.locator('.mobile-nav summary').click();
  assert(await fallback.locator('.mobile-nav nav').isVisible());
  await noJS.close();
  results.interactions.push('Readable no-JavaScript preview, reviews, navigation and fallback');
  assert.deepEqual(errors,[]);
  await fs.writeFile(`${directory}/results.json`,JSON.stringify(results,null,2));
  const violations=results.accessibility.flatMap(r=>r.violations);
  console.log(JSON.stringify({layouts:results.layouts.length,accessibilityStates:results.accessibility.length,violations,interactions:results.interactions},null,2));
  assert.equal(violations.length,0,'Accessibility violations');
} finally { await browser.close(); }
