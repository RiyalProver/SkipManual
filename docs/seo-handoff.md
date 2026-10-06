# SkipManual SEO handoff

Completed October 6, 2026 for the owner-confirmed US market and https://skipmanual.com.

## Findings on the public site before this change

- Homepage returned HTTP 200 with no canonical tag.
- `https://www.skipmanual.com/` also returned HTTP 200, duplicating the apex host.
- `/sitemap.xml` returned HTTP 404. `robots.txt` allowed crawling but listed no sitemap.
- The five service pages existed, but their generic headings did not clearly name the service. Industry search intent was represented mainly by fictional example websites.

Response evidence is saved under `artifacts/seo-domain-*` and `artifacts/seo-live-*`. These observations describe the public site before the new build is deployed.

## Implemented

- Confirmed apex origin is the default configuration; valid HTTPS overrides are supported. All 78 routes carry absolute canonical and social URLs. Query parameters used by inquiry forms canonicalize to the underlying page.
- Sitemap contains exactly 27 indexable URLs. The 50 fictional business pages and the 404 route remain noindex and are omitted. Fictional pages stay crawlable so their noindex directives can be read.
- Vercel configuration builds `dist/`, uses trailing-slash page URLs, and permanently redirects requests on `www.skipmanual.com` to the apex host while retaining the path. This redirect is configured in source; it has not been observed on a deployed version of this change.
- All five service pages have descriptive search-focused titles, headings, introductions, practical setup information, and three relevant questions. The $249 monthly package and unconfirmed commercial terms remain accurately distinguished.
- Added `/industries/` and five distinct guides for electricians, roofers, plumbers, wellness businesses, and restaurants. Each explains different customer needs, suggested pages, inquiry flows, and three industry-specific questions. Links connect the homepage, industry hub, service pages, portfolio write-ups, pricing, and inquiry paths.
- Added consistent LocalBusiness, WebSite, page, Service, BreadcrumbList, and FAQPage entities as appropriate. FAQ answers are generated from the actual visible FAQ component, preventing drift between markup and page copy.
- Business schema uses the real brand, confirmed domain, US service area, and confirmed package. No address, telephone, ratings, reviews, credentials, or client results were invented. Fictional examples do not receive real-business schema.
- Added US English document language, social image descriptions, explicit index/noindex directives, and large-image preview permission for indexable pages.
- Build rejects duplicate routes, titles, or descriptions and unsafe URL paths before replacing the generated output. Existing routes remain available.
- Kept the recent 18px reading text, enlarged controls, centered header navigation, local assets, and static HTML architecture.

Search-intent decisions and the limits of the autocomplete sample are documented in `seo-search-map.md`. No search-volume or ranking claims were inferred from autocomplete.

## Validation

- `npm run build`: 78 routes generated successfully.
- `npm run audit`: 312 responsive page checks at 1440, 768, 390, and 320px; 158 unique links; menus, galleries, forms, filters, reduced motion, no-JavaScript behavior, and true 404 handling passed.
- After the final setup explanations were added, 20 additional layout checks covered all five service pages at 1440, 1051, 390, and 320px.
- `npm run audit:seo`: all 78 pages passed canonical, social metadata, indexability, schema, and unique-metadata checks. All 27 indexable pages were reachable from the homepage and present in the sitemap. Structured breadcrumbs and FAQ answers matched visible content.
- Compared five-word phrases across the new industry body sections, excluding shared navigation, pricing, and footers. The maximum pairwise overlap was 0.8%. This checks for repeated copy; it is not a search quality score.
- Reviewed fresh desktop and mobile screenshots in `artifacts/seo/`. The SEO report is `artifacts/seo/results.json`; the general browser report is `artifacts/audit-results.json`.
- No real form submissions were sent. These are local build/browser checks, not an external rich-results validation, live Core Web Vitals measurement, or ranking test.

## Publication and search measurement

1. Deploy the updated project with `vercel.json`, or configure equivalent canonical-host redirects and real 404 responses on another host. Check that the deployed origin uses `https://skipmanual.com`.
2. Verify the published sitemap returns HTTP 200 with XML at `https://skipmanual.com/sitemap.xml`, and that the www host permanently redirects to the apex host. Check a nested page and an unknown URL as well as the homepage.
3. In an owner-verified Google Search Console property, submit `https://skipmanual.com/sitemap.xml`. Inspect the homepage, the five service pages, and the five industry pages. Request indexing for important new or updated pages where appropriate. Do the equivalent sitemap submission in Bing Webmaster Tools if used.
4. Validate a published service page and its structured data with Google's tools. Valid FAQ markup does not guarantee FAQ search features; no rich-result placement is promised.
5. Review US-filtered query impressions, clicks, indexing issues, and actual inquiry quality as data becomes available. Use the evidence to improve weak pages and add useful material about genuine work, rather than expanding into repetitive city pages.
6. Add verified client work, consented testimonials, and accurate business/team information when available. Off-site reputation, relevant links, and ongoing content work are separate from this on-site implementation.

This work has not been deployed, and no Search Console property or Google Business Profile was accessed. Scheduling and inquiry delivery remain deferred at the owner's earlier request. Rankings, indexing timelines, traffic, and visibility for every related search are not guaranteed.
