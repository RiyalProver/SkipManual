import fs from 'node:fs/promises';
const names=['roof','roofers','roof-detail','electric-work','electric-panel','plumber','plumbing-work','water-heater','pilates','chef','roof-install','roof-fema','panel-work','plumbing-detail','lighting-work','pilates-class'];
const images=[];
for(const name of names){
  let data;try{data=JSON.parse(await fs.readFile(`artifacts/${name}-photo-search.json`,'utf8'));}catch{console.log(`Skipping unavailable search: ${name}`);continue;}
  for(const p of Object.values(data.query?.pages||{})){
    const i=p.imageinfo?.[0],m=i?.extmetadata||{};
    if(!i)continue;
    images.push({id:`${name}-${p.index}`,group:name,title:p.title,url:i.url,thumb:i.thumburl,page:i.descriptionurl,license:m.LicenseShortName?.value,licenseUrl:m.LicenseUrl?.value,credit:m.Artist?.value,description:m.ImageDescription?.value});
  }
}
await fs.mkdir('artifacts/work-photos',{recursive:true});
await fs.writeFile('artifacts/work-photos/catalog.json',JSON.stringify(images,null,2));
console.log(images.map(i=>`${i.id} | ${i.title} | ${i.license}`).join('\n'));
