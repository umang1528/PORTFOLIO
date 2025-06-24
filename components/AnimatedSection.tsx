
import React, { useRef, useEffect, useState } from 'react';
import { AnimatedSectionProps } from '../types';

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = '', animationType = 'fade-in-up', delay = '', id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Animate only once
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const getAnimationClass = () => {
    if (!isVisible || animationType === 'none') return 'opacity-100'; // Start visible if no animation
    switch (animationType) {
      case 'fade-in-up':
        return 'animate-fade-in-up';
      case 'slide-in-left':
        return 'animate-slide-in-left';
      case 'slide-in-right':
        return 'animate-slide-in-right';
      default:
        return 'animate-fade-in-up';
    }
  };
  
  // Initial state for animation: opacity-0 before it becomes visible
  const initialOpacityClass = animationType !== 'none' && !isVisible ? 'opacity-0' : 'opacity-100';

  return (
    <section ref={sectionRef} id={id} className={`${className} ${delay} ${isVisible ? getAnimationClass() : initialOpacityClass}`}>
      {children}
    </section>
  );
};

export default AnimatedSection;
