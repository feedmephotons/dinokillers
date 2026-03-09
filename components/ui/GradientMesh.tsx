import React from 'react';

const GradientMesh: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-brand-purple/8 rounded-full blur-[120px] animate-pulse-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-brand-cyan/6 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
    </div>
  );
};

export default GradientMesh;
