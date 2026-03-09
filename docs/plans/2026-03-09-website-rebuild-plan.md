# Dino Killers Website Rebuild - Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rebuild the Dino Killers single-page site into a multi-page agency website that speaks to business owners, not developers. Keep the dark/bold visual identity, kill the jargon, add About/Services/Portfolio/Case Studies/Blog/FAQ/Contact pages.

**Architecture:** React + Vite + TypeScript + Tailwind (CDN). React Router for multi-page navigation. Remove Gemini API dependency (no chatbot, no GenImage). All real images. Scroll-triggered animations via Intersection Observer (no additional libraries).

**Tech Stack:** React 19, React Router 7, Vite 6, TypeScript, Tailwind CSS (CDN), Lucide React icons

**Design Doc:** `docs/plans/2026-03-09-website-rebuild-design.md`

---

## Task 1: Clean Up — Remove Chatbot, GenImage, Gemini Dependencies

Remove the AI chatbot and image generation system. The site will use real images only.

**Files:**
- Delete: `components/AgentChat.tsx`
- Delete: `components/GenImage.tsx`
- Delete: `services/geminiService.ts`
- Delete: `.env.local`
- Modify: `App.tsx` — Remove AgentChat import and usage
- Modify: `components/Hero.tsx` — Remove GenImage, use static background
- Modify: `components/Mission.tsx` — Remove GenImage import
- Modify: `components/Portfolio.tsx` — Remove GenImage import/fallback
- Modify: `components/ProjectDetail.tsx` — Remove GenImage import/fallback
- Modify: `index.html` — Remove @google/genai from importmap
- Modify: `package.json` — Remove @google/genai dependency

**Step 1: Delete chatbot and AI files**

```bash
rm components/AgentChat.tsx components/GenImage.tsx services/geminiService.ts .env.local
```

**Step 2: Remove AgentChat from App.tsx**

Remove the AgentChat import (line 8) and `<AgentChat />` usage (line 31). Keep the rest of the layout intact for now.

**Step 3: Remove GenImage from Hero.tsx**

Replace the GenImage background with a CSS gradient mesh background. Remove the import. Replace the AI background div with:

```tsx
{/* Gradient Mesh Background */}
<div className="absolute inset-0 z-0 bg-brand-black">
  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-cyan/10"></div>
  <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px]"></div>
  <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-cyan/10 rounded-full blur-[120px]"></div>
</div>
```

**Step 4: Remove GenImage from Mission.tsx, Portfolio.tsx, ProjectDetail.tsx**

- Mission.tsx: Replace GenImage with a static placeholder div or remove the image section entirely (will be rebuilt in Task 5)
- Portfolio.tsx: Remove the GenImage fallback in the ternary — just use the `project.image` branch, remove the else
- ProjectDetail.tsx: Same — remove GenImage fallback, keep only the `project.image` branch

**Step 5: Remove @google/genai from index.html importmap and package.json**

In `index.html`, remove the `"@google/genai"` line from the importmap.
In `package.json`, remove `"@google/genai"` from dependencies.

**Step 6: Verify the app builds**

```bash
cd "/home/wfowlkes/Claude Main Projects/Dino Killers" && npm run build
```

Expected: Build succeeds with no errors.

**Step 7: Commit**

```bash
git add -A && git commit -m "chore: remove AI chatbot, GenImage, and Gemini dependencies"
```

---

## Task 2: Update Data Layer — Projects, Services, Team, Blog, FAQ

Create/update all data files that power the site content. This is the foundation everything else renders from.

**Files:**
- Modify: `data/projects.ts` — Add `category` field ("product" | "client"), update descriptions to be impact-focused, remove dev jargon
- Create: `data/services.ts` — 5 service categories organized by business pain
- Create: `data/team.ts` — Winston and Brance bios
- Create: `data/blog.ts` — 3 seed blog posts (title, excerpt, slug, date, content)
- Create: `data/faq.ts` — 5-7 FAQ items
- Create: `data/caseStudies.ts` — 2-3 case study entries linking to portfolio projects

**Step 1: Update `data/projects.ts`**

Add a `category` field to the Project interface: `category: 'product' | 'client'`

