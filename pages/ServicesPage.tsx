import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Code2, Cpu, Palette, TrendingUp, ArrowRight, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import Section from '../components/ui/Section';
import { services } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-8 h-8" />,
  Code2: <Code2 className="w-8 h-8" />,
  Cpu: <Cpu className="w-8 h-8" />,
  Palette: <Palette className="w-8 h-8" />,
  TrendingUp: <TrendingUp className="w-8 h-8" />,
};

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-brand-black">
      {/* ── Hero ── */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden pt-28 pb-20">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/15 via-transparent to-brand-cyan/10" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-brand-cyan/8 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="text-white">How We </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">
                Help
              </span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl mx-auto">
              We solve business problems. The technology is just how we do it.
            </p>
          </ScrollReveal>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-20" />
      </section>

      {/* ── Service Sections ── */}
      {services.map((service, index) => {
        const isEven = index % 2 === 0;

        return (
          <Section key={service.id} id={service.id} dark={!isEven}>
            <ScrollReveal>
              <div className={`flex flex-col lg:flex-row items-start gap-12 lg:gap-20 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}>
                {/* Text content */}
                <div className="flex-1 min-w-0">
                  {/* Icon + title label */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2.5 rounded-xl bg-brand-purple/10 border border-brand-purple/20 text-brand-purple">
                      {iconMap[service.icon] || <Zap className="w-8 h-8" />}
                    </div>
                    <span className="text-sm font-semibold uppercase tracking-wider text-brand-cyan">
                      {service.title}
                    </span>
                  </div>

                  {/* Pain headline */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                    {service.pain}
                  </h2>

                  {/* Description */}
                  <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-2xl">
                    {service.description}
                  </p>

                  {/* CTA */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-brand-purple/20 hover:border-brand-purple/40 transition-all duration-300 group"
                  >
                    Talk to us about this
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Examples list */}
                <div className="flex-1 min-w-0 w-full lg:w-auto">
                  <div className="rounded-2xl bg-white/[0.03] border border-white/[0.06] p-8 backdrop-blur-sm">
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">
                      What this looks like
                    </h3>
                    <ul className="space-y-4">
                      {service.examples.map((example, i) => (
                        <ScrollReveal key={i} delay={i * 100}>
                          <li className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-brand-cyan mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300 text-base leading-relaxed">
                              {example}
                            </span>
                          </li>
                        </ScrollReveal>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </Section>
        );
      })}

      {/* ── Bottom CTA ── */}
      <Section dark>
        <ScrollReveal>
          <div className="relative max-w-3xl mx-auto text-center">
            {/* Glass panel with gradient border */}
            <div className="relative rounded-2xl p-[1px] bg-gradient-to-br from-brand-purple/50 via-brand-cyan/30 to-brand-purple/50">
              <div className="rounded-2xl bg-brand-dark/90 backdrop-blur-xl px-8 py-16 sm:px-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Not sure which of these fits?
                </h2>
                <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto">
                  Most businesses need a combination. We'll listen to what's actually going on and figure out the right approach together — no pitch deck, no pressure.
                </p>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-brand-cyan hover:scale-105 transition-all duration-200 group"
                >
                  Let's figure it out together
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>
    </div>
  );
};

export default ServicesPage;
