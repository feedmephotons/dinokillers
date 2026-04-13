export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'product' | 'client';
  uvp: string;
  targetMarket: string;
  techStack: string[];
  highlights: string[];
  impactStatement: string;
  url?: string;
  image?: string;
  industry: string;
  featured?: boolean;
}

export const projects: Project[] = [
  // ─── Featured / Flagship Products ───
  {
    id: 'slotica',
    name: 'Slotica',
    tagline: 'The custom slot game factory',
    description: 'AI-powered slot game creation platform with 23 specialized IDE pages for total creative control. From symbol design to animation timelines to sound mixing — build casino-quality slot games in any theme with AI assistance or full manual control.',
    category: 'product',
    featured: true,
    uvp: 'One prompt, complete game. Pit Boss AI generates every asset, configures mechanics, and assembles a playable slot game through natural conversation.',
    targetMarket: 'iGaming studios, casino operators, indie game developers, sweepstakes platforms',
    techStack: ['Svelte', 'Turbo Monorepo', 'Gemini AI', 'GPT Image', 'GSAP', 'Playwright'],
    highlights: [
      '23 specialized IDE pages for total creative control',
      'Pit Boss AI — describe your game, get a playable result',
      'Symbol editor with AI background removal',
      'Visual rig layout editor, GSAP animation timelines, audio mixer'
    ],
    impactStatement: 'Compresses months of slot game development into days.',
    url: 'https://slotica.io',
    image: '/images/portfolio/slotica-dashboard.png',
    industry: 'Gaming & iGaming'
  },
  {
    id: 'hoa-cloud',
    name: 'HOA Cloud',
    tagline: 'Florida HOA compliance on autopilot',
    description: 'Multi-tenant platform that gives self-managed HOAs and condos in Florida a turnkey, legally-compliant web management system. Automates the headache of Statutes 718 and 720 so board members can stop worrying about what they might be missing.',
    category: 'product',
    featured: true,
    uvp: 'The only platform purpose-built for Florida HOA and condo compliance. Saves volunteer board members hours of legal guesswork every month.',
    targetMarket: 'Self-managed HOAs, board-managed associations, property management companies',
    techStack: ['Next.js', 'Supabase', 'Stripe Connect', 'Claude AI'],
    highlights: [
      'Built specifically for Florida Statutes 718/720',
      'AI-powered document analysis for governing documents',
      'Multi-tenant architecture serving multiple associations',
      'Automated compliance tracking and deadline alerts'
    ],
    impactStatement: 'Turns volunteer board members into compliance-confident managers without the legal bills.',
    url: 'https://hoacloud.app',
    image: '/images/portfolio/hoacloud-dashboard.png',
    industry: 'Property Management'
  },
  {
    id: 'dinoclaw',
    name: 'DinoClaw',
    tagline: 'AI-agent powered CRM/ERP platform',
    description: 'Full-stack business operating system with AI agents baked into every workflow. CRM, project management, invoicing, HR, and business intelligence — all driven by conversational AI that understands your business context.',
    category: 'product',
    featured: true,
    uvp: 'Not just AI-assisted — AI-agent driven. Every module has an embedded agent that learns your workflows and takes action autonomously.',
    targetMarket: 'SMBs, trade contractors, service businesses, agencies',
    techStack: ['Next.js', 'Supabase', 'Drizzle ORM', 'Claude AI', 'AWS', 'Playwright'],
    highlights: [
      'AI agents embedded in every business module',
      'CRM, invoicing, HR, and BI in one platform',
      'Voice-first interface for field crews',
      'White-label ready for vertical SaaS deployment'
    ],
    impactStatement: 'Replaces an entire software stack with one AI-native platform.',
    url: 'https://dinoclaw.app',
    image: '/images/portfolio/dinoclaw-dashboard.png',
    industry: 'Business Operations'
  },
  // ─── Products ───
  {
    id: 'caso-comply',
    name: 'CASO Comply',
    tagline: 'AI-powered PDF accessibility remediation at $0.30/page',
    description: 'Automated document remediation platform that brings PDFs into WCAG 2.1 AA, PDF/UA, and Section 508 compliance in under a minute. Built for government agencies and organizations racing the ADA Title II deadline.',
    category: 'product',
    uvp: 'Turns a manual, multi-day compliance process into a one-click operation. Scans, remediates, and certifies documents automatically.',
    targetMarket: 'Government agencies, universities, healthcare systems, legal firms',
    techStack: ['Next.js', 'Supabase', 'Claude AI', 'PDF Processing', 'Stripe'],
    highlights: [
      'Automated WCAG 2.1 AA, PDF/UA, and Section 508 compliance',
      'Free site-wide compliance scanner — results in under 60 seconds',
      'ADA Title II deadline countdown driving urgent demand',
      'Processes documents at $0.30/page with bulk discounts'
    ],
    impactStatement: 'Helping organizations meet the April 2026 ADA Title II deadline before time runs out.',
    url: 'https://casocomply.com',
    image: '/images/portfolio/caso-comply-dashboard.png',
    industry: 'Document Compliance'
  },
  {
    id: 'caso-collect',
    name: 'CASO Collect',
    tagline: 'Intelligent document collection and intake',
    description: 'Streamlined document collection platform that automates the intake process for organizations handling high volumes of paperwork. Smart routing, validation, and status tracking from submission to completion.',
    category: 'product',
    uvp: 'Eliminates the back-and-forth of document collection with automated validation, smart reminders, and real-time status tracking.',
    targetMarket: 'Law firms, government agencies, financial institutions, HR departments',
    techStack: ['Next.js', 'Supabase', 'Claude AI', 'Stripe'],
    highlights: [
      'Automated document validation and classification',
      'Smart reminders and follow-up workflows',
      'Real-time collection status dashboards',
      'Secure submission portal with role-based access'
    ],
    impactStatement: 'Cuts document collection cycles from weeks to days.',
    url: 'https://caso-collect.vercel.app',
    image: '/images/portfolio/casocollect-dashboard.png',
    industry: 'Document Management'
  },
  {
    id: 'caso-book',
    name: 'CASO Book',
    tagline: 'Book scanning quality control and ISBN management',
    description: 'Quality control management platform for large-scale book digitization operations. Tracks scanning quality, matches ISBNs, logs errors, and generates compliance reports across entire digitization pipelines.',
    category: 'product',
    uvp: 'Brings manufacturing-grade QC to book digitization — every scan tracked, every error logged, every ISBN verified.',
    targetMarket: 'Libraries, digitization companies, archival institutions, publishers',
    techStack: ['Next.js', 'Supabase', 'Recharts', 'React Hook Form'],
    highlights: [
      'ISBN matching and verification system',
      'Scan-level quality scoring and error tracking',
      'Real-time dashboards with production analytics',
      'Batch processing with compliance reporting'
    ],
    impactStatement: 'Standardized QC across digitization pipelines, catching errors before they reach the archive.',
    url: 'https://caso-book.vercel.app',
    image: '/images/portfolio/caso-book-dashboard.png',
    industry: 'Document Management'
  },
  {
    id: 'brandeezy',
    name: 'Brandeezy',
    tagline: 'Professional brand photography without the photoshoot',
    description: 'AI-powered platform that transforms logos and brand assets into professional, on-brand stock photography. Upload your Brand DNA — logo, colors, style preferences — and generate unlimited branded images across product shots, professional personas, merchandise mockups, and more.',
    category: 'product',
    uvp: 'From logo upload to branded content library in minutes. No photographers, no studio time, no design skills required.',
    targetMarket: 'Marketing agencies, e-commerce brands, small business owners, content creators',
    techStack: ['Next.js', 'Supabase', 'Gemini AI', 'GPT Image', 'Stripe'],
    highlights: [
      'Brand DNA system learns your complete brand identity',
      '5 generation modes — standard, product, personas, mockups, brand-your-photos',
      'Conversational AI editing in plain English',
      'Credit-based pricing with bulk generation support'
    ],
    impactStatement: 'Replaces weeks of photoshoot planning with minutes of AI-powered content creation.',
    url: 'https://brandeezy.io',
    image: '/images/portfolio/brandeezy-dashboard.png',
    industry: 'Marketing & Content'
  },
  {
    id: 'hoa-hunter',
    name: 'HOA Hunter',
    tagline: 'Find and reach every HOA board member in Florida',
    description: 'The most comprehensive database and outreach platform for targeting HOA board members. Companies selling services to HOAs can search, filter, and contact decision-makers directly — all from one tool.',
    category: 'product',
    uvp: 'The only platform combining a verified HOA database with multi-channel outreach. Cuts lead acquisition time by over 80%.',
    targetMarket: 'Property management companies, HOA service contractors, professional services',
    techStack: ['Next.js', 'PostgreSQL', 'Prisma', 'Twilio', 'Stripe'],
    highlights: [
      '168,969 verified board members in the database',
      'Multi-channel outreach — phone, email, and direct mail',
      'AI-powered smart dialer for efficient calling',
      'Search by location, association size, and service needs'
    ],
    impactStatement: 'Reduced lead acquisition time by over 80% for service companies targeting HOAs.',
    url: 'https://hoahunter.com',
    image: '/images/portfolio/hoahunter-dashboard.png',
    industry: 'Sales & Outreach'
  },
  {
    id: 'hailtruth',
    name: 'HailTruth',
    tagline: 'Scientific hail damage analysis, not guesswork',
    description: 'Advanced physics-based hail damage analysis platform with radar timelapse, AI fraud detection, and portfolio intelligence. Built to validate claims with data, not opinions.',
    category: 'product',
    uvp: 'The only platform combining radar timelapse, fraud detection, and portfolio intelligence to validate hail claims with scientific precision.',
    targetMarket: 'Insurance carriers, roofing contractors, forensic engineers',
    techStack: ['Next.js', 'Python', 'TensorFlow', 'Mapbox'],
    highlights: [
      'Physics-based hail analysis modeling',
      'AI-powered fraud detection',
      'Portfolio-wide intelligence and reporting',
      'Federal Rule 702 compliant methodology'
    ],
    impactStatement: 'Brings scientific rigor to an industry that has relied on subjective field inspections.',
    url: 'https://hailtruth.ai',
    image: '/images/portfolio/hailtruth-dashboard.png',
    industry: 'Insurance & Roofing'
  },
  {
    id: 'exotic-tracker-pro',
    name: 'Exotic Tracker Pro',
    tagline: 'Exotic animal inventory and compliance tracking',
    description: 'Specialized inventory and compliance management platform for exotic animal breeders, dealers, and sanctuaries. Tracks lineage, health records, permits, and regulatory requirements across jurisdictions.',
    category: 'product',
    uvp: 'Purpose-built for the exotic animal industry — tracks everything from genetics to government permits in one place.',
    targetMarket: 'Exotic animal breeders, reptile dealers, sanctuaries, wildlife rehabilitators',
    techStack: ['Next.js', 'Supabase', 'Claude AI'],
    highlights: [
      'Lineage and genetics tracking',
      'Health records with vet integration',
      'Multi-jurisdiction permit and compliance management',
      'Inventory with photo documentation'
    ],
    impactStatement: 'Brings professional-grade inventory management to an underserved niche.',
    industry: 'Animal Management'
  },
  // ─── Client Solutions ───
  {
    id: 'buildx',
    name: 'BuildX',
    tagline: 'One platform to run your entire trade business',
    description: 'Comprehensive operating system for trade businesses that brings CRM, project management, scheduling, invoicing, HR, and AI-powered business intelligence into one place. Built for contractors tired of juggling five different tools.',
    category: 'client',
    uvp: 'A unified platform that manages every aspect of a trade business — from lead to completion — with AI assistance built in.',
    targetMarket: 'Roofing contractors, general contractors, trade businesses',
    techStack: ['Next.js', 'Supabase', 'Drizzle ORM', 'Gemini AI', 'Claude AI', 'shadcn/ui'],
    highlights: [
      'AI-first architecture throughout every module',
      'Role-based workflows for office and field teams',
      'Integrated CRM, invoicing, HR, and BI dashboards',
      'Automated scheduling, dispatch, and reporting'
    ],
    impactStatement: 'Replaced a stack of 5 disconnected tools with one system the whole team actually uses.',
    url: 'https://build-x2.vercel.app',
    image: '/images/portfolio/buildx-dashboard.png',
    industry: 'Construction'
  },
  {
    id: 'seegarsone',
    name: 'SeegarsONE',
    tagline: 'Modern CRM replacing decades of legacy software',
    description: 'Custom CRM built to replace a legacy InfoTrac system for a multi-location fence company. AI-powered document processing, OCR for handwritten field notes, and automated proposal generation — all built around fence-industry-specific workflows.',
    category: 'client',
    uvp: 'Replaced a 20-year-old system with a modern, AI-enhanced CRM without disrupting daily operations during the transition.',
    targetMarket: 'Fence contractors, specialty trade companies',
    techStack: ['Next.js', 'Supabase', 'Claude AI', 'OpenAI', 'Tesseract OCR'],
    highlights: [
      'Migrated decades of legacy data without downtime',
      'OCR processing for handwritten field measurements',
      'AI-powered proposal and estimate generation',
      'Multi-location support with role-based access'
    ],
    impactStatement: 'Modernized a 20-year-old workflow while preserving every record and relationship.',
    url: 'https://seegars.one',
    image: '/images/portfolio/seegarsone-dashboard.png',
    industry: 'Fencing & Construction'
  },
  {
    id: 'metalcrafters',
    name: 'Metalcrafters',
    tagline: 'From meeting notes to task lists in minutes, not hours',
    description: 'Scheduling and project management platform built for custom metal fabrication. AI listens to meetings, extracts action items and deadlines, and populates the schedule automatically. GPS time tracking and automated PO parsing handle the rest.',
    category: 'client',
    uvp: 'Turns 30 minutes of post-meeting data entry into 2 minutes of review. Built for the chaos of multi-client custom fabrication.',
    targetMarket: 'Custom metal fabricators, construction subcontractors',
    techStack: ['Next.js', 'Supabase', 'Whisper AI', 'Claude AI', 'Leaflet Maps', 'Gantt'],
    highlights: [
      'AI meeting intelligence — automatic task extraction',
      'GPS time tracking for field crews',
      'Automated purchase order parsing',
      'Gantt chart scheduling with fabrication-specific workflows'
    ],
    impactStatement: 'Cut admin overhead by 15+ hours per week and eliminated missed action items entirely.',
    url: 'https://metalcrafters.app',
    image: '/images/portfolio/metalcrafters-dashboard.png',
    industry: 'Manufacturing'
  },
  {
    id: 'cougar-companies',
    name: 'Cougar Companies',
    tagline: 'Digital transformation for a 3rd-generation construction company',
    description: 'Full website rebuild and CRM ecosystem for a Southwest Florida construction contractor with 55+ years in business. Modern web presence with project showcases, plan room, career portal, and integrated CRM for lead and project management.',
    category: 'client',
    uvp: 'Brought a legacy construction brand into the digital age without losing the trust and reputation built over three generations.',
    targetMarket: 'Heavy civil construction, site development contractors',
    techStack: ['Next.js', 'Supabase', 'Google Analytics', 'Stripe', 'FFmpeg'],
    highlights: [
      'Complete website and brand refresh for 55-year-old company',
      'Digital plan room for bid document management',
      'Career portal with application tracking',
      'Integrated CRM and project showcase'
    ],
    impactStatement: 'Transformed a word-of-mouth business into a digital-first operation without losing its identity.',
    url: 'https://cougarcompanies.com',
    image: '/images/portfolio/cougar-companies-dashboard.png',
    industry: 'Construction'
  },
  {
    id: 'uncorpwear',
    name: 'Uncorpwear',
    tagline: 'Anti-corporate streetwear with attitude',
    description: 'E-commerce storefront for a streetwear brand that turns corporate culture on its head. Custom Shopify-integrated design with bold visuals, product showcases, and a brand identity that stands out in the crowded apparel space.',
    category: 'client',
    uvp: 'A brand presence as bold as the clothing — designed to convert browsers into buyers with unapologetic style.',
    targetMarket: 'Streetwear enthusiasts, anti-corporate culture, young professionals',
    techStack: ['Shopify', 'Custom Theme', 'JavaScript'],
    highlights: [
      'Custom e-commerce design with bold brand identity',
      'Product showcase with lifestyle imagery',
      'Mobile-first responsive design',
      'Integrated Shopify checkout and inventory'
    ],
    impactStatement: 'Built a brand presence that matches the irreverence of the product line.',
    url: 'https://uncorpwear.com',
    image: '/images/portfolio/uncorpwear-dashboard.png',
    industry: 'E-Commerce & Fashion'
  }
];

export const getAllProjects = (): Project[] => projects;
export const getProjectsByCategory = (category: 'product' | 'client'): Project[] =>
  projects.filter(p => p.category === category && !p.featured);
export const getFeaturedProjects = (): Project[] =>
  projects.filter(p => p.featured);
export const getProjectById = (id: string): Project | undefined =>
  projects.find(p => p.id === id);
