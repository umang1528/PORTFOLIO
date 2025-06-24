/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        'brand-primary': 'rgb(var(--color-primary-val) / <alpha-value>)',
        'brand-secondary': 'rgb(var(--color-secondary-val) / <alpha-value>)',
        'brand-dark': 'rgb(var(--color-dark-val) / <alpha-value>)',
        'brand-card': 'rgb(var(--color-card-val) / <alpha-value>)',
        'brand-light': 'rgb(var(--color-light-val) / <alpha-value>)',
        'brand-accent': 'rgb(var(--color-accent-val) / <alpha-value>)',
        'brand-foreground': 'rgb(var(--color-foreground-val) / <alpha-value>)',
        'brand-foreground-muted': 'rgb(var(--color-foreground-muted-val) / <alpha-value>)',
        'brand-button-text': 'rgb(var(--color-button-text-val) / <alpha-value>)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'subtle-pulse': 'subtlePulse 2s infinite ease-in-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        subtlePulse: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        }
      }
    },
  },
  plugins: [],
}
