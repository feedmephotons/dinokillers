import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AgentChat from './components/AgentChat';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ProjectDetail from './components/ProjectDetail';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-purple/30 selection:text-brand-cyan">
      <Navbar onOpenContact={handleOpenContact} />
      
      <Routes>
        <Route path="/" element={
          <main>
            <Hero onOpenContact={handleOpenContact} />
            <div className="relative z-20 -mt-20 bg-brand-dark rounded-t-3xl border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
              <Portfolio />
              <Mission />
              <Services />
              <AgentChat />
            </div>
            <Footer onOpenContact={handleOpenContact} />
          </main>
        } />
        
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>

      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
};

export default App;