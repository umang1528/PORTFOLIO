import React, { isValidElement, ReactElement } from 'react';
import { Skill } from '../types';
import AnimatedSection from '../components/AnimatedSection';
import SparklesIcon from '../components/icons/SparklesIcon';

const InteriorDesignIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-1.5m-15-18L12 3m0 0L21 5.25M12 3v7.5M21 12c0 4.969-4.031 9-9 9s-9-4.031-9-9 4.031-9 9-9c2.395 0 4.565.942 6.179 2.469" />
  </svg>
);

const GraphicDesignIcon: React.FC<{className?: string}> = ({className}) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${className}`}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-2.474a.75.75 0 00-.31-.698L7.83 13.064l5.636 5.328zM16.5 8.25L15 6.75M15 6.75l-1.5 1.5M15 6.75V3.75m0 3H12m0 0V3.75m0 3h3.75m-3.75 0V3.75m0 3H8.25m3.75 0H12m2.036 6.026L15 11.026M15 11.026L13.036 9M15 11.026L16.964 9M15 11.026L13.036 13.026m1.964-2l1.964 2M6.75 8.25L9 6.75M9 6.75L11.25 8.25M9 6.75V3.75m0 3H6.75m0 0V3.75m0 3h2.25m0 0V3.75m0 3H9m2.25-3H9m0 0H6.75m7.5 15l1.458-5.072M9.75 18H12m0 0h2.25m-2.25 0V15m2.25 3l1.458-5.072M9.75 18l1.458-5.072" />
  </svg>
);

// Updated skill icons to use theme colors
const skillsData: Skill[] = [
  { id: 'sd1', name: 'Space Planning', level: 95, icon: <InteriorDesignIcon className="text-brand-accent" /> },
  { id: 'sd2', name: 'Concept Development (Interior)', level: 90, icon: <InteriorDesignIcon className="text-brand-accent" /> },
  { id: 'sd3', name: 'Material Selection', level: 85, icon: <InteriorDesignIcon className="text-brand-accent" /> },
  { id: 'sd4', name: 'AutoCAD / SketchUp', level: 80, icon: <InteriorDesignIcon className="text-brand-accent" /> },
  { id: 'gd1', name: 'Branding & Identity', level: 92, icon: <GraphicDesignIcon className="text-brand-secondary" /> },
  { id: 'gd2', name: 'Adobe Illustrator', level: 90, icon: <GraphicDesignIcon className="text-brand-secondary" /> },
  { id: 'gd3', name: 'Adobe Photoshop', level: 88, icon: <GraphicDesignIcon className="text-brand-secondary" /> },
  { id: 'gd4', name: 'Typography & Layout', level: 85, icon: <GraphicDesignIcon className="text-brand-secondary" /> },
  { id: 'sft1', name: 'Client Communication', level: 95, icon: <SparklesIcon className="text-yellow-400" /> }, // Keeping yellow for sparkles as it's often universal
  { id: 'sft2', name: 'Project Management', level: 85, icon: <SparklesIcon className="text-yellow-400" /> },
];

const SkillBar: React.FC<{ skill: Skill; animationDelay: string }> = ({ skill, animationDelay }) => (
  <AnimatedSection animationType="slide-in-left" className={`mb-6 ${animationDelay}`}>
    <div className="flex items-center mb-1">
      {skill.icon && <span className="mr-3">{skill.icon}</span>}
      <h4 className="text-lg font-medium text-brand-foreground">{skill.name}</h4>
      <span className="ml-auto text-sm text-brand-accent">{skill.level}%</span>
    </div>
    <div className="w-full bg-brand-dark rounded-full h-3"> {/* Changed from slate-700 */}
      <div 
        className="bg-gradient-to-r from-brand-primary to-brand-secondary h-3 rounded-full transition-all duration-1000 ease-out"
        style={{ width: `${skill.level}%` }}
      ></div>
    </div>
  </AnimatedSection>
);

const Skills: React.FC = () => {
  // Filtering logic remains the same. The icon components themselves will get the theme color via className prop.
  const interiorSkills = skillsData.filter(s => s.icon && isValidElement(s.icon) && (s.icon as ReactElement).type === InteriorDesignIcon);
  const graphicSkills = skillsData.filter(s => s.icon && isValidElement(s.icon) && (s.icon as ReactElement).type === GraphicDesignIcon);
  const softSkills = skillsData.filter(s => s.icon && isValidElement(s.icon) && (s.icon as ReactElement).type === SparklesIcon);

  return (
    <AnimatedSection className="py-20 lg:py-32 bg-brand-card" id="skills">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-accent mb-4">My Expertise</h2>
          <p className="text-lg text-brand-foreground-muted max-w-2xl mx-auto">
            A blend of creative and technical skills honed through years of experience in transforming ideas into tangible realities.
          </p>
          <div className="w-24 h-1 bg-brand-primary mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-brand-accent mb-6 flex items-center">
              <InteriorDesignIcon className="mr-3 w-7 h-7" /> Interior Design
            </h3>
            {interiorSkills.map((skill, index) => (
              <SkillBar key={skill.id} skill={skill} animationDelay={`delay-${index * 100}`} />
            ))}
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-brand-secondary mb-6 flex items-center"> {/* Using secondary for graphic design title */}
              <GraphicDesignIcon className="mr-3 w-7 h-7" /> Graphic Design
            </h3>
            {graphicSkills.map((skill, index) => (
              <SkillBar key={skill.id} skill={skill} animationDelay={`delay-${index * 100}`} />
            ))}
          </div>
          <div>
             <h3 className="text-2xl font-semibold text-yellow-400 mb-6 flex items-center"> {/* Keeping yellow for sparkles header */}
              <SparklesIcon className="mr-3 w-7 h-7" /> Professional Skills
            </h3>
            {softSkills.map((skill, index) => (
              <SkillBar key={skill.id} skill={skill} animationDelay={`delay-${index * 100}`} />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default Skills;
