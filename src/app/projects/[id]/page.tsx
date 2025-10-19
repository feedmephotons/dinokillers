import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProjectById, projects } from '@/data/projects';

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

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
    <div className="relative min-h-screen overflow-hidden bg-black">
      {/* Animated background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10 blur-sm"
          style={{
            backgroundImage: 'url(/logos/dk-logo.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95" />
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen p-8 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>

          {/* Header */}
          <div className="mb-12">
            <div className="flex items-start gap-6 mb-6">
              {/* Logo */}
              <div className="w-24 h-24 rounded-2xl bg-gray-800/50 p-3 flex items-center justify-center border border-gray-700/50">
                <Image
                  src={project.logo}
                  alt={`${project.name} logo`}
                  width={96}
                  height={96}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Title & Status */}
              <div className="flex-1">
                <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
                  {project.name}
                </h1>
                <p className="text-2xl text-gray-300 mb-3 font-light">{project.tagline}</p>
                <div className="flex items-center gap-3">
                  <span className={`text-sm px-3 py-1 rounded-full border ${statusColors[project.status]}`}>
                    {project.status.toUpperCase()}
                  </span>
                  <span className={`text-lg font-bold ${gradeColors[project.investmentGrade as keyof typeof gradeColors] || 'text-gray-400'}`}>
                    Investment Grade: {project.investmentGrade}
                  </span>
                  <span className="text-gray-400">|</span>
                  <span className="text-cyan-400 font-semibold">{project.website}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-sm text-gray-400 mb-2">Development Complete</div>
              <div className="text-3xl font-bold text-cyan-400">{project.metrics.developmentComplete}</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-sm text-gray-400 mb-2">Capital Needed</div>
              <div className="text-3xl font-bold text-purple-400">{project.metrics.capitalNeeded}</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <div className="text-sm text-gray-400 mb-2">Time to Revenue</div>
              <div className="text-3xl font-bold text-orange-400">{project.metrics.timeToRevenue}</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <div className="text-sm text-gray-400 mb-2">Projected Year 3 ARR</div>
              <div className="text-3xl font-bold text-green-400">{project.metrics.projectedYear3ARR}</div>
            </div>
          </div>

          {/* Screenshots */}
          {project.screenshots && project.screenshots.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">Product Screenshots</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.screenshots.map((screenshot, index) => (
                  <div key={index} className="rounded-xl overflow-hidden border border-gray-800/50 hover:border-cyan-500/50 transition-colors">
                    <Image
                      src={screenshot}
                      alt={`${project.name} screenshot ${index + 1}`}
                      width={800}
                      height={600}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Two Column Layout for Details */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Unique Value Proposition */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
                <h2 className="text-2xl font-bold text-white mb-4">Unique Value Proposition</h2>
                <p className="text-gray-300 leading-relaxed">{project.uniqueValue}</p>
              </div>

              {/* Target Market */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
                <h2 className="text-2xl font-bold text-white mb-4">Target Market</h2>
                <p className="text-gray-300 leading-relaxed">{project.targetMarket}</p>
              </div>

              {/* Tech Stack */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
                <h2 className="text-2xl font-bold text-white mb-4">Technology Stack</h2>
                <div className="flex flex-wrap gap-2">
                  {project.metrics.techStack.map((tech, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50 text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-800/50">
                  <div className="text-sm text-gray-400">Lines of Code</div>
                  <div className="text-xl font-bold text-cyan-400">{project.metrics.linesOfCode}</div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Key Highlights */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
                <h2 className="text-2xl font-bold text-white mb-4">Key Highlights</h2>
                <ul className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-3">
                      <span className="text-cyan-500 mt-1 text-xl">✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Risk Factors */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
                <h2 className="text-2xl font-bold text-orange-400 mb-4">Risk Factors</h2>
                <ul className="space-y-3">
                  {project.risks.map((risk, i) => (
                    <li key={i} className="text-gray-300 flex items-start gap-3">
                      <span className="text-orange-500 mt-1">⚠</span>
                      <span>{risk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Competitors */}
              <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50">
                <h2 className="text-2xl font-bold text-white mb-4">Competitive Landscape</h2>
                <div className="flex flex-wrap gap-2">
                  {project.competitors.map((competitor, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-800/50 text-gray-400 rounded-lg border border-gray-700/50 text-sm">
                      {competitor}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Investment Metrics */}
          <div className="bg-gradient-to-br from-gray-900/40 to-gray-900/20 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Investment Metrics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-sm text-gray-400 mb-2">Total Addressable Market</div>
                <div className="text-xl font-bold text-cyan-400">{project.metrics.tam}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Potential Valuation</div>
                <div className="text-xl font-bold text-purple-400">{project.metrics.potentialValuation}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Projected Gross Margin</div>
                <div className="text-xl font-bold text-orange-400">{project.metrics.projectedGrossMargin}</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-2">Projected LTV:CAC</div>
                <div className="text-xl font-bold text-green-400">{project.metrics.projectedLTV_CAC}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
