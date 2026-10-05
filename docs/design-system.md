# Design decisions

## SkipManual

The agency now uses a white canvas, charcoal text, and clear orange calls to action. Business photography replaces the floating portfolio composition in the opening screen. The hero explains the service directly and shows $249/month before the visitor scrolls. DM Sans, readable paragraph widths, plain-language service lists, direct example links, and a mobile action bar support first-time local-business visitors. The main actions lead to a dedicated call page and the full example websites.

`src/styles/tokens.css` defines three layers: raw primitives, semantic purpose, and component settings. Page layouts share the same container, gutters, heading sizes, section rhythm, buttons, forms, and focus states. The mobile layout stacks content deliberately, uses a disclosure menu, and keeps primary actions readable without horizontal scrolling. Motion is limited to hover feedback and smooth anchors, with a reduced-motion override.

## Olive & Ember

A restaurant needs to communicate atmosphere and appetite before explaining an abstract list of features. A photographic, centered opening and expressive serif type lead into an editorial story, a readable menu, and table requests. Olive and warm cream reinforce an evening dining mood. The menu is HTML rather than a PDF or a flattened image. The demo avoids invented diner reviews or claims about sourcing and awards.

## Current Electric

A homeowner needs to identify the service and describe the job. Strong sans-serif headings, practical service categories, navy and yellow, and a direct project path reflect that priority. A separate lighting page demonstrates useful service depth. Service choices carry into the request form. No certifications, trade licenses, service areas, emergency availability, or customer ratings are invented.

## Form Studio

A first-time studio visitor needs to feel welcome and understand where to begin. Lilac, plum, an open composition, and softer serif typography express a slower pace. Classes are differentiated by experience and duration. The schedule can be filtered by day, and the selected class carries into the introductory request. No instructor credentials or health outcome claims are invented.

## Portfolio presentation

Five examples provide contrast without unnecessary filtering. The collection includes industry anchors, an identity and style description, feature summaries, and both a concept page and direct website action. Concept pages explain the intended visitor journey and design reasoning, show the actual desktop/mobile pages, and link into every example route. A visible notice distinguishes the examples from client work. Existing `/demos/` route addresses remain compatible; all public copy uses “examples.”

## Clearflow Plumbing

White, bright blue, rounded controls, and a bathroom photograph establish an approachable service identity. A problem selector explains leaks, blocked drains, water heaters, and new fixtures in everyday language. Service selections carry into the visit request. Dedicated service and water-heater pages provide useful depth.

## Ridgeline Roofing

Stone, rust, and charcoal support an architectural direction with a wide roof photograph, large serif headlines, material textures, and a line drawing. A repair-or-replace guide presents questions based on the visitor’s situation and carries that context into an assessment request. It gives general guidance without diagnosing the roof.

## Everyday service examples

The five-service overview uses ordinary outcomes such as replying while busy and making review requests routine. Three selectable everyday situations show illustrative conversations. Dedicated service pages explain the details, and the how-it-works page describes the project steps. The inquiry form asks for four essential fields and puts extra details behind a disclosure. Without JavaScript, all guide and scenario content remains readable.

## Complete example websites

Each business now has ten pages. The restaurant includes food, drinks, private dining, visit planning, and a gallery; trade businesses have separate service details, practical guides, and photo inspiration; the studio has beginner guidance, private sessions, class information, and movement notes. Expanded desktop menus, ten-link mobile menus, related pages, and sticky mobile actions connect the content. Gallery dialogs support arrow keys, Escape, previous/next controls, and focus restoration; without JavaScript the image links still work.

Photography is illustrative and attributed. Business names and offerings remain fictional, with persistent example notices and local-only sample forms. No invented addresses, reviews, qualifications, or real booking availability have been added.

## Booking connection

The owner explicitly deferred booking-provider and contact-email setup until after design review. `/book/` therefore explains the conversation and prepares a local request. A verified `PUBLIC_BOOKING_URL` enables a direct scheduling link without embedding third-party scripts on the agency site. The form never claims to send or reserve anything while disconnected.

Request buttons in the example headers and mobile action bars carry the current service into the form. On a request page, they jump to the existing form without reloading or clearing entered details. SkipManual’s booking-page navigation behaves the same way. Private dining supports solo diners and larger groups, and private Pilates sessions have a dedicated request option. Example form fields use at least 16px text on phones. When clipboard access is unavailable, the prepared brief remains focused and selected for manual copying.

## Commercial content

The confirmed offer is $249/month in USD for a 10–20 page website, automatic inquiry follow-up, missed-call text replies, review requests and reminders, and on-page SEO foundations. Other terms, including messaging allowances and platform costs, remain unconfirmed and are stored explicitly as null. Review invitations welcome honest feedback without screening by satisfaction or promising ratings. Real testimonials can be added when verified material exists.
