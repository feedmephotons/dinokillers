import React from 'react';
import { Target, Flame, Activity } from 'lucide-react';
import GenImage from './GenImage';

const Mission: React.FC = () => {
  return (
    <section id="mission" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-purple to-brand-cyan rounded-2xl blur-lg opacity-30"></div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <GenImage 
                type="img"
                prompt="Cinematic wide shot of a neon glowing meteor striking a dusty old computer mainframe server room, purple and cyan explosion particles, dramatic lighting, hyperrealistic, 8k, cyberpunk style"
                alt="The Extinction Event"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 to-transparent">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-cyan">
                  <Activity className="w-4 h-4" />
                  <span>SIMULATION: IMPACT_CONFIRMED</span>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 mb-6">
              <Flame className="w-6 h-6 text-red-500" />
              <span className="text-brand-purple font-mono font-bold tracking-widest uppercase text-sm">The Extinction Event</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Stop Feeding the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">Dinosaurs</span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Traditional software agencies love legacy code. It pays the bills. They patch it, nurse it, and charge you hourly to keep the beast on life support.
            </p>
            
            <p className="text-white text-lg mb-8 font-light border-l-2 border-brand-cyan pl-6">
              We take a different approach. We are the meteor. We identify the inefficient, bloat-heavy monoliths in your stack and replace them with agile, intelligent micro-agents.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-white mb-1 flex items-center gap-2">
                  <Target className="w-4 h-4 text-brand-cyan" />
                  Precision Strikes
                </h3>
                <p className="text-sm text-gray-500">Targeted refactoring that doesn't halt your business.</p>
              </div>
              <div className="bg-white/5 border border-white/5 p-4 rounded-lg hover:bg-white/10 transition-colors">
                <h3 className="font-bold text-white mb-1 flex items-center gap-2">
                  <Target className="w-4 h-4 text-brand-purple" />
                  Rapid Evolution
                </h3>
                <p className="text-sm text-gray-500">Generative UI & Backend-as-Code for instant scaling.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Mission;