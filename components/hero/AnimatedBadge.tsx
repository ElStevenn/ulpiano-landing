'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface AnimatedBadgeProps {
  text: string;
}

export function AnimatedBadge({ text }: AnimatedBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-violet-500/30 bg-violet-500/[0.08] text-sm text-violet-300 mb-6 overflow-hidden"
      style={{ animation: 'badge-glow 3s ease-in-out infinite' }}
    >
      {/* Shimmer sweep */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(139, 92, 246, 0.15), transparent)',
          animation: 'shimmer-sweep 4s ease-in-out infinite',
          animationDelay: '1s',
        }}
      />
      <Sparkles className="w-4 h-4 relative z-10" />
      <span className="relative z-10 font-medium">{text}</span>
    </motion.div>
  );
}
