import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAVIGATION_LINKS } from '../constants';
import MenuIcon from './icons/MenuIcon';
import CloseIcon from './icons/CloseIcon';
import ThemeSwitcher from './ThemeSwitcher'; // Import ThemeSwitcher

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false); // Close menu on route change
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-brand-card/90 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-brand-accent hover:opacity-80 transition-opacity"
            data-cursor-interactive="true"
          >
            Designer<span className="text-brand-foreground">Portfolio</span>
          </Link>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-3 lg:space-x-6">
              {NAVIGATION_LINKS.map(link => (
                <Link
                  key={link.id}
                  to={link.path}
                  data-cursor-interactive="true"
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ease-in-out
                              ${location.pathname === link.path 
                                ? 'text-brand-accent border-b-2 border-brand-accent' 
                                : 'text-brand-foreground-muted hover:text-brand-accent hover:scale-105'}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Theme Switcher */}
            <div data-cursor-interactive="true">
              <ThemeSwitcher />
            </div>
            

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-brand-foreground-muted hover:text-brand-accent focus:outline-none focus:text-brand-accent transition-colors"
                aria-label="Toggle menu"
                data-cursor-interactive="true"
              >
                {isOpen ? <CloseIcon className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen py-2' : 'max-h-0 py-0'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-brand-card/95">
          {NAVIGATION_LINKS.map(link => (
            <Link
              key={link.id}
              to={link.path}
              onClick={() => setIsOpen(false)}
              data-cursor-interactive="true"
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                          ${location.pathname === link.path 
                            ? 'text-brand-accent bg-brand-dark' 
                            : 'text-brand-foreground-muted hover:bg-brand-dark hover:text-brand-accent'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;