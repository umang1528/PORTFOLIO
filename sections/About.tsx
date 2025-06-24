import React from 'react';
import AnimatedSection from '../components/AnimatedSection';

const About: React.FC = () => {
  return (
    <AnimatedSection className="py-20 lg:py-32 bg-brand-dark" id="about">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-brand-accent mb-4">About Me</h2>
          <div className="w-24 h-1 bg-brand-primary mx-auto"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center lg:space-x-12">
          <AnimatedSection animationType="slide-in-left" className="lg:w-1/3 mb-8 lg:mb-0">
            <img 
              src="https://picsum.photos/seed/designerprofile/600/600" 
              alt="Designer Profile" 
              className="rounded-lg shadow-2xl object-cover w-full h-auto max-w-md mx-auto aspect-square border-4 border-brand-primary/30"
            />
          </AnimatedSection>
          
          <AnimatedSection animationType="slide-in-right" className="lg:w-2/3">
            <h3 className="text-3xl font-semibold text-brand-foreground mb-4">Hello, I'm [Your Name]</h3>
            <p className="text-lg text-brand-foreground-muted mb-4 leading-relaxed">
              I am a passionate and versatile designer with a keen eye for detail and a love for creating beautiful, functional spaces and impactful visual identities. My journey into design began with a fascination for how environments and graphics can influence emotion and behavior.
            </p>
            <p className="text-lg text-brand-foreground-muted mb-4 leading-relaxed">
              With expertise in both interior and graphic design, I bring a holistic approach to projects. Whether it's transforming a living space into a personal sanctuary or crafting a brand identity that tells a compelling story, my goal is to deliver solutions that are not only aesthetically pleasing but also strategically sound.
            </p>
            <p className="text-lg text-brand-foreground-muted leading-relaxed">
              I thrive on collaboration and believe that the best results come from a deep understanding of client needs and aspirations. Let's connect and explore how we can bring your vision to life.
            </p>
            <div className="mt-8">
              <a 
                href="/resume" 
                data-cursor-interactive="true"
                className="bg-brand-primary hover:opacity-80 text-brand-button-text font-semibold py-3 px-6 rounded-md shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 inline-block"
              >
                View My Resume
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default About;