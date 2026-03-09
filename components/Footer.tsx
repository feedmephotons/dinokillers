import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-brand-black pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 tracking-tighter">
              DINO <span className="text-brand-cyan">KILLERS</span>
            </h3>
            <p className="text-gray-500 max-w-md mb-6">
              Custom software, AI integration, and digital strategy for businesses ready to leave the dinosaur age behind.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-purple transition-colors"><Github className="w-5 h-5" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-cyan transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><Link to="/about" className="hover:text-brand-cyan transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-brand-cyan transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-brand-cyan transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-brand-cyan transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li><Link to="/contact" className="hover:text-brand-purple transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-brand-purple transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">&copy; {new Date().getFullYear()} Dino Killers. All rights reserved.</p>
          <p className="text-gray-600 text-sm">Southwest Florida</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
