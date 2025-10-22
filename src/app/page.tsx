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
            <div className="mb-12 animate-fade-in">
              {/* Dino Killers Logo */}
              <div className="flex justify-center">
                <div className="relative w-80 h-80 md:w-[32rem] md:h-[32rem] animate-float">
                  <Image
                    src="/logos/dk-logo-alpha.png"
                    alt="Dino Killers Logo"
                    width={512}
                    height={512}
                    className="w-full h-full object-contain drop-shadow-2xl"
                    priority
                  />
                  {/* Glow ring around logo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-orange-500/20 blur-3xl animate-pulse" />
                </div>
              </div>
            </div>

            <h1 className="text-2xl md:text-3xl mb-4 font-light tracking-wide animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <span className="gradient-text font-semibold">Roll-Up Acceleration Platform</span>
              <span className="text-gray-300"> - $10M PE Investment Opportunity</span>
            </h1>

            <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-6">
              {portfolioStats.investmentThesis}
            </p>

            {/* Proven Revenue Callout */}
            <div className="max-w-4xl mx-auto mb-6 glass-strong rounded-xl p-6 relative overflow-hidden animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              {/* Animated gradient border effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-500/30 via-green-500/10 to-green-500/30 animate-gradient" />
              <div className="absolute inset-[1px] bg-gray-900/80 rounded-xl" />

              <div className="relative text-center">
                <div className="text-sm text-green-400 font-semibold mb-3 uppercase tracking-wide animate-shimmer bg-gradient-to-r from-transparent via-green-400/40 to-transparent">
                  Proven Operators, Not Just Developers
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">{portfolioStats.provenRevenue}</div>
                    <div className="text-xs text-gray-400">Annual Roofing Revenue</div>
                  </div>
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-green-400 mb-1 group-hover:scale-110 transition-transform">{portfolioStats.provenSoftwareRevenue}</div>
                    <div className="text-xs text-gray-400">Generated Using Our Software</div>
                  </div>
                  <div className="group hover:scale-105 transition-transform duration-300">
                    <div className="text-3xl font-bold text-cyan-400 mb-1 group-hover:text-green-400 transition-colors">{portfolioStats.hoaContacts}</div>
                    <div className="text-xs text-gray-400">Proprietary HOA Contacts</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="inline-block glass rounded-lg px-6 py-2 border border-orange-500/30 hover:border-orange-500/60 transition-all duration-300 hover:scale-105 animate-bounce-slow">
                <span className="text-orange-400 font-semibold">⚡ {portfolioStats.urgencyWindow} before competitive windows close</span>
              </div>
              <div className="inline-block glass rounded-lg px-6 py-2 border border-cyan-500/30 hover:border-cyan-500/60 transition-all duration-300 hover:scale-105">
                <span className="text-cyan-400 font-semibold">{portfolioStats.averageDevelopmentComplete} Average Development Complete</span>
              </div>
            </div>
          </div>

          {/* Portfolio Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
            <div className="group relative bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 glass rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 rounded-xl transition-all duration-500" />
              <div className="relative">
                <div className="text-4xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">{portfolioStats.totalProjects}</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Products Ready to Launch</div>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-purple-500/10 to-purple-500/5 glass rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 rounded-xl transition-all duration-500" />
              <div className="relative">
                <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">{portfolioStats.totalCapitalNeeded}</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Total Capital Needed</div>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-orange-500/10 to-orange-500/5 glass rounded-xl p-6 border border-orange-500/20 hover:border-orange-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 rounded-xl transition-all duration-500" />
              <div className="relative">
                <div className="text-4xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">{portfolioStats.projectedTotalYear3ARR}</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Projected Year 3 ARR</div>
              </div>
            </div>
            <div className="group relative bg-gradient-to-br from-green-500/10 to-green-500/5 glass rounded-xl p-6 border border-green-500/20 hover:border-green-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 rounded-xl transition-all duration-500" />
              <div className="relative">
                <div className="text-4xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">{portfolioStats.potentialCombinedValuation.split(' ')[0]}</div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Potential Valuation</div>
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="mb-8 text-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
            <h2 className="text-4xl font-bold mb-2">
              <span className="gradient-text">Portfolio Projects</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Comprehensive analysis of each platform with market viability, technical assessment, and investment potential</p>
            {/* Decorative line */}
            <div className="mt-4 flex justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-orange-500 rounded-full animate-gradient" />
            </div>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Additional Stats */}
          <div className="mt-16 mb-12">
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="gradient-text">Why This is NOT Traditional Venture Capital</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="group glass rounded-xl p-6 border border-gray-800/50 hover:border-cyan-500/50 text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/5 rounded-xl transition-all duration-500" />
                <div className="relative">
                  <div className="text-3xl font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">{portfolioStats.totalLinesOfCode}</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Lines of Production Code</div>
                  <div className="text-xs text-gray-600 group-hover:text-gray-500 mt-1 transition-colors">Technical risk eliminated</div>
                </div>
              </div>
              <div className="group glass rounded-xl p-6 border border-gray-800/50 hover:border-purple-500/50 text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/5 rounded-xl transition-all duration-500" />
                <div className="relative">
                  <div className="text-3xl font-bold text-purple-400 mb-2 group-hover:scale-110 transition-transform duration-300">{portfolioStats.averageTimeToRevenue}</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Time to Market</div>
                  <div className="text-xs text-gray-600 group-hover:text-gray-500 mt-1 transition-colors">Launch window, not development</div>
                </div>
              </div>
              <div className="group glass rounded-xl p-6 border border-gray-800/50 hover:border-orange-500/50 text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/5 rounded-xl transition-all duration-500" />
                <div className="relative">
                  <div className="text-3xl font-bold text-orange-400 mb-2 group-hover:scale-110 transition-transform duration-300">{portfolioStats.projectedAverageGrossMargin}</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Projected Gross Margin</div>
                  <div className="text-xs text-gray-600 group-hover:text-gray-500 mt-1 transition-colors">SaaS-typical economics</div>
                </div>
              </div>
              <div className="group glass rounded-xl p-6 border border-gray-800/50 hover:border-green-500/50 text-center transition-all duration-500 hover:scale-105 hover:-translate-y-2 cursor-pointer">
                <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 rounded-xl transition-all duration-500" />
                <div className="relative">
                  <div className="text-3xl font-bold text-green-400 mb-2 group-hover:scale-110 transition-transform duration-300">{portfolioStats.projectedAverageLTV_CAC}</div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">Projected LTV:CAC Ratio</div>
                  <div className="text-xs text-gray-600 group-hover:text-gray-500 mt-1 transition-colors">Based on market comps</div>
                </div>
              </div>
            </div>
          </div>

          {/* The Strategy */}
          <div className="mt-12 max-w-5xl mx-auto glass-strong rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-500 relative overflow-hidden group">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-cyan-500/10 to-orange-500/20 animate-gradient opacity-50" />
            <div className="absolute inset-[1px] bg-gray-900/90 rounded-2xl" />

            <div className="relative">
              <h3 className="text-3xl font-bold text-center mb-6">
                <span className="gradient-text">The Strategy: Roll-Up Acceleration Platform</span>
              </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
              <div>
                <div className="text-lg font-semibold text-purple-400 mb-3">Traditional PE Roll-Up:</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
                    <span>Buy companies one by one</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
                    <span>Each acquisition expensive and slow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
                    <span>No operational synergies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500">•</span>
                    <span>Standard 3-5x returns</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-lg font-semibold text-green-400 mb-3">Dino Killers Enhanced Model:</div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>HOA Hunter finds targets faster</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Software increases margins across portfolio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>New revenue streams + processing fees</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500">✓</span>
                    <span>Enhanced returns: 10-20x possible</span>
                  </li>
                </ul>
              </div>
            </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400 italic">
                  &ldquo;We built the products. You build the companies. Let&apos;s move fast and capture markets before they close.&rdquo;
                </p>
              </div>
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
