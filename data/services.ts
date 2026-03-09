export interface Service {
  id: string;
  pain: string;
  title: string;
  description: string;
  examples: string[];
  icon: string;
}

export const services: Service[] = [
  {
    id: 'automation',
    pain: 'Your team wastes hours on things software could do',
    title: 'Workflow Automation & Custom CRMs',
    description: "If your team is copying data between spreadsheets, chasing down approvals by email, or manually tracking anything — that's time you're paying for and getting nothing back. We build custom systems that handle the repetitive work so your people can focus on what actually grows the business.",
    examples: ['Custom CRM systems', 'Automated scheduling & dispatch', 'AI-powered data entry & document processing', 'Approval workflows'],
    icon: 'Zap'
  },
  {
    id: 'custom-software',
    pain: "Your current software doesn't fit how you actually work",
    title: 'Custom-Built Platforms',
    description: "Off-the-shelf software was built for the average company. You're not average. When QuickBooks, Salesforce, or whatever tool you're forcing to work isn't cutting it, we build exactly what you need — no extra features you'll never use, no workarounds, no compromises.",
    examples: ['Industry-specific management platforms', 'Client portals & dashboards', 'Internal tools your team actually wants to use', 'Mobile-ready web applications'],
    icon: 'Code2'
  },
  {
    id: 'ai-integration',
    pain: "You know AI could help but don't know where to start",
    title: 'AI Integration & Intelligent Automation',
    description: "AI isn't magic and it's not a buzzword — it's a tool that can save your team real hours every week. We find the specific places in your workflow where AI makes sense, build it in, and make sure it actually works. No hype, just results.",
    examples: ['AI-powered document analysis', 'Intelligent lead scoring & routing', 'Automated reporting & insights', 'Smart search across your data'],
    icon: 'Cpu'
  },
  {
    id: 'brand-digital',
    pain: "Your brand and online presence are stuck in the past",
    title: 'Branding, Web & Digital Marketing',
    description: "Your website is your first impression. If it looks like it was built in 2018, that's the story people are telling about your company. We build modern, fast websites and digital strategies that match the quality of what you actually do.",
    examples: ['Website design & development', 'Brand identity & strategy', 'Content creation & photography', 'Digital marketing campaigns'],
    icon: 'Palette'
  },
  {
    id: 'operations',
    pain: "You're growing but your operations can't keep up",
    title: 'Operations & Scaling Infrastructure',
    description: "Growth should feel good, not chaotic. When your systems start breaking because you're doing more business, that's a sign you need better infrastructure — not more employees throwing band-aids on broken processes.",
    examples: ['Data migration & system consolidation', 'Logistics & scheduling optimization', 'Reporting & business intelligence', 'Process documentation & training'],
    icon: 'TrendingUp'
  }
];
