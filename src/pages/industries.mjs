import {industries} from '../data/industries.mjs';
import {examples} from '../data/examples.mjs';
import {photo} from '../components/photos.mjs';
import {button,textLink,eyebrow,pageHero,faqList,preview,cta} from '../components/ui.mjs';

export function industryCards() {
  return `<div class="industry-grid">${industries.map(i=>`<article><h3><a href="/industries/${i.slug}/">${i.service}</a></h3><p>${i.summary}</p>${textLink(`Websites for ${i.name.toLowerCase()}`,`/industries/${i.slug}/`)}</article>`).join('')}</div>`;
}

export function industrySection() {
  return `<section class="section container border-top"><div class="section-head"><div>${eyebrow('Built for the way you work')}<h2>Website design for<br>your kind of business.</h2></div><p>We work with local businesses across the United States. Explore the pages, customer questions, and follow-up that matter in your industry.</p></div>${industryCards()}</section>`;
}

function industryPage(i) {
  const e=examples.find(e=>e.slug===i.example);
  return `<section class="container service-detail-hero"><div>${eyebrow('Website design for US local businesses')}<h1>${i.service}.</h1><p class="lead">${i.intro}</p>${button('Talk about your website','/book/?interest=website')}</div>${photo(i.image,{eager:true})}</section>
  <section class="section container service-detail-content"><div>${i.sections.map(([h,p])=>`<article><h2>${h}</h2><p>${p}</p></article>`).join('')}</div><aside><h2>Pages worth planning.</h2><p>We choose your 10–20 pages together. A starting point for ${i.name.toLowerCase()}:</p><ul>${i.pages.map(p=>`<li>${p}</li>`).join('')}</ul>${textLink('See the $249/month package','/pricing/')}<p class="small">Full scope, setup costs, messaging usage, and terms are confirmed before agreement.</p></aside></section>
  <section class="section container related-example"><div>${eyebrow('Explore an original example')}<h2>${e.name}</h2><p>${e.description}</p><p class="small">A fictional business concept with ten pages to explore. It is not a client project.</p>${textLink(`Explore the ${i.name.toLowerCase()} website example`,`/examples/${e.slug}/`)}</div><a href="/examples/${e.slug}/" aria-label="Explore the ${e.name} website concept">${preview(e)}</a></section>
  <section class="section container border-top"><div class="section-head"><div>${eyebrow('One package, five services')}<h2>Your website and<br>what happens next.</h2></div><p>The $249/month package includes a 10–20 page website and practical customer follow-up. Explore how each service fits your business.</p></div><div class="other-services">${[['Website design and page planning','business-websites'],['Automatic inquiry follow-up','inquiry-follow-up'],['Missed call text back','missed-call-texts'],['Review requests and reminders','review-requests'],['On-page SEO foundations','on-page-seo']].map(([label,route])=>textLink(label,`/services/${route}/`)).join('')}</div></section>
  <section class="section container border-top"><div class="faq-layout"><h2>${i.name} website questions.</h2>${faqList(i.faqs)}</div></section>${cta('Tell us about your business.<br>Let’s plan the website.')}`;
}

export const industryPages = [
  {path:'/industries/',title:'Website Design for Local Business Industries | SkipManual',description:'Explore website design for US electricians, roofers, plumbers, wellness studios, and restaurants. Industry guidance and original examples from SkipManual.',render:()=>`${pageHero('Serving businesses across the United States','Different businesses.<br>Different website needs.','Find a website approach that fits your customers, your services, and the way you handle inquiries. Each guide explains the pages and decisions worth planning.')}${industrySection()}${cta()}`},
  ...industries.map(i=>({path:`/industries/${i.slug}/`,title:i.title,description:i.description,service:{name:i.service},render:()=>industryPage(i)})),
];
