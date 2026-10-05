// Lossless OpenType -> WOFF packaging using the WOFF 1.0 table format.
// WOFF is supported by all current browsers and avoids a font-tooling dependency.
import fs from 'node:fs/promises';
import { deflateSync } from 'node:zlib';
for(const name of ['dm-sans','cormorant-garamond']) {
  const source=await fs.readFile(`public/fonts/${name}.ttf`);
  const count=source.readUInt16BE(4);
  const padded=value=>(value+3)&~3;
  let offset=44+20*count;
  const tables=[];
  for(let i=0;i<count;i++) {
    const entry=12+i*16;
    const original=source.subarray(source.readUInt32BE(entry+8),source.readUInt32BE(entry+8)+source.readUInt32BE(entry+12));
    const compressed=deflateSync(original,{level:9});
    const data=compressed.length<original.length?compressed:original;
    tables.push({tag:source.subarray(entry,entry+4),checksum:source.readUInt32BE(entry+4),originalLength:original.length,data,offset});
    offset+=padded(data.length);
  }
  const woff=Buffer.alloc(offset);
  woff.write('wOFF',0);source.copy(woff,4,0,4);woff.writeUInt32BE(offset,8);woff.writeUInt16BE(count,12);
  woff.writeUInt32BE(12+16*count+tables.reduce((sum,t)=>sum+padded(t.originalLength),0),16);
  woff.writeUInt16BE(1,20);
  for(const [i,table] of tables.entries()) {
    const directory=44+i*20;
    table.tag.copy(woff,directory);woff.writeUInt32BE(table.offset,directory+4);woff.writeUInt32BE(table.data.length,directory+8);
    woff.writeUInt32BE(table.originalLength,directory+12);woff.writeUInt32BE(table.checksum,directory+16);table.data.copy(woff,table.offset);
  }
  await fs.writeFile(`public/fonts/${name}.woff`,woff);
  console.log(`${name}: ${source.length} -> ${woff.length} bytes (${Math.round(100-woff.length/source.length*100)}% smaller).`);
}
