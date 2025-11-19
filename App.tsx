import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import AgentChat from './components/AgentChat';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ProjectDetail from './components/ProjectDetail';
import { Project } from './data/projects';

const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'project'>('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentView('project');
  };

  const handleNavigateHome = () => {
    setCurrentView('home');
    setSelectedProject(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-brand-black text-white font-sans selection:bg-brand-purple/30 selection:text-brand-cyan">
      {currentView === 'home' && (
        <>
          <Navbar onOpenContact={handleOpenContact} onNavigateHome={handleNavigateHome} />
          <main>
            <Hero onOpenContact={handleOpenContact} />
            <div className="relative z-20 -mt-20 bg-brand-dark rounded-t-3xl border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.8)]">
              <Portfolio onSelectProject={handleSelectProject} />
              <Mission />
              <Services />
              <AgentChat />
            </div>
          </main>
          <Footer onOpenContact={handleOpenContact} />
        </>
      )}

      {currentView === 'project' && selectedProject && (
        <ProjectDetail 
          project={selectedProject} 
          onBack={handleNavigateHome}
        />
      )}

      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
};

export default App;