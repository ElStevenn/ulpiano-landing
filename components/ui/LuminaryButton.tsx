'use client';

import { ReactNode, ButtonHTMLAttributes, forwardRef } from 'react';

interface LuminaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glow';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LuminaryButton = forwardRef<HTMLButtonElement, LuminaryButtonProps>(({ 
  children, 
  variant = "primary", 
  size = "md",
  className = "",
  ...props 
}, ref) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'primary':
        return 'bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500 shadow-lg hover:shadow-xl hover:shadow-blue-500/25';
      case 'secondary':
        return 'bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/15 hover:border-white/30';
      case 'outline':
        return 'bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400/10';
      case 'ghost':
        return 'bg-transparent border border-white/10 text-white/80 hover:bg-white/5 hover:border-white/20 hover:text-white';
      case 'glow':
        return 'glow-button bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500 shadow-lg shadow-blue-500/25';
      default:
        return 'bg-gradient-to-r from-blue-600 to-violet-600 text-white hover:from-blue-500 hover:to-violet-500 shadow-lg hover:shadow-xl';
    }
  };

  const getSizeClasses = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-2 text-sm';
      case 'lg':
        return 'px-6 py-4 text-lg';
      default:
        return 'px-4 py-3 text-base';
    }
  };

  return (
    <button 
      ref={ref}
      className={`${getVariantClasses()} ${getSizeClasses()} rounded-lg font-medium transition-all duration-300 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

LuminaryButton.displayName = 'LuminaryButton';
