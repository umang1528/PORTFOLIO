import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Theme, ThemeContextType, ThemeColors } from '../types';
import { THEMES, DEFAULT_THEME_ID } from '../constants';
import { hexToRgbString } from '../utils/colors';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentThemeId, setCurrentThemeId] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const storedThemeId = localStorage.getItem('portfolio-theme');
      return storedThemeId && THEMES.find(t => t.id === storedThemeId) ? storedThemeId : DEFAULT_THEME_ID;
    }
    return DEFAULT_THEME_ID;
  });

  const selectedTheme = THEMES.find(t => t.id === currentThemeId) || THEMES.find(t => t.id === DEFAULT_THEME_ID)!;

  const applyTheme = useCallback((themeColors: ThemeColors) => {
    const root = document.documentElement;
    root.style.setProperty('--color-primary-val', hexToRgbString(themeColors.primary));
    root.style.setProperty('--color-secondary-val', hexToRgbString(themeColors.secondary));
    root.style.setProperty('--color-dark-val', hexToRgbString(themeColors.dark));
    root.style.setProperty('--color-card-val', hexToRgbString(themeColors.card));
    root.style.setProperty('--color-light-val', hexToRgbString(themeColors.light));
    root.style.setProperty('--color-accent-val', hexToRgbString(themeColors.accent));
    root.style.setProperty('--color-foreground-val', hexToRgbString(themeColors.foreground));
    root.style.setProperty('--color-foreground-muted-val', hexToRgbString(themeColors.foregroundMuted));
    root.style.setProperty('--color-button-text-val', hexToRgbString(themeColors.buttonText));
  }, []);

  useEffect(() => {
    applyTheme(selectedTheme.colors);
    if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio-theme', selectedTheme.id);
    }
  }, [selectedTheme, applyTheme]);

  const changeTheme = (themeId: string) => {
    const newTheme = THEMES.find(t => t.id === themeId);
    if (newTheme) {
      setCurrentThemeId(newTheme.id);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme: selectedTheme, changeTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
