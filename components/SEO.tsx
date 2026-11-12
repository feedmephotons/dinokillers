import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getPageMeta, getStructuredData, SITE_URL } from "../data/seo";
export default function SEO() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = getPageMeta(pathname);
    document.title = meta.title;
    const set = (key: string, value: string, property = false) => {
      const attribute = property ? "property" : "name";
      let el = document.head.querySelector<HTMLMetaElement>(
        "meta[" + attribute + '="' + key + '"]',
      );
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attribute, key);
        document.head.appendChild(el);
      }
      el.content = value;
    };
    set("description", meta.description);
    set("robots", meta.noindex ? "noindex,follow" : "index,follow");
    set("og:title", meta.title, true);
    set("og:description", meta.description, true);
    set("og:type", meta.article ? "article" : "website", true);
    set("og:url", SITE_URL + meta.path, true);
    set("og:site_name", "Dino Killers", true);
    set("og:image", SITE_URL + meta.image, true);
    set("twitter:card", "summary_large_image");
    set("twitter:title", meta.title);
    set("twitter:description", meta.description);
    set("twitter:image", SITE_URL + meta.image);
    let canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = SITE_URL + meta.path;
    let schema = document.getElementById("structured-data");
    if (!schema) {
      schema = document.createElement("script");
      schema.id = "structured-data";
      schema.setAttribute("type", "application/ld+json");
      document.head.appendChild(schema);
    }
    schema.textContent = JSON.stringify(getStructuredData(pathname));
  }, [pathname]);
  return null;
}
