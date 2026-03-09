import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Code2, Cpu, Package, Users, MapPin, Sparkles } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import Section from '../components/ui/Section';
import Counter from '../components/ui/Counter';
import GradientMesh from '../components/ui/GradientMesh';
import { getAllProjects } from '../data/projects';
import { services } from '../data/services';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-brand-cyan" />,
  Code2: <Code2 className="w-6 h-6 text-brand-purple" />,
  Cpu: <Cpu className="w-6 h-6 text-brand-cyan" />,
};

const HomePage: React.FC = () => {
  const allProjects = getAllProjects();
  const featuredIds = ['hoa-hunter', 'metalcrafters', 'brandeezy'];
  const featuredProjects = featuredIds
    .map(id => allProjects.find(p => p.id === id))
    .filter(Boolean);
  const previewServices = services.slice(0, 3);

  return (
    <div className="min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-screen flex items-center bg-brand-black overflow-hidden">
        <GradientMesh />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 font-mono text-sm text-brand-cyan tracking-widest uppercase mb-6">
                <Sparkles className="w-4 h-4" />
                Custom Software &amp; AI
              </span>
            </ScrollReveal>

            {/* Headline */}
            <ScrollReveal delay={100}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-8">
                Your business deserves better than{' '}
                <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">
                  dinosaur tech.
                </span>
              </h1>
            </ScrollReveal>

            {/* Subheadline */}
            <ScrollReveal delay={200}>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-2xl leading-relaxed mb-10">
                We build the custom tools, AI systems, and digital strategies that
                bring companies into 2026.
              </p>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/25 hover:scale-[1.02]"
                >
                  Let's Talk
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:bg-white/5 hover:border-white/40"
                >
                  See Our Work
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-dark to-transparent" />
      </section>

      {/* ─── Value Strip ─── */}
      <Section dark>
        <ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: <Package className="w-5 h-5 text-brand-purple" />,
                value: <Counter end={6} suffix="+" />,
                label: 'Products Built',
              },
              {
                icon: <Zap className="w-5 h-5 text-brand-cyan" />,
                value: <Counter end={5} suffix="+" />,
                label: 'Industries Served',
              },
              {
                icon: <Users className="w-5 h-5 text-brand-purple" />,
                value: <Counter end={2} />,
                label: 'Founders Who Run Real Businesses',
              },
              {
                icon: <MapPin className="w-5 h-5 text-brand-cyan" />,
                value: null,
                label: 'SW Florida Based',
                text: 'SW FL',
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="p-2 rounded-lg bg-white/5">{stat.icon}</div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-mono">
                  {stat.value ?? stat.text}
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* ─── What We Do ─── */}
      <Section>
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="font-mono text-sm text-brand-cyan tracking-widest uppercase">
              Services
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              What We Do
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewServices.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 150}>
              <Link
                to="/services"
                className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:scale-[1.02]"
              >
                <div className="p-3 rounded-xl bg-white/5 inline-flex mb-6">
                  {iconMap[service.icon] || <Code2 className="w-6 h-6 text-brand-cyan" />}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                  {service.pain}
                </h3>
                <p className="text-sm text-gray-400 mb-6">{service.title}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-cyan transition-all group-hover:gap-2">
                  Learn more <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
            >
              See all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* ─── Featured Work ─── */}
      <Section dark>
        <div className="text-center mb-16">
          <ScrollReveal>
            <span className="font-mono text-sm text-brand-cyan tracking-widest uppercase">
              Portfolio
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">
              What We've Built
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => {
            if (!project) return null;
            return (
              <ScrollReveal key={project.id} delay={i * 150}>
                <Link
                  to={`/portfolio/${project.id}`}
                  className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:scale-[1.02]"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-brand-dark">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Code2 className="w-12 h-12 text-white/10" />
                      </div>
                    )}
                    {/* Gradient overlay on image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="inline-block font-mono text-xs text-brand-cyan tracking-wider uppercase bg-brand-cyan/10 px-3 py-1 rounded-full mb-3">
                      {project.industry}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {project.impactStatement}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-cyan mt-4 transition-all group-hover:gap-2">
                      View project <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={500}>
          <div className="text-center mt-12">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors font-medium"
            >
              See all projects <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Section>

      {/* ─── CTA Banner ─── */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/15 via-brand-dark to-brand-cyan/10" />
        <div className="absolute inset-0 bg-brand-black/60" />

        {/* Accent blurs */}
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-cyan/8 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to leave the{' '}
              <span className="bg-gradient-to-r from-brand-purple to-brand-cyan bg-clip-text text-transparent">
                dinosaur age
              </span>{' '}
              behind?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Tell us what's slowing your business down. We'll show you what's possible.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-semibold rounded-xl text-lg transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/25 hover:scale-[1.02]"
            >
              Let's Talk
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
