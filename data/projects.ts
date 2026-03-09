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
}

export const projects: Project[] = [
  {
    id: 'brandeezy',
    name: 'Brandeezy',
    tagline: 'Professional brand photography without the photoshoot',
    description: 'AI-powered platform that transforms logos and brand assets into professional, on-brand stock photography. The first conversational AI image generation platform built specifically for branded content.',
    category: 'product',
    uvp: 'From concept to casino-ready branded imagery in under 4 hours. No photographers, no studio time, no design skills required.',
    targetMarket: 'Marketing agencies, e-commerce brands, small business owners, content creators',
    techStack: ['Next.js', 'Supabase', 'Gemini AI', 'GPT-4', 'Stripe'],
    highlights: [
      'Conversational AI editing — tell it what to change in plain English',
      'Brand DNA system understands your complete brand identity',
      'Massive time and cost savings vs traditional photography',
      'Unlimited variations from a single brand kit'
    ],
    impactStatement: 'Replaces weeks of photoshoot planning with hours of AI-powered content creation.',
    url: 'https://brandeezy.io',
    image: '/images/portfolio/brandeezy-dashboard.png',
    industry: 'Marketing & Content'
  },
  {
    id: 'hoa-cloud',
    name: 'HOA Cloud',
    tagline: 'Florida HOA compliance on autopilot',
    description: 'Multi-tenant platform that gives self-managed HOAs and condos in Florida a turnkey, legally-compliant web management system. Automates the headache of Statutes 718 and 720 so board members can stop worrying about what they might be missing.',
    category: 'product',
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
    id: 'metalcrafters',
    name: 'Metalcrafters',
    tagline: 'From meeting notes to task lists in minutes, not hours',
    description: 'Scheduling and project management platform built for custom metal fabrication. AI listens to meetings, extracts action items and deadlines, and populates the schedule automatically. GPS time tracking and automated PO parsing handle the rest.',
    category: 'client',
    uvp: 'Turns 30 minutes of post-meeting data entry into 2 minutes of review. Built for the chaos of multi-client custom fabrication.',
    targetMarket: 'Custom metal fabricators, construction subcontractors',
    techStack: ['Next.js', 'Supabase', 'GPT-4', 'Whisper AI'],
    highlights: [
      'AI meeting intelligence — automatic task extraction',
      'GPS time tracking for field crews',
      'Automated purchase order parsing',
      'Built for fabrication-specific workflows'
    ],
    impactStatement: 'Cut admin overhead by 15+ hours per week and eliminated missed action items entirely.',
    url: 'https://metalcrafters.app',
    image: '/images/portfolio/metalcrafters-dashboard.png',
    industry: 'Manufacturing'
  },
  {
    id: 'buildx',
    name: 'BuildX',
    tagline: 'One platform to run your entire trade business',
    description: 'Comprehensive operating system for trade businesses that brings CRM, project management, scheduling, and AI automation into one place. Built for roofers, general contractors, and trade companies tired of juggling five different tools.',
    category: 'client',
    uvp: 'A unified platform that manages every aspect of a trade business — from lead to completion — with AI assistance built in.',
    targetMarket: 'Roofing contractors, general contractors, trade businesses',
    techStack: ['Next.js', 'Supabase', 'OpenAI', 'Vercel'],
    highlights: [
      'AI-first architecture throughout',
      'Role-based workflows for office and field',
      'Integrated CRM and project management',
      'Automated scheduling and dispatch'
    ],
    impactStatement: 'Replaced a stack of 5 disconnected tools with one system the whole team actually uses.',
    url: 'https://build-x2.vercel.app',
    image: '/images/portfolio/buildx-dashboard.png',
    industry: 'Construction'
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
  }
];

export const getAllProjects = (): Project[] => projects;
export const getProjectsByCategory = (category: 'product' | 'client'): Project[] =>
  projects.filter(p => p.category === category);
export const getProjectById = (id: string): Project | undefined =>
  projects.find(p => p.id === id);
