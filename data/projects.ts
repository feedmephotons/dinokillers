export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: "product" | "client";
  uvp: string;
  targetMarket: string;
  techStack: string[];
  highlights: string[];
  impactStatement: string;
  url?: string;
  image?: string;
  thumb?: string;
  industry: string;
  featured?: boolean;
}
export const projects: Project[] = [
  {
    id: "slotica",
    name: "Slotica",
    tagline: "Build a slot game in one workspace",
    description:
      "Slotica is a studio for building slot games. Asset creation, symbol editing, layout, animation, and audio live in one workspace, with AI to generate art and manual controls to finish it.",
    category: "product",
    featured: true,
    uvp: "Every part of making a slot game in one project, from the first symbol to the assembled build.",
    targetMarket:
      "iGaming studios, casino operators, indie game developers, sweepstakes platforms",
    techStack: [
      "Svelte",
      "Turbo Monorepo",
      "Gemini AI",
      "GPT Image",
      "GSAP",
      "Playwright",
    ],
    highlights: [
      "AI-assisted art and asset creation",
      "Symbol and asset editing",
      "Visual layout and animation tools",
      "Audio tools and project assembly",
    ],
    impactStatement:
      "Art, mechanics, and production tools sit in the same project, so a game stops being a relay race between apps.",
    url: "https://slotica.io",
    image: "/images/portfolio/slotica-dashboard.png",
    thumb: "/images/portfolio/slotica-thumb.webp",
    industry: "Gaming & iGaming",
  },
  {
    id: "hoa-cloud",
    name: "HOA Cloud",
    tagline: "Association management for boards that run it themselves",
    description:
      "HOA Cloud gives an association board one place for its documents, notices, reminders, and recurring admin. Each association gets its own workspace, and AI helps board members find what a document says.",
    category: "product",
    featured: true,
    uvp: "Built for associations by people who have worked in the industry.",
    targetMarket:
      "Self-managed HOAs, board-managed associations, property management companies",
    techStack: ["Next.js", "Supabase", "Stripe Connect", "Claude AI"],
    highlights: [
      "A separate workspace for each association",
      "Document storage with AI-assisted analysis",
      "Reminders and notice workflows",
      "Board access and management tools",
    ],
    impactStatement:
      "Moves a board’s documents and recurring admin out of personal inboxes and into one shared workspace.",
    url: "https://hoacloud.app",
    image: "/images/portfolio/hoacloud-dashboard.png",
    thumb: "/images/portfolio/hoa-cloud-thumb.webp",
    industry: "Property Management",
  },
  {
    id: "dinoclaw",
    name: "DinoClaw",
    tagline: "AI agents that work inside your business software",
    description:
      "DinoClaw is a business platform with AI agents built in. CRM, project management, and invoicing sit in one app, and an agent works with that information through plain conversation.",
    category: "product",
    featured: true,
    uvp: "An AI agent that knows your customers, projects, and invoices because it lives in the same system.",
    targetMarket: "SMBs, trade contractors, service businesses, agencies",
    techStack: [
      "Next.js",
      "Supabase",
      "Drizzle ORM",
      "Claude AI",
      "AWS",
      "Playwright",
    ],
    highlights: [
      "CRM and operations modules",
      "Conversational AI workflows",
      "Business context that follows each role",
      "Agent-assisted tasks",
    ],
    impactStatement:
      "Puts a conversational agent next to the everyday work of a business: customers, projects, and invoices.",
    url: "https://dinoclaw.app",
    image: "/images/portfolio/dinoclaw-dashboard.png",
    thumb: "/images/portfolio/dinoclaw-thumb.webp",
    industry: "Business Operations",
  },
  {
    id: "caso-comply",
    name: "CASO Comply",
    tagline: "Scan, process, and remediate PDFs for accessibility",
    description:
      "CASO Comply scans documents, processes PDF structure, and uses AI for the first pass of accessibility remediation. People review the output. It supports accessibility work and does not guarantee compliance.",
    category: "product",
    featured: true,
    uvp: "Scanning, PDF processing, and AI-assisted remediation in one workflow, with review built in.",
    targetMarket:
      "Government agencies, universities, healthcare systems, legal firms",
    techStack: ["Next.js", "Supabase", "Claude AI", "PDF Processing", "Stripe"],
    highlights: [
      "Document scanning",
      "PDF structure processing",
      "AI-assisted remediation",
      "Human review built into the workflow",
    ],
    impactStatement:
      "Turns a backlog of PDFs into a queue: scanned, processed, remediated, reviewed.",
    url: "https://casocomply.com",
    image: "/images/portfolio/caso-comply-dashboard.png",
    thumb: "/images/portfolio/caso-comply-thumb.webp",
    industry: "Document Compliance",
  },
  {
    id: "caso-collect",
    name: "CASO Collect",
    tagline: "Document collection without the email chase",
    description:
      "CASO Collect runs document intake from request to review. It takes submissions, classifies them, sends reminders, and shows what is still outstanding.",
    category: "product",
    uvp: "One view of what has been requested, received, and reviewed.",
    targetMarket:
      "Law firms, government agencies, financial institutions, HR departments",
    techStack: ["Next.js", "Supabase", "Claude AI", "Stripe"],
    highlights: [
      "Document intake and classification",
      "Automatic reminders",
      "Collection status dashboards",
      "Submission tools and role-based access",
    ],
    impactStatement:
      "Moves document collection out of scattered email threads and onto a status dashboard.",
    url: "https://caso-collect.vercel.app",
    image: "/images/portfolio/casocollect-dashboard.png",
    industry: "Document Management",
  },
  {
    id: "caso-book",
    name: "CASO Book",
    tagline: "Quality control for book digitization",
    description:
      "CASO Book is a quality-control app for book digitization. It tracks scan quality, matches and verifies ISBNs, logs errors, and reports on production.",
    category: "product",
    uvp: "A quality-control process built specifically for digitization teams.",
    targetMarket:
      "Libraries, digitization companies, archival institutions, publishers",
    techStack: ["Next.js", "Supabase", "Recharts", "React Hook Form"],
    highlights: [
      "ISBN matching and verification",
      "Scan quality and error tracking",
      "Production reporting",
      "Batch-based quality control",
    ],
    impactStatement:
      "Keeps quality checks and production numbers tied to the batch they came from.",
    url: "https://caso-book.vercel.app",
    image: "/images/portfolio/caso-book-dashboard.png",
    industry: "Document Management",
  },
  {
    id: "brandeezy",
    name: "Brandeezy",
    tagline: "Content generated from your brand",
    description:
      "Brandeezy stores your brand identity and uses it to generate imagery, product shots, personas, and merchandise mockups. Edit the results by conversation and keep them in a content library.",
    category: "product",
    uvp: "Image generation that starts from your brand profile.",
    targetMarket:
      "Marketing agencies, e-commerce brands, small business owners, content creators",
    techStack: ["Next.js", "Supabase", "Gemini AI", "GPT Image", "Stripe"],
    highlights: [
      "Brand identity profiles",
      "Several image-generation workflows",
      "Editing by conversation",
      "Content library and credit-based usage",
    ],
    impactStatement:
      "Brand context goes in once and shapes every piece of content that comes out.",
    url: "https://brandeezy.io",
    image: "/images/portfolio/brandeezy-dashboard.png",
    industry: "Marketing & Content",
  },
  {
    id: "hoa-hunter",
    name: "HOA Hunter",
    tagline: "Find Florida associations and reach their boards",
    description:
      "HOA Hunter is a searchable database of Florida associations and board contacts. Filter by location, find the associations in your service area, and run outreach from the same record.",
    category: "product",
    featured: true,
    uvp: "Research and follow-up in one place, built for companies that sell to associations.",
    targetMarket:
      "Property management companies, HOA service contractors, professional services",
    techStack: ["Next.js", "PostgreSQL", "Prisma", "Twilio", "Stripe"],
    highlights: [
      "Association and board-contact records",
      "Location-based search and filtering",
      "Built-in outreach tools",
      "Research workflows built for the association industry",
    ],
    impactStatement:
      "The record you research is the record you follow up from. No copying contacts into another list.",
    url: "https://hoahunter.com",
    image: "/images/portfolio/hoahunter-dashboard.png",
    thumb: "/images/portfolio/hoa-hunter-thumb.webp",
    industry: "Sales & Outreach",
  },
  {
    id: "hailtruth",
    name: "HailTruth",
    tagline: "Hail analysis on a map",
    description:
      "HailTruth puts weather and radar data on a map next to property and portfolio context, so roofing and insurance teams can analyze hail in one interface.",
    category: "product",
    uvp: "Weather data and property context on the same map.",
    targetMarket: "Insurance carriers, roofing contractors, forensic engineers",
    techStack: ["Next.js", "Python", "TensorFlow", "Mapbox"],
    highlights: [
      "Weather and radar views",
      "Mapped analysis interfaces",
      "Property and portfolio context",
      "Reporting workflows",
    ],
    impactStatement:
      "Gives hail analysis its own interface, with the storm and the property in one view.",
    url: "https://hailtruth.ai",
    image: "/images/portfolio/hailtruth-dashboard.png",
    industry: "Insurance & Roofing",
  },
  {
    id: "exotic-tracker-pro",
    name: "Exotic Tracker Pro",
    tagline: "Inventory software for people who keep animals",
    description:
      "Exotic Tracker Pro tracks animal inventory, lineage, health records, and permits, with photo-based documentation.",
    category: "product",
    uvp: "An inventory system shaped around what an animal operation has to keep track of.",
    targetMarket:
      "Exotic animal breeders, reptile dealers, sanctuaries, wildlife rehabilitators",
    techStack: ["Next.js", "Supabase", "Claude AI"],
    highlights: [
      "Lineage and inventory records",
      "Health records",
      "Permit tracking",
      "Photo-based documentation",
    ],
    impactStatement:
      "Keeps lineage, health, and permit records together. Generic inventory software has no place for them.",
    industry: "Animal Management",
  },
  {
    id: "buildx",
    name: "BuildX",
    tagline: "The office and the jobsite in one app",
    description:
      "BuildX runs CRM, scheduling, dispatch, and invoicing for a trade business in one app. Office and field teams work from the same job record, each with their own view.",
    category: "client",
    uvp: "Software organized the way a job moves through the company: sold, scheduled, built, billed.",
    targetMarket: "Roofing contractors, general contractors, trade businesses",
    techStack: [
      "Next.js",
      "Supabase",
      "Drizzle ORM",
      "Gemini AI",
      "Claude AI",
      "shadcn/ui",
    ],
    highlights: [
      "CRM and project management",
      "Scheduling and dispatch",
      "Invoicing and operational reporting",
      "Role-based access for office and field teams",
    ],
    impactStatement:
      "Sales, operations, and billing work from one job record, so nobody rebuilds the story at each handoff.",
    url: "https://build-x2.vercel.app",
    image: "/images/portfolio/buildx-dashboard.png",
    thumb: "/images/portfolio/buildx-thumb.webp",
    industry: "Construction",
  },
  {
    id: "seegarsone",
    name: "SeegarsONE",
    tagline: "A CRM built around the fence business",
    description:
      "SeegarsONE is a custom CRM for a multi-location fence company. It holds customer records, reads field notes with OCR, and handles proposals and estimating for fence work.",
    category: "client",
    uvp: "A modern CRM built on the company’s own process and information, not a generic sales pipeline.",
    targetMarket: "Fence contractors, specialty trade companies",
    techStack: ["Next.js", "Supabase", "Claude AI", "OpenAI", "Tesseract OCR"],
    highlights: [
      "CRM workflows built for the fence industry",
      "OCR-assisted field-note processing",
      "Proposal and estimating tools",
      "Multi-location roles and access",
    ],
    impactStatement:
      "Field notes, customer history, and proposals live in one system built for how a fence company works.",
    url: "https://seegars.one",
    image: "/images/portfolio/seegarsone-dashboard.png",
    thumb: "/images/portfolio/seegarsone-thumb.webp",
    industry: "Fencing & Construction",
  },
  {
    id: "metal-caddie",
    name: "Metal Caddie",
    tagline: "Sell, build, and bill from one screen",
    description:
      "Metal Caddie runs a metal fabrication shop from first lead to final payment. Quotes, estimates, sheet inventory, purchasing, delivery, and invoicing live in one app, built on the same platform as BuildX.",
    category: "client",
    featured: true,
    uvp: "The shop’s whole job cycle in one place, organized the way the work moves: sell, build, bill.",
    targetMarket: "Metal fabricators, sheet-metal shops, construction suppliers",
    techStack: [
      "Next.js",
      "Supabase",
      "Drizzle ORM",
      "Gemini AI",
      "Claude AI",
      "shadcn/ui",
    ],
    highlights: [
      "Leads, quote requests, estimates, and sales orders",
      "Sheet calculator and sheet inventory",
      "Purchase orders, receiving, and delivery scheduling",
      "Invoices, payments, and overdue receivables",
    ],
    impactStatement:
      "Sales, the shop floor, and the back office work from the same job, so nothing gets retyped between quote and invoice.",
    image: "/images/portfolio/metal-caddie-thumb.webp",
    thumb: "/images/portfolio/metal-caddie-thumb.webp",
    industry: "Metal Fabrication",
  },
  {
    id: "cougar-companies",
    name: "Cougar Companies",
    tagline: "A construction website with working tools behind it",
    description:
      "A website and connected tools for a Southwest Florida construction company: project showcases, a digital plan room, a careers portal, and a CRM behind it all.",
    category: "client",
    uvp: "One site that serves prospective clients, project partners, and job applicants, each with a clear way in.",
    targetMarket: "Heavy civil construction, site development contractors",
    techStack: ["Next.js", "Supabase", "Google Analytics", "Stripe", "FFmpeg"],
    highlights: [
      "Website and brand presentation",
      "Construction project showcases",
      "Digital plan room",
      "Career portal and connected CRM",
    ],
    impactStatement:
      "Shows what the company has built and gives clients, partners, and applicants a next step.",
    url: "https://cougarcompanies.com",
    image: "/images/portfolio/cougar-companies-dashboard.png",
    industry: "Construction",
  },
  {
    id: "uncorpwear",
    name: "Uncorpwear",
    tagline: "A storefront with a point of view",
    description:
      "A custom Shopify storefront for an independent streetwear brand. The design, product pages, and lifestyle imagery all carry the brand’s irreverent voice, on any screen.",
    category: "client",
    uvp: "A shop that looks and sounds like the brand it sells.",
    targetMarket:
      "Streetwear enthusiasts, anti-corporate culture, young professionals",
    techStack: ["Shopify", "Custom Theme", "JavaScript"],
    highlights: [
      "Custom storefront design",
      "Product and lifestyle presentation",
      "Responsive shopping experience",
      "Shopify commerce integration",
    ],
    impactStatement:
      "The brand’s attitude shows up everywhere a shopper looks, from the homepage to the product page.",
    url: "https://uncorpwear.com",
    image: "/images/portfolio/uncorpwear-dashboard.png",
    industry: "E-Commerce & Fashion",
  },
];
export const getAllProjects = () => projects;
export const getProjectById = (id: string) => projects.find((p) => p.id === id);
export const getProjectsByCategory = (category: string) =>
  projects.filter((p) => p.category === category);
export const getFeaturedProjects = () => projects.filter((p) => p.featured);
