'use client';

import { useEffect, useState } from 'react';
import { motion, useSpring, useTransform } from 'framer-motion';

export default function AmbientBackground() {
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [hasMouseMoved, setHasMouseMoved] = useState(false);

  // Smooth springs for mouse position tracking (0 to 100 percentage)
  const mouseX = useSpring(50, { stiffness: 15, damping: 25, mass: 1.5 });
  const mouseY = useSpring(50, { stiffness: 15, damping: 25, mass: 1.5 });

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      if (!hasMouseMoved) setHasMouseMoved(true);
      // Convert to percentages (0-100)
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      mediaQuery.removeEventListener('change', listener);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hasMouseMoved, mouseX, mouseY]);

  useEffect(() => {
    // Auto drift fallback if mouse hasn't moved (mobile or initial load)
    if (hasMouseMoved || isReducedMotion) return;

    let animationFrame: number;
    let startTime = Date.now();

    const drift = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      // Gentle orbital/figure-8 motion around the center
      const x = 50 + Math.sin(elapsed * 0.4) * 20;
      const y = 50 + Math.cos(elapsed * 0.25) * 20;
      mouseX.set(x);
      mouseY.set(y);
      animationFrame = requestAnimationFrame(drift);
    };

    animationFrame = requestAnimationFrame(drift);
    return () => cancelAnimationFrame(animationFrame);
  }, [hasMouseMoved, isReducedMotion, mouseX, mouseY]);

  // Transforms for each blob to offset them from the central cursor/drift point
  const blueX = useTransform(mouseX, x => `${x - 15}%`);
  const blueY = useTransform(mouseY, y => `${y + 10}%`);
  
  const redX = useTransform(mouseX, x => `${x + 20}%`);
  const redY = useTransform(mouseY, y => `${y - 15}%`);

  if (isReducedMotion) {
    // Static fallback for reduced motion
    return (
      <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0f] pointer-events-none">
        <div className="absolute top-[50%] left-[30%] w-[60vw] h-[60vw] bg-[#1e6fff] opacity-80 blur-[120px] rounded-full mix-blend-screen transform -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute top-[40%] right-[30%] w-[55vw] h-[55vw] bg-[#e0263f] opacity-80 blur-[120px] rounded-full mix-blend-screen transform translate-x-1/2 -translate-y-1/2" />
        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#000000_120%)] opacity-80" />
      </div>
    );
  }
  
  // Base colors: Electric Blue (#1e6fff), Saturated Red (#e0263f) on near-black (#0a0a0f)
  
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#0a0a0f] pointer-events-none">
      
      {/* Electric Blue Blob */}
      <motion.div 
        className="absolute w-[65vw] h-[65vw] bg-[#1e6fff] rounded-full mix-blend-screen opacity-80"
        style={{
          left: blueX,
          top: blueY,
          filter: 'blur(140px)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Saturated Red Blob */}
      <motion.div 
        className="absolute w-[60vw] h-[60vw] bg-[#e0263f] rounded-full mix-blend-screen opacity-80"
        style={{
          left: redX,
          top: redY,
          filter: 'blur(120px)',
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Vignette Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_20%,_#000000_120%)] opacity-80 pointer-events-none" />
    </div>
  );
}
