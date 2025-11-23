import React, { useEffect } from 'react';
import { ArrowLeft, Zap, DollarSign, BarChart3, Code2, ShieldCheck, Target, Crosshair } from 'lucide-react';
import GenImage from './GenImage';
import { Project } from '../data/projects';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-black text-white animate-in fade-in duration-500">
      {/* Top Nav */}
      <div className="fixed top-0 left-0 w-full z-50 p-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/10 text-gray-300 hover:text-white transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-mono text-sm">RETURN_TO_BASE</span>
        </button>
      </div>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <GenImage
            type="background"
            prompt={project.themePrompt}
            alt={project.name}
            className="w-full h-full"
            overlayOpacity={0.85}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent z-10"></div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col md:flex-row items-end gap-6 md:gap-12">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded bg-brand-purple/20 border border-brand-purple/50 text-brand-purple text-xs font-bold tracking-widest uppercase">
                  CLASSIFIED_PROJECT
                </span>
                <span className="px-3 py-1 rounded bg-green-500/20 border border-green-500/50 text-green-500 text-xs font-bold tracking-widest uppercase">
                  GRADE {project.investmentGrade}
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tighter text-white">
                {project.name}
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 font-light border-l-4 border-brand-cyan pl-6 max-w-3xl">
                {project.tagline}
              </p>
            </div>

            <div className="w-full md:w-auto">
              <div className="p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-xs text-gray-400 font-mono mb-1">PROJECTED ARR</div>
                <div className="text-3xl font-bold text-brand-cyan">{project.projectedARR}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-32 relative z-20">

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2 font-mono">
              <BarChart3 className="w-4 h-4" /> PROGRESS
            </div>
            <div className="text-2xl font-bold text-white">{project.developmentProgress}%</div>
            <div className="w-full h-1 bg-gray-700 mt-3 rounded-full overflow-hidden">
              <div className="h-full bg-brand-purple" style={{ width: `${project.developmentProgress}%` }}></div>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2 font-mono">
              <DollarSign className="w-4 h-4" /> CAPITAL NEEDED
            </div>
            <div className="text-2xl font-bold text-white">{project.capitalNeeded}</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2 font-mono">
              <Zap className="w-4 h-4" /> TIME TO REVENUE
            </div>
            <div className="text-2xl font-bold text-white">{project.timeToRevenue}</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 rounded-xl">
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-2 font-mono">
              <Code2 className="w-4 h-4" /> CORE STACK
            </div>
            <div className="text-lg font-bold text-white truncate">{project.techStack[0]}</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Left Column (Description) */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Target className="w-6 h-6 text-brand-purple" />
                Mission Profile
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-brand-cyan" />
                Unique Value Proposition
              </h3>
              <div className="p-6 rounded-xl bg-brand-cyan/5 border border-brand-cyan/20">
                <p className="text-gray-200 text-lg font-medium italic">
                  "{project.uvp}"
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4 text-brand-purple">Investment Impact</h4>
                <ul className="space-y-3">
                  {project.investmentImpact.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-purple flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-bold text-white mb-4 text-brand-cyan">Key Highlights</h4>
                <ul className="space-y-3">
                  {project.highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-400">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand-cyan flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Competitive Advantage</h3>
              <p className="text-gray-400 border-l-2 border-white/20 pl-4">
                {project.competitiveAdvantage}
              </p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-sm font-mono text-gray-400 mb-4 flex items-center gap-2">
                <Crosshair className="w-4 h-4" /> TARGET MARKET
              </h3>
              <p className="text-white font-medium">
                {project.targetMarket}
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-sm font-mono text-gray-400 mb-4 flex items-center gap-2">
                <Code2 className="w-4 h-4" /> TECHNOLOGY STACK
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="px-3 py-1.5 rounded-lg bg-black border border-white/20 text-gray-300 text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-cyan/20 border border-brand-cyan/30 text-center">
              <h3 className="text-white font-bold mb-2">Interested in this Asset?</h3>
              <p className="text-sm text-gray-400 mb-4">Contact us to discuss acquisition or partnership opportunities.</p>
              <div className="space-y-3">
                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-white font-bold transition-colors flex items-center justify-center gap-2"
                  >
                    <Zap className="w-4 h-4" />
                    Visit Live Site
                  </a>
                )}
                <button className="w-full py-3 rounded-lg bg-brand-cyan text-black font-bold hover:bg-white transition-colors">
                  Request Full Deck
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;