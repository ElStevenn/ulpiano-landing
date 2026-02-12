'use client';

import { useEffect } from 'react';

export function ScrollLock() {
  useEffect(() => {
    // Bloquear scroll inmediatamente y prevenir cualquier desplazamiento visual
    if (typeof window !== 'undefined') {
      // Bloquear scroll del body temporalmente
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Forzar scroll a 0 múltiples veces para asegurar que funcione
      const forceScrollTop = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      };

      // Ejecutar inmediatamente
      forceScrollTop();

      // Prevenir cualquier scroll automático durante la carga
      const preventScroll = () => {
        if (!window.location.hash) {
          forceScrollTop();
        }
      };

      // Ejecutar en múltiples momentos
      preventScroll();

      const handleLoad = () => {
        preventScroll();
        // Restaurar overflow después de un pequeño delay
        setTimeout(() => {
          document.body.style.overflow = originalOverflow;
          if (!window.location.hash) {
            forceScrollTop();
          }
        }, 100);
      };

      // Si la página ya está cargada, ejecutar inmediatamente
      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad, { once: true });
        document.addEventListener('DOMContentLoaded', preventScroll, {
          once: true,
        });

        // También ejecutar después de un pequeño delay para capturar cualquier scroll tardío
        const timeoutId = setTimeout(() => {
          preventScroll();
          document.body.style.overflow = originalOverflow;
        }, 50);

        return () => {
          window.removeEventListener('load', handleLoad);
          document.removeEventListener('DOMContentLoaded', preventScroll);
          clearTimeout(timeoutId);
          document.body.style.overflow = originalOverflow;
        };
      }
    }
  }, []);

  return null;
}
