import {exampleContent,photoLibrary} from '../data/example-content.mjs';
import {icon,escape,faqList} from '../components/ui.mjs';
import {photo} from '../components/photos.mjs';

const href=(e,route='')=>`/demos/${e.slug}/${route?route+'/':''}`;
const contactRoute=e=>e.theme==='olive'?'book-a-table':e.theme==='form'?'find-your-class':e.theme==='current'?'request-a-quote':e.theme==='clearflow'?'request-a-visit':'request-an-assessment';
const requestLink=(e,p={})=>`${href(e,p.target||contactRoute(e))}${p.context?'?'+new URLSearchParams({[e.theme==='form'?'class':e.theme==='olive'?'occasion':'service']:p.context}):''}`;

export function requestParameters(e,route) {
  const coreServices={current:{lighting:'Lighting & upgrades'},clearflow:{'water-heaters':'Water heaters'}};
  const context=exampleContent[e.theme].pages.find(p=>p.route===route)?.context||coreServices[e.theme]?.[route];
  return context?{[e.theme==='form'?'class':e.theme==='olive'?'occasion':'service']:context}:{};
}

export function expandedNavigation(e) {
  const c=exampleContent[e.theme];
  return `<nav class="example-quick-nav demo-container" aria-label="Popular pages">${c.quick.map(([label,route])=>`<a href="${href(e,route)}">${label}${icon('arrow')}</a>`).join('')}</nav>`;
}

export function allPagesNavigation(e,current) {
  return `<details class="example-more"><summary>Explore more</summary><nav aria-label="All example pages">${e.routes.map((route,i)=>`<a href="${href(e,route)}" ${current===route?'aria-current="page"':''}>${e.pages[i]}</a>`).join('')}</nav></details>`;
}

export function exampleHomeExtension(e) {
  const c=exampleContent[e.theme];
  const feature=c.pages.find(p=>p.type!=='gallery'&&p.type!=='faq');
  return `<section class="demo-container demo-section example-feature"><div>${photo(feature.image)}</div><div><p class="demo-kicker">${c.label}</p><h2>${feature.title}</h2><p>${feature.intro}</p><a class="demo-text-link" href="${href(e,feature.route)}">${feature.label}${icon('arrow')}</a></div></section><section class="demo-container demo-section example-home-gallery"><div class="example-section-title"><div><p class="demo-kicker">Take a closer look</p><h2>${c.galleryTitle}</h2></div><a class="demo-text-link" href="${href(e,'gallery')}">Explore the gallery${icon('arrow')}</a></div><div class="example-gallery-teaser">${c.gallery.slice(1,4).map(name=>`<a href="${href(e,'gallery')}" aria-label="Explore the ${escape(e.name)} gallery">${photo(name)}</a>`).join('')}</div><p class="example-photo-note">Illustrative photography for this fictional business.</p></section>`;
}

function gallery(e,p) {
  const c=exampleContent[e.theme];
  return `<section class="demo-container demo-page-hero"><p class="demo-kicker">${p.label}</p><h1>${p.title}</h1><p>${p.intro}</p></section><section class="demo-container example-gallery" aria-label="Photo gallery">${c.gallery.map((name,i)=>`<figure><a href="/images/${name}.webp" data-gallery-image aria-label="Enlarge: ${escape(photoLibrary[name][0])}">${photo(name,{eager:i<2})}<span class="gallery-zoom">${icon('diagonal')}View image</span></a><figcaption>${escape(photoLibrary[name][0])}</figcaption></figure>`).join('')}</section><dialog class="gallery-dialog" aria-label="Enlarged gallery image"><button type="button" data-gallery-close aria-label="Close enlarged image">Close ${icon('check')}</button><img src="/images/${c.gallery[0]}.webp" alt="${escape(photoLibrary[c.gallery[0]][0])}" loading="lazy"><p></p><div><button type="button" data-gallery-prev aria-label="Previous image">← Previous</button><span data-gallery-position></span><button type="button" data-gallery-next aria-label="Next image">Next →</button></div></dialog>${closing(e,'Picture your next step.','Explore the options, then tell us what you have in mind.')}`;
}

function closing(e,title,text,p={}) {return `<section class="example-page-closing demo-container"><div><h2>${title}</h2><p>${text}</p></div><a class="demo-button" href="${requestLink(e,p)}">${p.action||'Start an inquiry'}${icon('arrow')}</a></section>`;}

function detail(e,p) {
  const c=exampleContent[e.theme];const others=c.pages.filter(other=>other.route!==p.route&&other.type!=='gallery').slice(0,3);
  return `<nav class="demo-container example-breadcrumb" aria-label="Breadcrumb"><a href="${href(e)}">Home</a><span>/</span><span>${p.label}</span></nav><section class="demo-container example-detail-hero"><div><p class="demo-kicker">${p.label}</p><h1>${p.title}</h1><p>${p.intro}</p><a class="demo-button" href="${requestLink(e,p)}">${p.action||'Start an inquiry'}${icon('arrow')}</a></div><figure>${photo(p.image,{eager:true})}<figcaption>Illustrative photograph · ${escape(e.name)}</figcaption></figure></section>${p.type==='faq'?`<section class="demo-container demo-section example-faq-page">${faqList(p.faq)}</section>`:`<section class="demo-container example-detail-body"><div>${p.sections.map((s,i)=>`<article id="detail-${i}"><span>0${i+1}</span><div><h2>${s.heading}</h2><p>${s.text}</p>${s.items?.length?`<ul>${s.items.map(item=>`<li>${item}</li>`).join('')}</ul>`:''}</div></article>`).join('')}${p.faq?faqList(p.faq):''}</div><aside class="example-help"><p class="demo-kicker">Your next step</p><h2>${e.theme==='olive'?'Make a little time.':e.theme==='form'?'Find your starting point.':'Tell us what you need.'}</h2><p>${e.theme==='olive'?'Choose your date and party size in the table request.':e.theme==='form'?'Choose a class, or ask for help finding one.':'Your selected service will carry into the request form.'}</p><a class="demo-button" href="${requestLink(e,p)}">${p.action||'Start an inquiry'}${icon('arrow')}</a><a class="demo-text-link" href="${href(e,'questions')}">Common questions${icon('arrow')}</a></aside></section>`}<section class="demo-container demo-section"><div class="example-section-title"><h2>Keep exploring.</h2><a href="${href(e)}" class="demo-text-link">Back to home${icon('arrow')}</a></div><div class="example-related">${others.map(other=>`<a href="${href(e,other.route)}"><span>${other.label}</span><p>${other.intro}</p>${icon('arrow')}</a>`).join('')}</div></section>${closing(e,e.theme==='olive'?'There’s a place for you.':e.theme==='form'?'One comfortable next step.':'Start with a conversation.',e.theme==='olive'?'Explore the table request and plan an evening.':'Tell us what you know. You do not need all the answers.',p)}`;
}

export function extraRoutes(e) { return exampleContent[e.theme].pages.map(p=>[p.route,p.label,()=>p.type==='gallery'?gallery(e,p):detail(e,p)]); }
