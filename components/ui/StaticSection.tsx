'use client';

import { ReactNode } from 'react';

interface StaticSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const StaticSection = ({
  children,
  className = '',
  id,
}: StaticSectionProps) => {
  return (
    <div id={id} className={className}>
      {children}
    </div>
  );
};
