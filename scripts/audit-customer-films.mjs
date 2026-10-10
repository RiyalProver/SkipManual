import fs from 'node:fs/promises';
import assert from 'node:assert/strict';
import { chromium } from 'playwright-core';
const browser=await chromium.launch({headless:true,channel:'msedge'});
const base=process.env.AUDIT_URL||'http://127.0.0.1:4321';
await fs.mkdir('artifacts/visual-stories',{recursive:true});
const checks=[];
try {
 const page=await browser.newPage({viewport:{width:1440,height:1000}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto(base+'/services/');
 const film=page.locator('[data-customer-film]'),theater=page.locator('[data-film-theater]');
 const seek=page.locator('[data-film-seek]'),play=page.locator('[data-film-play]');
 await theater.scrollIntoViewIfNeeded();
 await page.waitForFunction(()=>document.querySelector('[data-customer-film]').dataset.playing==='true');
 await page.waitForTimeout(400);assert(Number(await seek.inputValue())>0,'Visible player starts automatically');
 await play.focus();await page.keyboard.press('Enter');
 assert.equal(await film.getAttribute('data-playing'),'false');
 const paused=Number(await seek.inputValue());await page.waitForTimeout(350);assert.equal(Number(await seek.inputValue()),paused);
 await seek.evaluate(e=>{e.value='6.7';e.dispatchEvent(new Event('input',{bubbles:true}));});
 await play.click();await page.waitForTimeout(650);assert(await page.locator('[data-film-journey]:visible [data-film-scene="1"]').isVisible(),'Playback crosses chapter boundaries');
 await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(200);assert.equal(await film.getAttribute('data-playing'),'false','Leaving the player pauses it');
 await theater.scrollIntoViewIfNeeded();await page.waitForFunction(()=>document.querySelector('[data-customer-film]').dataset.playing==='true');
 await seek.evaluate(e=>{e.value='41.8';e.dispatchEvent(new Event('input',{bubbles:true}));});await play.click();await page.waitForTimeout(550);
 assert(Number(await seek.inputValue())<1,'The story loops without a replay click');assert.equal(await play.getAttribute('aria-label'),'Pause animation');
 await play.click();
 await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));await page.waitForTimeout(150);await theater.scrollIntoViewIfNeeded();
 assert.equal(await film.getAttribute('data-playing'),'false','Explicit pause persists after scrolling');
 await page.locator('[data-film-replay]').click();await page.waitForTimeout(120);assert(Number(await seek.inputValue())<1,'Replay starts at the beginning');await play.click();
 await page.locator('[data-film-expand]').click();assert(await page.evaluate(()=>!!document.fullscreenElement));await page.evaluate(()=>document.exitFullscreen());
 checks.push('Automatic looping, keyboard pause, stable paused clock, chapter transitions, offscreen pause/resume, persistent manual pause, replay, fullscreen');
 await page.emulateMedia({reducedMotion:'reduce'});
 for(const width of [1440,768,390,320]){
  await page.setViewportSize({width,height:1000});await page.goto(base+'/services/');
  await theater.scrollIntoViewIfNeeded();assert.equal(await film.getAttribute('data-playing'),'false','Reduced motion never autoplays');
  for(const id of ['missed-call','roof-inquiry','review','getting-started']){
   await page.locator(`[data-journey="${id}"]`).click();
   assert.equal(await page.locator('[data-film-journey]:visible').count(),1);
   for(let i=0;i<6;i++){
    const chapter=page.locator(`[data-film-chapter="${i}"]`);await chapter.focus();await page.keyboard.press('Enter');
    assert.equal(await page.locator('[data-film-scene]:visible').count(),1);
    const scene=page.locator(`[data-film-journey="${id}"] [data-film-scene="${i}"]`);
    assert(await scene.isVisible());assert.equal(await scene.locator('.is-upcoming').count(),0,'Each paused chapter shows its full example');
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+1),false,`${id} chapter ${i} overflow at ${width}`);
    const clipped=await scene.locator('.film-visual').evaluate(e=>e.scrollWidth>e.clientWidth+1);assert(!clipped,'Illustration does not clip horizontally');
    if([1440,390].includes(width)&&[2,5].includes(i))await theater.screenshot({path:`artifacts/visual-stories/${id}-${i}-${width}.png`});
   }
  }
  checks.push(`All 24 chapters at ${width}px; keyboard selection; one visible scene; no overflow`);
 }
 await page.goto(base+'/how-it-works/');assert.equal(await page.locator('[data-journey="getting-started"]').getAttribute('aria-pressed'),'true');
 await page.goto(base+'/services/review-requests/');assert.equal(await page.locator('[data-journey="review"]').getAttribute('aria-pressed'),'true');
 const noJS=await browser.newContext({javaScriptEnabled:false});const fallback=await noJS.newPage();await fallback.goto(base+'/services/');
 assert.equal(await fallback.locator('[data-film-play]:visible').count(),0);await fallback.locator('.film-transcript summary').click();assert.equal(await fallback.locator('.film-transcript li:visible').count(),24);
 for(const [route,story] of [['/how-it-works/','getting-started'],['/services/review-requests/','review']]){
  await fallback.goto(base+route);
  assert.equal(await fallback.locator('[data-film-journey]:visible').getAttribute('data-film-journey'),story,'The relevant service story remains visible without JavaScript');
 }
 await noJS.close();
 assert.deepEqual(errors,[]);checks.push('Relevant initial story on service/setup pages; all transcripts work without JavaScript; no browser errors');
 await fs.writeFile('artifacts/visual-stories/interaction-results.json',JSON.stringify({passed:true,checks},null,2));console.log(checks.join('\n'));
}finally{await browser.close();}
