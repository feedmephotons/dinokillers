export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  developmentProgress: number; // Percentage
  uvp: string;
  targetMarket: string;
  techStack: string[];
  highlights: string[];
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
    tagline: 'Professional Brand Photography at Scale',
    description: 'AI-powered SaaS platform transforming logos and brand assets into professional, on-brand stock photography at scale. World\'s first conversational AI image generation platform for branded content creation.',
    developmentProgress: 85,
    uvp: 'From Concept to Casino-ready branded imagery in under 4 hours. No coding or design skills required. Revolutionary conversational editing interface.',
    targetMarket: 'Marketing agencies, e-commerce brands, small business owners, corporate teams, startups, content creators',
    techStack: ['Next.js 14', 'Supabase', 'Gemini 2.5 Flash', 'GPT-4', 'Stripe'],
    highlights: [
      'ONLY platform with conversational AI editing',
      'Brand DNA system - AI understands complete brand identity',
      'Massive efficiency vs traditional photography',
      'Accelerated content development'
    ],
    competitiveAdvantage: 'No other platform offers conversational editing of AI-generated branded content. Canva and Adobe lack AI branding intelligence.',
    themePrompt: 'Futuristic photography studio with robotic cameras and holographic brand logos, neon lighting, cyberpunk style',
    url: 'https://brandeezy.io',
    image: '/images/portfolio/brandeezy.webp'
  },
  {
    id: 'hoa-cloud',
    name: 'HOA Cloud',
    tagline: 'Automated Compliance for Florida HOAs',
    description: 'Multi-tenant B2B SaaS platform providing turnkey, legally-compliant web management systems for Florida HOAs and Condos. Automates Florida Statutes 718/720 compliance.',
    developmentProgress: 75,
    uvp: 'Only platform purpose-built for Florida HOA/Condo compliance automation. Saves board members significant time and prevents compliance issues.',
    targetMarket: 'Self-managed HOAs (25-150 units), board-managed associations, property management companies',
    techStack: ['Next.js 15', 'Supabase', 'Stripe Connect', 'Anthropic Claude', 'Vertex AI'],
    highlights: [
      'Florida compliance specialization',
      'AI-powered automation for document analysis',
      'More efficient than generic software',
      'Multi-tenant architecture with RLS'
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
    developmentProgress: 90,
    uvp: 'Only platform combining comprehensive HOA database with multi-channel outreach tools. Drastically reduces lead acquisition effort.',
    targetMarket: 'Property management companies, HOA service contractors (roofing, landscaping), professional services',
    techStack: ['Next.js 15', 'PostgreSQL', 'Prisma', 'Twilio', 'Stripe'],
    highlights: [
      '168,969 verified board members',
      'Proprietary data moat',
      'Multi-channel outreach (phone, email, mail)',
      'AI-powered smart dialer'
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
    developmentProgress: 80,
    uvp: 'Transforms 30 minutes of manual post-meeting data entry into 2 minutes of review. Purpose-built for multi-client custom fabrication chaos.',
    targetMarket: 'Custom metal fabricators, construction subcontractors',
    techStack: ['Next.js 15', 'Supabase', 'GPT-4', 'Whisper', 'Prisma'],
    highlights: [
      'AI meeting intelligence pipeline',
      'Fabrication-specific workflows',
      'GPS time tracking',
      'Automated PO parsing'
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
    developmentProgress: 70,
    uvp: 'Unified platform that manages every aspect of a trade business, from lead to completion, with AI assistance.',
    targetMarket: 'Roofing contractors, general contractors, trade businesses',
    techStack: ['Next.js 14', 'Supabase', 'OpenAI', 'Vercel'],
    highlights: [
      'AI-First Architecture',
      'Role-based Workflows',
      'Integrated CRM & PM',
      'Automated Scheduling'
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
    developmentProgress: 65,
    uvp: 'The only platform combining radar timelapse, fraud detection, and portfolio intelligence to validate hail claims with scientific precision.',
    targetMarket: 'Insurance carriers, roofing contractors, forensic engineers',
    techStack: ['Next.js 14', 'Python', 'TensorFlow', 'Mapbox'],
    highlights: [
      'Physics-based hail analysis',
      'AI Fraud Detection',
      'Portfolio Intelligence',
      'Federal Rule 702 Compliant'
    ],
    competitiveAdvantage: 'Competitors rely on simple radar swaths. We use physics-based modeling and AI to determine actual damage potential.',
    themePrompt: 'Holographic weather map with storm cells, radar data visualization, digital hail stones, scientific interface',
    url: 'https://hailtruth.ai',
    image: '/images/portfolio/hailtruth.webp'
  }
];

// -----------------------------------------------------------------------------
//  PORTFOLIO EXPANSION AREA
// -----------------------------------------------------------------------------
//  To add your own projects, copy the block below and paste it into the 'projects' array above,
//  or add them to the 'additionalProjects' array below.
//
//  {
//    id: 'your-project-id',
//    name: 'Your Project Name',
//    tagline: 'Short Punchy Tagline',
//    description: 'Longer description of what it does...',
//    developmentProgress: 100,
//    uvp: 'Why is this special?',
//    targetMarket: 'Who buys this?',
//    techStack: ['React', 'Node.js', 'AI'],
//    highlights: ['Feature 1', 'Feature 2'],
//    competitiveAdvantage: 'Why you win.',
//    themePrompt: 'Description for the AI image generator to create a background',
//    url: 'https://your-url.com' // optional
//  }
// -----------------------------------------------------------------------------

export const additionalProjects: Project[] = [
  {
    id: 'stealth-finance',
    name: 'Stealth Finance API',
    tagline: 'Next-Gen Fintech Infrastructure',
    description: 'High-frequency trading algorithms driven by sentiment analysis and macro-economic data streams. Currently in private beta with select hedge funds.',
    developmentProgress: 95,
    uvp: 'Micro-latency execution with AI-driven risk management.',
    targetMarket: 'Hedge Funds, FinTech Startups',
    techStack: ['Rust', 'Python', 'TensorFlow', 'Kafka'],
    highlights: ['Sub-millisecond latency', 'Predictive Risk Models', 'Blockchain Integration'],
    competitiveAdvantage: 'Speed and intelligence that legacy banking APIs cannot match.',
    themePrompt: 'Abstract visualization of high frequency trading data streams, glowing numbers, matrix style, golden financial nodes',
  },
  {
    id: 'med-scribe',
    name: 'MedScribe AI',
    tagline: 'Automated Clinical Documentation',
    description: 'Ambient intelligence for doctors that listens to patient consultations and automatically generates compliant medical notes in real-time.',
    developmentProgress: 88,
    uvp: 'Restores the doctor-patient relationship by removing the screen barrier.',
    targetMarket: 'Private Practices, Hospital Systems',
    techStack: ['Python', 'Whisper', 'GPT-4', 'FHIR'],
    highlights: ['HIPAA Compliant', '99% Accuracy', 'EHR Integration'],
    competitiveAdvantage: 'More accurate and context-aware than generic dictation tools.',
    themePrompt: 'Clean medical interface, holographic dna strand, white and blue clinical aesthetic, doctor analyzing data',
  },
  {
    id: 'urban-flow',
    name: 'UrbanFlow',
    tagline: 'Smart City Traffic Optimization',
    description: 'IoT network analysis using computer vision to optimize traffic light timing and reduce congestion in mid-sized cities.',
    developmentProgress: 70,
    uvp: 'Reduces commute times by 20% using existing camera infrastructure.',
    targetMarket: 'Municipalities, DOTs',
    techStack: ['C++', 'YOLOv8', 'Edge Computing'],
    highlights: ['Real-time adaptation', 'Emergency Vehicle Green-lighting', 'carbon emission tracking'],
    competitiveAdvantage: 'Does not require expensive new sensors, uses existing video feeds.',
    themePrompt: 'Aerial view of a city at night with traffic flowing like light streams, long exposure photography style, futuristic city',
  },
];

export const getAllProjects = (): Project[] => {
  return [...projects, ...additionalProjects];
};