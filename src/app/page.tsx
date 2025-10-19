export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated background logo */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20 blur-sm"
          style={{
            backgroundImage: 'url(/logos/dk-logo.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
        <main className="max-w-7xl w-full">
          {/* Splash screen hero section */}
          <div className="text-center mb-20">
            <div className="mb-8 animate-fade-in">
              <h1 className="text-8xl md:text-9xl font-black mb-6 tracking-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent drop-shadow-2xl">
                  DINO KILLERS
                </span>
              </h1>
              <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-8" />
            </div>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light tracking-wide">
              Innovation Portfolio & Investment Deck
            </p>

            <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
              Disrupting industries through cutting-edge technology and strategic execution
            </p>

            {/* Call to action */}
            <div className="flex gap-4 justify-center items-center">
              <div className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-semibold text-lg hover:scale-105 transition-transform cursor-pointer">
                Explore Portfolio
              </div>
              <div className="px-8 py-3 border border-cyan-500/50 rounded-lg font-semibold text-lg hover:border-cyan-500 hover:bg-cyan-500/10 transition-all cursor-pointer">
                View Metrics
              </div>
            </div>
          </div>

          {/* Preview cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {['HOA Hunter', 'HOA Cloud', 'Brandeezy', 'CASO Deep'].map((project, idx) => (
              <div
                key={project}
                className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50 hover:border-cyan-500/50 transition-all hover:scale-105 cursor-pointer group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="h-2 w-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded mb-4 group-hover:w-full transition-all" />
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project}
                </h3>
                <p className="text-gray-500 text-sm">
                  Analysis pending...
                </p>
              </div>
            ))}
          </div>
        </main>
      </div>

      {/* Ambient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}
