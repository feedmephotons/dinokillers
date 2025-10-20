import Image from 'next/image';
import { projects, portfolioStats } from '@/data/projects';
import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background logo */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-15 blur-sm"
          style={{
            backgroundImage: 'url(/logos/dk-logo.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95" />

        {/* Animated grid pattern */}
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
        <main className="max-w-[1600px] mx-auto">
          {/* Hero section */}
          <div className="text-center mb-16">
            <div className="mb-8 animate-fade-in">
              {/* Square Logo */}
              <div className="flex justify-center mb-8">
                <div className="relative w-48 h-48 md:w-64 md:h-64">
                  <Image
                    src="/logos/dk-logo square.png"
                    alt="Dino Killers Logo"
                    width={256}
                    height={256}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                  />
                </div>
              </div>

              <h1 className="text-7xl md:text-8xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
                  DINO KILLERS
                </span>
              </h1>
              <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8" />
            </div>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light tracking-wide">
              Venture Studio Portfolio - Pre-Launch Investment Opportunity
            </p>

            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-6">
              {portfolioStats.investmentThesis}
            </p>

            <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-6 py-2 mb-4">
              <span className="text-cyan-400 font-semibold">Portfolio: {portfolioStats.averageDevelopmentComplete} Average Development Complete</span>
            </div>
          </div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20">
              <div className="text-4xl font-bold text-cyan-400 mb-2">{portfolioStats.totalProjects}</div>
              <div className="text-sm text-gray-400">Products Ready to Launch</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-purple-500/5 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
              <div className="text-4xl font-bold text-purple-400 mb-2">{portfolioStats.totalCapitalNeeded}</div>
              <div className="text-sm text-gray-400">Total Capital Needed</div>
            </div>
            <div className="bg-gradient-to-br from-orange-500/10 to-orange-500/5 backdrop-blur-sm rounded-xl p-6 border border-orange-500/20">
              <div className="text-4xl font-bold text-orange-400 mb-2">{portfolioStats.projectedTotalYear3ARR}</div>
              <div className="text-sm text-gray-400">Projected Year 3 ARR</div>
            </div>
            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 backdrop-blur-sm rounded-xl p-6 border border-green-500/20">
              <div className="text-4xl font-bold text-green-400 mb-2">{portfolioStats.potentialCombinedValuation.split(' ')[0]}</div>
              <div className="text-sm text-gray-400">Potential Valuation</div>
            </div>
          </div>

          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-white mb-2">Portfolio Projects</h2>
            <p className="text-gray-400">Comprehensive analysis of each platform with market viability, technical assessment, and investment potential</p>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Additional Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{portfolioStats.totalLinesOfCode}</div>
              <div className="text-sm text-gray-400">Lines of Production Code</div>
              <div className="text-xs text-gray-600 mt-1">Technical de-risking complete</div>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{portfolioStats.averageTimeToRevenue}</div>
              <div className="text-sm text-gray-400">Avg. Time to Revenue</div>
              <div className="text-xs text-gray-600 mt-1">Post-funding launch timeline</div>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">{portfolioStats.projectedAverageGrossMargin}</div>
              <div className="text-sm text-gray-400">Projected Gross Margin</div>
              <div className="text-xs text-gray-600 mt-1">SaaS-typical economics</div>
            </div>
            <div className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">{portfolioStats.projectedAverageLTV_CAC}</div>
              <div className="text-sm text-gray-400">Projected LTV:CAC Ratio</div>
              <div className="text-xs text-gray-600 mt-1">Based on market comps</div>
            </div>
          </div>
        </main>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
    </div>
  );
}
