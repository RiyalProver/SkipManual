import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const dist=path.join(root,'dist');
const port=Number(process.env.PORT || 4321);
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.jpg':'image/jpeg','.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf','.txt':'text/plain; charset=utf-8','.xml':'application/xml'};
const server=http.createServer((req,res)=>{
  if(!['GET','HEAD'].includes(req.method)) { res.writeHead(405,{'Allow':'GET, HEAD'});res.end();return; }
  let pathname;
  try {pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);} catch {res.writeHead(400);res.end();return;}
  let target=path.resolve(dist,`.${pathname}`);
  if(target!==dist&&!target.startsWith(dist+path.sep)) {res.writeHead(403);res.end();return;}
  if(fs.existsSync(target)&&fs.statSync(target).isDirectory()) {
    if(!pathname.endsWith('/')) {res.writeHead(301,{Location:pathname+'/'});res.end();return;}
    target=path.join(target,'index.html');
  }
  const found=fs.existsSync(target)&&fs.statSync(target).isFile();
  if(!found) target=path.join(dist,'404.html');
  res.writeHead(found?200:404,{'Content-Type':mime[path.extname(target)]||'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
  if(req.method==='HEAD') {res.end();return;}
  fs.createReadStream(target).on('error',()=>res.end('Build the site with npm run build.')).pipe(res);
});
server.listen(port,'127.0.0.1',()=>console.log(`SkipManual is running at http://localhost:${port}`));
if(process.argv.includes('--watch')) {
  let timer,building=false,pending=false;
  const rebuild=()=>{
    if(building) {pending=true;return;}
    building=true;
    const child=spawn(process.execPath,['scripts/build.mjs'],{cwd:root,stdio:'inherit',windowsHide:true});
    child.on('exit',()=>{building=false;if(pending){pending=false;rebuild();}});
  };
  for(const dir of ['src','public']) fs.watch(path.join(root,dir),{recursive:true},()=>{clearTimeout(timer);timer=setTimeout(rebuild,160);});
}
