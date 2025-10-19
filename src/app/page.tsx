export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <main className="max-w-7xl w-full">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-orange-500 bg-clip-text text-transparent">
            DINO KILLERS
          </h1>
          <p className="text-xl text-gray-400">
            Innovation Portfolio & Investment Pitch Deck
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project cards will be dynamically generated here */}
          <div className="bg-gray-900/50 rounded-lg p-6 border border-gray-800 hover:border-cyan-500 transition-colors">
            <h3 className="text-xl font-semibold mb-2">Projects Portfolio</h3>
            <p className="text-gray-400">
              Comprehensive analysis of Dino Killers projects including technical stack,
              market viability, and growth metrics.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
