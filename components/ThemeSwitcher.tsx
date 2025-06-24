import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import PaletteIcon from './icons/PaletteIcon'; // Assuming you have this icon

const ThemeSwitcher: React.FC = () => {
  const { theme: currentTheme, changeTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={switcherRef} className="relative">
      <button
        onClick={toggleOpen}
        className="p-2 rounded-full hover:bg-brand-card/50 text-brand-foreground hover:text-brand-accent transition-colors duration-200"
        aria-label="Select Theme"
        data-cursor-interactive="true"
      >
        <PaletteIcon className="w-6 h-6" />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-brand-card shadow-2xl rounded-lg p-3 z-[60] border border-brand-primary/20">
          <p className="text-sm text-brand-foreground-muted mb-2 px-1">Select Theme</p>
          <div className="space-y-1">
            {themes.map((themeOption) => (
              <button
                key={themeOption.id}
                onClick={() => {
                  changeTheme(themeOption.id);
                  setIsOpen(false);
                }}
                data-cursor-interactive="true"
                className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-all duration-150
                            ${currentTheme.id === themeOption.id 
                              ? 'bg-brand-primary text-brand-button-text font-semibold' 
                              : 'text-brand-foreground hover:bg-brand-dark hover:text-brand-accent'}`}
                style={{ justifyContent: 'flex-start' }}
              >
                <span 
                  className="w-4 h-4 rounded-full mr-3 border border-brand-foreground/30"
                  style={{ backgroundColor: themeOption.colors.primary }}
                ></span>
                {themeOption.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;