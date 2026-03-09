# Dino Killers Website Rebuild - Design Document

**Date:** 2026-03-09
**Status:** Approved

## Overview

Full rebuild of the Dino Killers website from a single-page cyberpunk developer portfolio into a multi-page agency site that speaks to business owners. Keep the bold visual identity, kill the jargon, lead with client impact.

## Target Audience

Business owners frustrated with outdated systems — roofers, HOA boards, fabricators, contractors, and anyone running their operation on spreadsheets and dinosaur tech. They don't care about your tech stack. They care about results.

## Tone of Voice

- Talk about what the client gets, not what you build
- No jargon unless the client would use it themselves
- Confident, not cocky. Direct, not salesy.
- Dino metaphor stays but subtle — "stop running your business on dinosaur tech" not "WE ARE THE EXTINCTION EVENT"
- Example before: "We are the asteroid. Deploy agents to eliminate legacy code."
- Example after: "Your competitors are moving faster because their tools are better. We fix that."

## Visual Direction

### Keep
- Dark theme (brand-black #050505, brand-dark #0a0a0a)
- Purple/cyan accent palette (#8b5cf6, #06b6d4)
- Space Grotesk (display) + JetBrains Mono (monospace accents)
- Glass panel effects (refined)
- Bold, premium energy

### Evolve
- Replace floating blobs with subtle gradient meshes
- Cleaner glass panels with less opacity
- Scroll-triggered animations (fade-in, parallax, counters)
- Premium dark agency feel (think Linear/Vercel marketing, with edge)

### Kill
- V-Rex AI chatbot
- GenImage AI-generated backgrounds (use real screenshots/photos)
- "Deploy agents", "arsenal", "extinction event" military/gaming jargon
- Floating blob animations
- Cyberpunk scanner effects

## Site Architecture

| Page | Purpose |
|------|---------|
| Home | Hook in 5 seconds — who you are, what changes, proof it works |
| About | Winston & Brance story, bios, philosophy |
| Services | What you solve, organized by business pain |
| Portfolio | Products + client work, impact-first |
| Case Studies | Deep dives on standout projects |
| Blog/Insights | Thought leadership, seed posts |
| FAQ | Common prospect questions |
| Contact | Full page form, direct info, clear next step |

## Page Designs

### Home

1. **Hero** — Headline: "Your business deserves better than dinosaur tech." Subline about building custom tools, AI systems, digital strategies for 2026. CTAs: "See Our Work" + "Let's Talk"
2. **Value strip** — 3-4 proof points (6 Products Built, Industries from Roofing to Real Estate, AI-First Since Day One)
3. **What We Do (condensed)** — 3-4 problem-framed cards linking to Services
4. **Featured Work** — 2-3 portfolio highlights with screenshots and one-line impact statements
5. **Social proof** — Testimonial/quote section (structure ready, content when available)
6. **CTA banner** — "Ready to kill the dinosaurs?" → Contact

### About

1. **The Story** — How Winston and Brance met through Roof Wars, saw broken business tech, decided to fix it
2. **Winston Fowlkes** — Headshot (purple smoke bg, `/images/winston-headshot.png`). From Danville, VA → Florida 2011. Marketing contractor/consultant, software developer, photographer/videographer. AI-powered across all fields, 10x productivity. Construction/roofing focus, major Florida companies.
3. **Brance Wages** — Headshot (golden hour, `/images/brance-headshot.png`). From Dallas, TX. Real estate background, founded GeoAI (geofencing, closed during Covid). Owns Roof Wars (commercial roofing, Naples + Dallas). Works directly with condo associations across SW Florida. Co-founded HOA Hunter and HOA Cloud.
4. **Philosophy** — "We don't sell technology. We sell time back, deals closed, and problems solved."

### Services

Organized by business pain, not technical capability:

1. **"Your team wastes hours on things software could do"** → Custom CRMs, workflow automation, AI-powered admin tools
2. **"Your current software doesn't fit how you actually work"** → Custom platforms, industry-specific solutions, replacing off-the-shelf
3. **"You know AI could help but don't know where to start"** → AI integration, intelligent automation, AI features in existing workflows
4. **"Your brand and online presence are stuck in the past"** → Rebranding, web development, marketing strategy, content
5. **"You're growing but your operations can't keep up"** → Logistics, scheduling, data systems, scaling infrastructure

Each: headline (the pain), description, examples of what we've built, CTA to contact.

### Portfolio

Two sections:
- **Our Products** — HOA Hunter, HOA Cloud, Brandeezy, HailTruth
- **Client Solutions** — Metalcrafters, BuildX

Each card: screenshot, name, one-line impact statement, industry tag. Links to case study or detail page.

### Case Studies (start with 2-3)

Per study:
- The Problem
- The Approach (simple, non-technical)
- The Impact (real numbers where possible)
- Screenshot/demo link

### Blog/Insights

Seed articles:
- "Why Off-the-Shelf Software is Killing Your Business"
- "AI in Construction: What's Real and What's Hype"
- "The Custom CRM Advantage"

Card grid layout, links to full articles.

### FAQ

- How long does a project take?
- What does it cost?
- Do you only work with construction/roofing?
- What's your tech stack? (answered simply)
- Can you work with our existing systems?

### Contact

Full page. Form: name, email, company, dropdown (what do you need help with) + freetext. Direct email/phone. Book a Call option if available.

## Animations & Effects

- Scroll-triggered fade-ins (elements animate in on scroll)
- Subtle parallax on hero backgrounds
- Counter animations (numbers count up on scroll)
- Card hover states (lift + shadow + slight image scale)
- Smooth page transitions between routes
- Animated gradient mesh backgrounds (subtle purple/cyan, not blobs)
- All real images — no AI-generated backgrounds

## Technical Notes

- Keep React + Vite + TypeScript + Tailwind stack
- React Router for multi-page routing
- Remove Gemini API dependency (no chatbot, no GenImage)
- Real images only (headshots, dashboard screenshots)
- Responsive mobile-first
- Deploy to Vercel

## Assets Available

- Winston headshot: `/public/images/winston-headshot.png`
- Brance headshot: `/public/images/brance-headshot.png`
- Dashboard screenshots: `/public/images/portfolio/*.png`

## Founders Info

### Winston Fowlkes — Co-Founder
- From Danville, Virginia. Moved to Florida in 2011.
- Marketing contractor/consultant, software developer, photographer/videographer
- Since AI growth, leverages AI across all fields — 10x productivity increase
- Broad skill set focused on construction and roofing industries
- Contractor for Roof Wars (how he met Brance)
- Worked with major companies across Florida

### Brance Wages — Co-Founder
- From Dallas, Texas
- Real estate background
- Founded GeoAI (geofencing business, closed during Covid)
- Owns Roof Wars — commercial roofing operation in Naples, FL and Dallas, TX
- Works directly with condo associations across Southwest Florida
- Co-founded HOA Hunter and HOA Cloud
