import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, id, className = '', dark = false }) => {
  return (
    <section id={id} className={`py-20 md:py-28 ${dark ? 'bg-brand-dark' : 'bg-brand-black'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default Section;
