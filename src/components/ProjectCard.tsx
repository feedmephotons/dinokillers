'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const statusColors = {
    live: 'bg-green-500/20 text-green-400 border-green-500/30',
    beta: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
    development: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  };

  const gradeColors = {
    'A+': 'text-green-400',
    'A': 'text-cyan-400',
    'A-': 'text-purple-400',
    'B+': 'text-orange-400',
  };

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className="group perspective-1000 animate-fade-in-up"
        style={{ animationDelay: `${index * 100}ms` }}
      >
        <div className="relative glass rounded-2xl p-8 border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-3 cursor-pointer overflow-hidden transform-3d hover:shadow-2xl hover:shadow-cyan-500/20">
          {/* Shimmer effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          {/* Glow effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-orange-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-orange-500/10 rounded-2xl transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="relative w-16 h-16 rounded-xl bg-gray-800/50 p-2 flex items-center justify-center border border-gray-700/50 group-hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              {/* Logo glow effect */}
              <div className="absolute inset-0 rounded-xl bg-cyan-500/0 group-hover:bg-cyan-500/20 blur-md transition-all duration-300" />
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                width={64}
                height={64}
                className="w-full h-full object-contain relative z-10"
              />
            </div>

            {/* Name & Status */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                {project.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded-full border ${statusColors[project.status]} transition-all duration-300 group-hover:scale-105`}>
                  {project.status.toUpperCase()}
                </span>
                <span className={`text-sm font-bold ${gradeColors[project.investmentGrade as keyof typeof gradeColors] || 'text-gray-400'} transition-all duration-300 group-hover:scale-110`}>
                  Grade: {project.investmentGrade}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.tagline}
        </p>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/30 hover:border-cyan-500/40 transition-all duration-300 hover:scale-105 group/metric">
            <div className="text-xs text-gray-500 mb-1 group-hover/metric:text-gray-400 transition-colors">Dev Complete</div>
            <div className="text-sm font-bold text-cyan-400 group-hover/metric:scale-110 transition-transform">{project.metrics.developmentComplete}</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/30 hover:border-purple-500/40 transition-all duration-300 hover:scale-105 group/metric">
            <div className="text-xs text-gray-500 mb-1 group-hover/metric:text-gray-400 transition-colors">Capital Needed</div>
            <div className="text-sm font-bold text-purple-400 group-hover/metric:scale-110 transition-transform">{project.metrics.capitalNeeded}</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/30 hover:border-orange-500/40 transition-all duration-300 hover:scale-105 group/metric">
            <div className="text-xs text-gray-500 mb-1 group-hover/metric:text-gray-400 transition-colors">Time to Revenue</div>
            <div className="text-sm font-bold text-orange-400 group-hover/metric:scale-110 transition-transform">{project.metrics.timeToRevenue}</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/30 hover:border-green-500/40 transition-all duration-300 hover:scale-105 group/metric">
            <div className="text-xs text-gray-500 mb-1 group-hover/metric:text-gray-400 transition-colors">Proj. Year 3 ARR</div>
            <div className="text-sm font-bold text-green-400 group-hover/metric:scale-110 transition-transform">{project.metrics.projectedYear3ARR}</div>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.metrics.techStack.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-xs px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full border border-gray-700/50 hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-gray-800/80 transition-all duration-300 hover:scale-110 cursor-default">
              {tech}
            </span>
          ))}
          {project.metrics.techStack.length > 3 && (
            <span className="text-xs px-3 py-1 bg-gray-800/50 text-gray-500 rounded-full border border-gray-700/50 hover:border-purple-500/50 hover:text-purple-400 transition-all duration-300 hover:scale-110 cursor-default">
              +{project.metrics.techStack.length - 3} more
            </span>
          )}
        </div>

        {/* Unique Value */}
        <div className="mb-4">
          <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Unique Value</div>
          <p className="text-sm text-gray-300 line-clamp-2">
            {project.uniqueValue}
          </p>
        </div>

        {/* Highlights */}
        <div>
          <div className="text-xs text-gray-500 mb-2 uppercase tracking-wide">Key Highlights</div>
          <ul className="space-y-1">
            {project.highlights.slice(0, 2).map((highlight, i) => (
              <li key={i} className="text-xs text-gray-400 flex items-start gap-2">
                <span className="text-cyan-500 mt-0.5">•</span>
                <span className="line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

          {/* Hover indicator */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300">
            <div className="flex items-center gap-2 text-xs text-cyan-400">
              <span className="font-semibold">View Details</span>
              <svg className="w-4 h-4 group-hover:animate-bounce-slow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Link>
  );
}
