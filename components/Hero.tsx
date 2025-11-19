import React from 'react';
import { ArrowRight, Terminal } from 'lucide-react';
import GenImage from './GenImage';

interface HeroProps {
  onOpenContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* AI Generated Background */}
      <div className="absolute inset-0 z-0">
        <GenImage 
          type="background"
          prompt="Abstract cyberpunk digital rain with meteor shower, dark purple and cyan neon lighting, high contrast, 8k, detailed texture, dark void background"
          alt="Hero Background"
          className="w-full h-full"
          overlayOpacity={0.85}
        />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-bg z-0 opacity-40 pointer-events-none"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/20 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
      <div className="absolute top-1/3 -right-20 w-96 h-96 bg-brand-cyan/20 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border border-brand-purple/30 mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-cyan"></span>
          </span>
          <span className="text-xs md:text-sm font-mono text-brand-cyan">SYSTEM STATUS: HUNTING LEGACY CODE</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6">
          <span className="block text-white">EVOLVE OR GO</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple via-fuchsia-500 to-brand-cyan neon-text">
            EXTINCT
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-300 font-light leading-relaxed drop-shadow-lg">
          We are <span className="font-bold text-white">Dino Killers</span>. An agentic software studio that calls down the meteor on your technical debt. 
          Stop maintaining fossils. Start building the future.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <button 
            onClick={onOpenContact}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-bold text-black transition-all duration-200 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-cyan hover:bg-brand-cyan hover:scale-105"
          >
            <Terminal className="w-5 h-5 mr-2" />
            Deploy Agents
            <div className="absolute inset-0 rounded-full ring-2 ring-white/50 group-hover:ring-brand-cyan/50 animate-pulse"></div>
          </button>
          <a href="#mission" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-transparent border border-white/20 rounded-full hover:bg-white/5 hover:border-white/50 backdrop-blur-sm">
            Our Philosophy
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
        </div>
      </div>
      
      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none z-20"></div>
    </section>
  );
};

export default Hero;
