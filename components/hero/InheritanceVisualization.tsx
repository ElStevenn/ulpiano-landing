'use client';

import { motion } from 'framer-motion';
import { TrendingDown, Clock, Shield } from 'lucide-react';
import { useMouseParallax } from '@/lib/hooks/useMouseParallax';
import { FloatingMetric } from './FloatingMetric';
import Image from 'next/image';

/* ─── Main Component ─── */
export function InheritanceVisualization() {
  const parallax = useMouseParallax(20, 0.06);

  return (
    <div className="relative w-full flex items-center justify-center" style={{ minHeight: 480 }}>
      {/* Parallax wrapper */}
      <motion.div
        className="relative w-full"
        style={{
          transform: `perspective(1200px) rotateY(${parallax.x * 0.5}deg) rotateX(${-parallax.y * 0.5}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow behind the dashboard */}
        <div className="absolute -inset-8 rounded-3xl bg-blue-500/[0.07] blur-[60px] pointer-events-none" />
        <div className="absolute -inset-6 rounded-3xl bg-violet-500/[0.05] blur-[40px] pointer-events-none" style={{ top: '20%' }} />

        {/* Dashboard frame */}
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.08] bg-white/[0.03] shadow-2xl shadow-black/30">
          {/* Top gradient edge */}
          <div className="absolute top-0 left-4 right-4 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent z-10" />

          {/* Dashboard image */}
          <div className="relative w-full aspect-[16/10]">
            <Image
              src="/ulpiano-backoffice.png"
              alt="Panel de control de Ulpiano"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {/* Fade overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#030712] to-transparent" />
          </div>
        </div>
      </motion.div>

      {/* Floating metrics — positioned around the dashboard */}
      <div className="absolute -bottom-5 -left-4 lg:-left-8 z-20 float-gentle">
        <FloatingMetric
          label="Ahorro fiscal estimado"
          value="€ 12.340"
          icon={<TrendingDown className="w-4 h-4" />}
          delay={1.4}
        />
      </div>
      <div className="absolute -top-4 -right-4 lg:-right-8 z-20 float-gentle" style={{ animationDelay: '1s' }}>
        <FloatingMetric
          label="Seguridad jurídica"
          value="100% auditable"
          icon={<Shield className="w-4 h-4" />}
          delay={1.8}
        />
      </div>
      <div className="absolute -bottom-5 -right-4 lg:-right-6 z-20 float-gentle" style={{ animationDelay: '2s' }}>
        <FloatingMetric
          label="Tiempo por expediente"
          value="-65% más rápido"
          icon={<Clock className="w-4 h-4" />}
          delay={2.2}
        />
      </div>
    </div>
  );
}
