'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-dark-card/80 backdrop-blur-xl border-b border-gray-800 shadow-lg sticky top-0 z-50 animate-fadeIn">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent hover:from-primary-300 hover:to-accent-300 transition-all">
              ScaleNodes
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
              About
            </a>
            <a href="#faq" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
              FAQ
            </a>
            <a href="#docs" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
              Docs
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
              Sign In
            </button>
            <Button size="sm" variant="primary" className="bg-primary-600 hover:bg-primary-700 shadow-lg">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 animate-fadeIn">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
                Features
              </a>
              <a href="#pricing" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
                Pricing
              </a>
              <a href="#about" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
                About
              </a>
              <a href="#faq" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
                FAQ
              </a>
              <a href="#docs" className="text-gray-300 hover:text-primary-400 font-medium transition-colors">
                Docs
              </a>
              <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
                <button className="text-gray-300 hover:text-primary-400 font-medium text-left transition-colors">
                  Sign In
                </button>
                <Button size="md" variant="primary" className="w-full bg-primary-600 hover:bg-primary-700">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