Update each project:
- Brandeezy: `category: 'product'` — rewrite tagline/description to be impact-focused
- HOA Cloud: `category: 'product'` — co-founded by Brance
- HOA Hunter: `category: 'product'` — co-founded by Brance
- Metalcrafters: `category: 'client'` — built for a client
- BuildX: `category: 'client'` — built for trade businesses
- HailTruth: `category: 'product'`

Remove `themePrompt` field (no longer needed). Remove `developmentProgress` (don't show % complete to prospects). Remove `competitiveAdvantage` (internal info). Add `impactStatement: string` — one sentence of what changed for the user/client.

New interface:
```typescript
export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: 'product' | 'client';
  uvp: string;
  targetMarket: string;
  techStack: string[];
  highlights: string[];
  impactStatement: string;
  url?: string;
  image?: string;
  industry: string;
}
```

**Step 2: Create `data/team.ts`**

```typescript
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  location: string;
  bio: string;
  background: string[];
}

export const team: TeamMember[] = [
  {
    id: 'winston',
    name: 'Winston Fowlkes',
    role: 'Co-Founder',
    image: '/images/winston-headshot.png',
    location: 'Southwest Florida',
    bio: "Originally from Danville, Virginia, Winston moved to Florida in 2011 and built a career spanning marketing, software development, and professional photography and videography. When AI changed the game, he didn't just adopt it — he went all in, multiplying his output across every discipline. His broad skill set found a natural home in construction and roofing, where he's worked with major companies across the state. That cross-industry experience is what makes Dino Killers different — Winston sees problems that specialists miss.",
    background: [
      'Marketing Contractor & Consultant',
      'Software Developer',
      'Professional Photographer & Videographer',
      'AI-Augmented Workflow Pioneer',
      'Construction & Roofing Industry Specialist'
    ]
  },
  {
    id: 'brance',
    name: 'Brance Wages',
    role: 'Co-Founder',
    image: '/images/brance-headshot.png',
    location: 'Naples, FL & Dallas, TX',
    bio: "Brance comes from the real estate world but never stayed in one lane. He founded GeoAI, a geofencing startup that was gaining traction before Covid shut it down — proof he's been at the intersection of tech and business long before it was trendy. Today he runs Roof Wars, a commercial roofing operation spanning Naples and Dallas, and works directly with condo associations across Southwest Florida. That hands-on experience led him to co-found HOA Hunter and HOA Cloud, two platforms that are reshaping how the HOA industry operates.",
    background: [
      'Real Estate Background',
      'Founded GeoAI (Geofencing Startup)',
      'Owner, Roof Wars — Commercial Roofing',
      'Co-Founder, HOA Hunter & HOA Cloud',
      'Direct Condo Association Relationships'
    ]
  }
];
```

**Step 3: Create `data/services.ts`**

```typescript
export interface Service {
  id: string;
  pain: string;
  title: string;
  description: string;
  examples: string[];
  icon: string; // Lucide icon name
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
```

**Step 4: Create `data/blog.ts`**

```typescript
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  content: string; // markdown-ish content for now
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
    content: `Every business eventually hits the same wall. You sign up for the "industry-leading" software, spend weeks getting your team trained on it, and then realize it doesn't do the one thing you actually needed it for.

So you build a workaround. Then another. Then you hire someone whose entire job is managing the workarounds.

This is the hidden cost of off-the-shelf software. It's not the monthly subscription — it's the thousands of dollars in wasted time your team spends fighting a tool that wasn't built for how you work.

**The real math:**

Most businesses we work with are spending 10-20 hours per week on manual processes that exist only because their software can't handle their actual workflow. At $30-50/hour, that's $15,000-$50,000 per year in lost productivity — for a single team.

**The alternative:**

Custom software costs more upfront, but it does exactly what you need. No workarounds. No "we'll put in a feature request." No training your team to think like the software instead of the other way around.

We've built custom platforms for roofing companies, HOA management, metal fabrication shops, and marketing agencies. Every single one replaced a stack of 3-5 tools with one system that actually fit.

**The question isn't "can we afford custom software?" It's "can we afford to keep paying for software that doesn't work?"**`
  },
  {
    slug: 'ai-in-construction-real-vs-hype',
    title: "AI in Construction: What's Real and What's Hype",
    excerpt: "Everyone's talking about AI in construction. Here's what's actually working right now versus what's still a sales pitch.",
    date: '2026-02-15',
    readTime: '5 min read',
    author: 'Winston Fowlkes',
    content: `If you're in construction or the trades, you've probably been pitched "AI-powered" everything by now. AI scheduling. AI estimating. AI project management. Most of it is marketing slapped on basic automation.

Here's what's actually delivering results right now:

**What's real:**

**Document processing.** AI can read a PO, extract the relevant info, and put it in your system in seconds. We built this for a metal fabrication company — their admin went from 30 minutes of data entry per meeting to 2 minutes of review.

**Meeting intelligence.** Record your site meetings, and AI pulls out action items, deadlines, and assignments automatically. No more "wait, who was supposed to order that?"

**Lead qualification.** AI can look at incoming leads and tell you which ones are worth your time based on patterns in your past wins. Stop chasing bad leads.

**What's hype (for now):**

**AI estimating.** It's getting better, but it's not replacing your estimator anytime soon. Too many variables that require boots-on-the-ground knowledge.

**Fully autonomous scheduling.** AI can suggest schedules, but construction has too many real-world variables (weather, permits, material delays) for full automation.

**The bottom line:** AI works best when it handles the boring stuff your team hates doing. It's not replacing skilled workers — it's giving them back the hours they spend on paperwork.`
  },
  {
    slug: 'custom-crm-advantage',
    title: 'The Custom CRM Advantage',
    excerpt: "Salesforce has 3,000+ features. You need about 15. Here's why building your own might be the smartest move you make this year.",
    date: '2026-01-28',
    readTime: '3 min read',
    author: 'Brance Wages',
    content: `I've used Salesforce, HubSpot, Zoho, and about six other CRMs. They all have the same problem: they were built for everyone, which means they were built for no one.

When we started Roof Wars, I needed a CRM that understood roofing. That meant tracking insurance claims alongside leads, managing crew schedules, and connecting to our specific vendors. No off-the-shelf CRM does that without a rats nest of integrations and workarounds.

**What a custom CRM gives you:**

**It matches your process.** Not the other way around. Your team doesn't need to learn a new way of working — the software adapts to what already works.

**It grows with you.** Need a new feature? We build it. You're not waiting on a product roadmap or voting on a feature request forum.

**It connects to everything.** Your accounting software, your scheduling tools, your email — all in one place, talking to each other without duct tape.

**It costs less than you think.** The price of a custom CRM has dropped dramatically. Between modern frameworks and AI-assisted development, we can build in weeks what used to take months.

**The question to ask yourself:** How much time does your team spend working around your current CRM? If it's more than a few hours a week, you're already paying for a custom one — you're just not getting it.`
  }
];
```

**Step 5: Create `data/faq.ts`**

```typescript
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
    answer: "We build modern web applications using React, Next.js, and cloud infrastructure (Supabase, AWS, Vercel). But honestly, the tech stack matters less than the result. We pick the best tools for your specific problem."
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
```

**Step 6: Create `data/caseStudies.ts`**

```typescript
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
    slug: 'hoa-hunter-database',
    projectId: 'hoa-hunter',
    title: 'Building the Largest HOA Board Member Database in Florida',
    client: 'Internal Product',
    industry: 'Property Management & HOA Services',
    problem: "Companies selling services to HOAs — landscapers, roofers, property managers — had no efficient way to find and contact HOA board members. They were driving through neighborhoods, cold-calling management companies, or buying generic business lists that missed the mark entirely.",
    approach: "We built a comprehensive database of over 168,000 verified HOA board members across Florida, paired with multi-channel outreach tools including phone, email, and direct mail. The platform lets service companies search by location, association size, and service needs, then reach out directly from the same tool.",
    impact: [
      '168,969 verified board members in database',
      'Multi-channel outreach from a single platform',
      'Reduced lead acquisition time by over 80%',
      'Used by roofing contractors, landscapers, and property management companies'
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
    slug: 'hoa-cloud-compliance',
    projectId: 'hoa-cloud',
    title: 'Automating Florida HOA Compliance So Board Members Can Sleep at Night',
    client: 'Internal Product (serving FL HOAs)',
    industry: 'HOA & Condo Management',
    problem: "Self-managed HOAs in Florida face a maze of compliance requirements under Statutes 718 and 720. Board members — who are volunteers — were spending hours trying to figure out legal requirements, often getting it wrong and exposing their associations to liability.",
    approach: "We built a multi-tenant platform that automates Florida-specific compliance workflows. AI analyzes governing documents, tracks filing deadlines, and generates required notices. Board members get a simple dashboard instead of a legal textbook.",
    impact: [
      'Automated compliance tracking for FL Statutes 718/720',
      'AI-powered document analysis for governing documents',
      'Reduced board member compliance workload significantly',
      'Multi-tenant architecture serving multiple associations'
    ]
  }
];
```

**Step 7: Commit**

```bash
git add -A && git commit -m "feat: add data layer for team, services, blog, FAQ, and case studies"
```

---

## Task 3: Restructure Routing — Multi-Page Architecture

Convert from single-page scroll to proper multi-page routing with shared layout.

**Files:**
- Modify: `App.tsx` — Add routes for all pages, create layout wrapper
- Create: `components/Layout.tsx` — Shared Navbar + Footer wrapper
- Modify: `components/Navbar.tsx` — Update to use Link for page navigation, remove hash scrolling
- Modify: `components/Footer.tsx` — Update links to use real routes, remove jargon

**Step 1: Create `components/Layout.tsx`**

```tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-purple/30 selection:text-brand-cyan">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
```

**Step 2: Rewrite `App.tsx`**

```tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ProjectDetail from './pages/ProjectDetail';
import CaseStudyPage from './pages/CaseStudyPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

