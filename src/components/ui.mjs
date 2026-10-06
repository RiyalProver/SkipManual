import { breadcrumbs, structuredData, serializeJsonLd } from '../data/seo.mjs';
import { examples } from '../data/examples.mjs';
import { site, navigation, offer } from '../data/site.mjs';
export const escape = (value = '') => String(value).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
export function icon(name = 'arrow', cls = '') {
  const paths = {
    water: '<path d="M12 2C9 7 5 10 5 14a7 7 0 0 0 14 0c0-4-4-7-7-12Z"/><path d="M9 15a3 3 0 0 0 3 3"/>',
    flow: '<path d="M4 4h6v7a3 3 0 0 0 3 3h7v6h-7a9 9 0 0 1-9-9ZM2 4h10m8 8v10"/>',
    roof: '<path d="m2 15 10-10 10 10M5 12v8h14v-8M8 15l4-4 4 4"/>',
    arrow: '<path d="M5 12h14m-6-6 6 6-6 6"/>',
    diagonal: '<path d="M6 18 18 6M6 6h12v12"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    phone: '<rect x="6" y="2" width="12" height="20" rx="2"/><path d="M10 18h4"/>',
    layout: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M10 9v11"/>',
    cursor: '<path d="m5 3 5 17 3-7 7-3Z"/>',
    sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1 1m12 12 1 1M5 19l1-1M18 6l1-1"/>',
    home: '<path d="m3 10 9-7 9 7v10H3ZM9 20v-7h6v7"/>',
    food: '<path d="M4 3v6c0 4 6 4 6 0V3M7 3v18m11-18c-4 4-4 9 0 9V3v18"/>',
    flower: '<path d="M12 21v-8m0 4c-5 0-8-3-8-6 5 0 8 2 8 6Zm0-3c5 0 8-3 8-6-5 0-8 2-8 6Z"/><circle cx="12" cy="5" r="3"/>',
    shop: '<path d="M4 10v11h16V10M2 10l3-7h14l3 7ZM9 21v-7h6v7"/>',
    tool: '<path d="m14 6 4-4a6 6 0 0 1-8 8l-7 7a2 2 0 0 0 4 4l7-7a6 6 0 0 0 8-8l-4 4Z"/>',
    bolt: '<path d="m13 2-9 12h7l-1 8 10-13h-7Z"/>',
  };
  return `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.arrow}</svg>`;
}
export const mark = () => '<svg class="brand-mark" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"><path d="M1 5h8l9 11-9 11H1l9-11zm13 0h8l9 11-9 11h-8l9-11z"/></svg>';
export const brand = () => `<a href="/" class="brand" aria-label="SkipManual home">${mark()}<span>SkipManual</span></a>`;
export const button = (label, href = '/book/', variant = '') => `<a class="button ${variant ? `button--${variant}` : ''}" href="${escape(href)}">${label}${icon()}</a>`;
export const textLink = (label, href) => `<a class="text-link" href="${href}">${label}${icon()}</a>`;
export const eyebrow = text => `<p class="eyebrow">${text}</p>`;
export function header(path) {
  const bookingTarget=path==='/book/'?'#inquiry':'/book/';
  const links = navigation.map(n => `<a href="${n.href}" ${path.startsWith(n.href) ? 'aria-current="page"' : ''}>${n.label}</a>`).join('');
  return `<a class="skip-link" href="#main">Skip to content</a><div class="site-utility"><div class="container"><span>Websites &amp; customer follow-up for local businesses</span><a href="/pricing/">All five services · <strong>$249/month</strong>${icon('arrow')}</a></div></div><header class="site-header"><div class="container header-inner">${brand()}<nav class="desktop-nav" aria-label="Main navigation">${links}</nav><div class="header-booking">${button('Book a call',bookingTarget)}</div><details class="mobile-nav"><summary>Menu</summary><nav aria-label="Mobile navigation">${links}<a href="/about/">About SkipManual</a><a href="/faq/">Common questions</a>${button('Book a call',bookingTarget)}</nav></details></div></header>`;
}
export const footer = () => `<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand">${brand()}<p>Good websites.<br>One less thing on your plate.</p></div><div class="footer-col"><h2>Explore</h2><a href="/services/">Services</a><a href="/industries/">Industries we serve</a><a href="/examples/">Examples</a><a href="/pricing/">Pricing</a><a href="/how-it-works/">How it works</a></div><div class="footer-col"><h2>SkipManual</h2><a href="/about/">About us</a><a href="/faq/">Common questions</a><a href="/contact/">Send an inquiry</a><a href="/book/">Book a call</a></div><div class="footer-col"><h2>Website examples</h2>${examples.map(e=>`<a href="/examples/${e.slug}/">${escape(e.name)}</a>`).join('')}</div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} SkipManual</span><div><a href="/privacy/">Privacy</a><a href="/website-information/">Website information</a><span>Made with intention.</span></div></div></div></footer>`;
export const cta = (heading = 'Your business deserves<br>a website that feels right.') => `<section class="cta-section"><div class="container cta-inner"><div><h2>${heading}</h2><p>Tell us about your business. We’ll take it from there.</p></div>${button('Let’s talk about your website','/book/')}</div></section>`;
export function priceCard() { return `<div class="price-card"><span class="price-kicker">The local business website package</span><div class="price"><strong>$${offer.price}</strong><span>/ month · USD</span></div><p>Your website, customer follow-up, and review requests. One straightforward package.</p>${offer.confirmedFeatures.length ? `<ul>${offer.confirmedFeatures.map(f=>`<li>${escape(f)}</li>`).join('')}</ul>` : ''}${button('Let’s talk about your business')}<p class="small">We’ll confirm the scope and full terms before you commit.</p></div>`; }
export const faqList = items => `<div class="faq-list">${items.map(f=>`<details class="faq-item"><summary>${f.q}</summary><p>${f.a}</p></details>`).join('')}</div>`;
export function preview(example, { eager = false } = {}) {
  return `<div class="preview preview--${example.theme}" aria-hidden="true"><div class="browser-bar"><span><b></b><b></b><b></b></span><span>${escape(example.name)} · example website</span><span>↗</span></div><img class="preview-capture" src="/images/examples/${example.slug}-desktop.webp" alt="" width="1440" height="1030" loading="${eager ? 'eager' : 'lazy'}" ${eager ? 'fetchpriority="high"' : ''}></div>`;
}
export function devicePreview(e) {
  return `<div class="device-switcher" role="group" aria-label="Choose a website preview size"><button type="button" data-device="desktop" aria-pressed="true" aria-controls="desktop-preview">Desktop</button><button type="button" data-device="mobile" aria-pressed="false" aria-controls="mobile-preview">Mobile</button></div><div id="desktop-preview" class="device-preview device-preview--desktop" data-preview-device="desktop"><img src="/images/examples/${e.slug}-desktop.webp" width="1440" height="1030" alt="Desktop view of the ${escape(e.name)} example homepage" fetchpriority="high"></div><div id="mobile-preview" class="device-preview device-preview--mobile" data-preview-device="mobile" hidden><img src="/images/examples/${e.slug}-mobile.webp" width="390" height="844" alt="Mobile view of the ${escape(e.name)} example homepage" loading="lazy"></div><p class="preview-caption">Captured from the actual example website. Open the full site to explore every page.</p>`;
}
export function workCard(e) { return `<article class="work-card"><a class="work-art ${e.theme}" href="/examples/${e.slug}/" aria-label="Explore ${escape(e.name)} example">${preview(e)}</a><div class="work-card-top"><h3><a href="/examples/${e.slug}/">${escape(e.name)}</a></h3>${icon('diagonal')}</div><p class="work-category">${e.category}<span class="demo-label">Example concept</span></p></article>`; }
export const pageHero = (label, title, description = '') => `<section class="page-hero container">${eyebrow(label)}<h1>${title}</h1>${description ? `<p class="lead">${description}</p>` : ''}</section>`;
export function breadcrumbNav(path) {
  const items=breadcrumbs(path);
  return items.length ? `<nav class="container agency-breadcrumb" aria-label="Breadcrumb">${items.map((item,i)=>i===items.length-1?`<span aria-current="page">${escape(item.name)}</span>`:`<a href="${item.path}">${escape(item.name)}</a><span aria-hidden="true">/</span>`).join('')}</nav>` : '';
}
export function layout({ title, description = site.description, path, content, noindex = false, demo = false, bodyClass = '', service }) {
  const canonical = site.url ? new URL(path, site.url).href : '';
  const schema = structuredData({path,title,description,content,service,demo,noindex});
  return `<!doctype html><html lang="${site.language}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta name="theme-color" content="#ffffff">${noindex || demo ? '<meta name="robots" content="noindex,follow">' : '<meta name="robots" content="index,follow,max-image-preview:large">'}${canonical ? `<link rel="canonical" href="${escape(canonical)}"><meta property="og:url" content="${escape(canonical)}">` : ''}<meta property="og:type" content="website"><meta property="og:locale" content="en_US"><meta property="og:site_name" content="SkipManual"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:image" content="${site.url ? new URL('/images/social-card.png',site.url).href : '/images/social-card.png'}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="SkipManual: websites and customer follow-up for local businesses"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${escape(title)}"><meta name="twitter:description" content="${escape(description)}"><meta name="twitter:image" content="${new URL('/images/social-card.png',site.url).href}"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="preload" href="/fonts/dm-sans.woff" as="font" type="font/woff" crossorigin><link rel="stylesheet" href="/styles/global.css">${demo ? '<link rel="stylesheet" href="/styles/demos.css"><link rel="stylesheet" href="/styles/trades.css"><link rel="stylesheet" href="/styles/example-expansion.css">' : '<link rel="stylesheet" href="/styles/previews.css"><link rel="stylesheet" href="/styles/agency.css">'}${schema ? `<script type="application/ld+json">${serializeJsonLd(schema)}</script>` : ''}<script src="/scripts/client.js" defer></script></head><body class="${bodyClass}">${demo ? '' : header(path)}<main id="main">${demo ? '' : breadcrumbNav(path)}${content}</main>${demo ? '' : footer()+`<nav class="mobile-action-bar" aria-label="Quick actions"><a href="/examples/">Website examples</a><a href="${path==='/book/'?'#inquiry':'/book/'}">Book a call ${icon('arrow')}</a></nav>`}</body></html>`;
}
