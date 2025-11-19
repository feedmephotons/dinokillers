import React, { useState, useEffect } from 'react';
import { generateImage } from '../services/geminiService';
import { RefreshCw, Image as ImageIcon } from 'lucide-react';

interface GenImageProps {
  prompt: string;
  alt: string;
  className?: string;
  type: 'background' | 'img';
  overlayOpacity?: number;
}

const GenImage: React.FC<GenImageProps> = ({ prompt, alt, className = "", type, overlayOpacity = 0.5 }) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const storageKey = `dino-img-${prompt.substring(0, 20)}`;

  useEffect(() => {
    // Try to load from local storage first to save tokens/time
    const cached = localStorage.getItem(storageKey);
    if (cached) {
      setImageUrl(cached);
    } else {
      handleGenerate();
    }
  }, [prompt]);

  const handleGenerate = async () => {
    setLoading(true);
    setError(false);
    const url = await generateImage(prompt);
    if (url) {
      setImageUrl(url);
      localStorage.setItem(storageKey, url);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  const RegenerateButton = () => (
    <button 
      onClick={(e) => { e.stopPropagation(); handleGenerate(); }}
      disabled={loading}
      className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-brand-purple/80 backdrop-blur-md p-2 rounded-full text-white transition-all opacity-0 group-hover:opacity-100 border border-white/10"
      title="Regenerate with AI"
    >
      <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
    </button>
  );

  if (loading && !imageUrl) {
    return (
      <div className={`bg-brand-dark animate-pulse flex items-center justify-center ${className}`}>
        <ImageIcon className="w-12 h-12 text-brand-purple/30" />
      </div>
    );
  }

  if (error && !imageUrl) {
    return (
      <div className={`bg-brand-dark flex items-center justify-center flex-col gap-2 ${className}`}>
        <span className="text-red-500 text-xs">Generation Failed</span>
        <button onClick={handleGenerate} className="text-xs underline text-gray-400">Retry</button>
      </div>
    );
  }

  if (type === 'background') {
    return (
      <div className={`relative group w-full h-full overflow-hidden ${className}`}>
        {imageUrl && (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div 
              className="absolute inset-0 bg-brand-black transition-all duration-500"
              style={{ opacity: overlayOpacity }}
            />
          </>
        )}
        <RegenerateButton />
        <div className="relative z-10 h-full w-full">
          {/* Children would go here if this was a wrapper, but currently it's just the BG layer */}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group overflow-hidden ${className}`}>
      {imageUrl && (
        <img 
          src={imageUrl} 
          alt={alt} 
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
      )}
      <RegenerateButton />
    </div>
  );
};

export default GenImage;