const App: React.FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:id" element={<ProjectDetail />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
};

export default App;
```

**Step 3: Rewrite Navbar for multi-page nav**

Replace hash-based navigation with React Router Links. Navigation items:
- About → `/about`
- Services → `/services`
- Work → `/portfolio`
- Blog → `/blog`
- Contact → `/contact` (replaces "Launch Project" button)

Remove: "Arsenal", "Consult Agent", "Mission" hash links. Replace "Launch Project" with "Get Started" linking to `/contact`.

**Step 4: Rewrite Footer**

Update links to use React Router `<Link>`. Remove jargon ("All fossils reserved", "SYSTEM_STATUS: ONLINE"). Replace with proper footer:
- Company links: About, Services, Portfolio, Blog, FAQ, Contact
- Social links (keep GitHub, Twitter/X, LinkedIn)
- Copyright: "© 2026 Dino Killers. All rights reserved."

**Step 5: Create empty page shells**

Create `pages/` directory with stub components for each page so routing works:

```bash
mkdir -p pages
```

Each page file exports a simple component that renders the page name (will be filled in subsequent tasks):

```tsx
// pages/HomePage.tsx (and similar for each page)
import React from 'react';
const HomePage: React.FC = () => <div className="pt-20">Home</div>;
export default HomePage;
```

Create stubs for: `HomePage.tsx`, `AboutPage.tsx`, `ServicesPage.tsx`, `PortfolioPage.tsx`, `ProjectDetail.tsx`, `CaseStudyPage.tsx`, `BlogPage.tsx`, `BlogPostPage.tsx`, `FAQPage.tsx`, `ContactPage.tsx`

**Step 6: Verify build and routing works**

```bash
npm run build
```

**Step 7: Commit**

```bash
git add -A && git commit -m "feat: restructure to multi-page routing with Layout wrapper"
```

---

## Task 4: Shared UI Components — ScrollReveal, Section, Counter

Build reusable components used across all pages.

**Files:**
- Create: `components/ui/ScrollReveal.tsx` — Intersection Observer wrapper for fade-in animations
- Create: `components/ui/Section.tsx` — Consistent page section wrapper
- Create: `components/ui/Counter.tsx` — Animated number counter
- Create: `components/ui/GradientMesh.tsx` — Reusable gradient mesh background

**Step 1: Create `components/ui/ScrollReveal.tsx`**

Wrapper component that uses IntersectionObserver to add fade-in-up animation when element scrolls into view. Props: `children`, `delay?: number`, `className?: string`.

Uses a ref + useState to track visibility. When visible, applies opacity-100 + translate-y-0 transition. Default state is opacity-0 translate-y-8.

```tsx
import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
```

**Step 2: Create `components/ui/Section.tsx`**

Standard section wrapper with consistent max-width, padding, and optional background variant.

```tsx
import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean; // Alternating bg
}

