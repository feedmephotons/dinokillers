import React, { useState, useEffect } from 'react';
import { X, Send, Terminal, Cpu, ShieldCheck, AlertCircle } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  // Handle entrance/exit animations
  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      document.body.style.overflow = 'hidden'; // Lock scroll
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300); // Wait for exit animation
      document.body.style.overflow = 'unset';
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isVisible && !isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    // Simulate network request
    setTimeout(() => {
      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', email: '', message: '' });
      }, 2000);
    }, 1500);
  };

  return (
    <div 
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-all duration-300 ${isOpen ? 'opacity-100 backdrop-blur-md bg-black/80' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    >
      {/* Scanning Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="w-full h-[200%] bg-[linear-gradient(transparent_0%,#06b6d4_50%,transparent_100%)] bg-[length:100%_4px] animate-[float_4s_linear_infinite] opacity-20"></div>
      </div>

      <div 
        className={`
          relative w-full max-w-2xl mx-4 transform transition-all duration-500 ease-out
          ${isOpen ? 'scale-100 translate-y-0 rotate-0' : 'scale-95 translate-y-10 rotate-2'}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cyberpunk Container Shape */}
        <div 
          className="relative bg-brand-black border-l-4 border-brand-cyan shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden"
          style={{
            clipPath: 'polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px)'
          }}
        >
          {/* Scanner Bar Animation */}
          <div className="absolute top-0 left-0 w-full h-1 bg-brand-cyan/50 shadow-[0_0_20px_#06b6d4] animate-[scan_3s_ease-in-out_infinite] z-20 pointer-events-none"></div>

          {/* Header Section */}
          <div className="bg-white/5 p-6 border-b border-white/10 flex justify-between items-start relative">
            <div>
              <div className="flex items-center gap-2 mb-1">
                 <Terminal className="w-5 h-5 text-brand-purple" />
                 <span className="font-mono text-xs text-brand-purple tracking-widest">SECURE_UPLINK_ESTABLISHED</span>
              </div>
              <h2 className="text-3xl font-bold text-white tracking-tighter">
                INITIATE <span className="text-brand-cyan">PROTOCOL</span>
              </h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Decorative corner bits */}
            <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-white/10 pointer-events-none"></div>
          </div>

          {/* Form Content */}
          <div className="p-8 relative bg-grid-white/[0.02]">
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center animate-pulse">
                <ShieldCheck className="w-20 h-20 text-green-500 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">TRANSMISSION RECEIVED</h3>
                <p className="text-gray-400 font-mono">Our agents are analyzing your signal.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="group">
                  <label className="block text-xs font-mono text-brand-cyan mb-2 ml-1">IDENTIFIER_KEY (NAME)</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-0 w-1 h-full bg-brand-purple transition-all group-focus-within:h-full h-0 top-0"></div>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black/50 border-b border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:bg-brand-cyan/5 transition-all font-mono placeholder-gray-700"
                      placeholder="ENTER_ID"
                    />
                    <Cpu className="absolute right-3 w-4 h-4 text-gray-600 group-focus-within:text-brand-cyan" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs font-mono text-brand-cyan mb-2 ml-1">DIGITAL_COORDINATES (EMAIL)</label>
                  <div className="relative flex items-center">
                    <div className="absolute left-0 w-1 h-full bg-brand-purple transition-all group-focus-within:h-full h-0 top-0"></div>
                    <input 
                      type="email" 
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-black/50 border-b border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:bg-brand-cyan/5 transition-all font-mono placeholder-gray-700"
                      placeholder="USER@DOMAIN.COM"
                    />
                    <AlertCircle className="absolute right-3 w-4 h-4 text-gray-600 group-focus-within:text-brand-cyan" />
                  </div>
                </div>

                <div className="group">
                  <label className="block text-xs font-mono text-brand-cyan mb-2 ml-1">MISSION_PARAMETERS (MESSAGE)</label>
                  <div className="relative">
                    <div className="absolute left-0 w-1 h-full bg-brand-purple transition-all group-focus-within:h-full h-0 top-0"></div>
                    <textarea 
                      required
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full bg-black/50 border-b border-white/20 px-4 py-3 text-white focus:outline-none focus:border-brand-cyan focus:bg-brand-cyan/5 transition-all font-mono placeholder-gray-700 resize-none"
                      placeholder="DESCRIBE THE TARGET..."
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full group relative overflow-hidden bg-white/5 border border-brand-cyan/30 p-4 flex items-center justify-center gap-3 hover:bg-brand-cyan hover:border-brand-cyan transition-all duration-300"
                >
                  <span className="relative z-10 font-bold tracking-widest text-white flex items-center gap-2">
                    {status === 'sending' ? 'ENCRYPTING...' : 'EXECUTE TRANSMISSION'}
                    <Send className={`w-4 h-4 ${status === 'sending' ? 'animate-ping' : ''}`} />
                  </span>
                  {status !== 'sending' && (
                    <div className="absolute inset-0 bg-brand-cyan transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                  )}
                </button>

              </form>
            )}

            {/* Footer Tech Stats */}
            <div className="mt-8 flex justify-between items-end text-[10px] font-mono text-gray-600 border-t border-white/5 pt-4">
              <div>
                <p>ENCRYPTION: AES-256</p>
                <p>LATENCY: 12ms</p>
              </div>
              <div className="text-right">
                <p>SERVER: V-REX_NODE_01</p>
                <p className="text-brand-cyan animate-pulse">STATUS: ONLINE</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation Keyframes specifically for this component */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default ContactModal;
