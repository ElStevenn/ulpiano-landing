'use client';

import { useState, useEffect } from 'react';

interface ScrollState {
  scrollY: number;
  isScrolled: boolean;
  progress: number;
}

export function useScrollProgress(threshold: number = 50): ScrollState {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    isScrolled: false,
    progress: 0,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollY / docHeight, 1) : 0;

      setScrollState({
        scrollY,
        isScrolled: scrollY > threshold,
        progress,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return scrollState;
}
