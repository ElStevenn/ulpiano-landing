'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

interface ParallaxValues {
  x: number;
  y: number;
}

export function useMouseParallax(
  intensity: number = 20,
  smoothing: number = 0.1
): ParallaxValues {
  const [parallax, setParallax] = useState<ParallaxValues>({ x: 0, y: 0 });
  const targetRef = useRef<MousePosition>({ x: 0, y: 0 });
  const currentRef = useRef<MousePosition>({ x: 0, y: 0 });
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    currentRef.current.x +=
      (targetRef.current.x - currentRef.current.x) * smoothing;
    currentRef.current.y +=
      (targetRef.current.y - currentRef.current.y) * smoothing;

    setParallax({
      x: currentRef.current.x,
      y: currentRef.current.y,
    });

    rafRef.current = requestAnimationFrame(animate);
  }, [smoothing]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      targetRef.current = {
        x: ((e.clientX - centerX) / centerX) * intensity,
        y: ((e.clientY - centerY) / centerY) * intensity,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, [intensity, animate]);

  return parallax;
}
