export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  investmentGrade: string;
  developmentProgress: number; // Percentage
  capitalNeeded: string;
  timeToRevenue: string;
  projectedARR: string;
  uvp: string;
  targetMarket: string;
  techStack: string[];
  highlights: string[];
  investmentImpact: string[];
  competitiveAdvantage: string;
  logoStr?: string; // Placeholder for icon logic
  themePrompt: string; // For GenImage
  url?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'brandeezy',
    name: 'Brandeezy',
    tagline: 'Stop Spending $2,500 on ONE Photo Shoot',
    description: 'AI-powered SaaS platform transforming logos and brand assets into professional, on-brand stock photography at scale. World\'s first conversational AI image generation platform for branded content creation.',
    investmentGrade: 'A+',
    developmentProgress: 85,
    capitalNeeded: '$300K - $500K',
    timeToRevenue: '2-3 months',
    projectedARR: '$100M',
    uvp: 'From Concept to Casino-ready branded imagery in under 4 hours. No coding or design skills required. Revolutionary conversational editing interface.',
    targetMarket: 'Marketing agencies, e-commerce brands, small business owners, corporate teams, startups, content creators',
    techStack: ['Next.js 14', 'Supabase', 'Gemini 2.5 Flash', 'GPT-4', 'Stripe'],
    highlights: [
      'ONLY platform with conversational AI editing',
      'Brand DNA system - AI understands complete brand identity',
      '95% cost reduction vs traditional photography',
      '500x faster than traditional development'
    ],
    investmentImpact: [
      'Marketing team to acquire agency partnerships',
      'Platform optimization team',
      'Customer success infrastructure',
      'Sales development'
    ],
    competitiveAdvantage: 'No other platform offers conversational editing of AI-generated branded content. Canva and Adobe lack AI branding intelligence.',
    themePrompt: 'Futuristic photography studio with robotic cameras and holographic brand logos, neon lighting, cyberpunk style',
    url: 'https://brandeezy.io',
    image: '/images/portfolio/brandeezy.webp'
  },
  {
    id: 'hoa-cloud',
    name: 'HOA Cloud',
    tagline: 'Avoid $14,000+ Florida HOA Fines',
    description: 'Multi-tenant B2B SaaS platform providing turnkey, legally-compliant web management systems for Florida HOAs and Condos. Automates Florida Statutes 718/720 compliance.',
    investmentGrade: 'A',
    developmentProgress: 75,
    capitalNeeded: '$400K - $600K',
    timeToRevenue: '4-6 months',
    projectedARR: '$5.38M',
    uvp: 'Only platform purpose-built for Florida HOA/Condo compliance automation. Saves board members 15+ hours/month and prevents $14K+ fines.',
    targetMarket: 'Self-managed HOAs (25-150 units), board-managed associations, property management companies',
    techStack: ['Next.js 15', 'Supabase', 'Stripe Connect', 'Anthropic Claude', 'Vertex AI'],
    highlights: [
      'Florida compliance specialization',
      'AI-powered automation for document analysis',
      '30-50% cheaper than generic software',
      'Multi-tenant architecture with RLS'
    ],
    investmentImpact: [
      'Product development team to complete MVP',
      'Legal counsel for compliance',
      'Sales team targeting self-managed HOAs'
    ],
    competitiveAdvantage: 'Generic property management tools are built for managers, not self-managed boards. None automate Florida-specific compliance.',
    themePrompt: 'Futuristic glowing digital blueprint of a gated community, data streams connecting houses, florida palm trees in neon, dark background',
    url: 'https://hoacloud.app',
    image: '/images/portfolio/hoa-cloud.webp'
  },
  {
    id: 'hoa-hunter',
    name: 'HOA Hunter',
    tagline: 'Connect with Every HOA Board Member',
    description: 'B2B SaaS platform providing the most comprehensive database and outreach solution for targeting homeowners association (HOA) board members in Florida.',
    investmentGrade: 'A+',
    developmentProgress: 90,
    capitalNeeded: '$500K - $750K',
    timeToRevenue: '3-4 months',
    projectedARR: '$12.24M',
    uvp: 'Only platform combining comprehensive HOA database with multi-channel outreach tools. Saves customers 80% on lead acquisition costs.',
    targetMarket: 'Property management companies, HOA service contractors (roofing, landscaping), professional services',
    techStack: ['Next.js 15', 'PostgreSQL', 'Prisma', 'Twilio', 'Stripe'],
    highlights: [
      '168,969 verified board members',
      'Proprietary data moat',
      'Multi-channel outreach (phone, email, mail)',
      'AI-powered smart dialer'
    ],
    investmentImpact: [
      'Dedicated sales team',
      'Data enrichment team',
      'Marketing budget for category leadership'
    ],
    competitiveAdvantage: 'No platform combines HOA-specific targeting with multi-channel outreach. General B2B databases lack HOA depth.',
    themePrompt: 'Digital map of florida with glowing data nodes, sniper scope overlay, cybernetic interface, dark mode',
    url: 'https://hoahunter.com',
    image: '/images/portfolio/hoa-hunter.webp'
  },
  {
    id: 'metalcrafters',
    name: 'Metalcrafters',
    tagline: 'AI-Powered Scheduling for Custom Fabrication',
    description: 'B2B SaaS scheduling and project management platform for custom metal fabrication companies. AI transforms meeting transcriptions into automated task extraction.',
    investmentGrade: 'A-',
    developmentProgress: 80,
    capitalNeeded: '$250K - $400K',
    timeToRevenue: '3-5 months',
    projectedARR: '$5.38M',
    uvp: 'Transforms 30 minutes of manual post-meeting data entry into 2 minutes of review. Purpose-built for multi-client custom fabrication chaos.',
    targetMarket: 'Custom metal fabricators ($2M-$20M revenue), construction subcontractors',
    techStack: ['Next.js 15', 'Supabase', 'GPT-4', 'Whisper', 'Prisma'],
    highlights: [
      'AI meeting intelligence pipeline',
      'Fabrication-specific workflows',
      'GPS time tracking',
      'Automated PO parsing'
    ],
    investmentImpact: [
      'Sales team with industry expertise',
      'Integrations with ERP systems',
      'Trade show presence'
    ],
    competitiveAdvantage: 'Generic tools require manual entry and lack fabrication workflows. Legacy ERP systems have terrible UX.',
    themePrompt: 'Robotic arm welding metal with sparks flying, neon sparks, dark industrial factory, holographic schematics overlay',
    url: 'https://metalcrafters.app',
    image: '/images/portfolio/metalcrafters.webp'
  },
  {
    id: 'buildx',
    name: 'BuildX',
    tagline: 'AI-First Operating System for the Trades',
    description: 'Comprehensive operating system for trade businesses, integrating CRM, project management, and AI-driven automation for roofing and construction.',
    investmentGrade: 'A',
    developmentProgress: 70,
    capitalNeeded: '$350K - $500K',
    timeToRevenue: '5-7 months',
    projectedARR: '$6M',
    uvp: 'Unified platform that manages every aspect of a trade business, from lead to completion, with AI assistance.',
    targetMarket: 'Roofing contractors, general contractors, trade businesses',
    techStack: ['Next.js 14', 'Supabase', 'OpenAI', 'Vercel'],
    highlights: [
      'AI-First Architecture',
      'Role-based Workflows',
      'Integrated CRM & PM',
      'Automated Scheduling'
    ],
    investmentImpact: [
      'Engineering team for mobile app',
      'Sales team for contractor acquisition',
      'Partnerships with suppliers'
    ],
    competitiveAdvantage: 'Legacy construction software is clunky and siloed. BuildX is a unified, AI-native OS.',
    themePrompt: 'Futuristic construction site with drones, holographic blueprints, digital hardhats, neon yellow and black safety colors',
    url: 'https://build-x2.vercel.app',
    image: '/images/portfolio/buildx2.webp'
  },
  {
    id: 'hailtruth',
    name: 'HailTruth',
    tagline: 'Stop Guessing. Know The Truth.',
    description: 'Advanced physics-based hail damage analysis with radar timelapse, AI fraud detection, and portfolio intelligence. Federal Rule 702 compliant.',
    investmentGrade: 'A-',
    developmentProgress: 65,
    capitalNeeded: '$200K - $350K',
    timeToRevenue: '4-6 months',
    projectedARR: '$23M',
    uvp: 'The only platform combining radar timelapse, fraud detection, and portfolio intelligence to validate hail claims with scientific precision.',
    targetMarket: 'Insurance carriers, roofing contractors, forensic engineers',
    techStack: ['Next.js 14', 'Python', 'TensorFlow', 'Mapbox'],
    highlights: [
      'Physics-based hail analysis',
      'AI Fraud Detection',
      'Portfolio Intelligence',
      'Federal Rule 702 Compliant'
    ],
    investmentImpact: [
      'Data science team expansion',
      'Legal compliance framework',
      'Enterprise sales team'
    ],
    competitiveAdvantage: 'Competitors rely on simple radar swaths. We use physics-based modeling and AI to determine actual damage potential.',
    themePrompt: 'Holographic weather map with storm cells, radar data visualization, digital hail stones, scientific interface',
    url: 'https://hailtruth.ai',
    image: '/images/portfolio/hailtruth.webp'
  }
];