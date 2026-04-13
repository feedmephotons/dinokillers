import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code2, Star } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import Section from '../components/ui/Section';
import { getProjectsByCategory, getFeaturedProjects, Project } from '../data/projects';

const FeaturedCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <ScrollReveal delay={index * 150}>
    <Link
      to={`/portfolio/${project.id}`}
      className="group relative block rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-cyan/20"
    >
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-cyan via-brand-purple to-brand-cyan p-[2px]">
        <div className="w-full h-full rounded-2xl bg-brand-dark" />
      </div>

      <div className="relative z-10">
        {/* Image */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-t-2xl">
          {project.image ? (
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-brand-dark">
              <Code2 className="w-16 h-16 text-white/10" />
            </div>
          )}
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
          {/* Featured badge */}
          <div className="absolute top-4 right-4 flex items-center gap-1.5 bg-gradient-to-r from-brand-cyan to-brand-purple px-3 py-1.5 rounded-full">
            <Star className="w-3.5 h-3.5 text-white fill-white" />
            <span className="text-xs font-bold text-white tracking-wide uppercase">Flagship</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <span className="inline-block text-xs font-medium tracking-wider uppercase text-brand-cyan mb-3">
            {project.industry}
          </span>
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">
            {project.name}
          </h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            {project.tagline}
          </p>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-5">
            {project.impactStatement}
          </p>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-cyan transition-all group-hover:gap-3">
            Explore Project <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  </ScrollReveal>
);

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => (
  <ScrollReveal delay={index * 120}>
    <Link
      to={`/portfolio/${project.id}`}
      className="group block bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-purple/5"
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
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="inline-block text-xs font-medium tracking-wider uppercase bg-brand-purple/20 text-brand-purple px-3 py-1 rounded-full mb-3">
          {project.industry}
        </span>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-brand-cyan transition-colors">
          {project.name}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-2">
          {project.impactStatement}
        </p>
        <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-cyan mt-4 transition-all group-hover:gap-2">
          Learn More <ArrowRight className="w-4 h-4" />
        </span>
      </div>
    </Link>
  </ScrollReveal>
);

const PortfolioPage: React.FC = () => {
  const featured = getFeaturedProjects();
  const products = getProjectsByCategory('product');
  const clientWork = getProjectsByCategory('client');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-brand-black overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-purple/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-block font-mono text-sm text-brand-cyan tracking-widest uppercase mb-4">
              Portfolio
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight mb-6">
              Our Work
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl leading-relaxed">
              Products we've built and solutions we've delivered.
            </p>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-brand-dark to-transparent" />
      </section>

      {/* Flagship Products */}
      <Section dark>
        <div className="mb-12">
          <ScrollReveal>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-cyan to-brand-purple flex items-center justify-center">
                <Star className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="font-mono text-sm text-brand-cyan tracking-widest uppercase">
                Flagship Products
              </span>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-3">
              Our Stars
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-gray-400 max-w-xl">
              The platforms we're most proud of — full-scale products driving real businesses.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Section>

      {/* Our Products */}
      <Section>
        <div className="mb-12">
          <ScrollReveal>
            <span className="font-mono text-sm text-brand-cyan tracking-widest uppercase">
              What We've Built
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">
              Our Products
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-gray-400 max-w-xl">
              Software we designed, built, and brought to market — solving real problems we saw firsthand.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Section>

      {/* Client Solutions */}
      <Section dark>
        <div className="mb-12">
          <ScrollReveal>
            <span className="font-mono text-sm text-brand-cyan tracking-widest uppercase">
              Built for Clients
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-3">
              Client Solutions
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-gray-400 max-w-xl">
              Custom platforms built to solve specific business challenges — from concept to production.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clientWork.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/15 via-brand-dark to-brand-cyan/10" />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-brand-purple/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-brand-cyan/8 rounded-full blur-[80px]" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Have a project in mind?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Tell us what you're trying to build. We'll show you what's possible.
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

export default PortfolioPage;
