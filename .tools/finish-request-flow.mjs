import fs from 'node:fs/promises';
async function replace(file,before,after,count=1){
 const text=await fs.readFile(file,'utf8');
 if(text.split(before).length-1!==count)throw new Error(`Unexpected match count in ${file}: ${before}`);
 await fs.writeFile(file,text.replaceAll(before,after));
}
await replace('src/data/example-content.mjs',"context:'Help me choose'","context:'Private session'");
await replace('src/pages/agency-redesign.mjs','<form class="inquiry-form simple-inquiry"','<form id="inquiry" class="inquiry-form simple-inquiry" tabindex="-1"');
await replace('src/components/ui.mjs','export function header(path) {','export function header(path) {\n  const bookingTarget=path===\'/book/\'?\'#inquiry\':\'/book/\';');
await replace('src/components/ui.mjs',"button('Book a call','/book/')","button('Book a call',bookingTarget)",2);
await replace('src/components/ui.mjs','<a href="/book/">Book a call ${icon(\'arrow\')}</a>','<a href="${path===\'/book/\'?\'#inquiry\':\'/book/\'}">Book a call ${icon(\'arrow\')}</a>');
console.log('Updated request links, form anchors, and supported request choices.');
