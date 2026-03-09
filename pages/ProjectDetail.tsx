import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, Tag, Code2, Users, Briefcase } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import { getProjectById } from '../data/projects';
import { getCaseStudyByProjectId } from '../data/caseStudies';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = id ? getProjectById(id) : undefined;
  const caseStudy = id ? getCaseStudyByProjectId(id) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-black flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-400 mb-8">Project not found.</p>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 rounded-xl text-white font-medium hover:bg-white/20 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black text-white">
      {/* Hero */}
      <section className="relative min-h-[50vh] md:min-h-[55vh] flex items-end pb-12 md:pb-16">
        {/* Background image or gradient */}
        <div className="absolute inset-0 z-0">
          {project.image ? (
            <>
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-brand-black/80" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-brand-cyan/10" />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/70 to-transparent z-10" />

        {/* Back link */}
        <div className="absolute top-24 left-4 sm:left-6 lg:left-8 z-30">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-all text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>

        {/* Hero content */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <ScrollReveal>
            <span className="inline-block text-xs font-medium tracking-wider uppercase bg-brand-purple/20 text-brand-purple px-3 py-1 rounded-full mb-4">
              {project.industry}
            </span>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              {project.name}
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </ScrollReveal>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-black to-transparent z-20" />
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">

          {/* Left column */}
          <div className="lg:col-span-2 space-y-12">
            {/* What We Built */}
            <ScrollReveal>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">What We Built</h2>
                <p className="text-gray-300 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>
            </ScrollReveal>

            {/* The Value */}
            <ScrollReveal delay={100}>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">The Value</h2>
                <div className="p-6 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20">
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {project.uvp}
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Key Highlights */}
            <ScrollReveal delay={150}>
              <div>
                <h2 className="text-2xl font-bold text-white mb-4">Key Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-300">
                      <span className="mt-2 w-2 h-2 rounded-full bg-brand-cyan flex-shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>

            {/* Impact Statement */}
            <ScrollReveal delay={200}>
              <div className="p-6 md:p-8 rounded-xl bg-gradient-to-br from-brand-purple/10 to-brand-cyan/10 border border-white/10">
                <h2 className="text-lg font-semibold text-brand-cyan mb-3">Impact</h2>
                <p className="text-xl md:text-2xl font-semibold text-white leading-snug">
                  {project.impactStatement}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            {/* Industry */}
            <ScrollReveal delay={100}>
              <div className="glass-panel rounded-xl p-6">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Tag className="w-4 h-4" />
                  Industry
                </div>
                <p className="text-white font-semibold">{project.industry}</p>
              </div>
            </ScrollReveal>

            {/* Target Market */}
            <ScrollReveal delay={150}>
              <div className="glass-panel rounded-xl p-6">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Users className="w-4 h-4" />
                  Target Market
                </div>
                <p className="text-white font-medium leading-relaxed">{project.targetMarket}</p>
              </div>
            </ScrollReveal>

            {/* Tech Stack */}
            <ScrollReveal delay={200}>
              <div className="glass-panel rounded-xl p-6">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Code2 className="w-4 h-4" />
                  Tech Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/15 text-gray-300 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Action buttons */}
            <ScrollReveal delay={250}>
              <div className="space-y-3">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-brand-purple/25 hover:scale-[1.02]"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visit Live Site
                  </a>
                )}

                {caseStudy && (
                  <Link
                    to={`/case-studies/${caseStudy.slug}`}
                    className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/15 transition-all duration-300"
                  >
                    <Briefcase className="w-4 h-4" />
                    View Case Study
                  </Link>
                )}

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl border border-white/15 text-gray-300 font-medium hover:bg-white/5 hover:text-white transition-all duration-300"
                >
                  Get in Touch
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
