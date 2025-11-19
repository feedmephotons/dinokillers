import React from 'react';
import { Cpu, Skull, Pickaxe, Code2, Boxes, Zap } from 'lucide-react';

const services = [
  {
    title: "The Meteorite Audit",
    description: "We analyze your monolithic codebase to identify extinction-level vulnerabilities and bloat.",
    icon: <Skull className="w-8 h-8 text-red-500" />,
    color: "hover:border-red-500/50 hover:shadow-[0_0_30px_rgba(239,68,68,0.2)]"
  },
  {
    title: "Agentic Evolution",
    description: "Deploying autonomous AI agents that refactor code 24/7, faster than any human team.",
    icon: <Cpu className="w-8 h-8 text-brand-purple" />,
    color: "hover:border-brand-purple/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]"
  },
  {
    title: "Fossil Extraction",
    description: "Migrating critical data from legacy mainframes to modern, distributed cloud architectures.",
    icon: <Pickaxe className="w-8 h-8 text-amber-500" />,
    color: "hover:border-amber-500/50 hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]"
  },
  {
    title: "Full-Stack Mutation",
    description: "Rapid prototyping using generative UI and backend-as-code strategies.",
    icon: <Code2 className="w-8 h-8 text-brand-cyan" />,
    color: "hover:border-brand-cyan/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
  },
  {
    title: "Micro-Service Swarms",
    description: "Breaking down monoliths into intelligent, self-healing micro-service swarms.",
    icon: <Boxes className="w-8 h-8 text-green-500" />,
    color: "hover:border-green-500/50 hover:shadow-[0_0_30px_rgba(34,197,94,0.2)]"
  },
  {
    title: "Velocity Injection",
    description: "Integrating CI/CD pipelines that move at the speed of light, not the speed of bureaucracy.",
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
    color: "hover:border-yellow-400/50 hover:shadow-[0_0_30px_rgba(250,204,21,0.2)]"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 relative bg-brand-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-white">CHOOSE YOUR </span>
            <span className="text-brand-cyan">WEAPON</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our arsenal is designed to obliterate the old world and pave the way for the new.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-8 rounded-2xl bg-white/5 border border-white/5 backdrop-blur-sm transition-all duration-300 ${service.color}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
              
              <div className="relative z-10">
                <div className="mb-6 p-3 bg-black/50 w-fit rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 font-sans">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;