import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  vx: number;
  vy: number;
  life: number; // Max lifespan
  currentLife: number; // Current lifespan
  color: string;
}

const CustomCursor: React.FC = () => {
  const { theme } = useTheme();
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);
  
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 }); // Start off-screen
  const [outlinePosition, setOutlinePosition] = useState({ x: -100, y: -100 });
  const [isInteractive, setIsInteractive] = useState(false);
  const [isPointerDown, setIsPointerDown] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdCounter = useRef(0);

  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Basic touch device detection
    if (typeof window !== 'undefined') {
      setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }
  }, []);


  const onMouseMove = useCallback((event: MouseEvent) => {
    const { clientX: x, clientY: y } = event;
    setMousePosition({ x, y });

    const target = event.target as HTMLElement;
    setIsInteractive(target.closest('[data-cursor-interactive="true"]') !== null);
  }, []);

  const onMouseDown = useCallback(() => {
    setIsPointerDown(true);
  }, []);

  const onMouseUp = useCallback(() => {
    setIsPointerDown(false);
  }, []);
  
  const onMouseLeave = useCallback(() => {
    setMousePosition({ x: -100, y: -100 }); // Move off-screen
    setIsInteractive(false);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.body.addEventListener('mouseleave', onMouseLeave); // Hides when mouse leaves body

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.body.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [onMouseMove, onMouseDown, onMouseUp, onMouseLeave, isTouchDevice]);

  const createParticle = useCallback((x: number, y: number) => {
    const size = Math.random() * 4 + 2; // Particle size 2px to 6px
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 1.5 + 0.5;
    const life = Math.random() * 60 + 30; // Lifespan 30-90 frames

    setParticles(prev => [
      ...prev,
      {
        id: particleIdCounter.current++,
        x,
        y,
        size,
        opacity: 1,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life,
        currentLife: 0,
        color: theme.colors.accent,
      }
    ]);
  }, [theme.colors.accent]);

  const animate = useCallback((time: number) => {
    if (previousTimeRef.current !== undefined) {
      // Lagged outline position
      setOutlinePosition(prevOutlinePos => ({
        x: prevOutlinePos.x + (mousePosition.x - prevOutlinePos.x) * 0.2, // Adjust 0.2 for more/less lag
        y: prevOutlinePos.y + (mousePosition.y - prevOutlinePos.y) * 0.2,
      }));

      // Update particles
      setParticles(prevParticles => 
        prevParticles.map(p => ({
          ...p,
          x: p.x + p.vx,
          y: p.y + p.vy,
          opacity: 1 - (p.currentLife / p.life),
          currentLife: p.currentLife + 1,
        })).filter(p => p.currentLife < p.life && p.opacity > 0)
      );
      
      // Create new particles (throttled)
      if (Math.random() < 0.6 && particles.length < 50) { // Max 50 particles, create chance
         createParticle(mousePosition.x, mousePosition.y);
      }
    }
    
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  }, [mousePosition, createParticle, particles.length]);

  useEffect(() => {
    if (isTouchDevice) return;
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animate, isTouchDevice]);


  useEffect(() => {
    if (isTouchDevice) return;
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) translate(-50%, -50%)`;
    }
    if (outlineRef.current) {
      outlineRef.current.style.transform = `translate3d(${outlinePosition.x}px, ${outlinePosition.y}px, 0) translate(-50%, -50%)`;
      if (isInteractive) {
        outlineRef.current.classList.add('interactive');
      } else {
        outlineRef.current.classList.remove('interactive');
      }
      if (isPointerDown) {
        outlineRef.current.classList.add('clicked');
      } else {
        outlineRef.current.classList.remove('clicked');
      }
    }
  }, [mousePosition, outlinePosition, isInteractive, isPointerDown, isTouchDevice]);

  if (isTouchDevice) {
    return null; // Don't render custom cursor on touch devices
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
      {particles.map(p => (
        <div
          key={p.id}
          className="cursor-particle"
          style={{
            backgroundColor: p.color,
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}px`,
            top: `${p.y}px`,
            opacity: p.opacity,
            transform: `translate(-50%, -50%) scale(${p.opacity})`, // Optional: scale down as fades
          }}
        />
      ))}
    </>
  );
};

export default CustomCursor;