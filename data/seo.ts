import { projects } from "./projects";
import { services } from "./services";
import { caseStudies } from "./caseStudies";
import { blogPosts } from "./blog";
export const SITE_URL = (
  import.meta.env.VITE_SITE_URL || "https://dinokillers.com"
).replace(/\/+$/, "");
export type PageMeta = {
  title: string;
  description: string;
  path: string;
  image: string;
  noindex?: boolean;
  article?: boolean;
};
const pages: Record<string, [string, string]> = {
  "/": [
    "Custom Software, AI & Web Design in Southwest Florida",
    "Dino Killers builds custom software, AI tools, CRMs, and websites that replace the outdated systems a business has outgrown. Based in Southwest Florida.",
  ],
  "/about": [
    "Meet the Studio",
    "Meet Winston Fowlkes, Brance Wages, and Michael Tole of Dino Killers: business operators who build software for operations-heavy companies.",
  ],
  "/services": [
    "Custom Software, AI Integration & Website Services",
    "Custom software development, custom CRMs, workflow automation, AI integration, website design, and systems integration from a Southwest Florida studio.",
  ],
  "/portfolio": [
    "Our Work: Custom Software, CRMs & Websites",
    "See what Dino Killers has built: client software and our own products for construction, fabrication, document management, and association management.",
  ],
  "/case-studies": [
    "Case Studies: Custom Software for Real Operations",
    "How Dino Killers projects came together: the problem, the decisions, and the software built for construction, fabrication, and association teams.",
  ],
  "/blog": [
    "Insights on Software, AI & Digital Strategy",
    "Plain guides from Dino Killers on choosing custom software, planning a CRM, and putting AI to work in the daily operations of a business.",
  ],
  "/faq": [
    "Common Questions About Working With Dino Killers",
    "Straight answers on scope, timelines, cost, integrations, AI, and support for custom software and website projects with Dino Killers.",
  ],
  "/contact": [
    "Start a Project",
    "Tell Dino Killers which outdated tool you want replaced. Start a custom software, AI, CRM, or website project with our Southwest Florida studio.",
  ],
};
export const publicRoutes = [
  ...Object.keys(pages),
  ...services.map((s) => "/services/" + s.id),
  ...projects.map((p) => "/portfolio/" + p.id),
  ...caseStudies.map((s) => "/case-studies/" + s.slug),
  ...blogPosts.map((p) => "/blog/" + p.slug),
];
export function getPageMeta(pathname: string): PageMeta {
  const path = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  let title = pages[path]?.[0],
    description = pages[path]?.[1],
    image = "/images/dk-logo.png",
    article = false;
  const project = projects.find((p) => path === "/portfolio/" + p.id);
  const study = caseStudies.find((s) => path === "/case-studies/" + s.slug);
  const service = services.find((s) => path === "/services/" + s.id);
  const post = blogPosts.find((p) => path === "/blog/" + p.slug);
  if (project) {
    title = project.name + ": " + project.industry;
    description = project.description;
    image = project.image || image;
  }
  if (study) {
    title = study.title;
    description = study.summary;
    const p = projects.find((p) => p.id === study.projectId);
    image = p?.image || image;
    article = true;
  }
  if (service) {
    title = service.seoTitle;
    description = service.description;
  }
  if (post) {
    title =
      post.slug === "website-content-before-design"
        ? "Plan Website Content Before Design"
        : post.title;
    description = post.excerpt;
    article = true;
  }
  return {
    title: (title || "Page Not Found") + " | Dino Killers",
    description:
      description ||
      "This page could not be found. Explore Dino Killers services, work, and case studies.",
    path,
    image,
    article,
    noindex: !title,
  };
}
export function getStructuredData(path: string) {
  const meta = getPageMeta(path);
  const org = {
    "@type": "Organization",
    "@id": SITE_URL + "/#organization",
    name: "Dino Killers",
    url: SITE_URL,
    logo: SITE_URL + "/images/dk-logo.png",
    email: "hello@dinokillers.com",
    description:
      "Independent digital studio for custom software, AI integration, and websites.",
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    founder: [
      { "@type": "Person", name: "Winston Fowlkes" },
      { "@type": "Person", name: "Brance Wages" },
    ],
  };
  const graph: object[] = [
    org,
    {
      "@type": "WebSite",
      "@id": SITE_URL + "/#website",
      url: SITE_URL,
      name: "Dino Killers",
      publisher: { "@id": SITE_URL + "/#organization" },
    },
    {
      "@type": "WebPage",
      "@id": SITE_URL + meta.path,
      url: SITE_URL + meta.path,
      name: meta.title,
      description: meta.description,
      isPartOf: { "@id": SITE_URL + "/#website" },
    },
  ];
  const parts = meta.path.split("/").filter(Boolean);
  if (parts.length)
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL + "/",
        },
        ...parts.map((part, i) => ({
          "@type": "ListItem",
          position: i + 2,
          name:
            i === parts.length - 1
              ? meta.title.replace(" | Dino Killers", "")
              : {
                  portfolio: "Work",
                  "case-studies": "Case studies",
                  services: "Services",
                  blog: "Insights",
                }[part] || part,
          item: SITE_URL + "/" + parts.slice(0, i + 1).join("/"),
        })),
      ],
    });
  const service = services.find((s) => meta.path === "/services/" + s.id);
  if (service)
    graph.push({
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: { "@id": SITE_URL + "/#organization" },
      url: SITE_URL + meta.path,
    });
  const post = blogPosts.find((p) => meta.path === "/blog/" + p.slug);
  if (post)
    graph.push({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.date,
      dateModified: post.updated || post.date,
      author: {
        "@type": "Person",
        name: post.author,
        url: SITE_URL + "/about",
      },
      publisher: { "@id": SITE_URL + "/#organization" },
      mainEntityOfPage: SITE_URL + meta.path,
      image: SITE_URL + meta.image,
    });
  return { "@context": "https://schema.org", "@graph": graph };
}
