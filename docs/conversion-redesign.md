# October 2026 design refresh

The agency uses warm paper, sage, and terracotta surfaces. The homepage now presents SkipManual as an independent web design studio for a range of businesses. It leads with “Your business. Beautifully online.” and an original, browser-rendered website illustration. No niche-specific hero photography or package prices appear on the homepage, including its metadata. Pricing remains reachable through the navigation and a link near the final call to action.

The homepage illustration uses three 6.5-second scenes: first impression, room to explore, and an easy next step. It crossfades continuously, starts when visible, suspends offscreen and in background tabs, and resumes automatically. An explicit pause remains paused after scrolling. Reduced-motion users get a static illustration with optional scene selection. Without JavaScript, the first illustration, summary, navigation, and page content remain available. No video download or animation library is required.

The longer homepage continues through design services, three contrasting design concepts, a visual explanation of a complete multipage website, the four-step process, five client feedback cards, an introduction to the studio, FAQs, and a final invitation. The examples are selected for different design styles, and are explicitly fictional concepts. All five prototypes remain available in the portfolio, with their industry-specific content intact.

Sarah, T. Peter, Mateo, Philipe, and Mia S. appear with the five-star ratings supplied by the owner. Their text faithfully summarizes the supplied sentiment about a positive working experience and an improved online presence. The section explicitly labels the text as paraphrased feedback, not verbatim quotes. No identities, portraits, business names, numerical results, third-party review badges, or review schema were invented.

The detailed service and setup pages retain four 42-second customer stories with six chapters each. They now loop automatically and use a softer scene transition. Visitors can pause, seek, choose chapters, switch stories, or use desktop fullscreen. Offscreen playback and background tabs suspend the clock; returning resumes it unless manually paused. Reduced-motion preferences prevent autoplay, and all 24 chapter transcripts remain available without JavaScript. The marketing site itself does not send automated texts.

## Trade prototypes

- Current Electric: The Magic Team reference informed the navy, vivid blue, yellow, wave, and bold service-card direction. Full-width photographs show electrical work, panel connections, and lighting installation; the identity and copy belong to this fictional prototype.
- Clearflow Plumbing: a distinct navy-and-red service website with a problem-first navigation bar and interactive service finder. Photographs show sink-trap work, pipe repairs, drain-camera inspection, and water-heater connections. Beacon Plumbing returned its security verification page, so its exact layout could not be inspected reliably.
- Ridgeline Roofing: Idaho Roofing Contractors informed the black-and-blue header, large photograph, blue introduction, and short assessment form. Candid photographs show crews installing shingles, underlayment, tiles, and metal roofing, without borrowing the reference business's identity, reviews, or credentials.
- Form Studio uses Pilates reformer practice and studio equipment photography. Olive & Ember uses food, dining, and kitchen-preparation imagery. Their actual desktop and mobile previews were refreshed alongside the trade sites.

Twenty additional work, kitchen, and Pilates photographs are recorded in `src/data/work-photos.json`. Public photograph credits link each source, author, license, and adapted image. These photographs illustrate fictional businesses; they are not claimed as client projects.

Each prototype has ten pages, working navigation, photo galleries, service-specific inquiry choices, and a persistent fictional-business notice. Trade header and mobile actions use “Contact now.” The new roofing homepage request is a local demonstration and explicitly says that nothing is sent or booked.

## Main implementation

- `src/components/studio-home.mjs`: current homepage, neutral illustration, selected concepts, process, and client feedback.
- `src/styles/studio-home.css`: homepage layout, original browser illustration, transitions, and responsive styles.
- `src/scripts/studio-loop.js`: continuous homepage playback, pause, offscreen handling, and reduced motion.
- `src/pages/conversion.mjs`: services overview, portfolio, and package card.
- `src/components/customer-film.mjs`: four customer stories, animated scenes, and transcripts.
- `src/components/visual-sections.mjs`: earlier photographic hero and setup treatments.
- `src/pages/reference-trades.mjs`: three trade homepages and their shared routing shell.
- `src/styles/conversion.css`: agency visual system and responsive layouts.
- `src/styles/reference-trades.css`: distinct trade styles, including all their inner pages.
- `src/styles/visual-stories.css`: full-width imagery, animated player, and responsive overrides.
- `src/scripts/customer-film.js`: playback, seeking, chapter selection, fullscreen, and motion preferences.
- `src/scripts/client.js`: menus, galleries, service guides, and inquiry forms.

The homepage has a new, unique title and description, with the existing canonical and verified SkipManual LocalBusiness entity. The structured offer catalog is limited to the pricing page. Fictional business pages remain noindex and do not publish invented local-business data. Agency contact delivery and scheduling still depend on the existing verified environment configuration.

## Review commands

Run the local site at `http://localhost:4321`, then use:

```sh
npm run build
npm run audit
npm run audit:seo
node scripts/visual-conversion.mjs
node scripts/review-studio-home.mjs
```

The visual check captures the homepage, all five prototype homepages, and one detail page per prototype, then exercises both animation systems. The focused homepage check covers seven viewport widths, all three scenes, a complete automatic loop, pause persistence, offscreen suspension and resumption, reduced motion, no-JavaScript rendering, and six axe states. Homepage screenshots and results are in `artifacts/studio-home/`; detailed story checks are in `artifacts/visual-stories/`. The full-site audit also checks forms, service guides, galleries, and navigation.

The additional accessibility check uses axe-core 4.10.3, saved locally for testing from https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.3/axe.min.js. It is not served with the website. Run `node scripts/audit-conversion-accessibility.mjs`; results are in `artifacts/conversion/accessibility.json`. Automated checks supplement, rather than replace, visual and keyboard review.

The review suite covers 78 pages across 1440, 768, 390, and 320px (312 layout checks), all 27 indexable routes in the SEO regression, all 24 detailed-story chapters at four widths, 80 general axe page/state checks, and the focused homepage checks described above. Current results are recorded in `artifacts/audit-results.json`, `artifacts/seo/results.json`, `artifacts/studio-home/results.json`, `artifacts/visual-stories/interaction-results.json`, and `artifacts/conversion/accessibility.json`. Desktop/mobile layouts receive visual review. Contact delivery is mocked or local during verification.
