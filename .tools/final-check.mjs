import {createRequire} from 'node:module';
import assert from 'node:assert/strict';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});
try {
  const page=await browser.newPage({viewport:{width:390,height:844}});
  await page.goto('http://127.0.0.1:4321/',{waitUntil:'networkidle'});
  await page.locator('.scenario-section').scrollIntoViewIfNeeded();
  const skip=await page.locator('.skip-link').evaluate(e=>({top:e.getBoundingClientRect().top,bottom:e.getBoundingClientRect().bottom,focused:e===document.activeElement}));
  assert(skip.bottom<0&&!skip.focused,'Skip link should stay outside the viewport until focused.');
  await page.locator('.skip-link').focus();assert.equal(await page.locator('.skip-link').evaluate(e=>e.getBoundingClientRect().top),16);
  console.log('Skip link is hidden while browsing and visible on keyboard focus; the section capture overlay was a screenshot artifact.');
} finally {await browser.close();}
