import type React from 'react';

export interface NavLink {
  id: string;
  label: string;
  path: string;
}

export interface PortfolioItem {
  id:string;
  title: string;
  category: 'Interior Design' | 'Graphic Design' | 'Branding';
  imageUrl: string;
  description: string;
  longDescription?: string;
  client?: string;
  year?: number;
}

export interface Skill {
  id: string;
  name: string;
  level: number; // Percentage 0-100
  icon?: React.ReactNode;
}

export interface ResumeEntry {
  id: string;
  title: string;
  companyOrInstitution: string;
  period: string;
  description: string;
  type: 'experience' | 'education';
}

export interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'none';
  delay?: string;
  id?: string;
}

// Theme related types
export interface ThemeColors {
  primary: string;        // Main brand color for buttons, important highlights
  secondary: string;      // Secondary accent color
  dark: string;           // Main background color of the site
  card: string;           // Background color for cards, modals
  light: string;          // Lighter background variant or accent
  accent: string;         // General accent color, often same as primary (for text, borders)
  foreground: string;     // Main text color (on dark/card backgrounds)
  foregroundMuted: string;// Muted text color
  buttonText: string;     // Text color for primary/secondary buttons
}

export interface Theme {
  id: string;
  name: string;
  colors: ThemeColors;
}

export interface ThemeContextType {
  theme: Theme;
  changeTheme: (themeId: string) => void;
  themes: Theme[];
}
