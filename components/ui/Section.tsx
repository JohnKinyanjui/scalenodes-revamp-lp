import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'primary' | 'gradient';
  id?: string;
}

export default function Section({ children, className = '', background = 'white', id }: SectionProps) {
  const backgrounds = {
    white: 'bg-zinc-950',
    gray: 'bg-zinc-900',
    primary: 'bg-zinc-950',
    gradient: 'bg-zinc-950'
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${backgrounds[background]} ${className}`}>
      {children}
    </section>
  );
}
