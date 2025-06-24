import { NavLink, Theme } from './types';

export const NAVIGATION_LINKS: NavLink[] = [
  { id: 'home', label: 'Home', path: '/' },
  { id: 'about', label: 'About', path: '/about' },
  { id: 'skills', label: 'Skills', path: '/skills' },
  { id: 'portfolio', label: 'Portfolio', path: '/portfolio' },
  { id: 'resume', label: 'Resume', path: '/resume' },
  { id: 'contact', label: 'Contact', path: '/contact' },
];

export const THEMES: Theme[] = [
  {
    id: 'skyfall',
    name: 'Skyfall (Default)',
    colors: {
      primary: '#38bdf8',       // sky-500
      secondary: '#10b981',     // emerald-500
      dark: '#0f172a',         // slate-900
      card: '#1e293b',         // slate-800
      light: '#f0f9ff',        // sky-50 (used for very light accents or specific light components)
      accent: '#38bdf8',        // sky-500
      foreground: '#e2e8f0',   // slate-200
      foregroundMuted: '#94a3b8', // slate-400
      buttonText: '#ffffff',    // white
    },
  },
  {
    id: 'regal-red',
    name: 'Regal Red',
    colors: {
      primary: '#dc2626',       // red-600
      secondary: '#ca8a04',     // yellow-600 (amber-500 is #f59e0b, yellow-600 is #ca8a04)
      dark: '#111827',         // gray-900
      card: '#1f2937',         // gray-800
      light: '#fef2f2',        // red-50
      accent: '#dc2626',        // red-600
      foreground: '#f3f4f6',   // gray-100
      foregroundMuted: '#9ca3af', // gray-400
      buttonText: '#ffffff',
    },
  },
  {
    id: 'cosmic-indigo',
    name: 'Cosmic Indigo',
    colors: {
      primary: '#4f46e5',       // indigo-600
      secondary: '#ec4899',     // pink-500
      dark: '#17112B',         // Darker purple-blue
      card: '#2B214A',         // Slightly lighter purple-blue for cards
      light: '#eef2ff',        // indigo-50
      accent: '#4f46e5',        // indigo-600
      foreground: '#e0e7ff',   // indigo-100
      foregroundMuted: '#a5b4fc', // indigo-300
      buttonText: '#ffffff',
    },
  },
  {
    id: 'forest-teal',
    name: 'Forest Teal',
    colors: {
      primary: '#0d9488',       // teal-600
      secondary: '#f97316',     // orange-500
      dark: '#1c1917',         // stone-900
      card: '#292524',         // stone-800
      light: '#f0fdfa',        // teal-50
      accent: '#0d9488',        // teal-600
      foreground: '#e7e5e4',   // stone-200
      foregroundMuted: '#a8a29e', // stone-400
      buttonText: '#ffffff',
    },
  },
  {
    id: 'monochrome-lime',
    name: 'Monochrome Lime',
    colors: {
      primary: '#84cc16',       // lime-500 (This is the main pop color)
      secondary: '#64748b',     // slate-500 (Used for secondary elements)
      dark: '#020617',         // slate-950 (Very dark blue/black)
      card: '#0f172a',         // slate-900 (Slightly lighter than main dark)
      light: '#f1f5f9',        // slate-100
      accent: '#84cc16',        // lime-500
      foreground: '#f1f5f9',   // slate-100 (Bright text for high contrast)
      foregroundMuted: '#94a3b8', // slate-400
      buttonText: '#020617',    // Dark text for lime buttons for contrast
    },
  },
];

export const DEFAULT_THEME_ID = THEMES[0].id;
