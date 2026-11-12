export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  updated?: string;
  readTime: string;
  author: string;
  category: string;
  serviceId: string;
  content: string;
}
export const blogPosts: BlogPost[] = [
  {
    slug: "off-the-shelf-software-killing-your-business",
    title: "Custom software or off-the-shelf? Start with the workflow.",
    excerpt:
      "A practical way to decide whether to configure what you have, connect your tools, or build something purpose-made.",
    date: "2026-03-01",
    updated: "2026-09-12",
    readTime: "4 min read",
    author: "Winston Fowlkes",
    category: "Software strategy",
    serviceId: "custom-software",
    content:
      "## The decision starts with the job\nBefore choosing a platform or commissioning software, write down the work that needs to happen. Pick one real customer, job, or document and follow it from start to finish. Who touches it? Where does information get copied? Which decisions depend on an email, a spreadsheet, or one person’s memory?\nThis gives you something more useful than a feature wish list: a picture of the workflow. A tool can have a long list of capabilities and still leave the most important handoff unresolved.\n## Look for the smallest useful intervention\nThere are usually three options. You can configure an existing product, connect the tools you already use, or build a custom application. Each can be the right choice.\n**Configure** when your process fits a product reasonably well and the friction comes from setup, permissions, reporting, or training.\n**Connect** when the individual tools work but information does not move between them. A focused integration can solve a recurring problem without replacing everything.\n**Build** when a distinctive workflow is central to the business, existing tools repeatedly force compromises, or the product itself is what you are creating.\n## Count the cost of the whole workflow\nSubscription prices are visible. Repeated entry, reconciliation, and correction are easier to overlook. Ask the people doing the work to identify those tasks and estimate their frequency.\nUse estimates as a starting point, then measure a representative sample. Record the task, time spent, rework, and the conditions that make it harder. Avoid turning a rough guess into an exact return-on-investment claim.\nA custom system also has ongoing costs: hosting, third-party services, maintenance, support, and changes as the business evolves. Compare the complete ownership picture on both sides.\n## Define a first release that can stand on its own\nA first release should complete one useful workflow. It might take a lead from inquiry to qualified opportunity, or turn an approved document into a scheduled task.\nDecide what belongs in that release and what can wait. Include the unglamorous work: importing data, handling exceptions, assigning permissions, and making the tool understandable to its users.\n## Make the decision with the team\nThe person buying the software and the person using it every day may see different problems. Bring both into the conversation. Walk through ordinary tasks and difficult examples, then agree on what a better result would look like.\nCustom software is strongest when it has a clear job, a committed owner, and a feedback loop. Start there. The technology follows.",
  },
  {
    slug: "ai-in-construction-real-vs-hype",
    title: "Where AI fits in a construction workflow.",
    excerpt:
      "Start with documents, meeting notes, and repeatable administrative tasks. Define the review step before you automate the handoff.",
    date: "2026-02-15",
    updated: "2026-09-12",
    readTime: "4 min read",
    author: "Winston Fowlkes",
    category: "AI & operations",
    serviceId: "ai-integration",
    content:
      "## Start with one specific task\nAn AI project is easier to evaluate when the task is concrete. “Help us use AI” is broad. “Extract the job reference, requested date, and line items from these purchase orders for review” is a task you can test.\nConstruction and trade businesses produce a steady stream of unstructured information: field notes, meeting discussions, supplier documents, and email threads. These are useful places to explore assistance, provided the output has a clear destination.\n## Documents need a review path\nA document workflow can take an incoming file, extract selected fields, and present them beside the source. The reviewer needs to see enough context to spot errors and correct them before the information moves into another system.\nTest ordinary documents and awkward ones. Include scans, missing fields, unfamiliar layouts, and ambiguous references. Decide what happens when the system cannot identify a value.\nThe useful question is not whether AI can produce an answer. It is whether the surrounding workflow lets the team trust, inspect, and correct that answer.\n## Meeting notes become useful when they connect to the work\nA transcript is a record, but a schedule needs decisions, owners, and dates. An AI-assisted meeting workflow can propose action items and associate them with the relevant project.\nKeep a human review step before important assignments or schedule changes take effect. A conversation may include a suggestion, a question, or a tentative date; those should not all become confirmed instructions.\nThe design problem is the handoff from discussion to organized follow-up.\n## Choose success criteria before the pilot\nPick a representative set of examples. Compare the assisted workflow with the current one using review time, corrections required, and how often someone has to start over.\nTrack ongoing usage costs and the work needed to maintain the integration. A pilot that looks promising in isolation may create extra effort elsewhere in the process.\n## Keep the operating team in the loop\nAI assistance works best when the people using it know what it does and where its limits are. Give them a straightforward way to inspect the source, change the result, and send difficult cases to a person.\nStart with a narrow task, evaluate it with real examples, and expand only when the workflow earns it. That is a more practical starting point than trying to automate an entire operation at once.",
  },
  {
    slug: "custom-crm-advantage",
    title: "What to map before building a custom CRM.",
    excerpt:
      "The questions about people, data, and handoffs that matter more than a long list of CRM features.",
    date: "2026-01-28",
    updated: "2026-09-12",
    readTime: "4 min read",
    author: "Brance Wages",
    category: "CRM planning",
    serviceId: "automation",
    content:
      "## Start with the customer journey\nA CRM is often described as a database of leads and customers. In practice, it is also a record of who needs to do what next.\nTrace a recent customer from the first inquiry to the completed work. Identify the information captured, the decisions made, and the people responsible at each stage. Pay attention to the moments when one team hands off to another.\nA generic pipeline can miss important industry details. A trade business may need field measurements, location context, proposal revisions, and project scheduling to remain connected to the customer record.\n## Decide what each record represents\nA company, a person, a property, a job, and an opportunity are different things. Confusing them creates duplicates and makes reporting harder later.\nWrite down how those records relate. One customer might own several properties. One job might involve several contacts. A company might have multiple locations with different access needs.\nThese relationships shape the application more deeply than the names of the screens.\n## Make responsibilities explicit\nFor every stage, identify who owns the next action. Define which information is required to move forward and which exceptions need a decision.\nPermissions belong in the same conversation. A field user, a salesperson, and an administrator may need different access to the same project. Decide what each role can view and change.\n## Plan migration before launch week\nExisting records are part of the operating history of the business. Before choosing a transition date, understand what needs to move and how it will be checked.\nLook for duplicates, missing values, attachments, notes, and relationships that may be encoded in unexpected places. Use sample imports to test the mapping, then define a reconciliation process.\nA migration plan should also explain how the team handles new work during the transition. That decision depends on the systems and the business; it should not be left until the final days.\n## Define a useful first release\nStart with a complete customer workflow rather than a collection of disconnected features. Agree on the core records, the important handoffs, the first reports, and the integrations required to do the work.\nThe SeegarsONE project illustrates why industry context matters: field information, proposal tools, and multi-location workflows belong in the CRM conversation from the beginning.\nBring those details to the first discussion. They are the raw material for a system that fits the business.",
  },
  {
    slug: "website-content-before-design",
    title: "Your website needs a clearer story before it needs more pages.",
    excerpt:
      "How to plan service pages and case studies around the decisions your customers actually need to make.",
    date: "2026-09-12",
    readTime: "3 min read",
    author: "Winston Fowlkes",
    category: "Web & content",
    serviceId: "brand-digital",
    content:
      "## Give the visitor a way to recognize themselves\nA visitor should be able to tell what you do, who you do it for, and why your work is relevant. Start with a specific business problem or a recognizable need.\nThe homepage can introduce the range of your work. A service page has a narrower job: help someone understand a particular offering, assess whether it fits, and see what working together might involve.\n## Show the thinking behind the work\nA project name and an attractive screenshot introduce the work. A case study explains it.\nDescribe the original challenge, the constraints, and the decisions that shaped the solution. Explain what was built in terms a prospective customer can connect to their own operation.\nMeasured outcomes can make that story stronger when the evidence is available. Record the source, time period, and method behind a number. If you cannot support it, explain the delivered capability instead.\n## Build a useful route through the site\nConnect a service page to a relevant project. Link the project to its case study. Give each a clear next step for a visitor with a similar problem.\nA small set of useful pages is easier to maintain than a large collection that repeats the same claims. Add a page when it answers a distinct question or helps someone make a decision.\n## Make the inquiry specific\nA good contact form helps someone explain what they need. Ask for the problem, the current process, and any meaningful constraints. Keep the first step manageable.\nBe clear about what happens when the form is used. A message should only be described as sent when it has actually been delivered to the receiving system.\n## Keep the content connected to the business\nAs projects evolve, review screenshots, capabilities, team information, and contact details. An accurate, understandable website is a stronger starting point for design and search than a collection of impressive but unverified promises.",
  },
];
