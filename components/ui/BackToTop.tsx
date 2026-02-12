'use client';

import { useEffect, useState } from 'react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);

      const professionalsSection = document.getElementById('segments');

      if (professionalsSection) {
        const rect = professionalsSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const currentScrollY = window.scrollY;

        // El botón aparece cuando:
        // 1. El usuario ha scrolleado al menos 300px desde el inicio
        // 2. Y la sección está visible en el viewport (su parte superior está por encima del borde inferior del viewport)
        const hasScrolledEnough = currentScrollY > 300;
        const isSectionInViewport = rect.top < windowHeight && rect.bottom > 0;

        setIsVisible(hasScrolledEnough && isSectionInViewport);
      }
    };

    // No verificar inmediatamente, solo cuando hay scroll
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Calcula el desplazamiento dinámico basado en el scroll
  // El botón se mueve ligeramente hacia arriba cuando hay más scroll
  const dynamicOffset = Math.min(scrollY * 0.1, 20); // Máximo 20px de movimiento

  return (
    <button
      onClick={scrollToTop}
      style={{
        transform: `translateY(${isVisible ? -dynamicOffset : 0}px)`,
        transition: 'opacity 0.3s ease, transform 0.1s ease-out',
      }}
      className={`fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-slate-900 text-white shadow-lg hover:bg-slate-800 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Volver arriba"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
}

