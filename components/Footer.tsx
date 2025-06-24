import React from 'react';

const EmailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-5 h-5 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={`w-5 h-5 ${className}`}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-.975-2.5-2.25-2.5S11.5 13.35 11.5 14.75V19h-3v-9h3V11c.5-.75 1.625-1.5 3-1.5 3.25 0 4.5 2.125 4.5 5V19z"/>
  </svg>
);

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brand-card/50 border-t border-brand-primary/20 py-8 text-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-4">
            <a href="mailto:designer@example.com" className="text-brand-foreground-muted hover:text-brand-accent transition-colors flex items-center">
              <EmailIcon className="mr-2"/> designer@example.com
            </a>
            <a href="https://linkedin.com/in/designerprofile" target="_blank" rel="noopener noreferrer" className="text-brand-foreground-muted hover:text-brand-accent transition-colors flex items-center">
              <LinkedInIcon className="mr-2"/> LinkedIn Profile
            </a>
        </div>
        <p className="text-brand-foreground-muted/70 text-sm">&copy; {currentYear} Your Name. All rights reserved.</p>
        <p className="text-brand-foreground-muted/50 text-xs mt-1">Designed with Passion & Precision</p>
      </div>
    </footer>
  );
};

export default Footer;
