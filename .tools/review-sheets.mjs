import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});
try {
  const page=await browser.newPage();
  const routes=JSON.parse(await fs.readFile('dist/route-manifest.json','utf8'));
  const groups=[['agency',routes.filter(r=>!r.demo)],...['olive-and-ember','current-electric','form-studio','clearflow-plumbing','ridgeline-roofing'].map(slug=>[slug,routes.filter(r=>r.path.includes('/demos/'+slug+'/'))])];
  await fs.mkdir('artifacts/review-sheets',{recursive:true});
  for(const [name,group] of groups) for(const width of [1440,390]) {
    const pictures=await Promise.all(group.map(async r=>({label:r.path,src:'data:image/png;base64,'+(await fs.readFile(`artifacts/page-review/${r.path.replaceAll('/','_')}-${width}.png`)).toString('base64')})));
    const data=await page.evaluate(async({pictures,width})=>{
      const cellWidth=360,cellHeight=width===390?1060:930,columns=5;
      const canvas=document.createElement('canvas');canvas.width=columns*cellWidth;canvas.height=Math.ceil(pictures.length/columns)*cellHeight;
      const ctx=canvas.getContext('2d');ctx.fillStyle='#dde2e5';ctx.fillRect(0,0,canvas.width,canvas.height);
      for(const [i,p] of pictures.entries()) {
        const img=new Image();img.src=p.src;await img.decode();
        const x=(i%columns)*cellWidth,y=Math.floor(i/columns)*cellHeight;
        ctx.fillStyle='#131e26';ctx.font='12px Arial';ctx.fillText(p.label.replace('/demos/',''),x+8,y+17,cellWidth-16);
        const shownHeight=Math.min(img.height,width===390?1120:1750);
        const topHeight=shownHeight*(cellWidth-16)/width;
        ctx.drawImage(img,0,0,width,shownHeight,x+8,y+30,cellWidth-16,topHeight);
        const overviewHeight=cellHeight-topHeight-50;
        const overviewWidth=overviewHeight*width/img.height;
        ctx.drawImage(img,x+8,y+topHeight+40,overviewWidth,overviewHeight);
      }
      return canvas.toDataURL('image/png').split(',')[1];
    },{pictures,width});
    await fs.writeFile(`artifacts/review-sheets/${name}-${width}.png`,Buffer.from(data,'base64'));
  }
  console.log('Created desktop and mobile visual review sheets for every page.');
}finally{await browser.close();}
