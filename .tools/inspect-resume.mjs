import fs from 'node:fs/promises';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});
await fs.mkdir('artifacts/resume',{recursive:true});
try {
  const page=await browser.newPage();
  for(const [name,url,width,height] of [['plumbing','/demos/clearflow-plumbing/',1440,1030],['roofing','/demos/ridgeline-roofing/',1440,1030],['plumbing-mobile','/demos/clearflow-plumbing/',390,844],['roofing-mobile','/demos/ridgeline-roofing/',390,844],['home','/',1440,1000],['home-mobile','/',390,844]]) {
    await page.setViewportSize({width,height});await page.goto('http://127.0.0.1:4321'+url,{waitUntil:'networkidle'});await page.evaluate(()=>document.fonts.ready);
    await page.screenshot({path:`artifacts/resume/${name}.png`,fullPage:true});
    console.log(name,await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth,text:document.body.innerText.match(/.{0,35}\bdemos?\b.{0,35}/gi)})));
  }
  const pages=JSON.parse(await fs.readFile('dist/route-manifest.json','utf8'));
  for(const p of pages) {
    const html=await fs.readFile(`dist${p.path}index.html`,'utf8');
    const text=html.replace(/<script[\s\S]*?<\/script>/g,'').replace(/<[^>]+>/g,' ');
    const matches=text.match(/.{0,35}\bdemos?\b.{0,35}/gi);
    if(matches)console.log('COPY',p.path,matches);
  }
} finally {await browser.close();}
