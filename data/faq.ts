export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: 'How long does a typical project take?',
    answer: "It depends on scope, but most projects go from kickoff to launch in 4-12 weeks. A custom CRM or internal tool is usually on the shorter end. A full platform with multiple user types and integrations takes longer. We'll give you a realistic timeline before we start — no bait and switch."
  },
  {
    question: 'What does it cost to work with you?',
    answer: "Projects typically range from $10K-$75K depending on complexity. We scope everything upfront so there are no surprises. We'd rather lose a deal by being honest about cost than win one by lowballing and delivering less."
  },
  {
    question: 'Do you only work with construction and roofing companies?',
    answer: "No — that's where we started, but we've built solutions for HOA management, marketing agencies, fabrication shops, insurance, and more. If your business runs on processes that software could improve, we can probably help."
  },
  {
    question: 'Can you work with our existing systems?',
    answer: "Absolutely. Most of our projects integrate with tools you're already using — QuickBooks, Google Workspace, existing databases, whatever. We build around your reality, not in a vacuum."
  },
  {
    question: "What's your tech stack?",
    answer: "We build modern web applications using React, Next.js, and cloud infrastructure like Supabase and Vercel. But honestly, the tech stack matters less than the result. We pick the best tools for your specific problem."
  },
  {
    question: 'Do you offer ongoing support after launch?',
    answer: "Yes. Every project includes a support period after launch, and we offer ongoing maintenance plans. The software we build is designed to evolve with your business — not just work on day one."
  },
  {
    question: 'How is Dino Killers different from a regular development agency?',
    answer: "Most agencies are staffed with developers who build what you spec. We're business operators first — we run companies in roofing, real estate, and marketing. We understand your problems because we've had them ourselves. That means we build solutions that actually fit how businesses work, not just what looks good in a demo."
  }
];
