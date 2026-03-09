export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'off-the-shelf-software-killing-your-business',
    title: 'Why Off-the-Shelf Software Is Killing Your Business',
    excerpt: "You're paying for 200 features and using 12. Meanwhile, the 3 things you actually need don't exist. Sound familiar?",
    date: '2026-03-01',
    readTime: '4 min read',
    author: 'Winston Fowlkes',
    content: `Every business eventually hits the same wall. You sign up for the "industry-leading" software, spend weeks getting your team trained on it, and then realize it doesn't do the one thing you actually needed it for.\n\nSo you build a workaround. Then another. Then you hire someone whose entire job is managing the workarounds.\n\nThis is the hidden cost of off-the-shelf software. It's not the monthly subscription — it's the thousands of dollars in wasted time your team spends fighting a tool that wasn't built for how you work.\n\n**The real math:**\n\nMost businesses we work with are spending 10-20 hours per week on manual processes that exist only because their software can't handle their actual workflow. At $30-50/hour, that's $15,000-$50,000 per year in lost productivity — for a single team.\n\n**The alternative:**\n\nCustom software costs more upfront, but it does exactly what you need. No workarounds. No "we'll put in a feature request." No training your team to think like the software instead of the other way around.\n\nWe've built custom platforms for roofing companies, HOA management, metal fabrication shops, and marketing agencies. Every single one replaced a stack of 3-5 tools with one system that actually fit.\n\n**The question isn't "can we afford custom software?" It's "can we afford to keep paying for software that doesn't work?"**`
  },
  {
    slug: 'ai-in-construction-real-vs-hype',
    title: "AI in Construction: What's Real and What's Hype",
    excerpt: "Everyone's talking about AI in construction. Here's what's actually working right now versus what's still a sales pitch.",
    date: '2026-02-15',
    readTime: '5 min read',
    author: 'Winston Fowlkes',
    content: `If you're in construction or the trades, you've probably been pitched "AI-powered" everything by now. AI scheduling. AI estimating. AI project management. Most of it is marketing slapped on basic automation.\n\nHere's what's actually delivering results right now:\n\n**What's real:**\n\n**Document processing.** AI can read a PO, extract the relevant info, and put it in your system in seconds. We built this for a metal fabrication company — their admin went from 30 minutes of data entry per meeting to 2 minutes of review.\n\n**Meeting intelligence.** Record your site meetings, and AI pulls out action items, deadlines, and assignments automatically. No more "wait, who was supposed to order that?"\n\n**Lead qualification.** AI can look at incoming leads and tell you which ones are worth your time based on patterns in your past wins. Stop chasing bad leads.\n\n**What's hype (for now):**\n\n**AI estimating.** It's getting better, but it's not replacing your estimator anytime soon. Too many variables that require boots-on-the-ground knowledge.\n\n**Fully autonomous scheduling.** AI can suggest schedules, but construction has too many real-world variables (weather, permits, material delays) for full automation.\n\n**The bottom line:** AI works best when it handles the boring stuff your team hates doing. It's not replacing skilled workers — it's giving them back the hours they spend on paperwork.`
  },
  {
    slug: 'custom-crm-advantage',
    title: 'The Custom CRM Advantage',
    excerpt: "Salesforce has 3,000+ features. You need about 15. Here's why building your own might be the smartest move you make this year.",
    date: '2026-01-28',
    readTime: '3 min read',
    author: 'Brance Wages',
    content: `I've used Salesforce, HubSpot, Zoho, and about six other CRMs. They all have the same problem: they were built for everyone, which means they were built for no one.\n\nWhen we started Roof Wars, I needed a CRM that understood roofing. That meant tracking insurance claims alongside leads, managing crew schedules, and connecting to our specific vendors. No off-the-shelf CRM does that without a rats nest of integrations and workarounds.\n\n**What a custom CRM gives you:**\n\n**It matches your process.** Not the other way around. Your team doesn't need to learn a new way of working — the software adapts to what already works.\n\n**It grows with you.** Need a new feature? We build it. You're not waiting on a product roadmap or voting on a feature request forum.\n\n**It connects to everything.** Your accounting software, your scheduling tools, your email — all in one place, talking to each other without duct tape.\n\n**It costs less than you think.** The price of a custom CRM has dropped dramatically. Between modern frameworks and AI-assisted development, we can build in weeks what used to take months.\n\n**The question to ask yourself:** How much time does your team spend working around your current CRM? If it's more than a few hours a week, you're already paying for a custom one — you're just not getting it.`
  }
];
