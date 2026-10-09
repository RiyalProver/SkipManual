import fs from 'node:fs/promises';
import { chromium } from 'playwright-core';
const browser=await chromium.launch({headless:true,channel:'msedge'});
try {
 const page=await browser.newPage({viewport:{width:1600,height:1000}});
 const files=(await fs.readdir('artifacts/work-photos')).filter(f=>f.endsWith('.jpg'));
 const tiles=[];
 for(const file of files){const data=(await fs.readFile(`artifacts/work-photos/${file}`)).toString('base64');tiles.push(`<figure><img src="data:image/jpeg;base64,${data}"><figcaption>${file}</figcaption></figure>`);}
 await page.setContent(`<style>body{margin:20px;font:18px Arial;background:white}main{display:grid;grid-template-columns:repeat(4,1fr);gap:20px}figure{margin:0}img{width:100%;height:240px;object-fit:contain;background:#eee}figcaption{padding:10px}</style><main>${tiles.join('')}</main>`);
 await page.evaluate(()=>Promise.all([...document.images].map(x=>x.decode())));
 await page.screenshot({path:'artifacts/work-photos/contact-sheet.jpg',fullPage:true});
}finally{await browser.close();}
