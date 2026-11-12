import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import {
  publicRoutes,
  getPageMeta,
  SITE_URL,
} from "../.prerender/entry-server.js";
const titles = new Set(),
  descriptions = new Set(),
  errors = [];
const decode = (s) =>
  s
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#x27;", "'");
for (const route of publicRoutes) {
  try {
    const html = await readFile(
      "dist/" + (route === "/" ? "index" : route.slice(1)) + ".html",
      "utf8",
    );
    const meta = getPageMeta(route);
    assert.equal((html.match(/<h1[ >]/g) || []).length, 1, "must have one h1");
    assert.equal(
      (html.match(/<title>/g) || []).length,
      1,
      "must have one title",
    );
    assert.equal(
      (html.match(/rel="canonical"/g) || []).length,
      1,
      "must have one canonical",
    );
    assert(
      html.includes('href="' + SITE_URL + route + '"'),
      "canonical mismatch",
    );
    assert(html.includes("<main"), "missing main content");
    assert(!html.includes("noindex"), "public route must be indexable");
    assert(!html.includes("<!--app-html-->"), "unrendered content");
    assert(
      !html.includes("cdn.tailwindcss.com"),
      "runtime Tailwind CDN remains",
    );
    assert(!titles.has(meta.title), "duplicate title");
    titles.add(meta.title);
    assert(!descriptions.has(meta.description), "duplicate description");
    descriptions.add(meta.description);
    const schema = JSON.parse(
      html.match(
        /<script id="structured-data" type="application\/ld\+json">([\s\S]*?)<\/script>/,
      )[1],
    );
    assert(
      schema["@graph"].some((item) => item["@type"] === "Organization"),
      "missing organization schema",
    );
    for (const match of html.matchAll(/(?:src|href)="(\/[^"]*)"/g)) {
      const target = decode(match[1]).split(/[?#]/)[0];
      if (!target || target === "/") continue;
      if (publicRoutes.includes(target) || target === "/404") continue;
      await access("dist" + decodeURIComponent(target));
    }
    for (const match of html.matchAll(/<img\b([^>]*)>/g)) {
      assert(/\balt="/.test(match[1]), "image missing alt");
      assert(
        /\bwidth="/.test(match[1]) && /\bheight="/.test(match[1]),
        "image dimensions missing",
      );
    }
  } catch (e) {
    errors.push(route + ": " + e.message);
  }
}
const missing = await readFile("dist/404.html", "utf8");
assert(missing.includes("noindex,follow"), "404 must be noindex");
const sitemap = await readFile("dist/sitemap.xml", "utf8");
assert.equal((sitemap.match(/<loc>/g) || []).length, publicRoutes.length);
const contact = await readFile("dist/contact.html", "utf8");
assert(!contact.includes("Message sent"), "contact claims false delivery");
assert(
  contact.includes("writes an email for you"),
  "email handoff must be explained",
);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  "Verified " +
    publicRoutes.length +
    " routes: rendered content, unique metadata, canonical URLs, structured data, local links, images, sitemap, 404, and honest contact flow.",
);
