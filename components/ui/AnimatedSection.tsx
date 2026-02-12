'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { useFadeInOnScroll } from '@/lib/hooks';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  id?: string;
  style?: React.CSSProperties;
}

export const AnimatedSection = ({
  children,
  className = '',
  threshold = 0.1,
  id,
  style,
}: AnimatedSectionProps) => {
  const [ref, isVisible] = useFadeInOnScroll(threshold);
  const elementRef = useRef<HTMLDivElement>(null);
  const prevVisibleRef = useRef(false);

  useEffect(() => {
    if (elementRef.current && isVisible && !prevVisibleRef.current) {
      // Reiniciar animación cuando el elemento entra en el viewport
      const element = elementRef.current;
      if (className.includes('fade-in-up')) {
        // Forzar reinicio de la animación
        element.style.animation = 'none';
        requestAnimationFrame(() => {
          element.style.animation = '';
        });
      }
    }
    prevVisibleRef.current = isVisible;
  }, [isVisible, className]);

  // Combinar refs
  const combinedRef = (node: HTMLDivElement | null) => {
    // El hook devuelve useRef<HTMLElement>, pero estamos usando HTMLDivElement
    // que es compatible ya que HTMLDivElement extiende HTMLElement
    if (ref && typeof ref === 'object' && 'current' in ref) {
      (ref as React.MutableRefObject<HTMLElement | null>).current = node;
    }
    elementRef.current = node;
  };

  return (
    <div
      id={id}
      ref={combinedRef}
      className={`fade-element ${isVisible ? 'visible' : ''} ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};
