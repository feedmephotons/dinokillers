export const caseStudies = [
  {
    slug: "buildx-trade-operations",
    projectId: "buildx",
    title: "One app for the office and the jobsite.",
    client: "BuildX",
    industry: "Construction & trades",
    kind: "Client build",
    summary:
      "BuildX runs CRM, scheduling, dispatch, and invoicing for a trade business in one app, with separate views for office and field teams.",
    problem:
      "A trade business moves the same job through estimating, scheduling, field work, and billing. When each stage lives in a different system, somebody has to rebuild the story at every handoff. The office calls the field. The field texts the office. The invoice waits on both.",
    approach:
      "We built one application around the job. Customer records, job details, schedules, and invoices share the same record. Office and field users each get the screens their work needs, and the navigation follows the job from sold to scheduled to built to billed.",
    decisions: [
      {
        title: "Organize around the job",
        body: "Every module hangs off the customer and the project. A handoff has somewhere to live other than an email thread.",
      },
      {
        title: "Different views for different jobs",
        body: "The office and the field need different information. Roles decide what each person sees, and screens are built around the task in front of them.",
      },
      {
        title: "Build with the people using it",
        body: "BuildX was developed alongside a working trade business. Daily use decides what gets built next.",
      },
    ],
    impact: [
      "CRM and project management in one place",
      "Scheduling and dispatch",
      "Invoicing and operational reporting",
      "Role-based access for office and field teams",
    ],
    takeaway:
      "Business software earns its keep when it follows the job. Most stacks follow the boundaries between subscriptions.",
    serviceIds: ["custom-software", "operations"],
  },
  {
    slug: "metal-caddie-fabrication-operations",
    projectId: "metal-caddie",
    title: "Running a metal shop from quote to payment.",
    client: "Metal Caddie",
    industry: "Metal fabrication",
    kind: "Client build",
    summary:
      "An operations app for a metal fabrication shop that keeps selling, building, and billing in one place, built on the same platform as BuildX.",
    problem:
      "A fabrication shop sells from quotes and estimates, builds from sheet stock it has to track and reorder, and bills job by job. When each of those lives in a different tool, the same job gets typed in three times and nobody can see where it stands without asking around.",
    approach:
      "We took the platform behind BuildX and shaped it around a fabrication shop. The home screen is grouped the way the work moves: sell, build, bill. Each group opens the tools that stage needs, and the open-job count, pipeline, and overdue receivables sit at the top of the same screen.",
    decisions: [
      {
        title: "Organize by the stage of the job",
        body: "Leads, quote requests, estimates, and sales orders sit together. So do scanning, inventory, purchasing, and delivery. Billing has its own group. People find a tool by asking where the job is.",
      },
      {
        title: "Build the shop’s own math in",
        body: "A sheet calculator and sheet inventory are part of the app. Material is what a fabrication quote turns on, so it doesn’t live in a side spreadsheet.",
      },
      {
        title: "Give each role its own starting point",
        body: "The owner, the front office, finance, marketing, and outside sales each get a dashboard for their part of the business, all reading from the same jobs.",
      },
    ],
    impact: [
      "Leads, quote requests, estimates, and sales orders",
      "Sheet calculator and sheet inventory",
      "Purchase orders, receiving, and delivery scheduling",
      "Invoices, payments, and overdue receivables",
    ],
    takeaway:
      "A platform built for one trade can be reshaped for another when the screens follow that trade’s work. The fabrication version shares its foundation with BuildX and little of its vocabulary.",
    serviceIds: ["custom-software", "automation"],
  },
  {
    slug: "cougar-companies-digital-transformation",
    projectId: "cougar-companies",
    title: "A website that works for a construction company.",
    client: "Cougar Companies",
    industry: "Heavy civil construction",
    kind: "Client build",
    summary:
      "A website and connected tools for a Southwest Florida construction company: project showcases, a digital plan room, a careers portal, and a CRM.",
    problem:
      "A construction company builds its reputation in the field. The website has to carry that reputation to owners, project partners, and people looking for work. Cougar Companies needed a site that shows what the company can do and gives each of those audiences something useful to do next.",
    approach:
      "We built the site around project showcases and plain service information. A digital plan room gives bidders access to bid documents. A career portal gives applicants a place to start. A CRM connects what happens on the site to the follow-up inside the business.",
    decisions: [
      {
        title: "Let the projects tell the story",
        body: "Project showcases give a prospective partner something concrete: the work itself.",
      },
      {
        title: "Design for several audiences",
        body: "Business development, bidding, and recruiting are different jobs. Each gets its own clear route through the site.",
      },
      {
        title: "Connect the front door to operations",
        body: "The system includes tools for managing inquiries and project information, so the work continues past the public pages.",
      },
    ],
    impact: [
      "Website and brand presentation",
      "Construction project showcases",
      "Digital plan room",
      "Career portal and connected CRM",
    ],
    takeaway:
      "A construction website earns its place when people can do business through it, on top of reading about the company.",
    serviceIds: ["brand-digital", "custom-software"],
  },
  {
    slug: "seegarsone-custom-crm",
    projectId: "seegarsone",
    title: "Building a CRM around the fence business.",
    client: "SeegarsONE",
    industry: "Fencing & construction",
    kind: "Client build",
    summary:
      "A custom CRM for a multi-location fence company, built around its customer records, field notes, and proposal process.",
    problem:
      "A legacy CRM holds years of business knowledge, and it gets harder to change every year. Nobody wants to touch it. SeegarsONE is a modern system built to fit how a fence company works, including field information, proposals, and coordination across locations.",
    approach:
      "We designed the application around the company’s own workflow instead of a generic sales pipeline. Customer information, OCR-assisted field-note processing, proposal and estimating tools, and role-based access all live in one CRM.",
    decisions: [
      {
        title: "Start with the existing workflow",
        body: "The scope follows what the fence business needs to record, including field measurements and the steps that go into a proposal.",
      },
      {
        title: "Treat old records as part of the product",
        body: "Legacy records and the relationships between them matter to the people who will use the new system. Migration planning belongs in the project from the start.",
      },
      {
        title: "Support multiple locations",
        body: "Location context and permissions keep responsibilities separate while the business stays connected.",
      },
    ],
    impact: [
      "CRM workflows built for the fence industry",
      "OCR-assisted field-note processing",
      "Proposal and estimating tools",
      "Multi-location roles and access",
    ],
    takeaway:
      "Replacing a CRM is a workflow and data project as much as a software project.",
    serviceIds: ["custom-software", "automation"],
  },
  {
    slug: "caso-comply-ada-deadline",
    projectId: "caso-comply",
    title: "Putting document accessibility work in one workflow.",
    client: "CASO Comply",
    industry: "Document accessibility",
    kind: "Product collaboration",
    summary:
      "CASO Comply combines document scanning, PDF processing, and AI-assisted remediation in one accessibility workflow, with review built in.",
    problem:
      "Organizations with large PDF collections need to find the accessibility problems in them and organize the work of fixing them. Documents vary widely in structure and complexity, so the review process has to be consistent even when the documents are not.",
    approach:
      "CASO Comply scans documents, processes PDF structure, and uses AI to assist with remediation. It works on the parts of a document that matter to assistive technology: tags, reading order, alternative text, and metadata. The automation does the processing. It does not replace document-specific validation or expert review.",
    decisions: [
      {
        title: "Start with visibility",
        body: "Scanning shows an organization which documents it has and which issues need attention.",
      },
      {
        title: "Work on document structure",
        body: "Remediation targets what determines how assistive technology reads a PDF, including reading order and tagging.",
      },
      {
        title: "Keep validation in the process",
        body: "Automated output still has to be checked against the document’s content and the requirements that apply to it. The product assists accessibility work. It is not a guarantee of legal compliance.",
      },
    ],
    impact: [
      "Document scanning",
      "PDF structure processing",
      "AI-assisted remediation",
      "Human review built into the workflow",
    ],
    takeaway:
      "Automation can organize and process the document work. Accessibility quality still depends on validating the result.",
    serviceIds: ["ai-integration", "custom-software"],
  },
  {
    slug: "hoa-hunter-database",
    projectId: "hoa-hunter",
    title: "Association research and outreach in one place.",
    client: "HOA Hunter",
    industry: "Association services",
    kind: "Our product",
    summary:
      "HOA Hunter puts Florida association research, board-contact records, and outreach tools in one searchable product.",
    problem:
      "A business that serves associations has to find the right ones and work out who to contact. That usually means several research sources, a spreadsheet, and a separate outreach tool, with context lost at every copy and paste.",
    approach:
      "HOA Hunter holds association and board-contact information in a searchable platform with location-based filters and built-in outreach. Research and follow-up run on the same records, so the context stays attached.",
    decisions: [
      {
        title: "Search around the service area",
        body: "Location and association filters keep the research relevant to where a business works.",
      },
      {
        title: "Keep research and follow-up connected",
        body: "Outreach starts from the record you researched. Nothing gets copied into another list.",
      },
      {
        title: "Build for an industry we know",
        body: "We have worked with associations and roofing businesses. That experience set the product’s structure and priorities.",
      },
    ],
    impact: [
      "Association and board-contact research",
      "Location-based search and filtering",
      "Built-in outreach tools",
      "One workspace for research and follow-up",
    ],
    takeaway:
      "The opportunity was joining two halves of a familiar job: finding the right organizations, then following up with context.",
    serviceIds: ["custom-software", "automation"],
  },
  {
    slug: "hoa-cloud-compliance",
    projectId: "hoa-cloud",
    title: "One workspace for an association board.",
    client: "HOA Cloud",
    industry: "Association management",
    kind: "Our product",
    summary:
      "HOA Cloud puts an association’s documents, notices, reminders, and administrative work in one shared platform for the board.",
    problem:
      "Volunteer boards run an association around the rest of their lives. Important documents, recurring tasks, and resident communications end up scattered across inboxes and individual board members’ files.",
    approach:
      "HOA Cloud organizes an association’s documents and administrative work in one application. Each association gets its own workspace and access. The product includes AI-assisted document analysis, reminders, and notice workflows. It handles administrative work and is not a substitute for professional advice.",
    decisions: [
      {
        title: "Give each association its own workspace",
        body: "A multi-tenant structure keeps each association’s information and access controls separate inside a shared application.",
      },
      {
        title: "Make recurring work visible",
        body: "Reminders and notice workflows turn recurring responsibilities into items someone can track.",
      },
      {
        title: "Make documents easier to work with",
        body: "Document organization and AI-assisted analysis help board members find what they need, with the source document kept for review.",
      },
    ],
    impact: [
      "A separate workspace for each association",
      "Document management with AI-assisted analysis",
      "Reminders and notice workflows",
      "Board management tools",
    ],
    takeaway:
      "Good association software cuts the effort it takes to find information and keep routine responsibilities moving.",
    serviceIds: ["custom-software", "operations"],
  },
];
export type CaseStudy = (typeof caseStudies)[number];
export const getCaseStudyBySlug = (slug: string) =>
  caseStudies.find((s) => s.slug === slug);
export const getCaseStudyByProjectId = (id: string) =>
  caseStudies.find((s) => s.projectId === id);
