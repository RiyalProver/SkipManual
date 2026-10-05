# Codex conversation

## User

"C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\codex-session-01a109d0-b7e6-7ae3-8218-d712a3b53115.md"

this where we last stopped, so continue the work without any mistaes and

## Assistant

I’ll read the saved session and check the project’s current state, then continue from where the work stopped.

## Activity

    $ Get-Content -LiteralPath 'codex-session-01a109d0-b7e6-7ae3-8218-d712a3b53115.md' -Tail 240
        import { icon, mark, button, textLink, eyebrow, priceCard, faqList, preview, devicePreview, workCard, pageHero, cta, escape } from '../components/ui.mjs';
    
        function pricing() { return `${pageHero('Pricing','A proper website.<br>A clear monthly price.','Five connected services for local businesses: your website, inquiry follow-up, missed-call replies, review requests, and on-page SEO.')}<section class="section container" style="padding-top:0"><div class="price-grid pricing-offer"><div>${eyebrow('Made for local business')}<h2>Put your business<br>in a better light.</h2><p class="lead">Give your business a professional 10â€“20 page website, with practical systems to reply to inquiries, follow up with customers, and ask for reviews.</p><p class="lead">The package brings all five services together for $249/month. Weâ€™ll plan the pages and message flows with you, then confirm the full arrangement before you move forward.</p></div>${priceCard()}</div></section><section class="section surface"><div class="container"><div class="section-head"><div>${eyebrow('Clear before you commit')}<h2>The details belong<br>in the conversation.</h2></div><p>Weâ€™ll walk through these together so you know exactly what youâ€™re agreeing to.</p></div><div class="principles-grid"><article><h3>Your website</h3><p>Your 10â€“20 pages, content, functionality, review process, and a realistic project timeline.</p></article><article><h3>Your monthly arrangement</h3><p>The full billing terms, any setup costs, commitment, ownership, and cancellation arrangements.</p></article><article><h3>After launch</h3><p>Messaging setup, usage allowances, any extra costs, hosting, maintenance, support, and future changes.</p></article></div></div></section><section class="section container"><div class="faq-layout"><div>${eyebrow('Before you decide')}<h2>A little more clarity.</h2></div>${faqList([faqs[1],faqs[12],faqs[9],faqs[10]])}</div></section>${cta()}`; }
    
        function exampleIndex() { return `${pageHero('Five businesses. Five different approaches.','Find a website<br>that feels like your business.','Every example has 10 pages to explore: service details, photographs, useful answers, and a clear inquiry path. Open one and see the whole experience.')}<nav class="container industry-filter" aria-label="Jump to an industry">${examples.map(e=>`<a href="#${e.slug}">${e.category}${icon('arrow')}</a>`).join('')}</nav><section class="section container examples-expanded"><p class="collection-disclosure">Original website examples for fictional businesses. These are design concepts, not client projects.</p><div class="work-grid">${examples.map(directWorkCard).join('')}</div></section>${cta('Something you like?<br>Letâ€™s make it your own.')}`; }
    
        export function exampleDetail(e) { return `${pageHero(`${e.category} / Example concept`,escape(e.name),e.description)}<div class="container"><div class="case-hero" style="margin-bottom:2rem"><p class="small">Original website concept Â· Fictional business Â· ${e.pages.length} pages</p>${button('Explore the full website',`/demos/${e.slug}/`)}</div><div class="case-art ${e.theme}">${devicePreview(e)}</div></div><section class="section container"><div class="case-details"><div>${eyebrow('The design brief')}<h2>${e.style}</h2><p>${e.brief}</p><h3>The intended experience</h3><p>${e.outcome}</p></div><div>${eyebrow('A closer look')}<h2>Designed around<br>the business.</h2><p>${e.approach}</p><h3>Explore the details</h3><ul>${e.features.map(f=>`<li>${f}</li>`).join('')}</ul><h3>Explore the pages</h3><ul class="page-links">${e.pages.map((p,i)=>`<li><a href="/demos/${e.slug}/${e.routes[i] ? `${e.routes[i]}/` : ''}">${p}${icon('diagonal')}</a></li>`).join('')}</ul></div></div><aside class="note-box" style="margin-top:3rem"><p>This is an example for a fictional business, not a client project. Business names, offerings, and content are fictional. Photographs are illustrative. Example forms do not make real bookings or send inquiries.</p></aside></section><section class="section surface"><div class="container"><div class="section-head"><div>${eyebrow('Keep exploring')}<h2>Another business.<br>Another approach.</h2></div>${textLink('All examples','/examples/')}</div><div class="work-grid work-grid--pair">${examples.filter(x=>x.slug!==e.slug).map(workCard).join('')}</div></div></section>${cta('Something like this.<br>Made for your business.')}`; }
          const fields = isOlive ? `<div class="field full"><label for="demo-occasion">Occasion <span>(optional)</span></label><input id="demo-occasion" name="occasion" maxlength="160" placeholder="Dinner, a birthday, or a group gathering"></div><div class="field"><label for="demo-date">Preferred date *</label><input id="demo-date" name="date" type="date" required></div><div class="field"><label for="demo-guests">Your table *</label><select id="demo-guests" name="guests" required><option value="">Choose party size</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5â€“6 guests</option></select></div><div class="field full"><label for="demo-time">Preferred time *</label><select id="demo-time" name="time" required><option value="">Choose a time</option><option>17:30</option><option>18:30</option><option>19:30</option><option>20:30</option></select></div>` : isForm ? `<div class="field full"><label for="demo-class">A class that feels right *</label><select id="demo-class" name="class" required><option value="">Choose a class</option><option>Foundations</option><option>Everyday Flow</option><option>Strength &amp; Length</option><option>Help me choose</option></select></div><div class="field full"><label for="demo-experience">Your Pilates experience *</label><select id="demo-experience" name="experience" required><option value="">Choose what fits</option><option>This would be my first class</option><option>I have tried a few classes</option><option>I have a regular practice</option></select></div>` : `<div class="field full"><label for="demo-service">What can we help with? *</label><select id="demo-service" name="service" required><option value="">Choose a service</option><option>Lighting &amp; upgrades</option><option>Repairs &amp; fault finding</option><option>Installations &amp; additions</option><option>Renovation electrical</option><option>Iâ€™m not sure yet</option></select></div><div class="field full"><label for="demo-project">Describe your project *</label><textarea id="demo-project" name="project" required maxlength="2000" placeholder="For example: better lighting in the kitchen."></textarea></div>`;
          return `<section class="demo-page-hero demo-container">${dkicker(isOlive?'A table for you':isForm?'Find your class':'Letâ€™s talk about your project')}<h1>${title}</h1></section><section class="demo-container demo-contact"><div><h2>${isOlive ? 'Bring an appetite.<br>Weâ€™ll set the scene.' : isForm ? 'Find a little<br>space for yourself.' : 'Start with what<br>you know.'}</h2><p>${isOlive ? 'Choose a date, a time, and the people you want to share a table with.' : isForm ? 'Let us know where you are starting. This request flow is designed to help you find the right class.' : 'You donâ€™t need the technical words. Tell us what is happening, or what you would like to change.'}</p><aside class="demo-disclosure"><strong>This is an example website.</strong><p>${isOlive ? 'No table will be reserved.' : isForm ? 'No class will be booked.' : 'No electrical work will be requested.'} This is a fictional business. Please use sample details; the form does not send or store information.</p></aside></div><form class="demo-request-form" data-demo-form data-demo-type="${theme}"><p class="form-intro">Explore the ${isOlive ? 'table request' : isForm ? 'class request' : 'project inquiry'} experience. * Required.</p><div class="form-grid"><div class="field full"><label for="demo-name">Sample name *</label><input id="demo-name" name="name" required maxlength="100" placeholder="Alex Example"></div>${fields}</div><button class="demo-button" type="submit" data-js-submit disabled>Preview ${isOlive ? 'table request' : isForm ? 'class request' : 'project request'}${icon('arrow')}</button><p class="form-feedback" role="status" aria-live="polite" tabindex="-1"></p><noscript><p>JavaScript is needed to preview this example interaction. No information is sent.</p></noscript></form></section>`;
        }
    
        export function demoPages() {
          return examples.flatMap(e=>{
            const c=config[e.theme];
            const routes=tradeRoutes[e.theme] ? [...tradeRoutes[e.theme]] : (e.theme==='olive' ? [['','Home',oliveHome],['menu','Menu',oliveMenu],['our-story','Our story',oliveStory]] : e.theme==='current' ? [['','Home',currentHome],['services','Services',currentServices],['lighting','Lighting & upgrades',currentLighting]] : [['','Home',formHome],['classes','Classes',formClasses],['the-studio','The studio',formStudio]]);
            if(!tradeRoutes[e.theme]) routes.push([c.contact,c.action,demoContact]);
            routes.push(...extraRoutes(e));
            return routes.map(([route,title,render])=>({path:`/demos/${e.slug}/${route ? `${route}/` : ''}`,title:`${title} â€” ${e.name} | SkipManual Example`,description:`Explore the ${title.toLowerCase()} page of ${e.name}, a fictional ${e.category.toLowerCase()} website concept designed by SkipManual. This is an illustrative example, not a real business.`,demo:true,bodyClass:'demo-body',render:()=>{
              let body=render(e);
              if(route===''){
                const closing=Math.max(body.lastIndexOf('<section class="demo-closing"'),body.lastIndexOf('<section class="trade-closing"'));
                body=closing>=0?body.slice(0,closing)+exampleHomeExtension(e)+body.slice(closing):body+exampleHomeExtension(e);
              }
              return shell(e,route,body);
            }}));
          });
        }
        âœ“ â€¢ 464ms
    
    ## Activity
    
        file changes: Completed Â· 3 changes
        Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\scripts\audit.mjs
        @@ -77,2 +77,35 @@
           await page.keyboard.press('Escape');assert(!(await page.locator('.mobile-nav').evaluate(e=>e.open)));
        +  assert.equal(await page.evaluate(()=>getComputedStyle(document.body).backgroundColor),'rgb(255, 255, 255)','Agency background should be white');
        +  assert(await page.locator('.mobile-action-bar').isVisible());
        +  assert.match(await page.locator('.hero-offer').textContent(),/249/);
        +  assert.equal(await page.locator('.plain-service-list a').count(),5);
        +  // All five example sites have ten reachable pages, complete menus, and usable image galleries.
        +  for(const slug of ['olive-and-ember','current-electric','form-studio','clearflow-plumbing','ridgeline-roofing']) {
        +    assert.equal(pages.filter(p=>p.path.startsWith(`/demos/${slug}/`)).length,10);
        +    await page.goto(base+`/demos/${slug}/gallery/`);
        +    const first=page.locator('[data-gallery-image]').first();await first.click();
        +    assert(await page.locator('.gallery-dialog').evaluate(e=>e.open));
        +    assert.match(await page.locator('[data-gallery-position]').textContent(),/^1 of/);
        +    await page.keyboard.press('ArrowRight');assert.match(await page.locator('[data-gallery-position]').textContent(),/^2 of/);
        +    await page.getByRole('button',{name:'Previous image',exact:true}).click();assert.match(await page.locator('[data-gallery-position]').textContent(),/^1 of/);
        +    await page.keyboard.press('Escape');assert(!(await page.locator('.gallery-dialog').evaluate(e=>e.open)));
        +    assert(await first.evaluate(e=>e===document.activeElement),'Gallery should restore keyboard focus');
        +    await page.locator('.demo-mobile summary').click();assert.equal(await page.locator('.demo-mobile nav a').count(),10);
        +    await page.locator('.demo-mobile nav a').last().click();assert(page.url().endsWith('/questions/'));
        +    await page.setViewportSize({width:1440,height:1000});await page.locator('.example-more summary').click();assert.equal(await page.locator('.example-more nav a').count(),10);
        +    await page.keyboard.press('Escape');assert(!(await page.locator('.example-more').evaluate(e=>e.open)));
        +    await page.setViewportSize({width:390,height:844});
        +  }
        +  await page.goto(base+'/book/?interest=missed-calls');
        +  assert.match(await page.locator('[data-inquiry-context]').textContent(),/Missed-call text replies/);
        +  assert.equal(await page.locator('.simple-inquiry [required]').count(),4);
        +  assert(!(await page.locator('.optional-inquiry').evaluate(e=>e.open)));
        +  await page.locator('.optional-inquiry summary').click();assert(await page.locator('#message').isVisible());
        +  await page.locator('#name').fill('Sample Owner');await page.locator('#business').fill('Sample Business');await page.locator('#email').fill('owner@example.com');await page.locator('#need').selectOption({label:'A new website'});
        +  await page.locator('[type="submit"]').click();assert.match(await page.locator('#brief').inputValue(),/Interested in: Missed-call text replies/);
        +  assert.match(await page.locator('.form-feedback').textContent(),/nothing has been sent/i);
        +  // Context survives the journey from detailed example pages into their request forms.
        +  for(const [route,field,expected] of [['/demos/olive-and-ember/private-dining/','#demo-occasion','Private dining'],['/demos/current-electric/repairs/','#demo-service','Repairs & fault finding'],['/demos/form-studio/foundations/','#demo-class','Foundations'],['/demos/clearflow-plumbing/drains/','#demo-service','Drains & blockages'],['/demos/ridgeline-roofing/roof-replacement/','#demo-service','Roof replacement']]) {
        +    await page.goto(base+route);await page.locator('.example-detail-hero .demo-button').click();assert.equal(await page.locator(field).inputValue(),expected);
        +  }
           // Everyday examples and both new service guides: every choice, keyboard use, and handoff.
        @@ -132,2 +165,4 @@
           await noJSPage.goto(base+'/contact/');assert(await noJSPage.locator('[type="submit"]').isDisabled());
        +  await noJSPage.goto(base+'/book/');assert(await noJSPage.locator('[type="submit"]').isDisabled());
        +  await noJSPage.goto(base+'/demos/olive-and-ember/gallery/');assert(await noJSPage.locator('[data-gallery-image]').first().isVisible());assert.match(await noJSPage.locator('[data-gallery-image]').first().getAttribute('href'),/\.webp$/);
           await noJSPage.goto(base+'/demos/current-electric/request-a-quote/');assert(await noJSPage.locator('[type="submit"]').isDisabled());await noJS.close();
        Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\src\styles\agency.css
        @@ -71,2 +71,4 @@
         .mobile-action-bar { display:none; }
        +.about-photo img { width:100%; height:500px; object-fit:cover; border-radius:6px; }
        +@media(max-width:760px) { .about-photo img { height:300px; } }
         @media(max-width:1150px) { .desktop-nav { gap:1rem; font-size:.77rem; }.human-hero { gap:2.3rem; }.business-mosaic { height:510px; }.human-hero-copy h1 { font-size:3.4rem; }.plain-offer,.service-stories > article { gap:3rem; }.booking-layout { gap:3rem; }.service-detail-content { gap:3rem; } }
        Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\src\styles\example-expansion.css
        @@ -23,2 +23,3 @@
         .example-mobile-action { display:none; }
        +.menu-category-photo { width:100%; height:230px; object-fit:cover; margin-bottom:1.8rem; }
         @media(max-width:1150px) { .demo-header { gap:1rem; }.demo-nav { gap:1rem; font-size:.75rem; }.demo-nav .demo-button { padding-inline:1rem; gap:.8rem; font-size:.75rem; }.example-more summary { font-size:.75rem; }.example-feature,.example-detail-hero,.example-detail-body { gap:3rem; }.example-help { padding:1.5rem; } }
    
    ## Activity
    
        file changes: Completed Â· 1 changes
        Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\public\images\social-card.svg
        @@ -1 +1 @@
        -<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#f8f8f2"/><path d="M80 60h22l25 31-25 31H80l25-31zm36 0h22l25 31-25 31h-22l25-31z" fill="#ed4c24"/><text x="184" y="106" font-family="Arial,sans-serif" font-size="40" font-weight="700" fill="#242620">SkipManual</text><text x="80" y="260" font-family="Arial,sans-serif" font-size="78" letter-spacing="-4" fill="#242620">Your business is the real deal.</text><text x="80" y="355" font-family="Arial,sans-serif" font-size="88" letter-spacing="-4" fill="#b73010">Look the part.</text><path d="M80 458h1040" stroke="#dedfd5"/><text x="80" y="528" font-family="Arial,sans-serif" font-size="27" fill="#55584e">Professional websites for local businesses.</text><text x="908" y="528" font-family="Arial,sans-serif" font-size="27" fill="#242620">$249 / month</text></svg>
        +<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="#fff"/><path d="M70 54h22l25 31-25 31H70l25-31zm36 0h22l25 31-25 31h-22l25-31z" fill="#df4a24"/><text x="175" y="100" font-family="Arial,sans-serif" font-size="38" font-weight="700" fill="#202727">SkipManual</text><text x="70" y="245" font-family="Arial,sans-serif" font-size="76" font-weight="700" letter-spacing="-3" fill="#202727">We build your website.</text><text x="70" y="342" font-family="Arial,sans-serif" font-size="76" font-weight="700" letter-spacing="-3" fill="#c14220">You get back to business.</text><path d="M70 415h1060" stroke="#e4e7eb"/><text x="70" y="480" font-family="Arial,sans-serif" font-size="26" fill="#586365">Websites &amp; customer follow-up for local businesses.</text><text x="70" y="544" font-family="Arial,sans-serif" font-size="23" fill="#202727">10â€“20 pages Â· Five services Â· One package</text><text x="932" y="544" font-family="Arial,sans-serif" font-size="29" font-weight="700" fill="#c14220">$249/month</text></svg>
    
    ## Activity
    
        $ npm run build
    
        > skipmanual@1.0.0 build
        > node scripts/build.mjs
    
        Built 72 static pages in dist/. No production dependencies or client framework.
        Public origin is unconfigured: canonical URLs and sitemap will be generated when PUBLIC_SITE_URL is set.
        Contact is in honest brief-only mode. Set a verified contact email or endpoint to enable inquiries.
        âœ“ â€¢ 1.80s
    
    ## Activity
    
        $ $env:PLAYWRIGHT_MODULE='C:\Users\muham\AppData\Local\ms-playwright-go\1.50.1\package'; $env:BROWSER_PATH='C:\Users\muham\.cache\puppeteer\chrome\win64-139.0.7258.68\chrome-win64\chrome.exe'; node scripts/capture-previews.mjs
        Captured the actual Olive & Ember website at desktop and mobile sizes.
        Captured the actual Current Electric website at desktop and mobile sizes.
        Captured the actual Form Studio website at desktop and mobile sizes.
        Captured the actual Clearflow Plumbing website at desktop and mobile sizes.
        Captured the actual Ridgeline Roofing website at desktop and mobile sizes.
        âœ“ â€¢ 17.95s
    
    ## Assistant
    
    The first browser review looks good: the main site is white, the offer is easier to read, and the phone layout keeps a clear next step within reach. The build now has 72 pages, including 10 for each example business. Iâ€™m refreshing the previews and checking every route, gallery, menu, and form.
    
    ## Activity
    
        $ npm run build
    
        > skipmanual@1.0.0 build
        > node scripts/build.mjs
    
        Built 72 static pages in dist/. No production dependencies or client framework.
        Public origin is unconfigured: canonical URLs and sitemap will be generated when PUBLIC_SITE_URL is set.
        Contact is in honest brief-only mode. Set a verified contact email or endpoint to enable inquiries.
        âœ“ â€¢ 1.51s
    
    ## Activity
    
        $ $env:PLAYWRIGHT_MODULE='C:\Users\muham\AppData\Local\ms-playwright-go\1.50.1\package'; $env:BROWSER_PATH='C:\Users\muham\.cache\puppeteer\chrome\win64-139.0.7258.68\chrome-win64\chrome.exe'; node scripts/audit.mjs
        Passed 72 page checks at 1440px.
        Passed 72 page checks at 768px.
        Passed 72 page checks at 390px.
        Passed 72 page checks at 320px.
        Audit passed: 288 responsive page checks, 149 unique links, navigation, forms, filtering, reduced motion, no-JavaScript rendering, and 404 behavior.
        âœ“ â€¢ 3m 26s
    
    ## Activity
    
        file changes: Completed Â· 3 changes
        Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\README.md
        @@ -2,3 +2,3 @@
    
        -A static, multi-page agency website with five original, explicitly fictional example websites. The production build has **no runtime dependencies** and renders real HTML for all 35 routes.
        +A static, multi-page agency website with five original, explicitly fictional example websites. The production build has **no runtime dependencies** and renders real HTML for all 72 routes. Each example contains 10 pages.
    
        @@ -28,2 +28,3 @@
         - `PUBLIC_CONTACT_ENDPOINT`: optional JSON POST endpoint for direct form delivery. This takes priority over the email-draft flow.
        +- `PUBLIC_BOOKING_URL`: the verified HTTPS scheduling page. Enables the calendar link on `/book/`. The owner has explicitly deferred connecting scheduling and contact details until the design is approved.
    
        @@ -46,7 +47,12 @@
         | `src/data/package.mjs` | Confirmed package services and everyday customer-conversation scenarios |
        +| `src/data/example-content.mjs` | Detailed pages, galleries, FAQs, and photography for the five example businesses |
        +| `src/data/photo-dimensions.json` | Actual source dimensions generated by the photo-processing script |
         | `src/components/package.mjs` | Package overview and selectable everyday examples |
        +| `src/components/photos.mjs` | Responsive images with actual dimensions, local source variants, and alt text |
         | `src/components/ui.mjs` | Shared layout, metadata/schema, navigation, footer, buttons, pricing, and portfolio previews |
         | `src/pages/agency.mjs` | Main agency pages and individual concept pages |
        +| `src/pages/agency-redesign.mjs` | White homepage, services, five service details, how-it-works, booking, and short inquiry form |
         | `src/pages/demos.mjs` | Shared example shell and restaurant, electrical, and Pilates websites |
        -| `src/pages/trades.mjs` | Four-page plumbing and roofing examples, service finder, and roof guide |
        +| `src/pages/trades.mjs` | Core plumbing and roofing pages, service finder, and roof guide |
        +| `src/pages/example-expansion.mjs` | Expanded navigation, detail pages, galleries, FAQs, and related-page links |
         | `src/styles/tokens.css` | Primitive, semantic, and component design tokens |
        @@ -55,2 +61,4 @@
         | `src/styles/trades.css` | Distinct plumbing and roofing visual identities and responsive rules |
        +| `src/styles/agency.css` | White agency design, photography, direct navigation, and mobile action bar |
        +| `src/styles/example-expansion.css` | Detailed example pages, expanded navigation, galleries, and mobile actions |
         | `src/scripts/client.js` | Menus, device previews, scenario selectors, service guides, schedule filters, forms, and brief downloads |
        @@ -60,7 +68,7 @@
    
        -- **Olive & Ember:** seasonal restaurant; home, menu, story, table request.
        -- **Current Electric:** residential electrical service; home, services, lighting detail, project request.
        -- **Form Studio:** Pilates studio; home, classes/schedule, studio, introductory class request.
        -- **Clearflow Plumbing:** bright blue and white; home/service finder, plumbing services, water heaters, visit request.
        -- **Ridgeline Roofing:** architectural stone and rust; home, roofing/materials, repair-or-replace guide, assessment request.
        +- **Olive & Ember:** home, menu, story, table request, private dining, seasonal kitchen, drinks, gallery, visit guide, dining questions.
        +- **Current Electric:** home, services, lighting, project request, repairs, installations, renovations, gallery, approach, questions.
        +- **Form Studio:** home, classes/schedule, studio, class request, first visit, Foundations, private sessions, gallery, movement notes, questions.
        +- **Clearflow Plumbing:** home/service finder, services, water heaters, visit request, leaks, drains, kitchen/bathroom updates, gallery, what to expect, questions.
        +- **Ridgeline Roofing:** home, services, repair-or-replace guide, assessment request, repairs, replacement, materials, gallery, assessment process, questions.
    
        @@ -89,3 +97,3 @@
    
        -The audit covers all 35 pages at 1440, 768, 390, and 320 pixels; unique titles and descriptions; business schema; public terminology; headings and labels; broken images, fonts, anchors, and routes; malformed select options; overflow; menus; FAQs; portfolio device views; schedule filters; everyday scenarios; both service guides and their carried-over choices; all example forms; inquiry validation, failure, and success; downloads; reduced motion; and no-JavaScript rendering. Inquiry delivery is mocked during tests; no real message is sent.
        +The audit covers all 72 pages at 1440, 768, 390, and 320 pixels; unique titles and descriptions; business schema; public terminology; headings and labels; broken images, fonts, anchors, and routes; malformed select options; overflow; menus; FAQs; portfolio device views; schedule filters; everyday scenarios; both service guides and their carried-over choices; detailed-page inquiry links; all five galleries with keyboard navigation and focus restoration; short inquiry fields and optional details; local booking-request preparation; example forms; inquiry validation, failure, and success; downloads; reduced motion; and no-JavaScript rendering. Inquiry delivery is mocked during tests; no real message is sent.
    
        @@ -97,2 +105,4 @@
    
        +The image library contains 24 original stock photographs. Run `node scripts/process-photos.mjs` with the same Playwright configuration to produce 640px and 960px variants and update image dimensions. Most new photo components select a suitable source with `srcset`; full-size images remain available in the gallery. Gallery links work without JavaScript, and native dialogs support keyboard browsing when JavaScript is enabled.
        +
         Photography sources and design decisions are documented in `docs/asset-sources.md` and `docs/design-system.md`.
        Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\docs\asset-sources.md
        @@ -12,2 +12,20 @@
         | Ridgeline house and roof | https://images.unsplash.com/photo-1570129477492-45c003edd2be |
        +| Seasonal plate | https://images.unsplash.com/photo-1547592180-85f173990554 |
        +| Gathering table | https://images.unsplash.com/photo-1511795409834-ef04bbd61622 |
        +| Coffee | https://images.unsplash.com/photo-1509042239860-f550ce710b93 |
        +| Dessert | https://images.unsplash.com/photo-1488477181946-6428a0291777 |
        +| Living room | https://images.unsplash.com/photo-1600210492486-724fe5c67fb0 |
        +| Kitchen | https://images.unsplash.com/photo-1556912172-45b7abe8b7e1 |
        +| Bathroom details | https://images.unsplash.com/photo-1507652313519-d4e9174996dd |
        +| Modern home | https://images.unsplash.com/photo-1564013799919-ab600027ffc6 |
        +| Work tools | https://images.unsplash.com/photo-1530124566582-a618bc2615dc |
        +| Sunset movement | https://images.unsplash.com/photo-1544367567-0f2fcb009e0b |
        +| Fitness equipment | https://images.unsplash.com/photo-1517836357463-d25dfeac3438 |
        +| Beach movement group | https://images.unsplash.com/photo-1545205597-3d9d02c29597 |
        +| Indoor stretching | https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b |
        +| CafÃ© preparation | https://images.unsplash.com/photo-1442512595331-e89e73853f31 |
        +| Restaurant room | https://images.unsplash.com/photo-1552566626-52f8b828add9 |
        +| House exterior | https://images.unsplash.com/photo-1600585154340-be6161a56a0c |
        +| Home exterior detail | https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde |
        +| Light-filled sitting room | https://images.unsplash.com/photo-1616486338812-3dadae4b4ace |
    
        Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\docs\design-system.md
        @@ -4,3 +4,3 @@
    
        -Warm paper, charcoal, and a restrained orange accent balance approachability with a professional agency presentation. DM Sans provides a clear typographic hierarchy. Borders and whitespace organize content; cards are reserved for previews and the offer. The primary path is to get started; examples are the secondary path for visitors who need to see the quality first.
        +The agency now uses a white canvas, charcoal text, and clear orange calls to action. Business photography replaces the floating portfolio composition in the opening screen. The hero explains the service directly and shows $249/month before the visitor scrolls. DM Sans, readable paragraph widths, plain-language service lists, direct example links, and a mobile action bar support first-time local-business visitors. The main actions lead to a dedicated call page and the full example websites.
    
        @@ -34,3 +34,13 @@
    
        -The agency homepage retains the existing hero, palette, and typography. A five-service overview introduces the confirmed package, followed by three selectable everyday situations with illustrative conversations. The same data supplies the service page and pricing inclusions. Without JavaScript, all guide and scenario content remains readable.
        +The five-service overview uses ordinary outcomes such as replying while busy and making review requests routine. Three selectable everyday situations show illustrative conversations. Dedicated service pages explain the details, and the how-it-works page describes the project steps. The inquiry form asks for four essential fields and puts extra details behind a disclosure. Without JavaScript, all guide and scenario content remains readable.
        +
        +## Complete example websites
        +
        +Each business now has ten pages. The restaurant includes food, drinks, private dining, visit planning, and a gallery; trade businesses have separate service details, practical guides, and photo inspiration; the studio has beginner guidance, private sessions, class information, and movement notes. Expanded desktop menus, ten-link mobile menus, related pages, and sticky mobile actions connect the content. Gallery dialogs support arrow keys, Escape, previous/next controls, and focus restoration; without JavaScript the image links still work.
        +
        +Photography is illustrative and attributed. Business names and offerings remain fictional, with persistent example notices and local-only sample forms. No invented addresses, reviews, qualifications, or real booking availability have been added.
        +
        +## Booking connection
        +
        +The owner explicitly deferred booking-provider and contact-email setup until after design review. `/book/` therefore explains the conversation and prepares a local request. A verified `PUBLIC_BOOKING_URL` enables a direct scheduling link without embedding third-party scripts on the agency site. The form never claims to send or reserve anything while disconnected.
    
    ✓ • 292ms

## Activity

    $ Get-Location; rg --files -g AGENTS.md -g package.json -g README.md -g '*lock*' -g '*config*' -g '!node_modules' -g '!dist'; git status --short
    
    README.md
    package.json
    fatal: not a git repository (or any of the parent directories): .git
    Path
    ----
    C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest
    
    
    ✗ (1) • 673ms

## Activity

    $ rg --files -g '!dist/**' -g '!public/**' -g '!node_modules/**' -g '!*.md'; Get-Content -Encoding utf8 README.md; Get-Content package.json
    package.json
    src\styles\trades.css
    src\styles\tokens.css
    src\styles\previews.css
    src\styles\global.css
    src\styles\example-expansion.css
    src\styles\demos.css
    src\styles\agency.css
    src\components\ui.mjs
    src\components\photos.mjs
    src\components\package.mjs
    src\scripts\client.js
    src\pages\trades.mjs
    src\pages\example-expansion.mjs
    src\pages\demos.mjs
    src\pages\agency.mjs
    src\pages\agency-redesign.mjs
    scripts\serve.mjs
    scripts\review-pages.mjs
    scripts\process-photos.mjs
    scripts\optimize-fonts.mjs
    scripts\capture-previews.mjs
    scripts\build.mjs
    scripts\audit.mjs
    src\data\site.mjs
    src\data\photo-dimensions.json
    src\data\package.mjs
    src\data\examples.mjs
    src\data\example-content.mjs
    artifacts\home-mobile.png
    artifacts\home-desktop.png
    artifacts\home-390.png
    artifacts\home-1440.png
    artifacts\examples.png
    artifacts\electrical.png
    artifacts\studio.png
    artifacts\inspect-restaurant.png
    artifacts\inspect-home.png
    artifacts\inspect-electric.png
    artifacts\inspect-contact.png
    artifacts\demo-review\ridgeline-roofing-mobile-full.png
    artifacts\demo-review\ridgeline-roofing-desktop-full.png
    artifacts\demo-review\olive-and-ember-mobile-full.png
    artifacts\demo-review\olive-and-ember-desktop-full.png
    artifacts\demo-review\form-studio-mobile-full.png
    artifacts\demo-review\form-studio-desktop-full.png
    artifacts\demo-review\current-electric-mobile-full.png
    artifacts\demo-review\current-electric-desktop-full.png
    artifacts\demo-review\clearflow-plumbing-mobile-full.png
    artifacts\demo-review\clearflow-plumbing-desktop-full.png
    artifacts\contact.png
    artifacts\audit-results.json
    artifacts\inspect-studio.png
    artifacts\restaurant.png
    artifacts\resume\_services_-390.png
    artifacts\resume\_services_-1440.png
    artifacts\resume\_pricing_-390.png
    artifacts\resume\_pricing_-1440.png
    artifacts\resume\_examples_-390.png
    artifacts\resume\_examples_-1440.png
    artifacts\resume\_demos_ridgeline-roofing_roofing_-390.png
    artifacts\resume\_demos_ridgeline-roofing_roofing_-1440.png
    artifacts\resume\_demos_ridgeline-roofing_request-an-assessment_-390.png
    artifacts\resume\_demos_ridgeline-roofing_request-an-assessment_-1440.png
    artifacts\resume\_demos_ridgeline-roofing_repair-or-replace_-390.png
    artifacts\resume\_demos_ridgeline-roofing_repair-or-replace_-1440.png
    artifacts\resume\_demos_ridgeline-roofing_-390.png
    artifacts\resume\_demos_ridgeline-roofing_-1440.png
    artifacts\resume\_demos_clearflow-plumbing_water-heaters_-390.png
    artifacts\resume\_demos_clearflow-plumbing_water-heaters_-1440.png
    artifacts\resume\_demos_clearflow-plumbing_services_-390.png
    artifacts\resume\_demos_clearflow-plumbing_services_-1440.png
    artifacts\resume\_demos_clearflow-plumbing_request-a-visit_-390.png
    artifacts\resume\_demos_clearflow-plumbing_request-a-visit_-1440.png
    artifacts\resume\_demos_clearflow-plumbing_-390.png
    artifacts\resume\_demos_clearflow-plumbing_-1440.png
    artifacts\resume\_-390.png
    artifacts\resume\_-1440.png
    artifacts\resume\work-section-390.png
    artifacts\resume\work-section-1440.png
    artifacts\resume\scenario-section-390.png
    artifacts\resume\scenario-section-1440.png
    artifacts\resume\roofing.png
    artifacts\resume\roofing-mobile.png
    artifacts\resume\plumbing.png
    artifacts\resume\plumbing-mobile.png
    artifacts\resume\package-overview-390.png
    artifacts\resume\package-overview-1440.png
    artifacts\resume\home.png
    artifacts\resume\home-mobile.png
    artifacts\resume\home-hero-390.png
    artifacts\resume\home-hero-1440.png
    artifacts\redesign\hero-390.png
    artifacts\redesign\hero-1440.png
    artifacts\redesign\_-1440.png
    artifacts\redesign\photo-contact-sheet.png
    artifacts\redesign\_-390.png
    artifacts\page-review\_-390.png
    artifacts\page-review\_-1440.png
    artifacts\page-review\_-768.png
    artifacts\page-review\_404_-1440.png
    artifacts\redesign\_services_-390.png
    artifacts\redesign\_services_-1440.png
    artifacts\redesign\_how-it-works_-390.png
    artifacts\redesign\_how-it-works_-1440.png
    artifacts\redesign\_demos_ridgeline-roofing_roof-replacement_-390.png
    artifacts\redesign\_demos_ridgeline-roofing_roof-replacement_-1440.png
    artifacts\redesign\_demos_olive-and-ember_-390.png
    artifacts\redesign\_demos_olive-and-ember_-1440.png
    artifacts\redesign\_demos_form-studio_gallery_-390.png
    artifacts\redesign\_demos_form-studio_gallery_-1440.png
    artifacts\redesign\_demos_current-electric_repairs_-390.png
    artifacts\redesign\_demos_current-electric_repairs_-1440.png
    artifacts\redesign\_book_-390.png
    artifacts\redesign\_book_-1440.png
    artifacts\page-review\_contact_-768.png
    artifacts\page-review\_contact_-390.png
    artifacts\page-review\_contact_-1440.png
    artifacts\page-review\_about_-768.png
    artifacts\page-review\_about_-390.png
    artifacts\page-review\_about_-1440.png
    artifacts\page-review\_404_-768.png
    artifacts\page-review\_404_-390.png
    artifacts\page-review\_demos_current-electric_lighting_-1440.png
    artifacts\page-review\_demos_current-electric_-768.png
    artifacts\page-review\_demos_current-electric_-390.png
    artifacts\page-review\_demos_current-electric_-1440.png
    artifacts\page-review\_demos_current-electric_lighting_-768.png
    artifacts\page-review\_demos_current-electric_lighting_-390.png
    artifacts\page-review\_demos_current-electric_request-a-quote_-1440.png
    artifacts\page-review\_demos_current-electric_request-a-quote_-390.png
    artifacts\page-review\_website-information_-768.png
    artifacts\page-review\_website-information_-390.png
    artifacts\page-review\_website-information_-1440.png
    artifacts\page-review\_services_-768.png
    artifacts\page-review\_services_-390.png
    artifacts\page-review\_services_-1440.png
    artifacts\page-review\_privacy_-768.png
    artifacts\page-review\_privacy_-390.png
    artifacts\page-review\_privacy_-1440.png
    artifacts\page-review\_pricing_-768.png
    artifacts\page-review\_pricing_-390.png
    artifacts\page-review\_pricing_-1440.png
    artifacts\page-review\_faq_-768.png
    artifacts\page-review\_faq_-390.png
    artifacts\page-review\_faq_-1440.png
    artifacts\page-review\_examples_olive-and-ember_-768.png
    artifacts\page-review\_examples_olive-and-ember_-390.png
    artifacts\page-review\_examples_olive-and-ember_-1440.png
    artifacts\page-review\_examples_form-studio_-768.png
    artifacts\page-review\_examples_form-studio_-390.png
    artifacts\page-review\_examples_form-studio_-1440.png
    artifacts\page-review\_examples_current-electric_-768.png
    artifacts\page-review\_examples_current-electric_-390.png
    artifacts\page-review\_examples_current-electric_-1440.png
    artifacts\page-review\_examples_-768.png
    artifacts\page-review\_examples_-390.png
    artifacts\page-review\_examples_-1440.png
    artifacts\page-review\_demos_olive-and-ember_our-story_-768.png
    artifacts\page-review\_demos_olive-and-ember_our-story_-390.png
    artifacts\page-review\_demos_olive-and-ember_our-story_-1440.png
    artifacts\page-review\_demos_olive-and-ember_menu_-768.png
    artifacts\page-review\_demos_olive-and-ember_menu_-390.png
    artifacts\page-review\_demos_olive-and-ember_menu_-1440.png
    artifacts\page-review\_demos_olive-and-ember_book-a-table_-768.png
    artifacts\page-review\_demos_olive-and-ember_book-a-table_-390.png
    artifacts\page-review\_demos_olive-and-ember_book-a-table_-1440.png
    artifacts\page-review\_demos_olive-and-ember_-768.png
    artifacts\page-review\_demos_olive-and-ember_-390.png
    artifacts\page-review\_demos_olive-and-ember_-1440.png
    artifacts\page-review\_demos_form-studio_the-studio_-768.png
    artifacts\page-review\_demos_form-studio_the-studio_-390.png
    artifacts\page-review\_demos_form-studio_the-studio_-1440.png
    artifacts\page-review\_demos_form-studio_find-your-class_-768.png
    artifacts\page-review\_demos_form-studio_find-your-class_-390.png
    artifacts\page-review\_demos_form-studio_find-your-class_-1440.png
    artifacts\page-review\_demos_form-studio_classes_-768.png
    artifacts\page-review\_demos_form-studio_classes_-390.png
    artifacts\page-review\_demos_form-studio_classes_-1440.png
    artifacts\page-review\_demos_form-studio_-768.png
    artifacts\page-review\_demos_form-studio_-390.png
    artifacts\page-review\_demos_form-studio_-1440.png
    artifacts\page-review\_demos_current-electric_services_-768.png
    artifacts\page-review\_demos_current-electric_services_-390.png
    artifacts\page-review\_demos_current-electric_services_-1440.png
    artifacts\page-review\_demos_current-electric_request-a-quote_-768.png
    # SkipManual
    
    A static, multi-page agency website with five original, explicitly fictional example websites. The production build has **no runtime dependencies** and renders real HTML for all 72 routes. Each example contains 10 pages.
    
    ## Run locally
    
    Requires Node.js 22 or later. No package installation is needed to build or preview.
    
    ```sh
    npm run dev
    ```
    
    Open `http://localhost:4321`. Source changes rebuild the output; refresh the browser to see them.
    
    ```sh
    npm run build
    npm run preview
    ```
    
    Deploy the generated `dist/` folder to any static host that supports directory index pages. Use `dist/404.html` as the host's 404 document. Do not configure a single-page-app fallback.
    
    ## Before publishing
    
    Copy `.env.example` to `.env` and fill in verified information only:
    
    - `PUBLIC_SITE_URL`: the final HTTPS origin, with no page path. Enables absolute canonicals, Open Graph URLs, and the sitemap.
    - `PUBLIC_CONTACT_EMAIL`: a verified inbox. Enables an explicit email-draft action; the visitor sends the message in their email application.
    - `PUBLIC_CONTACT_ENDPOINT`: optional JSON POST endpoint for direct form delivery. This takes priority over the email-draft flow.
    - `PUBLIC_BOOKING_URL`: the verified HTTPS scheduling page. Enables the calendar link on `/book/`. The owner has explicitly deferred connecting scheduling and contact details until the design is approved.
    
    Without a contact destination, the form openly operates as a local brief builder. It does **not** claim to send an inquiry. Without a public origin, no domain or canonical URL is invented.
    
    Confirm the scope, setup fees, commitment, ownership, cancellation, hosting, maintenance, revisions, support, timeline, and privacy/hosting details before launch. Unconfirmed commercial terms are `null` in the offer data and are not published as inclusions.
    
    The confirmed $249/month package includes a 10–20 page business website, automatic inquiry follow-up, missed-call text replies, review requests and reminders, and on-page SEO foundations. Messaging platforms, usage allowances, and additional charges still need to be agreed. The conversations on the website illustrate these services; this static marketing site does not itself send automated customer messages.
    
    ### Direct inquiry endpoint contract
    
    The form POSTs JSON containing `name`, `business`, `email`, `phone`, `businessType`, `website`, `need`, `message`, and `source`. Success requires an HTTP 2xx JSON response with `{ "success": true }`. A successful response containing HTML or an unconfirmed result is treated as an error. The endpoint should validate, rate limit, and handle delivery server-side. For a cross-origin service, configure CORS for the real site origin. No private keys belong in the public configuration.
    
    ## Content and architecture
    
    | Location | Purpose |
    | --- | --- |
    | `src/data/site.mjs` | Agency identity, offer, navigation, process, FAQ, and a reserved collection for future verified testimonials |
    | `src/data/examples.mjs` | Example identities, design rationale, page links, and features |
    | `src/data/package.mjs` | Confirmed package services and everyday customer-conversation scenarios |
    | `src/data/example-content.mjs` | Detailed pages, galleries, FAQs, and photography for the five example businesses |
    | `src/data/photo-dimensions.json` | Actual source dimensions generated by the photo-processing script |
    | `src/components/package.mjs` | Package overview and selectable everyday examples |
    | `src/components/photos.mjs` | Responsive images with actual dimensions, local source variants, and alt text |
    | `src/components/ui.mjs` | Shared layout, metadata/schema, navigation, footer, buttons, pricing, and portfolio previews |
    | `src/pages/agency.mjs` | Main agency pages and individual concept pages |
    | `src/pages/agency-redesign.mjs` | White homepage, services, five service details, how-it-works, booking, and short inquiry form |
    | `src/pages/demos.mjs` | Shared example shell and restaurant, electrical, and Pilates websites |
    | `src/pages/trades.mjs` | Core plumbing and roofing pages, service finder, and roof guide |
    | `src/pages/example-expansion.mjs` | Expanded navigation, detail pages, galleries, FAQs, and related-page links |
    | `src/styles/tokens.css` | Primitive, semantic, and component design tokens |
    | `src/styles/global.css` | Shared agency design system and responsive layouts |
    | `src/styles/demos.css` | Shared example styling and the first three visual identities |
    | `src/styles/trades.css` | Distinct plumbing and roofing visual identities and responsive rules |
    | `src/styles/agency.css` | White agency design, photography, direct navigation, and mobile action bar |
    | `src/styles/example-expansion.css` | Detailed example pages, expanded navigation, galleries, and mobile actions |
    | `src/scripts/client.js` | Menus, device previews, scenario selectors, service guides, schedule filters, forms, and brief downloads |
    | `scripts/build.mjs` | Static page generation, assets, robots, sitemap, and route manifest |
    
    ### Example collection
    
    - **Olive & Ember:** home, menu, story, table request, private dining, seasonal kitchen, drinks, gallery, visit guide, dining questions.
    - **Current Electric:** home, services, lighting, project request, repairs, installations, renovations, gallery, approach, questions.
    - **Form Studio:** home, classes/schedule, studio, class request, first visit, Foundations, private sessions, gallery, movement notes, questions.
    - **Clearflow Plumbing:** home/service finder, services, water heaters, visit request, leaks, drains, kitchen/bathroom updates, gallery, what to expect, questions.
    - **Ridgeline Roofing:** home, services, repair-or-replace guide, assessment request, repairs, replacement, materials, gallery, assessment process, questions.
    
    All example pages are `noindex,follow`, carry a persistent example notice, and are omitted from the sitemap. They do not carry real-business schema or imply actual clients, bookings, reviews, or results. Photos are illustrative. No contact form sends data when JavaScript is disabled. Existing `/demos/` route addresses are preserved; public wording uses “examples.”
    
    ### Portfolio images
    
    Portfolio previews are screenshots of the actual example sites. Both desktop and mobile captures are included in `public/images/examples/`. To refresh them after changing an example, run the local server, then:
    
    ```sh
    npm install
    npm run capture:previews
    npm run build
    ```
    
    The capture script uses `playwright-core` and an installed Microsoft Edge browser by default. Set `BROWSER_PATH` to another Chromium executable if needed. `PLAYWRIGHT_MODULE` optionally points at an existing local playwright-core installation.
    
    ## Validation
    
    With the local server running:
    
    ```sh
    npm run audit
    npm run capture:pages
    ```
    
    The audit covers all 72 pages at 1440, 768, 390, and 320 pixels; unique titles and descriptions; business schema; public terminology; headings and labels; broken images, fonts, anchors, and routes; malformed select options; overflow; menus; FAQs; portfolio device views; schedule filters; everyday scenarios; both service guides and their carried-over choices; detailed-page inquiry links; all five galleries with keyboard navigation and focus restoration; short inquiry fields and optional details; local booking-request preparation; example forms; inquiry validation, failure, and success; downloads; reduced motion; and no-JavaScript rendering. Inquiry delivery is mocked during tests; no real message is sent.
    
    Screenshots and results are written to ignored `artifacts/`. The capture script records every page at desktop, tablet, and phone sizes for visual inspection. Automated checks do not replace a full assistive-technology audit.
    
    ## Assets and performance
    
    Fonts and WebP photographs are self-hosted. Font licenses are in `public/fonts/`. WOFF files are losslessly compressed from the source TTF files by `node scripts/optimize-fonts.mjs`; the source TTF files are excluded from clean production builds. The page uses no framework runtime, animation library, tracking script, or remote font dependency.
    
    The image library contains 24 original stock photographs. Run `node scripts/process-photos.mjs` with the same Playwright configuration to produce 640px and 960px variants and update image dimensions. Most new photo components select a suitable source with `srcset`; full-size images remain available in the gallery. Gallery links work without JavaScript, and native dialogs support keyboard browsing when JavaScript is enabled.
    
    Photography sources and design decisions are documented in `docs/asset-sources.md` and `docs/design-system.md`.
    {
      "name": "skipmanual",
      "version": "1.0.0",
      "private": true,
      "type": "module",
      "scripts": {
        "dev": "node scripts/build.mjs && node scripts/serve.mjs --watch",
        "build": "node scripts/build.mjs",
        "preview": "node scripts/serve.mjs",
        "audit": "node scripts/audit.mjs",
        "capture:previews": "node scripts/capture-previews.mjs",
        "capture:pages": "node scripts/review-pages.mjs"
      },
      "dependencies": {},
      "devDependencies": {
        "playwright-core": "^1.50.1"
      }
    }
    ✓ • 348ms

## Activity

    $ Get-Content -Encoding utf8 -LiteralPath 'codex-session-01a109d0-b7e6-7ae3-8218-d712a3b53115.md' -TotalCount 130; rg -n '^## User|^## Assistant|^#|TODO|remaining|stopped|next|approved|skills' 'codex-session-01a109d0-b7e6-7ae3-8218-d712a3b53115.md'
    # Codex conversation
    
    ## User
    
    "C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\codex-session-01a0ff81-6769-7961-9d5d-33416bb03bbb.md"
    this is where we last paused , continue now
    
    ## Assistant
    
    I’ll read the saved session and check the project state, then continue from where we paused.
    
    ## Activity
    
        $ Get-Content -LiteralPath 'codex-session-01a0ff81-6769-7961-9d5d-33416bb03bbb.md' -Tail 240
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              )
            }
            ```
    
            ### Alternative: Tailwind-Only Setup
    
            **Vite projects:**
            ```bash
            npm install -D tailwindcss @tailwindcss/vite
            ```
    
            ```javascript
            // vite.config.ts
            import tailwindcss from '@tailwindcss/vite'
            export default { plugins: [tailwindcss()] }
            ```
    
            ```css
            /* src/index.css */
            import { site, faqs, processSteps as steps } from '../data/site.mjs';
            import { examples } from '../data/examples.mjs';
            import { icon, mark, button, textLink, eyebrow, priceCard, faqList, preview, devicePreview, workCard, pageHero, cta, escape } from '../components/ui.mjs';
    
            const processSection = () => `<section class="section process-section"><div class="container"><div class="section-head"><div>${eyebrow('A straightforward process')}<h2>You run your business.<br>WeÃ¢â‚¬â„¢ll build its website.</h2></div><p>You donÃ¢â‚¬â„¢t need to become a website expert.<br>Just bring what you know about your business.</p></div><div class="process-grid">${steps.map((s,i)=>`<article><span class="process-number">0${i+1} /</span><h3>${s.title}</h3><p>${s.text}</p></article>`).join('')}</div></div></section>`;
    
            function home() { return `<section class="home-hero"><div class="container"><div class="hero-grid"><div class="hero-copy">${eyebrow('Professional websites for local businesses')}<h1>Your business<br>is the real deal.<br><span class="accent">Look the part.</span></h1><p class="lead">Professional websites for local businesses. We handle the design and build, so your next customer sees what makes you worth choosing.</p><div class="actions">${button('LetÃ¢â‚¬â„¢s build your website')}${textLink('Explore the examples','/examples/')}</div><p class="hero-price"><strong>$249 / month</strong><span>The local business website package.</span></p></div><div class="hero-stage"><div class="stage-surface"></div><span class="stage-tag">Built around your kind of business.</span><a class="hero-preview-main" href="/examples/olive-and-ember/" aria-label="Explore the Olive and Ember restaurant demo">${preview(examples[0], { eager:true })}</a><a class="hero-preview-second" href="/examples/form-studio/" aria-label="Explore the Form Studio Pilates demo">${preview(examples[2])}</a><p class="stage-note">${icon('diagonal')}A little of what we could build. Demo concepts.</p></div></div><div class="industry-strip"><p>MADE FOR BUSINESSES<br>THAT MAKE A NEIGHBORHOOD.</p><span>${icon('home')}Home services</span><span>${icon('food')}Restaurants &amp; cafÃƒÂ©s</span><span>${icon('flower')}Health &amp; wellness</span><span>${icon('shop')}Shops &amp; studios</span><span>${icon('tool')}Local professionals</span></div></div></section>
            <section class="section work-section"><div class="container"><div class="section-head"><div>${eyebrow('The possibilities, made visible')}<h2>Different businesses.<br>Same attention to detail.</h2></div>${textLink('Take a closer look','/examples/')}</div><div class="work-grid">${examples.map(workCard).join('')}</div><div class="work-note"><p>Original concepts. Fictional businesses. A real look at our design approach.</p><p>Explore the designs. Picture your business.</p></div></div></section>
            <section class="section container"><div class="value-grid"><div>${eyebrow('More than a place to put your logo')}<h2>Give people a reason<br>to choose you.</h2><p class="lead">Your website should make your business easy to understand, easy to trust, and easy to contact.</p>${textLink('What we do','/services/')}</div><div class="value-list">${[['layout','Look as good as the work you do.','A considered design that gives your business a professional first impression.'],['phone','Make it easy on every screen.','Clear pages, readable information, and useful contact options on phones, tablets, and computers.'],['cursor','Turn interest into a next step.','Help visitors find what they need, then make calling, asking, or booking feel straightforward.']].map(([i,h,p])=>`<article class="value-item">${icon(i)}<div><h3>${h}</h3><p>${p}</p></div></article>`).join('')}</div></div></section>
            ${processSection()}<section class="section container"><div class="price-grid"><div>${eyebrow('The offer')}<h2>A proper website.<br>A simple monthly price.</h2><p class="lead">Start with our $249/month website package. WeÃ¢â‚¬â„¢ll talk through what your business needs and make the details clear before you decide.</p>${textLink('See the pricing details','/pricing/')}</div>${priceCard()}</div></section>
            <section class="section container border-top"><div class="faq-layout"><div>${eyebrow('A few things you might be wondering')}<h2>Good questions.<br>Straight answers.</h2>${textLink('Read all the FAQs','/faq/')}</div>${faqList([faqs[1],faqs[2],faqs[3],faqs[13]])}</div></section>${cta()}`; }
    
            function services() { return `${pageHero('What we do','A website that does<br>your business justice.','We turn what makes your business worth choosing into a clear, considered website. Every decision starts with the people you want to reach.')}<section class="container section" style="padding-top:0">${[
            ['Website design','A first impression that feels like you.','Your business has its own character. The layout, colors, typography, and imagery should reflect it, with a clear purpose behind every page.',['A design direction shaped around your business','Clear pages that explain what you do','A consistent, professional visual identity']],
            ['An easier customer journey','Help people find their next step.','Someone visiting your website might be comparing options, checking your services, or ready to get in touch. We plan the structure around those moments.',['Useful information in the right order','Clear contact and inquiry paths','Readable content for busy people']],
            ['Design for every screen','Your business, wherever they find it.','Your customers wonÃ¢â‚¬â„¢t all visit on the same device. We build layouts that feel comfortable on a phone and considered on a larger screen.',['Responsive layouts for mobile, tablet, and desktop','Accessible navigation and form labels','Thoughtful image sizing and fast-loading pages']],
            ['A clear foundation','Make your website easy to understand.','Clear page titles, useful descriptions, and sensible page structure help people and search engines understand the site. These are foundations, without promises of rankings.',['Meaningful page titles and descriptions','Clear headings and page addresses','Structured business information using verified details']],
            ].map(([label,h,p,items],i)=>`<article class="service-row"><span>0${i+1}</span><h2>${h}</h2><div>${eyebrow(label)}<p>${p}</p><ul>${items.map(x=>`<li>${x}</li>`).join('')}</ul></div></article>`).join('')}<aside class="note-box"><h3>The scope comes first.</h3><p>These are the principles behind our work. WeÃ¢â‚¬â„¢ll agree on your pages, functionality, and package details before starting. Hosting, maintenance, ongoing support, and third-party tools will be discussed explicitly.</p></aside></section>${processSection()}${cta('Built around your business.<br>Starting with a conversation.')}`; }
    
            function pricing() { return `${pageHero('Pricing','A proper website.<br>A clear monthly price.','One base offer for local businesses. A clear conversation about what you need. No pressure to choose a package before you understand it.')}<section class="section container" style="padding-top:0"><div class="price-grid pricing-offer"><div>${eyebrow('Made for local business')}<h2>Put your business<br>in a better light.</h2><p class="lead">Our $249/month website package starts with a simple idea: your business should have an online presence that matches the care you put into your work.</p><p class="lead">Tell us what you need. WeÃ¢â‚¬â„¢ll confirm the right scope and explain the full arrangement before you move forward.</p></div>${priceCard()}</div></section><section class="section surface"><div class="container"><div class="section-head"><div>${eyebrow('Clear before you commit')}<h2>The details belong<br>in the conversation.</h2></div><p>WeÃ¢â‚¬â„¢ll walk through these together so you know exactly what youÃ¢â‚¬â„¢re agreeing to.</p></div><div class="principles-grid"><article><h3>Your website</h3><p>The pages, content, functionality, review process, and realistic timeline for your project.</p></article><article><h3>Your monthly arrangement</h3><p>The full billing terms, any setup costs, commitment, ownership, and cancellation arrangements.</p></article><article><h3>After launch</h3><p>What applies to hosting, maintenance, support, and future changesÃ¢â‚¬â€and who is responsible for each.</p></article></div></div></section><section class="section container"><div class="faq-layout"><div>${eyebrow('Before you decide')}<h2>A little more clarity.</h2></div>${faqList([faqs[1],faqs[12],faqs[9],faqs[10]])}</div></section>${cta()}`; }
    
            function exampleIndex() { return `${pageHero('The demo collection','Picture whatÃ¢â‚¬â„¢s possible<br>for your business.','Three different businesses. Three different directions. Explore the full websites to see how the design changes with the people, the service, and the next step.')}<section class="container section" style="padding-top:0"><div class="note-box" style="margin-bottom:3.5rem"><p><strong>A transparent look at our work.</strong> These are original demo concepts for fictional businesses. They demonstrate what we can design and build; they are not client projects or case studies.</p></div><nav class="collection-nav" aria-label="Browse examples by industry">${examples.map(e=>`<a href="#${e.slug}">${e.category}${icon('arrow')}</a>`).join('')}</nav><div class="examples-list">${examples.map(e=>`<article class="example-row" id="${e.slug}"><a href="/examples/${e.slug}/" class="work-art ${e.theme}" aria-label="Explore ${escape(e.name)}">${preview(e)}</a><div>${eyebrow(`${e.number} / ${e.category} Ã‚Â· Demo concept`)}<h2>${escape(e.name)}</h2><p>${e.description}</p><ul class="tag-list">${e.features.slice(0,3).map(f=>`<li>${f}</li>`).join('')}</ul><p class="small">${e.style}</p><div class="actions">${button('Explore the concept',`/examples/${e.slug}/`)}${textLink('Open the website',`/demos/${e.slug}/`)}</div></div></article>`).join('')}</div></section>${cta('Different business?<br>ThatÃ¢â‚¬â„¢s the point.')}`; }
    
            export function exampleDetail(e) { return `${pageHero(`${e.category} / Demo concept`,escape(e.name),e.description)}<div class="container"><div class="case-hero" style="margin-bottom:2rem"><p class="small">Original website concept Ã‚Â· Fictional business Ã‚Â· ${e.pages.length} pages</p>${button('Explore the full website',`/demos/${e.slug}/`)}</div><div class="case-art ${e.theme}">${devicePreview(e)}</div></div><section class="section container"><div class="case-details"><div>${eyebrow('The design brief')}<h2>${e.style}</h2><p>${e.brief}</p><h3>The intended experience</h3><p>${e.outcome}</p></div><div>${eyebrow('A closer look')}<h2>Designed around<br>the business.</h2><p>${e.approach}</p><h3>Explore the details</h3><ul>${e.features.map(f=>`<li>${f}</li>`).join('')}</ul><h3>Explore the pages</h3><ul class="page-links">${e.pages.map((p,i)=>`<li><a href="/demos/${e.slug}/${e.routes[i] ? `${e.routes[i]}/` : ''}">${p}${icon('diagonal')}</a></li>`).join('')}</ul></div></div><aside class="note-box" style="margin-top:3rem"><p>This is a demonstration, not a client project. Business names, offerings, and content are fictional. Photographs are illustrative. Demo forms do not make real bookings or send inquiries.</p></aside></section><section class="section surface"><div class="container"><div class="section-head"><div>${eyebrow('Keep exploring')}<h2>Another business.<br>Another approach.</h2></div>${textLink('All examples','/examples/')}</div><div class="work-grid work-grid--pair">${examples.filter(x=>x.slug!==e.slug).map(workCard).join('')}</div></div></section>${cta('Something like this.<br>Made for your business.')}`; }
            âœ“ â€¢ 922ms
    
        ## Assistant
    
        The useful lesson from the competitor is to explain each service through an everyday situation. Iâ€™ll add those examples in SkipManualâ€™s voice. For the new websites, Clearflow Plumbing will use a clean, service-first layout; Ridgeline Roofing will use a more architectural style with a repair-versus-replacement guide. Review requests will invite honest feedback, without promising five-star ratings.
    
        ## Activity
    
            file changes: Completed Â· 3 changes
            Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\src\data\examples.mjs
            @@ -15,3 +15,3 @@
               {
            -    slug: 'current-electric', name: 'Current Electric', category: 'Home services',
            +    slug: 'current-electric', name: 'Current Electric', category: 'Electrical',
                 style: 'Direct. Dependable. Clear.', theme: 'current', number: '02',
            @@ -40,2 +40,28 @@
               },
            +  {
            +    slug: 'clearflow-plumbing', name: 'Clearflow Plumbing', category: 'Plumbing',
            +    style: 'Fresh. Practical. Reassuring.', theme: 'clearflow', number: '04',
            +    description: 'A helpful residential plumbing website that starts with the problem, then makes the next step simple.',
            +    brief: 'Help a homeowner identify the service they need without knowing plumbing terminology, and make it easy to describe the issue.',
            +    approach: 'Bright white, clear blue, and practical service choices create a helpful, approachable identity. A problem-first service finder, roomy layouts, and plain-language water-heater guidance put usefulness first.',
            +    features: ['Interactive service finder', 'Plain-language service pages', 'Water-heater information', 'A request form that remembers the service'],
            +    image: '/images/plumbing.webp', alt: 'A bright bathroom with neatly installed taps and plumbing fixtures',
            +    pages: ['Home', 'Plumbing services', 'Water heaters', 'Request a visit'],
            +    routes: ['', 'services', 'water-heaters', 'request-a-visit'],
            +    headline: 'Letâ€™s get your home\nback to normal.',
            +    outcome: 'Let a homeowner start with a familiar problem, find the right information, and make an informed inquiry.',
            +  },
            +  {
            +    slug: 'ridgeline-roofing', name: 'Ridgeline Roofing', category: 'Roofing',
            +    style: 'Grounded. Architectural. Considered.', theme: 'ridgeline', number: '05',
            +    description: 'An architectural roofing website that helps homeowners understand their options before requesting an assessment.',
            +    brief: 'Give a homeowner a clear route through repairs, replacement, and roof materials, without pressure or unsupported promises.',
            +    approach: 'Sand, charcoal, and rust pair with wide architectural imagery, structured typography, and an editorial page rhythm. A repair-or-replace guide gives visitors something useful to explore before they make an inquiry.',
            +    features: ['Repair-or-replace guidance', 'Roof material comparison', 'Distinct roofing service pages', 'A guided assessment request'],
            +    image: '/images/roofing.webp', alt: 'A residential home with a prominent pitched roof and surrounding trees',
            +    pages: ['Home', 'Roofing services', 'Repair or replace?', 'Request an assessment'],
            +    routes: ['', 'roofing', 'repair-or-replace', 'request-an-assessment'],
            +    headline: 'Built around what\nyour roof needs.',
            +    outcome: 'Help visitors understand the questions worth asking about their roof, then request an assessment with confidence.',
            +  },
             ];
            Add: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\src\data\package.mjs
            // Package inclusions confirmed by the owner. Commercial terms remain in site.mjs.
            export const packageServices = [
              { id: 'website', name: 'Business-ready website', short: '10â€“20 page business website', icon: 'layout', headline: 'A proper home for your business online.', description: 'A professional, mobile-friendly website with 10â€“20 pages to explain your services, answer common questions, and help customers get in touch.', points: ['10â€“20 pages, planned around your business', 'Clear service pages and inquiry forms', 'Designed for phones, tablets, and computers'], example: 'A plumbing customer can find your water-heater service, understand the next step, and request a visit.' },
              { id: 'follow-up', name: 'Automatic inquiry follow-up', short: 'Automatic inquiry follow-up', icon: 'cursor', headline: 'Keep a new inquiry from going quiet.', description: 'A follow-up sequence acknowledges new inquiries and helps keep the conversation moving while you are busy running your business.', points: ['An initial reply to a new inquiry', 'Follow-up messages tailored to your business', 'A clear handoff when it is time for you to respond'], example: 'Someone asks about a roof repair. They receive a reply, then a useful follow-up if the conversation has not moved forward.' },
              { id: 'missed-calls', name: 'Missed-call text replies', short: 'Missed-call text replies', icon: 'phone', headline: 'Missed the call? Start with a text.', description: 'When you cannot answer, an automatic text lets the caller know you missed them and invites them to explain what they need.', points: ['An automatic reply after a missed call', 'A message that sounds like your business', 'An easy way for the customer to reply'], example: 'You are on a job when someone calls. A text asks what they need, so you have something useful to come back to.' },
              { id: 'reviews', name: 'Review requests & reminders', short: 'Review requests & reminders', icon: 'sun', headline: 'Make asking for feedback part of the process.', description: 'Send a clear invitation to review your business after a completed job, with reminders that help customers follow through.', points: ['A straightforward review invitation', 'Follow-up reminders for eligible customers', 'The same opportunity to leave honest feedback for everyone'], example: 'After a completed cleaning or repair, your customer receives a simple request to share their experience. No ratings are promised or screened out.' },
              { id: 'seo', name: 'On-page SEO foundations', short: 'On-page SEO foundations', icon: 'shop', headline: 'Help search engines understand your services.', description: 'Clear page titles, useful service content, and accurate business information give your website a sensible foundation for search.', points: ['Unique page titles and descriptions', 'Clear headings, service content, and internal links', 'Structured information using your verified business details'], example: 'Your roof-repair page explains that service clearly, rather than leaving every service buried on one generic page. Search rankings are not guaranteed.' },
            ];
    
            export const scenarios = [
              { id: 'missed-call', label: 'You miss a call', heading: 'Youâ€™re on a job.<br>Your phone rings.', text: 'You cannot answer while you are working. A missed-call reply gives the customer a way to tell you what they need.', business: 'Plumbing business', trigger: 'A customerâ€™s call goes unanswered', messages: [{ kind:'business', text:'Thanks for calling. Sorry we missed you. What plumbing issue can we help with?' },{kind:'customer',text:'The kitchen tap is leaking. Could someone take a look?' }], outcome:'You come back to a conversation, with the problem already explained.', note:'Example wording. Reply rules and message timing are agreed during setup.' },
              { id: 'inquiry', label: 'A new inquiry arrives', heading: 'Someone asks for a quote.<br>Then gets on with their day.', text: 'An acknowledgment lets them know their inquiry arrived. A useful follow-up keeps the next step clear.', business: 'Roofing business', trigger: 'A customer submits the website form', messages: [{kind:'business',text:'Thanks for telling us about your roof. Is this a repair you need help with, or are you considering a replacement?'},{kind:'customer',text:'A repair, I think. There is a leak near the chimney.'}], outcome:'You have the context to pick up the inquiry personally.', note:'Illustrative conversation. The system supports your follow-up; you still handle the customer and the job.' },
              { id: 'review', label: 'You finish the job', heading: 'The work is finished.<br>Make feedback easy.', text: 'A simple invitation and a helpful reminder make asking for reviews a repeatable part of your process.', business: 'Local service business', trigger: 'A completed job is ready for a review request', messages: [{kind:'business',text:'Thank you for choosing us. Would you share an honest review of your experience? Here is the link.'},{kind:'system',text:'If needed: a follow-up reminder, using the agreed schedule.'}], outcome:'Customers get a clear invitation to share their experience.', note:'Every rating is welcome. Review requests do not filter customers by satisfaction or guarantee a score.' },
            ];
            Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\src\data\site.mjs
            @@ -1,4 +1,6 @@
            +import { packageServices } from './package.mjs';
            +
             export const site = {
               name: 'SkipManual',
            -  description: 'Professional, modern websites for local businesses. Explore the $249/month website package and see what SkipManual could build for your business.',
            +  description: 'A professional 10â€“20 page website, automatic inquiry follow-up, missed-call text replies, review requests, and on-page SEO for local businesses. $249/month with SkipManual.',
               url: process.env.PUBLIC_SITE_URL || '',
            @@ -13,3 +15,3 @@
    1:# Codex conversation
    3:## User
    8:## Assistant
    12:## Activity
    44:        function home() { return `<section class="home-hero"><div class="container"><div class="hero-grid"><div class="hero-copy">${eyebrow('Professional websites for local businesses')}<h1>Your business<br>is the real deal.<br><span class="accent">Look the part.</span></h1><p class="lead">Professional websites for local businesses. We handle the design and build, so your next customer sees what makes you worth choosing.</p><div class="actions">${button('LetÃ¢â‚¬â„¢s build your website')}${textLink('Explore the examples','/examples/')}</div><p class="hero-price"><strong>$249 / month</strong><span>The local business website package.</span></p></div><div class="hero-stage"><div class="stage-surface"></div><span class="stage-tag">Built around your kind of business.</span><a class="hero-preview-main" href="/examples/olive-and-ember/" aria-label="Explore the Olive and Ember restaurant demo">${preview(examples[0], { eager:true })}</a><a class="hero-preview-second" href="/examples/form-studio/" aria-label="Explore the Form Studio Pilates demo">${preview(examples[2])}</a><p class="stage-note">${icon('diagonal')}A little of what we could build. Demo concepts.</p></div></div><div class="industry-strip"><p>MADE FOR BUSINESSES<br>THAT MAKE A NEIGHBORHOOD.</p><span>${icon('home')}Home services</span><span>${icon('food')}Restaurants &amp; cafÃƒÂ©s</span><span>${icon('flower')}Health &amp; wellness</span><span>${icon('shop')}Shops &amp; studios</span><span>${icon('tool')}Local professionals</span></div></div></section>
    46:        <section class="section container"><div class="value-grid"><div>${eyebrow('More than a place to put your logo')}<h2>Give people a reason<br>to choose you.</h2><p class="lead">Your website should make your business easy to understand, easy to trust, and easy to contact.</p>${textLink('What we do','/services/')}</div><div class="value-list">${[['layout','Look as good as the work you do.','A considered design that gives your business a professional first impression.'],['phone','Make it easy on every screen.','Clear pages, readable information, and useful contact options on phones, tablets, and computers.'],['cursor','Turn interest into a next step.','Help visitors find what they need, then make calling, asking, or booking feel straightforward.']].map(([i,h,p])=>`<article class="value-item">${icon(i)}<div><h3>${h}</h3><p>${p}</p></div></article>`).join('')}</div></div></section>
    52:        ['An easier customer journey','Help people find their next step.','Someone visiting your website might be comparing options, checking your services, or ready to get in touch. We plan the structure around those moments.',['Useful information in the right order','Clear contact and inquiry paths','Readable content for busy people']],
    59:        function exampleIndex() { return `${pageHero('The demo collection','Picture whatÃ¢â‚¬â„¢s possible<br>for your business.','Three different businesses. Three different directions. Explore the full websites to see how the design changes with the people, the service, and the next step.')}<section class="container section" style="padding-top:0"><div class="note-box" style="margin-bottom:3.5rem"><p><strong>A transparent look at our work.</strong> These are original demo concepts for fictional businesses. They demonstrate what we can design and build; they are not client projects or case studies.</p></div><nav class="collection-nav" aria-label="Browse examples by industry">${examples.map(e=>`<a href="#${e.slug}">${e.category}${icon('arrow')}</a>`).join('')}</nav><div class="examples-list">${examples.map(e=>`<article class="example-row" id="${e.slug}"><a href="/examples/${e.slug}/" class="work-art ${e.theme}" aria-label="Explore ${escape(e.name)}">${preview(e)}</a><div>${eyebrow(`${e.number} / ${e.category} Ã‚Â· Demo concept`)}<h2>${escape(e.name)}</h2><p>${e.description}</p><ul class="tag-list">${e.features.slice(0,3).map(f=>`<li>${f}</li>`).join('')}</ul><p class="small">${e.style}</p><div class="actions">${button('Explore the concept',`/examples/${e.slug}/`)}${textLink('Open the website',`/demos/${e.slug}/`)}</div></div></article>`).join('')}</div></section>${cta('Different business?<br>ThatÃ¢â‚¬â„¢s the point.')}`; }
    82:        +    description: 'A helpful residential plumbing website that starts with the problem, then makes the next step simple.',
    109:          { id: 'website', name: 'Business-ready website', short: '10â€“20 page business website', icon: 'layout', headline: 'A proper home for your business online.', description: 'A professional, mobile-friendly website with 10â€“20 pages to explain your services, answer common questions, and help customers get in touch.', points: ['10â€“20 pages, planned around your business', 'Clear service pages and inquiry forms', 'Designed for phones, tablets, and computers'], example: 'A plumbing customer can find your water-heater service, understand the next step, and request a visit.' },
    118:          { id: 'inquiry', label: 'A new inquiry arrives', heading: 'Someone asks for a quote.<br>Then gets on with their day.', text: 'An acknowledgment lets them know their inquiry arrived. A useful follow-up keeps the next step clear.', business: 'Roofing business', trigger: 'A customer submits the website form', messages: [{kind:'business',text:'Thanks for telling us about your roof. Is this a repair you need help with, or are you considering a replacement?'},{kind:'customer',text:'A repair, I think. There is a leak near the chimney.'}], outcome:'You have the context to pick up the inquiry personally.', note:'Illustrative conversation. The system supports your follow-up; you still handle the customer and the job.' },
    257:## Activity
    270:## Activity
    318:    2752:    function home() { return `<section class="home-hero"><div class="container"><div class="hero-grid"><div class="hero-copy">${eyebrow('Good websites. Less on your plate.')}<h1>Your business<br>is the real deal.<br><span class="accent">Look the part.</span></h1><p class="lead">Professional websites for local businesses. We handle the design and build, so your next customer sees what makes you worth choosing.</p><div class="actions">${button('Let’s build your website')}${textLink('Explore the examples','/examples/')}</div><p class="hero-price"><strong>$249 / month</strong><span>A clear starting point for your website.</span></p></div><div class="hero-stage"><div class="stage-surface"></div><span class="stage-tag">Built around your kind of business.</span><a class="hero-preview-main" href="/examples/olive-and-ember/" aria-label="Explore the Olive and Ember restaurant demo">${preview(examples[0], { eager:true })}</a><a class="hero-preview-second" href="/examples/form-studio/" aria-label="Explore the Form Studio Pilates demo">${preview(examples[2])}</a><p class="stage-note">${icon('diagonal')}A little of what we could build. Demo concepts.</p></div></div><div class="industry-strip"><p>MADE FOR BUSINESSES<br>THAT MAKE A NEIGHBORHOOD.</p><span>${icon('home')}Home services</span><span>${icon('food')}Restaurants &amp; cafés</span><span>${icon('flower')}Health &amp; wellness</span><span>${icon('shop')}Shops &amp; studios</span><span>${icon('tool')}Local professionals</span></div></div></section>
    321:    2775:    function contact() { const connected = Boolean(site.contactEndpoint || site.email); return `<section class="container page-hero"><div class="contact-grid"><div class="contact-copy">${eyebrow('Let’s start with your business')}<h1>Your next website<br>starts right here.</h1><p class="lead">Tell us a little about your business and what you have in mind. You don’t need a finished brief or the right technical words.</p><div class="contact-points"><div><h2>A conversation, not a commitment.</h2><p>We’ll discuss the fit and the details before you decide to move forward.</p></div><div><h2>A clear starting point.</h2><p>The website package is $249/month. Your scope and full terms will be confirmed together.</p></div><div><h2>Something caught your eye?</h2><p>Mention a demo you liked. It’s a useful starting point for your own design.</p>${textLink('Browse the examples','/examples/')}</div></div></div><form class="inquiry-form" data-inquiry data-endpoint="${escape(site.contactEndpoint)}" data-email="${escape(site.email)}"><p class="form-intro">The essentials first. Fields marked * are required.</p><div class="form-grid"><div class="field"><label for="name">Your name *</label><input id="name" name="name" autocomplete="name" maxlength="100" required></div><div class="field"><label for="business">Business name *</label><input id="business" name="business" autocomplete="organization" maxlength="160" required></div><div class="field full"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" maxlength="254" required></div><div class="field"><label for="phone">Phone <span>(optional)</span></label><input id="phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div><div class="field"><label for="business-type">Business type <span>(optional)</span></label><select id="business-type" name="businessType"><option value="">Select a business type</option>Home services</option><option>Restaurant or café</option><option>Health or wellness</option><option>Shop, salon, or studio</option><option>Professional services</option><option>Something else</option></select></div><div class="field full"><label for="website">Current website <span>(optional)</span></label><input id="website" name="website" type="text" inputmode="url" autocomplete="url" maxlength="500" placeholder="yourbusiness.com"></div><div class="field full"><label for="need">What are you looking for? *</label><select id="need" name="need" required><option value="">Choose what fits best</option>A new website</option><option>A redesign of my website</option><option>I’m exploring my options</option></select></div><div class="field full"><label for="message">Anything else we should know? <span>(optional)</span></label><textarea id="message" name="message" maxlength="4000" placeholder="A little about your business, what you need, or an example you like."></textarea></div></div><p class="form-note">${connected ? 'Your details are used to respond to your inquiry.' : 'Online inquiries aren’t open yet. You can prepare and save your brief here; nothing will be sent.'} <a href="/privacy/">Privacy information</a>.</p><button class="button form-submit" type="submit">${site.contactEndpoint ? 'Send your inquiry' : site.email ? 'Prepare your email' : 'Prepare your website brief'}${icon()}</button><noscript><p class="form-note">Enable JavaScript to ${connected ? 'prepare your inquiry' : 'prepare and save a brief'}.${site.email ? ` You can also email <a href="mailto:${escape(site.email)}">${escape(site.email)}</a>.` : ''}</p></noscript><p class="form-feedback" role="status" aria-live="polite" tabindex="-1"></p><div class="brief-output" hidden><label class="small" for="brief">Your website brief</label><textarea id="brief" readonly></textarea><div class="actions"><button type="button" class="button button--outline" data-copy>Copy brief</button><button type="button" class="button button--outline" data-download>Save brief</button></div></div></form></div></section>`; }
    460:    5951:    function home() { return `<section class="home-hero"><div class="container"><div class="hero-grid"><div class="hero-copy">${eyebrow('Professional websites for local businesses')}<h1>Your business<br>is the real deal.<br><span class="accent">Look the part.</span></h1><p class="lead">Professional websites for local businesses. We handle the design and build, so your next customer sees what makes you worth choosing.</p><div class="actions">${button('Letâ€™s build your website')}${textLink('Explore the examples','/examples/')}</div><p class="hero-price"><strong>$249 / month</strong><span>The local business website package.</span></p></div><div class="hero-stage"><div class="stage-surface"></div><span class="stage-tag">Built around your kind of business.</span><a class="hero-preview-main" href="/examples/olive-and-ember/" aria-label="Explore the Olive and Ember restaurant demo">${preview(examples[0], { eager:true })}</a><a class="hero-preview-second" href="/examples/form-studio/" aria-label="Explore the Form Studio Pilates demo">${preview(examples[2])}</a><p class="stage-note">${icon('diagonal')}A little of what we could build. Demo concepts.</p></div></div><div class="industry-strip"><p>MADE FOR BUSINESSES<br>THAT MAKE A NEIGHBORHOOD.</p><span>${icon('home')}Home services</span><span>${icon('food')}Restaurants &amp; cafÃ©s</span><span>${icon('flower')}Health &amp; wellness</span><span>${icon('shop')}Shops &amp; studios</span><span>${icon('tool')}Local professionals</span></div></div></section>
    467:    5989:    +    description: 'A helpful residential plumbing website that starts with the problem, then makes the next step simple.',
    475:    6016:      { id: 'website', name: 'Business-ready website', short: '10–20 page business website', icon: 'layout', headline: 'A proper home for your business online.', description: 'A professional, mobile-friendly website with 10–20 pages to explain your services, answer common questions, and help customers get in touch.', points: ['10–20 pages, planned around your business', 'Clear service pages and inquiry forms', 'Designed for phones, tablets, and computers'], example: 'A plumbing customer can find your water-heater service, understand the next step, and request a visit.' },
    486:## Activity
    488:    $ Get-ChildItem -Force | Select-Object Mode,Name; Get-Content package.json; rg --files src scripts public -g '!*.webp' -g '!*.png' -g '!*.woff2'; Get-Content 'C:/Users/muham/.codex/skills/ui-ux-pro-max/cli/assets/skills/ui-styling/SKILL.md' -TotalCount 240
    680:    - Dark mode setup with next-themes
    791:## Activity
    1011:      { title: 'Make your next move.', text: 'We agree on the launch plan and what happens next, with the details clear up front.' },
    1025:      { category: 'Your website', q: 'What happens after launch?', a: 'We’ll confirm the arrangements for hosting, maintenance, support, and future updates as part of your package discussion. We don’t want you guessing about what happens next.' },
    1086:## Assistant
    1090:## Activity
    1145:    function home() { return `<section class="home-hero"><div class="container"><div class="hero-grid"><div class="hero-copy">${eyebrow('Professional websites for local businesses')}<h1>Your business<br>is the real deal.<br><span class="accent">Look the part.</span></h1><p class="lead">Professional websites for local businesses. We handle the design and build, so your next customer sees what makes you worth choosing.</p><div class="actions">${button('Let’s build your website')}${textLink('Explore the examples','/examples/')}</div><p class="hero-price"><strong>$249 / month</strong><span>The local business website package.</span></p></div><div class="hero-stage"><div class="stage-surface"></div><span class="stage-tag">Built around your kind of business.</span><a class="hero-preview-main" href="/examples/olive-and-ember/" aria-label="Explore the Olive and Ember restaurant demo">${preview(examples[0], { eager:true })}</a><a class="hero-preview-second" href="/examples/form-studio/" aria-label="Explore the Form Studio Pilates demo">${preview(examples[2])}</a><p class="stage-note">${icon('diagonal')}A little of what we could build. Demo concepts.</p></div></div><div class="industry-strip"><p>MADE FOR BUSINESSES<br>THAT MAKE A NEIGHBORHOOD.</p><span>${icon('home')}Home services</span><span>${icon('food')}Restaurants &amp; cafés</span><span>${icon('flower')}Health &amp; wellness</span><span>${icon('shop')}Shops &amp; studios</span><span>${icon('tool')}Local professionals</span></div></div></section>
    1147:    <section class="section container"><div class="value-grid"><div>${eyebrow('More than a place to put your logo')}<h2>Give people a reason<br>to choose you.</h2><p class="lead">Your website should make your business easy to understand, easy to trust, and easy to contact.</p>${textLink('What we do','/services/')}</div><div class="value-list">${[['layout','Look as good as the work you do.','A considered design that gives your business a professional first impression.'],['phone','Make it easy on every screen.','Clear pages, readable information, and useful contact options on phones, tablets, and computers.'],['cursor','Turn interest into a next step.','Help visitors find what they need, then make calling, asking, or booking feel straightforward.']].map(([i,h,p])=>`<article class="value-item">${icon(i)}<div><h3>${h}</h3><p>${p}</p></div></article>`).join('')}</div></div></section>
    1153:    ['An easier customer journey','Help people find their next step.','Someone visiting your website might be comparing options, checking your services, or ready to get in touch. We plan the structure around those moments.',['Useful information in the right order','Clear contact and inquiry paths','Readable content for busy people']],
    1160:    function exampleIndex() { return `${pageHero('The demo collection','Picture what’s possible<br>for your business.','Three different businesses. Three different directions. Explore the full websites to see how the design changes with the people, the service, and the next step.')}<section class="container section" style="padding-top:0"><div class="note-box" style="margin-bottom:3.5rem"><p><strong>A transparent look at our work.</strong> These are original demo concepts for fictional businesses. They demonstrate what we can design and build; they are not client projects or case studies.</p></div><nav class="collection-nav" aria-label="Browse examples by industry">${examples.map(e=>`<a href="#${e.slug}">${e.category}${icon('arrow')}</a>`).join('')}</nav><div class="examples-list">${examples.map(e=>`<article class="example-row" id="${e.slug}"><a href="/examples/${e.slug}/" class="work-art ${e.theme}" aria-label="Explore ${escape(e.name)}">${preview(e)}</a><div>${eyebrow(`${e.number} / ${e.category} · Demo concept`)}<h2>${escape(e.name)}</h2><p>${e.description}</p><ul class="tag-list">${e.features.slice(0,3).map(f=>`<li>${f}</li>`).join('')}</ul><p class="small">${e.style}</p><div class="actions">${button('Explore the concept',`/examples/${e.slug}/`)}${textLink('Open the website',`/demos/${e.slug}/`)}</div></div></article>`).join('')}</div></section>${cta('Different business?<br>That’s the point.')}`; }
    1164:    function about() { return `${pageHero('About SkipManual','For the people with<br>a business to run.','Your days are already full. Building a professional online presence shouldn’t mean becoming a designer, writer, or website expert on top of everything else.')}<section class="section container" style="padding-top:0"><div class="about-split"><div class="about-mark">${mark()}</div><div>${eyebrow('Why SkipManual exists')}<h2>Good work deserves<br>a good website.</h2><p>Local businesses put care into the details: the way a job is finished, how a customer is welcomed, the experience someone comes back for.</p><p>We believe a website should reflect that same care. SkipManual brings your business into focus online, with clear information, thoughtful design, and an obvious next step.</p><p>Our role is to make the website side easier to understand, then design and build something you can confidently share.</p></div></div></section><section class="container about-statement">${eyebrow('Our point of view')}<h2>A website shouldn’t need<br>an explanation.<br><span class="serif"><em>It should give one.</em></span></h2><p>What you do. Who it’s for. Why it matters. How to get in touch. When those things are clear, your website is doing its job.</p></section><section class="section container"><div class="section-head"><div>${eyebrow('How we work')}<h2>Thoughtful by design.<br>Straightforward by choice.</h2></div></div><div class="principles-grid"><article><h3>Clarity over complexity.</h3><p>Useful pages, understandable language, and decisions that help your customers—not a list of features they don’t need.</p></article><article><h3>Character over sameness.</h3><p>A restaurant and an electrician have different customers and different needs. Their websites should reflect that.</p></article><article><h3>Honesty from the start.</h3><p>Our examples are labeled demos. Our scope is agreed with you. We let the work speak without invented reviews or results.</p></article></div></section>${cta()}`; }
    1168:    function contact() { const connected = Boolean(site.contactEndpoint || site.email); return `<section class="container page-hero"><div class="contact-grid"><div class="contact-copy"><div class="contact-intro">${eyebrow('Let’s start with your business')}<h1>Your next website<br>starts right here.</h1><p class="lead">Tell us a little about your business and what you have in mind. You don’t need a finished brief or the right technical words.</p></div><div class="contact-points"><div><h2>A conversation, not a commitment.</h2><p>We’ll discuss the fit and the details before you decide to move forward.</p></div><div><h2>A clear starting point.</h2><p>The website package is $249/month. Your scope and full terms will be confirmed together.</p></div><div><h2>Something caught your eye?</h2><p>Mention a demo you liked. It’s a useful starting point for your own design.</p>${textLink('Browse the examples','/examples/')}</div></div></div><form class="inquiry-form" data-inquiry data-endpoint="${escape(site.contactEndpoint)}" data-email="${escape(site.email)}">${!connected ? '<div class="form-availability"><strong>Prepare a brief, ready for when inquiries open.</strong><p>This form saves a brief on your device. It does not send an inquiry yet.</p></div>' : ''}<p class="form-intro">The essentials first. Fields marked * are required.</p><div class="form-grid"><div class="field"><label for="name">Your name *</label><input id="name" name="name" autocomplete="name" maxlength="100" required></div><div class="field"><label for="business">Business name *</label><input id="business" name="business" autocomplete="organization" maxlength="160" required></div><div class="field full"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" maxlength="254" required></div><div class="field"><label for="phone">Phone <span>(optional)</span></label><input id="phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div><div class="field"><label for="business-type">Business type <span>(optional)</span></label><select id="business-type" name="businessType"><option value="">Select a business type</option><option>Home services</option><option>Restaurant or café</option><option>Health or wellness</option><option>Shop, salon, or studio</option><option>Professional services</option><option>Something else</option></select></div><div class="field full"><label for="website">Current website <span>(optional)</span></label><input id="website" name="website" type="text" inputmode="url" autocomplete="url" maxlength="500" placeholder="yourbusiness.com"></div><div class="field full"><label for="need">What are you looking for? *</label><select id="need" name="need" required><option value="">Choose what fits best</option><option>A new website</option><option>A redesign of my website</option><option>I’m exploring my options</option></select></div><div class="field full"><label for="message">Anything else we should know? <span>(optional)</span></label><textarea id="message" name="message" maxlength="4000" placeholder="A little about your business, what you need, or an example you like."></textarea></div></div><p class="form-note">${connected ? 'Your details are used to respond to your inquiry.' : 'Online inquiries aren’t open yet. You can prepare and save your brief here; nothing will be sent.'} <a href="/privacy/">Privacy information</a>.</p><button class="button form-submit" type="submit" data-js-submit disabled>${site.contactEndpoint ? 'Send your inquiry' : site.email ? 'Prepare your email' : 'Prepare your website brief'}${icon()}</button><noscript><p class="form-note">Enable JavaScript to ${connected ? 'prepare your inquiry' : 'prepare and save a brief'}.${site.email ? ` You can also email <a href="mailto:${escape(site.email)}">${escape(site.email)}</a>.` : ''}</p></noscript><p class="form-feedback" role="status" aria-live="polite" tabindex="-1"></p><div class="brief-output" hidden><label class="small" for="brief">Your website brief</label><textarea id="brief" readonly></textarea><div class="actions"><button type="button" class="button button--outline" data-copy>Copy brief</button><button type="button" class="button button--outline" data-download>Save brief</button></div></div></form></div></section>`; }
    1176:      { path:'/services/', title:'Website Design for Local Businesses | SkipManual', description:'Thoughtful website design, clear pages, and simple contact paths for local businesses. See how SkipManual approaches your next website.', render:services },
    1188:## Activity
    1225:     ['02','Repairs & fault finding','For the switch that stopped working, the outlet that needs attention, or the problem you can’t quite explain.','request-a-quote'],
    1229:    function currentHome(e) { return `<section class="demo-container current-hero"><div>${dkicker('Residential electrical. Clearly considered.')}<h1>Good energy.<br>Expertly wired<span>.</span></h1><p>From the lights you live by to the outlets you rely on. Practical electrical work, explained in plain language.</p>${dlink(e,'Let’s talk about your project','request-a-quote')}<p class="current-hero-note">Your home. Your questions. A clear next step.</p></div><div class="current-hero-image">${dimage('electrician','Electrical professional working on a wiring installation','',true)}<span>${icon('bolt')}Make your home work better.</span></div></section><div class="current-strip"><div class="demo-container"><span>${icon('home')}Work around your home</span><span>${icon('layout')}Options explained clearly</span><span>${icon('cursor')}A straightforward next step</span></div></div><section class="demo-section demo-container"><div class="demo-section-head split"><div>${dkicker('How we can help')}<h2>The small fixes.<br>The bigger plans.</h2></div><p>Whatever brought you here, start with the job.<br>We’ll help make the next step clear.</p></div><div class="electrical-services">${services.slice(0,3).map(([n,h,p,r])=>`<article><span>${n} /</span><h3>${h}</h3><p>${p}</p>${dlink(e,'Explore this service',r,'demo-text-link')}</article>`).join('')}</div></section><section class="current-process"><div class="demo-container demo-section"><div>${dkicker('Let’s keep it simple')}<h2>Less guesswork.<br>More getting it sorted.</h2></div><ol><li><span>01</span><div><h3>Tell us what’s going on.</h3><p>A small repair, a new idea, or a full renovation. Start with what you know.</p></div></li><li><span>02</span><div><h3>Understand your options.</h3><p>The scope, practical choices, and next steps should be clear before any work.</p></div></li><li><span>03</span><div><h3>Make a plan for the work.</h3><p>Agree on what needs doing and how it fits around your home.</p></div></li></ol></div></section><section class="demo-section demo-container current-faq"><h2>A little clarity<br>goes a long way.</h2>${faqList([{q:'What should I include in my request?',a:'Describe the issue or project, the room involved, and what you would like to change. You do not need to know the technical name.'},{q:'Can I ask about more than one job?',a:'Yes. Include the different tasks in one request so they can be considered together.'},{q:'Does this demo accept real electrical jobs?',a:'No. Current Electric is a fictional website concept. The request form demonstrates an inquiry flow only.'}])}</section><section class="demo-closing"><div class="demo-container"><h2>Let’s shed some light<br>on your next project.</h2>${dlink(e,'Start a project request','request-a-quote')}</div></section>`; }
    1278:## Activity
    1620:## Activity
    1657:     ['02','Repairs & fault finding','For the switch that stopped working, the outlet that needs attention, or the problem you can’t quite explain.','request-a-quote'],
    1778:    function exampleIndex() { return `${pageHero('The demo collection','Picture what’s possible<br>for your business.','Three different businesses. Three different directions. Explore the full websites to see how the design changes with the people, the service, and the next step.')}<section class="container section" style="padding-top:0"><div class="note-box" style="margin-bottom:3.5rem"><p><strong>A transparent look at our work.</strong> These are original demo concepts for fictional businesses. They demonstrate what we can design and build; they are not client projects or case studies.</p></div><nav class="collection-nav" aria-label="Browse examples by industry">${examples.map(e=>`<a href="#${e.slug}">${e.category}${icon('arrow')}</a>`).join('')}</nav><div class="examples-list">${examples.map(e=>`<article class="example-row" id="${e.slug}"><a href="/examples/${e.slug}/" class="work-art ${e.theme}" aria-label="Explore ${escape(e.name)}">${preview(e)}</a><div>${eyebrow(`${e.number} / ${e.category} · Demo concept`)}<h2>${escape(e.name)}</h2><p>${e.description}</p><ul class="tag-list">${e.features.slice(0,3).map(f=>`<li>${f}</li>`).join('')}</ul><p class="small">${e.style}</p><div class="actions">${button('Explore the concept',`/examples/${e.slug}/`)}${textLink('Open the website',`/demos/${e.slug}/`)}</div></div></article>`).join('')}</div></section>${cta('Different business?<br>That’s the point.')}`; }
    1782:    function about() { return `${pageHero('About SkipManual','For the people with<br>a business to run.','Your days are already full. Building a professional online presence shouldn’t mean becoming a designer, writer, or website expert on top of everything else.')}<section class="section container" style="padding-top:0"><div class="about-split"><div class="about-mark">${mark()}</div><div>${eyebrow('Why SkipManual exists')}<h2>Good work deserves<br>a good website.</h2><p>Local businesses put care into the details: the way a job is finished, how a customer is welcomed, the experience someone comes back for.</p><p>We believe a website should reflect that same care. SkipManual brings your business into focus online, with clear information, thoughtful design, and an obvious next step.</p><p>Our role is to make the website side easier to understand, then design and build something you can confidently share.</p></div></div></section><section class="container about-statement">${eyebrow('Our point of view')}<h2>A website shouldn’t need<br>an explanation.<br><span class="serif"><em>It should give one.</em></span></h2><p>What you do. Who it’s for. Why it matters. How to get in touch. When those things are clear, your website is doing its job.</p></section><section class="section container"><div class="section-head"><div>${eyebrow('How we work')}<h2>Thoughtful by design.<br>Straightforward by choice.</h2></div></div><div class="principles-grid"><article><h3>Clarity over complexity.</h3><p>Useful pages, understandable language, and decisions that help your customers—not a list of features they don’t need.</p></article><article><h3>Character over sameness.</h3><p>A restaurant and an electrician have different customers and different needs. Their websites should reflect that.</p></article><article><h3>Honesty from the start.</h3><p>Our examples are labeled demos. Our scope is agreed with you. We let the work speak without invented reviews or results.</p></article></div></section>${cta()}`; }
    1786:    function contact() { const connected = Boolean(site.contactEndpoint || site.email); return `<section class="container page-hero"><div class="contact-grid"><div class="contact-copy"><div class="contact-intro">${eyebrow('Let’s start with your business')}<h1>Your next website<br>starts right here.</h1><p class="lead">Tell us a little about your business and what you have in mind. You don’t need a finished brief or the right technical words.</p></div><div class="contact-points"><div><h2>A conversation, not a commitment.</h2><p>We’ll discuss the fit and the details before you decide to move forward.</p></div><div><h2>A clear starting point.</h2><p>The website package is $249/month. Your scope and full terms will be confirmed together.</p></div><div><h2>Something caught your eye?</h2><p>Mention a demo you liked. It’s a useful starting point for your own design.</p>${textLink('Browse the examples','/examples/')}</div></div></div><form class="inquiry-form" data-inquiry data-endpoint="${escape(site.contactEndpoint)}" data-email="${escape(site.email)}">${!connected ? '<div class="form-availability"><strong>Prepare a brief, ready for when inquiries open.</strong><p>This form saves a brief on your device. It does not send an inquiry yet.</p></div>' : ''}<p class="form-intro">The essentials first. Fields marked * are required.</p><div class="form-grid"><div class="field"><label for="name">Your name *</label><input id="name" name="name" autocomplete="name" maxlength="100" required></div><div class="field"><label for="business">Business name *</label><input id="business" name="business" autocomplete="organization" maxlength="160" required></div><div class="field full"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" maxlength="254" required></div><div class="field"><label for="phone">Phone <span>(optional)</span></label><input id="phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div><div class="field"><label for="business-type">Business type <span>(optional)</span></label><select id="business-type" name="businessType"><option value="">Select a business type</option><option>Home services</option><option>Restaurant or café</option><option>Health or wellness</option><option>Shop, salon, or studio</option><option>Professional services</option><option>Something else</option></select></div><div class="field full"><label for="website">Current website <span>(optional)</span></label><input id="website" name="website" type="text" inputmode="url" autocomplete="url" maxlength="500" placeholder="yourbusiness.com"></div><div class="field full"><label for="need">What are you looking for? *</label><select id="need" name="need" required><option value="">Choose what fits best</option><option>A new website</option><option>A redesign of my website</option><option>I’m exploring my options</option></select></div><div class="field full"><label for="message">Anything else we should know? <span>(optional)</span></label><textarea id="message" name="message" maxlength="4000" placeholder="A little about your business, what you need, or an example you like."></textarea></div></div><p class="form-note">${connected ? 'Your details are used to respond to your inquiry.' : 'Online inquiries aren’t open yet. You can prepare and save your brief here; nothing will be sent.'} <a href="/privacy/">Privacy information</a>.</p><button class="button form-submit" type="submit" data-js-submit disabled>${site.contactEndpoint ? 'Send your inquiry' : site.email ? 'Prepare your email' : 'Prepare your website brief'}${icon()}</button><noscript><p class="form-note">Enable JavaScript to ${connected ? 'prepare your inquiry' : 'prepare and save a brief'}.${site.email ? ` You can also email <a href="mailto:${escape(site.email)}">${escape(site.email)}</a>.` : ''}</p></noscript><p class="form-feedback" role="status" aria-live="polite" tabindex="-1"></p><div class="brief-output" hidden><label class="small" for="brief">Your website brief</label><textarea id="brief" readonly></textarea><div class="actions"><button type="button" class="button button--outline" data-copy>Copy brief</button><button type="button" class="button button--outline" data-download>Save brief</button></div></div></form></div></section>`; }
    1794:      { path:'/services/', title:'Website Design for Local Businesses | SkipManual', description:'Thoughtful website design, clear pages, and simple contact paths for local businesses. See how SkipManual approaches your next website.', render:services },
    1841:## Activity
    1854:      { id:'drains', name:'Drains & blockages', icon:'flow', problem:'The water is going nowhere.', text:'A slow sink, a backed-up shower, or a toilet that keeps blocking. Tell us which fixtures are affected.', detail:'Understanding whether one fixture or several are affected helps guide the assessment. The cause and access determine the next step.', service:'Drains & blockages' },
    1864:      return `<section class="clearflow-hero demo-container"><div>${kicker('A little help. A home that works.')}<h1>Let’s get your<br>home back<br>to <span>normal.</span></h1><p>Dripping taps. Slow drains. Cold showers.<br>Tell us what’s happening. We’ll help you<br class="desktop-break"> take the next step.</p><div class="trade-actions">${link(e,'Find the help you need','','','demo-button').replace('href="/demos/clearflow-plumbing/"','href="#find-help"')}${link(e,'Request a visit','request-a-visit','','demo-text-link')}</div><div class="clearflow-hero-note">${icon('water')}Plumbing for the everyday.<br>And the days that don’t go to plan.</div></div><figure class="clearflow-picture">${photo('plumbing','A bright bathroom with a white basin, brass faucet, and tiled wall',true)}<figcaption><span>Less disruption.</span><strong>More getting on<br>with your day.</strong>${icon('water')}</figcaption></figure></section><div class="clearflow-ribbon demo-container"><span>01 &nbsp; Tell us the problem</span><span>02 &nbsp; Understand your options</span><span>03 &nbsp; Plan the next step</span></div>${serviceFinder(e)}<section class="clearflow-hotwater"><div class="demo-container"><span class="water-illustration" aria-hidden="true">${icon('sun')}</span><div>${kicker('Let’s talk hot water')}<h2>A good day starts<br>with a warm shower.</h2><p>Repair the system you have, or explore a replacement? Start with the symptoms, your household, and the questions worth asking.</p>${link(e,'Understand your water heater','water-heaters','','demo-text-link')}</div></div></section>${closing(e,'Something not quite right?','Start with what you know. We’ll take it from there.')}`;
    1872:      return `<section class="demo-page-hero demo-container">${kicker('Water-heater help')}<h1>Make room for<br><span>reliable hot water.</span></h1><p>When the shower goes cold, the answer starts with a closer look.<br>Here is what to consider before choosing your next step.</p></section><section class="demo-container water-options"><article>${kicker('01 / The system you have')}<h2>Start with<br>the symptoms.</h2><ul><li>Is there no hot water, or just less than usual?</li><li>Does the temperature keep changing?</li><li>Have you noticed a leak or unusual sound?</li><li>How old is the system, if you know?</li></ul><p>An assessment can help establish whether a specific fault can be repaired and whether that makes sense for the system’s condition.</p></article><article>${kicker('02 / A system for your household')}<h2>Think about<br>what you need.</h2><ul><li>How many people use hot water at once?</li><li>What energy supply and space are available?</li><li>Would a tank or tankless system suit the home?</li><li>What installation changes may be needed?</li></ul><p>Equipment, installation, and running costs all matter. Your options depend on your home and should be checked in person.</p></article></section><section class="demo-container demo-section trade-faq"><h2>A few common questions.</h2><details><summary>Does a cold shower mean I need a new heater?</summary><p>Not necessarily. A control, power supply, component, or demand issue could be involved. An assessment should identify the cause before recommending replacement.</p></details><details><summary>Can I choose a larger system?</summary><p>Capacity should match your household, available space, connections, and energy supply. Discuss those together before choosing equipment.</p></details><details><summary>What should I include in my request?</summary><p>Describe the symptoms and include the system type and approximate age if known. You do not need to diagnose the fault yourself.</p></details></section>${closing(e,'Tell us what’s changed.','No hot water, a new household routine, or an aging system. Start there.')}`;
    1877:      ['02','Roof replacement','Plan for the roof’s next chapter.','When wear is widespread, consider the whole system: the covering, underlying condition, ventilation, details, and installation plan.','Roof replacement'],
    1887:      return `<section class="ridgeline-hero"><div class="demo-container ridge-title"><div>${kicker('A considered approach to roofing')}<h1>Good homes.<br><em>Sound roofs.</em></h1></div><div><p>Repair what needs attention.<br>Replace with a clear plan.<br>Start by understanding your roof.</p>${link(e,'Let’s take a closer look','request-an-assessment')}</div></div><figure class="ridge-landscape">${photo('roofing','A house framed by trees with a pitched roof and a broad front porch',true)}<figcaption><span>THE VIEW STARTS AT HOME.</span><span>RIDGELINE / RESIDENTIAL ROOFING</span></figcaption></figure></section><section class="demo-container ridge-intro demo-section"><div>${kicker('Care for what covers you')}<h2>Every roof has<br>its own <em>story.</em></h2></div><div><p>A small leak. Years of wear. A home ready for its next chapter. The right approach starts with the condition of your roof and the way you want to move forward.</p>${link(e,'Explore our approach','roofing','','demo-text-link')}</div></section><section class="ridge-service-band"><div class="demo-container">${roofServices.map(([n,name,heading,text,service])=>`<article><span>${n} /</span><h2>${name}</h2><p>${heading}</p>${link(e,'Explore this service','roofing', '', 'demo-text-link').replace('/roofing/"',`/roofing/#service-${n}"`)}</article>`).join('')}</div></section><section class="demo-container ridge-decision demo-section"><div class="ridge-line-art" aria-hidden="true"><svg viewBox="0 0 420 300" fill="none"><path d="M25 180 170 50l145 130M90 190 235 60l160 140M60 160v110h220V150M125 168v102M280 270l80-65v-42M170 50l65 10M280 270H60" stroke="currentColor" stroke-width="1.5"/><path d="M160 270v-80h60v80M35 287h345" stroke="currentColor" stroke-width="1.5"/></svg><span>UNDERSTAND. THEN DECIDE.</span></div><div>${kicker('The question homeowners ask')}<h2>Repair.<br>Replace.<br><em>Let’s find the why.</em></h2><p>A useful decision starts with better questions. Explore the factors that help shape the conversation.</p>${link(e,'Explore the roof guide','repair-or-replace','','demo-text-link')}</div></section>${closing(e,'A roof worth<br>thinking through.','Tell us what you have noticed. We’ll start there.')}`;
    1891:      return `<section class="demo-page-hero demo-container">${kicker('The work, considered')}<h1>From a small repair<br>to a <em>fresh start.</em></h1><p>Your roof’s condition comes first. Explore the possibilities<br>and the details that belong in the conversation.</p></section><section class="demo-container ridge-services">${roofServices.map(([n,name,heading,text,service])=>`<article id="service-${n}"><span>${n} /</span><div><h2>${name}</h2><h3>${heading}</h3></div><div><p>${text}</p>${link(e,'Discuss your roof','request-an-assessment',service,'demo-text-link')}</div></article>`).join('')}</section><section class="demo-container demo-section roof-materials">${kicker('A look at materials')}<h2>The finish is only<br>part of the <em>picture.</em></h2><p>Suitability depends on the roof structure, pitch, local conditions, and installation requirements.</p><div>${[['Shingles','A familiar, layered finish.','Discuss product grades, ventilation, expected upkeep, and the details around edges and openings.'],['Metal','Clean lines. Many profiles.','Consider the specific system, expansion, fasteners, finish, and compatibility with the roof’s shape.'],['Tile','Texture and lasting character.','Check structural load, pitch, underlayment, and the care needed when individual tiles are damaged.']].map(([name,heading,text],i)=>`<article><div class="material-swatch material-${i}" aria-hidden="true"></div><h3>${name}</h3><strong>${heading}</strong><p>${text}</p></article>`).join('')}</div></section>${closing(e,'First, a closer look.','Choose your next step with the roof in view.')}`;
    1909:## Assistant
    1913:## Activity
    2064:## Activity
    2074:      ridgeline: { links:[['Roofing services','roofing'],['Repair or replace?','repair-or-replace']], action:'Request an assessment', contact:'request-an-assessment', footer:'Good homes. Sound roofs. A considered next step.' },`)
    2096:      s=s.replace('Professional websites for local businesses. We handle the design and build, so your next customer sees what makes you worth choosing.','A professional website. A reply when you miss a call. Follow-ups that keep customers in the conversation. We help local businesses look the part—and keep things moving.');
    2105:      s=s.slice(0,a)+`function services() { return \`\${pageHero('The $249/month package','Look the part.<br>Keep things moving.','A professional website gets your business across. Automatic replies, useful follow-ups, and review requests help with what happens next. Here’s what is included.')}<section class="container section" style="padding-top:0">\${packageServices.map((service,i)=>\`<article class="service-row" id="\${service.id}"><span>0\${i+1}</span><h2>\${service.headline}</h2><div>\${eyebrow(service.name)}<p>\${service.description}</p><ul>\${service.points.map(point=>\`<li>\${point}</li>\`).join('')}</ul><div class="service-example"><strong>For example</strong><p>\${service.example}</p></div></div></article>\`).join('')}<aside class="note-box"><h3>We set it up around your business.</h3><p>We agree on the pages, messages, timing, and handoff with you. Messaging platforms, usage allowances, any extra charges, hosting, and ongoing support are confirmed before you commit.</p></aside></section>\${scenarioSection()}\${processSection()}\${cta('Your business.<br>A little less on your plate.')}\`; }
    2116:      s=s.replace("title:'Website Design for Local Businesses | SkipManual', description:'Thoughtful website design, clear pages, and simple contact paths for local businesses. See how SkipManual approaches your next website.'", "title:'Websites & Customer Follow-Up for Local Businesses | SkipManual', description:'A 10–20 page website, inquiry follow-up, missed-call text replies, review requests, and on-page SEO. Explore the five services in SkipManual’s $249/month package.'");
    2157:## Activity
    2162:## Activity
    2243:## Activity
    2299:    src\pages\agency.mjs:18:function exampleIndex() { return `${pageHero('The example collection','Picture what’s possible<br>for your business.','Five different businesses. Five different directions. Explore the full websites to see how the design changes with the people, the service, and the next step.')}<section class="container section" style="padding-top:0"><div class="note-box" style="margin-bottom:3.5rem"><p><strong>A transparent look at our work.</strong> These are original example concepts for fictional businesses. They demonstrate what we can design and build; they are not client projects or case studies.</p></div><nav class="collection-nav" aria-label="Browse examples by industry">${examples.map(e=>`<a href="#${e.slug}">${e.category}${icon('arrow')}</a>`).join('')}</nav><div class="examples-list">${examples.map(e=>`<article class="example-row" id="${e.slug}"><a href="/examples/${e.slug}/" class="work-art ${e.theme}" aria-label="Explore ${escape(e.name)}">${preview(e)}</a><div>${eyebrow(`${e.number} / ${e.category} · Example concept`)}<h2>${escape(e.name)}</h2><p>${e.description}</p><ul class="tag-list">${e.features.slice(0,3).map(f=>`<li>${f}</li>`).join('')}</ul><p class="small">${e.style}</p><div class="actions">${button('Explore the concept',`/examples/${e.slug}/`)}${textLink('Open the website',`/demos/${e.slug}/`)}</div></div></article>`).join('')}</div></section>${cta('Different business?<br>That’s the point.')}`; }
    2309:    src\pages\trades.mjs:20:  return `<section class="clearflow-hero demo-container"><div>${kicker('A little help. A home that works.')}<h1>Let’s get your<br>home back<br>to <span>normal.</span></h1><p>Dripping taps. Slow drains. Cold showers.<br>Tell us what’s happening. We’ll help you<br class="desktop-break"> take the next step.</p><div class="trade-actions">${link(e,'Find the help you need','','','demo-button').replace('href="/demos/clearflow-plumbing/"','href="#find-help"')}${link(e,'Request a visit','request-a-visit','','demo-text-link')}</div><div class="clearflow-hero-note">${icon('water')}Plumbing for the everyday.<br>And the days that don’t go to plan.</div></div><figure class="clearflow-picture">${photo('plumbing','A bright bathroom with a white basin, brass faucet, and tiled wall',true)}<figcaption><span>Less disruption.</span><strong>More getting on<br>with your day.</strong>${icon('water')}</figcaption></figure></section><div class="clearflow-ribbon demo-container"><span>01 &nbsp; Tell us the problem</span><span>02 &nbsp; Understand your options</span><span>03 &nbsp; Plan the next step</span></div>${serviceFinder(e)}<section class="clearflow-hotwater"><div class="demo-container"><span class="water-illustration" aria-hidden="true">${icon('sun')}</span><div>${kicker('Let’s talk hot water')}<h2>A good day starts<br>with a warm shower.</h2><p>Repair the system you have, or explore a replacement? Start with the symptoms, your household, and the questions worth asking.</p>${link(e,'Understand your water heater','water-heaters','','demo-text-link')}</div></div></section>${closing(e,'Something not quite right?','Start with what you know. We’ll take it from there.')}`;
    2311:    src\pages\trades.mjs:28:  return `<section class="demo-page-hero demo-container">${kicker('Water-heater help')}<h1>Make room for<br><span>reliable hot water.</span></h1><p>When the shower goes cold, the answer starts with a closer look.<br>Here is what to consider before choosing your next step.</p></section><section class="demo-container water-options"><article>${kicker('01 / The system you have')}<h2>Start with<br>the symptoms.</h2><ul><li>Is there no hot water, or just less than usual?</li><li>Does the temperature keep changing?</li><li>Have you noticed a leak or unusual sound?</li><li>How old is the system, if you know?</li></ul><p>An assessment can help establish whether a specific fault can be repaired and whether that makes sense for the system’s condition.</p></article><article>${kicker('02 / A system for your household')}<h2>Think about<br>what you need.</h2><ul><li>How many people use hot water at once?</li><li>What energy supply and space are available?</li><li>Would a tank or tankless system suit the home?</li><li>What installation changes may be needed?</li></ul><p>Equipment, installation, and running costs all matter. Your options depend on your home and should be checked in person.</p></article></section><section class="demo-container demo-section trade-faq"><h2>A few common questions.</h2><details><summary>Does a cold shower mean I need a new heater?</summary><p>Not necessarily. A control, power supply, component, or demand issue could be involved. An assessment should identify the cause before recommending replacement.</p></details><details><summary>Can I choose a larger system?</summary><p>Capacity should match your household, available space, connections, and energy supply. Discuss those together before choosing equipment.</p></details><details><summary>What should I include in my request?</summary><p>Describe the symptoms and include the system type and approximate age if known. You do not need to diagnose the fault yourself.</p></details></section>${closing(e,'Tell us what’s changed.','No hot water, a new household routine, or an aging system. Start there.')}`;
    2312:    src\pages\trades.mjs:43:  return `<section class="ridgeline-hero"><div class="demo-container ridge-title"><div>${kicker('A considered approach to roofing')}<h1>Good homes.<br><em>Sound roofs.</em></h1></div><div><p>Repair what needs attention.<br>Replace with a clear plan.<br>Start by understanding your roof.</p>${link(e,'Let’s take a closer look','request-an-assessment')}</div></div><figure class="ridge-landscape">${photo('roofing','A house framed by trees with a pitched roof and a broad front porch',true)}<figcaption><span>THE VIEW STARTS AT HOME.</span><span>RIDGELINE / RESIDENTIAL ROOFING</span></figcaption></figure></section><section class="demo-container ridge-intro demo-section"><div>${kicker('Care for what covers you')}<h2>Every roof has<br>its own <em>story.</em></h2></div><div><p>A small leak. Years of wear. A home ready for its next chapter. The right approach starts with the condition of your roof and the way you want to move forward.</p>${link(e,'Explore our approach','roofing','','demo-text-link')}</div></section><section class="ridge-service-band"><div class="demo-container">${roofServices.map(([n,name,heading,text,service])=>`<article><span>${n} /</span><h2>${name}</h2><p>${heading}</p>${link(e,'Explore this service','roofing', '', 'demo-text-link').replace('/roofing/"',`/roofing/#service-${n}"`)}</article>`).join('')}</div></section><section class="demo-container ridge-decision demo-section"><div class="ridge-line-art" aria-hidden="true"><svg viewBox="0 0 420 300" fill="none"><path d="M25 180 170 50l145 130M90 190 235 60l160 140M60 160v110h220V150M125 168v102M280 270l80-65v-42M170 50l65 10M280 270H60" stroke="currentColor" stroke-width="1.5"/><path d="M160 270v-80h60v80M35 287h345" stroke="currentColor" stroke-width="1.5"/></svg><span>UNDERSTAND. THEN DECIDE.</span></div><div>${kicker('The question homeowners ask')}<h2>Repair.<br>Replace.<br><em>Let’s find the why.</em></h2><p>A useful decision starts with better questions. Explore the factors that help shape the conversation.</p>${link(e,'Explore the roof guide','repair-or-replace','','demo-text-link')}</div></section>${closing(e,'A roof worth<br>thinking through.','Tell us what you have noticed. We’ll start there.')}`;
    2313:    src\pages\trades.mjs:47:  return `<section class="demo-page-hero demo-container">${kicker('The work, considered')}<h1>From a small repair<br>to a <em>fresh start.</em></h1><p>Your roof’s condition comes first. Explore the possibilities<br>and the details that belong in the conversation.</p></section><section class="demo-container ridge-services">${roofServices.map(([n,name,heading,text,service])=>`<article id="service-${n}"><span>${n} /</span><div><h2>${name}</h2><h3>${heading}</h3></div><div><p>${text}</p>${link(e,'Discuss your roof','request-an-assessment',service,'demo-text-link')}</div></article>`).join('')}</section><section class="demo-container demo-section roof-materials">${kicker('A look at materials')}<h2>The finish is only<br>part of the <em>picture.</em></h2><p>Suitability depends on the roof structure, pitch, local conditions, and installation requirements.</p><div>${[['Shingles','A familiar, layered finish.','Discuss product grades, ventilation, expected upkeep, and the details around edges and openings.'],['Metal','Clean lines. Many profiles.','Consider the specific system, expansion, fasteners, finish, and compatibility with the roof’s shape.'],['Tile','Texture and lasting character.','Check structural load, pitch, underlayment, and the care needed when individual tiles are damaged.']].map(([name,heading,text],i)=>`<article><div class="material-swatch material-${i}" aria-hidden="true"></div><h3>${name}</h3><strong>${heading}</strong><p>${text}</p></article>`).join('')}</div></section>${closing(e,'First, a closer look.','Choose your next step with the roof in view.')}`;
    2324:    src\pages\demos.mjs:42:function currentHome(e) { return `<section class="demo-container current-hero"><div>${dkicker('Residential electrical. Clearly considered.')}<h1>Good energy.<br>Expertly wired<span>.</span></h1><p>From the lights you live by to the outlets you rely on. Practical electrical work, explained in plain language.</p>${dlink(e,'Let’s talk about your project','request-a-quote')}<p class="current-hero-note">Your home. Your questions. A clear next step.</p></div><div class="current-hero-image">${dimage('electrician','Electrical professional working on a wiring installation','',true)}<span>${icon('bolt')}Make your home work better.</span></div></section><div class="current-strip"><div class="demo-container"><span>${icon('home')}Work around your home</span><span>${icon('layout')}Options explained clearly</span><span>${icon('cursor')}A straightforward next step</span></div></div><section class="demo-section demo-container"><div class="demo-section-head split"><div>${dkicker('How we can help')}<h2>The small fixes.<br>The bigger plans.</h2></div><p>Whatever brought you here, start with the job.<br>We’ll help make the next step clear.</p></div><div class="electrical-services">${services.slice(0,3).map(([n,h,p,r])=>`<article><span>${n} /</span><h3>${h}</h3><p>${p}</p>${dlink(e,'Explore this service',r,'demo-text-link')}</article>`).join('')}</div></section><section class="current-process"><div class="demo-container demo-section"><div>${dkicker('Let’s keep it simple')}<h2>Less guesswork.<br>More getting it sorted.</h2></div><ol><li><span>01</span><div><h3>Tell us what’s going on.</h3><p>A small repair, a new idea, or a full renovation. Start with what you know.</p></div></li><li><span>02</span><div><h3>Understand your options.</h3><p>The scope, practical choices, and next steps should be clear before any work.</p></div></li><li><span>03</span><div><h3>Make a plan for the work.</h3><p>Agree on what needs doing and how it fits around your home.</p></div></li></ol></div></section><section class="demo-section demo-container current-faq"><h2>A little clarity<br>goes a long way.</h2>${faqList([{q:'What should I include in my request?',a:'Describe the issue or project, the room involved, and what you would like to change. You do not need to know the technical name.'},{q:'Can I ask about more than one job?',a:'Yes. Include the different tasks in one request so they can be considered together.'},{q:'Does this demo accept real electrical jobs?',a:'No. Current Electric is a fictional website concept. The request form demonstrates an inquiry flow only.'}])}</section><section class="demo-closing"><div class="demo-container"><h2>Let’s shed some light<br>on your next project.</h2>${dlink(e,'Start a project request','request-a-quote')}</div></section>`; }
    2339:    C:/Users/muham/.codex\skills\ui-ux-pro-max\gallery\package.json
    2340:    C:/Users/muham/.codex\skills\ui-ux-pro-max\cli\playwright.config.ts
    2341:    C:/Users/muham/.codex\skills\ui-ux-pro-max\cli\package.json
    2342:    C:/Users/muham/.codex\skills\ui-ux-pro-max\stack\package.json
    2345:## Activity
    2357:## Activity
    2416:## Activity
    2442:## Activity
    2459:## Assistant
    2463:## Activity
    2467:## Activity
    2471:## Activity
    2475:## Activity
    2519:        outcome: 'Help a new guest picture their evening, find something they want to eat, and take the next step.',
    2550:        description: 'A helpful residential plumbing website that starts with the problem, then makes the next step simple.',
    2576:## Activity
    2581:## Activity
    2585:## Activity
    2589:## Activity
    2593:## Activity
    2659:## Activity
    2713:## Activity
    2725:## Activity
    2735:## Assistant
    2737:The desktop and phone layouts look good. I also replaced the roofing photo so the roof is clearly visible and removed two remaining uses of “demo.” The portfolio previews are being refreshed from the actual pages; next is the full responsive and interaction check.
    2739:## Activity
    2794:## Activity
    2806:## Activity
    2862:## Activity
    2886:## Activity
    2896:## Activity
    2922:## Activity
    2929:## Assistant
    2933:## Activity
    2937:## Activity
    2941:## Activity
    2945:## Activity
    2949:## Activity
    2953:## Activity
    2989:## Activity
    2993:## Activity
    2997:## Activity
    3001:## Activity
    3005:## Activity
    3030:      ridgeline: { links:[['Roofing services','roofing'],['Repair or replace?','repair-or-replace']], action:'Request an assessment', contact:'request-an-assessment', footer:'Good homes. Sound roofs. A considered next step.' },`)
    3052:      s=s.replace('Professional websites for local businesses. We handle the design and build, so your next customer sees what makes you worth choosing.','A professional website. A reply when you miss a call. Follow-ups that keep customers in the conversation. We help local businesses look the part—and keep things moving.');
    3061:      s=s.slice(0,a)+`function services() { return \`\${pageHero('The $249/month package','Look the part.<br>Keep things moving.','A professional website gets your business across. Automatic replies, useful follow-ups, and review requests help with what happens next. Here’s what is included.')}<section class="container section" style="padding-top:0">\${packageServices.map((service,i)=>\`<article class="service-row" id="\${service.id}"><span>0\${i+1}</span><h2>\${service.headline}</h2><div>\${eyebrow(service.name)}<p>\${service.description}</p><ul>\${service.points.map(point=>\`<li>\${point}</li>\`).join('')}</ul><div class="service-example"><strong>For example</strong><p>\${service.example}</p></div></div></article>\`).join('')}<aside class="note-box"><h3>We set it up around your business.</h3><p>We agree on the pages, messages, timing, and handoff with you. Messaging platforms, usage allowances, any extra charges, hosting, and ongoing support are confirmed before you commit.</p></aside></section>\${scenarioSection()}\${processSection()}\${cta('Your business.<br>A little less on your plate.')}\`; }
    3072:      s=s.replace("title:'Website Design for Local Businesses | SkipManual', description:'Thoughtful website design, clear pages, and simple contact paths for local businesses. See how SkipManual approaches your next website.'", "title:'Websites & Customer Follow-Up for Local Businesses | SkipManual', description:'A 10–20 page website, inquiry follow-up, missed-call text replies, review requests, and on-page SEO. Explore the five services in SkipManual’s $249/month package.'");
    3118:## Activity
    3131:## Assistant
    3145:## User
    3151:## User
    3155:## Assistant
    3159:## Activity
    3161:    $ Get-Content 'C:/Users/muham/.codex/skills/ui-ux-pro-max/cli/assets/skills/ui-styling/SKILL.md' -Encoding UTF8; Get-Content src/components/package.mjs -Encoding UTF8; Get-Content src/data/package.mjs -Encoding UTF8
    3295:    - Dark mode setup with next-themes
    3498:      { id: 'website', name: 'Business-ready website', short: '10–20 page business website', icon: 'layout', headline: 'A proper home for your business online.', description: 'A professional, mobile-friendly website with 10–20 pages to explain your services, answer common questions, and help customers get in touch.', points: ['10–20 pages, planned around your business', 'Clear service pages and inquiry forms', 'Designed for phones, tablets, and computers'], example: 'A plumbing customer can find your water-heater service, understand the next step, and request a visit.' },
    3507:      { id: 'inquiry', label: 'A new inquiry arrives', heading: 'Someone asks for a quote.<br>Then gets on with their day.', text: 'An acknowledgment lets them know their inquiry arrived. A useful follow-up keeps the next step clear.', business: 'Roofing business', trigger: 'A customer submits the website form', messages: [{kind:'business',text:'Thanks for telling us about your roof. Is this a repair you need help with, or are you considering a replacement?'},{kind:'customer',text:'A repair, I think. There is a leak near the chimney.'}], outcome:'You have the context to pick up the inquiry personally.', note:'Illustrative conversation. The system supports your follow-up; you still handle the customer and the job.' },
    3512:## Activity
    3647:      { title: 'Make your next move.', text: 'We agree on the launch plan and what happens next, with the details clear up front.' },
    3661:      { category: 'Your website', q: 'What happens after launch?', a: 'We’ll confirm the arrangements for hosting, maintenance, support, and future updates as part of your package discussion. We don’t want you guessing about what happens next.' },
    3752:## Assistant
    3756:## Assistant
    3760:## Activity
    3769:      ridgeline: { links:[['Roofing services','roofing'],['Repair or replace?','repair-or-replace']], action:'Request an assessment', contact:'request-an-assessment', footer:'Good homes. Sound roofs. A considered next step.' },
    3800:     ['02','Repairs & fault finding','For the switch that stopped working, the outlet that needs attention, or the problem you can’t quite explain.','request-a-quote'],
    3804:    function currentHome(e) { return `<section class="demo-container current-hero"><div>${dkicker('Residential electrical. Clearly considered.')}<h1>Good energy.<br>Expertly wired<span>.</span></h1><p>From the lights you live by to the outlets you rely on. Practical electrical work, explained in plain language.</p>${dlink(e,'Let’s talk about your project','request-a-quote')}<p class="current-hero-note">Your home. Your questions. A clear next step.</p></div><div class="current-hero-image">${dimage('electrician','Electrical professional working on a wiring installation','',true)}<span>${icon('bolt')}Make your home work better.</span></div></section><div class="current-strip"><div class="demo-container"><span>${icon('home')}Work around your home</span><span>${icon('layout')}Options explained clearly</span><span>${icon('cursor')}A straightforward next step</span></div></div><section class="demo-section demo-container"><div class="demo-section-head split"><div>${dkicker('How we can help')}<h2>The small fixes.<br>The bigger plans.</h2></div><p>Whatever brought you here, start with the job.<br>We’ll help make the next step clear.</p></div><div class="electrical-services">${services.slice(0,3).map(([n,h,p,r])=>`<article><span>${n} /</span><h3>${h}</h3><p>${p}</p>${dlink(e,'Explore this service',r,'demo-text-link')}</article>`).join('')}</div></section><section class="current-process"><div class="demo-container demo-section"><div>${dkicker('Let’s keep it simple')}<h2>Less guesswork.<br>More getting it sorted.</h2></div><ol><li><span>01</span><div><h3>Tell us what’s going on.</h3><p>A small repair, a new idea, or a full renovation. Start with what you know.</p></div></li><li><span>02</span><div><h3>Understand your options.</h3><p>The scope, practical choices, and next steps should be clear before any work.</p></div></li><li><span>03</span><div><h3>Make a plan for the work.</h3><p>Agree on what needs doing and how it fits around your home.</p></div></li></ol></div></section><section class="demo-section demo-container current-faq"><h2>A little clarity<br>goes a long way.</h2>${faqList([{q:'What should I include in my request?',a:'Describe the issue or project, the room involved, and what you would like to change. You do not need to know the technical name.'},{q:'Can I ask about more than one job?',a:'Yes. Include the different tasks in one request so they can be considered together.'},{q:'Does this example accept real electrical jobs?',a:'No. Current Electric is a fictional website concept. The request form demonstrates an inquiry flow only.'}])}</section><section class="demo-closing"><div class="demo-container"><h2>Let’s shed some light<br>on your next project.</h2>${dlink(e,'Start a project request','request-a-quote')}</div></section>`; }
    3847:      { id:'drains', name:'Drains & blockages', icon:'flow', problem:'The water is going nowhere.', text:'A slow sink, a backed-up shower, or a toilet that keeps blocking. Tell us which fixtures are affected.', detail:'Understanding whether one fixture or several are affected helps guide the assessment. The cause and access determine the next step.', service:'Drains & blockages' },
    3857:      return `<section class="clearflow-hero demo-container"><div>${kicker('A little help. A home that works.')}<h1>Let’s get your<br>home back<br>to <span>normal.</span></h1><p>Dripping taps. Slow drains. Cold showers.<br>Tell us what’s happening. We’ll help you<br class="desktop-break"> take the next step.</p><div class="trade-actions">${link(e,'Find the help you need','#find-help')}${link(e,'Request a visit','request-a-visit','','demo-text-link')}</div><div class="clearflow-hero-note">${icon('water')}Plumbing for the everyday.<br>And the days that don’t go to plan.</div></div><figure class="clearflow-picture">${photo('plumbing','A bright bathroom with a white bathtub, basin, and chrome fixtures',true)}<figcaption><span>Less disruption.</span><strong>More getting on<br>with your day.</strong>${icon('water')}</figcaption></figure></section><div class="clearflow-ribbon demo-container"><span>01 &nbsp; Tell us the problem</span><span>02 &nbsp; Understand your options</span><span>03 &nbsp; Plan the next step</span></div>${serviceFinder(e)}<section class="clearflow-hotwater"><div class="demo-container"><span class="water-illustration" aria-hidden="true">${icon('sun')}</span><div>${kicker('Let’s talk hot water')}<h2>A good day starts<br>with a warm shower.</h2><p>Repair the system you have, or explore a replacement? Start with the symptoms, your household, and the questions worth asking.</p>${link(e,'Understand your water heater','water-heaters','','demo-text-link')}</div></div></section>${closing(e,'Something not quite right?','Start with what you know. We’ll take it from there.')}`;
    3865:      return `<section class="demo-page-hero demo-container">${kicker('Water-heater help')}<h1>Make room for<br><span>reliable hot water.</span></h1><p>When the shower goes cold, the answer starts with a closer look.<br>Here is what to consider before choosing your next step.</p></section><section class="demo-container water-options"><article>${kicker('01 / The system you have')}<h2>Start with<br>the symptoms.</h2><ul><li>Is there no hot water, or just less than usual?</li><li>Does the temperature keep changing?</li><li>Have you noticed a leak or unusual sound?</li><li>How old is the system, if you know?</li></ul><p>An assessment can help establish whether a specific fault can be repaired and whether that makes sense for the system’s condition.</p></article><article>${kicker('02 / A system for your household')}<h2>Think about<br>what you need.</h2><ul><li>How many people use hot water at once?</li><li>What energy supply and space are available?</li><li>Would a tank or tankless system suit the home?</li><li>What installation changes may be needed?</li></ul><p>Equipment, installation, and running costs all matter. Your options depend on your home and should be checked in person.</p></article></section><section class="demo-container demo-section trade-faq"><h2>A few common questions.</h2><details><summary>Does a cold shower mean I need a new heater?</summary><p>Not necessarily. A control, power supply, component, or demand issue could be involved. An assessment should identify the cause before recommending replacement.</p></details><details><summary>Can I choose a larger system?</summary><p>Capacity should match your household, available space, connections, and energy supply. Discuss those together before choosing equipment.</p></details><details><summary>What should I include in my request?</summary><p>Describe the symptoms and include the system type and approximate age if known. You do not need to diagnose the fault yourself.</p></details></section>${closing(e,'Tell us what’s changed.','No hot water, a new household routine, or an aging system. Start there.')}`;
    3870:      ['02','Roof replacement','Plan for the roof’s next chapter.','When wear is widespread, consider the whole system: the covering, underlying condition, ventilation, details, and installation plan.','Roof replacement'],
    3880:      return `<section class="ridgeline-hero"><div class="demo-container ridge-title"><div>${kicker('A considered approach to roofing')}<h1>Good homes.<br><em>Sound roofs.</em></h1></div><div><p>Repair what needs attention.<br>Replace with a clear plan.<br>Start by understanding your roof.</p>${link(e,'Let’s take a closer look','request-an-assessment')}</div></div><figure class="ridge-landscape">${photo('roofing','A house framed by trees with a pitched roof and a broad front porch',true)}<figcaption><span>THE VIEW STARTS AT HOME.</span><span>RIDGELINE / RESIDENTIAL ROOFING</span></figcaption></figure></section><section class="demo-container ridge-intro demo-section"><div>${kicker('Care for what covers you')}<h2>Every roof has<br>its own <em>story.</em></h2></div><div><p>A small leak. Years of wear. A home ready for its next chapter. The right approach starts with the condition of your roof and the way you want to move forward.</p>${link(e,'Explore our approach','roofing','','demo-text-link')}</div></section><section class="ridge-service-band"><div class="demo-container">${roofServices.map(([n,name,heading,text,service])=>`<article><span>${n} /</span><h2>${name}</h2><p>${heading}</p>${link(e,'Explore this service','roofing', '', 'demo-text-link').replace('/roofing/"',`/roofing/#service-${n}"`)}</article>`).join('')}</div></section><section class="demo-container ridge-decision demo-section"><div class="ridge-line-art" aria-hidden="true"><svg viewBox="0 0 420 300" fill="none"><path d="M25 180 170 50l145 130M90 190 235 60l160 140M60 160v110h220V150M125 168v102M280 270l80-65v-42M170 50l65 10M280 270H60" stroke="currentColor" stroke-width="1.5"/><path d="M160 270v-80h60v80M35 287h345" stroke="currentColor" stroke-width="1.5"/></svg><span>UNDERSTAND. THEN DECIDE.</span></div><div>${kicker('The question homeowners ask')}<h2>Repair.<br>Replace.<br><em>Let’s find the why.</em></h2><p>A useful decision starts with better questions. Explore the factors that help shape the conversation.</p>${link(e,'Explore the roof guide','repair-or-replace','','demo-text-link')}</div></section>${closing(e,'A roof worth<br>thinking through.','Tell us what you have noticed. We’ll start there.')}`;
    3884:      return `<section class="demo-page-hero demo-container">${kicker('The work, considered')}<h1>From a small repair<br>to a <em>fresh start.</em></h1><p>Your roof’s condition comes first. Explore the possibilities<br>and the details that belong in the conversation.</p></section><section class="demo-container ridge-services">${roofServices.map(([n,name,heading,text,service])=>`<article id="service-${n}"><span>${n} /</span><div><h2>${name}</h2><h3>${heading}</h3></div><div><p>${text}</p>${link(e,'Discuss your roof','request-an-assessment',service,'demo-text-link')}</div></article>`).join('')}</section><section class="demo-container demo-section roof-materials">${kicker('A look at materials')}<h2>The finish is only<br>part of the <em>picture.</em></h2><p>Suitability depends on the roof structure, pitch, local conditions, and installation requirements.</p><div>${[['Shingles','A familiar, layered finish.','Discuss product grades, ventilation, expected upkeep, and the details around edges and openings.'],['Metal','Clean lines. Many profiles.','Consider the specific system, expansion, fasteners, finish, and compatibility with the roof’s shape.'],['Tile','Texture and lasting character.','Check structural load, pitch, underlayment, and the care needed when individual tiles are damaged.']].map(([name,heading,text],i)=>`<article><div class="material-swatch material-${i}" aria-hidden="true"></div><h3>${name}</h3><strong>${heading}</strong><p>${text}</p></article>`).join('')}</div></section>${closing(e,'First, a closer look.','Choose your next step with the roof in view.')}`;
    4016:## Activity
    4032:    function services() { return `${pageHero('The $249/month package','Look the part.<br>Keep things moving.','A professional website gets your business across. Automatic replies, useful follow-ups, and review requests help with what happens next. Here’s what is included.')}<section class="container section" style="padding-top:0">${packageServices.map((service,i)=>`<article class="service-row" id="${service.id}"><span>0${i+1}</span><h2>${service.headline}</h2><div>${eyebrow(service.name)}<p>${service.description}</p><ul>${service.points.map(point=>`<li>${point}</li>`).join('')}</ul><div class="service-example"><strong>For example</strong><p>${service.example}</p></div></div></article>`).join('')}<aside class="note-box"><h3>We set it up around your business.</h3><p>We agree on the pages, messages, timing, and handoff with you. Messaging platforms, usage allowances, any extra charges, hosting, and ongoing support are confirmed before you commit.</p></aside></section>${scenarioSection()}${processSection()}${cta('Your business.<br>A little less on your plate.')}`; }
    4036:    function exampleIndex() { return `${pageHero('The example collection','Picture what’s possible<br>for your business.','Five different businesses. Five different directions. Explore the full websites to see how the design changes with the people, the service, and the next step.')}<section class="container section" style="padding-top:0"><div class="note-box" style="margin-bottom:3.5rem"><p><strong>A transparent look at our work.</strong> These are original example concepts for fictional businesses. They demonstrate what we can design and build; they are not client projects or case studies.</p></div><nav class="collection-nav" aria-label="Browse examples by industry">${examples.map(e=>`<a href="#${e.slug}">${e.category}${icon('arrow')}</a>`).join('')}</nav><div class="examples-list">${examples.map(e=>`<article class="example-row" id="${e.slug}"><a href="/examples/${e.slug}/" class="work-art ${e.theme}" aria-label="Explore ${escape(e.name)}">${preview(e)}</a><div>${eyebrow(`${e.number} / ${e.category} · Example concept`)}<h2>${escape(e.name)}</h2><p>${e.description}</p><ul class="tag-list">${e.features.slice(0,3).map(f=>`<li>${f}</li>`).join('')}</ul><p class="small">${e.style}</p><div class="actions">${button('Explore the concept',`/examples/${e.slug}/`)}${textLink('Open the website',`/demos/${e.slug}/`)}</div></div></article>`).join('')}</div></section>${cta('Different business?<br>That’s the point.')}`; }
    4040:    function about() { return `${pageHero('About SkipManual','For the people with<br>a business to run.','Your days are already full. Building a professional online presence shouldn’t mean becoming a designer, writer, or website expert on top of everything else.')}<section class="section container" style="padding-top:0"><div class="about-split"><div class="about-mark">${mark()}</div><div>${eyebrow('Why SkipManual exists')}<h2>Good work deserves<br>a good website.</h2><p>Local businesses put care into the details: the way a job is finished, how a customer is welcomed, the experience someone comes back for.</p><p>We believe a website should reflect that same care. SkipManual brings your business into focus online, with clear information, thoughtful design, and an obvious next step.</p><p>Our role is to make the website side easier to understand, then design and build something you can confidently share.</p></div></div></section><section class="container about-statement">${eyebrow('Our point of view')}<h2>A website shouldn’t need<br>an explanation.<br><span class="serif"><em>It should give one.</em></span></h2><p>What you do. Who it’s for. Why it matters. How to get in touch. When those things are clear, your website is doing its job.</p></section><section class="section container"><div class="section-head"><div>${eyebrow('How we work')}<h2>Thoughtful by design.<br>Straightforward by choice.</h2></div></div><div class="principles-grid"><article><h3>Clarity over complexity.</h3><p>Useful pages, understandable language, and decisions that help your customers—not a list of features they don’t need.</p></article><article><h3>Character over sameness.</h3><p>A restaurant and an electrician have different customers and different needs. Their websites should reflect that.</p></article><article><h3>Honesty from the start.</h3><p>Our examples are clearly identified as fictional businesses. Our scope is agreed with you. We let the work speak without invented reviews or results.</p></article></div></section>${cta()}`; }
    4044:    function contact() { const connected = Boolean(site.contactEndpoint || site.email); return `<section class="container page-hero"><div class="contact-grid"><div class="contact-copy"><div class="contact-intro">${eyebrow('Let’s start with your business')}<h1>Your next website<br>starts right here.</h1><p class="lead">Tell us a little about your business and what you have in mind. You don’t need a finished brief or the right technical words.</p></div><div class="contact-points"><div><h2>A conversation, not a commitment.</h2><p>We’ll discuss the fit and the details before you decide to move forward.</p></div><div><h2>A clear starting point.</h2><p>The website package is $249/month. Your scope and full terms will be confirmed together.</p></div><div><h2>Something caught your eye?</h2><p>Mention an example you liked. It’s a useful starting point for your own design.</p>${textLink('Browse the examples','/examples/')}</div></div></div><form class="inquiry-form" data-inquiry data-endpoint="${escape(site.contactEndpoint)}" data-email="${escape(site.email)}">${!connected ? '<div class="form-availability"><strong>Prepare a brief, ready for when inquiries open.</strong><p>This form saves a brief on your device. It does not send an inquiry yet.</p></div>' : ''}<p class="form-intro">The essentials first. Fields marked * are required.</p><div class="form-grid"><div class="field"><label for="name">Your name *</label><input id="name" name="name" autocomplete="name" maxlength="100" required></div><div class="field"><label for="business">Business name *</label><input id="business" name="business" autocomplete="organization" maxlength="160" required></div><div class="field full"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" maxlength="254" required></div><div class="field"><label for="phone">Phone <span>(optional)</span></label><input id="phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div><div class="field"><label for="business-type">Business type <span>(optional)</span></label><select id="business-type" name="businessType"><option value="">Select a business type</option><option>Home services</option><option>Restaurant or café</option><option>Health or wellness</option><option>Shop, salon, or studio</option><option>Professional services</option><option>Something else</option></select></div><div class="field full"><label for="website">Current website <span>(optional)</span></label><input id="website" name="website" type="text" inputmode="url" autocomplete="url" maxlength="500" placeholder="yourbusiness.com"></div><div class="field full"><label for="need">What are you looking for? *</label><select id="need" name="need" required><option value="">Choose what fits best</option><option>A new website</option><option>A redesign of my website</option><option>I’m exploring my options</option></select></div><div class="field full"><label for="message">Anything else we should know? <span>(optional)</span></label><textarea id="message" name="message" maxlength="4000" placeholder="A little about your business, what you need, or an example you like."></textarea></div></div><p class="form-note">${connected ? 'Your details are used to respond to your inquiry.' : 'Online inquiries aren’t open yet. You can prepare and save your brief here; nothing will be sent.'} <a href="/privacy/">Privacy information</a>.</p><button class="button form-submit" type="submit" data-js-submit disabled>${site.contactEndpoint ? 'Send your inquiry' : site.email ? 'Prepare your email' : 'Prepare your website brief'}${icon()}</button><noscript><p class="form-note">Enable JavaScript to ${connected ? 'prepare your inquiry' : 'prepare and save a brief'}.${site.email ? ` You can also email <a href="mailto:${escape(site.email)}">${escape(site.email)}</a>.` : ''}</p></noscript><p class="form-feedback" role="status" aria-live="polite" tabindex="-1"></p><div class="brief-output" hidden><label class="small" for="brief">Your website brief</label><textarea id="brief" readonly></textarea><div class="actions"><button type="button" class="button button--outline" data-copy>Copy brief</button><button type="button" class="button button--outline" data-download>Save brief</button></div></div></form></div></section>`; }
    4164:## Activity
    4357:## Activity
    4411:## Activity
    4452:## Activity
    4457:## User
    4463:## Assistant
    4467:## Activity
    4508:## Activity
    4513:## Activity
    4518:## Activity
    4523:## Activity
    4528:## Activity
    4533:## Activity
    4538:## Activity
    4543:## Activity
    4548:## Activity
    4553:## Activity
    4558:## Activity
    4563:## Activity
    4568:## Activity
    4573:## Activity
    4578:## Activity
    4583:## Activity
    4588:## Activity
    4593:## Activity
    4633:          {route:'repairs',label:'Repairs & fault finding',title:'Something stopped working?<br><span>Start with the symptoms.</span>',intro:'A light that flickers, an outlet that no longer works, or a circuit that keeps tripping. Tell us what changed and where you noticed it.',image:'electrician',context:'Repairs & fault finding',
    4636:           sections:[section('Start with the everyday.','Where do you charge a phone, work from home, or plug in the vacuum? Practical improvements begin with those small routines. A carefully placed outlet or a better-positioned switch can make a room easier to use.'),section('Plan the details together.','The existing wiring, circuit capacity, access, and local requirements all affect the work. Discuss your intended equipment and the locations you have in mind before buying fittings or arranging other trades.',['Outlet and switch positions','The equipment or appliances you plan to use','Access to walls, ceilings, and existing circuits']),section('Leave room for the next change.','A useful plan considers how you might use the space later as well as what you need today. Confirm the agreed work, finish, testing, and any documentation before installation begins.')],action:'Plan an installation'},
    4638:           sections:[section('Bring the room plan.','Share appliance positions, cabinetry drawings, and how you want to use the space. That gives the electrical plan a practical starting point, from task lighting to outlets that will remain accessible after installation.'),section('Coordinate the work.','Electrical changes often need to happen at specific stages of a renovation. Discuss access, sequencing, responsibilities, and which decisions must be final before the next trade begins.',['Appliance specifications and intended loads','Task, ambient, and feature lighting','Switch locations and useful outlet positions','The renovation sequence and access requirements']),section('Agree on the finished picture.','Confirm the visible fittings as well as the work behind the surfaces. A written scope should make clear what will be installed, how changes are handled, and what testing and handover information will be provided.')],action:'Talk through a renovation'},
    4641:           sections:[section('Listen to the problem.','A good conversation starts with what you want to change. Perhaps the kitchen is too dark, the office needs more outlets, or something has stopped working. Explain it in your own words.'),section('Make the scope understandable.','The proposed work should connect the technical requirements to your practical goals. Ask what is included, what needs further investigation, and what decisions you need to make before the work starts.',['A description of the agreed work','Access and preparation requirements','Fittings, finishes, and responsibilities','Testing and handover arrangements']),section('Keep the next step clear.','After an inquiry, the business should explain whether an assessment is needed and how a quote will be prepared. Current Electric is a fictional website example; it shows this customer journey without claiming qualifications, completed jobs, or real availability.')],action:'Start with your project'},
    4652:           sections:[section('What the class explores.','This example class introduces breathing, body awareness, and controlled movement without asking you to keep up with a fast sequence. Repetition gives you time to notice what feels familiar and where you need more explanation.'),section('Who it is designed for.','Someone trying Pilates for the first time, returning after a break, or simply preferring a steadier pace. Suitability is personal, so a real studio should discuss your starting point rather than assume one class fits everyone.',['Time to understand each movement','A steady pace with room for questions','An introduction to the class structure']),section('What happens next.','After you are familiar with the format, you can explore the other class descriptions and discuss a next step with the studio. Progress does not need a deadline. The weekly schedule shows how an introductory class could fit around your routine.')],action:'Choose Foundations'},
    4654:           sections:[section('Begin with a conversation.','Tell the studio what brings you in: getting familiar with movement, building confidence before a group class, or understanding the equipment. An individual session should have a clear purpose shaped around you.'),section('Make the plan personal.','A real instructor would discuss relevant experience, preferences, and suitability before proposing a session. Ask about the format, duration, equipment, pricing, and cancellation policy so you know what to expect.',['Your starting experience and comfort level','What you would like to understand or practice','Any suitability questions to discuss with an appropriate professional']),section('Find your next step.','Private and group formats can serve different needs. The aim of this example is to make the options easy to understand and the inquiry comfortable to send. It does not claim rehabilitation services or clinical outcomes.')],action:'Ask about a session'},
    4666:           sections:[section('Tell us what you have noticed.','Does the water appear only when the fixture is in use, or all the time? Is it coming from the tap, a visible connection, or somewhere you cannot see? A plain description helps guide the next conversation.'),section('Understand the options.','Some issues may be addressed with a repair; others call for replacing a worn fixture or connection. Condition, compatibility, access, and the cause of the problem all matter. An assessment should explain those factors before recommending work.',['Which fixture or area is affected','When the leak started and whether it is changing','Any recent work or fixture replacement']),section('Limit disruption safely.','If there is an active leak and you know how to safely isolate the water, doing so may help limit damage. For real urgent help, contact a local plumbing service. This fictional website does not arrange visits or provide emergency assistance.')],action:'Describe a leak'},
    4668:           sections:[section('One fixture or several?','Knowing which fixtures are affected helps a plumber understand the scope of the issue. Mention whether the problem is limited to one basin or appears in other parts of the home too.'),section('Look for the cause.','A blockage, a damaged section, or another issue can produce similar symptoms. The appropriate assessment and clearing method depend on the pipework, access, and what is found. Avoid assuming a recurring blockage has the same cause every time.',['Which sinks, showers, or toilets are affected','How quickly the water drains','Whether the issue returns after previous work','Any unusual sounds or overflow']),section('Plan the next step.','Tell the business what you know and ask how it will assess the problem. If there is overflowing wastewater or an immediate property concern, contact an appropriate real local service. This is an example inquiry journey only.')],action:'Ask about a drain'},
    4672:          {route:'what-to-expect',label:'What to expect',title:'A little clarity.<br><span>Before the visit.</span>',intro:'From the first description to an agreed next step, a plumbing inquiry should be easy to understand.',image:'work-tools',
    4674:          {route:'questions',label:'Plumbing questions',type:'faq',title:'Good questions.<br><span>A simpler next step.</span>',intro:'A few things homeowners often want to understand before requesting plumbing help.',image:'bathroom-detail',faq:[question('Do I need to identify the faulty part?','No. Tell the business what is happening and where. Identifying the cause is part of an appropriate assessment.'),question('Can you help me choose a water heater?','The water-heater guide explains useful questions about household demand, available space, energy supply, and installation. A real recommendation requires an assessment.'),question('What should I do about an active leak?','If it is safe and you know how, isolate the water supply. Contact a real local plumber for urgent assistance. This example does not dispatch help.'),question('Can I supply my own fixtures?','Confirm compatibility, installation requirements, and responsibilities before purchasing. The kitchen and bathroom page explains what to discuss.'),question('Will I get a price from this form?','No. A real quote would depend on the work and assessment. This fictional request only illustrates an inquiry flow.'),question('Are the photographs your completed work?','No. They are illustrative stock images. Clearflow Plumbing is a fictional example created by SkipManual.')]},
    4684:           sections:[section('Consider the complete system.','The roof covering, underlying layers, ventilation, flashing, drainage, and condition of the structure work together. A replacement proposal should explain what will be assessed and how those details are addressed.'),section('Compare the scope, not just the finish.','Two proposals can look similar while including different work. Ask about removal, disposal, preparation, materials, access, weather planning, and any conditions that could change the scope.',['What will be removed and inspected','Which materials and details are specified','How changes will be discussed and approved','How the property will be accessed and protected']),section('Plan the handover.','Before proceeding, understand the schedule, care information, product documentation, and any applicable warranties from the real business and manufacturers. This example makes no warranty or lifespan claims; it shows a clear path into the discussion.')],action:'Talk through replacement'},
    4689:           sections:[section('Start with what you know.','Describe the concern and any history you have: approximate age, previous repairs, recent weather, or changes inside the home. It is fine if some details are unknown. A plain description is a useful beginning.'),section('Discuss how the roof will be assessed.','The real business should explain access, assessment arrangements, any charges, and what can be established. Some conditions may require further investigation rather than a conclusion from a single visible symptom.'),section('Leave with questions answered.','A useful recommendation explains the findings, options, and proposed next step. Ask for clarity where a term or allowance is unfamiliar.',['What condition was observed?','Which options are reasonable and why?','What does the proposed scope include?','What would need further investigation?'])],action:'Request an assessment'},
    4695:## Assistant
    4699:## Activity
    4762:      return `<section class="demo-container demo-page-hero"><p class="demo-kicker">${p.label}</p><h1>${p.title}</h1><p>${p.intro}</p></section><section class="demo-container example-gallery" aria-label="Photo gallery">${c.gallery.map((name,i)=>`<figure><a href="/images/${name}.webp" data-gallery-image aria-label="Enlarge image ${i+1}">${photo(name,{eager:i<2})}<span class="gallery-zoom">${icon('diagonal')}View image</span></a><figcaption>${['A closer look at the details','Space, light, and everyday life','An idea for your next visit','A different point of view'][i%4]}</figcaption></figure>`).join('')}</section><dialog class="gallery-dialog" aria-label="Enlarged gallery image"><button type="button" data-gallery-close aria-label="Close enlarged image">Close ${icon('check')}</button><img alt=""><p></p><div><button type="button" data-gallery-prev aria-label="Previous image">← Previous</button><span data-gallery-position></span><button type="button" data-gallery-next aria-label="Next image">Next →</button></div></dialog>${closing(e,'Picture your next step.','Explore the options, then tell us what you have in mind.')}`;
    4769:      return `<nav class="demo-container example-breadcrumb" aria-label="Breadcrumb"><a href="${href(e)}">Home</a><span>/</span><span>${p.label}</span></nav><section class="demo-container example-detail-hero"><div><p class="demo-kicker">${p.label}</p><h1>${p.title}</h1><p>${p.intro}</p><a class="demo-button" href="${requestLink(e,p)}">${p.action||'Start an inquiry'}${icon('arrow')}</a></div><figure>${photo(p.image,{eager:true})}<figcaption>Illustrative photograph · ${escape(e.name)}</figcaption></figure></section>${p.type==='faq'?`<section class="demo-container demo-section example-faq-page">${faqList(p.faq)}</section>`:`<section class="demo-container example-detail-body"><div>${p.sections.map((s,i)=>`<article id="detail-${i}"><span>0${i+1}</span><div><h2>${s.heading}</h2><p>${s.text}</p>${s.items?.length?`<ul>${s.items.map(item=>`<li>${item}</li>`).join('')}</ul>`:''}</div></article>`).join('')}${p.faq?faqList(p.faq):''}</div><aside class="example-help"><p class="demo-kicker">Your next step</p><h2>${e.theme==='olive'?'Make a little time.':e.theme==='form'?'Find your starting point.':'Tell us what you need.'}</h2><p>${e.theme==='olive'?'Choose your date and party size in the table request.':e.theme==='form'?'Choose a class, or ask for help finding one.':'Your selected service will carry into the request form.'}</p><a class="demo-button" href="${requestLink(e,p)}">${p.action||'Start an inquiry'}${icon('arrow')}</a><a class="demo-text-link" href="${href(e,'questions')}">Common questions${icon('arrow')}</a></aside></section>`}<section class="demo-container demo-section"><div class="example-section-title"><h2>Keep exploring.</h2><a href="${href(e)}" class="demo-text-link">Back to home${icon('arrow')}</a></div><div class="example-related">${others.map(other=>`<a href="${href(e,other.route)}"><span>${other.label}</span><p>${other.intro}</p>${icon('arrow')}</a>`).join('')}</div></section>${closing(e,e.theme==='olive'?'There’s a place for you.':e.theme==='form'?'One comfortable next step.':'Start with a conversation.',e.theme==='olive'?'Explore the table request and plan an evening.':'Tell us what you know. You do not need all the answers.',p)}`;
    4774:## Activity
    4780:## Activity
    4784:## Activity
    4818:      ridgeline: { links:[['Roofing services','roofing'],['Repair or replace?','repair-or-replace']], action:'Request an assessment', contact:'request-an-assessment', footer:'Good homes. Sound roofs. A considered next step.' },
    4861:## Activity
    4873:      website:{route:'business-websites',simple:'A website that explains your business.',image:'kitchen',heading:'Show people what you do.<br>Make the next step easy.',intro:'We plan, design, and build a 10–20 page website around your business, your services, and the people you want to reach.',sections:[['The pages your customers actually need.','A homepage gives people their bearings. Dedicated service pages explain the work. Photos show the details. Useful FAQs answer common questions, and clear contact options help visitors take the next step. We plan those pages together instead of asking you to decide everything on your own.'],['A design that fits your business.','A roofer, a restaurant, and a Pilates studio need different things from a website. The structure, photography, wording, and contact flow should reflect the customer’s reason for visiting. The five full examples show how that changes from one business to another.'],['Built for a phone, too.','Customers may be checking your business between other tasks. Readable text, fast-loading images, clear navigation, and easy-to-use forms help them find the information they need on a smaller screen.']],example:'A homeowner visits your plumbing website, opens the water-heater page, checks the information, and requests a visit without searching through unrelated services.',related:'clearflow-plumbing'},
    4874:      'follow-up':{route:'inquiry-follow-up',simple:'A reply while you’re busy working.',image:'electrician',heading:'A new inquiry deserves<br>a useful next step.',intro:'Automatic acknowledgments and follow-ups help you keep a new customer conversation moving when the day gets busy.',sections:[['Start by acknowledging the inquiry.','When someone contacts your business, a clear reply lets them know their message arrived. The wording can explain what happens next or ask a useful question, so the conversation has a starting point when you return to it.'],['Follow up with a purpose.','We plan messages around your service and your customer’s next decision. A follow-up could ask for missing project details or invite the customer to continue the conversation. Timing, stopping rules, and the handoff to you are agreed during setup.'],['Keep you in the conversation.','The system supports your response. You still answer specific questions, assess the job, quote the work, and confirm arrangements. We plan where that personal response is needed, so an automatic message does not pretend to make a decision for you.']],example:'Someone asks about a roof repair. They receive an acknowledgment asking where they noticed the leak. You pick up the conversation with useful context already there.',related:'ridgeline-roofing'},
    4877:      seo:{route:'on-page-seo',simple:'Help people understand your services.',image:'house-exterior',heading:'Clear pages for your customers.<br>Clear information for search.',intro:'On-page SEO gives your website a useful foundation: clear page titles, meaningful content, sensible links, and accurate business information.',sections:[['Give each service a clear home.','Someone looking for a roof repair should be able to find a page about roof repairs. We organize service content around the questions and next steps relevant to that work, with headings that make the page easy to scan.'],['Make the important details accurate.','Page titles and descriptions help explain each page. Business information and structured data use verified details, and the site connects related pages so visitors can move from a service to a question or contact option naturally.'],['Start with a sound foundation.','This covers the website itself. It does not promise a search position or include unconfirmed advertising, backlink campaigns, or ongoing SEO retainers. We discuss any work beyond the package separately so you understand what is included.']],example:'A roof-repair page explains leaks, assessment, and the inquiry process, then links to the repair-or-replace guide and an assessment request.',related:'ridgeline-roofing'},
    4886:    <section class="section container plain-offer"><div>${eyebrow('What do you actually get?')}<h2>A better website.<br>And help with<br>what happens next.</h2><p class="lead">People find you. They get in touch. Life gets busy. We bring the website and the follow-up together so the next step is clearer.</p>${textLink('Everything in the $249 package','/services/')}</div><div class="plain-service-list">${packageServices.map((s,i)=>`<a href="/services/${serviceDetails[s.id].route}/"><span>0${i+1}</span><div><h3>${serviceDetails[s.id].simple}</h3><p>${s.short}</p></div>${icon('arrow')}</a>`).join('')}</div></section>
    4890:    export function redesignedServices(){return `${pageHero('All included. $249/month.','Your website.<br>And the follow-through.','Five practical services that help people understand your business, get in touch, and keep the conversation going.')}<nav class="container service-jump" aria-label="Jump to a service">${packageServices.map(s=>`<a href="#${s.id}">${s.name}${icon('arrow')}</a>`).join('')}</nav><section class="container service-stories">${packageServices.map((s,i)=>{const d=serviceDetails[s.id];return `<article id="${s.id}"><div class="service-story-photo">${photo(d.image)}</div><div><p class="eyebrow">0${i+1} / ${s.name}</p><h2>${d.simple}</h2><p>${s.description}</p><ul>${s.points.map(point=>`<li>${point}</li>`).join('')}</ul><div class="service-example"><strong>In everyday terms</strong><p>${s.example}</p></div>${textLink('See how it works',`/services/${d.route}/`)}</div></article>`;}).join('')}</section>${scenarioSection()}${cta('A little less on your plate.<br>A clear next step for your customers.')}`;}
    4894:    export function howItWorks(){return `${pageHero('How it works','A website project.<br>Without the guesswork.','You know your business. We guide the website decisions, explain the steps, and show you the work before launch.')}<section class="container how-photo">${photo('cafe',{eager:true,sizes:'100vw'})}<div><h2>You don’t need<br>to have it all figured out.</h2><p>A few details about your business are enough to start the conversation.</p></div></section><section class="section container full-process">${[['A conversation about your business.','Tell us what you do, who you serve, and how customers usually get in touch. Share an existing website if you have one, or an example you like. We discuss fit, the package, and the details you need before deciding.','Bring: your business name, main services, and the result you want from the website.'],['A plan for your pages and content.','We map the 10–20 pages around your services and customer questions. We discuss photos, wording, contact options, and what verified business information needs to be included.','We agree: pages, functionality, content responsibilities, and the project scope.'],['A design you can review.','We build a visual direction around your business and share the work for review. You can see how the pages connect, how they read on a phone, and how a visitor gets in touch.','You review: the design, service information, photographs, and inquiry path.'],['Follow-up that fits the way you work.','We plan inquiry replies, missed-call texts, review invitations, and the handoff to you. Message wording, timing, platform arrangements, usage, and responsibilities are made clear.','We confirm: how the messages work and when you take over the conversation.'],['Checks, launch, and a clear handover.','We check the pages, forms, navigation, mobile layout, and basic search information. The final domain, contact destinations, publishing arrangements, and ongoing responsibilities are confirmed before launch.','You receive: a website you have reviewed and clarity about what happens next.']].map(([heading,text,note],i)=>`<article><span>0${i+1}</span><div><h2>${heading}</h2><p>${text}</p><p class="process-note">${note}</p></div></article>`).join('')}</section>${cta('Start with what you know.<br>We’ll help with the website part.')}`;}
    4903:    export function bookingPage(){return `<section class="container page-hero booking-hero">${eyebrow('Let’s talk about your business')}<h1>Your website questions.<br>A straightforward conversation.</h1><p class="lead">Tell us what you do and what you need. We’ll explain how the $249/month package could fit your business.</p></section><section class="container booking-layout"><div class="booking-agenda">${photo('living-room',{eager:true})}<h2>Here’s what we’ll cover.</h2><ol><li><strong>Your business</strong><span>What you offer, who you serve, and how customers find you today.</span></li><li><strong>Your website</strong><span>The pages, photos, and contact options that would make it useful.</span></li><li><strong>Your next step</strong><span>Package details, questions, and whether it makes sense to move forward.</span></li></ol><p class="small">No finished brief needed. There is no commitment to a package just by asking about it.</p></div><div class="booking-action">${site.bookingUrl?`<div class="booking-connected"><h2>Choose a time that suits you.</h2><p>Open our booking calendar to see current availability and confirm your appointment.</p>${button('Open the booking calendar',site.bookingUrl)}<p class="small">The booking provider will show the available times and send your confirmation.</p></div><p class="booking-alternative">Prefer to start with a message?</p>`:''}${inquiryForm({booking:true})}</div></section><section class="section container"><div class="faq-layout"><h2>Before we talk.</h2>${faqList([faqs[1],faqs[2],faqs[12]])}</div></section>`;}
    4911:## Activity
    4979:    await update('.env.example',s=>s+'\n# Verified scheduling page; intentionally deferred until the design is approved.\nPUBLIC_BOOKING_URL=\n');
    4981:## Activity
    4986:## Activity
    5117:## Assistant
    5119:The main site now puts the offer, price, examples, and next step near the top. Each example site has navigation for its full 10-page structure and a persistent mobile action link. I’m finishing the photo galleries and the shorter inquiry form, then I’ll check the layouts in the browser.
    5121:## Activity
    5163:    +  gallery.querySelector('[data-gallery-next]').addEventListener('click',()=>display(current+1));
    5184:## Activity
    5196:## Activity
    5221:## Activity
    5243:## Activity
    5298:      gallery.querySelector('[data-gallery-next]').addEventListener('click',()=>display(current+1));
    5353:## Activity
    5374:## Activity
    5378:## Activity
    5382:## Activity
    5386:## Activity
    5390:## Activity
    5401:     ['02','Repairs & fault finding','For the switch that stopped working, the outlet that needs attention, or the problem you can’t quite explain.','request-a-quote'],
    5405:    function currentHome(e) { return `<section class="demo-container current-hero"><div>${dkicker('Residential electrical. Clearly considered.')}<h1>Good energy.<br>Expertly wired<span>.</span></h1><p>From the lights you live by to the outlets you rely on. Practical electrical work, explained in plain language.</p>${dlink(e,'Let’s talk about your project','request-a-quote')}<p class="current-hero-note">Your home. Your questions. A clear next step.</p></div><div class="current-hero-image">${dimage('electrician','Electrical professional working on a wiring installation','',true)}<span>${icon('bolt')}Make your home work better.</span></div></section><div class="current-strip"><div class="demo-container"><span>${icon('home')}Work around your home</span><span>${icon('layout')}Options explained clearly</span><span>${icon('cursor')}A straightforward next step</span></div></div><section class="demo-section demo-container"><div class="demo-section-head split"><div>${dkicker('How we can help')}<h2>The small fixes.<br>The bigger plans.</h2></div><p>Whatever brought you here, start with the job.<br>We’ll help make the next step clear.</p></div><div class="electrical-services">${services.slice(0,3).map(([n,h,p,r])=>`<article><span>${n} /</span><h3>${h}</h3><p>${p}</p>${dlink(e,'Explore this service',r,'demo-text-link')}</article>`).join('')}</div></section><section class="current-process"><div class="demo-container demo-section"><div>${dkicker('Let’s keep it simple')}<h2>Less guesswork.<br>More getting it sorted.</h2></div><ol><li><span>01</span><div><h3>Tell us what’s going on.</h3><p>A small repair, a new idea, or a full renovation. Start with what you know.</p></div></li><li><span>02</span><div><h3>Understand your options.</h3><p>The scope, practical choices, and next steps should be clear before any work.</p></div></li><li><span>03</span><div><h3>Make a plan for the work.</h3><p>Agree on what needs doing and how it fits around your home.</p></div></li></ol></div></section><section class="demo-section demo-container current-faq"><h2>A little clarity<br>goes a long way.</h2>${faqList([{q:'What should I include in my request?',a:'Describe the issue or project, the room involved, and what you would like to change. You do not need to know the technical name.'},{q:'Can I ask about more than one job?',a:'Yes. Include the different tasks in one request so they can be considered together.'},{q:'Does this example accept real electrical jobs?',a:'No. Current Electric is a fictional website concept. The request form demonstrates an inquiry flow only.'}])}</section><section class="demo-closing"><div class="demo-container"><h2>Let’s shed some light<br>on your next project.</h2>${dlink(e,'Start a project request','request-a-quote')}</div></section>`; }
    5426:      { id:'drains', name:'Drains & blockages', icon:'flow', problem:'The water is going nowhere.', text:'A slow sink, a backed-up shower, or a toilet that keeps blocking. Tell us which fixtures are affected.', detail:'Understanding whether one fixture or several are affected helps guide the assessment. The cause and access determine the next step.', service:'Drains & blockages' },
    5436:      return `<section class="clearflow-hero demo-container"><div>${kicker('A little help. A home that works.')}<h1>Let’s get your<br>home back<br>to <span>normal.</span></h1><p>Dripping taps. Slow drains. Cold showers.<br>Tell us what’s happening. We’ll help you<br class="desktop-break"> take the next step.</p><div class="trade-actions">${link(e,'Find the help you need','#find-help')}${link(e,'Request a visit','request-a-visit','','demo-text-link')}</div><div class="clearflow-hero-note">${icon('water')}Plumbing for the everyday.<br>And the days that don’t go to plan.</div></div><figure class="clearflow-picture">${photo('plumbing','A bright bathroom with a white bathtub, basin, and chrome fixtures',true)}<figcaption><span>Less disruption.</span><strong>More getting on<br>with your day.</strong>${icon('water')}</figcaption></figure></section><div class="clearflow-ribbon demo-container"><span>01 &nbsp; Tell us the problem</span><span>02 &nbsp; Understand your options</span><span>03 &nbsp; Plan the next step</span></div>${serviceFinder(e)}<section class="clearflow-hotwater"><div class="demo-container"><span class="water-illustration" aria-hidden="true">${icon('sun')}</span><div>${kicker('Let’s talk hot water')}<h2>A good day starts<br>with a warm shower.</h2><p>Repair the system you have, or explore a replacement? Start with the symptoms, your household, and the questions worth asking.</p>${link(e,'Understand your water heater','water-heaters','','demo-text-link')}</div></div></section>${closing(e,'Something not quite right?','Start with what you know. We’ll take it from there.')}`;
    5440:## Activity
    5453:      s=s.replace('Our role is to make the website side easier to understand, then design and build something you can confidently share.','We build the website and plan the customer follow-up with you: inquiry replies, missed-call texts, and review requests that fit the way you work. The aim is a clearer next step for your customers and a little less on your plate.');
    5471:     .replace("${['A closer look at the details','Space, light, and everyday life','An idea for your next visit','A different point of view'][i%4]}","${escape(photoLibrary[name][0])}")
    5495:## Activity
    5500:## Activity
    5537:## Activity
    5594:## Activity
    5602:## Activity
    5614:## Activity
    5624:## Assistant
    5626:The first browser review looks good: the main site is white, the offer is easier to read, and the phone layout keeps a clear next step within reach. The build now has 72 pages, including 10 for each example business. I’m refreshing the previews and checking every route, gallery, menu, and form.
    5628:## Activity
    5640:## Activity
    5650:## Activity
    5661:    +- `PUBLIC_BOOKING_URL`: the verified HTTPS scheduling page. Enables the calendar link on `/book/`. The owner has explicitly deferred connecting scheduling and contact details until the design is approved.
    5740:    +Each business now has ten pages. The restaurant includes food, drinks, private dining, visit planning, and a gallery; trade businesses have separate service details, practical guides, and photo inspiration; the studio has beginner guidance, private sessions, class information, and movement notes. Expanded desktop menus, ten-link mobile menus, related pages, and sticky mobile actions connect the content. Gallery dialogs support arrow keys, Escape, previous/next controls, and focus restoration; without JavaScript the image links still work.
    ✓ • 365ms

## Activity

    $ Get-ChildItem -Force | Select-Object Mode,Name,LastWriteTime; Get-Content -Encoding utf8 'C:/Users/muham/.codex/skills/ui-ux-pro-max/cli/assets/skills/ui-styling/SKILL.md'
    
    Mode   Name                                                  LastWriteTime
    ----   ----                                                  -------------
    d----- .tools                                                05-10-2026 09:50:03
    d----- artifacts                                             05-10-2026 09:21:24
    d----- dist                                                  05-10-2026 09:59:44
    d----- docs                                                  05-10-2026 08:58:45
    d----- public                                                03-10-2026 07:42:18
    d----- scripts                                               05-10-2026 09:21:20
    d----- src                                                   03-10-2026 07:48:38
    -a---- .env.example                                          05-10-2026 09:25:32
    -a---- .gitignore                                            03-10-2026 08:40:10
    -a---- codex-session-01a109d0-b7e6-7ae3-8218-d712a3b53115.md 05-10-2026 10:06:12
    -a---- package.json                                          03-10-2026 08:32:28
    -a---- README.md                                             05-10-2026 10:03:29
    ---
    name: ui-styling
    description: Create beautiful, accessible user interfaces with shadcn/ui components (built on Radix UI + Tailwind), Tailwind CSS utility-first styling, and canvas-based visual designs. Use when building user interfaces, implementing design systems, creating responsive layouts, adding accessible components (dialogs, dropdowns, forms, tables), customizing themes and colors, implementing dark mode, generating visual designs and posters, or establishing consistent styling patterns across applications.
    argument-hint: "[component or layout]"
    license: MIT
    metadata:
      author: claudekit
      version: "1.0.0"
    ---
    
    # UI Styling Skill
    
    Comprehensive skill for creating beautiful, accessible user interfaces combining shadcn/ui components, Tailwind CSS utility styling, and canvas-based visual design systems.
    
    ## Reference
    
    - shadcn/ui: https://ui.shadcn.com/llms.txt
    - Tailwind CSS: https://tailwindcss.com/docs
    
    ## When to Use This Skill
    
    Use when:
    - Building UI with React-based frameworks (Next.js, Vite, Remix, Astro)
    - Implementing accessible components (dialogs, forms, tables, navigation)
    - Styling with utility-first CSS approach
    - Creating responsive, mobile-first layouts
    - Implementing dark mode and theme customization
    - Building design systems with consistent tokens
    - Generating visual designs, posters, or brand materials
    - Rapid prototyping with immediate visual feedback
    - Adding complex UI patterns (data tables, charts, command palettes)
    
    ## Core Stack
    
    ### Component Layer: shadcn/ui
    - Pre-built accessible components via Radix UI primitives
    - Copy-paste distribution model (components live in your codebase)
    - TypeScript-first with full type safety
    - Composable primitives for complex UIs
    - CLI-based installation and management
    
    ### Styling Layer: Tailwind CSS
    - Utility-first CSS framework
    - Build-time processing with zero runtime overhead
    - Mobile-first responsive design
    - Consistent design tokens (colors, spacing, typography)
    - Automatic dead code elimination
    
    ### Visual Design Layer: Canvas
    - Museum-quality visual compositions
    - Philosophy-driven design approach
    - Sophisticated visual communication
    - Minimal text, maximum visual impact
    - Systematic patterns and refined aesthetics
    
    ## Quick Start
    
    ### Component + Styling Setup
    
    **Install shadcn/ui with Tailwind:**
    ```bash
    npx shadcn@latest init
    ```
    
    CLI prompts for framework, TypeScript, paths, and theme preferences. This configures both shadcn/ui and Tailwind CSS.
    
    **Add components:**
    ```bash
    npx shadcn@latest add button card dialog form
    ```
    
    **Use components with utility styling:**
    ```tsx
    import { Button } from "@/components/ui/button"
    import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
    
    export function Dashboard() {
      return (
        <div className="container mx-auto p-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Analytics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">View your metrics</p>
              <Button variant="default" className="w-full">
                View Details
              </Button>
            </CardContent>
          </Card>
        </div>
      )
    }
    ```
    
    ### Alternative: Tailwind-Only Setup
    
    **Vite projects:**
    ```bash
    npm install -D tailwindcss @tailwindcss/vite
    ```
    
    ```javascript
    // vite.config.ts
    import tailwindcss from '@tailwindcss/vite'
    export default { plugins: [tailwindcss()] }
    ```
    
    ```css
    /* src/index.css */
    @import "tailwindcss";
    ```
    
    ## Component Library Guide
    
    **Comprehensive component catalog with usage patterns, installation, and composition examples.**
    
    See: `references/shadcn-components.md`
    
    Covers:
    - Form & input components (Button, Input, Select, Checkbox, Date Picker, Form validation)
    - Layout & navigation (Card, Tabs, Accordion, Navigation Menu)
    - Overlays & dialogs (Dialog, Drawer, Popover, Toast, Command)
    - Feedback & status (Alert, Progress, Skeleton)
    - Display components (Table, Data Table, Avatar, Badge)
    
    ## Theme & Customization
    
    **Theme configuration, CSS variables, dark mode implementation, and component customization.**
    
    See: `references/shadcn-theming.md`
    
    Covers:
    - Dark mode setup with next-themes
    - CSS variable system
    - Color customization and palettes
    - Component variant customization
    - Theme toggle implementation
    
    ## Accessibility Patterns
    
    **ARIA patterns, keyboard navigation, screen reader support, and accessible component usage.**
    
    See: `references/shadcn-accessibility.md`
    
    Covers:
    - Radix UI accessibility features
    - Keyboard navigation patterns
    - Focus management
    - Screen reader announcements
    - Form validation accessibility
    
    ## Tailwind Utilities
    
    **Core utility classes for layout, spacing, typography, colors, borders, and shadows.**
    
    See: `references/tailwind-utilities.md`
    
    Covers:
    - Layout utilities (Flexbox, Grid, positioning)
    - Spacing system (padding, margin, gap)
    - Typography (font sizes, weights, alignment, line height)
    - Colors and backgrounds
    - Borders and shadows
    - Arbitrary values for custom styling
    
    ## Responsive Design
    
    **Mobile-first breakpoints, responsive utilities, and adaptive layouts.**
    
    See: `references/tailwind-responsive.md`
    
    Covers:
    - Mobile-first approach
    - Breakpoint system (sm, md, lg, xl, 2xl)
    - Responsive utility patterns
    - Container queries
    - Max-width queries
    - Custom breakpoints
    
    ## Tailwind Customization
    
    **Config file structure, custom utilities, plugins, and theme extensions.**
    
    See: `references/tailwind-customization.md`
    
    Covers:
    - @theme directive for custom tokens
    - Custom colors and fonts
    - Spacing and breakpoint extensions
    - Custom utility creation
    - Custom variants
    - Layer organization (@layer base, components, utilities)
    - Apply directive for component extraction
    
    ## Visual Design System
    
    **Canvas-based design philosophy, visual communication principles, and sophisticated compositions.**
    
    See: `references/canvas-design-system.md`
    
    Covers:
    - Design philosophy approach
    - Visual communication over text
    - Systematic patterns and composition
    - Color, form, and spatial design
    - Minimal text integration
    - Museum-quality execution
    - Multi-page design systems
    
    ## Utility Scripts
    
    **Python automation for component installation and configuration generation.**
    
    ### shadcn_add.py
    Add shadcn/ui components with dependency handling:
    ```bash
    python scripts/shadcn_add.py button card dialog
    ```
    
    ### tailwind_config_gen.py
    Generate tailwind.config.js with custom theme:
    ```bash
    python scripts/tailwind_config_gen.py --colors brand:blue --fonts display:Inter
    ```
    
    ## Best Practices
    
    1. **Component Composition**: Build complex UIs from simple, composable primitives
    2. **Utility-First Styling**: Use Tailwind classes directly; extract components only for true repetition
    3. **Mobile-First Responsive**: Start with mobile styles, layer responsive variants
    4. **Accessibility-First**: Leverage Radix UI primitives, add focus states, use semantic HTML
    5. **Design Tokens**: Use consistent spacing scale, color palettes, typography system
    6. **Dark Mode Consistency**: Apply dark variants to all themed elements
    7. **Performance**: Leverage automatic CSS purging, avoid dynamic class names
    8. **TypeScript**: Use full type safety for better DX
    9. **Visual Hierarchy**: Let composition guide attention, use spacing and color intentionally
    10. **Expert Craftsmanship**: Every detail matters - treat UI as a craft
    
    ## Reference Navigation
    
    **Component Library**
    - `references/shadcn-components.md` - Complete component catalog
    - `references/shadcn-theming.md` - Theming and customization
    - `references/shadcn-accessibility.md` - Accessibility patterns
    
    **Styling System**
    - `references/tailwind-utilities.md` - Core utility classes
    - `references/tailwind-responsive.md` - Responsive design
    - `references/tailwind-customization.md` - Configuration and extensions
    
    **Visual Design**
    - `references/canvas-design-system.md` - Design philosophy and canvas workflows
    
    **Automation**
    - `scripts/shadcn_add.py` - Component installation
    - `scripts/tailwind_config_gen.py` - Config generation
    
    ## Common Patterns
    
    **Form with validation:**
    ```tsx
    import { useForm } from "react-hook-form"
    import { zodResolver } from "@hookform/resolvers/zod"
    import * as z from "zod"
    import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
    import { Input } from "@/components/ui/input"
    import { Button } from "@/components/ui/button"
    
    const schema = z.object({
      email: z.string().email(),
      password: z.string().min(8)
    })
    
    export function LoginForm() {
      const form = useForm({
        resolver: zodResolver(schema),
        defaultValues: { email: "", password: "" }
      })
    
      return (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(console.log)} className="space-y-6">
            <FormField control={form.control} name="email" render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />
            <Button type="submit" className="w-full">Sign In</Button>
          </form>
        </Form>
      )
    }
    ```
    
    **Responsive layout with dark mode:**
    ```tsx
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Content
              </h3>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    ```
    
    ## Resources
    
    - shadcn/ui Docs: https://ui.shadcn.com
    - Tailwind CSS Docs: https://tailwindcss.com
    - Radix UI: https://radix-ui.com
    - Tailwind UI: https://tailwindui.com
    - Headless UI: https://headlessui.com
    - v0 (AI UI Generator): https://v0.dev
    
    
    ✓ • 528ms

## Activity

    $ $sessionText = Get-Content -Encoding utf8 -Raw -LiteralPath 'codex-session-01a109d0-b7e6-7ae3-8218-d712a3b53115.md'; [regex]::Matches($sessionText, '(?ms)^## (User|Assistant)\r?\n.*?(?=^## |\z)') | ForEach-Object { $_.Value };
    ## User
    
    "C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\codex-session-01a0ff81-6769-7961-9d5d-33416bb03bbb.md"
    this is where we last paused , continue now
    
    
    ## Assistant
    
    I’ll read the saved session and check the project state, then continue from where we paused.
    
    
    ## Assistant
    
    The unfinished work is clear: add plumbing and roofing examples, switch public wording to “examples,” and explain the five confirmed package services through everyday situations. The data and photos are already there, but the new pages and interactions still need building. I’m using the UI styling skill to extend the design you liked.
    
    
    ## Assistant
    
    The new sites now have their own structures: Clearflow starts with common plumbing problems, while Ridgeline uses a wider architectural layout and a repair-or-replace guide. Next I’m connecting those choices to the request forms and adding the everyday service examples to SkipManual’s homepage.
    
    
    ## Assistant
    
    The site builds successfully with 35 pages. The homepage now shows how missed-call replies, inquiry follow-ups, and review requests work, and the services, pricing, and FAQ pages include the confirmed package. I’m checking the desktop and mobile layouts before refreshing the portfolio previews.
    
    
    ## Assistant
    
    The desktop and phone layouts look good. I also replaced the roofing photo so the roof is clearly visible and removed two remaining uses of “demo.” The portfolio previews are being refreshed from the actual pages; next is the full responsive and interaction check.
    
    
    ## Assistant
    
    All 140 responsive page checks passed across desktop, tablet, and phone sizes, along with 72 internal links and the form and selector tests. The new guides correctly carry the chosen service into their request forms. I’m finishing a visual check of the service, pricing, and guide pages.
    
    
    ## Assistant
    
    Finished the paused updates. [Open SkipManual](http://localhost:4321).
    
    - Added distinct plumbing and roofing websites, four pages each.
    - Replaced public “demo” wording with “examples.”
    - Updated the $249 package with all five confirmed services.
    - Added interactive, everyday examples explaining customer follow-up.
    - Refreshed all desktop and mobile portfolio previews.
    
    Build and all **140 responsive checks passed**.
    
    The contact form still prepares local briefs until a verified inbox or endpoint is configured.
    
    
    ## User
    
    make our website a white color rather than this little dim type, everyhting beautifully. also make it the example websites with even more pages and add more images, thats how these kind of websites works. this is not a game , its an actual product so put some works and make it worth building , dont step back we got a lot of credits to build all this, so make he details perfect. same goes for our main website. dont lack, add everything possible to get the attention from the client and an easy booking from the webste even if they visit for the first time.
    the current UI and UX is mainly a standard SaaS type of style, change it to simpler access , coz our clients as local businesses , they need quick access and more  of understanding faster with good understanding of what we do and all.
    use your max intelligence to plan and build
    
    
    ## User
    
    resume
    
    
    ## Assistant
    
    I’ll make the main site brighter, explain the offer faster, and give first-time visitors a clearer way to get started. I’ll also expand all five example sites with useful pages and more photography, so they feel like complete business websites.
    
    
    ## Assistant
    
    What booking link (Calendly, Cal.com, or another scheduler) and business contact email should I connect to SkipManual’s “Book a call” buttons? These are needed for visitors to make real bookings or send inquiries.
    
    
    ## Assistant
    
    I’m planning for 10 pages per example site, with service details, galleries, practical questions, and clear inquiry paths. The main site will use a white background, more photography, plain-language service explanations, and prominent pricing and booking links. I’ve asked for your booking link and email so I can connect real inquiries while I build the rest.
    
    
    ## User
    
    > What booking link (Calendly, Cal.com, or another scheduler) and business contact email should I connect to SkipManual’s “Book a call” buttons? These are needed for visitors to make real bookings or send inquiries.
    
    just for now skip it. once im okay with the rest of work , i will know you
    
    
    ## Assistant
    
    Understood—I’ll leave the booking and email connections for later. I’ll finish the design and inquiry flow now, with clear wording about what visitors can do before those connections are live.
    
    
    ## Assistant
    
    The additional page content is in place: separate service pages, photo galleries, FAQs, and practical guides for each business. I’ve also sourced 18 more photos. I’m now connecting those pages through navigation and relevant inquiry links, so visitors can reach them easily.
    
    
    ## Assistant
    
    The main site now puts the offer, price, examples, and next step near the top. Each example site has navigation for its full 10-page structure and a persistent mobile action link. I’m finishing the photo galleries and the shorter inquiry form, then I’ll check the layouts in the browser.
    
    
    ## Assistant
    
    The first browser review looks good: the main site is white, the offer is easier to read, and the phone layout keeps a clear next step within reach. The build now has 72 pages, including 10 for each example business. I’m refreshing the previews and checking every route, gallery, menu, and form.
    
    
    ✓ • 299ms

## Activity

    $ Get-Content -Encoding utf8 scripts/review-pages.mjs; Get-Content -Encoding utf8 scripts/audit.mjs; Get-Content -Encoding utf8 scripts/serve.mjs; Get-Content -Encoding utf8 src/data/site.mjs
    import fs from 'node:fs/promises';
    import { createRequire } from 'node:module';
    const require=createRequire(import.meta.url);
    const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
    const browser=await chromium.launch({headless:true,...(process.env.BROWSER_PATH?{executablePath:process.env.BROWSER_PATH}:{channel:'msedge'})});
    const routes=JSON.parse(await fs.readFile('dist/route-manifest.json','utf8'));
    await fs.mkdir('artifacts/page-review',{recursive:true});
    try{
     const page=await browser.newPage();
     for(const width of [1440,768,390]){
       for(const route of routes){
         await page.setViewportSize({width,height:900});
         await page.goto(`http://127.0.0.1:4321${route.path}`,{waitUntil:'networkidle'});
         await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(async image=>{image.loading='eager';try{await image.decode();}catch{}}));});
         await page.screenshot({path:`artifacts/page-review/${route.path.replaceAll('/','_')||'home'}-${width}.png`,fullPage:true});
       }
       console.log(`Captured ${routes.length} pages at ${width}px for visual review.`);
     }
    }finally{await browser.close();}
    import assert from 'node:assert/strict';
    import fs from 'node:fs/promises';
    import path from 'node:path';
    import { createRequire } from 'node:module';
    const require=createRequire(import.meta.url);
    const { chromium }=require(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
    const base=process.env.AUDIT_URL || 'http://127.0.0.1:4321';
    const executablePath=process.env.BROWSER_PATH;
    const browser=await chromium.launch({headless:true,...(executablePath?{executablePath}:{channel:'msedge'})});
    const output='artifacts';
    await fs.mkdir(output,{recursive:true});
    const pages=JSON.parse(await fs.readFile('dist/route-manifest.json','utf8'));
    const errors=[];
    const allChecks=[];
    const titles=new Set();
    const descriptions=new Set();
    const links=new Set();
    const context=await browser.newContext();
    const page=await context.newPage();
    page.on('pageerror',e=>errors.push(e.message));
    page.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('/not-a-real-page/'))errors.push(`HTTP ${r.status()}: ${r.url()}`);});
    try {
      for(const width of [1440,768,390,320]) {
        await page.setViewportSize({width,height:960});
        for(const entry of pages) {
          await page.goto(base+entry.path,{waitUntil:'networkidle'});
          await page.evaluate(()=>document.fonts.ready);
          await page.evaluate(async()=>{await Promise.all([...document.images].map(async image=>{image.loading='eager';try{await image.decode();}catch{}}));});
          if(entry.path==='/'&&(width===1440||width===390))await page.screenshot({path:`${output}/home-${width}.png`,fullPage:true});
          const result=await page.evaluate(()=>({
            title:document.title,
            description:document.querySelector('meta[name="description"]')?.content,
            h1:document.querySelectorAll('h1').length,
            overflow:document.documentElement.scrollWidth>innerWidth+1,
            overflows:[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.right>innerWidth+2;}).slice(0,5).map(e=>e.className),
            images:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),
            missingAlt:[...document.images].filter(i=>!i.hasAttribute('alt')).length,
            unlabeled:[...document.querySelectorAll('input:not([type="hidden"]),select,textarea')].filter(e=>!e.labels?.length&&!e.getAttribute('aria-label')).map(e=>e.id),
            orphanOptions:[...document.querySelectorAll('select')].filter(e=>[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim())).map(e=>e.id),
            links:[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')),
            brokenAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)))).map(a=>a.getAttribute('href')),
            fonts:[...document.fonts].filter(f=>f.status==='error').map(f=>f.family),
            robots:document.querySelector('meta[name="robots"]')?.content,
            schema:document.querySelector('script[type="application/ld+json"]')?.textContent,
            text:document.body.textContent,
            publicLabels:[...document.querySelectorAll('[aria-label],img[alt]')].map(e=>e.getAttribute('aria-label')||e.alt).join(' '),
          }));
          const label=`${width}px ${entry.path}`;
          assert(result.description?.length>35,`Missing description: ${label}`);
          assert.equal(result.h1,1,`One h1 required: ${label}`);
          assert(!result.overflow,`Horizontal overflow: ${label}; ${result.overflows}`);
          assert.equal(result.images.length,0,`Broken images: ${label}: ${result.images}`);
          assert.equal(result.missingAlt,0,`Missing image alt: ${label}`);
          assert.equal(result.unlabeled.length,0,`Unlabeled inputs: ${label}`);
          assert.equal(result.orphanOptions.length,0,`Malformed select options: ${label}: ${result.orphanOptions}`);
          assert.equal(result.brokenAnchors.length,0,`Missing anchor targets: ${label}: ${result.brokenAnchors}`);
          assert.equal(result.fonts.length,0,`Font errors: ${label}: ${result.fonts}`);
          assert(!/lorem ipsum|trusted by \d|five.star reviews|guaranteed rankings/i.test(result.text),`Placeholder or unsupported claim: ${label}`);
          assert(!/\bdemos?\b/i.test(result.text+' '+result.title+' '+result.description+' '+result.publicLabels),`Old public wording: ${label}`);
          if(entry.demo){assert.match(result.robots,/noindex/);assert.match(result.text,/fictional/i);assert(!result.schema,'Fictional demo must not carry LocalBusiness schema');}
          else if(!entry.noindex)assert.equal(JSON.parse(result.schema)['@type'],'LocalBusiness');
          if(width===1440){assert(!titles.has(result.title),'Duplicate title');titles.add(result.title);assert(!descriptions.has(result.description),'Duplicate description');descriptions.add(result.description);result.links.forEach(l=>links.add(l));}
          allChecks.push({width,path:entry.path,status:'passed'});
        }
        console.log(`Passed ${pages.length} page checks at ${width}px.`);
      }
      for(const href of links) {
        if(!href.startsWith('/'))continue;
        const response=await fetch(base+href);
        assert(response.ok,`Broken internal link: ${href}`);
        if(href.includes('#')){const id=decodeURIComponent(href.split('#')[1]);assert((await response.text()).includes(`id="${id}"`),`Missing anchor: ${href}`);}
      }
      await page.goto(base+'/faq/');
      const faq=page.locator('.faq-item').first();await faq.locator('summary').click();assert(await faq.evaluate(e=>e.open));
      await page.setViewportSize({width:390,height:844});await page.goto(base+'/');
      await page.locator('.mobile-nav summary').click();assert(await page.locator('.mobile-nav').evaluate(e=>e.open));
      await page.keyboard.press('Escape');assert(!(await page.locator('.mobile-nav').evaluate(e=>e.open)));
      assert.equal(await page.evaluate(()=>getComputedStyle(document.body).backgroundColor),'rgb(255, 255, 255)','Agency background should be white');
      assert(await page.locator('.mobile-action-bar').isVisible());
      assert.match(await page.locator('.hero-offer').textContent(),/249/);
      assert.equal(await page.locator('.plain-service-list a').count(),5);
      // All five example sites have ten reachable pages, complete menus, and usable image galleries.
      for(const slug of ['olive-and-ember','current-electric','form-studio','clearflow-plumbing','ridgeline-roofing']) {
        assert.equal(pages.filter(p=>p.path.startsWith(`/demos/${slug}/`)).length,10);
        await page.goto(base+`/demos/${slug}/gallery/`);
        const first=page.locator('[data-gallery-image]').first();await first.click();
        assert(await page.locator('.gallery-dialog').evaluate(e=>e.open));
        assert.match(await page.locator('[data-gallery-position]').textContent(),/^1 of/);
        await page.keyboard.press('ArrowRight');assert.match(await page.locator('[data-gallery-position]').textContent(),/^2 of/);
        await page.getByRole('button',{name:'Previous image',exact:true}).click();assert.match(await page.locator('[data-gallery-position]').textContent(),/^1 of/);
        await page.keyboard.press('Escape');assert(!(await page.locator('.gallery-dialog').evaluate(e=>e.open)));
        assert(await first.evaluate(e=>e===document.activeElement),'Gallery should restore keyboard focus');
        await page.locator('.demo-mobile summary').click();assert.equal(await page.locator('.demo-mobile nav a').count(),10);
        await page.locator('.demo-mobile nav a').last().click();assert(page.url().endsWith('/questions/'));
        await page.setViewportSize({width:1440,height:1000});await page.locator('.example-more summary').click();assert.equal(await page.locator('.example-more nav a').count(),10);
        await page.keyboard.press('Escape');assert(!(await page.locator('.example-more').evaluate(e=>e.open)));
        await page.setViewportSize({width:390,height:844});
      }
      await page.goto(base+'/book/?interest=missed-calls');
      assert.match(await page.locator('[data-inquiry-context]').textContent(),/Missed-call text replies/);
      assert.equal(await page.locator('.simple-inquiry [required]').count(),4);
      assert(!(await page.locator('.optional-inquiry').evaluate(e=>e.open)));
      await page.locator('.optional-inquiry summary').click();assert(await page.locator('#message').isVisible());
      await page.locator('#name').fill('Sample Owner');await page.locator('#business').fill('Sample Business');await page.locator('#email').fill('owner@example.com');await page.locator('#need').selectOption({label:'A new website'});
      await page.locator('[type="submit"]').click();assert.match(await page.locator('#brief').inputValue(),/Interested in: Missed-call text replies/);
      assert.match(await page.locator('.form-feedback').textContent(),/nothing has been sent/i);
      // Context survives the journey from detailed example pages into their request forms.
      for(const [route,field,expected] of [['/demos/olive-and-ember/private-dining/','#demo-occasion','Private dining'],['/demos/current-electric/repairs/','#demo-service','Repairs & fault finding'],['/demos/form-studio/foundations/','#demo-class','Foundations'],['/demos/clearflow-plumbing/drains/','#demo-service','Drains & blockages'],['/demos/ridgeline-roofing/roof-replacement/','#demo-service','Roof replacement']]) {
        await page.goto(base+route);await page.locator('.example-detail-hero .demo-button').click();assert.equal(await page.locator(field).inputValue(),expected);
      }
      // Everyday examples and both new service guides: every choice, keyboard use, and handoff.
      for(const [url,choices] of [['/',['missed-call','inquiry','review']],['/services/',['missed-call','inquiry','review']],['/demos/clearflow-plumbing/',['leaks','drains','hot-water','installations']],['/demos/ridgeline-roofing/repair-or-replace/',['isolated','widespread','unsure']]]) {
        await page.goto(base+url);
        for(const choice of choices) {
          const button=page.locator(`[data-choice="${choice}"]`);await button.focus();await page.keyboard.press('Enter');
          assert.equal(await button.getAttribute('aria-pressed'),'true');
          assert.equal(await page.locator('[data-choice-panel]:visible').count(),1);
          assert(await page.locator(`[data-choice-panel="${choice}"]`).isVisible());
        }
      }
      for(const [url,choice,expected] of [['/demos/clearflow-plumbing/','hot-water','Water heaters'],['/demos/ridgeline-roofing/repair-or-replace/','widespread','Roof replacement']]) {
        await page.goto(base+url);await page.locator(`[data-choice="${choice}"]`).click();
        await page.locator(`[data-choice-panel="${choice}"] .demo-button`).click();
        assert.equal(await page.locator('#demo-service').inputValue(),expected);
        await page.locator('.demo-mobile summary').click();assert(await page.locator('.demo-mobile').evaluate(e=>e.open));
        await page.keyboard.press('Escape');assert(!(await page.locator('.demo-mobile').evaluate(e=>e.open)));
        await page.locator('[type="submit"]').click();assert(await page.locator('#demo-name').evaluate(e=>e.validity.valueMissing));
        await page.locator('#demo-name').fill('Sample Homeowner');await page.locator('#demo-project').fill('A sample request for this example website.');
        await page.locator('[type="submit"]').click();assert.match(await page.locator('.form-feedback').textContent(),/Nothing has been sent or booked/);
        assert.match(await page.locator('.form-feedback').textContent(),new RegExp(expected));
      }
      await page.goto(base+'/demos/form-studio/classes/');await page.getByRole('button',{name:'Monday',exact:true}).click();assert.equal(await page.locator('[data-class-day]:visible').count(),2);
      await page.getByRole('button',{name:'All days',exact:true}).click();assert.equal(await page.locator('[data-class-day]:visible').count(),8);
      await page.goto(base+'/examples/form-studio/');await page.getByRole('button',{name:'Mobile',exact:true}).click();assert(await page.locator('#mobile-preview').isVisible());assert(!(await page.locator('#desktop-preview').isVisible()));
      await page.getByRole('button',{name:'Desktop',exact:true}).click();assert(await page.locator('#desktop-preview').isVisible());
      await page.goto(base+'/demos/form-studio/find-your-class/?class=Foundations');assert.equal(await page.locator('#demo-class').inputValue(),'Foundations');
      await page.locator('#demo-name').fill('Sample Student');await page.locator('#demo-experience').selectOption('This would be my first class');await page.locator('[type="submit"]').click();assert.match(await page.locator('.form-feedback').textContent(),/Nothing has been sent or booked/);
      await page.goto(base+'/demos/current-electric/request-a-quote/?service=Lighting%20%26%20upgrades');assert.equal(await page.locator('#demo-service').inputValue(),'Lighting & upgrades');
      await page.locator('#demo-name').fill('Sample Homeowner');await page.locator('#demo-project').fill('Kitchen lighting');await page.locator('[type="submit"]').click();assert.match(await page.locator('.form-feedback').textContent(),/Nothing has been sent or booked/);
      await page.goto(base+'/contact/');
      assert((await page.locator('.inquiry-form').boundingBox()).y<(await page.locator('.contact-points').boundingBox()).y,'Mobile contact form should precede supporting copy');
      await page.locator('button[type="submit"]').click();assert.equal(await page.locator('#name').evaluate(e=>e.validity.valueMissing),true);
      await page.locator('#name').fill('Alex Example');await page.locator('#business').fill('Test Business');await page.locator('#email').fill('invalid');
      assert.equal(await page.locator('#email').evaluate(e=>e.validity.typeMismatch),true);
      await page.locator('#email').fill('alex@example.com');await page.locator('#need').selectOption({label:'A new website'});await page.locator('[type="submit"]').click();
      assert.match(await page.locator('.form-feedback').textContent(),/nothing has been sent/i);
      assert(await page.locator('.brief-output').isVisible());
      const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Save brief'}).click();const download=await downloadPromise;assert.equal(download.suggestedFilename(),'skipmanual-website-brief.txt');
      // Check all endpoint states without sending any network request.
      await page.evaluate(()=>{document.querySelector('[data-inquiry]').dataset.endpoint='/audit-inquiry';});
      await page.route('**/audit-inquiry',route=>route.fulfill({status:503,body:'unavailable'}));
      await page.locator('[type="submit"]').click();await page.waitForFunction(()=>document.querySelector('.form-feedback').textContent.includes('couldn’t confirm'));
      assert.equal(await page.locator('#name').inputValue(),'Alex Example');
      await page.unroute('**/audit-inquiry');await page.route('**/audit-inquiry',route=>route.fulfill({status:200,contentType:'application/json',body:'{"success":true}'}));
      await page.locator('[type="submit"]').click();await page.waitForFunction(()=>document.querySelector('.form-feedback').textContent.includes('has been sent'));
      assert.equal(await page.locator('#name').inputValue(),'');
      await page.goto(base+'/demos/olive-and-ember/book-a-table/');await page.locator('#demo-name').fill('Sample Guest');await page.locator('#demo-date').fill('2030-12-10');await page.locator('#demo-guests').selectOption('2 guests');await page.locator('#demo-time').selectOption('18:30');await page.locator('[type="submit"]').click();assert.match(await page.locator('.form-feedback').textContent(),/nothing has been sent or booked/i);
      const missing=await fetch(base+'/not-a-real-page/');assert.equal(missing.status,404);
      await page.emulateMedia({reducedMotion:'reduce'});await page.goto(base+'/');assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');
      const noJS=await browser.newContext({javaScriptEnabled:false});const noJSPage=await noJS.newPage();await noJSPage.goto(base+'/');assert.equal(await noJSPage.locator('h1').count(),1);assert.equal(await noJSPage.locator('.work-card').count(),5);
      assert.equal(await noJSPage.locator('[data-choice-panel]:visible').count(),3);
      await noJSPage.goto(base+'/demos/clearflow-plumbing/');assert.equal(await noJSPage.locator('[data-choice-panel]:visible').count(),4);
      await noJSPage.goto(base+'/demos/ridgeline-roofing/repair-or-replace/');assert.equal(await noJSPage.locator('[data-choice-panel]:visible').count(),3);
      for(const route of ['/demos/clearflow-plumbing/request-a-visit/','/demos/ridgeline-roofing/request-an-assessment/']) { await noJSPage.goto(base+route);assert(await noJSPage.locator('[type="submit"]').isDisabled()); }
      await noJSPage.goto(base+'/contact/');assert(await noJSPage.locator('[type="submit"]').isDisabled());
      await noJSPage.goto(base+'/book/');assert(await noJSPage.locator('[type="submit"]').isDisabled());
      await noJSPage.goto(base+'/demos/olive-and-ember/gallery/');assert(await noJSPage.locator('[data-gallery-image]').first().isVisible());assert.match(await noJSPage.locator('[data-gallery-image]').first().getAttribute('href'),/\.webp$/);
      await noJSPage.goto(base+'/demos/current-electric/request-a-quote/');assert(await noJSPage.locator('[type="submit"]').isDisabled());await noJS.close();
      for(const [label,url,width,height] of [['home-desktop','/',1440,1000],['home-mobile','/',390,844],['examples','/examples/',1440,1000],['restaurant','/demos/olive-and-ember/',1440,1000],['electrical','/demos/current-electric/',1440,1000],['studio','/demos/form-studio/',1440,1000],['contact','/contact/',1440,1000]]) {
        await page.setViewportSize({width,height});await page.goto(base+url,{waitUntil:'networkidle'});await page.screenshot({path:`${output}/${label}.png`,fullPage:true});
      }
      // Real PNG for social previews, generated from the brand asset.
      await page.setViewportSize({width:1200,height:630});await page.goto(base+'/images/social-card.svg');await page.screenshot({path:'public/images/social-card.png'});
      const actualErrors=errors.filter(e=>!e.includes('/audit-inquiry'));
      assert.equal(actualErrors.length,0,actualErrors.join('\n'));
      await fs.writeFile(`${output}/audit-results.json`,JSON.stringify({pages:pages.length,pageChecks:allChecks.length,internalLinks:links.size,checks:allChecks,interactions:'passed',errors:actualErrors},null,2));
      console.log(`Audit passed: ${allChecks.length} responsive page checks, ${links.size} unique links, navigation, forms, filtering, reduced motion, no-JavaScript rendering, and 404 behavior.`);
    } finally {await browser.close();}
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
    import { packageServices } from './package.mjs';
    
    export const site = {
      name: 'SkipManual',
      description: 'A professional 10–20 page website, automatic inquiry follow-up, missed-call text replies, review requests, and on-page SEO for local businesses. $249/month with SkipManual.',
      url: process.env.PUBLIC_SITE_URL || '',
      email: process.env.PUBLIC_CONTACT_EMAIL || '',
      contactEndpoint: process.env.PUBLIC_CONTACT_ENDPOINT || '',
      bookingUrl: process.env.PUBLIC_BOOKING_URL || '',
    };
    
    // Null means unconfirmed. Never render these as promises or package inclusions.
    export const offer = {
      price: 249,
      currency: 'USD',
      interval: 'month',
      confirmedFeatures: packageServices.map(service => service.short),
      details: {
        setupFee: null, minimumTerm: null, hosting: null, maintenance: null,
        support: null, turnaround: null, revisions: null, domain: null,
        ownership: null, cancellation: null, addOns: null, messagingUsage: null, messagingPlatform: null,
      },
    };
    
    export const navigation = [
      { href: '/services/', label: 'What’s included' },
      { href: '/examples/', label: 'Website examples' },
      { href: '/pricing/', label: 'Pricing' },
      { href: '/how-it-works/', label: 'How it works' },
    ];
    
    export const processSteps = [
      { title: 'Start with your business.', text: 'Tell us what you do, who you serve, and what you need your website to do.' },
      { title: 'Give it a clear direction.', text: 'We plan the pages, content, and design around the people you want to reach.' },
      { title: 'See it come together.', text: 'We design and build your website. You review the work before it goes live.' },
      { title: 'Make your next move.', text: 'We agree on the launch plan and what happens next, with the details clear up front.' },
    ];
    
    export const faqs = [
      { category: 'The service', q: 'Who is SkipManual for?', a: 'Local businesses that want a professional website and a clear way for customers to get in touch. That includes home services, restaurants, studios, shops, and local professional services.' },
      { category: 'Pricing', q: 'What does $249/month include?', a: 'The $249/month package includes a professional 10–20 page website, automatic inquiry follow-up, missed-call text replies, review requests and reminders, and on-page SEO foundations. We confirm the pages, message flows, usage allowances, any extra costs, and billing terms before you commit.' },
      { category: 'Getting started', q: 'Do I need to know anything about websites?', a: 'No. Start with what you know: your business, your customers, and the services you offer. We’ll guide the conversation about what your website needs.' },
      { category: 'The service', q: 'Will my website work on phones?', a: 'Yes. We design for phones, tablets, and computers, with readable content and easy-to-use navigation and contact options.' },
      { category: 'Getting started', q: 'How does the process work?', a: 'We start with your business, agree on a plan, design and build the website, and share it for your review. The scope and launch arrangements are agreed before work begins.' },
      { category: 'Getting started', q: 'How long does a website take?', a: 'Timing depends on the pages, content, and functionality you need. We’ll discuss a realistic timeline for your project before you commit.' },
      { category: 'The service', q: 'Can you redesign my existing website?', a: 'Yes. Share your current website and what you’d like to improve. We’ll look at what is working, what is getting in the way, and how a new design could help.' },
      { category: 'The service', q: 'Can you build for my industry?', a: 'We design for a range of local businesses. The examples show a few different approaches, rather than a fixed list of industries. Tell us what you do so we can discuss the right fit.' },
      { category: 'Your website', q: 'Can I use my own domain?', a: 'Tell us if you already own a domain. We’ll review your current setup and confirm the steps and responsibilities for connecting it before launch.' },
      { category: 'Your website', q: 'Can I request changes?', a: 'You’ll have a chance to review the website. The revision scope and arrangements for changes after launch will be confirmed in your project agreement.' },
      { category: 'Your website', q: 'What happens after launch?', a: 'We’ll confirm the arrangements for hosting, maintenance, support, and future updates as part of your package discussion. We don’t want you guessing about what happens next.' },
      { category: 'Your website', q: 'Do you handle the technical side?', a: 'We handle the design and build. Any ongoing technical management, hosting, or maintenance will be clearly specified in the scope we agree with you.' },
      { category: 'Pricing', q: 'Are there setup fees or a minimum commitment?', a: 'The confirmed base price is $249/month. Setup costs, minimum terms, cancellation, and ownership arrangements will be explained before you enter an agreement.' },
      { category: 'The service', q: 'Are the example websites real client projects?', a: 'No. They are original example concepts for fictional businesses, made to show our design approach. They are clearly labeled and are not presented as client work.' },
      { category: 'The service', q: 'What does a missed-call text reply do?', a: 'When you miss a call, a text acknowledges the caller and invites them to describe what they need. You can then pick up the conversation. We agree on the wording, eligible calls, and reply rules during setup.' },
      { category: 'The service', q: 'Will the follow-up handle every customer for me?', a: 'It helps acknowledge inquiries and send useful follow-ups. You still answer specific questions, confirm availability, quote the work, and serve the customer. The messages and handoff are planned with you.' },
      { category: 'The service', q: 'Do review requests guarantee five-star ratings?', a: 'No. The system invites customers to share honest feedback and can send reminders. Every rating is welcome; customers are not screened by satisfaction before receiving a review link.' },
      { category: 'The service', q: 'Does on-page SEO guarantee search rankings?', a: 'No. It covers page titles, descriptions, headings, useful service content, internal links, and structured information based on verified business details. Search position depends on many factors.' },
      { category: 'Pricing', q: 'Are texts and third-party platform costs included?', a: 'The package includes the follow-up services. We confirm the messaging platform, usage allowances, and any additional message or third-party charges before you agree. This is not a promise of unlimited messaging.' },
      { category: 'Getting started', q: 'Can I contact you before starting?', a: 'Absolutely. Tell us a little about your business on the Get Started page. You don’t need a finished brief, and sending an inquiry doesn’t commit you to a package.' },
    ];
    
    // Reserved for verified, consented client material. Empty until real work is available.
    export const testimonials = [];
    ✓ • 278ms

## Assistant

The saved session ended after the 72-page build passed its automated checks. The remaining step is a final visual review and any fixes it reveals. I’m using the UI styling skill for that review, focusing on phone layouts, the expanded examples, and the inquiry flow. Your earlier decision to connect booking and email later still applies.

## Activity

    $ Get-Content -Encoding utf8 src/pages/agency-redesign.mjs; Get-Content -Encoding utf8 src/styles/agency.css; Get-Content -Encoding utf8 src/styles/example-expansion.css
    import {site,offer,faqs} from '../data/site.mjs';
    import {examples} from '../data/examples.mjs';
    import {packageServices} from '../data/package.mjs';
    import {scenarioSection} from '../components/package.mjs';
    import {photo} from '../components/photos.mjs';
    import {icon,button,textLink,eyebrow,priceCard,faqList,preview,cta,escape,pageHero} from '../components/ui.mjs';
    
    export const serviceDetails = {
      website:{route:'business-websites',simple:'A website that explains your business.',image:'kitchen',heading:'Show people what you do.<br>Make the next step easy.',intro:'We plan, design, and build a 10–20 page website around your business, your services, and the people you want to reach.',sections:[['The pages your customers actually need.','A homepage gives people their bearings. Dedicated service pages explain the work. Photos show the details. Useful FAQs answer common questions, and clear contact options help visitors take the next step. We plan those pages together instead of asking you to decide everything on your own.'],['A design that fits your business.','A roofer, a restaurant, and a Pilates studio need different things from a website. The structure, photography, wording, and contact flow should reflect the customer’s reason for visiting. The five full examples show how that changes from one business to another.'],['Built for a phone, too.','Customers may be checking your business between other tasks. Readable text, fast-loading images, clear navigation, and easy-to-use forms help them find the information they need on a smaller screen.']],example:'A homeowner visits your plumbing website, opens the water-heater page, checks the information, and requests a visit without searching through unrelated services.',related:'clearflow-plumbing'},
      'follow-up':{route:'inquiry-follow-up',simple:'A reply while you’re busy working.',image:'electrician',heading:'A new inquiry deserves<br>a useful next step.',intro:'Automatic acknowledgments and follow-ups help you keep a new customer conversation moving when the day gets busy.',sections:[['Start by acknowledging the inquiry.','When someone contacts your business, a clear reply lets them know their message arrived. The wording can explain what happens next or ask a useful question, so the conversation has a starting point when you return to it.'],['Follow up with a purpose.','We plan messages around your service and your customer’s next decision. A follow-up could ask for missing project details or invite the customer to continue the conversation. Timing, stopping rules, and the handoff to you are agreed during setup.'],['Keep you in the conversation.','The system supports your response. You still answer specific questions, assess the job, quote the work, and confirm arrangements. We plan where that personal response is needed, so an automatic message does not pretend to make a decision for you.']],example:'Someone asks about a roof repair. They receive an acknowledgment asking where they noticed the leak. You pick up the conversation with useful context already there.',related:'ridgeline-roofing'},
      'missed-calls':{route:'missed-call-texts',simple:'Missed a call? Send a helpful text.',image:'work-tools',heading:'On a job when the phone rings?<br>Give the caller a way to reply.',intro:'A missed-call text acknowledges the caller and invites them to describe what they need, so you can return to a conversation.',sections:[['Make the first reply simple.','A useful message sounds like your business: “Thanks for calling. Sorry we missed you. What can we help with?” It gives the caller an easy way to explain the reason for their call without needing to try again immediately.'],['Set the rules around your workday.','We discuss which missed calls should trigger a reply, the wording, repeat-call handling, and how replies reach you. Those decisions keep the setup useful for your business rather than treating every call exactly the same.'],['Come back with some context.','A customer’s text can tell you which service they need or what problem they have noticed. You still confirm availability and handle the job, but you have a clearer starting point when you respond. Messaging platforms, allowances, and extra charges are confirmed before agreement.']],example:'You are fitting a kitchen tap when another customer calls. They receive a text and reply, “Our shower is not getting hot.” You know what to discuss when you call back.',related:'clearflow-plumbing'},
      reviews:{route:'review-requests',simple:'Make asking for a review routine.',image:'cafe',heading:'You’ve done the work.<br>Make feedback easy to leave.',intro:'A straightforward review request and helpful reminders make asking for customer feedback part of the process.',sections:[['Ask at a sensible moment.','The request should follow an agreed point in your customer journey, such as a completed job. We plan the invitation and where the review link should lead, so the customer knows what they are being asked to do.'],['Keep the invitation clear.','A short thank-you, an invitation to share their experience, and a direct review link are easier to understand than a long marketing message. The wording should sound like your business and welcome honest feedback.'],['Use reminders thoughtfully.','We agree on timing and stopping rules for reminders. Every customer should have the same opportunity to leave an honest review; the flow does not screen people by satisfaction or promise a particular rating.']],example:'After a completed job, a customer receives a thank-you message with a review link. If needed, a reminder follows using the schedule agreed with you.',related:'current-electric'},
      seo:{route:'on-page-seo',simple:'Help people understand your services.',image:'house-exterior',heading:'Clear pages for your customers.<br>Clear information for search.',intro:'On-page SEO gives your website a useful foundation: clear page titles, meaningful content, sensible links, and accurate business information.',sections:[['Give each service a clear home.','Someone looking for a roof repair should be able to find a page about roof repairs. We organize service content around the questions and next steps relevant to that work, with headings that make the page easy to scan.'],['Make the important details accurate.','Page titles and descriptions help explain each page. Business information and structured data use verified details, and the site connects related pages so visitors can move from a service to a question or contact option naturally.'],['Start with a sound foundation.','This covers the website itself. It does not promise a search position or include unconfirmed advertising, backlink campaigns, or ongoing SEO retainers. We discuss any work beyond the package separately so you understand what is included.']],example:'A roof-repair page explains leaks, assessment, and the inquiry process, then links to the repair-or-replace guide and an assessment request.',related:'ridgeline-roofing'},
    };
    
    export function directWorkCard(e) {return `<article class="work-card direct-work-card" id="${e.slug}"><a class="work-art ${e.theme}" href="/demos/${e.slug}/" aria-label="Open the ${escape(e.name)} example website">${preview(e)}</a><div class="work-card-top"><div><p class="work-category">${e.category} · ${e.pages.length} pages</p><h3>${escape(e.name)}</h3></div><a class="work-open" href="/demos/${e.slug}/" aria-label="Open ${escape(e.name)}">${icon('diagonal')}</a></div><p>${e.description}</p><div class="work-links"><a href="/demos/${e.slug}/">Explore the website ${icon('arrow')}</a><a href="/examples/${e.slug}/">About the design</a></div></article>`;}
    
    export function simpleProcess() {return `<section class="section container simple-process"><div class="section-head"><div>${eyebrow('You bring the business. We handle the website.')}<h2>Getting started<br>should feel simple.</h2></div>${textLink('See the whole process','/how-it-works/')}</div><div class="simple-steps">${[['Tell us what you do.','We discuss your business, customers, services, and the website you need. No technical brief required.'],['See it take shape.','We plan your pages, create the design, and share the work for your review.'],['Get ready to welcome customers.','We check the website and agree on the contact paths, follow-up setup, and launch details.']].map(([title,text],i)=>`<article><span>0${i+1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></section>`;}
    
    export function redesignedHome() {return `<section class="home-hero human-hero container"><div class="human-hero-copy">${eyebrow('Websites & customer follow-up for local businesses')}<h1>We build your website.<br><span>You get back<br>to business.</span></h1><p>A professional website that shows what you do, makes you easy to contact, and helps you follow up with customers.</p><div class="hero-offer"><strong>$249<span>/month</span></strong><p>10–20 pages. All five services.<br>One package for your business.</p></div><div class="actions">${button('Let’s talk about your website','/book/')}${textLink('See website examples','/examples/')}</div><p class="hero-reassurance">${icon('check')}No technical knowledge needed. We’ll guide you.</p></div><div class="business-mosaic"><a class="mosaic-main" href="/demos/current-electric/">${photo('electrician',{eager:true})}<span>For the people<br>who get things done.${icon('diagonal')}</span></a><a class="mosaic-food" href="/demos/olive-and-ember/">${photo('gathering')}<span>Restaurants & cafés${icon('diagonal')}</span></a><a class="mosaic-studio" href="/demos/form-studio/">${photo('pilates')}<span>Studios & local services${icon('diagonal')}</span></a></div></section>
    <section class="industry-access container" aria-label="Find a website for your business"><p>Find an example<br><strong>for your kind of business.</strong></p>${examples.map(e=>`<a href="/demos/${e.slug}/">${e.category}${icon('arrow')}</a>`).join('')}</section>
    <section class="section container plain-offer"><div>${eyebrow('What do you actually get?')}<h2>A better website.<br>And help with<br>what happens next.</h2><p class="lead">People find you. They get in touch. Life gets busy. We bring the website and the follow-up together so the next step is clearer.</p>${textLink('Everything in the $249 package','/services/')}</div><div class="plain-service-list">${packageServices.map((s,i)=>`<a href="/services/${serviceDetails[s.id].route}/"><span>0${i+1}</span><div><h3>${serviceDetails[s.id].simple}</h3><p>${s.short}</p></div>${icon('arrow')}</a>`).join('')}</div></section>
    <section class="section work-section"><div class="container"><div class="section-head"><div>${eyebrow('See what your website could be')}<h2>Real pages to explore.<br>Ideas for your business.</h2></div><p>Open the websites. Browse the services, photos, and forms. Each is an original example for a fictional business.</p></div><div class="work-grid">${examples.map(directWorkCard).join('')}</div></div></section>
    ${scenarioSection()}${simpleProcess()}<section class="section container agency-price-section"><div class="price-grid"><div>${eyebrow('One clear starting point')}<h2>Your website.<br>Your follow-up.<br><span class="accent">$249 a month.</span></h2><p class="lead">A 10–20 page website, inquiry follow-up, missed-call text replies, review requests, and on-page SEO.</p><p>We explain the scope, any extra costs, and full terms before you decide.</p>${textLink('Read the pricing details','/pricing/')}</div>${priceCard()}</div></section><section class="section container border-top"><div class="faq-layout"><div>${eyebrow('Before you get started')}<h2>A few things you<br>might be wondering.</h2>${textLink('All common questions','/faq/')}</div>${faqList([faqs[1],faqs[2],faqs[5],faqs[13]])}</div></section>${cta('Tell us about your business.<br>We’ll talk through the rest.')}`;}
    
    export function redesignedServices(){return `${pageHero('All included. $249/month.','Your website.<br>And the follow-through.','Five practical services that help people understand your business, get in touch, and keep the conversation going.')}<nav class="container service-jump" aria-label="Jump to a service">${packageServices.map(s=>`<a href="#${s.id}">${s.name}${icon('arrow')}</a>`).join('')}</nav><section class="container service-stories">${packageServices.map((s,i)=>{const d=serviceDetails[s.id];return `<article id="${s.id}"><div class="service-story-photo">${photo(d.image)}</div><div><p class="eyebrow">0${i+1} / ${s.name}</p><h2>${d.simple}</h2><p>${s.description}</p><ul>${s.points.map(point=>`<li>${point}</li>`).join('')}</ul><div class="service-example"><strong>In everyday terms</strong><p>${s.example}</p></div>${textLink('See how it works',`/services/${d.route}/`)}</div></article>`;}).join('')}</section>${scenarioSection()}${cta('A little less on your plate.<br>A clear next step for your customers.')}`;}
    
    function serviceDetail(s){const d=serviceDetails[s.id];const e=examples.find(e=>e.slug===d.related);return `<nav class="container agency-breadcrumb" aria-label="Breadcrumb"><a href="/services/">What’s included</a><span>/</span><span>${s.name}</span></nav><section class="container service-detail-hero"><div>${eyebrow('Included in the $249/month package')}<h1>${d.heading}</h1><p class="lead">${d.intro}</p>${button('Talk about your business',`/book/?interest=${s.id}`)}</div>${photo(d.image,{eager:true})}</section><section class="section container service-detail-content"><div>${d.sections.map(([title,text])=>`<article><h2>${title}</h2><p>${text}</p></article>`).join('')}</div><aside><h2>What’s included</h2><ul>${s.points.map(point=>`<li>${point}</li>`).join('')}</ul><div class="service-example"><strong>For example</strong><p>${d.example}</p></div><p class="small">Part of the $249/month package. Full scope and terms agreed before you commit.</p>${button('Get started','/book/')}</aside></section><section class="section container related-example"><div>${eyebrow('See a complete business website')}<h2>${e.name}</h2><p>${e.description}</p>${button('Open the website',`/demos/${e.slug}/`,'outline')}</div><a href="/demos/${e.slug}/" aria-label="Explore ${escape(e.name)}">${preview(e)}</a></section><section class="section container border-top"><h2>The rest of your package.</h2><div class="other-services">${packageServices.filter(other=>other.id!==s.id).map(other=>`<a href="/services/${serviceDetails[other.id].route}/">${other.name}${icon('arrow')}</a>`).join('')}</div></section>${cta()}`;}
    
    export function howItWorks(){return `${pageHero('How it works','A website project.<br>Without the guesswork.','You know your business. We guide the website decisions, explain the steps, and show you the work before launch.')}<section class="container how-photo">${photo('cafe',{eager:true,sizes:'100vw'})}<div><h2>You don’t need<br>to have it all figured out.</h2><p>A few details about your business are enough to start the conversation.</p></div></section><section class="section container full-process">${[['A conversation about your business.','Tell us what you do, who you serve, and how customers usually get in touch. Share an existing website if you have one, or an example you like. We discuss fit, the package, and the details you need before deciding.','Bring: your business name, main services, and the result you want from the website.'],['A plan for your pages and content.','We map the 10–20 pages around your services and customer questions. We discuss photos, wording, contact options, and what verified business information needs to be included.','We agree: pages, functionality, content responsibilities, and the project scope.'],['A design you can review.','We build a visual direction around your business and share the work for review. You can see how the pages connect, how they read on a phone, and how a visitor gets in touch.','You review: the design, service information, photographs, and inquiry path.'],['Follow-up that fits the way you work.','We plan inquiry replies, missed-call texts, review invitations, and the handoff to you. Message wording, timing, platform arrangements, usage, and responsibilities are made clear.','We confirm: how the messages work and when you take over the conversation.'],['Checks, launch, and a clear handover.','We check the pages, forms, navigation, mobile layout, and basic search information. The final domain, contact destinations, publishing arrangements, and ongoing responsibilities are confirmed before launch.','You receive: a website you have reviewed and clarity about what happens next.']].map(([heading,text,note],i)=>`<article><span>0${i+1}</span><div><h2>${heading}</h2><p>${text}</p><p class="process-note">${note}</p></div></article>`).join('')}</section>${cta('Start with what you know.<br>We’ll help with the website part.')}`;}
    
    export function inquiryForm({booking=false}={}){
      const connected=Boolean(site.contactEndpoint||site.email);
      return `<form class="inquiry-form simple-inquiry" data-inquiry data-endpoint="${escape(site.contactEndpoint)}" data-email="${escape(site.email)}"><h2>${booking?'Tell us a little first.':'Tell us about your business.'}</h2><p class="form-intro">The essentials are enough to start. * Required.</p>${!connected?'<div class="form-availability"><strong>Online inquiries are not connected yet.</strong><p>You can prepare and save your request here. Nothing will be sent or booked.</p></div>':''}<div class="form-grid"><div class="field"><label for="name">Your name *</label><input id="name" name="name" autocomplete="name" maxlength="100" required></div><div class="field"><label for="business">Business name *</label><input id="business" name="business" autocomplete="organization" maxlength="160" required></div><div class="field full"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" maxlength="254" required></div><div class="field full"><label for="need">How can we help? *</label><select id="need" name="need" required><option value="">Choose what fits best</option><option>A new website</option><option>A redesign of my website</option><option>Website and customer follow-up</option><option>I’m exploring my options</option></select></div></div><details class="optional-inquiry"><summary>Add a few details <span>(optional)</span></summary><div class="form-grid"><div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div><div class="field"><label for="business-type">Business type</label><select id="business-type" name="businessType"><option value="">Choose a type</option><option>Plumbing</option><option>Roofing</option><option>Electrical</option><option>Restaurant or café</option><option>Health or wellness</option><option>Shop, salon, or studio</option><option>Other local business</option></select></div><div class="field full"><label for="website">Current website</label><input id="website" name="website" type="text" inputmode="url" autocomplete="url" maxlength="500" placeholder="yourbusiness.com"></div><div class="field full"><label for="message">What would you like help with?</label><textarea id="message" name="message" maxlength="4000" placeholder="Your main services, a website you like, or a question about the package."></textarea></div></div></details><p class="inquiry-context" data-inquiry-context hidden></p><input type="hidden" name="interest" value=""><p class="form-note">${connected?'Your details are used to respond to your inquiry.':'Your request stays in this browser unless you copy or download it.'} <a href="/privacy/">Privacy information</a>.</p><button class="button form-submit" type="submit" data-js-submit disabled>${site.contactEndpoint?'Send your inquiry':site.email?'Prepare your email':'Prepare my request'}${icon('arrow')}</button><noscript><p>Enable JavaScript to prepare your request.${site.email?` Or email ${escape(site.email)}.`:''}</p></noscript><p class="form-feedback" role="status" aria-live="polite" tabindex="-1"></p><div class="brief-output" hidden><label for="brief">Your request</label><textarea id="brief" readonly></textarea><div class="actions"><button class="button button--outline" type="button" data-copy>Copy brief</button><button class="button button--outline" type="button" data-download>Save brief</button></div></div></form>`;
    }
    
    export function redesignedContact(){return `<section class="container page-hero"><div class="contact-grid"><div class="contact-copy"><div class="contact-intro">${eyebrow('Let’s make this easy')}<h1>A better website<br>starts with<br>your business.</h1><p class="lead">Tell us what you need. We’ll talk through the website, the follow-up, and the $249/month package.</p></div><div class="contact-points"><div><h2>Just getting started?</h2><p>You don’t need a technical brief or a finished plan. Your main services and a few questions are enough.</p></div><div><h2>Prefer a conversation?</h2><p>See what we’ll cover when discussing your website.</p>${textLink('Plan a call','/book/')}</div><div><h2>Already found an example you like?</h2><p>Mention it in the optional details. It is a useful starting point for your design.</p></div></div></div>${inquiryForm()}</div></section>`;}
    
    export function bookingPage(){return `<section class="container page-hero booking-hero">${eyebrow('Let’s talk about your business')}<h1>Your website questions.<br>A straightforward conversation.</h1><p class="lead">Tell us what you do and what you need. We’ll explain how the $249/month package could fit your business.</p></section><section class="container booking-layout"><div class="booking-agenda">${photo('living-room',{eager:true})}<h2>Here’s what we’ll cover.</h2><ol><li><strong>Your business</strong><span>What you offer, who you serve, and how customers find you today.</span></li><li><strong>Your website</strong><span>The pages, photos, and contact options that would make it useful.</span></li><li><strong>Your next step</strong><span>Package details, questions, and whether it makes sense to move forward.</span></li></ol><p class="small">No finished brief needed. There is no commitment to a package just by asking about it.</p></div><div class="booking-action">${site.bookingUrl?`<div class="booking-connected"><h2>Choose a time that suits you.</h2><p>Open our booking calendar to see current availability and confirm your appointment.</p>${button('Open the booking calendar',site.bookingUrl)}<p class="small">The booking provider will show the available times and send your confirmation.</p></div><p class="booking-alternative">Prefer to start with a message?</p>`:''}${inquiryForm({booking:true})}</div></section><section class="section container"><div class="faq-layout"><h2>Before we talk.</h2>${faqList([faqs[1],faqs[2],faqs[12]])}</div></section>`;}
    
    export const additionalAgencyPages=[
      {path:'/how-it-works/',title:'How Your Website Project Works | SkipManual',description:'From a first conversation to page planning, design, customer follow-up, and launch. See the steps in a SkipManual website project.',render:howItWorks},
      {path:'/book/',title:'Talk About Your Business Website | SkipManual',description:'Plan a conversation about your business website and SkipManual’s $249/month package. See what we will cover and prepare your inquiry.',render:bookingPage},
      ...packageServices.map(s=>({path:`/services/${serviceDetails[s.id].route}/`,title:`${s.name} for Local Businesses | SkipManual`,description:serviceDetails[s.id].intro+' Included in SkipManual’s $249/month package.',render:()=>serviceDetail(s)})),
    ];
    /* White, direct, and grounded in the businesses this service is for. */
    body:not(.demo-body) { background:#fff; color:#202727; --color-foreground:#202727; --color-muted:#586365; --color-link:#b93c1a; --button-bg:#c43e1b; --button-color:#fff; --heading-lg:clamp(2.2rem,3.65vw,3.6rem); }
    body:not(.demo-body) h1,body:not(.demo-body) h2 { letter-spacing:-.045em; }
    body:not(.demo-body) h3 { letter-spacing:-.025em; }
    .site-utility { background:#fff; border-bottom:1px solid #e4e7eb; font-size:.73rem; }
    .site-utility > div { display:flex; justify-content:space-between; gap:1rem; align-items:center; min-height:37px; }
    .site-utility a { display:flex; align-items:center; gap:.8rem; }
    .site-utility svg { width:15px; height:15px; }
    .site-header { background:#fff; position:sticky; top:0; z-index:45; height:89px; border-bottom:1px solid #e4e7eb; }
    .header-inner { height:100%; }.brand { font-weight:750; }.brand-mark { color:#df4a24; }
    .desktop-nav { gap:1.7rem; font-size:.84rem; }.desktop-nav .button { padding:.85rem 1.1rem; }
    .button { border-radius:5px; font-size:.88rem; min-height:50px; font-weight:650; }
    .button--outline { color:#202727; background:#fff; border:1px solid #bac2c3; }
    .button:hover { box-shadow:0 4px 14px #3a22101a; }
    .eyebrow { color:#5c6566; font-size:.68rem; letter-spacing:.11em; }
    .accent { color:#bd3e1d; }
    .human-hero { display:grid; grid-template-columns:1.04fr 1fr; align-items:center; gap:4rem; padding-block:4.2rem 4rem; }
    .human-hero-copy h1 { font-size:clamp(3.1rem,4.6vw,4.5rem); line-height:1.06; font-weight:650; }
    .human-hero-copy h1 > span { color:#c14220; }
    .human-hero-copy > p:not(.eyebrow):not(.hero-reassurance) { font-size:1.12rem; line-height:1.75; margin-top:1.65rem; max-width:480px; }
    .human-hero-copy .eyebrow { font-size:.63rem; letter-spacing:.09em; margin-bottom:1.5rem; }
    .hero-offer { display:flex; align-items:center; gap:1.3rem; margin-top:1.75rem; }
    .hero-offer > strong { display:block; font-size:2.7rem; letter-spacing:-.055em; line-height:1.1; white-space:nowrap; font-weight:650; }
    .hero-offer > strong > span { font-size:.9rem; letter-spacing:0; font-weight:450; margin-left:.15rem; }
    .hero-offer p { font-size:.76rem; line-height:1.6; padding-left:1.3rem; border-left:1px solid #d9dfe0; }
    .human-hero .actions { margin-top:1.75rem; gap:1.1rem; }.human-hero .actions .text-link { font-size:.82rem; }
    .hero-reassurance { display:flex; gap:.5rem; align-items:center; margin-top:1.15rem; font-size:.73rem; }.hero-reassurance svg { width:16px; height:16px; color:#b93c1a; }
    .business-mosaic { height:565px; display:grid; grid-template-columns:1.08fr 1fr; grid-template-rows:1fr 1fr; gap:13px; position:relative; }
    .business-mosaic > a { position:relative; display:block; overflow:hidden; border-radius:8px; }
    .business-mosaic img { width:100%; height:100%; object-fit:cover; transition:transform .5s; }.business-mosaic a:hover img { transform:scale(1.03); }
    .mosaic-main { grid-row:1/3; }.mosaic-main img { object-position:36% center; }
    .business-mosaic > a > span { position:absolute; bottom:0; inset-inline:0; padding:3rem 1.2rem 1.25rem; background:linear-gradient(transparent,#10201ecd); color:#fff; font-size:.78rem; line-height:1.5; }
    .business-mosaic .mosaic-main > span { font-size:1.3rem; line-height:1.35; font-weight:550; }
    .business-mosaic > a > span > svg { width:16px; height:16px; float:right; margin-top:.3rem; }
    .mosaic-stamp { position:absolute; left:39%; top:43%; z-index:2; background:#fff; color:#303535; font-size:.7rem; padding:1rem 1.2rem; box-shadow:0 6px 24px #16232320; border-radius:4px; transform:rotate(-5deg); line-height:1.6; pointer-events:none; }
    .mosaic-stamp strong { font-size:.89rem; font-weight:600; }
    .industry-access { display:flex; align-items:center; gap:1rem; justify-content:space-between; border-block:1px solid #e4e7eb; padding-block:1.4rem; }
    .industry-access > p { font-size:.73rem; line-height:1.5; padding-right:1rem; }.industry-access strong { color:#303838; font-weight:550; }
    .industry-access > a { display:flex; gap:.8rem; align-items:center; font-size:.81rem; font-weight:550; min-height:44px; }.industry-access > a:hover { color:#b93c1a; }.industry-access svg { width:16px; height:16px; }
    .plain-offer { display:grid; grid-template-columns:1fr 1fr; gap:6rem; align-items:center; }
    .plain-offer .lead { font-size:1.06rem; max-width:430px; margin-top:1.5rem; }.plain-offer .text-link { margin-top:1.5rem; }
    .plain-service-list a { display:flex; align-items:center; gap:1.1rem; padding:1.45rem 0; border-bottom:1px solid #e4e7eb; }.plain-service-list a:first-child { border-top:1px solid #e4e7eb; }
    .plain-service-list a > span { color:#b93c1a; font-size:.69rem; align-self:flex-start; margin-top:.3rem; }.plain-service-list h3 { font-size:1.12rem; line-height:1.35; }.plain-service-list p { font-size:.82rem; margin-top:.45rem; }.plain-service-list svg { width:18px; height:18px; margin-left:auto; flex-shrink:0; }.plain-service-list a:hover h3 { color:#b93c1a; }
    .work-section { background:#fff; border-top:1px solid #e4e7eb; border-bottom:1px solid #e4e7eb; }
    .work-section .work-grid,.examples-expanded .work-grid { grid-template-columns:repeat(6,minmax(0,1fr)); gap:3.5rem 1.5rem; }
    .work-section .work-card,.examples-expanded .work-card { grid-column:span 2; }
    .work-section .work-card:nth-child(n+4),.examples-expanded .work-card:nth-child(n+4) { grid-column:span 3; }
    .direct-work-card .work-art { border:1px solid #e4e7eb; padding:1.2rem; border-radius:7px; background:#f5f7f8; box-shadow:none; }
    .direct-work-card .work-art.olive { background:#f3f5ed; }.direct-work-card .work-art.form { background:#f5f2f8; }.direct-work-card .work-art.clearflow { background:#f0f8fc; }.direct-work-card .work-art.ridgeline { background:#faf5ed; }
    .direct-work-card .work-card-top { align-items:center; margin-top:1.1rem; }.direct-work-card .work-category { font-size:.73rem; margin-bottom:.35rem; }
    .direct-work-card h3 { font-size:1.2rem; }.direct-work-card > p { font-size:.86rem; margin-top:.75rem; line-height:1.7; }
    .work-open { width:43px; height:43px; display:grid; place-items:center; border:1px solid #dce1e2; border-radius:50%; flex-shrink:0; }.work-open:hover { color:#c14220; border-color:currentColor; }.work-open svg { width:19px; height:19px; }
    .work-links { display:flex; gap:1rem; justify-content:space-between; align-items:center; margin-top:1rem; flex-wrap:wrap; }.work-links a { display:inline-flex; align-items:center; gap:.5rem; min-height:36px; font-size:.75rem; text-decoration:underline; text-underline-offset:5px; }.work-links a:first-child { font-weight:600; }.work-links svg { width:15px; height:15px; }
    .scenario-section { background:#fff; border-bottom:1px solid #e4e7eb; }.scenario-choices button { border-color:#dbe0e1; }.scenario-choices button[aria-pressed='true'] { background:#c14220; border-color:#c14220; }
    .scenario-section .conversation { background:#fff; border-color:#dfe4e4; box-shadow:0 8px 35px #303b3b0a; }.conversation-avatar { background:#f4f6f6; }.message { background:#edf5f3; }.message--customer { background:#fff0e8; }.message--system { background:#fff; }.scenario-outcome { border-color:#dfe4e4; }
    .simple-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:3rem; }.simple-steps article { border-top:1px solid #dbe0e1; padding-top:1.5rem; }.simple-steps article > span { color:#b93c1a; font-size:.8rem; }.simple-steps h3 { font-size:1.35rem; margin:1.5rem 0 1rem; }.simple-steps p { font-size:.95rem; }
    .agency-price-section { border-top:1px solid #e4e7eb; }.price-card { background:#fff; border:1px solid #dce1e2; border-top:3px solid #d54722; box-shadow:0 12px 35px #273c3e07; }.price-card li { padding-block:.2rem; }.price-card .small { line-height:1.6; }
    .price-grid .text-link { margin-top:1.5rem; }.cta-section { background:#fff5ef; border-block:1px solid #f2dfd3; }.cta-inner h2 { font-size:clamp(2.1rem,3.4vw,3.3rem); }
    .site-footer { background:#fff; border:0; padding-bottom:2rem; }.footer-grid { border-bottom:1px solid #e4e7eb; }.footer-col a { font-size:.85rem; }.footer-bottom { border:0; }
    .surface,.process-section,.about-statement { background:#fff; color:#202727; border-block:1px solid #e4e7eb; }.process-section p { color:#586365; }.about-mark { background:#fff5ef; }.about-mark svg { color:#d54722; }.process-section .process-number { border-color:#dbe0e1; }
    .industry-filter,.service-jump { display:flex; flex-wrap:wrap; gap:.8rem; }.industry-filter a,.service-jump a { display:flex; align-items:center; gap:1rem; padding:.9rem 1.2rem; border:1px solid #dbe0e1; border-radius:4px; font-size:.83rem; min-height:46px; }.industry-filter a:hover,.service-jump a:hover { border-color:#c14220; color:#c14220; }.industry-filter svg,.service-jump svg { width:16px; height:16px; }
    .collection-disclosure { font-size:.85rem; margin-bottom:2rem; }.service-stories > article { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; padding-block:4.5rem; border-bottom:1px solid #e4e7eb; scroll-margin-top:6rem; }.service-stories > article:nth-child(even) .service-story-photo { order:1; }.service-story-photo img { width:100%; height:480px; object-fit:cover; border-radius:6px; }.service-stories h2 { font-size:clamp(2rem,3vw,3rem); margin-bottom:1.4rem; }.service-stories ul { font-size:.92rem; color:#586365; }.service-stories .text-link { margin-top:1.4rem; }
    .service-example { background:#fff7f2; }.agency-breadcrumb { display:flex; flex-wrap:wrap; gap:.7rem; font-size:.78rem; padding-top:2rem; color:#586365; }.agency-breadcrumb a { text-decoration:underline; text-underline-offset:4px; }
    .service-detail-hero { display:grid; grid-template-columns:1.15fr 1fr; gap:4rem; padding-block:3rem 4rem; align-items:center; }.service-detail-hero h1 { font-size:clamp(2.7rem,4.4vw,4.2rem); }.service-detail-hero .lead { margin:1.5rem 0; }.service-detail-hero > img { height:480px; width:100%; object-fit:cover; border-radius:6px; }
    .service-detail-content { display:grid; grid-template-columns:1.5fr 1fr; gap:6rem; border-top:1px solid #e4e7eb; }.service-detail-content article + article { margin-top:3rem; }.service-detail-content article h2 { font-size:1.9rem; margin-bottom:1rem; }.service-detail-content article p { font-size:1.02rem; line-height:1.85; }.service-detail-content aside { align-self:start; border:1px solid #e4e7eb; padding:2rem; border-radius:6px; }.service-detail-content aside h2 { font-size:1.3rem; }.service-detail-content aside li { color:#586365; font-size:.9rem; }.service-detail-content aside .small { margin-block:1.4rem; }
    .related-example { display:grid; grid-template-columns:.8fr 1fr; gap:6rem; align-items:center; border-top:1px solid #e4e7eb; }.related-example p:not(.eyebrow) { margin-block:1.5rem; }.related-example > a { padding:1.5rem; background:#f5f7f8; border:1px solid #e4e7eb; border-radius:6px; }.other-services { display:grid; grid-template-columns:repeat(2,1fr); gap:1rem 3rem; margin-top:2rem; }.other-services a { display:flex; justify-content:space-between; align-items:center; gap:1rem; border-bottom:1px solid #e4e7eb; padding:1rem 0; font-size:.9rem; }.other-services svg { width:18px; height:18px; }
    .how-photo { position:relative; overflow:hidden; border-radius:7px; height:440px; }.how-photo > img { width:100%; height:100%; object-fit:cover; object-position:50% 35%; }.how-photo > div { position:absolute; bottom:0; inset-inline:0; padding:4rem 3rem 2.5rem; background:linear-gradient(transparent,#10201ed9); color:#fff; }.how-photo p { color:#fff; margin-top:1rem; }.how-photo h2 { font-size:2.6rem; }
    .full-process { max-width:1000px; }.full-process article { display:grid; grid-template-columns:85px 1fr; gap:2rem; padding-block:2.5rem; border-bottom:1px solid #e4e7eb; }.full-process article > span { font-size:2.2rem; color:#c14220; letter-spacing:-.04em; }.full-process h2 { font-size:2rem; margin-bottom:1.2rem; }.full-process p { line-height:1.85; }.process-note { border-left:2px solid #d54722; padding-left:1.1rem; font-size:.87rem; }
    .booking-hero { padding-bottom:3rem; }.booking-hero h1 { max-width:1040px; }.booking-layout { display:grid; grid-template-columns:.85fr 1.15fr; gap:5rem; padding-bottom:3rem; }.booking-agenda > img { width:100%; height:260px; object-fit:cover; border-radius:5px; margin-bottom:2rem; }.booking-agenda h2 { font-size:1.65rem; margin-bottom:1.5rem; }.booking-agenda ol { padding-left:1.5rem; }.booking-agenda li { padding:0 0 1.2rem .6rem; }.booking-agenda li::marker { color:#c14220; font-weight:600; }.booking-agenda strong,.booking-agenda li span { display:block; }.booking-agenda li span { font-size:.9rem; color:#586365; margin-top:.4rem; }.booking-connected { padding:2rem; border:1px solid #f0c9b8; border-radius:6px; background:#fff7f2; }.booking-connected h2 { font-size:1.6rem; margin-bottom:1rem; }.booking-connected .button { margin-block:1.5rem 1rem; }.booking-alternative { margin:2rem 0 1rem; font-weight:600; }
    .simple-inquiry { background:#fff; border:1px solid #dce1e2; padding:2rem; box-shadow:0 10px 35px #23393b06; }.simple-inquiry h2 { font-size:1.65rem; margin-bottom:.8rem; }.simple-inquiry .form-intro { font-size:.85rem; }.simple-inquiry .field label { font-size:.87rem; }.simple-inquiry .field input,.simple-inquiry .field select,.simple-inquiry .field textarea { font-size:1rem; min-height:50px; border-color:#bfc8ca; }.simple-inquiry .form-submit { width:100%; }.form-availability { border-color:#d54722; background:#fff7f2; }.form-availability p { font-size:.8rem; }.optional-inquiry { margin-top:1.3rem; border-block:1px solid #e4e7eb; }.optional-inquiry summary { padding:1rem 0; cursor:pointer; font-size:.85rem; font-weight:600; min-height:48px; }.optional-inquiry summary span { font-weight:400; color:#586365; }.optional-inquiry .form-grid { padding-bottom:1.3rem; }.inquiry-context { background:#f5f8f7; padding:.8rem; font-size:.82rem; margin-top:1rem; }.inquiry-context[hidden] { display:none; }.simple-inquiry .brief-output label { font-size:.86rem; }.simple-inquiry .brief-output textarea { margin-top:.5rem; }
    .mobile-action-bar { display:none; }
    .about-photo img { width:100%; height:500px; object-fit:cover; border-radius:6px; }
    @media(max-width:760px) { .about-photo img { height:300px; } }
    @media(max-width:1150px) { .desktop-nav { gap:1rem; font-size:.77rem; }.human-hero { gap:2.3rem; }.business-mosaic { height:510px; }.human-hero-copy h1 { font-size:3.4rem; }.plain-offer,.service-stories > article { gap:3rem; }.booking-layout { gap:3rem; }.service-detail-content { gap:3rem; } }
    @media(max-width:900px) { .desktop-nav { gap:.85rem; }.desktop-nav .button { font-size:.74rem; padding-inline:.85rem; }.header-inner .brand { font-size:1.25rem; }.human-hero { gap:2rem; }.human-hero-copy h1 { font-size:3rem; }.hero-offer { flex-wrap:wrap; gap:.8rem; }.business-mosaic { height:500px; }.business-mosaic .mosaic-main > span { font-size:1rem; }.mosaic-stamp { display:none; }.industry-access { flex-wrap:wrap; gap:.8rem 1.5rem; justify-content:flex-start; }.industry-access > p { width:100%; }.simple-steps { gap:1.5rem; }.work-section .work-grid,.examples-expanded .work-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }.work-section .work-card,.work-section .work-card:nth-child(n+4),.examples-expanded .work-card,.examples-expanded .work-card:nth-child(n+4) { grid-column:auto; }.work-section .work-card:last-child,.examples-expanded .work-card:last-child { grid-column:1/-1; max-width:600px; }.service-detail-hero { gap:2rem; }.service-detail-hero h1 { font-size:3rem; } }
    @media(max-width:760px) {
      body:not(.demo-body) { padding-bottom:72px; }.site-utility { font-size:.65rem; }.site-utility > div { min-height:34px; justify-content:center; }.site-utility > div > span { display:none; }.site-header { height:72px; }.header-inner .brand { font-size:1.4rem; }.mobile-nav nav { top:71px; background:#fff; max-height:calc(100dvh - 145px); overflow:auto; }.mobile-nav nav .button { display:flex; }
      .human-hero { grid-template-columns:1fr; padding-block:2.5rem 2rem; gap:2rem; }.human-hero-copy h1 { font-size:clamp(2.85rem,9vw,4rem); line-height:1.07; }.human-hero-copy .eyebrow { max-width:310px; font-size:.62rem; line-height:1.65; margin-bottom:1.2rem; }.human-hero-copy > p:not(.eyebrow):not(.hero-reassurance) { font-size:1rem; line-height:1.75; margin-top:1.2rem; }.hero-offer { margin-top:1.4rem; }.hero-offer > strong { font-size:2.35rem; }.hero-offer p { font-size:.71rem; }.human-hero .actions { align-items:flex-start; flex-direction:column; gap:.8rem; margin-top:1.4rem; }.human-hero .actions .button { width:100%; }.hero-reassurance { font-size:.68rem; }
      .business-mosaic { height:360px; gap:9px; }.business-mosaic .mosaic-main > span { font-size:1rem; }.business-mosaic > a > span { padding:2rem .8rem .9rem; font-size:.68rem; }.business-mosaic > a > span > svg { width:13px; height:13px; }.industry-access { padding-block:1rem; gap:.4rem 1rem; }.industry-access > p { margin-bottom:.4rem; }.industry-access > a { font-size:.76rem; flex:1 0 40%; border-bottom:1px solid #edf0f0; justify-content:space-between; }
      .plain-offer,.service-detail-hero,.service-detail-content,.related-example,.booking-layout { grid-template-columns:1fr; gap:2.5rem; }.plain-offer h2 br { display:none; }.plain-offer .lead { max-width:none; }.plain-service-list h3 { font-size:1.05rem; }.plain-service-list a { padding-block:1.2rem; }
      .work-section .work-grid,.examples-expanded .work-grid { grid-template-columns:1fr; gap:2.5rem; }.work-section .work-card:last-child,.examples-expanded .work-card:last-child { max-width:none; }.direct-work-card .work-art { padding:1rem; }.work-links { gap:.75rem; }.direct-work-card > p { font-size:.9rem; }
      .simple-steps { grid-template-columns:1fr; gap:1.7rem; }.simple-steps h3 { margin-top:.9rem; }.simple-process .section-head { margin-bottom:2rem; }.simple-process .section-head .text-link { margin-top:1.2rem; }.scenario-section .section-head h2 { font-size:2.25rem; }.scenario-panel { margin-bottom:0; }
      .service-stories > article { grid-template-columns:1fr; gap:2rem; padding-block:3rem; }.service-stories > article:nth-child(even) .service-story-photo { order:0; }.service-story-photo img { height:270px; }.service-jump,.industry-filter { gap:.5rem; }.service-jump a,.industry-filter a { font-size:.75rem; padding:.65rem .8rem; }.service-detail-hero h1 { font-size:clamp(2.5rem,8vw,3.3rem); }.service-detail-hero > img { height:300px; }.service-detail-hero .button { width:100%; }.service-detail-content aside { padding:1.5rem; }.service-detail-content article h2 { font-size:1.65rem; }.service-detail-content article p { font-size:.97rem; }.other-services { grid-template-columns:1fr; gap:.4rem; }
      .how-photo { height:370px; }.how-photo > div { padding:3rem 1.4rem 1.5rem; }.how-photo h2 { font-size:2rem; }.how-photo p { font-size:.87rem; }.full-process article { grid-template-columns:35px 1fr; gap:1rem; padding-block:2rem; }.full-process article > span { font-size:1.4rem; }.full-process h2 { font-size:1.7rem; }.full-process p { font-size:.93rem; }.full-process .process-note { font-size:.84rem; }
      .booking-layout { display:flex; flex-direction:column; gap:2.5rem; }.booking-action { order:0; }.booking-agenda { order:1; }.booking-hero h1 { font-size:2.7rem; }.booking-agenda > img { height:240px; }.simple-inquiry { padding:1.3rem; }.simple-inquiry h2 { font-size:1.45rem; }.simple-inquiry .form-grid { grid-template-columns:1fr; }.simple-inquiry .optional-inquiry .form-grid { grid-template-columns:1fr; }
      .mobile-action-bar { position:fixed; z-index:44; inset:auto 0 0; display:grid; grid-template-columns:1fr 1fr; gap:.65rem; padding:.6rem 1rem calc(.6rem + env(safe-area-inset-bottom)); background:#fff; border-top:1px solid #dce1e2; box-shadow:0 -4px 16px #20272708; }.mobile-action-bar > a { display:flex; align-items:center; justify-content:center; gap:.6rem; min-height:44px; border:1px solid #ccd3d4; border-radius:4px; font-size:.78rem; font-weight:600; }.mobile-action-bar > a:last-child { background:#c43e1b; color:#fff; border-color:#c43e1b; }.mobile-action-bar svg { width:16px; height:16px; }
      .footer-col a { font-size:.8rem; }.footer-grid { grid-template-columns:1fr 1fr; }.footer-col:last-child { grid-column:1/-1; }.site-footer { padding-bottom:1rem; }
    }
    @media(prefers-reduced-motion:reduce) { .business-mosaic img { transition:none; } }
    .example-quick-nav { display:flex; gap:1.4rem; justify-content:space-between; border-block:1px solid currentColor; border-color:color-mix(in srgb,currentColor 18%,transparent); padding-block:.9rem; }
    .example-quick-nav a { display:inline-flex; align-items:center; gap:.8rem; font-size:.75rem; min-height:34px; }.example-quick-nav svg { width:14px; height:14px; }
    .example-more { position:relative; }.example-more summary { cursor:pointer; font-size:.8rem; list-style:none; padding:.6rem 0; white-space:nowrap; }.example-more summary::after { content:'+'; margin-left:.5rem; }.example-more[open] summary::after { content:'−'; }.example-more summary::-webkit-details-marker { display:none; }
    .example-more > nav { position:absolute; z-index:35; top:100%; right:-1rem; padding:1rem; width:270px; max-height:65vh; overflow:auto; border:1px solid color-mix(in srgb,currentColor 25%,transparent); background:var(--demo-menu-bg,#fff); color:var(--demo-menu-text,#202727); box-shadow:0 8px 25px #0002; display:grid; gap:.15rem; }
    .example-more > nav a { display:block; padding:.65rem; font-size:.82rem; }.example-more > nav a:hover { background:color-mix(in srgb,currentColor 8%,transparent); }
    .theme-olive { --demo-menu-bg:#252d23; --demo-menu-text:#e4e4ce; }.theme-current { --demo-menu-bg:#142e40; --demo-menu-text:#fff; }.theme-form { --demo-menu-bg:#e9e2ef; --demo-menu-text:#403247; }.theme-clearflow { --demo-menu-bg:#fff; --demo-menu-text:#14364a; }.theme-ridgeline { --demo-menu-bg:#f5f1e8; --demo-menu-text:#302e29; }
    .demo-nav { gap:1.3rem; }.demo-nav > .demo-button { white-space:nowrap; }.demo-footer-top > nav { display:grid; grid-template-columns:1fr 1fr; gap:.5rem 2rem; min-width:45%; }.demo-footer-top > nav a { font-size:.8rem; }
    .example-feature { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; }.example-feature img { width:100%; height:460px; object-fit:cover; }.example-feature p:not(.demo-kicker) { font-size:1rem; line-height:1.8; margin-top:1.5rem; max-width:440px; }.theme-clearflow .example-feature img { border-radius:18px; }.theme-form .example-feature img { border-radius:130px 130px 8px 8px; }
    .example-section-title { display:flex; justify-content:space-between; align-items:end; gap:3rem; margin-bottom:2rem; }.example-section-title h2 { max-width:770px; }.example-section-title > a { flex-shrink:0; }
    .example-gallery-teaser { display:grid; grid-template-columns:repeat(3,1fr); gap:1.2rem; }.example-gallery-teaser img { width:100%; height:285px; object-fit:cover; }.example-gallery-teaser a:nth-child(2) { margin-top:2rem; }.example-photo-note { font-size:.7rem; margin-top:1.3rem; opacity:.8; }
    .example-breadcrumb { display:flex; gap:.75rem; padding-top:1.6rem; font-size:.73rem; flex-wrap:wrap; }.example-breadcrumb a { text-decoration:underline; text-underline-offset:4px; }
    .example-detail-hero { display:grid; grid-template-columns:1.1fr 1fr; gap:4rem; padding-block:3rem 4rem; align-items:center; }.example-detail-hero h1 { font-size:clamp(3.6rem,5.2vw,5.7rem); }.example-detail-hero p:not(.demo-kicker) { font-size:1.04rem; line-height:1.8; margin-top:1.5rem; max-width:520px; }.example-detail-hero .demo-button { margin-top:1.5rem; }.example-detail-hero figure { margin:0; }.example-detail-hero figure img { width:100%; height:490px; object-fit:cover; }.example-detail-hero figcaption { font-size:.64rem; margin-top:.7rem; opacity:.75; }
    .theme-current .example-detail-hero h1,.theme-clearflow .example-detail-hero h1 { font-size:clamp(3rem,4.3vw,4.6rem); }.theme-clearflow .example-detail-hero figure img { border-radius:20px; }.theme-form .example-detail-hero figure img { border-radius:130px 130px 0 0; }
    .example-detail-body { display:grid; grid-template-columns:1.6fr .85fr; gap:5rem; padding-block:2rem 3rem; }.example-detail-body > div > article { display:grid; grid-template-columns:35px 1fr; gap:1.4rem; border-top:1px solid color-mix(in srgb,currentColor 25%,transparent); padding-block:2rem; }.example-detail-body article > span { font-size:.67rem; opacity:.7; padding-top:.5rem; }.example-detail-body article h2 { font-size:2.5rem; margin-bottom:1.4rem; line-height:1.1; }.example-detail-body article p { line-height:1.85; font-size:1rem; }.example-detail-body li { font-size:.92rem; line-height:1.65; padding-left:.3rem; margin-top:.6rem; }
    .theme-clearflow .example-detail-body article h2,.theme-current .example-detail-body article h2 { font-size:2rem; }
    .example-help { align-self:start; position:sticky; top:6rem; border:1px solid color-mix(in srgb,currentColor 25%,transparent); padding:2rem; }.example-help h2 { font-size:2.25rem; }.example-help p:not(.demo-kicker) { margin-top:1.3rem; font-size:.86rem; }.example-help .demo-button { margin-top:1.5rem; font-size:.75rem; padding-inline:1rem; gap:.7rem; width:100%; }.example-help .demo-text-link { font-size:.8rem; }
    .theme-clearflow .example-help { border-radius:15px; background:#eef7fb; }.theme-ridgeline .example-help { background:#e9e2d5; }.theme-form .example-help { border-radius:18px; }
    .example-related { display:grid; grid-template-columns:repeat(3,1fr); gap:2rem; }.example-related a { border-top:1px solid color-mix(in srgb,currentColor 25%,transparent); padding-top:1.3rem; display:flex; flex-direction:column; }.example-related a > span { font-size:1.1rem; font-weight:550; }.example-related p { margin:1rem 0; font-size:.87rem; }.example-related svg { width:21px; height:21px; margin-top:auto; }
    .example-page-closing { display:flex; justify-content:space-between; align-items:center; gap:3rem; padding-block:4rem; border-top:1px solid color-mix(in srgb,currentColor 25%,transparent); }.example-page-closing h2 { font-size:3.2rem; }.example-page-closing p { margin-top:1rem; font-size:.95rem; }.example-page-closing .demo-button { flex-shrink:0; }
    .example-gallery { display:grid; grid-template-columns:1fr 1fr; gap:2.5rem 1.5rem; padding-bottom:4rem; }.example-gallery figure { margin:0; }.example-gallery figure:nth-child(3n+1) { grid-column:1/-1; }.example-gallery a { display:block; position:relative; overflow:hidden; }.example-gallery img { height:400px; width:100%; object-fit:cover; transition:transform .4s; }.example-gallery figure:nth-child(3n+1) img { height:520px; }.example-gallery a:hover img { transform:scale(1.025); }.example-gallery figcaption { font-size:.73rem; margin-top:.8rem; opacity:.8; }.gallery-zoom { display:flex; gap:.5rem; align-items:center; position:absolute; right:1rem; bottom:1rem; background:#fff; color:#202727; padding:.55rem .8rem; font-size:.7rem; border-radius:3px; }.gallery-zoom svg { width:15px; height:15px; }
    .gallery-dialog { max-width:min(1100px,94vw); width:100%; max-height:94dvh; padding:1rem; border:0; background:#fff; color:#202727; border-radius:5px; }.gallery-dialog::backdrop { background:#081010d9; }.gallery-dialog > button { display:flex; align-items:center; gap:.6rem; margin-left:auto; border:0; background:#fff; padding:.5rem; min-height:44px; font-size:.8rem; }.gallery-dialog > button svg { width:18px; height:18px; }.gallery-dialog > img { max-height:70dvh; object-fit:contain; width:100%; background:#f6f8f8; }.gallery-dialog > p { font-size:.8rem; margin-top:.8rem; }.gallery-dialog > div { display:flex; align-items:center; justify-content:space-between; gap:1rem; margin-top:.7rem; }.gallery-dialog > div button { background:#fff; border:1px solid #cbd2d3; padding:.6rem 1rem; font-size:.8rem; min-height:44px; }.gallery-dialog [data-gallery-position] { font-size:.75rem; }.gallery-dialog :focus-visible { outline:3px solid #ad3c1e; }
    .example-faq-page { max-width:960px; padding-top:0; }.example-faq-page .faq-item summary { font-size:1.1rem; padding-block:1.6rem; }.example-faq-page .faq-item p { font-size:1rem; line-height:1.8; }
    .example-mobile-action { display:none; }
    .menu-category-photo { width:100%; height:230px; object-fit:cover; margin-bottom:1.8rem; }
    @media(max-width:1150px) { .demo-header { gap:1rem; }.demo-nav { gap:1rem; font-size:.75rem; }.demo-nav .demo-button { padding-inline:1rem; gap:.8rem; font-size:.75rem; }.example-more summary { font-size:.75rem; }.example-feature,.example-detail-hero,.example-detail-body { gap:3rem; }.example-help { padding:1.5rem; } }
    @media(max-width:950px) and (min-width:761px) { .demo-header { flex-wrap:wrap; padding-block:1.2rem; gap:1rem; }.demo-header .demo-nav { width:100%; justify-content:space-between; }.example-detail-hero h1 { font-size:3.7rem; }.theme-current .example-detail-hero h1,.theme-clearflow .example-detail-hero h1 { font-size:3rem; }.example-detail-body { grid-template-columns:1.3fr .9fr; gap:2rem; }.example-help h2 { font-size:1.8rem; } }
    @media(max-width:760px) {
      .demo-body { padding-bottom:70px; }.demo-header { min-height:83px; }.demo-mobile nav { max-height:65dvh; overflow:auto; overscroll-behavior:contain; top:calc(100% - 1px); }.demo-mobile nav a { font-size:.88rem; min-height:44px; }
      .example-quick-nav { display:grid; grid-template-columns:1fr 1fr; gap:.2rem 1rem; padding-block:.65rem; }.example-quick-nav a { font-size:.68rem; justify-content:space-between; min-height:39px; }.example-quick-nav svg { flex-shrink:0; }
      .example-feature,.example-detail-hero,.example-detail-body { grid-template-columns:1fr; gap:2rem; }.example-feature img { height:300px; }.example-feature p:not(.demo-kicker) { font-size:.95rem; }.example-section-title { display:block; margin-bottom:1.5rem; }.example-section-title h2 { font-size:2.6rem; }.example-section-title > a { margin-top:1rem; }
      .example-gallery-teaser { grid-template-columns:1fr 1fr; gap:.8rem; }.example-gallery-teaser a:first-child { grid-column:1/-1; }.example-gallery-teaser a:nth-child(2) { margin-top:0; }.example-gallery-teaser img { height:190px; }.example-gallery-teaser a:first-child img { height:250px; }
      .example-detail-hero { padding-block:2rem 3rem; }.example-detail-hero h1 { font-size:clamp(3.2rem,10vw,4rem); }.theme-current .example-detail-hero h1,.theme-clearflow .example-detail-hero h1 { font-size:clamp(2.6rem,8.4vw,3.4rem); }.example-detail-hero p:not(.demo-kicker) { font-size:.98rem; }.example-detail-hero figure img { height:310px; }.example-detail-hero .demo-button { width:100%; }
      .example-detail-body { padding-top:0; }.example-detail-body > div > article { grid-template-columns:25px 1fr; gap:.8rem; padding-block:1.6rem; }.example-detail-body article h2 { font-size:2.1rem; }.theme-current .example-detail-body article h2,.theme-clearflow .example-detail-body article h2 { font-size:1.7rem; }.example-detail-body article p { font-size:.94rem; }.example-help { position:static; }.example-help .demo-button { width:auto; }.example-help .demo-text-link { display:flex; max-width:230px; }
      .example-related { grid-template-columns:1fr; gap:1.6rem; }.example-related p { margin-bottom:.7rem; }.example-page-closing { display:block; padding-block:3rem; }.example-page-closing h2 { font-size:2.5rem; }.example-page-closing .demo-button { margin-top:1.5rem; width:100%; }
      .example-gallery { grid-template-columns:1fr; gap:1.7rem; }.example-gallery figure:nth-child(3n+1) { grid-column:auto; }.example-gallery img,.example-gallery figure:nth-child(3n+1) img { height:310px; }.example-faq-page .faq-item summary { font-size:1rem; }.example-faq-page .faq-item p { font-size:.94rem; }
      .demo-footer-top > nav { gap:.3rem 1rem; }.demo-footer-top > nav a { font-size:.75rem; min-height:39px; }.demo-footer-bottom { padding-bottom:1rem; }
      .example-mobile-action { position:fixed; inset:auto 0 0; z-index:42; display:grid; grid-template-columns:.6fr 1fr; gap:.7rem; align-items:center; padding:.6rem 1rem calc(.6rem + env(safe-area-inset-bottom)); border-top:1px solid color-mix(in srgb,currentColor 25%,transparent); background:var(--demo-menu-bg); color:var(--demo-menu-text); }.example-mobile-action > a:first-child { font-size:.78rem; text-align:center; min-height:44px; display:grid; place-items:center; }.example-mobile-action .demo-button { padding:.7rem .8rem; font-size:.74rem; gap:.6rem; min-height:44px; }
    }
    @media(prefers-reduced-motion:reduce) { .example-gallery img { transition:none; } }
    ✓ • 180ms

## Activity

    $ Get-Content -Encoding utf8 scripts/build.mjs; Get-Content -Encoding utf8 src/components/ui.mjs -TotalCount 160; Get-ChildItem artifacts -File | Select-Object Name,LastWriteTime; Get-ChildItem .tools -File | Select-Object Name; Get-NetTCPConnection -LocalPort 4321 -State Listen -ErrorAction SilentlyContinue | Select-Object LocalAddress,LocalPort,OwningProcess; Test-Path 'C:\Users\muham\AppData\Local\ms-playwright-go\1.50.1\package'; Test-Path 'C:\Users\muham\.cache\puppeteer\chrome\win64-139.0.7258.68\chrome-win64\chrome.exe'
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
    const pages = [...agencyPages,...examples.map(e=>({path:`/examples/${e.slug}/`,title:`${e.name} — ${e.category} Website Concept | SkipManual`,description:`Explore ${e.name}, an original ${e.category.toLowerCase()} example website by SkipManual. See the design approach, useful features, and the complete fictional website.`,render:()=>exampleDetail(e)})),...demoPages()];
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
      const links = navigation.map(n => `<a href="${n.href}" ${path.startsWith(n.href) ? 'aria-current="page"' : ''}>${n.label}</a>`).join('');
      return `<a class="skip-link" href="#main">Skip to content</a><div class="site-utility"><div class="container"><span>Websites &amp; customer follow-up for local businesses</span><a href="/pricing/">All five services · <strong>$249/month</strong>${icon('arrow')}</a></div></div><header class="site-header"><div class="container header-inner">${brand()}<nav class="desktop-nav" aria-label="Main navigation">${links}${button('Book a call','/book/')}</nav><details class="mobile-nav"><summary>Menu</summary><nav aria-label="Mobile navigation">${links}<a href="/about/">About SkipManual</a><a href="/faq/">Common questions</a>${button('Book a call','/book/')}</nav></details></div></header>`;
    }
    export const footer = () => `<footer class="site-footer"><div class="container"><div class="footer-grid"><div class="footer-brand">${brand()}<p>Good websites.<br>One less thing on your plate.</p></div><div class="footer-col"><h2>Explore</h2><a href="/services/">Services</a><a href="/examples/">Examples</a><a href="/pricing/">Pricing</a><a href="/how-it-works/">How it works</a></div><div class="footer-col"><h2>SkipManual</h2><a href="/about/">About us</a><a href="/faq/">Common questions</a><a href="/contact/">Send an inquiry</a><a href="/book/">Book a call</a></div><div class="footer-col"><h2>Website examples</h2>${examples.map(e=>`<a href="/examples/${e.slug}/">${escape(e.name)}</a>`).join('')}</div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} SkipManual</span><div><a href="/privacy/">Privacy</a><a href="/website-information/">Website information</a><span>Made with intention.</span></div></div></div></footer>`;
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
    export function layout({ title, description = site.description, path, content, noindex = false, demo = false, bodyClass = '' }) {
      const canonical = site.url ? new URL(path, site.url).href : '';
      const schema = !demo ? { '@context': 'https://schema.org', '@type': 'LocalBusiness', name: site.name, description: site.description, ...(site.url ? { url: site.url } : {}), ...(site.email ? { email: site.email } : {}), hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Website & follow-up package', itemListElement: [{ '@type': 'Offer', price: offer.price, priceCurrency: offer.currency, description: `${offer.confirmedFeatures.join(', ')}. Billed monthly; full terms confirmed before agreement.`, itemOffered: { '@type': 'Service', name: 'Website design and customer follow-up for local businesses' } }] } } : null;
      return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escape(title)}</title><meta name="description" content="${escape(description)}"><meta name="theme-color" content="#ffffff">${noindex || demo ? '<meta name="robots" content="noindex,follow">' : ''}${canonical ? `<link rel="canonical" href="${escape(canonical)}"><meta property="og:url" content="${escape(canonical)}">` : ''}<meta property="og:type" content="website"><meta property="og:site_name" content="SkipManual"><meta property="og:title" content="${escape(title)}"><meta property="og:description" content="${escape(description)}"><meta property="og:image" content="${site.url ? new URL('/images/social-card.png',site.url).href : '/images/social-card.png'}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta name="twitter:card" content="summary_large_image"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="preload" href="/fonts/dm-sans.woff" as="font" type="font/woff" crossorigin><link rel="stylesheet" href="/styles/global.css">${demo ? '<link rel="stylesheet" href="/styles/demos.css"><link rel="stylesheet" href="/styles/trades.css"><link rel="stylesheet" href="/styles/example-expansion.css">' : '<link rel="stylesheet" href="/styles/previews.css"><link rel="stylesheet" href="/styles/agency.css">'}${schema ? `<script type="application/ld+json">${JSON.stringify(schema).replace(/</g,'\\u003c')}</script>` : ''}<script src="/scripts/client.js" defer></script></head><body class="${bodyClass}">${demo ? '' : header(path)}<main id="main">${content}</main>${demo ? '' : footer()+`<nav class="mobile-action-bar" aria-label="Quick actions"><a href="/examples/">Website examples</a><a href="/book/">Book a call ${icon('arrow')}</a></nav>`}</body></html>`;
    }
    
    Name                   LastWriteTime
    ----                   -------------
    audit-results.json     05-10-2026 10:03:12
    contact.png            05-10-2026 10:03:11
    electrical.png         05-10-2026 10:03:09
    examples.png           05-10-2026 10:03:06
    home-1440.png          05-10-2026 09:59:53
    home-390.png           05-10-2026 10:01:25
    home-desktop.png       05-10-2026 10:03:04
    home-mobile.png        05-10-2026 10:03:05
    inspect-contact.png    03-10-2026 07:56:18
    inspect-electric.png   03-10-2026 07:56:17
    inspect-home.png       03-10-2026 07:56:15
    inspect-restaurant.png 03-10-2026 07:56:16
    inspect-studio.png     03-10-2026 07:56:18
    restaurant.png         05-10-2026 10:03:08
    studio.png             05-10-2026 10:03:11
    final-check.mjs
    get-photos.ps1
    inspect-resume.mjs
    integrate-redesign.mjs
    polish-redesign.mjs
    redesign-review.mjs
    review-resume.mjs
    True
    True
    
    
    ✓ • 1.39s

## Activity

    $ Get-Content -Encoding utf8 src/styles/agency.css
    /* White, direct, and grounded in the businesses this service is for. */
    body:not(.demo-body) { background:#fff; color:#202727; --color-foreground:#202727; --color-muted:#586365; --color-link:#b93c1a; --button-bg:#c43e1b; --button-color:#fff; --heading-lg:clamp(2.2rem,3.65vw,3.6rem); }
    body:not(.demo-body) h1,body:not(.demo-body) h2 { letter-spacing:-.045em; }
    body:not(.demo-body) h3 { letter-spacing:-.025em; }
    .site-utility { background:#fff; border-bottom:1px solid #e4e7eb; font-size:.73rem; }
    .site-utility > div { display:flex; justify-content:space-between; gap:1rem; align-items:center; min-height:37px; }
    .site-utility a { display:flex; align-items:center; gap:.8rem; }
    .site-utility svg { width:15px; height:15px; }
    .site-header { background:#fff; position:sticky; top:0; z-index:45; height:89px; border-bottom:1px solid #e4e7eb; }
    .header-inner { height:100%; }.brand { font-weight:750; }.brand-mark { color:#df4a24; }
    .desktop-nav { gap:1.7rem; font-size:.84rem; }.desktop-nav .button { padding:.85rem 1.1rem; }
    .button { border-radius:5px; font-size:.88rem; min-height:50px; font-weight:650; }
    .button--outline { color:#202727; background:#fff; border:1px solid #bac2c3; }
    .button:hover { box-shadow:0 4px 14px #3a22101a; }
    .eyebrow { color:#5c6566; font-size:.68rem; letter-spacing:.11em; }
    .accent { color:#bd3e1d; }
    .human-hero { display:grid; grid-template-columns:1.04fr 1fr; align-items:center; gap:4rem; padding-block:4.2rem 4rem; }
    .human-hero-copy h1 { font-size:clamp(3.1rem,4.6vw,4.5rem); line-height:1.06; font-weight:650; }
    .human-hero-copy h1 > span { color:#c14220; }
    .human-hero-copy > p:not(.eyebrow):not(.hero-reassurance) { font-size:1.12rem; line-height:1.75; margin-top:1.65rem; max-width:480px; }
    .human-hero-copy .eyebrow { font-size:.63rem; letter-spacing:.09em; margin-bottom:1.5rem; }
    .hero-offer { display:flex; align-items:center; gap:1.3rem; margin-top:1.75rem; }
    .hero-offer > strong { display:block; font-size:2.7rem; letter-spacing:-.055em; line-height:1.1; white-space:nowrap; font-weight:650; }
    .hero-offer > strong > span { font-size:.9rem; letter-spacing:0; font-weight:450; margin-left:.15rem; }
    .hero-offer p { font-size:.76rem; line-height:1.6; padding-left:1.3rem; border-left:1px solid #d9dfe0; }
    .human-hero .actions { margin-top:1.75rem; gap:1.1rem; }.human-hero .actions .text-link { font-size:.82rem; }
    .hero-reassurance { display:flex; gap:.5rem; align-items:center; margin-top:1.15rem; font-size:.73rem; }.hero-reassurance svg { width:16px; height:16px; color:#b93c1a; }
    .business-mosaic { height:565px; display:grid; grid-template-columns:1.08fr 1fr; grid-template-rows:1fr 1fr; gap:13px; position:relative; }
    .business-mosaic > a { position:relative; display:block; overflow:hidden; border-radius:8px; }
    .business-mosaic img { width:100%; height:100%; object-fit:cover; transition:transform .5s; }.business-mosaic a:hover img { transform:scale(1.03); }
    .mosaic-main { grid-row:1/3; }.mosaic-main img { object-position:36% center; }
    .business-mosaic > a > span { position:absolute; bottom:0; inset-inline:0; padding:3rem 1.2rem 1.25rem; background:linear-gradient(transparent,#10201ecd); color:#fff; font-size:.78rem; line-height:1.5; }
    .business-mosaic .mosaic-main > span { font-size:1.3rem; line-height:1.35; font-weight:550; }
    .business-mosaic > a > span > svg { width:16px; height:16px; float:right; margin-top:.3rem; }
    .mosaic-stamp { position:absolute; left:39%; top:43%; z-index:2; background:#fff; color:#303535; font-size:.7rem; padding:1rem 1.2rem; box-shadow:0 6px 24px #16232320; border-radius:4px; transform:rotate(-5deg); line-height:1.6; pointer-events:none; }
    .mosaic-stamp strong { font-size:.89rem; font-weight:600; }
    .industry-access { display:flex; align-items:center; gap:1rem; justify-content:space-between; border-block:1px solid #e4e7eb; padding-block:1.4rem; }
    .industry-access > p { font-size:.73rem; line-height:1.5; padding-right:1rem; }.industry-access strong { color:#303838; font-weight:550; }
    .industry-access > a { display:flex; gap:.8rem; align-items:center; font-size:.81rem; font-weight:550; min-height:44px; }.industry-access > a:hover { color:#b93c1a; }.industry-access svg { width:16px; height:16px; }
    .plain-offer { display:grid; grid-template-columns:1fr 1fr; gap:6rem; align-items:center; }
    .plain-offer .lead { font-size:1.06rem; max-width:430px; margin-top:1.5rem; }.plain-offer .text-link { margin-top:1.5rem; }
    .plain-service-list a { display:flex; align-items:center; gap:1.1rem; padding:1.45rem 0; border-bottom:1px solid #e4e7eb; }.plain-service-list a:first-child { border-top:1px solid #e4e7eb; }
    .plain-service-list a > span { color:#b93c1a; font-size:.69rem; align-self:flex-start; margin-top:.3rem; }.plain-service-list h3 { font-size:1.12rem; line-height:1.35; }.plain-service-list p { font-size:.82rem; margin-top:.45rem; }.plain-service-list svg { width:18px; height:18px; margin-left:auto; flex-shrink:0; }.plain-service-list a:hover h3 { color:#b93c1a; }
    .work-section { background:#fff; border-top:1px solid #e4e7eb; border-bottom:1px solid #e4e7eb; }
    .work-section .work-grid,.examples-expanded .work-grid { grid-template-columns:repeat(6,minmax(0,1fr)); gap:3.5rem 1.5rem; }
    .work-section .work-card,.examples-expanded .work-card { grid-column:span 2; }
    .work-section .work-card:nth-child(n+4),.examples-expanded .work-card:nth-child(n+4) { grid-column:span 3; }
    .direct-work-card .work-art { border:1px solid #e4e7eb; padding:1.2rem; border-radius:7px; background:#f5f7f8; box-shadow:none; }
    .direct-work-card .work-art.olive { background:#f3f5ed; }.direct-work-card .work-art.form { background:#f5f2f8; }.direct-work-card .work-art.clearflow { background:#f0f8fc; }.direct-work-card .work-art.ridgeline { background:#faf5ed; }
    .direct-work-card .work-card-top { align-items:center; margin-top:1.1rem; }.direct-work-card .work-category { font-size:.73rem; margin-bottom:.35rem; }
    .direct-work-card h3 { font-size:1.2rem; }.direct-work-card > p { font-size:.86rem; margin-top:.75rem; line-height:1.7; }
    .work-open { width:43px; height:43px; display:grid; place-items:center; border:1px solid #dce1e2; border-radius:50%; flex-shrink:0; }.work-open:hover { color:#c14220; border-color:currentColor; }.work-open svg { width:19px; height:19px; }
    .work-links { display:flex; gap:1rem; justify-content:space-between; align-items:center; margin-top:1rem; flex-wrap:wrap; }.work-links a { display:inline-flex; align-items:center; gap:.5rem; min-height:36px; font-size:.75rem; text-decoration:underline; text-underline-offset:5px; }.work-links a:first-child { font-weight:600; }.work-links svg { width:15px; height:15px; }
    .scenario-section { background:#fff; border-bottom:1px solid #e4e7eb; }.scenario-choices button { border-color:#dbe0e1; }.scenario-choices button[aria-pressed='true'] { background:#c14220; border-color:#c14220; }
    .scenario-section .conversation { background:#fff; border-color:#dfe4e4; box-shadow:0 8px 35px #303b3b0a; }.conversation-avatar { background:#f4f6f6; }.message { background:#edf5f3; }.message--customer { background:#fff0e8; }.message--system { background:#fff; }.scenario-outcome { border-color:#dfe4e4; }
    .simple-steps { display:grid; grid-template-columns:repeat(3,1fr); gap:3rem; }.simple-steps article { border-top:1px solid #dbe0e1; padding-top:1.5rem; }.simple-steps article > span { color:#b93c1a; font-size:.8rem; }.simple-steps h3 { font-size:1.35rem; margin:1.5rem 0 1rem; }.simple-steps p { font-size:.95rem; }
    .agency-price-section { border-top:1px solid #e4e7eb; }.price-card { background:#fff; border:1px solid #dce1e2; border-top:3px solid #d54722; box-shadow:0 12px 35px #273c3e07; }.price-card li { padding-block:.2rem; }.price-card .small { line-height:1.6; }
    .price-grid .text-link { margin-top:1.5rem; }.cta-section { background:#fff5ef; border-block:1px solid #f2dfd3; }.cta-inner h2 { font-size:clamp(2.1rem,3.4vw,3.3rem); }
    .site-footer { background:#fff; border:0; padding-bottom:2rem; }.footer-grid { border-bottom:1px solid #e4e7eb; }.footer-col a { font-size:.85rem; }.footer-bottom { border:0; }
    .surface,.process-section,.about-statement { background:#fff; color:#202727; border-block:1px solid #e4e7eb; }.process-section p { color:#586365; }.about-mark { background:#fff5ef; }.about-mark svg { color:#d54722; }.process-section .process-number { border-color:#dbe0e1; }
    .industry-filter,.service-jump { display:flex; flex-wrap:wrap; gap:.8rem; }.industry-filter a,.service-jump a { display:flex; align-items:center; gap:1rem; padding:.9rem 1.2rem; border:1px solid #dbe0e1; border-radius:4px; font-size:.83rem; min-height:46px; }.industry-filter a:hover,.service-jump a:hover { border-color:#c14220; color:#c14220; }.industry-filter svg,.service-jump svg { width:16px; height:16px; }
    .collection-disclosure { font-size:.85rem; margin-bottom:2rem; }.service-stories > article { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; padding-block:4.5rem; border-bottom:1px solid #e4e7eb; scroll-margin-top:6rem; }.service-stories > article:nth-child(even) .service-story-photo { order:1; }.service-story-photo img { width:100%; height:480px; object-fit:cover; border-radius:6px; }.service-stories h2 { font-size:clamp(2rem,3vw,3rem); margin-bottom:1.4rem; }.service-stories ul { font-size:.92rem; color:#586365; }.service-stories .text-link { margin-top:1.4rem; }
    .service-example { background:#fff7f2; }.agency-breadcrumb { display:flex; flex-wrap:wrap; gap:.7rem; font-size:.78rem; padding-top:2rem; color:#586365; }.agency-breadcrumb a { text-decoration:underline; text-underline-offset:4px; }
    .service-detail-hero { display:grid; grid-template-columns:1.15fr 1fr; gap:4rem; padding-block:3rem 4rem; align-items:center; }.service-detail-hero h1 { font-size:clamp(2.7rem,4.4vw,4.2rem); }.service-detail-hero .lead { margin:1.5rem 0; }.service-detail-hero > img { height:480px; width:100%; object-fit:cover; border-radius:6px; }
    .service-detail-content { display:grid; grid-template-columns:1.5fr 1fr; gap:6rem; border-top:1px solid #e4e7eb; }.service-detail-content article + article { margin-top:3rem; }.service-detail-content article h2 { font-size:1.9rem; margin-bottom:1rem; }.service-detail-content article p { font-size:1.02rem; line-height:1.85; }.service-detail-content aside { align-self:start; border:1px solid #e4e7eb; padding:2rem; border-radius:6px; }.service-detail-content aside h2 { font-size:1.3rem; }.service-detail-content aside li { color:#586365; font-size:.9rem; }.service-detail-content aside .small { margin-block:1.4rem; }
    .related-example { display:grid; grid-template-columns:.8fr 1fr; gap:6rem; align-items:center; border-top:1px solid #e4e7eb; }.related-example p:not(.eyebrow) { margin-block:1.5rem; }.related-example > a { padding:1.5rem; background:#f5f7f8; border:1px solid #e4e7eb; border-radius:6px; }.other-services { display:grid; grid-template-columns:repeat(2,1fr); gap:1rem 3rem; margin-top:2rem; }.other-services a { display:flex; justify-content:space-between; align-items:center; gap:1rem; border-bottom:1px solid #e4e7eb; padding:1rem 0; font-size:.9rem; }.other-services svg { width:18px; height:18px; }
    .how-photo { position:relative; overflow:hidden; border-radius:7px; height:440px; }.how-photo > img { width:100%; height:100%; object-fit:cover; object-position:50% 35%; }.how-photo > div { position:absolute; bottom:0; inset-inline:0; padding:4rem 3rem 2.5rem; background:linear-gradient(transparent,#10201ed9); color:#fff; }.how-photo p { color:#fff; margin-top:1rem; }.how-photo h2 { font-size:2.6rem; }
    .full-process { max-width:1000px; }.full-process article { display:grid; grid-template-columns:85px 1fr; gap:2rem; padding-block:2.5rem; border-bottom:1px solid #e4e7eb; }.full-process article > span { font-size:2.2rem; color:#c14220; letter-spacing:-.04em; }.full-process h2 { font-size:2rem; margin-bottom:1.2rem; }.full-process p { line-height:1.85; }.process-note { border-left:2px solid #d54722; padding-left:1.1rem; font-size:.87rem; }
    .booking-hero { padding-bottom:3rem; }.booking-hero h1 { max-width:1040px; }.booking-layout { display:grid; grid-template-columns:.85fr 1.15fr; gap:5rem; padding-bottom:3rem; }.booking-agenda > img { width:100%; height:260px; object-fit:cover; border-radius:5px; margin-bottom:2rem; }.booking-agenda h2 { font-size:1.65rem; margin-bottom:1.5rem; }.booking-agenda ol { padding-left:1.5rem; }.booking-agenda li { padding:0 0 1.2rem .6rem; }.booking-agenda li::marker { color:#c14220; font-weight:600; }.booking-agenda strong,.booking-agenda li span { display:block; }.booking-agenda li span { font-size:.9rem; color:#586365; margin-top:.4rem; }.booking-connected { padding:2rem; border:1px solid #f0c9b8; border-radius:6px; background:#fff7f2; }.booking-connected h2 { font-size:1.6rem; margin-bottom:1rem; }.booking-connected .button { margin-block:1.5rem 1rem; }.booking-alternative { margin:2rem 0 1rem; font-weight:600; }
    .simple-inquiry { background:#fff; border:1px solid #dce1e2; padding:2rem; box-shadow:0 10px 35px #23393b06; }.simple-inquiry h2 { font-size:1.65rem; margin-bottom:.8rem; }.simple-inquiry .form-intro { font-size:.85rem; }.simple-inquiry .field label { font-size:.87rem; }.simple-inquiry .field input,.simple-inquiry .field select,.simple-inquiry .field textarea { font-size:1rem; min-height:50px; border-color:#bfc8ca; }.simple-inquiry .form-submit { width:100%; }.form-availability { border-color:#d54722; background:#fff7f2; }.form-availability p { font-size:.8rem; }.optional-inquiry { margin-top:1.3rem; border-block:1px solid #e4e7eb; }.optional-inquiry summary { padding:1rem 0; cursor:pointer; font-size:.85rem; font-weight:600; min-height:48px; }.optional-inquiry summary span { font-weight:400; color:#586365; }.optional-inquiry .form-grid { padding-bottom:1.3rem; }.inquiry-context { background:#f5f8f7; padding:.8rem; font-size:.82rem; margin-top:1rem; }.inquiry-context[hidden] { display:none; }.simple-inquiry .brief-output label { font-size:.86rem; }.simple-inquiry .brief-output textarea { margin-top:.5rem; }
    .mobile-action-bar { display:none; }
    .about-photo img { width:100%; height:500px; object-fit:cover; border-radius:6px; }
    @media(max-width:760px) { .about-photo img { height:300px; } }
    @media(max-width:1150px) { .desktop-nav { gap:1rem; font-size:.77rem; }.human-hero { gap:2.3rem; }.business-mosaic { height:510px; }.human-hero-copy h1 { font-size:3.4rem; }.plain-offer,.service-stories > article { gap:3rem; }.booking-layout { gap:3rem; }.service-detail-content { gap:3rem; } }
    @media(max-width:900px) { .desktop-nav { gap:.85rem; }.desktop-nav .button { font-size:.74rem; padding-inline:.85rem; }.header-inner .brand { font-size:1.25rem; }.human-hero { gap:2rem; }.human-hero-copy h1 { font-size:3rem; }.hero-offer { flex-wrap:wrap; gap:.8rem; }.business-mosaic { height:500px; }.business-mosaic .mosaic-main > span { font-size:1rem; }.mosaic-stamp { display:none; }.industry-access { flex-wrap:wrap; gap:.8rem 1.5rem; justify-content:flex-start; }.industry-access > p { width:100%; }.simple-steps { gap:1.5rem; }.work-section .work-grid,.examples-expanded .work-grid { grid-template-columns:repeat(2,minmax(0,1fr)); }.work-section .work-card,.work-section .work-card:nth-child(n+4),.examples-expanded .work-card,.examples-expanded .work-card:nth-child(n+4) { grid-column:auto; }.work-section .work-card:last-child,.examples-expanded .work-card:last-child { grid-column:1/-1; max-width:600px; }.service-detail-hero { gap:2rem; }.service-detail-hero h1 { font-size:3rem; } }
    @media(max-width:760px) {
      body:not(.demo-body) { padding-bottom:72px; }.site-utility { font-size:.65rem; }.site-utility > div { min-height:34px; justify-content:center; }.site-utility > div > span { display:none; }.site-header { height:72px; }.header-inner .brand { font-size:1.4rem; }.mobile-nav nav { top:71px; background:#fff; max-height:calc(100dvh - 145px); overflow:auto; }.mobile-nav nav .button { display:flex; }
      .human-hero { grid-template-columns:1fr; padding-block:2.5rem 2rem; gap:2rem; }.human-hero-copy h1 { font-size:clamp(2.85rem,9vw,4rem); line-height:1.07; }.human-hero-copy .eyebrow { max-width:310px; font-size:.62rem; line-height:1.65; margin-bottom:1.2rem; }.human-hero-copy > p:not(.eyebrow):not(.hero-reassurance) { font-size:1rem; line-height:1.75; margin-top:1.2rem; }.hero-offer { margin-top:1.4rem; }.hero-offer > strong { font-size:2.35rem; }.hero-offer p { font-size:.71rem; }.human-hero .actions { align-items:flex-start; flex-direction:column; gap:.8rem; margin-top:1.4rem; }.human-hero .actions .button { width:100%; }.hero-reassurance { font-size:.68rem; }
      .business-mosaic { height:360px; gap:9px; }.business-mosaic .mosaic-main > span { font-size:1rem; }.business-mosaic > a > span { padding:2rem .8rem .9rem; font-size:.68rem; }.business-mosaic > a > span > svg { width:13px; height:13px; }.industry-access { padding-block:1rem; gap:.4rem 1rem; }.industry-access > p { margin-bottom:.4rem; }.industry-access > a { font-size:.76rem; flex:1 0 40%; border-bottom:1px solid #edf0f0; justify-content:space-between; }
      .plain-offer,.service-detail-hero,.service-detail-content,.related-example,.booking-layout { grid-template-columns:1fr; gap:2.5rem; }.plain-offer h2 br { display:none; }.plain-offer .lead { max-width:none; }.plain-service-list h3 { font-size:1.05rem; }.plain-service-list a { padding-block:1.2rem; }
      .work-section .work-grid,.examples-expanded .work-grid { grid-template-columns:1fr; gap:2.5rem; }.work-section .work-card:last-child,.examples-expanded .work-card:last-child { max-width:none; }.direct-work-card .work-art { padding:1rem; }.work-links { gap:.75rem; }.direct-work-card > p { font-size:.9rem; }
      .simple-steps { grid-template-columns:1fr; gap:1.7rem; }.simple-steps h3 { margin-top:.9rem; }.simple-process .section-head { margin-bottom:2rem; }.simple-process .section-head .text-link { margin-top:1.2rem; }.scenario-section .section-head h2 { font-size:2.25rem; }.scenario-panel { margin-bottom:0; }
      .service-stories > article { grid-template-columns:1fr; gap:2rem; padding-block:3rem; }.service-stories > article:nth-child(even) .service-story-photo { order:0; }.service-story-photo img { height:270px; }.service-jump,.industry-filter { gap:.5rem; }.service-jump a,.industry-filter a { font-size:.75rem; padding:.65rem .8rem; }.service-detail-hero h1 { font-size:clamp(2.5rem,8vw,3.3rem); }.service-detail-hero > img { height:300px; }.service-detail-hero .button { width:100%; }.service-detail-content aside { padding:1.5rem; }.service-detail-content article h2 { font-size:1.65rem; }.service-detail-content article p { font-size:.97rem; }.other-services { grid-template-columns:1fr; gap:.4rem; }
      .how-photo { height:370px; }.how-photo > div { padding:3rem 1.4rem 1.5rem; }.how-photo h2 { font-size:2rem; }.how-photo p { font-size:.87rem; }.full-process article { grid-template-columns:35px 1fr; gap:1rem; padding-block:2rem; }.full-process article > span { font-size:1.4rem; }.full-process h2 { font-size:1.7rem; }.full-process p { font-size:.93rem; }.full-process .process-note { font-size:.84rem; }
      .booking-layout { display:flex; flex-direction:column; gap:2.5rem; }.booking-action { order:0; }.booking-agenda { order:1; }.booking-hero h1 { font-size:2.7rem; }.booking-agenda > img { height:240px; }.simple-inquiry { padding:1.3rem; }.simple-inquiry h2 { font-size:1.45rem; }.simple-inquiry .form-grid { grid-template-columns:1fr; }.simple-inquiry .optional-inquiry .form-grid { grid-template-columns:1fr; }
      .mobile-action-bar { position:fixed; z-index:44; inset:auto 0 0; display:grid; grid-template-columns:1fr 1fr; gap:.65rem; padding:.6rem 1rem calc(.6rem + env(safe-area-inset-bottom)); background:#fff; border-top:1px solid #dce1e2; box-shadow:0 -4px 16px #20272708; }.mobile-action-bar > a { display:flex; align-items:center; justify-content:center; gap:.6rem; min-height:44px; border:1px solid #ccd3d4; border-radius:4px; font-size:.78rem; font-weight:600; }.mobile-action-bar > a:last-child { background:#c43e1b; color:#fff; border-color:#c43e1b; }.mobile-action-bar svg { width:16px; height:16px; }
      .footer-col a { font-size:.8rem; }.footer-grid { grid-template-columns:1fr 1fr; }.footer-col:last-child { grid-column:1/-1; }.site-footer { padding-bottom:1rem; }
    }
    @media(prefers-reduced-motion:reduce) { .business-mosaic img { transition:none; } }
    ✓ • 103ms

## Activity

    $ Get-Content -Encoding utf8 .tools/final-check.mjs; Get-Content -Encoding utf8 .tools/redesign-review.mjs; Get-Content -Encoding utf8 .tools/review-resume.mjs; Get-Content -Encoding utf8 src/scripts/client.js
    import {createRequire} from 'node:module';
    import assert from 'node:assert/strict';
    const require=createRequire(import.meta.url);
    const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
    const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});
    try {
      const page=await browser.newPage({viewport:{width:390,height:844}});
      await page.goto('http://127.0.0.1:4321/',{waitUntil:'networkidle'});
      await page.locator('.scenario-section').scrollIntoViewIfNeeded();
      const skip=await page.locator('.skip-link').evaluate(e=>({top:e.getBoundingClientRect().top,bottom:e.getBoundingClientRect().bottom,focused:e===document.activeElement}));
      assert(skip.bottom<0&&!skip.focused,'Skip link should stay outside the viewport until focused.');
      await page.locator('.skip-link').focus();assert.equal(await page.locator('.skip-link').evaluate(e=>e.getBoundingClientRect().top),16);
      console.log('Skip link is hidden while browsing and visible on keyboard focus; the section capture overlay was a screenshot artifact.');
    } finally {await browser.close();}
    import fs from 'node:fs/promises';
    import {createRequire} from 'node:module';
    const require=createRequire(import.meta.url);const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
    const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});
    await fs.mkdir('artifacts/redesign',{recursive:true});
    try {
     const page=await browser.newPage();
     const routes=['/','/services/','/book/','/how-it-works/','/demos/olive-and-ember/','/demos/current-electric/repairs/','/demos/form-studio/gallery/','/demos/ridgeline-roofing/roof-replacement/'];
     for(const width of [1440,390]) {
      for(const route of routes){
       await page.setViewportSize({width,height:1000});await page.goto('http://127.0.0.1:4321'+route,{waitUntil:'networkidle'});await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].filter(i=>i.hasAttribute('src')).map(async i=>{i.loading='eager';try{await i.decode();}catch{}}));});
       await page.screenshot({path:`artifacts/redesign/${route.replaceAll('/','_')}-${width}.png`,fullPage:true});
       console.log(width,route,await page.evaluate(()=>({overflow:document.documentElement.scrollWidth>innerWidth+1,errors:[...document.images].filter(i=>i.hasAttribute('src')&&!i.naturalWidth).map(i=>i.src)})));
       if(route==='/')await page.screenshot({path:`artifacts/redesign/hero-${width}.png`});
      }
     }
    }finally{await browser.close();}
    import fs from 'node:fs/promises';
    import {createRequire} from 'node:module';
    const require=createRequire(import.meta.url);
    const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
    const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});
    await fs.mkdir('artifacts/resume',{recursive:true});
    try {
      const page=await browser.newPage();
      const routes=JSON.parse(await fs.readFile('dist/route-manifest.json','utf8')).filter(r=>r.path.includes('/demos/clearflow')||r.path.includes('/demos/ridgeline')||['/','/services/','/pricing/','/examples/'].includes(r.path));
      for(const width of [1440,390]) {
        for(const route of routes) {
          await page.setViewportSize({width,height:1000});await page.goto('http://127.0.0.1:4321'+route.path,{waitUntil:'networkidle'});
          await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(async image=>{image.loading='eager';await image.decode();}));});
          await page.screenshot({path:`artifacts/resume/${route.path.replaceAll('/','_')}-${width}.png`,fullPage:true});
          if(route.path==='/') {
            for(const name of ['home-hero','package-overview','scenario-section','work-section'])await page.locator(`.${name}`).screenshot({path:`artifacts/resume/${name}-${width}.png`});
          }
        }
        console.log(`Captured ${routes.length} updated pages at ${width}px.`);
      }
    } finally {await browser.close();}
    // Progressive enhancement only. Every page and navigation link is rendered as HTML.
    document.querySelectorAll('[data-choice-group]').forEach(group=>{
      const buttons=[...group.querySelectorAll('[data-choice]')];
      const panels=[...group.querySelectorAll('[data-choice-panel]')];
      const choose=value=>{
        buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.choice===value)));
        panels.forEach(panel=>{panel.hidden=panel.dataset.choicePanel!==value;});
      };
      group.querySelector('[data-choice-controls]').hidden=false;
      buttons.forEach(button=>button.addEventListener('click',()=>choose(button.dataset.choice)));
      if(buttons.length)choose(buttons[0].dataset.choice);
    });
    document.querySelectorAll('[data-device]').forEach(button=>{
      button.addEventListener('click',()=>{
        document.querySelectorAll('[data-device]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
        document.querySelectorAll('[data-preview-device]').forEach(panel=>{panel.hidden=panel.dataset.previewDevice!==button.dataset.device;});
      });
    });
    
    // Carry an explicit class or service choice into its demonstration request form.
    const demoParameters=new URLSearchParams(location.search);
    for(const [parameter,id] of [['class','demo-class'],['service','demo-service']]){
      const select=document.getElementById(id);
      const value=demoParameters.get(parameter);
      if(select&&value&&[...select.options].some(option=>option.value===value))select.value=value;
    }
    
    document.querySelectorAll('.mobile-nav, .demo-mobile, .example-more').forEach(menu=>{
      menu.addEventListener('keydown',event=>{if(event.key==='Escape'){menu.open=false;menu.querySelector('summary').focus();}});
      document.addEventListener('click',event=>{if(menu.open&&!menu.contains(event.target))menu.open=false;});
    });
    
    const occasion=document.getElementById('demo-occasion');
    if(occasion&&demoParameters.get('occasion'))occasion.value=demoParameters.get('occasion').slice(0,160);
    
    // Native dialogs keep keyboard focus inside the image viewer and restore it on close.
    const gallery=document.querySelector('.gallery-dialog');
    if(gallery){
      const images=[...document.querySelectorAll('[data-gallery-image]')];let current=0;
      const display=index=>{
        current=(index+images.length)%images.length;
        const source=images[current].querySelector('img');
        const large=gallery.querySelector('img');large.src=images[current].href;large.alt=source.alt;
        gallery.querySelector('p').textContent=source.alt;
        gallery.querySelector('[data-gallery-position]').textContent=`${current+1} of ${images.length}`;
      };
      images.forEach((link,index)=>link.addEventListener('click',event=>{
        if(event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
        event.preventDefault();display(index);gallery.showModal();gallery.querySelector('[data-gallery-close]').focus();
      }));
      gallery.querySelector('[data-gallery-close]').addEventListener('click',()=>gallery.close());
      gallery.querySelector('[data-gallery-prev]').addEventListener('click',()=>display(current-1));
      gallery.querySelector('[data-gallery-next]').addEventListener('click',()=>display(current+1));
      gallery.addEventListener('keydown',event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();display(current+(event.key==='ArrowLeft'?-1:1));}});
      gallery.addEventListener('click',event=>{if(event.target===gallery){const r=gallery.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)gallery.close();}});
      gallery.querySelector('[data-gallery-position]').setAttribute('aria-live','polite');
    }
    
    document.querySelectorAll('[data-day]').forEach(button=>{
      button.addEventListener('click',()=>{
        document.querySelectorAll('[data-day]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
        let count=0;
        document.querySelectorAll('[data-class-day]').forEach(row=>{
          row.hidden=button.dataset.day!=='all'&&row.dataset.classDay!==button.dataset.day;
          if(!row.hidden)count++;
        });
        document.querySelector('[data-schedule-status]').textContent=`${count} classes shown${button.dataset.day==='all'?'':` on ${button.dataset.day}`}.`;
      });
    });
    
    document.querySelectorAll('[data-demo-form]').forEach(form=>{
      const date=form.querySelector('input[type="date"]');
      if(date) {const today=new Date();date.min=`${today.getFullYear()}-${String(today.getMonth()+1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;}
      form.addEventListener('submit',event=>{
        event.preventDefault();
        if(!form.reportValidity())return;
        const data=Object.fromEntries(new FormData(form));
        const type=form.dataset.demoType;
        const summary=type==='olive'?`${data.guests}, ${data.date} at ${data.time}`:type==='form'?`${data.class} · ${data.experience}`:data.service;
        const feedback=form.querySelector('.form-feedback');
        feedback.textContent=`Request preview ready for ${data.name}: ${summary}. In a live website, this would continue to the business’s agreed inquiry or booking service. Nothing has been sent or booked.`;
        feedback.focus();
      });
    });
    
    const inquiry=document.querySelector('[data-inquiry]');
    if(inquiry) {
      const feedback=inquiry.querySelector('.form-feedback');
      const output=inquiry.querySelector('.brief-output');
      const briefArea=output.querySelector('textarea');
      let brief='';
      const query=new URLSearchParams(location.search);
      const serviceNames={website:'Business website','follow-up':'Inquiry follow-up','missed-calls':'Missed-call text replies',reviews:'Review requests',seo:'On-page SEO'};
      const exampleNames={'olive-and-ember':'Olive & Ember','current-electric':'Current Electric','form-studio':'Form Studio','clearflow-plumbing':'Clearflow Plumbing','ridgeline-roofing':'Ridgeline Roofing'};
      const interest=serviceNames[query.get('interest')]||exampleNames[query.get('example')];
      if(interest){const context=inquiry.querySelector('[data-inquiry-context]');if(context){context.hidden=false;context.textContent=`You’re asking about: ${interest}`;inquiry.querySelector('[name="interest"]').value=interest;}}
      const announce=message=>{feedback.textContent=message;feedback.focus();};
      inquiry.addEventListener('submit',async event=>{
        event.preventDefault();
        if(!inquiry.reportValidity())return;
        const data=Object.fromEntries(new FormData(inquiry));
        const labels={name:'Name',business:'Business',email:'Email',phone:'Phone',businessType:'Business type',website:'Current website',need:'Looking for',message:'Additional notes',interest:'Interested in'};
        brief='Website inquiry for SkipManual\n\n'+Object.entries(data).filter(([,value])=>String(value).trim()).map(([key,value])=>`${labels[key]||key}: ${String(value).trim()}`).join('\n')+'\n\nBase website package: $249/month. Scope and terms to be agreed.';
        briefArea.value=brief;
        const endpoint=inquiry.dataset.endpoint;
        const email=inquiry.dataset.email;
        if(!endpoint) {
          output.hidden=false;
          if(email) {
            let emailLink=output.querySelector('[data-email-link]');
            if(!emailLink) {emailLink=document.createElement('a');emailLink.className='button';emailLink.dataset.emailLink='';emailLink.textContent='Open email draft';output.querySelector('.actions').prepend(emailLink);}
            emailLink.href=`mailto:${email}?subject=${encodeURIComponent(`Website inquiry — ${data.business}`)}&body=${encodeURIComponent(brief)}`;
            announce('Your brief is ready. Open the email draft below, then send it from your email application. Nothing has been sent yet.');
          } else announce('Your brief is ready to copy or save. Online inquiries aren’t open yet, so nothing has been sent.');
          return;
        }
        const submit=inquiry.querySelector('[type="submit"]');
        const previous=submit.innerHTML;
        submit.disabled=true;submit.textContent='Sending…';inquiry.setAttribute('aria-busy','true');
        try {
          const response=await fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({...data,source:'skipmanual-website'}),signal:AbortSignal.timeout(15000)});
          if(!response.ok)throw new Error('not-accepted');
          // The endpoint contract requires explicit acceptance, not merely a successful page response.
          const result=await response.json();
          if(result.success!==true)throw new Error('not-confirmed');
          output.hidden=true;inquiry.reset();announce('Your inquiry has been sent. Thank you for telling us about your business.');
        } catch {
          output.hidden=false;
          announce('We couldn’t confirm that your inquiry was sent. Your details are still here. Please try again, or save your brief below.');
        } finally {submit.disabled=false;submit.innerHTML=previous;inquiry.removeAttribute('aria-busy');}
      });
      inquiry.querySelector('[data-copy]').addEventListener('click',async()=>{
        try {await navigator.clipboard.writeText(brief);announce('Brief copied. Nothing has been sent.');}
        catch {briefArea.focus();briefArea.select();announce('Automatic copying is unavailable. Select and copy the brief from the text box.');}
      });
      inquiry.querySelector('[data-download]').addEventListener('click',()=>{
        const url=URL.createObjectURL(new Blob([brief],{type:'text/plain;charset=utf-8'}));
        const link=document.createElement('a');link.href=url;link.download='skipmanual-website-brief.txt';document.body.append(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);
        announce('Your brief download is ready. Nothing has been sent.');
      });
    }
    
    // Keep forms inert without JavaScript; a default GET must never put entered details into a URL.
    document.querySelectorAll('[data-js-submit]').forEach(button=>{button.disabled=false;});
    ✓ • 133ms

## Activity

    $ npm run build
    
    > skipmanual@1.0.0 build
    > node scripts/build.mjs
    
    Built 72 static pages in dist/. No production dependencies or client framework.
    Public origin is unconfigured: canonical URLs and sitemap will be generated when PUBLIC_SITE_URL is set.
    Contact is in honest brief-only mode. Set a verified contact email or endpoint to enable inquiries.
    ✓ • 1.11s

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\redesign\hero-1440.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\redesign\hero-390.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\redesign\_book_-390.png

## Activity

    $ Get-Content -Encoding utf8 src/pages/example-expansion.mjs -TotalCount 135; Get-Content -Encoding utf8 src/pages/demos.mjs -TotalCount 65; Get-Content -Encoding utf8 src/components/photos.mjs; Get-Content -Encoding utf8 src/pages/agency-redesign.mjs -Tail 26; Get-Content -Encoding utf8 src/styles/example-expansion.css -TotalCount 24
    import {exampleContent,photoLibrary} from '../data/example-content.mjs';
    import {icon,escape,faqList} from '../components/ui.mjs';
    import {photo} from '../components/photos.mjs';
    
    const href=(e,route='')=>`/demos/${e.slug}/${route?route+'/':''}`;
    const contactRoute=e=>e.theme==='olive'?'book-a-table':e.theme==='form'?'find-your-class':e.theme==='current'?'request-a-quote':e.theme==='clearflow'?'request-a-visit':'request-an-assessment';
    const requestLink=(e,p={})=>`${href(e,p.target||contactRoute(e))}${p.context?'?'+new URLSearchParams({[e.theme==='form'?'class':e.theme==='olive'?'occasion':'service']:p.context}):''}`;
    
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
    import {extraRoutes,allPagesNavigation,exampleHomeExtension,expandedNavigation} from './example-expansion.mjs';
    import {photo} from '../components/photos.mjs';
    import { tradeRoutes } from './trades.mjs';
    import { examples } from '../data/examples.mjs';
    import { icon, escape, faqList } from '../components/ui.mjs';
    
    const config = {
      clearflow: { links:[['Plumbing services','services'],['Water heaters','water-heaters']], action:'Request a visit', contact:'request-a-visit', footer:'A little help. A home that works.' },
      ridgeline: { links:[['Roofing services','roofing'],['Repair or replace?','repair-or-replace']], action:'Request an assessment', contact:'request-an-assessment', footer:'Good homes. Sound roofs. A considered next step.' },
      olive: { links:[['Menu','menu'],['Our story','our-story']], action:'A table for you', contact:'book-a-table', signature:'Seasonal food. Shared moments.', footer:'Good food. Unhurried evenings. A place at the table.' },
      current: { links:[['Our services','services'],['Lighting & upgrades','lighting']], action:'Request a quote', contact:'request-a-quote', signature:'Thoughtful work. A brighter home.', footer:'Considered electrical work for the place you call home.' },
      form: { links:[['Classes','classes'],['The studio','the-studio']], action:'Find your class', contact:'find-your-class', signature:'Space to move. Room to be yourself.', footer:'Mindful movement. A stronger connection to yourself.' },
    };
    const dlink = (e, label, route='', cls='demo-button', parameters={}) => {
      const query=new URLSearchParams(parameters).toString();
      return `<a class="${cls}" href="/demos/${e.slug}/${route ? `${route}/` : ''}${query ? `?${escape(query)}` : ''}">${label}${icon('diagonal')}</a>`;
    };
    const dimage = (src,alt,cls='',eager=false) => photo(src,{alt,cls,eager});
    const dkicker = s => `<p class="demo-kicker">${s}</p>`;
    
    function shell(e, page, content) {
      const c = config[e.theme];
      const nav = c.links.map(([label,path])=>`<a href="/demos/${e.slug}/${path}/" ${page===path ? 'aria-current="page"' : ''}>${label}</a>`).join('');
      return `<a class="skip-link" href="#demo-main">Skip to website content</a><aside class="demo-banner" aria-label="Example website notice"><div><span class="demo-pill">EXAMPLE WEBSITE</span><span>Fictional business. Real design possibilities.</span></div><div><a href="/examples/${e.slug}/">Back to concept</a><a href="/book/?example=${e.slug}">Want one like this? ${icon('arrow')}</a></div></aside><div class="demo-shell theme-${e.theme}"><header class="demo-header demo-container"><a class="demo-brand" href="/demos/${e.slug}/">${e.theme==='current' ? icon('bolt') : e.theme==='clearflow' ? icon('water') : e.theme==='ridgeline' ? icon('roof') : ''}${escape(e.name)}${e.theme==='form' ? '<sup></sup>' : ''}</a><nav class="demo-nav" aria-label="Example website navigation">${nav}${allPagesNavigation(e,page)}${dlink(e,c.action,c.contact)}</nav><details class="demo-mobile"><summary>Menu</summary><nav aria-label="Example mobile navigation">${e.routes.map((route,i)=>`<a href="/demos/${e.slug}/${route?route+'/':''}" ${page===route?'aria-current="page"':''}>${e.pages[i]}</a>`).join('')}</nav></details></header><div id="demo-main">${expandedNavigation(e)}${content}</div><footer class="demo-footer"><div class="demo-container"><div class="demo-footer-top"><div><a class="demo-brand" href="/demos/${e.slug}/">${escape(e.name)}</a><p>${c.footer}</p></div><nav aria-label="Example footer navigation">${e.routes.map((route,i)=>`<a href="/demos/${e.slug}/${route?route+'/':''}">${e.pages[i]}</a>`).join('')}</nav></div><div class="demo-footer-bottom"><span>A fictional ${e.category.toLowerCase()} concept by SkipManual.</span><a href="/examples/${e.slug}/">About this example ${icon('arrow')}</a></div></div></footer><nav class="example-mobile-action" aria-label="Quick website actions"><a href="/demos/${e.slug}/questions/">Questions?</a>${dlink(e,c.action,c.contact)}</nav></div>`;
    }
    
    function oliveHome(e) { return `<section class="olive-hero">${dimage('restaurant','Seasonal food, carefully plated for a restaurant meal','',true)}<div class="olive-hero-copy">${dkicker('A neighborhood table. A seasonal kitchen.')}<h1>Good food.<br><em>Great company.</em></h1><p>For a slow supper, a long catch-up,<br>and the simple pleasure of eating well.</p>${dlink(e,'Come hungry. Stay a while.','menu')}</div><span class="olive-hero-foot">OLIVE &amp; EMBER &nbsp; / &nbsp; THE SEASONAL TABLE</span></section><div class="demo-ribbon"><span>Seasonal by nature.</span><span>Generous by choice.</span><span>Best enjoyed together.</span></div><section class="demo-section demo-container olive-intro"><div>${dkicker('From the kitchen')}<h2>A little fire.<br>A lot of <em>feeling.</em></h2></div><div><p>Bright produce. Deep, slow-cooked flavors. A menu that lets good ingredients do what they do best.</p><p>Start with something to share. Find a new favorite. Leave a little room for dessert. There’s no need to rush.</p>${dlink(e,'Explore the menu','menu','demo-text-link')}</div></section><section class="olive-feature demo-container"><div>${dimage('interior','Warm restaurant dining room with wooden tables and pendant lighting')}</div><div>${dkicker('Make an evening of it')}<h2>The kind of place<br>you settle <em>into.</em></h2><p>Pull up a chair. Order another small plate. Let the conversation wander. The best thing on the table might just be the company.</p>${dlink(e,'A little about us','our-story','demo-text-link')}</div></section><section class="demo-section demo-container"><div class="demo-section-head">${dkicker('A taste of the season')}<h2>Worth gathering <em>around.</em></h2></div><div class="dish-grid"><article><span>TO BEGIN</span><h3>Whipped ricotta</h3><p>Roasted grapes, thyme honey, grilled sourdough.</p></article><article><span>FROM THE FIRE</span><h3>Charred market vegetables</h3><p>White bean purée, green herb dressing, toasted seeds.</p></article><article><span>SOMETHING SWEET</span><h3>Olive oil cake</h3><p>Citrus curd, crème fraîche, candied peel.</p></article></div>${dlink(e,'See the full menu','menu','demo-text-link')}</section><section class="demo-closing"><div class="demo-container">${dkicker('There’s a place for you here')}<h2>Let’s make<br>an <em>evening of it.</em></h2>${dlink(e,'Find a table','book-a-table')}</div></section>`; }
    
    const menus = [
      ['To begin', [['Whipped ricotta','Roasted grapes, thyme honey, grilled sourdough','12'],['Little gem salad','Buttermilk dressing, shaved radish, sourdough crumb','11'],['Warm marinated olives','Orange peel, rosemary, a little chili','7']]],
      ['From the kitchen', [['Charred market vegetables','White bean purée, green herbs, toasted seeds','22'],['Roasted chicken','Creamy polenta, wilted greens, pan jus','27'],['Mushroom pappardelle','Roasted mushrooms, pecorino, fresh parsley','24'],['Seared seasonal fish','Braised fennel, lemon, caper butter','29']]],
      ['Something sweet', [['Olive oil cake','Citrus curd, crème fraîche, candied peel','10'],['Dark chocolate crémeux','Sea salt, hazelnut, cultured cream','11'],['Seasonal sorbet','Two scoops of something bright','7']]],
    ];
    function oliveMenu(e) { return `<section class="demo-page-hero demo-container">${dkicker('The seasonal menu')}<h1>Good things,<br><em>in their own time.</em></h1><p>A little to share. Something to savor.<br>See what’s coming from the kitchen.</p></section><section class="demo-container menu-layout"><nav class="menu-index" aria-label="Menu sections">${menus.map(([n],i)=>`<a href="#menu-${i}">${n}</a>`).join('')}</nav><div>${menus.map(([name,items],i)=>`<section class="menu-category" id="menu-${i}">${photo(['seasonal-plate','restaurant','dessert'][i],{cls:'menu-category-photo'})}<h2>${name}</h2>${items.map(([n,d,p])=>`<article class="menu-dish"><div><h3>${n}</h3><p>${d}</p></div><span>$${p}</span></article>`).join('')}</section>`).join('')}<p class="demo-fine">Illustrative menu and prices for this fictional example. Dietary and allergen information would be confirmed by the real restaurant.</p></div></section><section class="demo-closing"><div class="demo-container"><h2>Better with <em>company.</em></h2>${dlink(e,'Find a table','book-a-table')}</div></section>`; }
    
    function oliveStory(e) { return `<section class="demo-page-hero demo-container">${dkicker('The thought behind the table')}<h1>Food brings us in.<br><em>People make us stay.</em></h1></section><div class="demo-container demo-wide-image">${dimage('interior','Inviting restaurant dining room with warm lighting','',true)}</div><section class="demo-section demo-container olive-intro"><h2>A neighborhood<br><em>state of mind.</em></h2><div><p>Olive &amp; Ember is a concept built around one simple pleasure: sitting down to a good meal with people you want to spend time with.</p><p>The kitchen follows the season. The room makes space for a quick bite or an unhurried evening. The food is generous, familiar in the best way, and full of little details worth noticing.</p><p>No occasion required. Just an appetite.</p></div></section><section class="demo-container dish-grid story-values"><article><h3>Follow the season.</h3><p>Let what’s fresh guide what goes on the plate.</p></article><article><h3>Keep it generous.</h3><p>Food made for passing around and trying a little of everything.</p></article><article><h3>Make room.</h3><p>For familiar faces, new conversations, and one more course.</p></article></section><section class="demo-closing"><div class="demo-container"><h2>Pull up <em>a chair.</em></h2>${dlink(e,'Explore the menu','menu')}</div></section>`; }
    
    const services = [
     ['01','Lighting & upgrades','From a more useful kitchen to a warmer evening glow. Thoughtful lighting for how you actually live.','lighting'],
     ['02','Repairs & fault finding','For the switch that stopped working, the outlet that needs attention, or the problem you can’t quite explain.','repairs'],
     ['03','Installations & additions','New fixtures, additional outlets, and practical improvements that make your home work better for you.','installations'],
     ['04','Renovation electrical','Plan the electrical side of a refreshed room around the way the space will be used.','renovations'],
    ];
    function currentHome(e) { return `<section class="demo-container current-hero"><div>${dkicker('Residential electrical. Clearly considered.')}<h1>Good energy.<br>Expertly wired<span>.</span></h1><p>From the lights you live by to the outlets you rely on. Practical electrical work, explained in plain language.</p>${dlink(e,'Let’s talk about your project','request-a-quote')}<p class="current-hero-note">Your home. Your questions. A clear next step.</p></div><div class="current-hero-image">${dimage('electrician','Electrical professional working on a wiring installation','',true)}<span>${icon('bolt')}Make your home work better.</span></div></section><div class="current-strip"><div class="demo-container"><span>${icon('home')}Work around your home</span><span>${icon('layout')}Options explained clearly</span><span>${icon('cursor')}A straightforward next step</span></div></div><section class="demo-section demo-container"><div class="demo-section-head split"><div>${dkicker('How we can help')}<h2>The small fixes.<br>The bigger plans.</h2></div><p>Whatever brought you here, start with the job.<br>We’ll help make the next step clear.</p></div><div class="electrical-services">${services.slice(0,3).map(([n,h,p,r])=>`<article><span>${n} /</span><h3>${h}</h3><p>${p}</p>${dlink(e,'Explore this service',r,'demo-text-link')}</article>`).join('')}</div></section><section class="current-process"><div class="demo-container demo-section"><div>${dkicker('Let’s keep it simple')}<h2>Less guesswork.<br>More getting it sorted.</h2></div><ol><li><span>01</span><div><h3>Tell us what’s going on.</h3><p>A small repair, a new idea, or a full renovation. Start with what you know.</p></div></li><li><span>02</span><div><h3>Understand your options.</h3><p>The scope, practical choices, and next steps should be clear before any work.</p></div></li><li><span>03</span><div><h3>Make a plan for the work.</h3><p>Agree on what needs doing and how it fits around your home.</p></div></li></ol></div></section><section class="demo-section demo-container current-faq"><h2>A little clarity<br>goes a long way.</h2>${faqList([{q:'What should I include in my request?',a:'Describe the issue or project, the room involved, and what you would like to change. You do not need to know the technical name.'},{q:'Can I ask about more than one job?',a:'Yes. Include the different tasks in one request so they can be considered together.'},{q:'Does this example accept real electrical jobs?',a:'No. Current Electric is a fictional website concept. The request form demonstrates an inquiry flow only.'}])}</section><section class="demo-closing"><div class="demo-container"><h2>Let’s shed some light<br>on your next project.</h2>${dlink(e,'Start a project request','request-a-quote')}</div></section>`; }
    function currentServices(e) { return `<section class="demo-page-hero demo-container">${dkicker('Residential electrical services')}<h1>A more comfortable home.<br>A brighter <span>everyday.</span></h1><p>Practical improvements and thoughtful repairs.<br>Find the work that fits what you need.</p></section><section class="demo-container electrical-service-list">${services.map(([n,h,p,r])=>`<article><span>${n}</span><h2>${h}</h2><div><p>${p}</p>${dlink(e,'Explore this service',r,'demo-text-link')}</div></article>`).join('')}</section><section class="demo-closing"><div class="demo-container"><h2>Not sure what to call it?<br>Just tell us what it does.</h2>${dlink(e,'Describe your project','request-a-quote')}</div></section>`; }
    function currentLighting(e) { return `<section class="demo-page-hero demo-container">${dkicker('Services / Lighting & upgrades')}<h1>See your home<br>in a better <span>light.</span></h1><p>Useful where you work. Softer where you unwind.<br>Lighting that fits the way your home feels.</p></section><section class="demo-container current-lighting"><div>${dimage('living-room','A living room arranged around natural light and practical lighting','',true)}</div><div><h2>The right light<br>changes a room.</h2><p>A kitchen that needs brighter task lighting. A hallway that feels too dim. A living room that could use a more welcoming glow. Start with the way you use the space.</p><ul><li>Interior fixture replacements</li><li>Task and accent lighting</li><li>Dimmer and switch updates</li><li>Lighting plans for renovated rooms</li></ul>${dlink(e,'Talk about your lighting','request-a-quote','demo-button',{service:'Lighting & upgrades'})}</div></section><section class="demo-section demo-container"><div class="demo-section-head"><h2>A few helpful things to know.</h2></div><div class="electrical-services"><article><span>01 /</span><h3>The room</h3><p>Where do you need a change, and what do you use that space for?</p></article><article><span>02 /</span><h3>The feeling</h3><p>Brighter, warmer, easier to adjust? Describe what is missing.</p></article><article><span>03 /</span><h3>The fixture</h3><p>Share whether you have chosen a light or want to discuss options.</p></article></div></section>`; }
    
    const classes = [
     {name:'Foundations',type:'Start here',level:'Beginner',text:'Get comfortable with the essentials. A steady, welcoming class with time to understand each movement.',duration:'50 minutes'},
     {name:'Everyday Flow',type:'Find your rhythm',level:'Open level',text:'A balanced full-body session that connects strength, control, and a little more ease.',duration:'50 minutes'},
     {name:'Strength & Length',type:'Build from within',level:'Experienced',text:'A more focused challenge, bringing thoughtful resistance and controlled movement together.',duration:'55 minutes'},
    ];
    const schedule = [['Monday','07:00','Everyday Flow','Open level'],['Monday','18:00','Foundations','Beginner'],['Wednesday','09:00','Foundations','Beginner'],['Wednesday','18:30','Strength & Length','Experienced'],['Friday','07:30','Everyday Flow','Open level'],['Friday','12:00','Foundations','Beginner'],['Saturday','09:00','Everyday Flow','Open level'],['Saturday','10:30','Strength & Length','Experienced']];
    function formHome(e) { return `<section class="demo-container form-hero"><div>${dkicker('Mindful movement. Everyday strength.')}<h1>A little movement.<br><em>A lot more you.</em></h1><p>A Pilates practice with room for where you are.<br>Find your strength, your rhythm, and a little space<br>just for yourself.</p>${dlink(e,'Find your first class','classes')}<span class="form-hero-caption">COME AS YOU ARE. MOVE FROM THERE.</span></div><div class="form-hero-image">${dimage('pilates','Studio movement session in soft natural light','',true)}<span>make space<br><em>for yourself.</em></span></div></section><div class="form-ribbon"><span>Move with intention.</span><span>Build from within.</span><span>Feel more like you.</span></div><section class="demo-section demo-container form-intro">${dkicker('A different kind of energy')}<h2>Less keeping up.<br>More <em>tuning in.</em></h2><p>You don’t need to be flexible. You don’t need to know the moves. Start where you are, pay attention to how you feel, and build a practice that belongs to you.</p>${dlink(e,'Meet the studio','the-studio','demo-text-link')}</section><section class="demo-section demo-container" style="padding-top:0"><div class="demo-section-head split"><div>${dkicker('Find your way to move')}<h2>Your pace.<br><em>Your practice.</em></h2></div>${dlink(e,'Explore all classes','classes','demo-text-link')}</div><div class="class-grid">${classes.map((c,i)=>`<article><span class="class-symbol symbol-${i}" aria-hidden="true">${['◒','◌','✳'][i]}</span>${dkicker(c.type)}<h3>${c.name}</h3><p>${c.text}</p><div class="class-meta"><span>${c.duration}</span><span>${c.level}</span></div>${dlink(e,'Try this class','find-your-class','demo-text-link',{class:c.name})}</article>`).join('')}</div></section><section class="demo-closing"><div class="demo-container">${dkicker('A little time, just for you')}<h2>Your first class.<br><em>A fresh place to start.</em></h2>${dlink(e,'Let’s find your class','find-your-class')}</div></section>`; }
    function formClasses(e) { return `<section class="demo-page-hero demo-container">${dkicker('The classes')}<h1>Find your rhythm.<br><em>Make it your own.</em></h1><p>Different starting points. The same intention.<br>Movement that meets you where you are.</p></section><section class="demo-container class-grid">${classes.map((c,i)=>`<article><span class="class-symbol symbol-${i}" aria-hidden="true">${['◒','◌','✳'][i]}</span>${dkicker(c.level)}<h2>${c.name}</h2><p>${c.text}</p><div class="class-meta"><span>${c.duration}</span><span>${c.level}</span></div>${dlink(e,'Try this class','find-your-class','demo-text-link',{class:c.name})}</article>`).join('')}</section><section class="demo-section demo-container"><div class="demo-section-head"><div>${dkicker('A week at Form')}<h2>A little space<br>in <em>your schedule.</em></h2></div></div><p class="demo-fine" style="margin-bottom:1.5rem">Illustrative class schedule. This fictional studio does not accept real bookings.</p><div class="schedule-filters" role="group" aria-label="Filter schedule by day">${['All days','Monday','Wednesday','Friday','Saturday'].map((d,i)=>`<button type="button" data-day="${i===0?'all':d}" aria-pressed="${i===0}">${d}</button>`).join('')}</div><div class="schedule-list">${schedule.map(([d,t,c,l])=>`<article data-class-day="${d}"><span>${d}<strong>${t}</strong></span><h3>${c}<small>${l}</small></h3>${dlink(e,'Find a place','find-your-class','demo-text-link',{class:c})}</article>`).join('')}</div><p class="sr-only" data-schedule-status role="status" aria-live="polite"></p></section>`; }
    function formStudio(e) { return `<section class="demo-page-hero demo-container">${dkicker('The studio')}<h1>A softer landing.<br><em>A stronger you.</em></h1><p>Space to notice how you move.<br>Encouragement to see what’s possible.</p></section><section class="demo-container studio-story"><div>${dimage('pilates','Mindful movement in a bright studio','',true)}</div><div><h2>Come as you are.<br><em>Really.</em></h2><p>Form is a studio concept for people who want to feel more at home in their bodies. A place where progress doesn’t need to be loud, and a first class doesn’t need to feel intimidating.</p><p>The practice is thoughtful. The atmosphere is warm. The goal is to leave feeling a little more connected than when you arrived.</p>${dlink(e,'Find your starting point','classes')}</div></section><section class="demo-section demo-container current-faq"><h2>Your first visit,<br><em>with a little less unknown.</em></h2>${faqList([{q:'I have never tried Pilates. Where would I start?',a:'Foundations is the introductory class in this example. It is designed around a steady pace and time to become familiar with the movements.'},{q:'What would I bring to a class?',a:'Comfortable clothes you can move in and a water bottle are a useful start. A real studio would confirm any equipment or grip-sock requirements before your visit.'},{q:'Can I book a real class here?',a:'No. Form Studio is a fictional concept created by SkipManual. You can explore the class request form to see how the experience works.'}])}</section>`; }
    
    function demoContact(e) {
      const theme = e.theme;
      const isOlive = theme==='olive', isForm = theme==='form';
      const title = isOlive ? 'An evening<br><em>worth making time for.</em>' : isForm ? 'A first step.<br><em>At your own pace.</em>' : 'Tell us what<br>needs a <span>little attention.</span>';
      const fields = isOlive ? `<div class="field full"><label for="demo-occasion">Occasion <span>(optional)</span></label><input id="demo-occasion" name="occasion" maxlength="160" placeholder="Dinner, a birthday, or a group gathering"></div><div class="field"><label for="demo-date">Preferred date *</label><input id="demo-date" name="date" type="date" required></div><div class="field"><label for="demo-guests">Your table *</label><select id="demo-guests" name="guests" required><option value="">Choose party size</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5–6 guests</option></select></div><div class="field full"><label for="demo-time">Preferred time *</label><select id="demo-time" name="time" required><option value="">Choose a time</option><option>17:30</option><option>18:30</option><option>19:30</option><option>20:30</option></select></div>` : isForm ? `<div class="field full"><label for="demo-class">A class that feels right *</label><select id="demo-class" name="class" required><option value="">Choose a class</option><option>Foundations</option><option>Everyday Flow</option><option>Strength &amp; Length</option><option>Help me choose</option></select></div><div class="field full"><label for="demo-experience">Your Pilates experience *</label><select id="demo-experience" name="experience" required><option value="">Choose what fits</option><option>This would be my first class</option><option>I have tried a few classes</option><option>I have a regular practice</option></select></div>` : `<div class="field full"><label for="demo-service">What can we help with? *</label><select id="demo-service" name="service" required><option value="">Choose a service</option><option>Lighting &amp; upgrades</option><option>Repairs &amp; fault finding</option><option>Installations &amp; additions</option><option>Renovation electrical</option><option>I’m not sure yet</option></select></div><div class="field full"><label for="demo-project">Describe your project *</label><textarea id="demo-project" name="project" required maxlength="2000" placeholder="For example: better lighting in the kitchen."></textarea></div>`;
      return `<section class="demo-page-hero demo-container">${dkicker(isOlive?'A table for you':isForm?'Find your class':'Let’s talk about your project')}<h1>${title}</h1></section><section class="demo-container demo-contact"><div><h2>${isOlive ? 'Bring an appetite.<br>We’ll set the scene.' : isForm ? 'Find a little<br>space for yourself.' : 'Start with what<br>you know.'}</h2><p>${isOlive ? 'Choose a date, a time, and the people you want to share a table with.' : isForm ? 'Let us know where you are starting. This request flow is designed to help you find the right class.' : 'You don’t need the technical words. Tell us what is happening, or what you would like to change.'}</p><aside class="demo-disclosure"><strong>This is an example website.</strong><p>${isOlive ? 'No table will be reserved.' : isForm ? 'No class will be booked.' : 'No electrical work will be requested.'} This is a fictional business. Please use sample details; the form does not send or store information.</p></aside></div><form class="demo-request-form" data-demo-form data-demo-type="${theme}"><p class="form-intro">Explore the ${isOlive ? 'table request' : isForm ? 'class request' : 'project inquiry'} experience. * Required.</p><div class="form-grid"><div class="field full"><label for="demo-name">Sample name *</label><input id="demo-name" name="name" required maxlength="100" placeholder="Alex Example"></div>${fields}</div><button class="demo-button" type="submit" data-js-submit disabled>Preview ${isOlive ? 'table request' : isForm ? 'class request' : 'project request'}${icon('arrow')}</button><p class="form-feedback" role="status" aria-live="polite" tabindex="-1"></p><noscript><p>JavaScript is needed to preview this example interaction. No information is sent.</p></noscript></form></section>`;
    }
    
    import {photoLibrary} from '../data/example-content.mjs';
    import {escape} from './ui.mjs';
    import dimensions from '../data/photo-dimensions.json' with {type:'json'};
    
    export function photo(name,{eager=false,cls='',alt='',sizes='(max-width: 760px) 100vw, 50vw'}={}) {
      const label=alt||photoLibrary[name]?.[0]||'';
      const size=dimensions[name]||{width:1400,height:934};
      return `<img class="${cls}" src="/images/${name}.webp" srcset="/images/${name}-640.webp 640w, /images/${name}-960.webp 960w, /images/${name}.webp ${size.width}w" sizes="${sizes}" alt="${escape(label)}" width="${size.width}" height="${size.height}" ${eager?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;
    }
    export function redesignedHome() {return `<section class="home-hero human-hero container"><div class="human-hero-copy">${eyebrow('Websites & customer follow-up for local businesses')}<h1>We build your website.<br><span>You get back<br>to business.</span></h1><p>A professional website that shows what you do, makes you easy to contact, and helps you follow up with customers.</p><div class="hero-offer"><strong>$249<span>/month</span></strong><p>10–20 pages. All five services.<br>One package for your business.</p></div><div class="actions">${button('Let’s talk about your website','/book/')}${textLink('See website examples','/examples/')}</div><p class="hero-reassurance">${icon('check')}No technical knowledge needed. We’ll guide you.</p></div><div class="business-mosaic"><a class="mosaic-main" href="/demos/current-electric/">${photo('electrician',{eager:true})}<span>For the people<br>who get things done.${icon('diagonal')}</span></a><a class="mosaic-food" href="/demos/olive-and-ember/">${photo('gathering')}<span>Restaurants & cafés${icon('diagonal')}</span></a><a class="mosaic-studio" href="/demos/form-studio/">${photo('pilates')}<span>Studios & local services${icon('diagonal')}</span></a></div></section>
    <section class="industry-access container" aria-label="Find a website for your business"><p>Find an example<br><strong>for your kind of business.</strong></p>${examples.map(e=>`<a href="/demos/${e.slug}/">${e.category}${icon('arrow')}</a>`).join('')}</section>
    <section class="section container plain-offer"><div>${eyebrow('What do you actually get?')}<h2>A better website.<br>And help with<br>what happens next.</h2><p class="lead">People find you. They get in touch. Life gets busy. We bring the website and the follow-up together so the next step is clearer.</p>${textLink('Everything in the $249 package','/services/')}</div><div class="plain-service-list">${packageServices.map((s,i)=>`<a href="/services/${serviceDetails[s.id].route}/"><span>0${i+1}</span><div><h3>${serviceDetails[s.id].simple}</h3><p>${s.short}</p></div>${icon('arrow')}</a>`).join('')}</div></section>
    <section class="section work-section"><div class="container"><div class="section-head"><div>${eyebrow('See what your website could be')}<h2>Real pages to explore.<br>Ideas for your business.</h2></div><p>Open the websites. Browse the services, photos, and forms. Each is an original example for a fictional business.</p></div><div class="work-grid">${examples.map(directWorkCard).join('')}</div></div></section>
    ${scenarioSection()}${simpleProcess()}<section class="section container agency-price-section"><div class="price-grid"><div>${eyebrow('One clear starting point')}<h2>Your website.<br>Your follow-up.<br><span class="accent">$249 a month.</span></h2><p class="lead">A 10–20 page website, inquiry follow-up, missed-call text replies, review requests, and on-page SEO.</p><p>We explain the scope, any extra costs, and full terms before you decide.</p>${textLink('Read the pricing details','/pricing/')}</div>${priceCard()}</div></section><section class="section container border-top"><div class="faq-layout"><div>${eyebrow('Before you get started')}<h2>A few things you<br>might be wondering.</h2>${textLink('All common questions','/faq/')}</div>${faqList([faqs[1],faqs[2],faqs[5],faqs[13]])}</div></section>${cta('Tell us about your business.<br>We’ll talk through the rest.')}`;}
    
    export function redesignedServices(){return `${pageHero('All included. $249/month.','Your website.<br>And the follow-through.','Five practical services that help people understand your business, get in touch, and keep the conversation going.')}<nav class="container service-jump" aria-label="Jump to a service">${packageServices.map(s=>`<a href="#${s.id}">${s.name}${icon('arrow')}</a>`).join('')}</nav><section class="container service-stories">${packageServices.map((s,i)=>{const d=serviceDetails[s.id];return `<article id="${s.id}"><div class="service-story-photo">${photo(d.image)}</div><div><p class="eyebrow">0${i+1} / ${s.name}</p><h2>${d.simple}</h2><p>${s.description}</p><ul>${s.points.map(point=>`<li>${point}</li>`).join('')}</ul><div class="service-example"><strong>In everyday terms</strong><p>${s.example}</p></div>${textLink('See how it works',`/services/${d.route}/`)}</div></article>`;}).join('')}</section>${scenarioSection()}${cta('A little less on your plate.<br>A clear next step for your customers.')}`;}
    
    function serviceDetail(s){const d=serviceDetails[s.id];const e=examples.find(e=>e.slug===d.related);return `<nav class="container agency-breadcrumb" aria-label="Breadcrumb"><a href="/services/">What’s included</a><span>/</span><span>${s.name}</span></nav><section class="container service-detail-hero"><div>${eyebrow('Included in the $249/month package')}<h1>${d.heading}</h1><p class="lead">${d.intro}</p>${button('Talk about your business',`/book/?interest=${s.id}`)}</div>${photo(d.image,{eager:true})}</section><section class="section container service-detail-content"><div>${d.sections.map(([title,text])=>`<article><h2>${title}</h2><p>${text}</p></article>`).join('')}</div><aside><h2>What’s included</h2><ul>${s.points.map(point=>`<li>${point}</li>`).join('')}</ul><div class="service-example"><strong>For example</strong><p>${d.example}</p></div><p class="small">Part of the $249/month package. Full scope and terms agreed before you commit.</p>${button('Get started','/book/')}</aside></section><section class="section container related-example"><div>${eyebrow('See a complete business website')}<h2>${e.name}</h2><p>${e.description}</p>${button('Open the website',`/demos/${e.slug}/`,'outline')}</div><a href="/demos/${e.slug}/" aria-label="Explore ${escape(e.name)}">${preview(e)}</a></section><section class="section container border-top"><h2>The rest of your package.</h2><div class="other-services">${packageServices.filter(other=>other.id!==s.id).map(other=>`<a href="/services/${serviceDetails[other.id].route}/">${other.name}${icon('arrow')}</a>`).join('')}</div></section>${cta()}`;}
    
    export function howItWorks(){return `${pageHero('How it works','A website project.<br>Without the guesswork.','You know your business. We guide the website decisions, explain the steps, and show you the work before launch.')}<section class="container how-photo">${photo('cafe',{eager:true,sizes:'100vw'})}<div><h2>You don’t need<br>to have it all figured out.</h2><p>A few details about your business are enough to start the conversation.</p></div></section><section class="section container full-process">${[['A conversation about your business.','Tell us what you do, who you serve, and how customers usually get in touch. Share an existing website if you have one, or an example you like. We discuss fit, the package, and the details you need before deciding.','Bring: your business name, main services, and the result you want from the website.'],['A plan for your pages and content.','We map the 10–20 pages around your services and customer questions. We discuss photos, wording, contact options, and what verified business information needs to be included.','We agree: pages, functionality, content responsibilities, and the project scope.'],['A design you can review.','We build a visual direction around your business and share the work for review. You can see how the pages connect, how they read on a phone, and how a visitor gets in touch.','You review: the design, service information, photographs, and inquiry path.'],['Follow-up that fits the way you work.','We plan inquiry replies, missed-call texts, review invitations, and the handoff to you. Message wording, timing, platform arrangements, usage, and responsibilities are made clear.','We confirm: how the messages work and when you take over the conversation.'],['Checks, launch, and a clear handover.','We check the pages, forms, navigation, mobile layout, and basic search information. The final domain, contact destinations, publishing arrangements, and ongoing responsibilities are confirmed before launch.','You receive: a website you have reviewed and clarity about what happens next.']].map(([heading,text,note],i)=>`<article><span>0${i+1}</span><div><h2>${heading}</h2><p>${text}</p><p class="process-note">${note}</p></div></article>`).join('')}</section>${cta('Start with what you know.<br>We’ll help with the website part.')}`;}
    
    export function inquiryForm({booking=false}={}){
      const connected=Boolean(site.contactEndpoint||site.email);
      return `<form class="inquiry-form simple-inquiry" data-inquiry data-endpoint="${escape(site.contactEndpoint)}" data-email="${escape(site.email)}"><h2>${booking?'Tell us a little first.':'Tell us about your business.'}</h2><p class="form-intro">The essentials are enough to start. * Required.</p>${!connected?'<div class="form-availability"><strong>Online inquiries are not connected yet.</strong><p>You can prepare and save your request here. Nothing will be sent or booked.</p></div>':''}<div class="form-grid"><div class="field"><label for="name">Your name *</label><input id="name" name="name" autocomplete="name" maxlength="100" required></div><div class="field"><label for="business">Business name *</label><input id="business" name="business" autocomplete="organization" maxlength="160" required></div><div class="field full"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" maxlength="254" required></div><div class="field full"><label for="need">How can we help? *</label><select id="need" name="need" required><option value="">Choose what fits best</option><option>A new website</option><option>A redesign of my website</option><option>Website and customer follow-up</option><option>I’m exploring my options</option></select></div></div><details class="optional-inquiry"><summary>Add a few details <span>(optional)</span></summary><div class="form-grid"><div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div><div class="field"><label for="business-type">Business type</label><select id="business-type" name="businessType"><option value="">Choose a type</option><option>Plumbing</option><option>Roofing</option><option>Electrical</option><option>Restaurant or café</option><option>Health or wellness</option><option>Shop, salon, or studio</option><option>Other local business</option></select></div><div class="field full"><label for="website">Current website</label><input id="website" name="website" type="text" inputmode="url" autocomplete="url" maxlength="500" placeholder="yourbusiness.com"></div><div class="field full"><label for="message">What would you like help with?</label><textarea id="message" name="message" maxlength="4000" placeholder="Your main services, a website you like, or a question about the package."></textarea></div></div></details><p class="inquiry-context" data-inquiry-context hidden></p><input type="hidden" name="interest" value=""><p class="form-note">${connected?'Your details are used to respond to your inquiry.':'Your request stays in this browser unless you copy or download it.'} <a href="/privacy/">Privacy information</a>.</p><button class="button form-submit" type="submit" data-js-submit disabled>${site.contactEndpoint?'Send your inquiry':site.email?'Prepare your email':'Prepare my request'}${icon('arrow')}</button><noscript><p>Enable JavaScript to prepare your request.${site.email?` Or email ${escape(site.email)}.`:''}</p></noscript><p class="form-feedback" role="status" aria-live="polite" tabindex="-1"></p><div class="brief-output" hidden><label for="brief">Your request</label><textarea id="brief" readonly></textarea><div class="actions"><button class="button button--outline" type="button" data-copy>Copy brief</button><button class="button button--outline" type="button" data-download>Save brief</button></div></div></form>`;
    }
    
    export function redesignedContact(){return `<section class="container page-hero"><div class="contact-grid"><div class="contact-copy"><div class="contact-intro">${eyebrow('Let’s make this easy')}<h1>A better website<br>starts with<br>your business.</h1><p class="lead">Tell us what you need. We’ll talk through the website, the follow-up, and the $249/month package.</p></div><div class="contact-points"><div><h2>Just getting started?</h2><p>You don’t need a technical brief or a finished plan. Your main services and a few questions are enough.</p></div><div><h2>Prefer a conversation?</h2><p>See what we’ll cover when discussing your website.</p>${textLink('Plan a call','/book/')}</div><div><h2>Already found an example you like?</h2><p>Mention it in the optional details. It is a useful starting point for your design.</p></div></div></div>${inquiryForm()}</div></section>`;}
    
    export function bookingPage(){return `<section class="container page-hero booking-hero">${eyebrow('Let’s talk about your business')}<h1>Your website questions.<br>A straightforward conversation.</h1><p class="lead">Tell us what you do and what you need. We’ll explain how the $249/month package could fit your business.</p></section><section class="container booking-layout"><div class="booking-agenda">${photo('living-room',{eager:true})}<h2>Here’s what we’ll cover.</h2><ol><li><strong>Your business</strong><span>What you offer, who you serve, and how customers find you today.</span></li><li><strong>Your website</strong><span>The pages, photos, and contact options that would make it useful.</span></li><li><strong>Your next step</strong><span>Package details, questions, and whether it makes sense to move forward.</span></li></ol><p class="small">No finished brief needed. There is no commitment to a package just by asking about it.</p></div><div class="booking-action">${site.bookingUrl?`<div class="booking-connected"><h2>Choose a time that suits you.</h2><p>Open our booking calendar to see current availability and confirm your appointment.</p>${button('Open the booking calendar',site.bookingUrl)}<p class="small">The booking provider will show the available times and send your confirmation.</p></div><p class="booking-alternative">Prefer to start with a message?</p>`:''}${inquiryForm({booking:true})}</div></section><section class="section container"><div class="faq-layout"><h2>Before we talk.</h2>${faqList([faqs[1],faqs[2],faqs[12]])}</div></section>`;}
    
    export const additionalAgencyPages=[
      {path:'/how-it-works/',title:'How Your Website Project Works | SkipManual',description:'From a first conversation to page planning, design, customer follow-up, and launch. See the steps in a SkipManual website project.',render:howItWorks},
      {path:'/book/',title:'Talk About Your Business Website | SkipManual',description:'Plan a conversation about your business website and SkipManual’s $249/month package. See what we will cover and prepare your inquiry.',render:bookingPage},
      ...packageServices.map(s=>({path:`/services/${serviceDetails[s.id].route}/`,title:`${s.name} for Local Businesses | SkipManual`,description:serviceDetails[s.id].intro+' Included in SkipManual’s $249/month package.',render:()=>serviceDetail(s)})),
    ];
    .example-quick-nav { display:flex; gap:1.4rem; justify-content:space-between; border-block:1px solid currentColor; border-color:color-mix(in srgb,currentColor 18%,transparent); padding-block:.9rem; }
    .example-quick-nav a { display:inline-flex; align-items:center; gap:.8rem; font-size:.75rem; min-height:34px; }.example-quick-nav svg { width:14px; height:14px; }
    .example-more { position:relative; }.example-more summary { cursor:pointer; font-size:.8rem; list-style:none; padding:.6rem 0; white-space:nowrap; }.example-more summary::after { content:'+'; margin-left:.5rem; }.example-more[open] summary::after { content:'−'; }.example-more summary::-webkit-details-marker { display:none; }
    .example-more > nav { position:absolute; z-index:35; top:100%; right:-1rem; padding:1rem; width:270px; max-height:65vh; overflow:auto; border:1px solid color-mix(in srgb,currentColor 25%,transparent); background:var(--demo-menu-bg,#fff); color:var(--demo-menu-text,#202727); box-shadow:0 8px 25px #0002; display:grid; gap:.15rem; }
    .example-more > nav a { display:block; padding:.65rem; font-size:.82rem; }.example-more > nav a:hover { background:color-mix(in srgb,currentColor 8%,transparent); }
    .theme-olive { --demo-menu-bg:#252d23; --demo-menu-text:#e4e4ce; }.theme-current { --demo-menu-bg:#142e40; --demo-menu-text:#fff; }.theme-form { --demo-menu-bg:#e9e2ef; --demo-menu-text:#403247; }.theme-clearflow { --demo-menu-bg:#fff; --demo-menu-text:#14364a; }.theme-ridgeline { --demo-menu-bg:#f5f1e8; --demo-menu-text:#302e29; }
    .demo-nav { gap:1.3rem; }.demo-nav > .demo-button { white-space:nowrap; }.demo-footer-top > nav { display:grid; grid-template-columns:1fr 1fr; gap:.5rem 2rem; min-width:45%; }.demo-footer-top > nav a { font-size:.8rem; }
    .example-feature { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; }.example-feature img { width:100%; height:460px; object-fit:cover; }.example-feature p:not(.demo-kicker) { font-size:1rem; line-height:1.8; margin-top:1.5rem; max-width:440px; }.theme-clearflow .example-feature img { border-radius:18px; }.theme-form .example-feature img { border-radius:130px 130px 8px 8px; }
    .example-section-title { display:flex; justify-content:space-between; align-items:end; gap:3rem; margin-bottom:2rem; }.example-section-title h2 { max-width:770px; }.example-section-title > a { flex-shrink:0; }
    .example-gallery-teaser { display:grid; grid-template-columns:repeat(3,1fr); gap:1.2rem; }.example-gallery-teaser img { width:100%; height:285px; object-fit:cover; }.example-gallery-teaser a:nth-child(2) { margin-top:2rem; }.example-photo-note { font-size:.7rem; margin-top:1.3rem; opacity:.8; }
    .example-breadcrumb { display:flex; gap:.75rem; padding-top:1.6rem; font-size:.73rem; flex-wrap:wrap; }.example-breadcrumb a { text-decoration:underline; text-underline-offset:4px; }
    .example-detail-hero { display:grid; grid-template-columns:1.1fr 1fr; gap:4rem; padding-block:3rem 4rem; align-items:center; }.example-detail-hero h1 { font-size:clamp(3.6rem,5.2vw,5.7rem); }.example-detail-hero p:not(.demo-kicker) { font-size:1.04rem; line-height:1.8; margin-top:1.5rem; max-width:520px; }.example-detail-hero .demo-button { margin-top:1.5rem; }.example-detail-hero figure { margin:0; }.example-detail-hero figure img { width:100%; height:490px; object-fit:cover; }.example-detail-hero figcaption { font-size:.64rem; margin-top:.7rem; opacity:.75; }
    .theme-current .example-detail-hero h1,.theme-clearflow .example-detail-hero h1 { font-size:clamp(3rem,4.3vw,4.6rem); }.theme-clearflow .example-detail-hero figure img { border-radius:20px; }.theme-form .example-detail-hero figure img { border-radius:130px 130px 0 0; }
    .example-detail-body { display:grid; grid-template-columns:1.6fr .85fr; gap:5rem; padding-block:2rem 3rem; }.example-detail-body > div > article { display:grid; grid-template-columns:35px 1fr; gap:1.4rem; border-top:1px solid color-mix(in srgb,currentColor 25%,transparent); padding-block:2rem; }.example-detail-body article > span { font-size:.67rem; opacity:.7; padding-top:.5rem; }.example-detail-body article h2 { font-size:2.5rem; margin-bottom:1.4rem; line-height:1.1; }.example-detail-body article p { line-height:1.85; font-size:1rem; }.example-detail-body li { font-size:.92rem; line-height:1.65; padding-left:.3rem; margin-top:.6rem; }
    .theme-clearflow .example-detail-body article h2,.theme-current .example-detail-body article h2 { font-size:2rem; }
    .example-help { align-self:start; position:sticky; top:6rem; border:1px solid color-mix(in srgb,currentColor 25%,transparent); padding:2rem; }.example-help h2 { font-size:2.25rem; }.example-help p:not(.demo-kicker) { margin-top:1.3rem; font-size:.86rem; }.example-help .demo-button { margin-top:1.5rem; font-size:.75rem; padding-inline:1rem; gap:.7rem; width:100%; }.example-help .demo-text-link { font-size:.8rem; }
    .theme-clearflow .example-help { border-radius:15px; background:#eef7fb; }.theme-ridgeline .example-help { background:#e9e2d5; }.theme-form .example-help { border-radius:18px; }
    .example-related { display:grid; grid-template-columns:repeat(3,1fr); gap:2rem; }.example-related a { border-top:1px solid color-mix(in srgb,currentColor 25%,transparent); padding-top:1.3rem; display:flex; flex-direction:column; }.example-related a > span { font-size:1.1rem; font-weight:550; }.example-related p { margin:1rem 0; font-size:.87rem; }.example-related svg { width:21px; height:21px; margin-top:auto; }
    .example-page-closing { display:flex; justify-content:space-between; align-items:center; gap:3rem; padding-block:4rem; border-top:1px solid color-mix(in srgb,currentColor 25%,transparent); }.example-page-closing h2 { font-size:3.2rem; }.example-page-closing p { margin-top:1rem; font-size:.95rem; }.example-page-closing .demo-button { flex-shrink:0; }
    .example-gallery { display:grid; grid-template-columns:1fr 1fr; gap:2.5rem 1.5rem; padding-bottom:4rem; }.example-gallery figure { margin:0; }.example-gallery figure:nth-child(3n+1) { grid-column:1/-1; }.example-gallery a { display:block; position:relative; overflow:hidden; }.example-gallery img { height:400px; width:100%; object-fit:cover; transition:transform .4s; }.example-gallery figure:nth-child(3n+1) img { height:520px; }.example-gallery a:hover img { transform:scale(1.025); }.example-gallery figcaption { font-size:.73rem; margin-top:.8rem; opacity:.8; }.gallery-zoom { display:flex; gap:.5rem; align-items:center; position:absolute; right:1rem; bottom:1rem; background:#fff; color:#202727; padding:.55rem .8rem; font-size:.7rem; border-radius:3px; }.gallery-zoom svg { width:15px; height:15px; }
    .gallery-dialog { max-width:min(1100px,94vw); width:100%; max-height:94dvh; padding:1rem; border:0; background:#fff; color:#202727; border-radius:5px; }.gallery-dialog::backdrop { background:#081010d9; }.gallery-dialog > button { display:flex; align-items:center; gap:.6rem; margin-left:auto; border:0; background:#fff; padding:.5rem; min-height:44px; font-size:.8rem; }.gallery-dialog > button svg { width:18px; height:18px; }.gallery-dialog > img { max-height:70dvh; object-fit:contain; width:100%; background:#f6f8f8; }.gallery-dialog > p { font-size:.8rem; margin-top:.8rem; }.gallery-dialog > div { display:flex; align-items:center; justify-content:space-between; gap:1rem; margin-top:.7rem; }.gallery-dialog > div button { background:#fff; border:1px solid #cbd2d3; padding:.6rem 1rem; font-size:.8rem; min-height:44px; }.gallery-dialog [data-gallery-position] { font-size:.75rem; }.gallery-dialog :focus-visible { outline:3px solid #ad3c1e; }
    .example-faq-page { max-width:960px; padding-top:0; }.example-faq-page .faq-item summary { font-size:1.1rem; padding-block:1.6rem; }.example-faq-page .faq-item p { font-size:1rem; line-height:1.8; }
    .example-mobile-action { display:none; }
    .menu-category-photo { width:100%; height:230px; object-fit:cover; margin-bottom:1.8rem; }
    ✓ • 156ms

## Activity

    $ Get-Content -Encoding utf8 src/styles/global.css -TotalCount 80; rg -n 'form-availability|brief-output|overflow|focus|scroll-margin|demo-banner|demo-notice' src/styles/global.css src/styles/demos.css src/pages/demos.mjs; Get-Content -Encoding utf8 .gitignore; Get-ChildItem artifacts/page-review -File | Measure-Object
    @import './tokens.css';
    @font-face { font-family: 'DM Sans Variable'; src: url('/fonts/dm-sans.woff') format('woff'); font-style: normal; font-weight: 100 1000; font-display: swap; }
    @font-face { font-family: 'Cormorant Garamond Variable'; src: url('/fonts/cormorant-garamond.woff') format('woff'); font-style: normal; font-weight: 300 700; font-display: swap; }
    * { box-sizing: border-box; }
    html { scroll-behavior: smooth; scroll-padding-top: 100px; }
    body { margin: 0; background: var(--color-background); color: var(--color-foreground); font-family: var(--font-sans); font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased; }
    ::selection { background: var(--yellow-300); color: var(--ink-950); }
    img, svg { max-width: 100%; } img { display: block; height: auto; }
    a { color: inherit; text-decoration: none; } button, input, select, textarea { font: inherit; }
    button, a, input, select, textarea, summary { -webkit-tap-highlight-color: transparent; }
    button { cursor: pointer; } button:disabled { cursor: wait; opacity: .65; }
    :focus-visible { outline: 3px solid var(--color-link); outline-offset: 5px; }
    h1,h2,h3,h4,p { margin: 0; } h1,h2,h3 { font-weight: 550; }
    h1 { font-size: var(--heading-xl); line-height: 1.035; letter-spacing: -.05em; }
    h2 { font-size: var(--heading-lg); line-height: 1.1; letter-spacing: -.045em; }
    h3 { font-size: 1.4rem; line-height: 1.25; letter-spacing: -.03em; }
    p { color: var(--color-muted); } p + p { margin-top: var(--space-4); }
    ul { padding-left: 1.2rem; } li + li { margin-top: .5rem; }
    .container { width: min(var(--layout-width), calc(100% - var(--layout-gutter) * 2)); margin-inline: auto; }
    .section { padding-block: var(--section-space); }
    .eyebrow { display: flex; align-items: center; gap: .6rem; font-size: .71rem; font-weight: 650; letter-spacing: .13em; text-transform: uppercase; color: var(--color-muted); margin-bottom: 1.4rem; }
    .eyebrow::before { content: ''; width: 7px; height: 7px; background: var(--color-accent); display: block; }
    .accent { color: var(--color-link); } .serif { font-family: var(--font-serif); font-weight: 500; }
    .lead { font-size: clamp(1.05rem, 1.3vw, 1.18rem); line-height: 1.7; max-width: 560px; }
    .small { font-size: .8rem; } .muted { color: var(--color-muted); }
    .button { display: inline-flex; align-items: center; justify-content: center; gap: 1.3rem; min-height: 49px; padding: .8rem 1.25rem; border: 1px solid transparent; border-radius: var(--button-radius); background: var(--button-bg); color: var(--button-color); font-size: .86rem; font-weight: 550; transition: background var(--duration-fast), transform var(--duration-fast); }
    .button:hover { background: var(--ink-700); transform: translateY(-2px); }
    .button svg { width: 17px; height: 17px; flex-shrink: 0; }
    .button--outline { background: transparent; border-color: var(--color-border); color: var(--color-foreground); }
    .button--outline:hover { background: var(--paper-200); }
    .button--light { background: var(--paper-50); color: var(--ink-950); }
    .button--light:hover { background: var(--paper-200); }
    .text-link { display: inline-flex; gap: 1.2rem; align-items: center; min-height: 44px; font-size: .86rem; font-weight: 600; }
    .text-link:hover { color: var(--color-link); } .text-link svg { width: 18px; height: 18px; }
    .actions { display: flex; gap: 1.5rem; align-items: center; flex-wrap: wrap; margin-top: 2rem; }
    .skip-link { position: fixed; top: -100px; left: 1rem; padding: 1rem; z-index: 100; background: var(--white); }.skip-link:focus { top: 1rem; }
    .site-header { height: 91px; display: flex; align-items: center; border-bottom: 1px solid var(--color-border); position: relative; z-index: 30; background: var(--color-background); }
    .header-inner { display: flex; justify-content: space-between; align-items: center; gap: 2rem; }
    .brand { display: inline-flex; align-items: center; gap: .65rem; font-weight: 750; font-size: 1.35rem; letter-spacing: -.06em; white-space: nowrap; }
    .brand-mark { display: block; width: 29px; height: 29px; color: var(--color-accent); }
    .desktop-nav { display: flex; align-items: center; gap: 2rem; }
    .desktop-nav > a:not(.button) { font-size: .84rem; padding-block: 12px; }
    .desktop-nav > a[aria-current='page'] { color: var(--color-link); }
    .desktop-nav > a:hover { color: var(--color-link); }.desktop-nav .button:hover { color: var(--white); }
    .desktop-nav .button { margin-left: 1rem; min-height: 43px; }
    .mobile-nav { display: none; }
    .section-head { display: flex; align-items: end; justify-content: space-between; gap: 3rem; margin-bottom: 2.7rem; }
    .section-head h2 { max-width: 630px; }.section-head > p { max-width: 360px; font-size: .95rem; }
    .section-head .text-link { white-space: nowrap; }
    .home-hero { padding-top: clamp(3rem,6.2vw,6rem); padding-bottom: 3.2rem; }
    .hero-grid { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 3.5rem; }
    .hero-copy h1 { max-width: 660px; }.hero-copy .lead { margin-top: 1.7rem; max-width: 435px; }
    .hero-copy .eyebrow { margin-bottom: 1.6rem; }
    .hero-price { display: flex; align-items: baseline; gap: .55rem; margin-top: 1.4rem; color: var(--color-muted); font-size: .82rem; }.hero-price strong { color: var(--color-foreground); font-weight: 600; }
    .hero-stage { position: relative; height: 506px; min-width: 0; }
    .hero-stage .stage-note { bottom: -20px; }
    .stage-surface { position: absolute; inset: 30px -10px 12px 15px; background: var(--paper-200); border-radius: 46% 44% 4% 4%; opacity: .45; }
    .hero-preview-main { position: absolute; top: 48px; left: 0; width: 94%; transform: rotate(-4deg); box-shadow: var(--preview-shadow); z-index: 2; }
    .hero-preview-second { position: absolute; width: 59%; bottom: 35px; right: -8px; transform: rotate(5deg); box-shadow: var(--preview-shadow); z-index: 3; }
    .hero-preview-main, .hero-preview-second { transition: transform 250ms; }.hero-preview-main:hover,.hero-preview-second:hover { transform: rotate(0deg) translateY(-4px); }
    .stage-note { position: absolute; left: 5px; bottom: 0; font-size: .71rem; display: flex; align-items: center; gap: .6rem; color: var(--color-muted); }.stage-note svg { width: 21px; height: 21px; }
    .stage-tag { position: absolute; top: 0; right: 30px; font-size: .7rem; letter-spacing: .03em; border: 1px solid var(--color-border); padding: .5rem .9rem; border-radius: 30px; transform: rotate(7deg); background: var(--paper-50); }
    .industry-strip { margin-top: 3.3rem; padding-top: 1.5rem; border-top: 1px solid var(--color-border); display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; font-size: .76rem; color: var(--color-muted); }
    .industry-strip p { max-width: 160px; font-size: .7rem; line-height: 1.5; }.industry-strip span { display: flex; gap: .6rem; align-items: center; white-space: nowrap; }.industry-strip svg { width: 17px; height: 17px; }
    .work-section { background: var(--color-surface); border-block: 1px solid var(--color-border); }
    .work-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.5rem; }
    .work-art { display: block; padding: 2rem 1.25rem; border-radius: var(--radius-sm); overflow: hidden; background: var(--olive-200); }
    .work-art.current { background: #dce4e5; }.work-art.form { background: #e5dfea; }
    .work-art .preview { box-shadow: var(--preview-shadow); transition: transform 250ms; }.work-art:hover .preview { transform: translateY(-6px); }
    .work-card-top { display: flex; justify-content: space-between; gap: .7rem; align-items: center; margin-top: 1.2rem; }.work-card-top h3 { font-size: 1.15rem; }.work-card-top svg { width: 20px; height: 20px; }
    .work-category { font-size: .72rem; color: var(--color-muted); margin-top: .3rem; }.demo-label { display: inline-block; font-size: .61rem; font-weight: 550; border: 1px solid var(--color-border); padding: .15rem .42rem; margin-left: .5rem; border-radius: 3px; letter-spacing: .025em; text-transform: uppercase; }
    .work-note { margin-top: 2rem; display: flex; justify-content: space-between; gap: 1rem; font-size: .75rem; }
    .value-grid { display: grid; grid-template-columns: 1fr 1.2fr; gap: 5rem; }.value-grid .lead { margin-top: 1.5rem; }.value-list { display: grid; gap: 1.7rem; }
    .value-item { padding-bottom: 1.6rem; border-bottom: 1px solid var(--color-border); display: grid; grid-template-columns: 40px 1fr; gap: 1rem; }.value-item > svg { width: 24px; height: 24px; margin-top: 3px; color: var(--color-link); }.value-item h3 { font-size: 1.15rem; margin-bottom: .5rem; }.value-item p { font-size: .92rem; }
    .process-section { background: var(--ink-950); color: var(--paper-50); }.process-section p,.process-section .eyebrow { color: var(--paper-200); }.process-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 2.4rem; margin-top: 3.5rem; }.process-number { display: block; padding-bottom: 1.3rem; border-bottom: 1px solid var(--ink-700); color: var(--paper-200); font-size: .78rem; margin-bottom: 1.5rem; }.process-grid h3 { font-size: 1.13rem; margin-bottom: .9rem; }.process-grid p { font-size: .86rem; line-height: 1.8; }
    .price-grid { display: grid; grid-template-columns: 1.05fr 1fr; gap: 6rem; align-items: center; }.price-grid .lead { margin-top: 1.5rem; }.price-card { border: 1px solid var(--color-border); padding: 2.5rem; border-radius: var(--radius-sm); background: var(--white); position: relative; }.price-card::before { content: ''; position: absolute; top: -1px; left: -1px; right: -1px; height: 4px; background: var(--color-accent); }.price-kicker { font-size: .78rem; font-weight: 600; }.price { display: flex; gap: .7rem; align-items: baseline; margin: .8rem 0 .8rem; }.price strong { font-size: 5.2rem; letter-spacing: -.07em; line-height: 1.2; font-weight: 500; }.price span { color: var(--color-muted); font-size: .92rem; }.price-card p { font-size: .88rem; }.price-card .button { margin-top: 1.7rem; width: 100%; }.price-card .small { font-size: .73rem; margin-top: 1rem; }
    .faq-layout { display: grid; grid-template-columns: .8fr 1.2fr; gap: 5rem; }.faq-layout .text-link { margin-top: 1.5rem; }.faq-item { border-bottom: 1px solid var(--color-border); }.faq-item:first-child { border-top: 1px solid var(--color-border); }.faq-item summary { list-style: none; min-height: 72px; padding: 1.25rem 2rem 1.25rem 0; position: relative; cursor: pointer; font-size: .98rem; font-weight: 500; }.faq-item summary::-webkit-details-marker { display: none; }.faq-item summary::after { content: '+'; position: absolute; right: 3px; font-size: 1.25rem; top: 1.1rem; }.faq-item[open] summary::after { content: '−'; }.faq-item p { font-size: .92rem; padding: 0 2rem 1.4rem 0; line-height: 1.8; }
    .cta-section { padding-block: 4.5rem; background: var(--paper-200); }.cta-inner { display: flex; justify-content: space-between; align-items: center; gap: 3rem; }.cta-inner h2 { font-size: clamp(2.4rem,4vw,3.6rem); max-width: 680px; }.cta-inner p { margin-top: 1rem; }.cta-inner .button { flex-shrink: 0; }
    .site-footer { padding-top: 4rem; }.footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 2rem; padding-bottom: 3.5rem; }.footer-brand p { max-width: 265px; margin-top: 1rem; font-size: .86rem; }.footer-col h2 { font-size: .75rem; letter-spacing: .02em; font-weight: 600; margin-bottom: .7rem; }.footer-col a { display: block; font-size: .82rem; color: var(--color-muted); padding-block: .4rem; }.footer-col a:hover { color: var(--color-link); }.footer-bottom { border-top: 1px solid var(--color-border); padding-block: 1.4rem; display: flex; justify-content: space-between; gap: 1rem; font-size: .72rem; color: var(--color-muted); }.footer-bottom div { display: flex; gap: 1.5rem; }
    .page-hero { padding: 4.5rem 0 4rem; }.page-hero h1 { max-width: 960px; }.page-hero .lead { margin-top: 1.8rem; max-width: 660px; }.page-hero .eyebrow { margin-bottom: 1.6rem; }.border-top { border-top: 1px solid var(--color-border); }.surface { background: var(--color-surface); }
    src/pages/demos.mjs:24:  return `<a class="skip-link" href="#demo-main">Skip to website content</a><aside class="demo-banner" aria-label="Example website notice"><div><span class="demo-pill">EXAMPLE WEBSITE</span><span>Fictional business. Real design possibilities.</span></div><div><a href="/examples/${e.slug}/">Back to concept</a><a href="/book/?example=${e.slug}">Want one like this? ${icon('arrow')}</a></div></aside><div class="demo-shell theme-${e.theme}"><header class="demo-header demo-container"><a class="demo-brand" href="/demos/${e.slug}/">${e.theme==='current' ? icon('bolt') : e.theme==='clearflow' ? icon('water') : e.theme==='ridgeline' ? icon('roof') : ''}${escape(e.name)}${e.theme==='form' ? '<sup></sup>' : ''}</a><nav class="demo-nav" aria-label="Example website navigation">${nav}${allPagesNavigation(e,page)}${dlink(e,c.action,c.contact)}</nav><details class="demo-mobile"><summary>Menu</summary><nav aria-label="Example mobile navigation">${e.routes.map((route,i)=>`<a href="/demos/${e.slug}/${route?route+'/':''}" ${page===route?'aria-current="page"':''}>${e.pages[i]}</a>`).join('')}</nav></details></header><div id="demo-main">${expandedNavigation(e)}${content}</div><footer class="demo-footer"><div class="demo-container"><div class="demo-footer-top"><div><a class="demo-brand" href="/demos/${e.slug}/">${escape(e.name)}</a><p>${c.footer}</p></div><nav aria-label="Example footer navigation">${e.routes.map((route,i)=>`<a href="/demos/${e.slug}/${route?route+'/':''}">${e.pages[i]}</a>`).join('')}</nav></div><div class="demo-footer-bottom"><span>A fictional ${e.category.toLowerCase()} concept by SkipManual.</span><a href="/examples/${e.slug}/">About this example ${icon('arrow')}</a></div></div></footer><nav class="example-mobile-action" aria-label="Quick website actions"><a href="/demos/${e.slug}/questions/">Questions?</a>${dlink(e,c.action,c.contact)}</nav></div>`;
    src/pages/demos.mjs:51: {name:'Strength & Length',type:'Build from within',level:'Experienced',text:'A more focused challenge, bringing thoughtful resistance and controlled movement together.',duration:'55 minutes'},
    src/styles/demos.css:1:.sr-only { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); white-space: nowrap; border: 0; }
    src/styles/demos.css:2:.theme-olive { --demo-focus: var(--olive-200); }.theme-current { --demo-focus: var(--yellow-300); }.theme-form { --demo-focus: var(--plum-900); }
    src/styles/demos.css:3:.demo-shell :focus-visible { outline: 3px solid var(--demo-focus); outline-offset: 5px; }
    src/styles/demos.css:4:.demo-body .demo-banner { position: sticky; top: 0; }
    src/styles/demos.css:10:.demo-banner { position: relative; z-index: 40; display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding: .6rem 2rem; color: var(--ink-950); background: var(--paper-50); font-size: .7rem; border-bottom: 1px solid var(--paper-200); }.demo-banner > div { display: flex; align-items: center; gap: 1.1rem; }.demo-banner a { display: inline-flex; align-items: center; gap: .5rem; min-height: 32px; }.demo-banner a:hover { text-decoration: underline; }.demo-banner svg { width: 14px; height: 14px; }.demo-pill { border: 1px solid var(--ink-700); padding: .17rem .4rem; border-radius: 2px; font-size: .56rem; font-weight: 600; letter-spacing: .07em; white-space: nowrap; }
    src/styles/demos.css:17:@media(max-width:760px) { .demo-container { width: calc(100% - 2.5rem); }.demo-banner { padding: .5rem 1.25rem; font-size: .64rem; }.demo-banner > div:first-child > span:last-child { display: none; }.demo-banner > div:last-child { gap: 1rem; }.demo-banner > div:last-child > a:last-child { display: none; }.demo-header { min-height: 82px; position: relative; }.demo-nav { display: none; }.demo-mobile { display: block; }.demo-mobile summary { padding: .6rem .9rem; min-height: 44px; font-size: .8rem; border: 1px solid currentColor; cursor: pointer; list-style: none; }.demo-mobile summary::-webkit-details-marker { display: none; }.demo-mobile nav { position: absolute; z-index: 20; left: 0; right: 0; top: 75px; border: 1px solid currentColor; background: var(--demo-button-text); color: var(--demo-button); padding: 1.2rem; }.theme-form .demo-mobile nav { background: var(--lilac-100); color: var(--plum-900); }.demo-mobile nav > a { display: block; padding: .8rem; border-bottom: 1px solid currentColor; font-size: .9rem; }.demo-mobile nav .demo-button { margin-top: 1rem; }.demo-mobile nav svg { display: none; }.olive-hero { height: 600px; min-height: auto; }.olive-hero h1 { font-size: clamp(4.9rem,14vw,7rem); }.demo-ribbon { gap: 1.5rem; font-size: .64rem; padding: 1.2rem; }.demo-ribbon span:last-child { display: none; }.olive-intro,.olive-feature,.current-hero,.current-process > div,.current-faq,.current-lighting,.form-hero,.studio-story,.demo-contact { grid-template-columns: 1fr; gap: 2.5rem; }.olive-feature { gap: 2rem; }.olive-feature img { aspect-ratio: 1.2; }.dish-grid,.electrical-services { grid-template-columns: 1fr; gap: 2rem; }.dish-grid h3 { margin-top: .6rem; }.demo-closing { padding-block: 4rem; }.demo-footer-top { display: block; }.demo-footer-top nav { margin-top: 2rem; gap: 1.5rem; }.demo-footer-bottom { flex-wrap: wrap; }.demo-page-hero { padding-block: 3rem; }.demo-page-hero h1 { font-size: clamp(3.4rem,10.5vw,5rem); }.menu-layout { grid-template-columns: 1fr; gap: 2rem; }.menu-index { display: flex; gap: 1rem; }.menu-index a { font-size: .73rem; }.menu-dish h3 { font-size: 1.55rem; }.current-hero { padding-top: 2rem; }.theme-current h1 { font-size: clamp(3.5rem,10.5vw,5rem); }.current-hero-image { margin: 1rem 1rem 0; }.current-hero-image img { height: 390px; }.current-hero-image > span { left: -10px; }.current-strip > div { flex-wrap: wrap; justify-content: center; gap: 1.2rem; font-size: .69rem; }.current-strip span:last-child { display: none; }.demo-section-head.split { display: block; }.demo-section-head.split > p { margin-top: 1.5rem; }.electrical-services .demo-text-link { margin-top: 1rem; }.electrical-service-list > article { grid-template-columns: 30px 1fr; gap: 1rem; padding-block: 2rem; }.electrical-service-list > article > div { grid-column: 2; }.current-lighting img { height: 380px; }.form-hero { padding-top: 2rem; }.form-hero h1 { font-size: clamp(3.7rem,10vw,5rem); }.form-hero p:not(.demo-kicker) { font-size: .93rem; }.form-hero-image { max-width: 430px; margin: 0 1.5rem; }.form-hero-image img { height: 440px; }.form-hero-image > span { left: -18px; width: 120px; height: 120px; font-size: 1.5rem; }.form-ribbon { gap: 1rem; font-size: .65rem; }.form-ribbon span:last-child { display: none; }.class-grid { grid-template-columns: 1fr; gap: 1.5rem; }.class-grid article { padding: 2rem; border-radius: 80px 80px 5px 5px; }.class-grid article p { max-width: 330px; margin-inline: auto; }.schedule-list article { grid-template-columns: .7fr 1.2fr; gap: 1rem; }.schedule-list article > a { grid-column: 2; justify-self: start !important; font-size: .8rem; }.studio-story img { height: 420px; }.demo-contact { padding-bottom: 3rem; }.demo-request-form { padding: 1.3rem; } }
    src/styles/global.css:12::focus-visible { outline: 3px solid var(--color-link); outline-offset: 5px; }
    src/styles/global.css:36:.skip-link { position: fixed; top: -100px; left: 1rem; padding: 1rem; z-index: 100; background: var(--white); }.skip-link:focus { top: 1rem; }
    src/styles/global.css:67:.work-art { display: block; padding: 2rem 1.25rem; border-radius: var(--radius-sm); overflow: hidden; background: var(--olive-200); }
    src/styles/global.css:88:.contact-grid { display: grid; grid-template-columns: .85fr 1.15fr; gap: 6rem; padding-bottom: 6rem; }.contact-copy h1 { font-size: var(--heading-lg); }.contact-copy .lead { margin-top: 1.5rem; }.contact-points { margin-top: 3rem; }.contact-points div { border-top: 1px solid var(--color-border); padding: 1.2rem 0; }.contact-points h2 { font-size: 1.03rem; letter-spacing: -.02em; margin-bottom: .5rem; }.contact-points p { font-size: .87rem; }.inquiry-form { padding: 2rem; background: var(--color-surface); border: 1px solid var(--color-border); border-radius: var(--radius-sm); }.form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }.field { display: flex; flex-direction: column; gap: .45rem; min-width: 0; }.field.full { grid-column: 1/-1; }.field label { font-size: .79rem; font-weight: 600; }.field label span { color: var(--color-muted); font-weight: 400; }.field input,.field select,.field textarea { width: 100%; padding: .8rem .9rem; border: 1px solid var(--input-border); border-radius: 3px; background: var(--input-bg); color: var(--color-foreground); font-size: .9rem; min-height: 48px; }.field textarea { resize: vertical; min-height: 120px; }.field input:focus,.field select:focus,.field textarea:focus { border-color: var(--color-foreground); }.form-intro { font-size: .8rem; margin-bottom: 1.5rem; }.form-note { font-size: .74rem; margin: 1rem 0; }.form-note a { text-decoration: underline; text-underline-offset: 3px; }.form-submit { margin-top: 1.4rem; }.form-feedback { margin-top: 1.2rem; font-size: .85rem; color: var(--color-foreground); }.form-feedback:empty { display: none; }.brief-output { margin-top: 1.5rem; }.brief-output textarea { width: 100%; min-height: 190px; padding: 1rem; font: inherit; font-size: .85rem; background: var(--white); border: 1px solid var(--color-border); }.brief-output .actions { margin-top: .7rem; }.prose { max-width: 760px; }.prose h2 { font-size: 1.7rem; margin: 2rem 0 1rem; }.prose a { text-decoration: underline; text-underline-offset: 3px; }.prose ul { color: var(--color-muted); }
    src/styles/global.css:96:.form-availability { padding: 1rem; margin-bottom: 1.5rem; border-left: 2px solid var(--color-accent); background: var(--paper-50); font-size: .8rem; }
    src/styles/global.css:123:.conversation { background:var(--paper-50); border:1px solid #d2d5c7; border-radius:12px; overflow:hidden; box-shadow:0 12px 40px #30392509; }
    src/styles/global.css:142:.service-row { scroll-margin-top:2rem; }
    src/styles/global.css:151:.form-availability p { margin-top: .4rem; font-size: .77rem; }
    node_modules/
    dist/
    .astro/
    .env
    test-results/
    .playwright/
    .tools/
    artifacts/
    
    
    Count    : 129
    Average  :
    Sum      :
    Maximum  :
    Minimum  :
    Property :
    
    
    
    ✓ • 203ms

## Assistant

The rebuilt site is running locally. I’m checking the expanded pages on desktop, tablet, and phone, especially image crops, navigation, and whether a visitor’s selected service carries through to the inquiry form. The white layout and $249 offer are already in place.

## Activity

    $ python -c "from PIL import Image; print('Pillow available')"; Get-Content -Encoding utf8 src/components/photos.mjs; Get-Content -Encoding utf8 src/pages/agency-redesign.mjs -Tail 14; Get-Content -Encoding utf8 src/styles/example-expansion.css -TotalCount 5; Get-Content -Encoding utf8 src/data/example-content.mjs -TotalCount 31
    Program 'python.exe' failed to run: The file cannot be accessed by the systemAt line:2 char:1
    + python -c "from PIL import Image; print('Pillow available')"; Get-Con ...
    + ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~.
    At line:2 char:1
    + python -c "from PIL import Image; print('Pillow available')"; Get-Con ...
    + ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        + CategoryInfo          : ResourceUnavailable: (:) [], ApplicationFailedException
        + FullyQualifiedErrorId : NativeCommandFailed
    
    import {photoLibrary} from '../data/example-content.mjs';
    import {escape} from './ui.mjs';
    import dimensions from '../data/photo-dimensions.json' with {type:'json'};
    
    export function photo(name,{eager=false,cls='',alt='',sizes='(max-width: 760px) 100vw, 50vw'}={}) {
      const label=alt||photoLibrary[name]?.[0]||'';
      const size=dimensions[name]||{width:1400,height:934};
      return `<img class="${cls}" src="/images/${name}.webp" srcset="/images/${name}-640.webp 640w, /images/${name}-960.webp 960w, /images/${name}.webp ${size.width}w" sizes="${sizes}" alt="${escape(label)}" width="${size.width}" height="${size.height}" ${eager?'fetchpriority="high"':'loading="lazy"'} decoding="async">`;
    }
    export function inquiryForm({booking=false}={}){
      const connected=Boolean(site.contactEndpoint||site.email);
      return `<form class="inquiry-form simple-inquiry" data-inquiry data-endpoint="${escape(site.contactEndpoint)}" data-email="${escape(site.email)}"><h2>${booking?'Tell us a little first.':'Tell us about your business.'}</h2><p class="form-intro">The essentials are enough to start. * Required.</p>${!connected?'<div class="form-availability"><strong>Online inquiries are not connected yet.</strong><p>You can prepare and save your request here. Nothing will be sent or booked.</p></div>':''}<div class="form-grid"><div class="field"><label for="name">Your name *</label><input id="name" name="name" autocomplete="name" maxlength="100" required></div><div class="field"><label for="business">Business name *</label><input id="business" name="business" autocomplete="organization" maxlength="160" required></div><div class="field full"><label for="email">Email address *</label><input id="email" name="email" type="email" autocomplete="email" maxlength="254" required></div><div class="field full"><label for="need">How can we help? *</label><select id="need" name="need" required><option value="">Choose what fits best</option><option>A new website</option><option>A redesign of my website</option><option>Website and customer follow-up</option><option>I’m exploring my options</option></select></div></div><details class="optional-inquiry"><summary>Add a few details <span>(optional)</span></summary><div class="form-grid"><div class="field"><label for="phone">Phone</label><input id="phone" name="phone" type="tel" autocomplete="tel" maxlength="40"></div><div class="field"><label for="business-type">Business type</label><select id="business-type" name="businessType"><option value="">Choose a type</option><option>Plumbing</option><option>Roofing</option><option>Electrical</option><option>Restaurant or café</option><option>Health or wellness</option><option>Shop, salon, or studio</option><option>Other local business</option></select></div><div class="field full"><label for="website">Current website</label><input id="website" name="website" type="text" inputmode="url" autocomplete="url" maxlength="500" placeholder="yourbusiness.com"></div><div class="field full"><label for="message">What would you like help with?</label><textarea id="message" name="message" maxlength="4000" placeholder="Your main services, a website you like, or a question about the package."></textarea></div></div></details><p class="inquiry-context" data-inquiry-context hidden></p><input type="hidden" name="interest" value=""><p class="form-note">${connected?'Your details are used to respond to your inquiry.':'Your request stays in this browser unless you copy or download it.'} <a href="/privacy/">Privacy information</a>.</p><button class="button form-submit" type="submit" data-js-submit disabled>${site.contactEndpoint?'Send your inquiry':site.email?'Prepare your email':'Prepare my request'}${icon('arrow')}</button><noscript><p>Enable JavaScript to prepare your request.${site.email?` Or email ${escape(site.email)}.`:''}</p></noscript><p class="form-feedback" role="status" aria-live="polite" tabindex="-1"></p><div class="brief-output" hidden><label for="brief">Your request</label><textarea id="brief" readonly></textarea><div class="actions"><button class="button button--outline" type="button" data-copy>Copy brief</button><button class="button button--outline" type="button" data-download>Save brief</button></div></div></form>`;
    }
    
    export function redesignedContact(){return `<section class="container page-hero"><div class="contact-grid"><div class="contact-copy"><div class="contact-intro">${eyebrow('Let’s make this easy')}<h1>A better website<br>starts with<br>your business.</h1><p class="lead">Tell us what you need. We’ll talk through the website, the follow-up, and the $249/month package.</p></div><div class="contact-points"><div><h2>Just getting started?</h2><p>You don’t need a technical brief or a finished plan. Your main services and a few questions are enough.</p></div><div><h2>Prefer a conversation?</h2><p>See what we’ll cover when discussing your website.</p>${textLink('Plan a call','/book/')}</div><div><h2>Already found an example you like?</h2><p>Mention it in the optional details. It is a useful starting point for your design.</p></div></div></div>${inquiryForm()}</div></section>`;}
    
    export function bookingPage(){return `<section class="container page-hero booking-hero">${eyebrow('Let’s talk about your business')}<h1>Your website questions.<br>A straightforward conversation.</h1><p class="lead">Tell us what you do and what you need. We’ll explain how the $249/month package could fit your business.</p></section><section class="container booking-layout"><div class="booking-agenda">${photo('living-room',{eager:true})}<h2>Here’s what we’ll cover.</h2><ol><li><strong>Your business</strong><span>What you offer, who you serve, and how customers find you today.</span></li><li><strong>Your website</strong><span>The pages, photos, and contact options that would make it useful.</span></li><li><strong>Your next step</strong><span>Package details, questions, and whether it makes sense to move forward.</span></li></ol><p class="small">No finished brief needed. There is no commitment to a package just by asking about it.</p></div><div class="booking-action">${site.bookingUrl?`<div class="booking-connected"><h2>Choose a time that suits you.</h2><p>Open our booking calendar to see current availability and confirm your appointment.</p>${button('Open the booking calendar',site.bookingUrl)}<p class="small">The booking provider will show the available times and send your confirmation.</p></div><p class="booking-alternative">Prefer to start with a message?</p>`:''}${inquiryForm({booking:true})}</div></section><section class="section container"><div class="faq-layout"><h2>Before we talk.</h2>${faqList([faqs[1],faqs[2],faqs[12]])}</div></section>`;}
    
    export const additionalAgencyPages=[
      {path:'/how-it-works/',title:'How Your Website Project Works | SkipManual',description:'From a first conversation to page planning, design, customer follow-up, and launch. See the steps in a SkipManual website project.',render:howItWorks},
      {path:'/book/',title:'Talk About Your Business Website | SkipManual',description:'Plan a conversation about your business website and SkipManual’s $249/month package. See what we will cover and prepare your inquiry.',render:bookingPage},
      ...packageServices.map(s=>({path:`/services/${serviceDetails[s.id].route}/`,title:`${s.name} for Local Businesses | SkipManual`,description:serviceDetails[s.id].intro+' Included in SkipManual’s $249/month package.',render:()=>serviceDetail(s)})),
    ];
    .example-quick-nav { display:flex; gap:1.4rem; justify-content:space-between; border-block:1px solid currentColor; border-color:color-mix(in srgb,currentColor 18%,transparent); padding-block:.9rem; }
    .example-quick-nav a { display:inline-flex; align-items:center; gap:.8rem; font-size:.75rem; min-height:34px; }.example-quick-nav svg { width:14px; height:14px; }
    .example-more { position:relative; }.example-more summary { cursor:pointer; font-size:.8rem; list-style:none; padding:.6rem 0; white-space:nowrap; }.example-more summary::after { content:'+'; margin-left:.5rem; }.example-more[open] summary::after { content:'−'; }.example-more summary::-webkit-details-marker { display:none; }
    .example-more > nav { position:absolute; z-index:35; top:100%; right:-1rem; padding:1rem; width:270px; max-height:65vh; overflow:auto; border:1px solid color-mix(in srgb,currentColor 25%,transparent); background:var(--demo-menu-bg,#fff); color:var(--demo-menu-text,#202727); box-shadow:0 8px 25px #0002; display:grid; gap:.15rem; }
    .example-more > nav a { display:block; padding:.65rem; font-size:.82rem; }.example-more > nav a:hover { background:color-mix(in srgb,currentColor 8%,transparent); }
    // Fictional website content. These examples never represent client work or real availability.
    export const photoLibrary = {
      restaurant:['A plated restaurant meal on a dining table','restaurant'], interior:['A warmly lit restaurant dining room','interior'],
      'seasonal-plate':['A colorful bowl of fresh vegetables','seasonal-plate'], gathering:['A table set for a special gathering','gathering'], coffee:['Cups of coffee with latte art','coffee'], dessert:['A dessert served with fruit','dessert'],
      'living-room':['A thoughtfully arranged living room','living-room'], kitchen:['A bright kitchen interior','kitchen'], 'bathroom-detail':['A bathroom with a bath and modern fixtures','bathroom-detail'],
      'modern-home':['A modern home and its surrounding grounds','modern-home'], 'work-tools':['Hand tools arranged for practical work','work-tools'], electrician:['An electrical worker attending to wiring','electrician'],
      'yoga-class':['A person practicing yoga beside the sea at sunset','yoga-class'], fitness:['A person lifting a barbell in a training space','fitness'], 'studio-space':['A group practicing yoga on a beach','studio-space'], stretching:['A person practicing a floor stretch','stretching'], pilates:['A group movement session in a studio','pilates'],
      cafe:['Coffee being prepared at a café counter','cafe'], 'restaurant-room':['A restaurant with seating arranged for diners','restaurant-room'], 'house-exterior':['A contemporary home exterior','house-exterior'], 'home-detail':['A residential house and landscaped surroundings','home-detail'], 'dining-space':['A light-filled living room with natural textures','dining-space'],
      plumbing:['A bright bathroom with a bath, basin, and chrome fixtures','plumbing'], roofing:['A house with a broad porch and pitched shingle roof','roofing'],
    };
    
    const section=(heading,text,items=[])=>({heading,text,items});
    const question=(q,a)=>({q,a});
    
    export const exampleContent = {
      olive: {
        label:'A seat at the table', galleryTitle:'The food. The room. The feeling.',
        gallery:['restaurant','interior','seasonal-plate','gathering','coffee','dessert','restaurant-room','cafe'],
        quick:[['Menu','menu'],['Private dining','private-dining'],['Gallery','gallery'],['Plan your visit','visit']],
        pages:[
          {route:'private-dining',label:'Private dining',title:'Your people.<br><em>A table of your own.</em>',intro:'A birthday supper, a family gathering, or a reason to bring everyone together. Start with the occasion, then shape an evening around it.',image:'gathering',
           sections:[section('An occasion, at your pace.','Good gatherings need room for conversation. A shared menu keeps the table connected, with time to arrive, settle in, and enjoy each course. Tell us what matters to your group so the food and the flow can fit the evening.'),section('A few details make a difference.','Before planning a group meal, it helps to understand the size of the party, the preferred date, and any dietary needs. Seating, menu choices, availability, and costs would be confirmed with the restaurant.',['Your preferred date and approximate group size','The occasion and the atmosphere you have in mind','Dietary requirements to discuss before choosing the menu']),section('Make the table your starting point.','Browse the seasonal menu for a feel for the kitchen. Group arrangements may differ from individual dining, so a request is the beginning of the conversation rather than a confirmed reservation.')],action:'Ask about a gathering',context:'Private dining',faq:[question('Can a group choose a shared menu?','That is the idea behind this concept. In a real restaurant, the dishes, dietary requirements, serving style, and price would be agreed before the event.') ]},
          {route:'seasonal-kitchen',label:'The seasonal kitchen',title:'Good ingredients.<br><em>A little imagination.</em>',intro:'Freshness, texture, and the pleasure of something made with care. A closer look at the ideas behind the menu.',image:'seasonal-plate',
           sections:[section('Let the season set the tone.','Something crisp alongside something slow-cooked. A bright dressing against a rich sauce. Our fictional kitchen concept is built around balance, with vegetables and familiar ingredients given plenty of attention.'),section('Made for mixing and sharing.','Begin with a small plate, find a main that feels right, and leave a little room for something sweet. The menu is arranged to make it easy to build your own meal, whether you want a light supper or an evening around the table.',['Small plates to open the conversation','Vegetable-led dishes alongside meat and fish options','Desserts that bring the meal to a gentle close']),section('Tell us what you need.','Food preferences and allergies deserve a clear conversation. A real restaurant should confirm ingredients, preparation, and cross-contact risks directly. The example menu is a design illustration and cannot be used as dietary guidance.')],action:'Explore the menu',target:'menu'},
          {route:'drinks',label:'Drinks & a little more',title:'Raise a glass.<br><em>Stay a little longer.</em>',intro:'Something refreshing to begin. Something warm to finish. A drinks collection designed to sit comfortably beside the food.',image:'coffee',
           sections:[section('Fresh, bright, and alcohol-free.','Sparkling citrus, a seasonal fruit cooler, or a simple soda with herbs. A considered alcohol-free choice should feel like part of the occasion, with its own flavor and character.',['Citrus & rosemary spritz — sparkling citrus, rosemary, soda','Seasonal fruit cooler — fruit, lime, crushed ice','Ginger & lime — ginger, fresh lime, sparkling water']),section('A companion for the table.','A real wine and beer selection would be chosen to complement the current menu, with serving sizes, prices, and availability made clear. Tell the restaurant what you enjoy and what you are eating before choosing.'),section('The last few minutes are yours.','Finish with an espresso, a long coffee, or a pot of tea. Dessert can be shared, the conversation can continue, and the evening can find its own ending. This is an illustrative drinks collection for a fictional restaurant.')],action:'Something sweet?',target:'menu'},
          {route:'gallery',label:'Gallery',type:'gallery',title:'A taste of<br><em>the atmosphere.</em>',intro:'Explore the food, textures, and spaces that inspire Olive & Ember. Illustrative photography for this fictional restaurant concept.'},
          {route:'visit',label:'Plan your visit',title:'Come for dinner.<br><em>Make an evening of it.</em>',intro:'A little planning makes the table feel more inviting. Here is what to think about before your visit.',image:'restaurant-room',
           sections:[section('Choose a table that fits.','Start with your preferred date, party size, and time. If you have flexibility, mention that too. This example lets you explore the request; a real restaurant would confirm availability and the reservation directly.'),section('Make the evening comfortable.','Ask about step-free access, seating needs, high chairs, or space for your group before arriving. Dietary needs are best discussed when booking so the team has time to explain what is possible.',['Mention allergies and dietary requirements','Discuss accessibility and seating preferences','Check the real restaurant’s arrival and cancellation arrangements']),section('Find the details before setting off.','A live restaurant website should provide its verified address, map, opening hours, and phone number here. Olive & Ember is fictional, so there is no location to visit or real booking to make. You can explore every part of the sample table request.')],action:'Choose your table request'},
          {route:'questions',label:'Dining questions',type:'faq',title:'Before you<br><em>pull up a chair.</em>',intro:'A little clarity about the dining experience and how this example website works.',image:'interior',faq:[question('How do I request a table?','Choose your preferred date, time, and party size in the table request. This fictional example shows the interaction without making a reservation.'),question('Can you accommodate dietary requirements?','Dietary needs should be discussed directly with a real restaurant, including ingredients and cross-contact risks. This illustrative menu cannot confirm suitability.'),question('Is private dining available?','The private-dining page shows how a restaurant could explain group occasions. Group size, menu, costs, and availability would be agreed before a real booking.'),question('Can I bring children?','A real restaurant would confirm suitable seating, high chairs, and children’s food options. Mention your party’s needs when requesting a table.'),question('Where is Olive & Ember?','It is a fictional business designed by SkipManual. There is no physical restaurant at this website, and no real address or opening hours are claimed.'),question('Will my request be sent?','No. The form generates a local preview only. Please use sample information while exploring it.')]},
        ],
    ✓ • 602ms

## Activity

    $ $env:PLAYWRIGHT_MODULE='C:\Users\muham\AppData\Local\ms-playwright-go\1.50.1\package'; $env:BROWSER_PATH='C:\Users\muham\.cache\puppeteer\chrome\win64-139.0.7258.68\chrome-win64\chrome.exe'; npm run capture:pages
    
    > skipmanual@1.0.0 capture:pages
    > node scripts/review-pages.mjs
    
    Captured 72 pages at 1440px for visual review.
    Captured 72 pages at 768px for visual review.
    Captured 72 pages at 390px for visual review.
    ✓ • 2m 58s

## Activity

    file changes: Completed · 1 changes
    Add: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\.tools\review-sheets.mjs
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

## Activity

    $ $env:PLAYWRIGHT_MODULE='C:\Users\muham\AppData\Local\ms-playwright-go\1.50.1\package'; $env:BROWSER_PATH='C:\Users\muham\.cache\puppeteer\chrome\win64-139.0.7258.68\chrome-win64\chrome.exe'; node .tools/review-sheets.mjs
    Created desktop and mobile visual review sheets for every page.
    ✓ • 11.43s

## Activity

    $ node --input-type=module -e "import {exampleContent} from './src/data/example-content.mjs'; for(const [theme,c] of Object.entries(exampleContent)) console.log(theme,JSON.stringify(c.pages.map(p=>({route:p.route,context:p.context,target:p.target}))));"; rg -n 'demo-service|demo-class|option' src/pages/trades.mjs src/pages/demos.mjs
    olive [{"route":"private-dining","context":"Private dining"},{"route":"seasonal-kitchen","target":"menu"},{"route":"drinks","target":"menu"},{"route":"gallery"},{"route":"visit"},{"route":"questions"}]
    current [{"route":"repairs","context":"Repairs & fault finding"},{"route":"installations","context":"Installations & additions"},{"route":"renovations","context":"Renovation electrical"},{"route":"gallery"},{"route":"our-approach"},{"route":"questions"}]
    form [{"route":"first-visit","context":"Foundations"},{"route":"foundations","context":"Foundations"},{"route":"private-sessions","context":"Help me choose"},{"route":"gallery"},{"route":"movement-notes","target":"classes"},{"route":"questions"}]
    clearflow [{"route":"leaks-and-fixtures","context":"Leaks & fixtures"},{"route":"drains","context":"Drains & blockages"},{"route":"bathroom-kitchen","context":"New fixtures"},{"route":"gallery"},{"route":"what-to-expect"},{"route":"questions"}]
    ridgeline [{"route":"roof-repairs","context":"Roof repairs"},{"route":"roof-replacement","context":"Roof replacement"},{"route":"materials","context":"Roof assessment"},{"route":"gallery"},{"route":"assessment-process","context":"Roof assessment"},{"route":"questions"}]
    src/pages/demos.mjs:44:function currentHome(e) { return `<section class="demo-container current-hero"><div>${dkicker('Residential electrical. Clearly considered.')}<h1>Good energy.<br>Expertly wired<span>.</span></h1><p>From the lights you live by to the outlets you rely on. Practical electrical work, explained in plain language.</p>${dlink(e,'Let’s talk about your project','request-a-quote')}<p class="current-hero-note">Your home. Your questions. A clear next step.</p></div><div class="current-hero-image">${dimage('electrician','Electrical professional working on a wiring installation','',true)}<span>${icon('bolt')}Make your home work better.</span></div></section><div class="current-strip"><div class="demo-container"><span>${icon('home')}Work around your home</span><span>${icon('layout')}Options explained clearly</span><span>${icon('cursor')}A straightforward next step</span></div></div><section class="demo-section demo-container"><div class="demo-section-head split"><div>${dkicker('How we can help')}<h2>The small fixes.<br>The bigger plans.</h2></div><p>Whatever brought you here, start with the job.<br>We’ll help make the next step clear.</p></div><div class="electrical-services">${services.slice(0,3).map(([n,h,p,r])=>`<article><span>${n} /</span><h3>${h}</h3><p>${p}</p>${dlink(e,'Explore this service',r,'demo-text-link')}</article>`).join('')}</div></section><section class="current-process"><div class="demo-container demo-section"><div>${dkicker('Let’s keep it simple')}<h2>Less guesswork.<br>More getting it sorted.</h2></div><ol><li><span>01</span><div><h3>Tell us what’s going on.</h3><p>A small repair, a new idea, or a full renovation. Start with what you know.</p></div></li><li><span>02</span><div><h3>Understand your options.</h3><p>The scope, practical choices, and next steps should be clear before any work.</p></div></li><li><span>03</span><div><h3>Make a plan for the work.</h3><p>Agree on what needs doing and how it fits around your home.</p></div></li></ol></div></section><section class="demo-section demo-container current-faq"><h2>A little clarity<br>goes a long way.</h2>${faqList([{q:'What should I include in my request?',a:'Describe the issue or project, the room involved, and what you would like to change. You do not need to know the technical name.'},{q:'Can I ask about more than one job?',a:'Yes. Include the different tasks in one request so they can be considered together.'},{q:'Does this example accept real electrical jobs?',a:'No. Current Electric is a fictional website concept. The request form demonstrates an inquiry flow only.'}])}</section><section class="demo-closing"><div class="demo-container"><h2>Let’s shed some light<br>on your next project.</h2>${dlink(e,'Start a project request','request-a-quote')}</div></section>`; }
    src/pages/demos.mjs:46:function currentLighting(e) { return `<section class="demo-page-hero demo-container">${dkicker('Services / Lighting & upgrades')}<h1>See your home<br>in a better <span>light.</span></h1><p>Useful where you work. Softer where you unwind.<br>Lighting that fits the way your home feels.</p></section><section class="demo-container current-lighting"><div>${dimage('living-room','A living room arranged around natural light and practical lighting','',true)}</div><div><h2>The right light<br>changes a room.</h2><p>A kitchen that needs brighter task lighting. A hallway that feels too dim. A living room that could use a more welcoming glow. Start with the way you use the space.</p><ul><li>Interior fixture replacements</li><li>Task and accent lighting</li><li>Dimmer and switch updates</li><li>Lighting plans for renovated rooms</li></ul>${dlink(e,'Talk about your lighting','request-a-quote','demo-button',{service:'Lighting & upgrades'})}</div></section><section class="demo-section demo-container"><div class="demo-section-head"><h2>A few helpful things to know.</h2></div><div class="electrical-services"><article><span>01 /</span><h3>The room</h3><p>Where do you need a change, and what do you use that space for?</p></article><article><span>02 /</span><h3>The feeling</h3><p>Brighter, warmer, easier to adjust? Describe what is missing.</p></article><article><span>03 /</span><h3>The fixture</h3><p>Share whether you have chosen a light or want to discuss options.</p></article></div></section>`; }
    src/pages/demos.mjs:62:  const fields = isOlive ? `<div class="field full"><label for="demo-occasion">Occasion <span>(optional)</span></label><input id="demo-occasion" name="occasion" maxlength="160" placeholder="Dinner, a birthday, or a group gathering"></div><div class="field"><label for="demo-date">Preferred date *</label><input id="demo-date" name="date" type="date" required></div><div class="field"><label for="demo-guests">Your table *</label><select id="demo-guests" name="guests" required><option value="">Choose party size</option><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5–6 guests</option></select></div><div class="field full"><label for="demo-time">Preferred time *</label><select id="demo-time" name="time" required><option value="">Choose a time</option><option>17:30</option><option>18:30</option><option>19:30</option><option>20:30</option></select></div>` : isForm ? `<div class="field full"><label for="demo-class">A class that feels right *</label><select id="demo-class" name="class" required><option value="">Choose a class</option><option>Foundations</option><option>Everyday Flow</option><option>Strength &amp; Length</option><option>Help me choose</option></select></div><div class="field full"><label for="demo-experience">Your Pilates experience *</label><select id="demo-experience" name="experience" required><option value="">Choose what fits</option><option>This would be my first class</option><option>I have tried a few classes</option><option>I have a regular practice</option></select></div>` : `<div class="field full"><label for="demo-service">What can we help with? *</label><select id="demo-service" name="service" required><option value="">Choose a service</option><option>Lighting &amp; upgrades</option><option>Repairs &amp; fault finding</option><option>Installations &amp; additions</option><option>Renovation electrical</option><option>I’m not sure yet</option></select></div><div class="field full"><label for="demo-project">Describe your project *</label><textarea id="demo-project" name="project" required maxlength="2000" placeholder="For example: better lighting in the kitchen."></textarea></div>`;
    src/pages/trades.mjs:14:  { id:'leaks', name:'Leaks & fixtures', icon:'water', problem:'A tap won’t stop dripping.', text:'From a dripping faucet to a leaking connection, start by telling us where you see water and when it happens.', detail:'We look at the fixture and its connections, explain what needs attention, and discuss repair or replacement options.', service:'Leaks & fixtures', route:'leaks-and-fixtures' },
    src/pages/trades.mjs:25:  return `<section class="clearflow-hero demo-container"><div>${kicker('A little help. A home that works.')}<h1>Let’s get your<br>home back<br>to <span>normal.</span></h1><p>Dripping taps. Slow drains. Cold showers.<br>Tell us what’s happening. We’ll help you<br class="desktop-break"> take the next step.</p><div class="trade-actions">${link(e,'Find the help you need','#find-help')}${link(e,'Request a visit','request-a-visit','','demo-text-link')}</div><div class="clearflow-hero-note">${icon('water')}Plumbing for the everyday.<br>And the days that don’t go to plan.</div></div><figure class="clearflow-picture">${photo('plumbing','A bright bathroom with a white bathtub, basin, and chrome fixtures',true)}<figcaption><span>Less disruption.</span><strong>More getting on<br>with your day.</strong>${icon('water')}</figcaption></figure></section><div class="clearflow-ribbon demo-container"><span>01 &nbsp; Tell us the problem</span><span>02 &nbsp; Understand your options</span><span>03 &nbsp; Plan the next step</span></div>${serviceFinder(e)}<section class="clearflow-hotwater"><div class="demo-container"><span class="water-illustration" aria-hidden="true">${icon('sun')}</span><div>${kicker('Let’s talk hot water')}<h2>A good day starts<br>with a warm shower.</h2><p>Repair the system you have, or explore a replacement? Start with the symptoms, your household, and the questions worth asking.</p>${link(e,'Understand your water heater','water-heaters','','demo-text-link')}</div></div></section>${closing(e,'Something not quite right?','Start with what you know. We’ll take it from there.')}`;
    src/pages/trades.mjs:33:  return `<section class="demo-page-hero demo-container">${kicker('Water-heater help')}<h1>Make room for<br><span>reliable hot water.</span></h1><p>When the shower goes cold, the answer starts with a closer look.<br>Here is what to consider before choosing your next step.</p></section><section class="demo-container water-options"><article>${kicker('01 / The system you have')}<h2>Start with<br>the symptoms.</h2><ul><li>Is there no hot water, or just less than usual?</li><li>Does the temperature keep changing?</li><li>Have you noticed a leak or unusual sound?</li><li>How old is the system, if you know?</li></ul><p>An assessment can help establish whether a specific fault can be repaired and whether that makes sense for the system’s condition.</p></article><article>${kicker('02 / A system for your household')}<h2>Think about<br>what you need.</h2><ul><li>How many people use hot water at once?</li><li>What energy supply and space are available?</li><li>Would a tank or tankless system suit the home?</li><li>What installation changes may be needed?</li></ul><p>Equipment, installation, and running costs all matter. Your options depend on your home and should be checked in person.</p></article></section><section class="demo-container demo-section trade-faq"><h2>A few common questions.</h2><details><summary>Does a cold shower mean I need a new heater?</summary><p>Not necessarily. A control, power supply, component, or demand issue could be involved. An assessment should identify the cause before recommending replacement.</p></details><details><summary>Can I choose a larger system?</summary><p>Capacity should match your household, available space, connections, and energy supply. Discuss those together before choosing equipment.</p></details><details><summary>What should I include in my request?</summary><p>Describe the symptoms and include the system type and approximate age if known. You do not need to diagnose the fault yourself.</p></details></section>${closing(e,'Tell us what’s changed.','No hot water, a new household routine, or an aging system. Start there.')}`;
    src/pages/trades.mjs:39:  ['03','Roof assessments','Understand what you’re looking at.','Start with your concerns and the roof’s visible condition. An assessment helps frame the options and what further investigation may be needed.','Roof assessment'],
    src/pages/trades.mjs:62:  return `<section class="demo-page-hero demo-container">${kicker(isPlumbing?'A little help starts here':'Your roof, in focus')}<h1>${isPlumbing?'Tell us what<br><span>needs attention.</span>':'Let’s start with<br><em>a closer look.</em>'}</h1></section><section class="demo-container demo-contact"><div><h2>${isPlumbing?'Your words.<br>A useful starting point.':'A little context.<br>A better conversation.'}</h2><p>${isPlumbing?'Describe the drip, the drain, or the cold shower. You don’t need to know what has caused it.':'Tell us what you have noticed and what you know about the roof. You can ask for an assessment without choosing repair or replacement.'}</p><aside class="demo-disclosure"><strong>This is an example website.</strong><p>${isPlumbing?'No plumbing visit':'No roofing assessment'} will be arranged. This is a fictional business. Use sample details; the form does not send or store information.</p></aside></div><form class="demo-request-form" data-demo-form data-demo-type="${e.theme}"><p class="form-intro">Try the ${isPlumbing?'visit':'assessment'} request. * Required.</p><div class="form-grid"><div class="field full"><label for="demo-name">Sample name *</label><input id="demo-name" name="name" required maxlength="100" placeholder="Alex Example"></div><div class="field full"><label for="demo-service">What can we help with? *</label><select id="demo-service" name="service" required><option value="">Choose a service</option>${[...services,'Help me choose'].map(s=>`<option>${escape(s)}</option>`).join('')}</select></div><div class="field full"><label for="demo-project">${isPlumbing?'What is happening?':'What have you noticed?'} *</label><textarea id="demo-project" name="project" required maxlength="2000" placeholder="${isPlumbing?'For example: the kitchen tap keeps dripping.':'For example: a damp patch near the upstairs window after rain.'}"></textarea></div></div><button class="demo-button" type="submit" data-js-submit disabled>Preview request${icon('arrow')}</button><p class="form-feedback" role="status" aria-live="polite" tabindex="-1"></p><noscript><p>Enable JavaScript to preview the request. Nothing will be sent.</p></noscript></form></section>`;
    ✓ • 141ms

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\review-sheets\current-electric-1440.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\review-sheets\clearflow-plumbing-390.png

## Activity

    $ Get-Content -Encoding utf8 src/pages/trades.mjs -TotalCount 13; Get-Content -Encoding utf8 src/styles/example-expansion.css -TotalCount 7
    import {photo as responsivePhoto} from '../components/photos.mjs';
    import { icon, escape } from '../components/ui.mjs';
    
    const link = (e, label, route = '', service = '', cls = 'demo-button') => {
      const [page,fragment]=route.split('#');
      const path=fragment&&!page?'':`/demos/${e.slug}/${page ? `${page}/` : ''}`;
      return `<a class="${cls}" href="${path}${service ? `?service=${encodeURIComponent(service)}` : ''}${fragment ? `#${fragment}` : ''}">${label}${icon('arrow')}</a>`;
    };
    const kicker = text => `<p class="demo-kicker">${text}</p>`;
    const photo=(name,alt,eager=false)=>responsivePhoto(name,{alt,eager,sizes:name==='roofing'?'100vw':'(max-width:760px) 100vw, 50vw'});
    const closing = (e, heading, text) => `<section class="trade-closing"><div class="demo-container"><div><h2>${heading}</h2><p>${text}</p></div>${link(e,e.theme === 'clearflow' ? 'Request a visit' : 'Request an assessment', e.routes[3])}</div></section>`;
    
    const plumbing = [
    .example-quick-nav { display:flex; gap:1.4rem; justify-content:space-between; border-block:1px solid currentColor; border-color:color-mix(in srgb,currentColor 18%,transparent); padding-block:.9rem; }
    .example-quick-nav a { display:inline-flex; align-items:center; gap:.8rem; font-size:.75rem; min-height:34px; }.example-quick-nav svg { width:14px; height:14px; }
    .example-more { position:relative; }.example-more summary { cursor:pointer; font-size:.8rem; list-style:none; padding:.6rem 0; white-space:nowrap; }.example-more summary::after { content:'+'; margin-left:.5rem; }.example-more[open] summary::after { content:'−'; }.example-more summary::-webkit-details-marker { display:none; }
    .example-more > nav { position:absolute; z-index:35; top:100%; right:-1rem; padding:1rem; width:270px; max-height:65vh; overflow:auto; border:1px solid color-mix(in srgb,currentColor 25%,transparent); background:var(--demo-menu-bg,#fff); color:var(--demo-menu-text,#202727); box-shadow:0 8px 25px #0002; display:grid; gap:.15rem; }
    .example-more > nav a { display:block; padding:.65rem; font-size:.82rem; }.example-more > nav a:hover { background:color-mix(in srgb,currentColor 8%,transparent); }
    .theme-olive { --demo-menu-bg:#252d23; --demo-menu-text:#e4e4ce; }.theme-current { --demo-menu-bg:#142e40; --demo-menu-text:#fff; }.theme-form { --demo-menu-bg:#e9e2ef; --demo-menu-text:#403247; }.theme-clearflow { --demo-menu-bg:#fff; --demo-menu-text:#14364a; }.theme-ridgeline { --demo-menu-bg:#f5f1e8; --demo-menu-text:#302e29; }
    .demo-nav { gap:1.3rem; }.demo-nav > .demo-button { white-space:nowrap; }.demo-footer-top > nav { display:grid; grid-template-columns:1fr 1fr; gap:.5rem 2rem; min-width:45%; }.demo-footer-top > nav a { font-size:.8rem; }
    ✓ • 116ms

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\review-sheets\olive-and-ember-390.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\review-sheets\form-studio-1440.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\review-sheets\ridgeline-roofing-390.png

## Assistant

I found a few gaps in the request flows: the fixed mobile button can lose the selected service, and clicking it while filling a form can reload the page. Private-dining requests also stop at six guests, while private Pilates sessions lead to a generic class choice. I’m fixing those paths and making the example forms easier to use on phones.

## Activity

    file changes: Completed · 2 changes
    Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\src\pages\example-expansion.mjs
    @@ -8,2 +8,8 @@
     
    +export function requestParameters(e,route) {
    +  const coreServices={current:{lighting:'Lighting & upgrades'},clearflow:{'water-heaters':'Water heaters'}};
    +  const context=exampleContent[e.theme].pages.find(p=>p.route===route)?.context||coreServices[e.theme]?.[route];
    +  return context?{[e.theme==='form'?'class':e.theme==='olive'?'occasion':'service']:context}:{};
    +}
    +
     export function expandedNavigation(e) {
    Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\src\scripts\client.js
    @@ -78,3 +78,3 @@
         const type=form.dataset.demoType;
    -    const summary=type==='olive'?`${data.guests}, ${data.date} at ${data.time}`:type==='form'?`${data.class} · ${data.experience}`:data.service;
    +    const summary=type==='olive'?`${data.occasion?data.occasion+' · ':''}${data.guests}, ${data.date} at ${data.time}`:type==='form'?`${data.class} · ${data.experience}`:data.service;
         const feedback=form.querySelector('.form-feedback');
    @@ -95,3 +95,3 @@
       const interest=serviceNames[query.get('interest')]||exampleNames[query.get('example')];
    -  if(interest){const context=inquiry.querySelector('[data-inquiry-context]');if(context){context.hidden=false;context.textContent=`You’re asking about: ${interest}`;inquiry.querySelector('[name="interest"]').value=interest;}}
    +  if(interest){const context=inquiry.querySelector('[data-inquiry-context]');if(context){context.hidden=false;context.textContent=`You’re asking about: ${interest}`;const field=inquiry.querySelector('[name="interest"]');field.defaultValue=interest;field.value=interest;}}
       const announce=message=>{feedback.textContent=message;feedback.focus();};
    @@ -133,3 +133,3 @@
         try {await navigator.clipboard.writeText(brief);announce('Brief copied. Nothing has been sent.');}
    -    catch {briefArea.focus();briefArea.select();announce('Automatic copying is unavailable. Select and copy the brief from the text box.');}
    +    catch {feedback.textContent='Automatic copying is unavailable. Your brief is selected below; use your device’s copy command.';briefArea.focus();briefArea.select();}
       });

## Activity

    file changes: Completed · 1 changes
    Add: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\.tools\finish-request-flow.mjs
    import fs from 'node:fs/promises';
    async function replace(file,before,after,count=1){
     const text=await fs.readFile(file,'utf8');
     if(text.split(before).length-1!==count)throw new Error(`Unexpected match count in ${file}: ${before}`);
     await fs.writeFile(file,text.replaceAll(before,after));
    }
    await replace('src/pages/demos.mjs','exampleHomeExtension,expandedNavigation','exampleHomeExtension,expandedNavigation,requestParameters');
    await replace('src/pages/demos.mjs','  const query=new URLSearchParams(parameters).toString();','  const query=new URLSearchParams(parameters).toString();\n  if(route.startsWith(\'#\'))return `<a class="${cls}" href="${escape(route)}">${label}${icon(\'diagonal\')}</a>`;');
    await replace('src/pages/demos.mjs','  const c = config[e.theme];','  const c = config[e.theme];\n  const requestTarget=page===c.contact?\'#demo-request\':c.contact;\n  const parameters=requestParameters(e,page);');
    await replace('src/pages/demos.mjs',"dlink(e,c.action,c.contact)","dlink(e,c.action,requestTarget,'demo-button',parameters)",2);
    for(const file of ['src/pages/demos.mjs','src/pages/trades.mjs'])await replace(file,'<form class="demo-request-form"','<form id="demo-request" class="demo-request-form" tabindex="-1"');
    await replace('src/pages/demos.mjs','<option>2 guests</option>','<option>1 guest</option><option>2 guests</option>');
    await replace('src/pages/demos.mjs','<option>5–6 guests</option>','<option>5–6 guests</option><option>7–10 guests</option><option>11–20 guests</option><option>More than 20 guests</option>');
    await replace('src/pages/demos.mjs','<option>Strength &amp; Length</option>','<option>Strength &amp; Length</option><option>Private session</option>');
    await replace('src/data/example-content.mjs',"action:'Ask about a private session',context:'Help me choose'","action:'Ask about a private session',context:'Private session'");
    await replace('src/pages/agency-redesign.mjs','<form class="inquiry-form simple-inquiry"','<form id="inquiry" class="inquiry-form simple-inquiry" tabindex="-1"');
    await replace('src/components/ui.mjs','export function header(path) {','export function header(path) {\n  const bookingTarget=path===\'/book/\'?\'#inquiry\':\'/book/\';');
    await replace('src/components/ui.mjs',"button('Book a call','/book/')","button('Book a call',bookingTarget)",2);
    await replace('src/components/ui.mjs','<a href="/book/">Book a call ${icon(\'arrow\')}</a>','<a href="${path===\'/book/\'?\'#inquiry\':\'/book/\'}">Book a call ${icon(\'arrow\')}</a>');
    console.log('Updated request links, form anchors, and supported request choices.');

## Activity

    $ node .tools/finish-request-flow.mjs
    file:///C:/Users/muham/OneDrive/App%20Creation/LANDING%20PAGE/SKIPMANUAL-newest/.tools/finish-request-flow.mjs:4
     if(text.split(before).length-1!==count)throw new Error(`Unexpected match count in ${file}: ${before}`);
                                                  ^
    
    Error: Unexpected match count in src/data/example-content.mjs: action:'Ask about a private session',context:'Help me choose'
        at replace (file:///C:/Users/muham/OneDrive/App%20Creation/LANDING%20PAGE/SKIPMANUAL-newest/.tools/finish-request-flow.mjs:4:47)
        at async file:///C:/Users/muham/OneDrive/App%20Creation/LANDING%20PAGE/SKIPMANUAL-newest/.tools/finish-request-flow.mjs:15:1
    
    Node.js v22.22.1
    ✗ (1) • 122ms

## Activity

    $ rg -n -o '.{0,80}context:.Help me choose.{0,50}' src/data/example-content.mjs; rg -n -o '.{0,50}id="demo-request".{0,50}' src/pages/demos.mjs src/pages/trades.mjs
    57:ho want more space to ask questions and explore the basics.',image:'yoga-class',context:'Help me choose',
    ✗ (1) • 125ms

## Activity

    file changes: Completed · 3 changes
    Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\.tools\finish-request-flow.mjs
    @@ -6,11 +6,3 @@
     }
    -await replace('src/pages/demos.mjs','exampleHomeExtension,expandedNavigation','exampleHomeExtension,expandedNavigation,requestParameters');
    -await replace('src/pages/demos.mjs','  const query=new URLSearchParams(parameters).toString();','  const query=new URLSearchParams(parameters).toString();\n  if(route.startsWith(\'#\'))return `<a class="${cls}" href="${escape(route)}">${label}${icon(\'diagonal\')}</a>`;');
    -await replace('src/pages/demos.mjs','  const c = config[e.theme];','  const c = config[e.theme];\n  const requestTarget=page===c.contact?\'#demo-request\':c.contact;\n  const parameters=requestParameters(e,page);');
    -await replace('src/pages/demos.mjs',"dlink(e,c.action,c.contact)","dlink(e,c.action,requestTarget,'demo-button',parameters)",2);
    -for(const file of ['src/pages/demos.mjs','src/pages/trades.mjs'])await replace(file,'<form class="demo-request-form"','<form id="demo-request" class="demo-request-form" tabindex="-1"');
    -await replace('src/pages/demos.mjs','<option>2 guests</option>','<option>1 guest</option><option>2 guests</option>');
    -await replace('src/pages/demos.mjs','<option>5–6 guests</option>','<option>5–6 guests</option><option>7–10 guests</option><option>11–20 guests</option><option>More than 20 guests</option>');
    -await replace('src/pages/demos.mjs','<option>Strength &amp; Length</option>','<option>Strength &amp; Length</option><option>Private session</option>');
    -await replace('src/data/example-content.mjs',"action:'Ask about a private session',context:'Help me choose'","action:'Ask about a private session',context:'Private session'");
    +await replace('src/data/example-content.mjs',"context:'Help me choose'","context:'Private session'");
     await replace('src/pages/agency-redesign.mjs','<form class="inquiry-form simple-inquiry"','<form id="inquiry" class="inquiry-form simple-inquiry" tabindex="-1"');
    Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\src\styles\example-expansion.css
    @@ -27,2 +27,3 @@
     @media(max-width:760px) {
    +  .demo-request-form input,.demo-request-form select,.demo-request-form textarea { font-size:1rem; }
       .demo-body { padding-bottom:70px; }.demo-header { min-height:83px; }.demo-mobile nav { max-height:65dvh; overflow:auto; overscroll-behavior:contain; top:calc(100% - 1px); }.demo-mobile nav a { font-size:.88rem; min-height:44px; }
    Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\src\styles\global.css
    @@ -4,3 +4,3 @@
     * { box-sizing: border-box; }
    -html { scroll-behavior: smooth; scroll-padding-top: 100px; }
    +html { scroll-behavior: smooth; scroll-padding-top: 100px; scroll-padding-bottom:calc(85px + env(safe-area-inset-bottom)); }
     body { margin: 0; background: var(--color-background); color: var(--color-foreground); font-family: var(--font-sans); font-size: 16px; line-height: 1.6; -webkit-font-smoothing: antialiased; }

## Activity

    $ node .tools/finish-request-flow.mjs
    Updated request links, form anchors, and supported request choices.
    ✓ • 114ms

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\review-sheets\agency-1440.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\review-sheets\agency-390.png

## Activity

    file changes: Completed · 2 changes
    Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\scripts\audit.mjs
    @@ -111,2 +111,31 @@
       // Everyday examples and both new service guides: every choice, keyboard use, and handoff.
    +  // Quick request buttons retain the service and never reload an in-progress form.
    +  for(const [route,field,expected] of [
    +    ['/demos/olive-and-ember/private-dining/','#demo-occasion','Private dining'],
    +    ['/demos/current-electric/repairs/','#demo-service','Repairs & fault finding'],
    +    ['/demos/current-electric/lighting/','#demo-service','Lighting & upgrades'],
    +    ['/demos/form-studio/private-sessions/','#demo-class','Private session'],
    +    ['/demos/clearflow-plumbing/drains/','#demo-service','Drains & blockages'],
    +    ['/demos/clearflow-plumbing/water-heaters/','#demo-service','Water heaters'],
    +    ['/demos/ridgeline-roofing/roof-replacement/','#demo-service','Roof replacement'],
    +  ]) {
    +    for(const width of [390,1440]) {
    +      await page.setViewportSize({width,height:844});await page.goto(base+route);
    +      const request=page.locator(width===390?'.example-mobile-action .demo-button':'.demo-nav > .demo-button');
    +      await request.click();assert.equal(await page.locator(field).inputValue(),expected);
    +      await page.locator('#demo-name').fill('Keep my request');
    +      await request.click();assert.equal(await page.locator('#demo-name').inputValue(),'Keep my request');
    +      assert.equal(new URL(page.url()).hash,'#demo-request');
    +      assert(Number.parseFloat(await page.locator('#demo-name').evaluate(e=>getComputedStyle(e).fontSize))>=16||width>760);
    +    }
    +  }
    +  await page.setViewportSize({width:390,height:844});
    +  await page.goto(base+'/book/?interest=reviews');await page.locator('#name').fill('Keep my agency request');
    +  await page.locator('.mobile-action-bar a').last().click();assert.equal(await page.locator('#name').inputValue(),'Keep my agency request');
    +  await page.locator('.mobile-nav summary').click();await page.locator('.mobile-nav .button').click();
    +  assert(!(await page.locator('.mobile-nav').evaluate(e=>e.open)));assert.equal(await page.locator('#name').inputValue(),'Keep my agency request');
    +  await page.goto(base+'/demos/olive-and-ember/book-a-table/?occasion=Private%20dining');
    +  await page.locator('#demo-name').fill('Sample Group');await page.locator('#demo-date').fill('2030-12-10');
    +  await page.locator('#demo-guests').selectOption('11–20 guests');await page.locator('#demo-time').selectOption('18:30');await page.locator('[type="submit"]').click();
    +  assert.match(await page.locator('.form-feedback').textContent(),/Private dining.*11–20 guests/);
       for(const [url,choices] of [['/',['missed-call','inquiry','review']],['/services/',['missed-call','inquiry','review']],['/demos/clearflow-plumbing/',['leaks','drains','hot-water','installations']],['/demos/ridgeline-roofing/repair-or-replace/',['isolated','widespread','unsure']]]) {
    @@ -147,2 +176,5 @@
       assert(await page.locator('.brief-output').isVisible());
    +  await page.evaluate(()=>Object.defineProperty(navigator,'clipboard',{configurable:true,value:{writeText:async()=>{throw new Error('Clipboard unavailable');}}}));
    +  await page.getByRole('button',{name:'Copy brief',exact:true}).click();
    +  assert(await page.locator('#brief').evaluate(e=>e===document.activeElement&&e.selectionStart===0&&e.selectionEnd===e.value.length),'Manual copy must leave the brief focused and selected');
       const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'Save brief'}).click();const download=await downloadPromise;assert.equal(download.suggestedFilename(),'skipmanual-website-brief.txt');
    @@ -156,2 +188,7 @@
       assert.equal(await page.locator('#name').inputValue(),'');
    +  await page.goto(base+'/book/?interest=reviews');
    +  await page.evaluate(()=>{document.querySelector('[data-inquiry]').dataset.endpoint='/audit-inquiry';});
    +  await page.locator('#name').fill('Sample Owner');await page.locator('#business').fill('Sample Business');await page.locator('#email').fill('sample@example.com');await page.locator('#need').selectOption('A new website');
    +  await page.locator('[type="submit"]').click();await page.waitForFunction(()=>document.querySelector('.form-feedback').textContent.includes('has been sent'));
    +  assert.equal(await page.locator('[name="interest"]').inputValue(),'Review requests','Reset must preserve the visible inquiry context');
       await page.goto(base+'/demos/olive-and-ember/book-a-table/');await page.locator('#demo-name').fill('Sample Guest');await page.locator('#demo-date').fill('2030-12-10');await page.locator('#demo-guests').selectOption('2 guests');await page.locator('#demo-time').selectOption('18:30');await page.locator('[type="submit"]').click();assert.match(await page.locator('.form-feedback').textContent(),/nothing has been sent or booked/i);
    Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\src\scripts\client.js
    @@ -29,2 +29,3 @@
       menu.addEventListener('keydown',event=>{if(event.key==='Escape'){menu.open=false;menu.querySelector('summary').focus();}});
    +  menu.addEventListener('click',event=>{if(event.target.closest('a[href]'))menu.open=false;});
       document.addEventListener('click',event=>{if(menu.open&&!menu.contains(event.target))menu.open=false;});

## Activity

    $ npm run build
    
    > skipmanual@1.0.0 build
    > node scripts/build.mjs
    
    Built 72 static pages in dist/. No production dependencies or client framework.
    Public origin is unconfigured: canonical URLs and sitemap will be generated when PUBLIC_SITE_URL is set.
    Contact is in honest brief-only mode. Set a verified contact email or endpoint to enable inquiries.
    ✓ • 927ms

## Activity

    $ $env:PLAYWRIGHT_MODULE='C:\Users\muham\AppData\Local\ms-playwright-go\1.50.1\package'; $env:BROWSER_PATH='C:\Users\muham\.cache\puppeteer\chrome\win64-139.0.7258.68\chrome-win64\chrome.exe'; npm run audit
    
    > skipmanual@1.0.0 audit
    > node scripts/audit.mjs
    
    Passed 72 page checks at 1440px.
    Passed 72 page checks at 768px.
    Passed 72 page checks at 390px.
    Passed 72 page checks at 320px.
    Audit passed: 288 responsive page checks, 152 unique links, navigation, forms, filtering, reduced motion, no-JavaScript rendering, and 404 behavior.
    ✓ • 3m 15s

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\review-sheets\clearflow-plumbing-1440.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\review-sheets\ridgeline-roofing-1440.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\review-sheets\olive-and-ember-1440.png

## Activity

    $ rg -n 'Ã|Â|â€™|�' src public/images/social-card.svg README.md docs; Get-Item public/images/social-card.png, dist/images/social-card.png | Select-Object FullName,Length,LastWriteTime
    
    FullName                                                                                          Length LastWriteTime
    --------                                                                                          ------ -------------
    C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\public\images\social-card.png  56104 05-10-2026 ...
    C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\dist\images\social-card.png    56104 05-10-2026 ...
    
    
    ✓ • 198ms

## Assistant

The fixes passed the full audit: all 72 pages at four screen widths, 152 unique links, and the interaction checks. Request buttons now preserve the service choice and keep entered details intact; group dining and private-session requests have appropriate options. I’m saving the completion notes and refreshing screenshots of the changed forms.

## Activity

    file changes: Completed · 4 changes
    Add: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\.tools\capture-final-forms.mjs
    import fs from 'node:fs/promises';
    import {createRequire} from 'node:module';
    const require=createRequire(import.meta.url);
    const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
    const browser=await chromium.launch({headless:true,executablePath:process.env.BROWSER_PATH});
    try {
     const page=await browser.newPage({viewport:{width:390,height:844}});
     await fs.mkdir('artifacts/final-review',{recursive:true});
     for(const [name,route,selector] of [
       ['booking','/book/?interest=reviews','#inquiry'],
       ['restaurant','/demos/olive-and-ember/book-a-table/?occasion=Private%20dining','#demo-request'],
       ['electrical','/demos/current-electric/request-a-quote/?service=Lighting%20%26%20upgrades','#demo-request'],
       ['studio','/demos/form-studio/find-your-class/?class=Private%20session','#demo-request'],
       ['plumbing','/demos/clearflow-plumbing/request-a-visit/?service=Water%20heaters','#demo-request'],
       ['roofing','/demos/ridgeline-roofing/request-an-assessment/?service=Roof%20replacement','#demo-request'],
     ]) {
       await page.goto('http://127.0.0.1:4321'+route,{waitUntil:'networkidle'});
       await page.evaluate(()=>document.fonts.ready);
       await page.locator(selector).screenshot({path:`artifacts/final-review/${name}-form-mobile.png`});
     }
     console.log('Refreshed all six mobile request-form screenshots.');
    }finally{await browser.close();}
    Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\README.md
    @@ -4,2 +4,4 @@
     
    +For the latest completed work and intentionally deferred connections, see [the project handoff](docs/project-handoff.md).
    +
     ## Run locally
    Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\docs\design-system.md
    @@ -46,2 +46,4 @@
     
    +Request buttons in the example headers and mobile action bars carry the current service into the form. On a request page, they jump to the existing form without reloading or clearing entered details. SkipManual’s booking-page navigation behaves the same way. Private dining supports solo diners and larger groups, and private Pilates sessions have a dedicated request option. Example form fields use at least 16px text on phones. When clipboard access is unavailable, the prepared brief remains focused and selected for manual copying.
    +
     ## Commercial content
    Add: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\docs\project-handoff.md
    # Project handoff — October 5, 2026
    
    The white agency redesign and five expanded example websites are complete for local design review. Start the preview with `npm run preview` and open http://localhost:4321. Run `npm run build` after changing source files, or use `npm run dev` for rebuilding during development.
    
    ## Completed scope
    
    - White agency background, business photography, prominent $249/month pricing, plain-language explanations of the five confirmed services, and direct links to examples.
    - Dedicated service-detail, process, and booking pages, with a four-field inquiry form and optional additional details.
    - Five fictional examples with ten pages each: restaurant, electrical, Pilates, plumbing, and roofing. The overall build contains 72 routes.
    - Twenty-four stock photographs, local responsive variants, galleries with keyboard controls, ten-page navigation, and mobile action bars.
    - Unique titles and descriptions, and LocalBusiness structured data using confirmed SkipManual information. Fictional example sites use noindex and omit real-business schema.
    
    ## Final review fixes
    
    - Header and fixed mobile request links carry the service from a detail page into its form, including the original lighting and water-heater pages.
    - Request buttons on an existing request page jump to the form without reloading the page or clearing entered information. Booking links on `/book/` behave the same way, and the mobile menu closes after choosing the link.
    - Restaurant requests support solo diners and larger groups and include the occasion in the request summary. Private Pilates sessions have their own selectable option.
    - Mobile example inputs use at least 16px text, and scrolling leaves room for the fixed mobile controls.
    - Clipboard failures leave the brief selected and focused for manual copying. The visible inquiry interest is preserved after a successful form reset.
    
    ## Validation
    
    - `npm run build`: passed, 72 generated routes.
    - `npm run audit`: passed, 288 responsive page checks across 1440, 768, 390, and 320px, with 152 unique links and no reported page or asset errors.
    - Interaction coverage includes galleries, menus, filters, context handoffs, non-destructive form anchors, group dining, private-session requests, form validation, mocked delivery, copy fallback, downloads, reduced motion, and no-JavaScript behavior.
    - Desktop and mobile visual review sheets cover all pages; desktop, tablet, and mobile page captures are in `artifacts/page-review/`. Final changed-form screenshots are in `artifacts/final-review/`.
    - Checks ran against local Chromium. Delivery requests were mocked; no real inquiries or bookings were sent.
    
    ## Deferred by the owner
    
    The owner explicitly asked to connect booking and contact delivery only after reviewing the design. Do not ask for those details again merely to finish this design task. Forms currently prepare local requests and clearly state that nothing is sent or booked.
    
    `PUBLIC_SITE_URL`, `PUBLIC_CONTACT_EMAIL` or `PUBLIC_CONTACT_ENDPOINT`, and `PUBLIC_BOOKING_URL` remain unconfigured. A verified public origin will enable canonical URLs and sitemap generation. These details must come from the owner; do not invent an address, phone number, booking URL, email address, testimonials, client results, or unconfirmed commercial terms.
    
    No deployment or publishing was performed. This workspace has no Git repository.

## Activity

    $ npm run build
    
    > skipmanual@1.0.0 build
    > node scripts/build.mjs
    
    Built 72 static pages in dist/. No production dependencies or client framework.
    Public origin is unconfigured: canonical URLs and sitemap will be generated when PUBLIC_SITE_URL is set.
    Contact is in honest brief-only mode. Set a verified contact email or endpoint to enable inquiries.
    ✓ • 937ms

## Activity

    $ $env:PLAYWRIGHT_MODULE='C:\Users\muham\AppData\Local\ms-playwright-go\1.50.1\package'; $env:BROWSER_PATH='C:\Users\muham\.cache\puppeteer\chrome\win64-139.0.7258.68\chrome-win64\chrome.exe'; node .tools/capture-final-forms.mjs
    Refreshed all six mobile request-form screenshots.
    ✓ • 5.41s

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\review-sheets\current-electric-390.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\review-sheets\form-studio-390.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\final-review\restaurant-form-mobile.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\final-review\studio-form-mobile.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\final-review\booking-form-mobile.png

## Activity

    $ node --input-type=module -e "import fs from 'node:fs/promises'; const result=JSON.parse(await fs.readFile('artifacts/audit-results.json','utf8')); console.log(JSON.stringify({pages:result.pages,checks:result.pageChecks,links:result.internalLinks,interactions:result.interactions,errors:result.errors})); console.log('Preview HTTP status:',(await fetch('http://127.0.0.1:4321/')).status);"
    {"pages":72,"checks":288,"links":152,"interactions":"passed","errors":[]}
    Preview HTTP status: 200
    ✓ • 6.15s

## Activity

    file changes: Completed · 1 changes
    Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\src\styles\example-expansion.css
    @@ -23,2 +23,3 @@
     .example-mobile-action { display:none; }
    +.demo-request-form .field label span { color:inherit; }
     .menu-category-photo { width:100%; height:230px; object-fit:cover; margin-bottom:1.8rem; }

## Activity

    $ npm run build
    
    > skipmanual@1.0.0 build
    > node scripts/build.mjs
    
    Built 72 static pages in dist/. No production dependencies or client framework.
    Public origin is unconfigured: canonical URLs and sitemap will be generated when PUBLIC_SITE_URL is set.
    Contact is in honest brief-only mode. Set a verified contact email or endpoint to enable inquiries.
    ✓ • 954ms

## Activity

    $ $env:PLAYWRIGHT_MODULE='C:\Users\muham\AppData\Local\ms-playwright-go\1.50.1\package'; $env:BROWSER_PATH='C:\Users\muham\.cache\puppeteer\chrome\win64-139.0.7258.68\chrome-win64\chrome.exe'; node .tools/capture-final-forms.mjs
    Refreshed all six mobile request-form screenshots.
    ✓ • 5.42s

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\final-review\restaurant-form-mobile.png

## Assistant

Continued and completed the final review. [Open SkipManual](http://localhost:4321).

- White main site with clearer services, pricing, and navigation.
- Five expanded example websites, 10 pages each.
- Fixed request buttons losing selections or clearing forms.
- Improved mobile forms, group dining, and private-session requests.

Build passed, along with **288 responsive checks and 152 link checks**.

Booking and email connections remain deferred as requested.

## User

on the website examples put them in order of showing in the ui coz i target them the most so make them in top as in the order.
Electric first, roofers second, plumbing 3rd, wellness 4th, the hotel 5th.

also remove all em dashes from the whole website

## Assistant

I’ll reorder the examples to Electrical, Roofing, Plumbing, Wellness, then the restaurant example you called the hotel. I’ll also remove em dashes throughout the site, including page titles and form text.

## Activity

    $ Get-Content -Encoding utf8 src/data/examples.mjs; rg -n '—|&mdash;|&#8212;|&#x2014;|\\u2014|examples\[|olive-and-ember.*current-electric|restaurant.*electrical' src scripts public --glob '!*.webp' --glob '!*.png' --glob '!*.woff' --glob '!*.ttf'; Get-Content package.json; Get-ChildItem -Force -Name
    import {exampleContent} from './example-content.mjs';
    export const examples = [
      {
        slug: 'olive-and-ember', name: 'Olive & Ember', category: 'Restaurant',
        style: 'Warm. Seasonal. Inviting.', theme: 'olive', number: '01',
        description: 'A neighborhood restaurant, with a website that feels like a seat at the table.',
        brief: 'Give guests a feel for the food and atmosphere, make the menu easy to explore, and put a table request within reach.',
        approach: 'Rich olive tones, expressive serif type, and considered food photography create a relaxed, intimate experience. The menu is real text, so it is easy to read on a phone.',
        features: ['Readable seasonal menu', 'Table request flow', 'Atmosphere-led photography', 'A dedicated restaurant story'],
        image: '/images/restaurant.webp', alt: 'Beautifully plated seasonal food at a restaurant table',
        pages: ['Home', 'Menu', 'Our story', 'Book a table'],
        routes: ['', 'menu', 'our-story', 'book-a-table'],
        headline: 'Good food.\nGreat company.',
        outcome: 'Help a new guest picture their evening, find something they want to eat, and take the next step.',
      },
      {
        slug: 'current-electric', name: 'Current Electric', category: 'Electrical',
        style: 'Direct. Dependable. Clear.', theme: 'current', number: '02',
        description: 'A residential electrical business that puts clarity and contact first.',
        brief: 'Help homeowners understand the work available and describe their project without searching through a complicated website.',
        approach: 'A strong navy and yellow identity, clear service categories, and straightforward language make a practical service feel approachable. The inquiry form is organized around the job.',
        features: ['Clear service categories', 'Detailed service information', 'Project inquiry flow', 'Mobile-friendly navigation'],
        image: '/images/electrician.webp', alt: 'Electrical professional working on a wiring installation',
        pages: ['Home', 'Services', 'Lighting & upgrades', 'Request a quote'],
        routes: ['', 'services', 'lighting', 'request-a-quote'],
        headline: 'Good energy.\nExpertly wired.',
        outcome: 'Make it easy for a homeowner to recognize the right service and explain what needs attention.',
      },
      {
        slug: 'form-studio', name: 'Form Studio', category: 'Wellness & fitness',
        style: 'Calm. Considered. Human.', theme: 'form', number: '03',
        description: 'A boutique Pilates studio with space to breathe and a clear path to a first class.',
        brief: 'Make Pilates feel welcoming to beginners while giving returning visitors a simple way to compare classes.',
        approach: 'Soft lilac, sculptural typography, and spacious layouts reflect a slower, more intentional pace. Class information explains the experience without relying on fitness jargon.',
        features: ['Class comparison', 'Weekly class schedule', 'Beginner-friendly guidance', 'Introductory class request'],
        image: '/images/pilates.webp', alt: 'Studio exercise session with Pilates-inspired movement',
        pages: ['Home', 'Classes', 'The studio', 'Find your class'],
        routes: ['', 'classes', 'the-studio', 'find-your-class'],
        headline: 'A little movement.\nA lot more you.',
        outcome: 'Help a first-time visitor find a class that feels right and feel comfortable asking to join.',
      },
      {
        slug: 'clearflow-plumbing', name: 'Clearflow Plumbing', category: 'Plumbing',
        style: 'Fresh. Practical. Reassuring.', theme: 'clearflow', number: '04',
        description: 'A helpful residential plumbing website that starts with the problem, then makes the next step simple.',
        brief: 'Help a homeowner identify the service they need without knowing plumbing terminology, and make it easy to describe the issue.',
        approach: 'Bright white, clear blue, and practical service choices create a helpful, approachable identity. A problem-first service finder, roomy layouts, and plain-language water-heater guidance put usefulness first.',
        features: ['Interactive service finder', 'Plain-language service pages', 'Water-heater information', 'A request form that remembers the service'],
        image: '/images/plumbing.webp', alt: 'A bright bathroom with neatly installed taps and plumbing fixtures',
        pages: ['Home', 'Plumbing services', 'Water heaters', 'Request a visit'],
        routes: ['', 'services', 'water-heaters', 'request-a-visit'],
        headline: 'Let’s get your home\nback to normal.',
        outcome: 'Let a homeowner start with a familiar problem, find the right information, and make an informed inquiry.',
      },
      {
        slug: 'ridgeline-roofing', name: 'Ridgeline Roofing', category: 'Roofing',
        style: 'Grounded. Architectural. Considered.', theme: 'ridgeline', number: '05',
        description: 'An architectural roofing website that helps homeowners understand their options before requesting an assessment.',
        brief: 'Give a homeowner a clear route through repairs, replacement, and roof materials, without pressure or unsupported promises.',
        approach: 'Sand, charcoal, and rust pair with wide architectural imagery, structured typography, and an editorial page rhythm. A repair-or-replace guide gives visitors something useful to explore before they make an inquiry.',
        features: ['Repair-or-replace guidance', 'Roof material comparison', 'Distinct roofing service pages', 'A guided assessment request'],
        image: '/images/roofing.webp', alt: 'A residential home with a prominent pitched roof and surrounding trees',
        pages: ['Home', 'Roofing services', 'Repair or replace?', 'Request an assessment'],
        routes: ['', 'roofing', 'repair-or-replace', 'request-an-assessment'],
        headline: 'Built around what\nyour roof needs.',
        outcome: 'Help visitors understand the questions worth asking about their roof, then request an assessment with confidence.',
      },
    ];
    
    for(const example of examples) {
      const extra=exampleContent[example.theme].pages;
      example.pages.push(...extra.map(page=>page.label));
      example.routes.push(...extra.map(page=>page.route));
      example.features.push('An expanded photo gallery', 'Helpful answers and visitor guides');
    }
    scripts\audit.mjs:83:  for(const slug of ['olive-and-ember','current-electric','form-studio','clearflow-plumbing','ridgeline-roofing']) {
    scripts\audit.mjs:108:  for(const [route,field,expected] of [['/demos/olive-and-ember/private-dining/','#demo-occasion','Private dining'],['/demos/current-electric/repairs/','#demo-service','Repairs & fault finding'],['/demos/form-studio/foundations/','#demo-class','Foundations'],['/demos/clearflow-plumbing/drains/','#demo-service','Drains & blockages'],['/demos/ridgeline-roofing/roof-replacement/','#demo-service','Roof replacement']]) {
    scripts\audit.mjs:206:  for(const [label,url,width,height] of [['home-desktop','/',1440,1000],['home-mobile','/',390,844],['examples','/examples/',1440,1000],['restaurant','/demos/olive-and-ember/',1440,1000],['electrical','/demos/current-electric/',1440,1000],['studio','/demos/form-studio/',1440,1000],['contact','/contact/',1440,1000]]) {
    scripts\build.mjs:31:const pages = [...agencyPages,...examples.map(e=>({path:`/examples/${e.slug}/`,title:`${e.name} — ${e.category} Website Concept | SkipManual`,description:`Explore ${e.name}, an original ${e.category.toLowerCase()} example website by SkipManual. See the design approach, useful features, and the complete fictional website.`,render:()=>exampleDetail(e)})),...demoPages()];
    src\data\example-content.mjs:26:       sections:[section('Fresh, bright, and alcohol-free.','Sparkling citrus, a seasonal fruit cooler, or a simple soda with herbs. A considered alcohol-free choice should feel like part of the occasion, with its own flavor and character.',['Citrus & rosemary spritz — sparkling citrus, rosemary, soda','Seasonal fruit cooler — fruit, lime, crushed ice','Ginger & lime — ginger, fresh lime, sparkling water']),section('A companion for the table.','A real wine and beer selection would be chosen to complement the current menu, with serving sizes, prices, and availability made clear. Tell the restaurant what you enjoy and what you are eating before choosing.'),section('The last few minutes are yours.','Finish with an espresso, a long coffee, or a pot of tea. Dessert can be shared, the conversation can continue, and the evening can find its own ending. This is an illustrative drinks collection for a fictional restaurant.')],action:'Something sweet?',target:'menu'},
    src\scripts\client.js:95:  const exampleNames={'olive-and-ember':'Olive & Ember','current-electric':'Current Electric','form-studio':'Form Studio','clearflow-plumbing':'Clearflow Plumbing','ridgeline-roofing':'Ridgeline Roofing'};
    src\scripts\client.js:113:        emailLink.href=`mailto:${email}?subject=${encodeURIComponent(`Website inquiry — ${data.business}`)}&body=${encodeURIComponent(brief)}`;
    src\pages\agency.mjs:13:function about() { return `${pageHero('About SkipManual','For the people with<br>a business to run.','Your days are already full. Building a professional online presence shouldn’t mean becoming a designer, writer, or website expert on top of everything else.')}<section class="section container" style="padding-top:0"><div class="about-split"><div class="about-photo">${photo('cafe',{eager:true})}</div><div>${eyebrow('Why SkipManual exists')}<h2>Good work deserves<br>a good website.</h2><p>Local businesses put care into the details: the way a job is finished, how a customer is welcomed, the experience someone comes back for.</p><p>We believe a website should reflect that same care. SkipManual brings your business into focus online, with clear information, thoughtful design, and an obvious next step.</p><p>We build the website and plan the customer follow-up with you: inquiry replies, missed-call texts, and review requests that fit the way you work. The aim is a clearer next step for your customers and a little less on your plate.</p></div></div></section><section class="container about-statement">${eyebrow('Our point of view')}<h2>A website shouldn’t need<br>an explanation.<br><span class="serif"><em>It should give one.</em></span></h2><p>What you do. Who it’s for. Why it matters. How to get in touch. When those things are clear, your website is doing its job.</p></section><section class="section container"><div class="section-head"><div>${eyebrow('How we work')}<h2>Thoughtful by design.<br>Straightforward by choice.</h2></div></div><div class="principles-grid"><article><h3>Clarity over complexity.</h3><p>Useful pages, understandable language, and decisions that help your customers—not a list of features they don’t need.</p></article><article><h3>Character over sameness.</h3><p>A restaurant and an electrician have different customers and different needs. Their websites should reflect that.</p></article><article><h3>Honesty from the start.</h3><p>Our examples are clearly identified as fictional businesses. Our scope is agreed with you. We let the work speak without invented reviews or results.</p></article></div></section>${cta()}`; }
    src\pages\demos.mjs:75:    return routes.map(([route,title,render])=>({path:`/demos/${e.slug}/${route ? `${route}/` : ''}`,title:`${title} — ${e.name} | SkipManual Example`,description:`Explore the ${title.toLowerCase()} page of ${e.name}, a fictional ${e.category.toLowerCase()} website concept designed by SkipManual. This is an illustrative example, not a real business.`,demo:true,bodyClass:'demo-body',render:()=>{
    {
      "name": "skipmanual",
      "version": "1.0.0",
      "private": true,
      "type": "module",
      "scripts": {
        "dev": "node scripts/build.mjs && node scripts/serve.mjs --watch",
        "build": "node scripts/build.mjs",
        "preview": "node scripts/serve.mjs",
        "audit": "node scripts/audit.mjs",
        "capture:previews": "node scripts/capture-previews.mjs",
        "capture:pages": "node scripts/review-pages.mjs"
      },
      "dependencies": {},
      "devDependencies": {
        "playwright-core": "^1.50.1"
      }
    }
    .tools
    artifacts
    dist
    docs
    public
    scripts
    src
    .env.example
    .gitignore
    codex-session-01a109d0-b7e6-7ae3-8218-d712a3b53115.md
    package.json
    README.md
    ✓ • 164ms

## Activity

    $ rg --files -g AGENTS.md -g '!dist/**' -g '!public/**'; Get-Content -Encoding utf8 scripts/build.mjs -TotalCount 55; Get-Content -Encoding utf8 scripts/capture-previews.mjs -TotalCount 100; Get-Content -Encoding utf8 scripts/audit.mjs -TotalCount 65
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
    const pages = [...agencyPages,...examples.map(e=>({path:`/examples/${e.slug}/`,title:`${e.name} — ${e.category} Website Concept | SkipManual`,description:`Explore ${e.name}, an original ${e.category.toLowerCase()} example website by SkipManual. See the design approach, useful features, and the complete fictional website.`,render:()=>exampleDetail(e)})),...demoPages()];
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
    import fs from 'node:fs/promises';
    import { createRequire } from 'node:module';
    import { examples } from '../src/data/examples.mjs';
    const require=createRequire(import.meta.url);
    const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
    const browser=await chromium.launch({headless:true,...(process.env.BROWSER_PATH?{executablePath:process.env.BROWSER_PATH}:{channel:'msedge'})});
    await fs.mkdir('public/images/examples',{recursive:true});
    await fs.mkdir('artifacts/demo-review',{recursive:true});
    try {
      const page=await browser.newPage();
      for(const e of examples) {
        for(const [device,width,height] of [['desktop',1440,1030],['mobile',390,844]]) {
          await page.setViewportSize({width,height});
          await page.goto(`http://127.0.0.1:4321/demos/${e.slug}/`,{waitUntil:'networkidle'});
          await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(async image=>{image.loading='eager';await image.decode();}));});
          await page.screenshot({path:`artifacts/demo-review/${e.slug}-${device}-full.png`,fullPage:true});
          // The surrounding agency notice is omitted from the thumbnail only. It stays on every live demo page.
          await page.locator('.demo-banner').evaluate(e=>{e.style.display='none';});
          const screenshot=await page.screenshot();
          const webp=await page.evaluate(async data=>{
            const picture=new Image();picture.src=`data:image/png;base64,${data}`;await picture.decode();
            const canvas=document.createElement('canvas');canvas.width=picture.naturalWidth;canvas.height=picture.naturalHeight;
            canvas.getContext('2d').drawImage(picture,0,0);
            return canvas.toDataURL('image/webp',.86).split(',')[1];
          },screenshot.toString('base64'));
          await fs.writeFile(`public/images/examples/${e.slug}-${device}.webp`,Buffer.from(webp,'base64'));
        }
        console.log(`Captured the actual ${e.name} website at desktop and mobile sizes.`);
      }
    } finally {await browser.close();}
    import assert from 'node:assert/strict';
    import fs from 'node:fs/promises';
    import path from 'node:path';
    import { createRequire } from 'node:module';
    const require=createRequire(import.meta.url);
    const { chromium }=require(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
    const base=process.env.AUDIT_URL || 'http://127.0.0.1:4321';
    const executablePath=process.env.BROWSER_PATH;
    const browser=await chromium.launch({headless:true,...(executablePath?{executablePath}:{channel:'msedge'})});
    const output='artifacts';
    await fs.mkdir(output,{recursive:true});
    const pages=JSON.parse(await fs.readFile('dist/route-manifest.json','utf8'));
    const errors=[];
    const allChecks=[];
    const titles=new Set();
    const descriptions=new Set();
    const links=new Set();
    const context=await browser.newContext();
    const page=await context.newPage();
    page.on('pageerror',e=>errors.push(e.message));
    page.on('response',r=>{if(r.status()>=400&&!r.url().endsWith('/not-a-real-page/'))errors.push(`HTTP ${r.status()}: ${r.url()}`);});
    try {
      for(const width of [1440,768,390,320]) {
        await page.setViewportSize({width,height:960});
        for(const entry of pages) {
          await page.goto(base+entry.path,{waitUntil:'networkidle'});
          await page.evaluate(()=>document.fonts.ready);
          await page.evaluate(async()=>{await Promise.all([...document.images].map(async image=>{image.loading='eager';try{await image.decode();}catch{}}));});
          if(entry.path==='/'&&(width===1440||width===390))await page.screenshot({path:`${output}/home-${width}.png`,fullPage:true});
          const result=await page.evaluate(()=>({
            title:document.title,
            description:document.querySelector('meta[name="description"]')?.content,
            h1:document.querySelectorAll('h1').length,
            overflow:document.documentElement.scrollWidth>innerWidth+1,
            overflows:[...document.querySelectorAll('main *')].filter(e=>{const r=e.getBoundingClientRect();return r.width&&r.right>innerWidth+2;}).slice(0,5).map(e=>e.className),
            images:[...document.images].filter(i=>!i.complete||!i.naturalWidth).map(i=>i.src),
            missingAlt:[...document.images].filter(i=>!i.hasAttribute('alt')).length,
            unlabeled:[...document.querySelectorAll('input:not([type="hidden"]),select,textarea')].filter(e=>!e.labels?.length&&!e.getAttribute('aria-label')).map(e=>e.id),
            orphanOptions:[...document.querySelectorAll('select')].filter(e=>[...e.childNodes].some(n=>n.nodeType===3&&n.textContent.trim())).map(e=>e.id),
            links:[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')),
            brokenAnchors:[...document.querySelectorAll('a[href^="#"]')].filter(a=>!document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)))).map(a=>a.getAttribute('href')),
            fonts:[...document.fonts].filter(f=>f.status==='error').map(f=>f.family),
            robots:document.querySelector('meta[name="robots"]')?.content,
            schema:document.querySelector('script[type="application/ld+json"]')?.textContent,
            text:document.body.textContent,
            publicLabels:[...document.querySelectorAll('[aria-label],img[alt]')].map(e=>e.getAttribute('aria-label')||e.alt).join(' '),
          }));
          const label=`${width}px ${entry.path}`;
          assert(result.description?.length>35,`Missing description: ${label}`);
          assert.equal(result.h1,1,`One h1 required: ${label}`);
          assert(!result.overflow,`Horizontal overflow: ${label}; ${result.overflows}`);
          assert.equal(result.images.length,0,`Broken images: ${label}: ${result.images}`);
          assert.equal(result.missingAlt,0,`Missing image alt: ${label}`);
          assert.equal(result.unlabeled.length,0,`Unlabeled inputs: ${label}`);
          assert.equal(result.orphanOptions.length,0,`Malformed select options: ${label}: ${result.orphanOptions}`);
          assert.equal(result.brokenAnchors.length,0,`Missing anchor targets: ${label}: ${result.brokenAnchors}`);
          assert.equal(result.fonts.length,0,`Font errors: ${label}: ${result.fonts}`);
          assert(!/lorem ipsum|trusted by \d|five.star reviews|guaranteed rankings/i.test(result.text),`Placeholder or unsupported claim: ${label}`);
          assert(!/\bdemos?\b/i.test(result.text+' '+result.title+' '+result.description+' '+result.publicLabels),`Old public wording: ${label}`);
          if(entry.demo){assert.match(result.robots,/noindex/);assert.match(result.text,/fictional/i);assert(!result.schema,'Fictional demo must not carry LocalBusiness schema');}
          else if(!entry.noindex)assert.equal(JSON.parse(result.schema)['@type'],'LocalBusiness');
          if(width===1440){assert(!titles.has(result.title),'Duplicate title');titles.add(result.title);assert(!descriptions.has(result.description),'Duplicate description');descriptions.add(result.description);result.links.forEach(l=>links.add(l));}
          allChecks.push({width,path:entry.path,status:'passed'});
        }
        console.log(`Passed ${pages.length} page checks at ${width}px.`);
    ✓ • 141ms

## Activity

    $ rg -n -o 'examples\[[0-9]+\]|[^<>`]{0,90}(Olive &amp; Ember,|Olive & Ember,|mosaic-food|mosaic-studio)[^<>`]{0,130}' src/pages/*.mjs src/components/*.mjs; Get-Content -Encoding utf8 src/pages/agency-redesign.mjs -TotalCount 24; Get-Content -Encoding utf8 src/pages/agency.mjs -Tail 18
    rg: src/pages/*.mjs: The filename, directory name, or volume label syntax is incorrect. (os error 123)
    rg: src/components/*.mjs: The filename, directory name, or volume label syntax is incorrect. (os error 123)
    import {site,offer,faqs} from '../data/site.mjs';
    import {examples} from '../data/examples.mjs';
    import {packageServices} from '../data/package.mjs';
    import {scenarioSection} from '../components/package.mjs';
    import {photo} from '../components/photos.mjs';
    import {icon,button,textLink,eyebrow,priceCard,faqList,preview,cta,escape,pageHero} from '../components/ui.mjs';
    
    export const serviceDetails = {
      website:{route:'business-websites',simple:'A website that explains your business.',image:'kitchen',heading:'Show people what you do.<br>Make the next step easy.',intro:'We plan, design, and build a 10–20 page website around your business, your services, and the people you want to reach.',sections:[['The pages your customers actually need.','A homepage gives people their bearings. Dedicated service pages explain the work. Photos show the details. Useful FAQs answer common questions, and clear contact options help visitors take the next step. We plan those pages together instead of asking you to decide everything on your own.'],['A design that fits your business.','A roofer, a restaurant, and a Pilates studio need different things from a website. The structure, photography, wording, and contact flow should reflect the customer’s reason for visiting. The five full examples show how that changes from one business to another.'],['Built for a phone, too.','Customers may be checking your business between other tasks. Readable text, fast-loading images, clear navigation, and easy-to-use forms help them find the information they need on a smaller screen.']],example:'A homeowner visits your plumbing website, opens the water-heater page, checks the information, and requests a visit without searching through unrelated services.',related:'clearflow-plumbing'},
      'follow-up':{route:'inquiry-follow-up',simple:'A reply while you’re busy working.',image:'electrician',heading:'A new inquiry deserves<br>a useful next step.',intro:'Automatic acknowledgments and follow-ups help you keep a new customer conversation moving when the day gets busy.',sections:[['Start by acknowledging the inquiry.','When someone contacts your business, a clear reply lets them know their message arrived. The wording can explain what happens next or ask a useful question, so the conversation has a starting point when you return to it.'],['Follow up with a purpose.','We plan messages around your service and your customer’s next decision. A follow-up could ask for missing project details or invite the customer to continue the conversation. Timing, stopping rules, and the handoff to you are agreed during setup.'],['Keep you in the conversation.','The system supports your response. You still answer specific questions, assess the job, quote the work, and confirm arrangements. We plan where that personal response is needed, so an automatic message does not pretend to make a decision for you.']],example:'Someone asks about a roof repair. They receive an acknowledgment asking where they noticed the leak. You pick up the conversation with useful context already there.',related:'ridgeline-roofing'},
      'missed-calls':{route:'missed-call-texts',simple:'Missed a call? Send a helpful text.',image:'work-tools',heading:'On a job when the phone rings?<br>Give the caller a way to reply.',intro:'A missed-call text acknowledges the caller and invites them to describe what they need, so you can return to a conversation.',sections:[['Make the first reply simple.','A useful message sounds like your business: “Thanks for calling. Sorry we missed you. What can we help with?” It gives the caller an easy way to explain the reason for their call without needing to try again immediately.'],['Set the rules around your workday.','We discuss which missed calls should trigger a reply, the wording, repeat-call handling, and how replies reach you. Those decisions keep the setup useful for your business rather than treating every call exactly the same.'],['Come back with some context.','A customer’s text can tell you which service they need or what problem they have noticed. You still confirm availability and handle the job, but you have a clearer starting point when you respond. Messaging platforms, allowances, and extra charges are confirmed before agreement.']],example:'You are fitting a kitchen tap when another customer calls. They receive a text and reply, “Our shower is not getting hot.” You know what to discuss when you call back.',related:'clearflow-plumbing'},
      reviews:{route:'review-requests',simple:'Make asking for a review routine.',image:'cafe',heading:'You’ve done the work.<br>Make feedback easy to leave.',intro:'A straightforward review request and helpful reminders make asking for customer feedback part of the process.',sections:[['Ask at a sensible moment.','The request should follow an agreed point in your customer journey, such as a completed job. We plan the invitation and where the review link should lead, so the customer knows what they are being asked to do.'],['Keep the invitation clear.','A short thank-you, an invitation to share their experience, and a direct review link are easier to understand than a long marketing message. The wording should sound like your business and welcome honest feedback.'],['Use reminders thoughtfully.','We agree on timing and stopping rules for reminders. Every customer should have the same opportunity to leave an honest review; the flow does not screen people by satisfaction or promise a particular rating.']],example:'After a completed job, a customer receives a thank-you message with a review link. If needed, a reminder follows using the schedule agreed with you.',related:'current-electric'},
      seo:{route:'on-page-seo',simple:'Help people understand your services.',image:'house-exterior',heading:'Clear pages for your customers.<br>Clear information for search.',intro:'On-page SEO gives your website a useful foundation: clear page titles, meaningful content, sensible links, and accurate business information.',sections:[['Give each service a clear home.','Someone looking for a roof repair should be able to find a page about roof repairs. We organize service content around the questions and next steps relevant to that work, with headings that make the page easy to scan.'],['Make the important details accurate.','Page titles and descriptions help explain each page. Business information and structured data use verified details, and the site connects related pages so visitors can move from a service to a question or contact option naturally.'],['Start with a sound foundation.','This covers the website itself. It does not promise a search position or include unconfirmed advertising, backlink campaigns, or ongoing SEO retainers. We discuss any work beyond the package separately so you understand what is included.']],example:'A roof-repair page explains leaks, assessment, and the inquiry process, then links to the repair-or-replace guide and an assessment request.',related:'ridgeline-roofing'},
    };
    
    export function directWorkCard(e) {return `<article class="work-card direct-work-card" id="${e.slug}"><a class="work-art ${e.theme}" href="/demos/${e.slug}/" aria-label="Open the ${escape(e.name)} example website">${preview(e)}</a><div class="work-card-top"><div><p class="work-category">${e.category} · ${e.pages.length} pages</p><h3>${escape(e.name)}</h3></div><a class="work-open" href="/demos/${e.slug}/" aria-label="Open ${escape(e.name)}">${icon('diagonal')}</a></div><p>${e.description}</p><div class="work-links"><a href="/demos/${e.slug}/">Explore the website ${icon('arrow')}</a><a href="/examples/${e.slug}/">About the design</a></div></article>`;}
    
    export function simpleProcess() {return `<section class="section container simple-process"><div class="section-head"><div>${eyebrow('You bring the business. We handle the website.')}<h2>Getting started<br>should feel simple.</h2></div>${textLink('See the whole process','/how-it-works/')}</div><div class="simple-steps">${[['Tell us what you do.','We discuss your business, customers, services, and the website you need. No technical brief required.'],['See it take shape.','We plan your pages, create the design, and share the work for your review.'],['Get ready to welcome customers.','We check the website and agree on the contact paths, follow-up setup, and launch details.']].map(([title,text],i)=>`<article><span>0${i+1}</span><h3>${title}</h3><p>${text}</p></article>`).join('')}</div></section>`;}
    
    export function redesignedHome() {return `<section class="home-hero human-hero container"><div class="human-hero-copy">${eyebrow('Websites & customer follow-up for local businesses')}<h1>We build your website.<br><span>You get back<br>to business.</span></h1><p>A professional website that shows what you do, makes you easy to contact, and helps you follow up with customers.</p><div class="hero-offer"><strong>$249<span>/month</span></strong><p>10–20 pages. All five services.<br>One package for your business.</p></div><div class="actions">${button('Let’s talk about your website','/book/')}${textLink('See website examples','/examples/')}</div><p class="hero-reassurance">${icon('check')}No technical knowledge needed. We’ll guide you.</p></div><div class="business-mosaic"><a class="mosaic-main" href="/demos/current-electric/">${photo('electrician',{eager:true})}<span>For the people<br>who get things done.${icon('diagonal')}</span></a><a class="mosaic-food" href="/demos/olive-and-ember/">${photo('gathering')}<span>Restaurants & cafés${icon('diagonal')}</span></a><a class="mosaic-studio" href="/demos/form-studio/">${photo('pilates')}<span>Studios & local services${icon('diagonal')}</span></a></div></section>
    <section class="industry-access container" aria-label="Find a website for your business"><p>Find an example<br><strong>for your kind of business.</strong></p>${examples.map(e=>`<a href="/demos/${e.slug}/">${e.category}${icon('arrow')}</a>`).join('')}</section>
    <section class="section container plain-offer"><div>${eyebrow('What do you actually get?')}<h2>A better website.<br>And help with<br>what happens next.</h2><p class="lead">People find you. They get in touch. Life gets busy. We bring the website and the follow-up together so the next step is clearer.</p>${textLink('Everything in the $249 package','/services/')}</div><div class="plain-service-list">${packageServices.map((s,i)=>`<a href="/services/${serviceDetails[s.id].route}/"><span>0${i+1}</span><div><h3>${serviceDetails[s.id].simple}</h3><p>${s.short}</p></div>${icon('arrow')}</a>`).join('')}</div></section>
    <section class="section work-section"><div class="container"><div class="section-head"><div>${eyebrow('See what your website could be')}<h2>Real pages to explore.<br>Ideas for your business.</h2></div><p>Open the websites. Browse the services, photos, and forms. Each is an original example for a fictional business.</p></div><div class="work-grid">${examples.map(directWorkCard).join('')}</div></div></section>
    ${scenarioSection()}${simpleProcess()}<section class="section container agency-price-section"><div class="price-grid"><div>${eyebrow('One clear starting point')}<h2>Your website.<br>Your follow-up.<br><span class="accent">$249 a month.</span></h2><p class="lead">A 10–20 page website, inquiry follow-up, missed-call text replies, review requests, and on-page SEO.</p><p>We explain the scope, any extra costs, and full terms before you decide.</p>${textLink('Read the pricing details','/pricing/')}</div>${priceCard()}</div></section><section class="section container border-top"><div class="faq-layout"><div>${eyebrow('Before you get started')}<h2>A few things you<br>might be wondering.</h2>${textLink('All common questions','/faq/')}</div>${faqList([faqs[1],faqs[2],faqs[5],faqs[13]])}</div></section>${cta('Tell us about your business.<br>We’ll talk through the rest.')}`;}
    
    function privacy() { return `${pageHero('Website information','Your information,<br>handled clearly.','A plain-language note about this website and its inquiry form.')}<section class="container section" style="padding-top:0"><div class="prose"><h2>The current website</h2><p>This website does not include analytics, advertising trackers, or marketing cookies. Fonts and images are served with the website rather than requested from third-party asset services.</p><h2>The inquiry form</h2><p>${site.contactEndpoint ? 'When you submit an inquiry, the information you enter is sent to our configured inquiry service to support a response to your request.' : site.email ? 'The inquiry form prepares a message in your email application. You choose whether to send it. Your email provider handles the sending of that message.' : 'The inquiry form currently prepares a brief in your browser. It does not send information to SkipManual. You can copy the brief or download it as a text file.'}</p><p>The form does not save your entries in browser storage. If you leave the page, you may lose what you typed. A brief you download stays on your device until you remove it.</p><h2>Example websites</h2><p>The example websites are fictional. Their forms demonstrate an interaction locally in your browser and do not send messages, make reservations, or create class bookings. Please use sample information when exploring them.</p><h2>Booking a call</h2><p>${site.bookingUrl ? 'The booking button opens our external scheduling provider. That provider handles appointment details and confirmation under its own privacy terms.' : 'The call page currently lets you prepare a local request. It does not reserve a time or send your information.'}</p><h2>Website hosting</h2><p>A hosting provider may process routine request information to serve and secure the site. The provider and any additional privacy details need to be confirmed when the website is published.</p><h2>Before a service agreement</h2><p>Project terms and any additional information about handling customer data will be provided as part of the service agreement. This page describes the website’s current behavior; it is not a substitute for those terms.</p>${textLink('Back to get started','/contact/')}</div></section>`; }
    
    function information() { return `${pageHero('Website information','A clear note<br>about what you’re seeing.')}<section class="container section" style="padding-top:0"><div class="prose"><h2>About SkipManual</h2><p>SkipManual designs and builds professional websites for local businesses. The current base website package is $249 per month, in US dollars. Scope and full contractual terms are confirmed before an agreement.</p><h2>Original example concepts</h2><p>Olive &amp; Ember, Current Electric, Form Studio, Clearflow Plumbing, and Ridgeline Roofing are fictional businesses created for these examples. Their names, copy, services, menu items, class schedules, and forms are illustrative. They are not client projects and do not represent real business results.</p><h2>Photography</h2><p>The example websites use illustrative photography sourced from Unsplash. The photographs are not representations of actual SkipManual clients, facilities, team members, or completed projects.</p><h2>Service terms</h2><p>This website is an introduction to the service, not the service agreement. Exact inclusions, billing, ownership, cancellation, and ongoing responsibilities are discussed and agreed before work begins.</p>${textLink('Explore the service','/services/')}</div></section>`; }
    
    export const agencyPages = [
      ...additionalAgencyPages,
      { path:'/', title:'Websites & Customer Follow-Up for Local Businesses | SkipManual', description:'A 10–20 page website and customer follow-up for your local business, all in one $249/month package. Explore five complete example websites and get started.', render:redesignedHome },
      { path:'/services/', title:'What’s Included in the $249 Website Package | SkipManual', description:'A 10–20 page website, inquiry follow-up, missed-call text replies, review requests, and on-page SEO. Explore the five services in SkipManual’s $249/month package.', render:redesignedServices },
      { path:'/pricing/', title:'The $249/Month Website Package | SkipManual', description:'Explore SkipManual’s $249/month local business website package. We confirm your project scope, full costs, and terms before you commit.', render:pricing },
      { path:'/examples/', title:'Website Examples & Original Concepts | SkipManual', description:'Explore five original website examples for restaurants, electricians, Pilates studios, plumbers, and roofers. Browse every page of these fictional business concepts.', render:exampleIndex },
      { path:'/about/', title:'About SkipManual | Good Websites. Less on Your Plate.', description:'SkipManual helps local businesses look professional online with thoughtful website design, clear communication, and a straightforward approach.', render:about },
      { path:'/faq/', title:'Your Website Questions, Answered | SkipManual', description:'Straight answers about SkipManual’s website service, pricing, process, example work, and getting started. Learn what is agreed before your project begins.', render:faq },
      { path:'/contact/', title:'Let’s Build Your Business Website | SkipManual', description:'Tell SkipManual about your local business and the website you have in mind. Start with a short brief and explore the $249/month website package.', render:redesignedContact },
      { path:'/privacy/', title:'Website Privacy Information | SkipManual', description:'Learn how the SkipManual website currently handles inquiry forms, example interactions, browser storage, and third-party services.', render:privacy },
      { path:'/website-information/', title:'Website & Example Information | SkipManual', description:'Information about SkipManual, its fictional example websites, illustrative photography, and the distinction between website information and service terms.', render:information },
      { path:'/404/', title:'Page Not Found | SkipManual', description:'This page could not be found. Explore SkipManual’s website services and example collection.', noindex:true, render:()=>`${pageHero('404 / A small wrong turn','Let’s get you<br>back on track.','That page isn’t here. The rest of the site is ready to explore.')}<div class="container section" style="padding-top:0"><div class="actions">${button('Back to the homepage','/')}${textLink('Explore the examples','/examples/')}</div></div>` },
    ];
    ✓ • 145ms

## Activity

    file changes: Completed · 1 changes
    Add: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\.tools\reorder-examples.mjs
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

## Activity

    $ node .tools/reorder-examples.mjs; npm run build
    Reordered all shared example collections and homepage photo links; removed em dashes from website copy and metadata.
    
    > skipmanual@1.0.0 build
    > node scripts/build.mjs
    
    Built 72 static pages in dist/. No production dependencies or client framework.
    Public origin is unconfigured: canonical URLs and sitemap will be generated when PUBLIC_SITE_URL is set.
    Contact is in honest brief-only mode. Set a verified contact email or endpoint to enable inquiries.
    ✓ • 1.09s

## Activity

    $ @'
        import fs from 'node:fs/promises';
        const file='src/pages/agency.mjs';
        let text=await fs.readFile(file,'utf8');
        text=text.replace('Olive &amp; Ember, Current Electric, Form Studio, Clearflow Plumbing, and Ridgeline Roofing','Current Electric, Ridgeline Roofing, Clearflow Plumbing, Form Studio, and Olive &amp; Ember');
        text=text.replace('for restaurants, electricians, Pilates studios, plumbers, and roofers','for electricians, roofers, plumbers, wellness studios, and restaurants');
        await fs.writeFile(file,text);
        const {examples}=await import('./src/data/examples.mjs');
        console.log(examples.map(e=>`${e.number}: ${e.name}`).join('\n'));
        try {console.log('Preview status:',(await fetch('http://127.0.0.1:4321/')).status);} catch {console.log('Preview server needs starting');}
        '@ | node --input-type=module
        rg -n '—|&mdash;|&#0*8212;|&#x0*2014;|\\u2014|\\2014' src scripts public dist --glob '!*.webp' --glob '!*.png' --glob '!*.woff' --glob '!*.ttf'
    01: Current Electric
    02: Ridgeline Roofing
    03: Clearflow Plumbing
    04: Form Studio
    05: Olive & Ember
    Preview status: 200
    ✗ (1) • 6.33s

## Activity

    file changes: Completed · 1 changes
    Update { move_path: None }: C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\docs\project-handoff.md
    @@ -6,2 +6,3 @@
     
    +- Example priority throughout the UI: Current Electric, Ridgeline Roofing, Clearflow Plumbing, Form Studio, then Olive & Ember. Homepage photography highlights the first three target industries. Public copy, page titles, and prepared email subjects contain no em dashes.
     - White agency background, business photography, prominent $249/month pricing, plain-language explanations of the five confirmed services, and direct links to examples.

## Activity

    $ npm run build
    
    > skipmanual@1.0.0 build
    > node scripts/build.mjs
    
    Built 72 static pages in dist/. No production dependencies or client framework.
    Public origin is unconfigured: canonical URLs and sitemap will be generated when PUBLIC_SITE_URL is set.
    Contact is in honest brief-only mode. Set a verified contact email or endpoint to enable inquiries.
    ✓ • 978ms

## Activity

    $ @'
        import fs from 'node:fs/promises';
        import {createRequire} from 'node:module';
        const require=createRequire(import.meta.url);
        const {chromium}=require('C:/Users/muham/AppData/Local/ms-playwright-go/1.50.1/package');
        const browser=await chromium.launch({headless:true,executablePath:'C:/Users/muham/.cache/puppeteer/chrome/win64-139.0.7258.68/chrome-win64/chrome.exe'});
        await fs.mkdir('artifacts/example-order',{recursive:true});
        try {
         const page=await browser.newPage();
         for(const width of [1440,768,390,320])for(const route of ['/','/examples/']) {
          await page.setViewportSize({width,height:950});
          await page.goto('http://127.0.0.1:4321'+route,{waitUntil:'networkidle'});
          await page.evaluate(async()=>{await document.fonts.ready;await Promise.all([...document.images].map(async i=>{i.loading='eager';try{await i.decode();}catch{}}));});
          console.log(JSON.stringify({width,route,...await page.evaluate(()=>({cards:[...document.querySelectorAll('.direct-work-card h3')].map(e=>e.textContent),industries:[...document.querySelectorAll('.industry-access > a,.industry-filter > a')].map(e=>e.textContent),footer:[...document.querySelectorAll('.footer-col:last-child a')].map(e=>e.textContent),overflow:document.documentElement.scrollWidth>innerWidth+1,brokenImages:[...document.images].filter(i=>!i.naturalWidth).length}))}));
          if(width===1440||width===390)await page.locator(route==='/'?'.human-hero':'.examples-expanded').screenshot({path:`artifacts/example-order/${route==='/'?'hero':'examples'}-${width}.png`});
         }
         const routes=JSON.parse(await fs.readFile('dist/route-manifest.json','utf8'));
         const violations=[];
         for(const route of routes){const html=await fs.readFile(`dist${route.path}index.html`,'utf8');if(/\u2014|&mdash;|&#0*8212;|&#x0*2014;/i.test(html))violations.push(route.path);}
         console.log(JSON.stringify({pagesScanned:routes.length,emDashViolations:violations}));
        }finally{await browser.close();}
        '@ | node --input-type=module
    {"width":1440,"route":"/","cards":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"industries":["Electrical","Roofing","Plumbing","Wellness & fitness","Restaurant"],"footer":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"overflow":false,"brokenImages":0}
    {"width":1440,"route":"/examples/","cards":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"industries":["Electrical","Roofing","Plumbing","Wellness & fitness","Restaurant"],"footer":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"overflow":false,"brokenImages":0}
    {"width":768,"route":"/","cards":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"industries":["Electrical","Roofing","Plumbing","Wellness & fitness","Restaurant"],"footer":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"overflow":false,"brokenImages":0}
    {"width":768,"route":"/examples/","cards":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"industries":["Electrical","Roofing","Plumbing","Wellness & fitness","Restaurant"],"footer":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"overflow":false,"brokenImages":0}
    {"width":390,"route":"/","cards":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"industries":["Electrical","Roofing","Plumbing","Wellness & fitness","Restaurant"],"footer":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"overflow":false,"brokenImages":0}
    {"width":390,"route":"/examples/","cards":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"industries":["Electrical","Roofing","Plumbing","Wellness & fitness","Restaurant"],"footer":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"overflow":false,"brokenImages":0}
    {"width":320,"route":"/","cards":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"industries":["Electrical","Roofing","Plumbing","Wellness & fitness","Restaurant"],"footer":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"overflow":false,"brokenImages":0}
    {"width":320,"route":"/examples/","cards":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"industries":["Electrical","Roofing","Plumbing","Wellness & fitness","Restaurant"],"footer":["Current Electric","Ridgeline Roofing","Clearflow Plumbing","Form Studio","Olive & Ember"],"overflow":false,"brokenImages":0}
    {"pagesScanned":72,"emDashViolations":[]}
    ✓ • 7.59s

## Assistant

The examples now follow your priority order across the homepage, examples page, category links, and footer. I also put roofing and plumbing beside electrical in the homepage photos. All 72 generated pages are free of em dashes, and the updated layouts passed checks at four screen widths.

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\example-order\examples-1440.png

## Activity

    Viewed image C:\Users\muham\OneDrive\App Creation\LANDING PAGE\SKIPMANUAL-newest\artifacts\example-order\hero-390.png

## User

resume
