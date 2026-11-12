# Dino Killers website

React 19, TypeScript, React Router, and Vite. The production build generates complete HTML for every public route, with client-side navigation and interactions after hydration.

## Development

Use Node.js 22 (see .nvmrc).

- npm ci
- npm run dev
- npm run build
- npm run check

The development server uses port 3017. The build writes public files to dist and a temporary server-rendering module to .prerender. The check command verifies the generated production pages, so run the build first.

## Content

- data/services.ts: five services and their detail-page content.
- data/projects.ts: portfolio records. Preserve IDs when editing existing projects.
- data/caseStudies.ts: seven project stories, decision notes, and related services.
- data/blog.ts: articles with authors, publication dates, and revision dates.
- data/faq.ts: project and collaboration questions.
- data/seo.ts: route metadata, structured data, and the public route inventory.

Existing portfolio, case-study, and article URLs have been retained. New service detail URLs and a case-study index are included in the generated sitemap.

## Search and hosting

The build creates one HTML file per route, plus sitemap.xml, robots.txt, and a noindex 404.html. Vercel is configured for clean URLs and static output; the former catch-all homepage rewrite is removed.

VITE_SITE_URL sets the canonical origin at build time. Its default is https://dinokillers.com. Set it to the deployment's actual origin when building a separate review site. No API key is required. The old Gemini key injection and browser Tailwind CDN are removed.

Google recommends descriptive page titles and descriptions and explains why pre-rendering helps crawlers access JavaScript-site content: [JavaScript SEO basics](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics). This project uses [Vite's static pre-rendering approach](https://vite.dev/guide/ssr.html).

.openai/hosting.json identifies the private Sites review copy. The Vercel configuration remains available for the main website.

## Contact behavior

The contact form prepares an email. Visitors review and send it in their email application, or copy the project brief. It does not submit to a server or store inquiry details. The interface explicitly describes this behavior.

To accept submissions directly on the website, connect an approved email or form provider, add server-side validation and abuse controls, and only display a delivery success state after the provider accepts the request.

## Content evidence

See docs/website-upgrade.md for the changes, source limitations, and the evidence needed before publishing numerical case-study results. The supplied interface images are retained; some show sign-in pages or overlays and should be replaced with approved, current product screenshots when available.

The private review is hosted at https://dino-killers-studio.wfowlkes.chatgpt.site. Review builds use VITE_SITE_URL=https://dino-killers-studio.wfowlkes.chatgpt.site so canonical, sitemap, and sharing URLs match that deployment. Main-domain builds use the default dinokillers.com origin.
