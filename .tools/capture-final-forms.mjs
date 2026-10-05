import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});
try {
 const page=await browser.newPage({viewport:{width:390,height:844}});
 await fs.mkdir('artifacts/final-review',{recursive:true});
 for(const [name,route,selector] of [
   ['booking','/book/?interest=reviews','#inquiry'],
   ['restaurant','/demos/olive-and-ember/book-a-table/?occasion=Private%20dining','#demo-request'],
   ['electrical','/demos/current-electric/request-a-quote/?service=Lighting%20%26%20upgrades','#demo-request'],
   ['studio','/demos/form-studio/find-your-class/?class=Private%20session','#demo-request'],
   ['plumbing','/demos/clearflow-plumbing/request-a-visit/?service=Water%20heaters','#demo-request'],
   ['roofing','/demos/ridgeline-roofing/request-an-assessment/?service=Roof%20replacement','#demo-request'],
 ]) {
   await page.goto('http://127.0.0.1:4321'+route,{waitUntil:'networkidle'});
   await page.evaluate(()=>document.fonts.ready);
   await page.locator(selector).screenshot({path:`artifacts/final-review/${name}-form-mobile.png`});
 }
 console.log('Refreshed all six mobile request-form screenshots.');
}finally{await browser.close();}
