'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface FloatingMetricProps {
  label: string;
  value: string;
  icon: React.ReactNode;
  delay?: number;
  className?: string;
}

export function FloatingMetric({ label, value, icon, delay = 0, className = '' }: FloatingMetricProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`group relative ${className}`}
    >
      {/* Subtle glow behind */}
      <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      {/* Card */}
      <div className="relative flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl overflow-hidden">
        {/* Top gradient edge */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 text-blue-400">
          {icon}
        </div>
        <div>
          <div className="text-[11px] text-white/45 font-medium">{label}</div>
          <div className="text-sm font-semibold text-white">{value}</div>
        </div>
      </div>
    </motion.div>
  );
}
