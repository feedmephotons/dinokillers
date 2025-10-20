/**
 * Dino Killers Portfolio Projects Data
 * Compiled from comprehensive codebase analysis reports
 */

export interface ProjectMetrics {
  linesOfCode: string;
  techStack: string[];
  developmentComplete: string; // % complete
  capitalNeeded: string; // To launch
  timeToRevenue: string; // Months to first $
  tam: string; // Total Addressable Market
  projectedYear3ARR: string; // PROJECTED not actual
  potentialValuation: string; // At scale, not current
  projectedLTV_CAC: string; // Projected ratio
  projectedGrossMargin: string;
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  website: string;
  logo: string; // Path to logo file
  screenshots?: string[]; // Paths to screenshot images
  metrics: ProjectMetrics;
  status: 'live' | 'beta' | 'development';
  investmentGrade: string; // e.g., "A+", "A", "A-"
  highlights: string[];
  investmentImpact: string[]; // What happens with proper funding and team
  uniqueValue: string;
  targetMarket: string;
  competitiveAdvantage: string; // Why we win vs any alternatives
}

export const projects: Project[] = [
  {
    id: 'hoa-hunter',
    name: 'HOA Hunter',
    tagline: 'Connect with Every HOA Board Member in Florida',
    description: 'B2B SaaS platform providing the most comprehensive database and outreach solution for targeting homeowners association (HOA) board members in Florida. Multi-channel marketing suite with AI-powered meeting intelligence.',
    website: 'hoahunter.com',
    logo: '/logos/projects/hoa-hunter-logo.svg',
    metrics: {
      linesOfCode: '50,475+',
      techStack: ['Next.js 15.3.5', 'PostgreSQL', 'Prisma', 'Twilio', 'Stripe'],
      developmentComplete: '90%',
      capitalNeeded: '$500K - $750K',
      timeToRevenue: '3-4 months',
      tam: '$2B (Florida), $15B+ (National)',
      projectedYear3ARR: '$12.24M ARR',
      potentialValuation: '$97.9M - $183.6M at scale',
      projectedLTV_CAC: '32.5:1',
      projectedGrossMargin: '70%'
    },
    status: 'beta',
    investmentGrade: 'A+',
    highlights: [
      '168,969 verified board members across 59,715 HOAs',
      'Proprietary data moat with 8+ months of manual aggregation',
      'Multi-channel outreach (phone, email, direct mail, digital ads)',
      'AI-powered smart dialer with transcription & sentiment analysis',
      'No direct competitors in Florida-specific HOA targeting'
    ],
    investmentImpact: [
      'Dedicated sales team to rapidly acquire first 100 customers within 6 months',
      'Data enrichment team to expand beyond Florida into national markets',
      'Marketing budget to establish category leadership in HOA B2B outreach',
      'Customer success infrastructure to maximize retention and expansion revenue',
      'Engineering resources to automate data collection and maintain quality'
    ],
    uniqueValue: 'Only platform combining comprehensive HOA database with multi-channel outreach tools. Saves customers 80% on lead acquisition costs.',
    targetMarket: 'Property management companies, HOA service contractors (roofing, landscaping, pool, HVAC), professional services (attorneys, insurance, accounting)',
    competitiveAdvantage: 'No platform combines HOA-specific targeting with multi-channel outreach. General B2B databases lack HOA depth, while property management tools don\'t provide lead generation capabilities.'
  },
  {
    id: 'hoa-cloud',
    name: 'HOA Cloud',
    tagline: 'Avoid $14,000+ Florida HOA Fines with Automated Compliance',
    description: 'Multi-tenant B2B SaaS platform providing turnkey, legally-compliant web management systems for Florida HOAs and Condos. Automates Florida Statutes 718/720 compliance with resident portal, payment processing, and AI document analysis.',
    website: 'hoacloud.app',
    logo: '/logos/projects/hoa-cloud-logo.png',
    metrics: {
      linesOfCode: '12,444',
      techStack: ['Next.js 15.3.5', 'Supabase', 'Stripe Connect', 'Anthropic Claude', 'Google Vertex AI'],
      developmentComplete: '75%',
      capitalNeeded: '$400K - $600K',
      timeToRevenue: '4-6 months',
      tam: '$2B (Florida), $15B+ (National)',
      projectedYear3ARR: '$5.38M ARR',
      potentialValuation: '$43M - $80.7M at scale',
      projectedLTV_CAC: '5-8:1',
      projectedGrossMargin: '80-85%'
    },
    status: 'development',
    investmentGrade: 'A',
    highlights: [
      'Florida compliance specialization - only platform built for FL Statutes 718/720',
      'AI-powered automation for document analysis and bid processing',
      '30-50% cheaper than generic property management software',
      'Unique vendor portal with no-login magic links',
      'Multi-tenant architecture with Row-Level Security'
    ],
    investmentImpact: [
      'Product development team to complete MVP and reach production readiness',
      'Legal counsel to ensure ongoing Florida statute compliance',
      'Sales team targeting self-managed HOAs desperate for compliance solutions',
      'Partnership development with Florida HOA attorneys and property managers',
      'Marketing to educate market on $14K+ fine exposure and compliance requirements'
    ],
    uniqueValue: 'Only platform purpose-built for Florida HOA/Condo compliance automation. Saves board members 15+ hours/month and prevents $14K+ fines.',
    targetMarket: 'Self-managed HOAs (25-150 units), board-managed associations (150-500 units), property management companies managing 5-50+ HOAs',
    competitiveAdvantage: 'Generic property management tools are built for managers, not self-managed boards. None automate Florida-specific compliance (Statutes 718/720), which is our entire value proposition.'
  },
  {
    id: 'brandeezy',
    name: 'Brandeezy',
    tagline: 'Stop Spending $2,500 on ONE Photo Shoot',
    description: 'AI-powered SaaS platform transforming logos and brand assets into professional, on-brand stock photography at scale. World\'s first conversational AI image generation platform for branded content creation.',
    website: 'brandeezy.io',
    logo: '/logos/projects/brandeezy-logo.png',
    metrics: {
      linesOfCode: '22,000+',
      techStack: ['Next.js 14', 'Supabase', 'Google Gemini 2.5 Flash', 'OpenAI GPT-4', 'Stripe'],
      developmentComplete: '85%',
      capitalNeeded: '$300K - $500K',
      timeToRevenue: '2-3 months',
      tam: '$50B+ (Marketing content creation)',
      projectedYear3ARR: '$100M ARR',
      potentialValuation: '$800M - $1.5B at scale',
      projectedLTV_CAC: '17.5:1',
      projectedGrossMargin: '80-85%'
    },
    status: 'beta',
    investmentGrade: 'A+',
    highlights: [
      'ONLY platform with conversational AI editing ("Make the logo bigger")',
      'Brand DNA system - AI understands complete brand identity',
      '95% cost reduction vs traditional photography ($500 vs $100K)',
      '500x faster than traditional development (3 hours vs 21 weeks)',
      'Deployed and operational on brandeezy.io'
    ],
    investmentImpact: [
      'Marketing team to acquire agency partnerships and enterprise customers',
      'Platform optimization team for storage efficiency and library performance',
      'Customer success infrastructure to drive viral word-of-mouth growth',
      'Sales development to target high-volume content creators and corporate teams',
      'Content marketing to demonstrate ROI and establish category leadership'
    ],
    uniqueValue: 'From Concept to Casino-ready branded imagery in under 4 hours. No coding or design skills required. Revolutionary conversational editing interface.',
    targetMarket: 'Marketing agencies, e-commerce brands, small business owners, corporate teams, startups, content creators',
    competitiveAdvantage: 'No other platform offers conversational editing of AI-generated branded content. Canva and Adobe lack AI branding intelligence. Midjourney and DALL-E can\'t maintain brand consistency or allow natural language refinement.'
  },
  {
    id: 'metalcrafters',
    name: 'Metalcrafters',
    tagline: 'AI-Powered Scheduling for Custom Stair Fabrication',
    description: 'B2B SaaS scheduling and project management platform for custom metal fabrication companies. AI transforms meeting transcriptions into automated task extraction and dynamic production planning.',
    website: 'metalcrafters.app',
    logo: '/logos/projects/metalcrafters-logo.svg',
    metrics: {
      linesOfCode: '6,828 (TypeScript)',
      techStack: ['Next.js 15.4.1', 'Supabase', 'OpenAI GPT-4', 'Whisper', 'Prisma'],
      developmentComplete: '80%',
      capitalNeeded: '$250K - $400K',
      timeToRevenue: '3-5 months',
      tam: '$400-500M (Metal fabrication scheduling tools)',
      projectedYear3ARR: '$5.38M ARR',
      potentialValuation: '$43M - $80.6M at scale',
      projectedLTV_CAC: '5.7-24:1',
      projectedGrossMargin: '85-90%'
    },
    status: 'beta',
    investmentGrade: 'A-',
    highlights: [
      'AI meeting intelligence - automated meeting-to-schedule pipeline is unique',
      'Fabrication-specific workflows for 5-phase stair production',
      'Modern UX built on Next.js 15 and React 19',
      'GPS time tracking and mobile-first field app',
      'Document intelligence with automated PO parsing'
    ],
    investmentImpact: [
      'Dedicated sales team with fabrication industry expertise',
      'Product team to build integrations with existing ERP and accounting systems',
      'Marketing budget for trade show presence and industry publication advertising',
      'Customer success team to drive implementation and adoption',
      'Engineering resources to expand beyond metalworking to general custom fabrication'
    ],
    uniqueValue: 'Transforms 30 minutes of manual post-meeting data entry into 2 minutes of review/approval. Purpose-built for multi-client custom fabrication scheduling chaos.',
    targetMarket: 'Custom metal fabricators ($2M-$20M revenue, 5-50 concurrent projects, 10-100 employees), general custom fabrication, construction subcontractors',
    competitiveAdvantage: 'Generic project management tools require manual data entry and lack fabrication workflows. Legacy ERP systems have terrible UX. No platform automates meeting transcription to task creation for custom manufacturing.'
  },
  {
    id: 'shady-luck',
    name: 'Shady Luck',
    tagline: 'From Concept to Casino in Under 4 Hours',
    description: 'AI-powered slot game development platform automating the entire game creation pipeline from asset generation to deployment. Combines Google Gemini, OpenAI GPT-Image-1, and RunwayML for production-ready slot games in minutes.',
    website: 'N/A (Development)',
    logo: '/logos/projects/shady-luck-logo.png',
    metrics: {
      linesOfCode: '22,000 (Python + JavaScript)',
      techStack: ['Python Flask', 'Google Gemini 2.5 Flash', 'OpenAI GPT-4', 'RunwayML', 'Fabric.js'],
      developmentComplete: '70%',
      capitalNeeded: '$350K - $500K',
      timeToRevenue: '5-7 months',
      tam: '$1.29B (iGaming dev tools)',
      projectedYear3ARR: '$6M ARR',
      potentialValuation: '$48M - $90M at scale',
      projectedLTV_CAC: '5-10:1',
      projectedGrossMargin: '80-85%'
    },
    status: 'development',
    investmentGrade: 'A',
    highlights: [
      'First-to-market AI-native slot game IDE',
      '99% cost reduction ($500 vs $100K traditional)',
      '500x faster (4 hours vs 6 months)',
      'Batch generation intelligence with proprietary grid system',
      'Direct Stake Engine SDK integration'
    ],
    investmentImpact: [
      'Engineering team to complete production deployment and auth system',
      'Quality assurance team to refine AI generation consistency',
      'Business development to secure partnerships with online casino operators',
      'Sales team targeting indie game studios and social casino platforms',
      'Technical writer to create comprehensive documentation and tutorials'
    ],
    uniqueValue: 'Only end-to-end AI automation for slot game development. Batch generates 19 symbols + UI in one click. Accessible to non-developers.',
    targetMarket: 'Indie game studios (1-10 employees), online casino operators, social casino platforms, game resellers/aggregators, hobbyists',
    competitiveAdvantage: 'Traditional game development requires artists, developers, and months of work. No other platform automates the entire slot game pipeline from concept to deployment. Unity requires technical expertise we eliminate.'
  },
  {
    id: 'taskx',
    name: 'TaskX',
    tagline: 'Stop Drowning in Tasks - AI That Understands Your Business',
    description: 'AI-powered task management platform for independent contractors managing 20+ clients. Natural language processing, voice-to-task conversion, and intelligent automation reduce admin overhead.',
    website: 'N/A (Development)',
    logo: '/logos/projects/taskx-logo.svg',
    metrics: {
      linesOfCode: '6,828 (TypeScript)',
      techStack: ['Next.js 14', 'Prisma', 'OpenAI GPT-4', 'Whisper', 'TanStack Query'],
      developmentComplete: '65%',
      capitalNeeded: '$200K - $350K',
      timeToRevenue: '4-6 months',
      tam: '$2.8-4.2B (US contractors)',
      projectedYear3ARR: '$23M ARR',
      potentialValuation: '$184M - $345M at scale',
      projectedLTV_CAC: '5-10:1',
      projectedGrossMargin: '80-85%'
    },
    status: 'development',
    investmentGrade: 'A-',
    highlights: [
      'Only task manager built specifically for multi-client consultants',
      'Voice-first input with Whisper integration',
      'Client priority system unique to TaskX',
      'Revenue intelligence with billable hour tracking',
      'Modern glass morphism UI with zero technical debt'
    ],
    investmentImpact: [
      'Beta program with independent contractors for product validation and refinement',
      'Marketing campaign targeting freelancer communities and consultant networks',
      'Customer acquisition strategy leveraging viral referral mechanics',
      'Product team to complete remaining features and mobile app development',
      'Content marketing showcasing ROI for multi-client service professionals'
    ],
    uniqueValue: 'Client-centric priority weighting combines task priority (60%) and client importance (40%). Bulk AI operations like "I\'m sick today" reschedule all affected tasks intelligently.',
    targetMarket: 'Independent contractors managing 10+ clients (8-12M in US), consultants, freelancers, service professionals',
    competitiveAdvantage: 'Generic task managers treat all tasks equally. We understand multi-client contractor needs: client importance weighting, billable hour tracking, and bulk AI rescheduling that respects client relationships.'
  }
];

