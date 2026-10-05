import fs from 'node:fs/promises';
const file='src/data/examples.mjs';
const source=await fs.readFile(file,'utf8');
const blocks=[...source.matchAll(/^  \{\r?\n[\s\S]*?^  \},\r?$/gm)];
const order=['current-electric','ridgeline-roofing','clearflow-plumbing','form-studio','olive-and-ember'];
if(blocks.length!==order.length)throw new Error('Unexpected example structure');
const sorted=order.map((slug,index)=>{
 const block=blocks.find(match=>match[0].includes(`slug: '${slug}'`));
 if(!block)throw new Error(`Missing example: ${slug}`);
 return block[0].replace(/number: '\d{2}'/,`number: '${String(index+1).padStart(2,'0')}'`).replace(/\r$/, '');
}).join('\n');
const last=blocks.at(-1);
await fs.writeFile(file,source.slice(0,blocks[0].index)+sorted+source.slice(last.index+last[0].length));
const replacements=[
 ['scripts/build.mjs','${e.name} — ${e.category}','${e.name} | ${e.category}'],
 ['src/pages/demos.mjs','${title} — ${e.name}','${title} | ${e.name}'],
 ['src/scripts/client.js','Website inquiry — ${data.business}','Website inquiry: ${data.business}'],
 ['src/pages/agency.mjs','decisions that help your customers—not a list of features they don’t need.','decisions that help your customers find what they need.'],
 ['src/data/example-content.mjs',' — ',': '],
 ['src/pages/agency-redesign.mjs','<a class="mosaic-food" href="/demos/olive-and-ember/">${photo(\'gathering\')}<span>Restaurants & cafés','<a class="mosaic-roofing" href="/demos/ridgeline-roofing/">${photo(\'roofing\')}<span>Roofing businesses'],
 ['src/pages/agency-redesign.mjs','<a class="mosaic-studio" href="/demos/form-studio/">${photo(\'pilates\')}<span>Studios & local services','<a class="mosaic-plumbing" href="/demos/clearflow-plumbing/">${photo(\'plumbing\')}<span>Plumbing businesses'],
];
for(const [file,before,after] of replacements){
 const text=await fs.readFile(file,'utf8');
 if(!text.includes(before))throw new Error(`Missing replacement in ${file}`);
 await fs.writeFile(file,text.replaceAll(before,after));
}
console.log('Reordered all shared example collections and homepage photo links; removed em dashes from website copy and metadata.');
