import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Trash2 } from 'lucide-react';
import { sendMessageToAgent } from '../services/geminiService';

interface Message {
  id: string;
  role: 'user' | 'agent';
  text: string;
}

const AgentChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'agent', text: "I am V-Rex. Paste your legacy code snippet or ask me how to modernize your stack. I don't bite... much." }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToAgent(userMessage.text);
    
    const agentMessage: Message = { 
      id: (Date.now() + 1).toString(), 
      role: 'agent', 
      text: responseText 
    };
    
    setMessages(prev => [...prev, agentMessage]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <section id="agent" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-50"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-white">CONSULT THE <span className="text-brand-purple">ORACLE</span></h2>
          <p className="text-gray-400">Talk to our AI Architect. Be warned: it has opinions.</p>
        </div>

        <div className="bg-black/80 border border-brand-purple/30 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(139,92,246,0.15)] backdrop-blur-xl flex flex-col h-[600px]">
          {/* Terminal Header */}
          <div className="bg-white/5 px-4 py-3 border-b border-white/5 flex items-center justify-between">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs font-mono text-gray-500">v-rex_agent.exe</div>
            <button 
              onClick={() => setMessages([])}
              className="text-gray-500 hover:text-red-400 transition-colors"
              title="Clear Chat"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 font-mono text-sm">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'agent' ? 'bg-brand-purple/20 text-brand-purple border border-brand-purple/50' : 'bg-gray-800 text-gray-300'}`}>
                  {msg.role === 'agent' ? <Bot className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>
                <div className={`p-4 rounded-lg max-w-[80%] ${
                  msg.role === 'agent' 
                    ? 'bg-brand-purple/10 border border-brand-purple/20 text-gray-200' 
                    : 'bg-white/5 border border-white/10 text-white'
                }`}>
                  <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-brand-purple/20 text-brand-purple border border-brand-purple/50 flex items-center justify-center">
                  <Bot className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 h-10">
                  <div className="w-2 h-2 bg-brand-purple rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-brand-purple rounded-full animate-bounce animation-delay-200"></div>
                  <div className="w-2 h-2 bg-brand-purple rounded-full animate-bounce animation-delay-400"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white/5 border-t border-white/5">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about legacy migration or paste code..."
                className="flex-1 bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-brand-purple/50 focus:ring-1 focus:ring-brand-purple/50 font-mono transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="bg-brand-purple hover:bg-brand-purple/80 disabled:opacity-50 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg transition-all flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentChat;