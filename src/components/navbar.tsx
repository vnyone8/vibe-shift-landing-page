
import { useState } from 'react';
import { ButtonCTA } from './ui/button-cta';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-causal-blue-dark/80 backdrop-blur-md border-b border-causal-blue-light/30">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-causal-text flex items-center">
          CAUSALITY
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-causal-text-secondary hover:text-causal-text transition-colors">Features</a>
          <a href="#benefits" className="text-causal-text-secondary hover:text-causal-text transition-colors">Benefits</a>
          <a href="#about" className="text-causal-text-secondary hover:text-causal-text transition-colors">About</a>
        </nav>

        <div className="hidden md:block">
          <ButtonCTA variant="default">Get Access</ButtonCTA>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-causal-text"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-causal-blue-dark border-t border-causal-blue-light/30 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a href="#features" className="text-causal-text-secondary hover:text-causal-text transition-colors">Features</a>
            <a href="#benefits" className="text-causal-text-secondary hover:text-causal-text transition-colors">Benefits</a>
            <a href="#about" className="text-causal-text-secondary hover:text-causal-text transition-colors">About</a>
            <ButtonCTA variant="default" className="w-full">Get Access</ButtonCTA>
          </nav>
        </div>
      )}
    </header>
  );
}
