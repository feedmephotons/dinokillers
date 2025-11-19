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
  },
  {
    id: 'shady-luck',
    name: 'Shady Luck',
    tagline: 'From Concept to Casino in Under 4 Hours',
    description: 'AI-powered slot game development platform automating the entire game creation pipeline from asset generation to deployment.',
    investmentGrade: 'A',
    developmentProgress: 70,
    capitalNeeded: '$350K - $500K',
    timeToRevenue: '5-7 months',
    projectedARR: '$6M',
    uvp: 'Only end-to-end AI automation for slot game development. Batch generates 19 symbols + UI in one click.',
    targetMarket: 'Indie game studios, online casino operators, social casino platforms',
    techStack: ['Python Flask', 'Gemini 2.5 Flash', 'GPT-4', 'RunwayML', 'Fabric.js'],
    highlights: [
      'First-to-market AI-native slot game IDE',
      '99% cost reduction',
      '500x faster production',
      'Direct Stake Engine SDK integration'
    ],
    investmentImpact: [
      'Engineering team for auth system',
      'QA team for AI consistency',
      'Partnerships with casino operators'
    ],
    competitiveAdvantage: 'No other platform automates the entire slot game pipeline. Unity requires technical expertise we eliminate.',
    themePrompt: 'Cyberpunk slot machine, glowing neon symbols, casino chips floating in zero gravity, digital glitch effects',
  },
  {
    id: 'taskx',
    name: 'TaskX',
    tagline: 'AI That Understands Your Business',
    description: 'AI-powered task management platform for independent contractors managing 20+ clients. Natural language processing and voice-to-task conversion.',
    investmentGrade: 'A-',
    developmentProgress: 65,
    capitalNeeded: '$200K - $350K',
    timeToRevenue: '4-6 months',
    projectedARR: '$23M',
    uvp: 'Client-centric priority weighting. Bulk AI operations like "I\'m sick today" reschedule all affected tasks intelligently.',
    targetMarket: 'Independent contractors, consultants, freelancers, service professionals',
    techStack: ['Next.js 14', 'Prisma', 'GPT-4', 'Whisper', 'TanStack Query'],
    highlights: [
      'Built for multi-client consultants',
      'Voice-first input',
      'Revenue intelligence',
      'Zero technical debt'
    ],
    investmentImpact: [
      'Beta program validation',
      'Marketing campaign',
      'Mobile app development'
    ],
    competitiveAdvantage: 'Generic task managers treat all tasks equally. We understand multi-client contractor needs and client importance.',
    themePrompt: 'Holographic task list floating in air, iron man style interface, organized chaos, glowing checkmarks, futuristic office',
  }
];