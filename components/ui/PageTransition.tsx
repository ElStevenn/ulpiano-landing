'use client';

import { ReactNode } from 'react';
import { usePageTransition } from '@/lib/hooks';

interface PageTransitionProps {
  children: ReactNode;
}

export const PageTransition = ({ children }: PageTransitionProps) => {
  const isLoading = usePageTransition();

  return (
    <div className={`page-transition ${!isLoading ? 'loaded' : ''}`}>
      {children}
    </div>
  );
};