/**
 * Portfolio summary statistics
 * IMPORTANT: These are PROJECTIONS for a pre-launch venture studio portfolio
 */
export const portfolioStats = {
  totalProjects: projects.length,
  totalLinesOfCode: '120,447+',
  averageDevelopmentComplete: '78%',
  totalCapitalNeeded: '$2M - $3.1M',
  averageTimeToRevenue: '3-5 months',
  combinedTAM: '$60B+',
  projectedTotalYear3ARR: '$152M ARR',
  potentialCombinedValuation: '$1.2B - $2.8B at scale',
  projectedAverageGrossMargin: '78%',
  projectedAverageLTV_CAC: '13.7:1',
  statusBreakdown: {
    live: projects.filter(p => p.status === 'live').length,
    beta: projects.filter(p => p.status === 'beta').length,
    development: projects.filter(p => p.status === 'development').length
  },
  investmentThesis: 'Seeking $2-3M to launch portfolio of 6 substantially-built SaaS products. Technical risk eliminated - products are 65-90% complete. Capital will fund go-to-market, not development.'
};

/**
 * Get project by ID
 */
export function getProjectById(id: string): Project | undefined {
  return projects.find(p => p.id === id);
}

/**
 * Get projects by status
 */
export function getProjectsByStatus(status: Project['status']): Project[] {
  return projects.filter(p => p.status === status);
}

/**
 * Get investment grade distribution
 */
export function getInvestmentGradeDistribution() {
  const distribution: Record<string, number> = {};
  projects.forEach(p => {
    distribution[p.investmentGrade] = (distribution[p.investmentGrade] || 0) + 1;
  });
  return distribution;
}
