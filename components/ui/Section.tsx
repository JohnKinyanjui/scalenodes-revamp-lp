import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'gradient';
}

export default function Section({ children, className = '', background = 'white' }: SectionProps) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    primary: 'bg-primary-50',
    gradient: 'bg-gradient-to-br from-primary-50 to-accent-50'
  };

  return (
    <section className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
}