const Section: React.FC<SectionProps> = ({ children, id, className = '', dark = false }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${dark ? 'bg-brand-dark' : 'bg-brand-black'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
```

**Step 3: Create `components/ui/Counter.tsx`**

Animated number that counts up when scrolled into view. Uses IntersectionObserver + requestAnimationFrame.

```tsx
import React, { useEffect, useRef, useState } from 'react';

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

const Counter: React.FC<CounterProps> = ({ end, suffix = '', prefix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{prefix}{count.toLocaleString()}{suffix}</span>;
};

export default Counter;
```

**Step 4: Create `components/ui/GradientMesh.tsx`**

Reusable background component with animated purple/cyan gradient orbs.

```tsx
import React from 'react';

const GradientMesh: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-purple/8 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-brand-cyan/6 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default GradientMesh;
```

**Step 5: Commit**

```bash
git add -A && git commit -m "feat: add shared UI components — ScrollReveal, Section, Counter, GradientMesh"
```

---

## Task 5: Home Page — Complete Rebuild

Build the new homepage with all sections from the design doc.

**Files:**
- Rewrite: `pages/HomePage.tsx` — Full homepage with Hero, Value Strip, What We Do, Featured Work, CTA
- Delete: `components/Hero.tsx` — Functionality moves into HomePage
- Delete: `components/Mission.tsx` — Replaced by About page
- Delete: `components/Services.tsx` — Replaced by Services page
- Delete: `components/Portfolio.tsx` — Replaced by Portfolio page
- Delete: `components/ContactModal.tsx` — Replaced by Contact page

**Step 1: Delete old section components no longer needed**

```bash
rm components/Hero.tsx components/Mission.tsx components/Services.tsx components/Portfolio.tsx components/ContactModal.tsx components/AgentChat.tsx
```

(Some may already be deleted from Task 1 — that's fine.)

**Step 2: Build `pages/HomePage.tsx`**

Full homepage with these sections:

**Hero Section:**
- Headline: "Your business deserves better than dinosaur tech."
- Subline: "We build the custom tools, AI systems, and digital strategies that bring companies into 2026."
- CTAs: "See Our Work" (Link to /portfolio) + "Let's Talk" (Link to /contact)
- Background: GradientMesh component + subtle grid overlay
- No blobs, no GenImage, no status badges

**Value Strip:**
- 3-4 animated counters in a horizontal row
- "6+ Products Built" | "5+ Industries Served" | "AI-First Since Day One" | "Based in Southwest Florida"
- Each with a Counter component and icon

**What We Do (condensed):**
- Section header: "What We Do" with short subtitle
- 3-4 cards showing top service categories (from services data), each linking to /services
- Pain-point headlines, not technical titles
- ScrollReveal on each card

**Featured Work:**
- Section header: "What We've Built"
- 2-3 hand-picked project cards with screenshots
- Impact statement instead of tech stack preview
- Links to /portfolio/:id
- ScrollReveal stagger

**CTA Banner:**
- Full-width section with gradient background
- "Ready to leave the dinosaur age behind?"
- "Let's Talk" button → /contact

**Step 3: Verify build**

```bash
npm run build
```

**Step 4: Commit**

```bash
git add -A && git commit -m "feat: build new homepage — hero, value strip, featured work, CTA"
```

---

## Task 6: About Page

**Files:**
- Rewrite: `pages/AboutPage.tsx` — Full About page

**Step 1: Build `pages/AboutPage.tsx`**

**Page Hero:**
- "Who We Are" headline
- Short subtitle about Dino Killers

**Origin Story Section:**
- How Winston and Brance met through Roof Wars
- Saw how broken business tech was across industries
- Decided to build the tools they wished existed
- Written in accessible, human language — no corporate speak

**Team Bios Section:**
- Two cards side by side (stacked on mobile)
- Each card: headshot image (large, rounded), name, role, location, bio paragraph, background bullet list
- Pull from `data/team.ts`
- ScrollReveal with stagger

**Philosophy Section:**
- "We don't sell technology. We sell time back, deals closed, and problems solved. The tech is just how we get there."
- Could be a large quote with gradient accent

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: build About page with team bios and origin story"
```

---

## Task 7: Services Page

**Files:**
- Rewrite: `pages/ServicesPage.tsx` — Full Services page

**Step 1: Build `pages/ServicesPage.tsx`**

**Page Hero:**
- "How We Help" headline
- Subtitle: "We solve business problems. The technology is just how we do it."

**Service Sections:**
- Render each service from `data/services.ts`
- Each service is a full-width section alternating background (dark/darker)
- Layout: Pain headline (large, bold) → Description paragraph → Examples list → CTA link to /contact
- Icons from Lucide for each service
- ScrollReveal on each section

**Bottom CTA:**
- "Not sure which of these fits?"
- "Let's figure it out together." → /contact

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: build Services page organized by business pain"
```

---

## Task 8: Portfolio Page

**Files:**
- Rewrite: `pages/PortfolioPage.tsx` — Full Portfolio listing
- Rewrite: `pages/ProjectDetail.tsx` — Updated project detail (rewritten from old component, remove jargon)

**Step 1: Build `pages/PortfolioPage.tsx`**

**Page Hero:**
- "Our Work" headline
- Subtitle about building products and client solutions

**Two Sections:**
- "Our Products" — Filter projects where `category === 'product'`
- "Client Solutions" — Filter projects where `category === 'client'`

**Project Cards:**
- Screenshot, name, industry tag, impact statement
- Hover: lift + shadow
- Click through to `/portfolio/:id`
- No tech stack on cards, no progress bars
- Clean, image-forward design
- ScrollReveal stagger

**Step 2: Rewrite `pages/ProjectDetail.tsx`**

Move from `components/ProjectDetail.tsx` into `pages/`. Rewrite to remove jargon:
- "CLASSIFIED_PROJECT" → remove
- "Mission Profile" → "What We Built"
- "RETURN_TO_BASE" → "Back to Portfolio"
- "ACCESS INTEL" → "Learn More"
- Remove dev progress bar (not in data anymore)
- Remove competitiveAdvantage section (not in data anymore)
- Add impactStatement section prominently
- Add link to case study if one exists for this project
- Clean layout, consistent with rest of site

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: build Portfolio page and rewrite project detail"
```

---

## Task 9: Case Studies Page

**Files:**
- Rewrite: `pages/CaseStudyPage.tsx` — Individual case study view

**Step 1: Build `pages/CaseStudyPage.tsx`**

Route: `/case-studies/:slug`

Layout:
- Hero with project name and industry
- "The Problem" section
- "Our Approach" section
- "The Impact" section with bullet points (potentially with Counter components for numbers)
- Optional quote
- Link to live project if URL exists
- "See More Work" CTA → /portfolio
- ScrollReveal on each section

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: build Case Study detail page"
```

---

## Task 10: Blog Page + Blog Post Page

**Files:**
- Rewrite: `pages/BlogPage.tsx` — Blog listing
- Rewrite: `pages/BlogPostPage.tsx` — Individual blog post

**Step 1: Build `pages/BlogPage.tsx`**

**Page Hero:**
- "Insights" headline
- Subtitle about sharing what we've learned

**Blog Grid:**
- Card grid (2 columns desktop, 1 mobile)
- Each card: title, excerpt, date, read time, author
- Click through to `/blog/:slug`
- ScrollReveal stagger

**Step 2: Build `pages/BlogPostPage.tsx`**

Simple article layout:
- Back link to /blog
- Title, date, author, read time
- Content rendered as paragraphs (split on `\n\n`)
- Bold text rendered from `**text**` markdown syntax
- CTA at bottom: "Want to talk about this?" → /contact

**Step 3: Commit**

```bash
git add -A && git commit -m "feat: build Blog listing and post pages"
```

---

## Task 11: FAQ Page

**Files:**
- Rewrite: `pages/FAQPage.tsx` — FAQ accordion page

**Step 1: Build `pages/FAQPage.tsx`**

**Page Hero:**
- "Frequently Asked Questions" headline

**FAQ Accordion:**
- Render from `data/faq.ts`
- Each item: clickable question header that toggles answer visibility
- Smooth height transition on toggle
- Plus/minus or chevron icon indicator
- Only one open at a time (optional, but cleaner)

**Bottom CTA:**
- "Still have questions?"
- "Reach out — we're happy to chat." → /contact

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: build FAQ page with accordion"
```

---

## Task 12: Contact Page

**Files:**
- Rewrite: `pages/ContactPage.tsx` — Full contact page (replaces ContactModal)

**Step 1: Build `pages/ContactPage.tsx`**

**Page Layout (two columns on desktop):**

Left column:
- "Let's Talk" headline
- Short paragraph: "Tell us about your business and what's not working. We'll tell you honestly if we can help."
- Direct contact info: email, phone (if available)
- Location: "Southwest Florida" (or wherever appropriate)

Right column — Form:
- Name (text input)
- Email (text input)
- Company (text input)
- What do you need help with? (select dropdown with options from services)
- Tell us more (textarea)
- Submit button: "Send Message"
- Clean styling — dark inputs with subtle borders, focus states in brand-cyan
- NO cyberpunk labels ("IDENTIFIER_KEY"), NO scanner animations, NO fake tech stats

Form submission: For now, same simulated submission as old ContactModal. Can be wired to Resend/email later.

**Step 2: Commit**

```bash
git add -A && git commit -m "feat: build Contact page with clean form"
```

---

## Task 13: Update index.html — Title, Meta, Animations

**Files:**
- Modify: `index.html` — Update title, meta description, clean up animations

**Step 1: Update page title and add meta description**

```html
<title>Dino Killers | Custom Software & AI for Modern Businesses</title>
<meta name="description" content="We build custom tools, AI systems, and digital strategies that bring businesses into 2026. Stop running on dinosaur tech.">
```

**Step 2: Clean up Tailwind config animations**

Remove `blob` animation (no longer used). Keep `float` and `pulse-slow`. Remove `glitch`.

**Step 3: Update CSS**

Keep: `glass-panel`, `neon-text` (used sparingly), `grid-bg`, scrollbar styles.
These are still useful for subtle accents.

**Step 4: Commit**

```bash
git add -A && git commit -m "chore: update meta tags and clean up animations"
```

---

## Task 14: Final Polish — Scroll-to-Top, 404 Page, Mobile QA

**Files:**
- Modify: `App.tsx` or `components/Layout.tsx` — Add scroll-to-top on route change
- Create: `pages/NotFoundPage.tsx` — 404 page
- QA pass on all pages for mobile responsiveness

**Step 1: Add ScrollToTop behavior**

In Layout.tsx, add a useEffect that scrolls to top on pathname change:

```tsx
import { useLocation } from 'react-router-dom';

// Inside Layout component:
const { pathname } = useLocation();
useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);
```

**Step 2: Create 404 page**

Simple, on-brand 404 page with link back to home. Route it as the catch-all `*` in App.tsx.

**Step 3: Mobile QA pass**

Review each page component for:
- Text wrapping on small screens
- Grid columns collapsing properly (grid-cols-1 on mobile)
- Images responsive
- Nav mobile menu working
- Touch targets large enough (min 44px)

**Step 4: Final build and commit**

```bash
npm run build && git add -A && git commit -m "feat: add scroll-to-top, 404 page, and mobile polish"
```

---

## Task 15: Deploy

**Step 1: Push to GitHub**

```bash
git push origin main
```

**Step 2: Verify Vercel deployment**

Check Vercel dashboard or API for deployment status. Verify all routes work in production.

**Step 3: Smoke test all pages**

Visit each route in production and verify:
- / (Home)
- /about
- /services
- /portfolio
- /portfolio/hoa-hunter (and other project IDs)
- /case-studies/hoa-hunter-database
- /blog
- /blog/off-the-shelf-software-killing-your-business
- /faq
- /contact
- /nonexistent (should show 404)

---

## Summary

| Task | Description | Est. Size |
|------|------------|-----------|
| 1 | Remove chatbot, GenImage, Gemini | Small |
| 2 | Data layer (projects, team, services, blog, FAQ, case studies) | Medium |
| 3 | Multi-page routing + Layout | Medium |
| 4 | Shared UI components | Small |
| 5 | Home page rebuild | Large |
| 6 | About page | Medium |
| 7 | Services page | Medium |
| 8 | Portfolio page + project detail rewrite | Medium |
| 9 | Case Studies page | Small |
| 10 | Blog + Blog post pages | Medium |
| 11 | FAQ page | Small |
| 12 | Contact page | Medium |
| 13 | Meta tags + animation cleanup | Small |
| 14 | Scroll-to-top, 404, mobile QA | Small |
| 15 | Deploy + smoke test | Small |

Total: 15 tasks, incremental commits, each task is independently deployable.
