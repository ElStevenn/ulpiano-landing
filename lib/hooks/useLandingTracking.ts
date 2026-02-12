'use client';

import { useEffect, useRef } from 'react';
import { trackSectionView, trackScrollDepth } from '@/lib/tracking';

/**
 * Hook para tracking automático de landing:
 * - pricing_view: detecta cuando el usuario ve la sección de precios
 * - scroll_depth: trackea profundidad de scroll (25%, 50%, 75%, 90%)
 */
export function useLandingTracking() {
  const scrollThresholdsRef = useRef<Set<number>>(new Set());
  const pricingViewedRef = useRef(false);

  useEffect(() => {
    // Guard SSR
    if (typeof window === 'undefined') return;

    // ========================================
    // 1. PRICING VIEW - IntersectionObserver
    // ========================================
    const pricingElement = document.getElementById('pricing');
    
    let pricingObserver: IntersectionObserver | null = null;
    
    if (pricingElement && !pricingViewedRef.current) {
      pricingObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !pricingViewedRef.current) {
              trackSectionView('pricing');
              pricingViewedRef.current = true;
              // Desconectar observer después de trackear
              pricingObserver?.disconnect();
            }
          });
        },
        {
          threshold: 0.3, // 30% visible
          rootMargin: '0px',
        }
      );

      pricingObserver.observe(pricingElement);
    }

    // ========================================
    // 2. SCROLL DEPTH
    // ========================================
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      
      // Calcular porcentaje de scroll
      const scrollPercent = Math.round(
        (scrollTop / (documentHeight - windowHeight)) * 100
      );

      // Thresholds a trackear
      const thresholds = [25, 50, 75, 90];

      thresholds.forEach((threshold) => {
        if (
          scrollPercent >= threshold &&
          !scrollThresholdsRef.current.has(threshold)
        ) {
          scrollThresholdsRef.current.add(threshold);
          trackScrollDepth(threshold);
        }
      });
    };

    // Throttle para scroll (ejecutar máximo cada 200ms)
    let scrollTimeout: NodeJS.Timeout | null = null;
    const throttledScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        handleScroll();
        scrollTimeout = null;
      }, 200);
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', throttledScroll);
      pricingObserver?.disconnect();
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);
}
