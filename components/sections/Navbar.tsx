'use client';

import { useState, useEffect } from 'react';
import Container from '../ui/Container';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-2 md:py-3' : 'py-4 md:py-6'
    }`}>
      <Container>
        {/* Capsule Pill Container */}
        <div className={`relative mx-auto max-w-7xl rounded-full transition-all duration-500 ${
          scrolled
            ? 'bg-zinc-900/95 backdrop-blur-xl border border-zinc-800/60 shadow-xl shadow-zinc-950/60'
            : 'bg-zinc-900/50 backdrop-blur-md border border-zinc-800/30'
        }`}>
          <div className={`flex justify-between items-center px-6 transition-all duration-500 ${
            scrolled ? 'py-2.5' : 'py-4'
          }`}>
            {/* Logo with Icon */}
            <div className="flex items-center gap-3 group">
              <a href="/" className="flex items-center gap-3">
                {/* Infinity-like Icon */}
                <div className={`relative transition-all duration-500 ${scrolled ? 'w-6 h-6' : 'w-8 h-8'}`}>
                  <svg className={`text-primary-500 group-hover:text-primary-400 transition-all duration-500 ${scrolled ? 'w-6 h-6' : 'w-8 h-8'}`} viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className={`text-white group-hover:text-primary-400 transition-all duration-500 ${
                  scrolled ? 'text-lg' : 'text-xl'
                }`}>
                  ScaleNodes
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {['Features', 'How It Works', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="px-4 py-2 text-zinc-400 hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <button className="relative px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white rounded-full transition-all duration-300 shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-105">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block h-0.5 w-full bg-zinc-300 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-zinc-300 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block h-0.5 w-full bg-zinc-300 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 py-4 space-y-3 border-t border-zinc-800/30">
              {['Features', 'How It Works', 'Pricing', 'Testimonials', 'FAQ'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                  className="block px-4 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button className="w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-full">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
}
