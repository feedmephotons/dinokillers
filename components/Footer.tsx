import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  return (
    <footer className="border-t border-white/10 bg-brand-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter">
              DINO <span className="text-brand-cyan">KILLERS</span>
            </h3>
            <p className="text-gray-500 max-w-md mb-6">
              We don't just update software; we force evolutionary leaps. 
              Stop feeding the dinosaurs in your server room.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-purple transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-brand-cyan transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-brand-cyan cursor-pointer transition-colors">Legacy Audits</li>
              <li className="hover:text-brand-cyan cursor-pointer transition-colors">Cloud Migration</li>
              <li className="hover:text-brand-cyan cursor-pointer transition-colors">AI Agent Integration</li>
              <li className="hover:text-brand-cyan cursor-pointer transition-colors">Staff Augmentation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Manifesto</li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Careers</li>
              <li 
                onClick={onOpenContact}
                className="hover:text-brand-purple cursor-pointer transition-colors"
              >
                Contact
              </li>
              <li className="hover:text-brand-purple cursor-pointer transition-colors">Legal</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Dino Killers Inc. All fossils reserved.</p>
          <div className="flex gap-2 text-xs text-gray-600 font-mono">
             <span>SYSTEM_STATUS: ONLINE</span>
             <span className="text-green-500">●</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
