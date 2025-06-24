
import React from 'react';
import { ResumeEntry } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import DownloadIcon from '../components/icons/DownloadIcon'; // Import the new icon

const BriefcaseIcon: React.FC<{className?: string}> = ({className}) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.073c0 .878-.468 1.607-1.206 1.956-1.121.524-2.458.821-3.794.821s-2.673-.297-3.794-.821c-.738-.349-1.206-1.078-1.206-1.956V14.15M17.25 11.85c0 .878.468 1.607 1.206 1.956 1.121.524 2.458.821 3.794.821s2.673-.297 3.794-.821c.738-.349-1.206-1.078-1.206-1.956V7.777c0-.878-.468-1.607-1.206-1.956-1.121-.524-2.458.821-3.794-.821s-2.673.297-3.794.821c-.738.349-1.206-1.078-1.206-1.956V11.85zM12 11.25c0 .878.468 1.607 1.206 1.956 1.121.524 2.458.821 3.794.821s2.673-.297 3.794-.821c.738-.349 1.206-1.078 1.206-1.956V7.223c0-.878-.468-1.607-1.206-1.956C19.121 4.743 17.784 4.5 16.5 4.5c-1.284 0-2.621.243-3.744.767-.738.349-1.206 1.078-1.206 1.956V11.25zM4.5 18.75c0 .878.468 1.607 1.206 1.956C6.827 21.237 8.164 21.5 9.5 21.5s2.673-.297 3.794-.821c.738-.349 1.206-1.078 1.206-1.956V14.7c0-.878-.468-1.607-1.206-1.956C10.973 12.22 9.636 12 8.25 12A6.726 6.726 0 003.75 14.7v4.05z" />
</svg>
);

const AcademicCapIcon: React.FC<{className?: string}> = ({className}) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg>
);

const resumeData: ResumeEntry[] = [
  {
    id: 'exp1',
    title: 'Senior Interior Designer',
    companyOrInstitution: 'Creative Design Solutions',
    period: '2020 - Present',
    description: 'Led design projects from concept to completion, managed client relationships, and mentored junior designers. Specialized in high-end residential and commercial spaces.',
    type: 'experience',
  },
  {
    id: 'exp2',
    title: 'Graphic Designer',
    companyOrInstitution: 'Visual Impact Agency',
    period: '2018 - 2020',
    description: 'Developed branding identities, marketing materials, and digital assets for a diverse range of clients. Collaborated closely with marketing teams to deliver impactful visual solutions.',
    type: 'experience',
  },
  {
    id: 'edu1',
    title: 'Master of Fine Arts in Interior Design',
    companyOrInstitution: 'Prestigious Design University',
    period: '2016 - 2018',
    description: 'Focused on sustainable design practices and innovative use of materials. Thesis project on adaptive reuse in urban environments.',
    type: 'education',
  },
  {
    id: 'edu2',
    title: 'Bachelor of Arts in Graphic Design',
    companyOrInstitution: 'State Art College',
    period: '2012 - 2016',
    description: 'Comprehensive study in visual communication, typography, and digital media. Graduated with honors.',
    type: 'education',
  },
];

const ResumeCard: React.FC<{ entry: ResumeEntry; icon: React.ReactNode }> = ({ entry, icon }) => (
  <div className="relative pl-10 pb-8 border-l-2 border-brand-primary/30 group">
    <div className="absolute -left-[1.30rem] top-0 w-10 h-10 bg-brand-card border-2 border-brand-primary rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-brand-primary group-hover:scale-110">
      {React.isValidElement(icon) ? React.cloneElement(icon as React.ReactElement<{ className?: string }>, { className: 'w-5 h-5 text-brand-accent group-hover:text-brand-button-text transition-colors' }) : icon}
    </div>
    <h3 className="text-xl font-semibold text-brand-foreground mb-1 group-hover:text-brand-accent transition-colors">{entry.title}</h3>
    <p className="text-md text-brand-accent/80 mb-1">{entry.companyOrInstitution}</p>
    <p className="text-sm text-brand-foreground-muted/70 mb-3">{entry.period}</p>
    <p className="text-brand-foreground-muted leading-relaxed">{entry.description}</p>
  </div>
);

const Resume: React.FC = () => {
  const experiences = resumeData.filter(e => e.type === 'experience');
  const educations = resumeData.filter(e => e.type === 'education');

  return (
    <AnimatedSection className="py-20 lg:py-32 bg-brand-card" id="resume">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-brand-accent mb-4">My Journey</h2>
          <p className="text-lg text-brand-foreground-muted max-w-2xl mx-auto">
            A timeline of my professional experience and educational background that shaped my design philosophy.
          </p>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-4"></div>
        </div>

        <div className="text-center mb-12 md:mb-16">
          <a
            href="/resume.pdf" // Placeholder path for the resume file
            download="YourName_Resume.pdf" // Suggested filename for the user
            target="_blank" // Opens in new tab, good practice for downloads
            rel="noopener noreferrer"
            data-cursor-interactive="true"
            className="inline-flex items-center justify-center bg-brand-primary hover:opacity-80 text-brand-button-text font-semibold py-3 px-8 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300 text-lg"
            aria-label="Download Resume"
          >
            <DownloadIcon className="mr-2 h-5 w-5" />
            Download Resume
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
          <AnimatedSection animationType="slide-in-left">
            <h3 className="text-3xl font-semibold text-brand-accent mb-8 flex items-center">
              <BriefcaseIcon className="mr-3 w-8 h-8"/> Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((entry) => (
                <ResumeCard key={entry.id} entry={entry} icon={<BriefcaseIcon />} />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection animationType="slide-in-right">
            <h3 className="text-3xl font-semibold text-brand-secondary mb-8 flex items-center"> {/* Use secondary for education title */}
              <AcademicCapIcon className="mr-3 w-8 h-8" /> Education
            </h3>
            <div className="space-y-8">
              {educations.map((entry) => (
                <ResumeCard key={entry.id} entry={entry} icon={<AcademicCapIcon />} />
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Resume;