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
        className="group relative bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-md rounded-2xl p-8 border border-gray-800/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden"
        style={{ animationDelay: `${index * 100}ms` }}
      >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-orange-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-orange-500/10 rounded-2xl transition-all duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <div className="w-16 h-16 rounded-xl bg-gray-800/50 p-2 flex items-center justify-center border border-gray-700/50 group-hover:border-cyan-500/50 transition-colors">
              <Image
                src={project.logo}
                alt={`${project.name} logo`}
                width={64}
                height={64}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Name & Status */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                {project.name}
              </h3>
              <div className="flex items-center gap-2">
                <span className={`text-xs px-2 py-1 rounded-full border ${statusColors[project.status]}`}>
                  {project.status.toUpperCase()}
                </span>
                <span className={`text-sm font-bold ${gradeColors[project.investmentGrade as keyof typeof gradeColors] || 'text-gray-400'}`}>
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
          <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/30">
            <div className="text-xs text-gray-500 mb-1">Dev Complete</div>
            <div className="text-sm font-bold text-cyan-400">{project.metrics.developmentComplete}</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/30">
            <div className="text-xs text-gray-500 mb-1">Capital Needed</div>
            <div className="text-sm font-bold text-purple-400">{project.metrics.capitalNeeded}</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/30">
            <div className="text-xs text-gray-500 mb-1">Time to Revenue</div>
            <div className="text-sm font-bold text-orange-400">{project.metrics.timeToRevenue}</div>
          </div>
          <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700/30">
            <div className="text-xs text-gray-500 mb-1">Proj. Year 3 ARR</div>
            <div className="text-sm font-bold text-green-400">{project.metrics.projectedYear3ARR}</div>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.metrics.techStack.slice(0, 3).map((tech, i) => (
            <span key={i} className="text-xs px-3 py-1 bg-gray-800/50 text-gray-400 rounded-full border border-gray-700/50">
              {tech}
            </span>
          ))}
          {project.metrics.techStack.length > 3 && (
            <span className="text-xs px-3 py-1 bg-gray-800/50 text-gray-500 rounded-full border border-gray-700/50">
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
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex items-center gap-2 text-xs text-cyan-400">
            <span>View Details</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}
