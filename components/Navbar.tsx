import React, { useState } from 'react';
import { Menu, X, Zap } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigateHome?: () => void; // Optional because detail view has its own back button
}

const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigateHome }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (onNavigateHome) {
      onNavigateHome();
      // Wait a tick for state update before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-brand-black/80 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div 
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => onNavigateHome && onNavigateHome()}
          >
            <div className="relative group">
               <Zap className="w-8 h-8 text-brand-cyan group-hover:text-white transition-colors" />
               <div className="absolute inset-0 blur-sm bg-brand-cyan/50 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            
            <span className="text-2xl font-bold font-sans tracking-tighter text-white">
              DINO <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-cyan">KILLERS</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="hover:text-brand-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium">Portfolio</a>
              <a href="#mission" onClick={(e) => handleNavClick(e, 'mission')} className="hover:text-brand-cyan transition-colors px-3 py-2 rounded-md text-sm font-medium">Mission</a>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="hover:text-brand-purple transition-colors px-3 py-2 rounded-md text-sm font-medium">Arsenal</a>
              <a href="#agent" onClick={(e) => handleNavClick(e, 'agent')} className="hover:text-white transition-colors px-3 py-2 rounded-md text-sm font-medium text-gray-400">Consult Agent</a>
              <button 
                onClick={onOpenContact}
                className="bg-white text-black hover:bg-brand-cyan hover:text-white transition-all duration-300 px-4 py-2 rounded-full font-bold text-sm"
              >
                Launch Project
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass-panel border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Portfolio</a>
            <a href="#mission" onClick={(e) => handleNavClick(e, 'mission')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Mission</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Arsenal</a>
            <a href="#agent" onClick={(e) => handleNavClick(e, 'agent')} className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Consult Agent</a>
            <button 
              onClick={() => { setIsOpen(false); onOpenContact(); }}
              className="text-brand-cyan hover:text-white block px-3 py-2 rounded-md text-base font-bold"
            >
              Launch Project
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;