import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Quote } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import Section from '../components/ui/Section';
import GradientMesh from '../components/ui/GradientMesh';
import { team } from '../data/team';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-brand-black min-h-screen">

      {/* ─── 1. Page Hero ─── */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/15 via-transparent to-brand-cyan/10" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-brand-cyan/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <span className="inline-block font-mono text-xs md:text-sm tracking-[0.25em] uppercase text-brand-cyan mb-6">
              About Dino Killers
            </span>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8">
              Who We Are
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              Two business operators who got tired of watching companies struggle with broken software.
            </p>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-20" />
      </section>

      {/* ─── 2. Origin Story ─── */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand-purple mb-8 block">
              The Origin Story
            </span>
          </ScrollReveal>

          <div className="border-l-2 border-brand-cyan pl-6 md:pl-8 space-y-6">
            <ScrollReveal delay={100}>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                Winston was contracting for Roof Wars — Brance's commercial roofing company — when they both
                realized the same thing: every business they touched was held together with duct tape and
                spreadsheets. Tools that didn't talk to each other. Teams drowning in manual work that should
                have been automated a decade ago. It wasn't a roofing problem or a marketing problem. It was
                everywhere.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                So instead of complaining about it, they started building. First for their own companies —
                internal tools, automations, dashboards that actually worked. Then word got out. Other
                businesses started asking for the same thing. Turns out when you solve your own pain, you
                end up solving everyone else's too.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <p className="text-lg md:text-xl text-white leading-relaxed">
                The name? <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan font-bold">Dino Killers</span>.
                Because every business they work with is running on dinosaur technology — clunky, slow, and
                long overdue for a replacement. Winston and Brance are the meteor. It's time for an upgrade.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* ─── 3. Team Bios ─── */}
      <Section dark>
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand-cyan mb-4 block">
              The Team
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Meet the Founders
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <ScrollReveal key={member.id} delay={index * 150}>
              <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:border-white/20 transition-colors duration-300">
                {/* Headshot */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent z-10 pointer-events-none" />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover"
                  />
                </div>

                {/* Info */}
                <div className="p-6 md:p-8 -mt-16 relative z-20">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-brand-purple font-mono text-sm font-semibold mb-3">
                    {member.role}
                  </p>
                  <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-5">
                    <MapPin className="w-3.5 h-3.5 text-brand-cyan flex-shrink-0" />
                    <span>{member.location}</span>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6 font-light">
                    {member.bio}
                  </p>

                  {/* Background Tags */}
                  <div className="flex flex-wrap gap-2">
                    {member.background.map((item) => (
                      <span
                        key={item}
                        className="inline-block px-3 py-1 text-xs font-mono text-gray-400 bg-white/5 border border-white/10 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ─── 4. Philosophy Quote ─── */}
      <Section>
        <div className="relative py-12 md:py-20">
          <GradientMesh />

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Quote className="w-10 h-10 text-brand-purple/40 mx-auto mb-8 rotate-180" />
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <blockquote className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight">
                We don't sell technology. We sell{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-fuchsia-500 to-brand-cyan">
                  time back, deals closed, and problems solved
                </span>
                . The tech is just how we get there.
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="mt-8 w-16 h-0.5 bg-gradient-to-r from-brand-purple to-brand-cyan mx-auto" />
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* ─── 5. CTA ─── */}
      <Section dark>
        <div className="relative py-8 md:py-16">
          <div className="relative z-10 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
                Want to work with us?
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto font-light">
                No pitch decks. No 12-month contracts. Just a conversation about what's broken and how we fix it.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-white rounded-full hover:bg-brand-cyan hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan"
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </Section>

    </div>
  );
};

export default AboutPage;
