import React from 'react';
import { ArrowRight, Zap, Code } from 'lucide-react';
import { projects, Project } from '../data/projects';

interface PortfolioProps {
  onSelectProject: (project: Project) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onSelectProject }) => {
  return (
    <section id="portfolio" className="py-24 bg-brand-black relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-brand-purple/30 mb-6">
            <span className="text-xs md:text-sm font-mono text-brand-purple">CONFIDENTIAL_FILES_UNLOCKED</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">ACTIVE </span>
            <span className="text-brand-purple">OPERATIONS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Current initiatives deploying agentic AI to disrupt legacy industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-2xl bg-white/5 border border-white/10 hover:border-brand-cyan/50 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
            >
              {/* Top Status Bar */}
              <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-black/40">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full ${project.developmentProgress > 80 ? 'bg-green-500' : 'bg-yellow-500'} animate-pulse`}></div>
                  <span className="text-xs font-mono text-gray-400">{project.developmentProgress}% COMPLETE</span>
                </div>
              </div>

              {/* Project Image */}
              {project.image && (
                <div className="w-full h-48 overflow-hidden border-b border-white/5 relative group-hover:h-56 transition-all duration-300">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent opacity-60"></div>
                </div>
              )}

              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-brand-cyan transition-colors mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 min-h-[40px]">
                    {project.tagline}
                  </p>
                </div>

                {/* Tech Stack Preview */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-500 border border-white/5">
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 3 && (
                    <span className="text-[10px] px-2 py-1 rounded bg-white/5 text-gray-500 border border-white/5">
                      +{project.techStack.length - 3}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-brand-cyan hover:text-brand-black text-white border border-white/10 hover:border-brand-cyan py-3 rounded-lg transition-all duration-300 font-bold text-sm group-hover:translate-y-1"
                >
                  ACCESS INTEL
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Decorative Grid */}
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;