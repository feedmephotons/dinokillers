import { readFile, writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { render, publicRoutes, SITE_URL } from "../.prerender/entry-server.js";
const template = await readFile("dist/index.html", "utf8");
for (const route of [...publicRoutes, "/404"]) {
  const { html, head } = render(route);
  const output = resolve(
    "dist",
    route === "/" ? "index.html" : route.slice(1) + ".html",
  );
  await mkdir(dirname(output), { recursive: true });
  await writeFile(
    output,
    template.replace("<!--seo-head-->", head).replace("<!--app-html-->", html),
  );
}
const escape = (text) => text.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
const urls = publicRoutes
  .map((route) => "  <url><loc>" + escape(SITE_URL + route) + "</loc></url>")
  .join("\n");
await writeFile(
  "dist/sitemap.xml",
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls +
    "\n</urlset>\n",
);
await writeFile(
  "dist/robots.txt",
  "User-agent: *\nAllow: /\n\nSitemap: " + SITE_URL + "/sitemap.xml\n",
);
console.log(
  "Pre-rendered " +
    publicRoutes.length +
    " public routes, a 404 page, sitemap.xml, and robots.txt.",
);
