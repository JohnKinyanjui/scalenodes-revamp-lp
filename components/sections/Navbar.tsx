'use client';

import { useState } from 'react';
import Container from '../ui/Container';
import Button from '../ui/Button';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary-600">
              ScaleNodes
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Pricing
            </a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              About
            </a>
            <a href="#faq" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              FAQ
            </a>
            <a href="#docs" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
              Docs
            </a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-gray-700 hover:text-primary-600 font-medium">
              Sign In
            </button>
            <Button size="sm" variant="primary">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg
              className="w-6 h-6 text-gray-700"
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-gray-700 hover:text-primary-600 font-medium">
                Features
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-primary-600 font-medium">
                Pricing
              </a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 font-medium">
                About
              </a>
              <a href="#faq" className="text-gray-700 hover:text-primary-600 font-medium">
                FAQ
              </a>
              <a href="#docs" className="text-gray-700 hover:text-primary-600 font-medium">
                Docs
              </a>
              <div className="pt-4 border-t border-gray-200 flex flex-col gap-3">
                <button className="text-gray-700 hover:text-primary-600 font-medium text-left">
                  Sign In
                </button>
                <Button size="md" variant="primary" className="w-full">
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
