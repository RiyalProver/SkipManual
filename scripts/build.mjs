import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
try { process.loadEnvFile(path.join(root,'.env')); } catch (e) { if (e.code !== 'ENOENT') throw e; }
const { site } = await import('../src/data/site.mjs');
const { examples } = await import('../src/data/examples.mjs');
const { layout } = await import('../src/components/ui.mjs');
const { agencyPages, exampleDetail } = await import('../src/pages/agency.mjs');
const { demoPages } = await import('../src/pages/demos.mjs');

if (site.url) {
  const url = new URL(site.url);
  if (!['http:','https:'].includes(url.protocol) || url.pathname !== '/' || url.search || url.hash) throw new Error('PUBLIC_SITE_URL must be an HTTP(S) origin, without a path, query, or fragment.');
}
if (site.contactEndpoint && !/^https?:\/\//.test(site.contactEndpoint) && !site.contactEndpoint.startsWith('/')) throw new Error('Contact endpoint must be an HTTP(S) URL or same-origin path.');
if (site.email && !/^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(site.email)) throw new Error('PUBLIC_CONTACT_EMAIL must be a valid, verified email address.');

if(site.bookingUrl) { const booking=new URL(site.bookingUrl); if(booking.protocol!=='https:'||booking.username||booking.password)throw new Error('PUBLIC_BOOKING_URL must be a verified HTTPS booking URL.'); }
const dist = path.join(root,'dist');
// Only replace this generated directory, after verifying its resolved location.
if(dist!==path.resolve(root,'dist')||!dist.startsWith(root+path.sep))throw new Error('Unsafe build output location.');
const previous=await fs.lstat(dist).catch(error=>{if(error.code!=='ENOENT')throw error;return null;});
if(previous?.isSymbolicLink())throw new Error('Build output may not be a symbolic link.');
await fs.rm(dist,{recursive:true,force:true});
await fs.mkdir(dist,{recursive:true});
await fs.cp(path.join(root,'public'),dist,{recursive:true,filter:source=>!source.endsWith('-source.jpg')&&!source.endsWith('.ttf')});
await fs.cp(path.join(root,'src/styles'),path.join(dist,'styles'),{recursive:true});
await fs.cp(path.join(root,'src/scripts'),path.join(dist,'scripts'),{recursive:true});
const pages = [...agencyPages,...examples.map(e=>({path:`/examples/${e.slug}/`,title:`${e.name} | ${e.category} Website Concept | SkipManual`,description:`Explore ${e.name}, an original ${e.category.toLowerCase()} example website by SkipManual. See the design approach, useful features, and the complete fictional website.`,render:()=>exampleDetail(e)})),...demoPages()];
for (const page of pages) {
  const out = path.join(dist,page.path,'index.html');
  await fs.mkdir(path.dirname(out),{recursive:true});
  const html = layout({...page,content:page.render()});
  await fs.writeFile(out,html);
  if(page.path==='/404/') await fs.writeFile(path.join(dist,'404.html'),html);
}
await fs.writeFile(path.join(dist,'route-manifest.json'),JSON.stringify(pages.map(({path,title,demo,noindex})=>({path,title,demo:!!demo,noindex:!!noindex})),null,2));
// Demo pages are crawlable so search engines can read their noindex directive.
const robots = `User-agent: *\nAllow: /\n${site.url ? `Sitemap: ${new URL('/sitemap.xml',site.url).href}\n` : ''}`;
await fs.writeFile(path.join(dist,'robots.txt'),robots);
if (site.url) {
  const urls=pages.filter(p=>!p.demo&&!p.noindex).map(p=>`<url><loc>${new URL(p.path,site.url).href.replaceAll('&','&amp;')}</loc></url>`).join('');
  await fs.writeFile(path.join(dist,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`);
} else {
  await fs.rm(path.join(dist,'sitemap.xml'),{force:true});
}
console.log(`Built ${pages.length} static pages in dist/. No production dependencies or client framework.`);
if(!site.url) console.log('Public origin is unconfigured: canonical URLs and sitemap will be generated when PUBLIC_SITE_URL is set.');
if(!site.contactEndpoint&&!site.email) console.log('Contact is in honest brief-only mode. Set a verified contact email or endpoint to enable inquiries.');
