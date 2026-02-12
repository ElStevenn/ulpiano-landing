'use client';

import { ReactNode } from 'react';

interface LuminaryCardProps {
  title?: string;
  content: ReactNode;
  status?: 'alert' | 'warning' | 'success' | 'info';
  variant?: 'default' | 'elevated' | 'outlined';
  className?: string;
}

export const LuminaryCard = ({ 
  title, 
  content, 
  status, 
  variant = "default",
  className = ""
}: LuminaryCardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case 'elevated':
        return 'bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl';
      case 'outlined':
        return 'bg-transparent border-2 border-blue-400/30 shadow-none';
      default:
        return 'bg-white/10 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md';
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case 'alert':
        return 'bg-red-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'success':
        return 'bg-green-500';
      case 'info':
        return 'bg-blue-500';
      default:
        return '';
    }
  };

  return (
    <div className={`rounded-xl p-6 transition-all duration-300 ${getVariantClasses()} ${className}`}>
      {status && <div className={`w-2 h-2 rounded-full ${getStatusColor()} mb-3`}></div>}
      {title && <h3 className="text-lg font-semibold mb-3 text-white">{title}</h3>}
      <div className="text-gray-300">{content}</div>
    </div>
  );
};
