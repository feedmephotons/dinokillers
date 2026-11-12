export interface FAQItem {
  question: string;
  answer: string;
}
export const faqItems: FAQItem[] = [
  {
    question: "What kinds of businesses do you work with?",
    answer:
      "Operations-heavy ones: construction, roofing, fabrication, association management, document processing, and other service businesses. The common thread is a tool the business has outgrown, like a master spreadsheet, a CRM everyone works around, or paperwork that gets retyped by hand.",
  },
  {
    question: "Do we need custom software, or could our existing tools work?",
    answer:
      "We figure that out in the first conversation. We look at the workflow and the tools you already pay for. Sometimes better configuration or one integration fixes it, and we will say so. Custom software makes sense when your process is specific enough that no off-the-shelf tool fits it.",
  },
  {
    question: "How do you scope a project?",
    answer:
      "We start with the people who will use the system, the tasks they need to get done, and the information involved. From there we agree on a first release, the deliverables, the dependencies, and what waits for a later phase.",
  },
  {
    question: "How long will the project take?",
    answer:
      "It depends on scope, integrations, how ready your content is, and how much data has to move. We go through those before we propose a schedule. A focused tool or a website is one kind of plan. A platform with several user roles is another.",
  },
  {
    question: "What does a project cost?",
    answer:
      "We price the agreed scope once we understand the problem and the work involved. Tell us your budget limits in the first conversation. They help us shape a first phase that is worth building. Plan for hosting, third-party services, and ongoing support alongside the initial build.",
  },
  {
    question: "Can you connect with our current software?",
    answer:
      "Usually, and we check before we promise. We look at the available APIs, data exports, permissions, and limits before committing to an integration. Your existing systems and historical data are part of the plan from day one. Old data is where projects go extinct when it gets left for the end.",
  },
  {
    question: "How do you approach AI in a business system?",
    answer:
      "We start with one specific task and real examples of it. The workflow has to make clear what the AI produces, who reviews it, and what happens when an output is missing or wrong. We also look at what information the AI can access and what it will cost to run.",
  },
  {
    question: "What happens after launch?",
    answer:
      "Handover, training, maintenance, and support are defined in the project scope, so nobody is guessing later. Before launch we agree on who maintains the application or website and how future improvements get prioritized.",
  },
  {
    question: "How do we get started?",
    answer:
      "Tell us about your business, the problem you want solved, the tools you use now, and any timing or budget limits. The contact page helps you put together a project email, or you can write to hello@dinokillers.com directly.",
  },
];
