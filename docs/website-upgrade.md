# Dino Killers website upgrade

Prepared September 12, 2026.

## Direction

An independent studio for businesses that have outgrown their tools. Software and practical AI lead the positioning; websites, branding, and operations remain clear service paths. Black surfaces, cyan accents, oversized condensed typography, and distinct project color treatments create a more editorial presentation while retaining the existing dinosaur-and-meteor mark.

## Implemented

- Redesigned homepage, navigation, footer, studio, services, portfolio, case-study, article, FAQ, and contact templates.
- Five dedicated service landing pages and a case-study index.
- Seven case studies covering BuildX, Metalcrafters, Cougar Companies, SeegarsONE, CASO Comply, HOA Hunter, and HOA Cloud.
- Four practical articles; original article and case-study URLs preserved.
- Client collaborations lead the portfolio, with a separate filter for products and explorations.
- Complete static HTML across 39 public routes, per-page titles and descriptions, canonical URLs, Open Graph and X metadata, Organization/WebSite/WebPage/BreadcrumbList/Service/BlogPosting structured data, sitemap, robots file, and a noindex 404 page.
- Locally bundled CSS replaces runtime Tailwind. No Gemini API key is injected into the client.
- Keyboard focus styles, a skip link, labeled mobile navigation, native FAQ disclosure controls, reduced-motion support, responsive layouts, and reserved image dimensions.
- Honest email-draft contact flow replaces simulated sending.

## Case-study evidence

The previous public copy contained strong results and compliance assertions without supporting measurement records in the website project. The revised copy describes the project scope and design approach. It does not present the following assertions as proven results.

| Previous claim                                                            | Evidence needed before reuse                                                                    |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Metalcrafters: 30 minutes to 2 minutes, 15 hours saved weekly             | Before/after records, measurement window, tasks included, and client confirmation               |
| Metalcrafters: zero missed actions and eliminated disputes                | Defined metric, a representative observation period, and client confirmation                    |
| HOA Hunter: 168,969 verified contacts and 80% faster acquisition          | Dated database count, verification method, and measured workflow comparison                     |
| CASO Comply: 95%+ savings, sub-minute processing, automatic certification | Dated pricing basis, representative performance tests, documented validation process            |
| CASO Comply: universal April 2026 legal deadline                          | Current authoritative rule and applicability review; deadline-based copy was removed            |
| HOA Cloud: legally compliant or automatic compliance                      | Legal review of the exact claim and product behavior; replaced with administrative capabilities |
| SeegarsONE: zero-downtime migration with every record preserved           | Migration reconciliation, launch record, and client sign-off                                    |
| BuildX: five tools replaced                                               | Confirmed tool inventory and agreed description of the production scope                         |
| Slotica: months reduced to days                                           | Comparable project scope and measured delivery evidence                                         |

No customer quotes, new performance numbers, customer counts, certifications, or awards were invented. Existing project descriptions and supplied materials informed the revised stories; current launch status should be confirmed with the project owner before describing a product as generally available.

## Next editorial inputs

1. Current, approved interface images for the client projects. Several supplied screenshots show sign-in screens, onboarding notices, or overlays.
2. A short client interview for each lead case study: original workflow, constraints, delivered scope, what changed, and a quote approved for publication.
3. Actual before/after measurements for one specific workflow per case study.
4. Confirmed project inquiry delivery provider if the website should send messages directly.
5. Search Console ownership and baseline data before claiming changes in impressions, rankings, or conversions.

## Search plan

Service pages address distinct commercial topics: custom software development, AI integration, custom CRM and workflow automation, website design and branding, and systems integration. Articles answer related planning questions and link into the relevant service. Project and case-study pages connect those services to concrete work.

The technical implementation follows [Google's JavaScript SEO guidance](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) and [Vite's pre-rendering guidance](https://vite.dev/guide/ssr.html). Rankings, keyword demand, analytics, and live production indexing have not been measured.

## Validation

The production verification script checks every generated public route for a single heading and title, unique metadata, canonical URL, valid structured data, local link and image references, explicit image dimensions, sitemap inclusion, and the contact disclosure. TypeScript checks are included in the build. Responsive styles have been implemented; this run does not claim interactive browser testing or a measured accessibility conformance score.
