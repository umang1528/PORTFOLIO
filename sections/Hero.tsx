import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const Hero: React.FC = () => {
  return (
    <AnimatedSection className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-brand-dark via-brand-card to-brand-primary/30 text-center px-4 pt-20 md:pt-0" animationType="none">
      <div className="max-w-3xl z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="block text-brand-foreground">Designing Spaces.</span>
          <span className="block text-brand-accent animate-slide-in-right delay-200">Crafting Experiences.</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-foreground-muted mb-10 animate-fade-in-up delay-400">
          Innovative Interior & Graphic Design solutions that blend aesthetics with functionality.
          Let's create something extraordinary together.
        </p>
        <div className="space-x-4 animate-fade-in-up delay-600">
          <Link 
            to="/portfolio" 
            data-cursor-interactive="true"
            className="bg-brand-primary hover:opacity-80 text-brand-button-text font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
          >
            View My Work
          </Link>
          <Link 
            to="/contact" 
            data-cursor-interactive="true"
            className="bg-transparent hover:bg-brand-card/50 text-brand-accent font-semibold py-3 px-8 rounded-lg border-2 border-brand-accent hover:border-brand-primary/70 transform hover:scale-105 transition-all duration-300 text-lg"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      {/* Subtle background blur elements - these can use theme colors too */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-brand-primary/10 rounded-full filter blur-3xl animate-subtle-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full filter blur-3xl animate-subtle-pulse animation-delay-2000"></div>
      </div>
    </AnimatedSection>
  );
};

export default Hero;