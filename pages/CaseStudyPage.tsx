import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  AlertTriangle,
  Target,
  Lightbulb,
  TrendingUp,
  Quote,
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import Section from '../components/ui/Section';
import { getCaseStudyBySlug } from '../data/caseStudies';
import { getProjectById } from '../data/projects';

const CaseStudyPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const caseStudy = slug ? getCaseStudyBySlug(slug) : undefined;
  const project = caseStudy ? getProjectById(caseStudy.projectId) : undefined;

  /* ───────────────── Not Found State ───────────────── */
  if (!caseStudy) {
    return (
      <div className="bg-brand-black min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/5 border border-white/10 mb-6">
            <AlertTriangle className="w-8 h-8 text-brand-purple" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Case Study Not Found
          </h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            We couldn't find the case study you're looking for. It may have been
            moved or doesn't exist yet.
          </p>
          <Link
            to="/portfolio"
            className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/25 hover:scale-[1.02]"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const showClient =
    caseStudy.client !== 'Internal Product' &&
    !caseStudy.client.startsWith('Internal Product');

  return (
    <div className="bg-brand-black min-h-screen">
      {/* ─── Hero Section ─── */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden pt-20 pb-16 md:pb-24">
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/15 via-transparent to-brand-cyan/10" />
          <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-brand-purple/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-brand-cyan/8 rounded-full blur-[100px]" />
        </div>

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Back link */}
          <ScrollReveal>
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-10"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Link>
          </ScrollReveal>

          {/* Industry pill */}
          <ScrollReveal delay={100}>
            <span className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-brand-cyan bg-brand-cyan/10 border border-brand-cyan/20 px-4 py-1.5 rounded-full mb-6">
              {caseStudy.industry}
            </span>
          </ScrollReveal>

          {/* Title */}
          <ScrollReveal delay={200}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6">
              {caseStudy.title}
            </h1>
          </ScrollReveal>

          {/* Client */}
          {showClient && (
            <ScrollReveal delay={300}>
              <p className="text-lg md:text-xl text-gray-400 font-light">
                Client:{' '}
                <span className="text-gray-200 font-medium">
                  {caseStudy.client}
                </span>
              </p>
            </ScrollReveal>
          )}
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-20" />
      </section>

      {/* ─── The Problem ─── */}
      <Section>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              {/* Section header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20">
                  <Target className="w-6 h-6 text-red-400" />
                </div>
                <div>
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-red-400 block mb-1">
                    The Challenge
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    The Problem
                  </h2>
                </div>
              </div>

              {/* Left accent bar */}
              <div className="border-l-2 border-red-400/40 pl-6 md:pl-8">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  {caseStudy.problem}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* ─── Our Approach ─── */}
      <Section dark>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12">
              {/* Section header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-brand-purple/10 border border-brand-purple/20">
                  <Lightbulb className="w-6 h-6 text-brand-purple" />
                </div>
                <div>
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand-purple block mb-1">
                    The Solution
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    Our Approach
                  </h2>
                </div>
              </div>

              {/* Left accent bar */}
              <div className="border-l-2 border-brand-purple/40 pl-6 md:pl-8">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  {caseStudy.approach}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* ─── The Impact ─── */}
      <Section>
        <ScrollReveal>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-brand-cyan/5 via-white/5 to-brand-cyan/5 backdrop-blur-sm border border-brand-cyan/20 rounded-2xl p-8 md:p-12 overflow-hidden">
              {/* Subtle glow */}
              <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-cyan/5 rounded-full blur-[80px] pointer-events-none" />

              {/* Section header */}
              <div className="relative flex items-center gap-4 mb-10">
                <div className="p-3 rounded-xl bg-brand-cyan/10 border border-brand-cyan/20">
                  <TrendingUp className="w-6 h-6 text-brand-cyan" />
                </div>
                <div>
                  <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand-cyan block mb-1">
                    The Results
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                    The Impact
                  </h2>
                </div>
              </div>

              {/* Impact bullets */}
              <div className="relative space-y-5">
                {caseStudy.impact.map((item, i) => (
                  <ScrollReveal key={i} delay={i * 100}>
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-brand-cyan flex-shrink-0 mt-0.5" />
                      <p className="text-lg md:text-xl text-white font-semibold leading-snug">
                        {item}
                      </p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Section>

      {/* ─── Optional Quote ─── */}
      {caseStudy.quote && (
        <Section dark>
          <div className="relative py-8 md:py-12">
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-brand-purple/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <Quote className="w-10 h-10 text-brand-purple/40 mx-auto mb-8 rotate-180" />
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <blockquote className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight italic">
                  "{caseStudy.quote}"
                </blockquote>
              </ScrollReveal>

              {caseStudy.quoteAuthor && (
                <ScrollReveal delay={200}>
                  <div className="mt-8">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-brand-purple to-brand-cyan mx-auto mb-4" />
                    <p className="text-gray-400 font-mono text-sm tracking-wide">
                      {caseStudy.quoteAuthor}
                    </p>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </div>
        </Section>
      )}

      {/* ─── Links / CTA Section ─── */}
      <Section className={caseStudy.quote ? '' : ''}>
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              {/* Visit Live Site */}
              {project?.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:scale-[1.02]"
                >
                  <div className="p-3 rounded-xl bg-brand-cyan/10 group-hover:bg-brand-cyan/20 transition-colors">
                    <ExternalLink className="w-6 h-6 text-brand-cyan" />
                  </div>
                  <span className="text-white font-semibold text-lg">
                    Visit Live Site
                  </span>
                  <span className="text-sm text-gray-500 font-mono">
                    {project.url.replace(/^https?:\/\//, '')}
                  </span>
                </a>
              )}

              {/* See All Work */}
              <Link
                to="/portfolio"
                className="group flex flex-col items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:scale-[1.02]"
              >
                <div className="p-3 rounded-xl bg-brand-purple/10 group-hover:bg-brand-purple/20 transition-colors">
                  <ArrowLeft className="w-6 h-6 text-brand-purple" />
                </div>
                <span className="text-white font-semibold text-lg">
                  See All Work
                </span>
                <span className="text-sm text-gray-500">
                  Browse the full portfolio
                </span>
              </Link>

              {/* Start Your Project */}
              <Link
                to="/contact"
                className="group flex flex-col items-center gap-3 bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 backdrop-blur-sm border border-brand-purple/20 rounded-2xl p-8 text-center transition-all duration-300 hover:from-brand-purple/20 hover:to-brand-cyan/20 hover:border-brand-purple/30 hover:scale-[1.02]"
              >
                <div className="p-3 rounded-xl bg-white/10 group-hover:bg-white/15 transition-colors">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-semibold text-lg">
                  Start Your Project
                </span>
                <span className="text-sm text-gray-400">
                  Let's build something together
                </span>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudyPage;
