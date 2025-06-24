
import React from 'react';

interface IconProps {
  className?: string;
}

const SparklesIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L1.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.25 12L17 13.75l-1.25-1.75L14.25 12l1.5-1.75L17 8.5l1.25 1.75L19.75 12zM9.813 15.904L9 18.75l-.813-2.846m0 0L5.25 15l2.846-.813m0 0L9 11.25l.813 2.846m0 0L12.75 15l-2.846.813m0 0L9 18.75l.813-2.846M12 5.25L11.187 8.1L9 9l2.187.9L12 12.75l.813-2.85L15 9l-2.187-.9L12 5.25z" />
  </svg>
);

export default SparklesIcon;
