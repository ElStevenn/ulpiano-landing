'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initDataLayer, track } from '@/lib/tracking';

type AnalyticsProviderProps = {
  children: React.ReactNode;
};

/**
 * Proveedor de analytics que:
 * 1. Inicializa dataLayer al montar
 * 2. Trackea page_view en cada cambio de ruta
 */
export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  const pathname = usePathname();

  // Inicializar dataLayer al montar
  useEffect(() => {
    initDataLayer();
  }, []);

  // Trackear page_view en cada cambio de pathname
  useEffect(() => {
    if (pathname) {
      track('page_view', {
        page_path: pathname,
      });
    }
  }, [pathname]);

  return <>{children}</>;
}
