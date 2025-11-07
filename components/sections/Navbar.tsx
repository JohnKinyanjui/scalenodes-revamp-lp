'use client';

import { useState, useEffect } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

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
      scrolled
        ? 'bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-950/90 backdrop-blur-sm border-b border-zinc-800/30'
        : 'bg-transparent'
    }`}>
      <Container>
        <div className="flex justify-between items-center py-6">
          {/* Logo with animated glow */}
          <div className="flex items-center group">
            <a href="/" className="relative">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-accent-400 to-primary-500 bg-clip-text text-transparent animate-gradient bg-300% transition-all duration-300 group-hover:scale-105">
                ScaleNodes
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </a>
          </div>

          {/* Desktop Navigation with animated underlines */}
          <div className="hidden md:flex items-center gap-1">
            {['Features', 'Pricing', 'About', 'FAQ', 'Docs'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative px-4 py-2 text-zinc-400 hover:text-white font-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="relative z-10">{item}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></div>
              </a>
            ))}
          </div>

          {/* Desktop CTA with animated border */}
          <div className="hidden md:flex items-center gap-4">
            <button className="relative px-4 py-2 text-zinc-300 hover:text-white font-medium transition-colors duration-300 group">
              <span>Sign In</span>
              <div className="absolute inset-0 border border-zinc-700/50 rounded-lg group-hover:border-primary-500/50 transition-colors duration-300"></div>
            </button>
            <div className="relative group">
              <Button size="sm" variant="primary" className="relative z-10 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400 shadow-lg shadow-primary-500/20 transition-all duration-300">
                Get Started
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Button>
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-accent-600 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
            </div>
          </div>

          {/* Mobile Menu Button with animated icon */}
          <button
            className="md:hidden p-2 relative group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-zinc-300 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-zinc-300 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-full bg-zinc-300 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Mobile Menu with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-6 space-y-4 border-t border-zinc-800/30">
            {['Features', 'Pricing', 'About', 'FAQ', 'Docs'].map((item, index) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 text-zinc-300 hover:text-white hover:bg-zinc-800/50 rounded-lg font-medium transition-all duration-300 animate-slideInLeft"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <button className="w-full px-4 py-2 text-zinc-300 hover:text-white border border-zinc-700/50 hover:border-primary-500/50 rounded-lg font-medium transition-all duration-300">
                Sign In
              </button>
              <Button size="md" variant="primary" className="w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-primary-400">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </Container>

      {/* Animated gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </nav>
  );
}
