export interface CaseStudy {
  slug: string;
  projectId: string;
  title: string;
  client: string;
  industry: string;
  problem: string;
  approach: string;
  impact: string[];
  quote?: string;
  quoteAuthor?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'caso-comply-ada-deadline',
    projectId: 'caso-comply',
    title: 'Racing the ADA Title II Deadline with Automated Remediation',
    client: 'Internal Product',
    industry: 'Document Compliance & Accessibility',
    problem: "Government agencies and public institutions face an April 2026 ADA Title II deadline requiring all digital documents to meet WCAG 2.1 AA standards. Manual remediation takes hours per document and costs $5-15 per page through traditional vendors. Most organizations have thousands of non-compliant PDFs and no realistic path to compliance.",
    approach: "We built an AI-powered remediation engine that processes PDFs at $0.30/page in under a minute. A free site-wide compliance scanner lets organizations assess their exposure before committing. The platform handles WCAG 2.1 AA, PDF/UA, and Section 508 simultaneously — fixing tag structure, reading order, alt text, and metadata in a single pass.",
    impact: [
      'Processing documents at 95%+ cost reduction vs manual remediation',
      'Free compliance scanner audits up to 25 pages in under 60 seconds',
      'Automated remediation in under a minute per document',
      'Serving government agencies, universities, and healthcare systems'
    ]
  },
  {
    slug: 'metalcrafters-scheduling',
    projectId: 'metalcrafters',
    title: 'From 30 Minutes of Data Entry to 2 Minutes of Review',
    client: 'Custom Metal Fabrication Company',
    industry: 'Manufacturing & Fabrication',
    problem: "A custom metal fabrication shop was running multi-client projects across multiple locations with crews in the field. After every meeting, someone had to manually type up notes, create tasks, update schedules, and send assignments. It was taking 30+ minutes per meeting and things were still falling through the cracks.",
    approach: "We built a platform that records meetings, uses AI to extract action items and deadlines, and automatically populates the project schedule. GPS time tracking keeps tabs on crew locations, and automated PO parsing handles the paperwork that was eating up admin time.",
    impact: [
      'Meeting follow-up reduced from 30 minutes to 2 minutes',
      'Zero missed action items since implementation',
      'GPS tracking eliminated timesheet disputes',
      'Admin overhead cut by an estimated 15 hours per week'
    ]
  },
  {
    slug: 'cougar-companies-digital-transformation',
    projectId: 'cougar-companies',
    title: 'Bringing a 55-Year-Old Construction Company Into the Digital Age',
    client: 'Cougar Companies',
    industry: 'Heavy Civil Construction',
    problem: "A third-generation construction company with 55+ years of reputation in Southwest Florida had no modern web presence. Bid opportunities were managed on paper, job applications came in by phone, and the company's digital footprint didn't match the scale of its real-world operations.",
    approach: "We built a complete digital ecosystem — modern website with project showcases, a digital plan room for bid document management, an online career portal with application tracking, and an integrated CRM. The design honored the company's legacy while projecting the professionalism of a modern operation.",
    impact: [
      'Complete digital transformation for a 55-year-old company',
      'Digital plan room streamlined bid document distribution',
      'Career portal reduced hiring admin by eliminating phone-based applications',
      'Online project showcase supporting new business development'
    ]
  }
];

export const getCaseStudyBySlug = (slug: string): CaseStudy | undefined =>
  caseStudies.find(cs => cs.slug === slug);

export const getCaseStudyByProjectId = (projectId: string): CaseStudy | undefined =>
  caseStudies.find(cs => cs.projectId === projectId);
