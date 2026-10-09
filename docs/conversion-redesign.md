# October 2026 design refresh

The agency uses warm paper, sage, and terracotta surfaces, full-width work photography, real website previews, and shorter introductions. The homepage leads with a roofing crew at work, the $249/month offer, and four animated customer stories. Three trade prototypes, the setup process, pricing, and common questions follow. All five prototypes are available in the portfolio.

Each story runs for 42 seconds across six chapters: an electrician's missed call, a homeowner's roof inquiry, a review invitation after a plumbing repair, and getting a website from brief through launch. Full-width work photographs accompany animated website screens, messages, and owner handoffs. These are browser animations with readable captions, not prerecorded videos; no sound is needed.

Playback starts once when the player enters view, stops at the end, and pauses when it leaves view or the browser tab is hidden. Visitors can pause, seek, replay, choose chapters, switch stories, or use desktop fullscreen. Reduced-motion preferences prevent automatic playback and reveal each chapter's complete example. Without JavaScript, playback controls stay hidden and all 24 chapter transcripts are available under “Read the walkthroughs.” The marketing site itself does not send automated texts.

## Trade prototypes

- Current Electric: The Magic Team reference informed the navy, vivid blue, yellow, wave, and bold service-card direction. Full-width photographs show electrical work, panel connections, and lighting installation; the identity and copy belong to this fictional prototype.
- Clearflow Plumbing: a distinct navy-and-red service website with a problem-first navigation bar and interactive service finder. Photographs show sink-trap work, pipe repairs, drain-camera inspection, and water-heater connections. Beacon Plumbing returned its security verification page, so its exact layout could not be inspected reliably.
- Ridgeline Roofing: Idaho Roofing Contractors informed the black-and-blue header, large photograph, blue introduction, and short assessment form. Candid photographs show crews installing shingles, underlayment, tiles, and metal roofing, without borrowing the reference business's identity, reviews, or credentials.
- Form Studio uses Pilates reformer practice and studio equipment photography. Olive & Ember uses food, dining, and kitchen-preparation imagery. Their actual desktop and mobile previews were refreshed alongside the trade sites.

Twenty additional work, kitchen, and Pilates photographs are recorded in `src/data/work-photos.json`. Public photograph credits link each source, author, license, and adapted image. These photographs illustrate fictional businesses; they are not claimed as client projects.

Each prototype has ten pages, working navigation, photo galleries, service-specific inquiry choices, and a persistent fictional-business notice. Trade header and mobile actions use “Contact now.” The new roofing homepage request is a local demonstration and explicitly says that nothing is sent or booked.

## Main implementation

- `src/pages/conversion.mjs`: homepage, services overview, portfolio, visual process, package card.
- `src/components/customer-film.mjs`: four customer stories, animated scenes, and transcripts.
- `src/components/visual-sections.mjs`: full-width homepage and setup photography.
- `src/pages/reference-trades.mjs`: three trade homepages and their shared routing shell.
- `src/styles/conversion.css`: agency visual system and responsive layouts.
- `src/styles/reference-trades.css`: distinct trade styles, including all their inner pages.
- `src/styles/visual-stories.css`: full-width imagery, animated player, and responsive overrides.
- `src/scripts/customer-film.js`: playback, seeking, chapter selection, fullscreen, and motion preferences.
- `src/scripts/client.js`: menus, galleries, service guides, and inquiry forms.

The existing unique titles, descriptions, canonicals, and verified SkipManual LocalBusiness entity remain in place. Fictional business pages remain noindex and do not publish invented local-business data. Agency contact delivery and scheduling still depend on the existing verified environment configuration.

## Review commands

Run the local site at `http://localhost:4321`, then use:

```sh
npm run build
npm run audit
npm run audit:seo
node scripts/visual-conversion.mjs
```

The visual check captures the homepage, all five prototype homepages, and one detail page per prototype, then exercises playback, pause behavior, fullscreen, reduced motion, and the no-JavaScript fallback. Screenshots and interaction results are in `artifacts/visual-stories/`. The full-site audit also checks forms, service guides, galleries, and navigation.

The additional accessibility check uses axe-core 4.10.3, saved locally for testing from https://cdnjs.cloudflare.com/ajax/libs/axe-core/4.10.3/axe.min.js. It is not served with the website. Run `node scripts/audit-conversion-accessibility.mjs`; results are in `artifacts/conversion/accessibility.json`. Automated checks supplement, rather than replace, visual and keyboard review.

The review suite covers 78 pages across 1440, 768, 390, and 320px (312 layout checks), all 27 indexable routes in the SEO regression, all 24 animated chapters at four widths, and 80 axe page/state checks. Current results are recorded in `artifacts/audit-results.json`, `artifacts/seo/results.json`, `artifacts/visual-stories/interaction-results.json`, and `artifacts/conversion/accessibility.json`. Text over photography and desktop/mobile screenshots receive visual review. Contact delivery is mocked or local during verification.
