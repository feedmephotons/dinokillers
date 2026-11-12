export const services = [
  {
    id: "custom-software",
    title: "Custom software & platforms",
    seoTitle: "Custom Software Development in Southwest Florida",
    description:
      "Business software built around how your company works: client portals, internal tools, custom CRMs, and complete industry platforms.",
    pain: "The master spreadsheet has had a good run.",
    intro:
      "You shouldn’t have to bend your best processes to fit a software subscription. We design and build web applications around the information, decisions, and handoffs your team deals with every day.",
    examples: [
      "Custom CRM and business platforms",
      "Client and customer portals",
      "Internal tools and dashboards",
      "Industry-specific web applications",
    ],
    deliverables: [
      "Workflow map and an agreed first-release scope",
      "Interface design and a working application",
      "Roles, permissions, and integration plan",
      "Launch checks, handover, and support scope",
    ],
    fit: "A good fit when several teams depend on the same information, off-the-shelf tools keep leaving the same gap, or a new product needs a focused first release.",
    process:
      "We start with the core workflow and the people who use it. We prototype the screens that matter, build the smallest release that is useful, and expand from feedback. Data migration and existing integrations are scoped before development starts.",
    projectIds: ["buildx", "seegarsone"],
    icon: "Code2",
  },
  {
    id: "ai-integration",
    title: "AI integration & intelligent tools",
    seoTitle: "AI Integration & Business Automation Services",
    description:
      "Put AI to work on documents, meeting notes, and information-heavy tasks, with human review built into the workflow.",
    pain: "Nobody should be retyping paperwork by hand.",
    intro:
      "A useful AI project starts with one specific task: pulling details out of a document, turning meeting notes into action items, or helping a team find information. We build that capability into the systems your business already uses.",
    examples: [
      "Document extraction and classification",
      "Meeting notes turned into action items",
      "Search across business information",
      "AI assistance inside existing tools",
    ],
    deliverables: [
      "A defined use case with representative examples",
      "Integration into the working process",
      "Human review and exception handling",
      "Evaluation criteria and a usage-cost estimate",
    ],
    fit: "Best for repeatable tasks with accessible inputs and a clear way to judge the output. High-stakes decisions get a named reviewer and a way to correct mistakes.",
    process:
      "We test the idea against real examples before we expand it. We define what the system produces, how people review it, and how exceptions reach the right person. The result is a tool your team understands and uses the same way every time.",
    projectIds: ["caso-comply", "caso-collect"],
    icon: "Cpu",
  },
  {
    id: "automation",
    title: "Workflow automation & CRMs",
    seoTitle: "Custom CRM Development & Workflow Automation",
    description:
      "Connect leads, schedules, approvals, and follow-ups so information moves with the work. Includes custom CRMs built around your process.",
    pain: "Everyone works around the CRM. Time to retire it.",
    intro:
      "Copying the same information into three tools is a symptom. We look at the workflow behind it, pin down who owns each step, and build the connections that let the work move without the copying.",
    examples: [
      "Lead intake, routing, and follow-up",
      "Scheduling and dispatch workflows",
      "Approval and document processes",
      "CRM integrations and reporting",
    ],
    deliverables: [
      "Maps of the current workflow and the new one",
      "Defined triggers, owners, and exceptions",
      "Connected systems or a custom CRM",
      "Handover documentation for the team",
    ],
    fit: "A good fit for teams juggling spreadsheets, shared inboxes, and systems that don’t talk to each other. Sometimes an integration is enough. Sometimes the workflow needs its own application.",
    process:
      "We trace a real job or customer from first contact to completion. We pick out the repeated steps that cost time or cause confusion, then automate them with explicit rules and clear ownership.",
    projectIds: ["seegarsone", "metal-caddie"],
    icon: "Zap",
  },
  {
    id: "brand-digital",
    title: "Websites, branding & digital",
    seoTitle: "Website Design & Branding in Southwest Florida",
    description:
      "Brands and websites that say what you do, show your work, and give the right customers a clear next step.",
    pain: "Your website should match the business you’ve built.",
    intro:
      "A good website makes your business easier to understand and easier to choose. We handle positioning, content, design, and development together, so every page has a job.",
    examples: [
      "Website design and development",
      "Brand positioning and visual identity",
      "Project photography and video",
      "Search-focused content and digital campaigns",
    ],
    deliverables: [
      "Audience, positioning, and content structure",
      "Responsive visual design",
      "Accessible page structure and technical SEO",
      "Launch checks and a content handover",
    ],
    fit: "For established businesses whose website undersells their work, and new brands that need a clear, credible place in the market.",
    process:
      "We start with your audience and the decisions they have to make. Content and page structure come first, then a visual direction that fits the brand. We build the pages, test the key paths through the site, and get it ready for launch.",
    projectIds: ["cougar-companies", "uncorpwear"],
    icon: "Palette",
  },
  {
    id: "operations",
    title: "Operations & connected systems",
    seoTitle: "Business Systems Integration & Operations Software",
    description:
      "Pull scattered business information into systems you can plan, report, and make daily decisions from.",
    pain: "The legacy system nobody dares touch? We touch it.",
    intro:
      "When a report means stitching together five exports and a spreadsheet, the systems are the problem. We sort out where your information lives, connect it, and build the operational tools your team needs to use it.",
    examples: [
      "System consolidation and data migration",
      "Operational dashboards and reporting",
      "Scheduling and resource management",
      "Process documentation and team handover",
    ],
    deliverables: [
      "System inventory and data ownership map",
      "Migration or integration plan",
      "Operational views and reporting",
      "Documentation and transition support",
    ],
    fit: "For growing businesses with multiple locations, departments that don’t share systems, or tools that no longer agree on what is happening.",
    process:
      "We identify the source of truth for each piece of information and plan how updates move between systems. Migration, permissions, and reporting are planned together, with a staged transition where the project calls for it.",
    projectIds: ["buildx", "caso-book"],
    icon: "TrendingUp",
  },
];
export type Service = (typeof services)[number];
