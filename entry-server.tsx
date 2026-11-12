import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import {
  getPageMeta,
  getStructuredData,
  publicRoutes,
  SITE_URL,
} from "./data/seo";
export { publicRoutes, getPageMeta, SITE_URL };
const escape = (text: string) =>
  text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
export function render(path: string) {
  const meta = getPageMeta(path);
  const canonical = SITE_URL + meta.path;
  const head = [
    "<title>" + escape(meta.title) + "</title>",
    '<meta name="description" content="' + escape(meta.description) + '">',
    '<meta name="robots" content="' +
      (meta.noindex ? "noindex,follow" : "index,follow") +
      '">',
    '<link rel="canonical" href="' + escape(canonical) + '">',
    ...Object.entries({
      "og:title": meta.title,
      "og:description": meta.description,
      "og:type": meta.article ? "article" : "website",
      "og:url": canonical,
      "og:site_name": "Dino Killers",
      "og:image": SITE_URL + meta.image,
    }).map(
      ([key, value]) =>
        '<meta property="' + key + '" content="' + escape(value) + '">',
    ),
    ...Object.entries({
      "twitter:card": "summary_large_image",
      "twitter:title": meta.title,
      "twitter:description": meta.description,
      "twitter:image": SITE_URL + meta.image,
    }).map(
      ([key, value]) =>
        '<meta name="' + key + '" content="' + escape(value) + '">',
    ),
    '<script id="structured-data" type="application/ld+json">' +
      JSON.stringify(getStructuredData(path)).replace(/</g, "\\u003c") +
      "</script>",
  ].join("\n");
  return {
    html: renderToString(
      <StaticRouter location={path}>
        <App />
      </StaticRouter>,
    ),
    head,
  };
}
