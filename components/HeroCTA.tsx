'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import { trackCTA } from '@/lib/tracking';

type CTABannerProps = {
  title: string;
  primaryLabel?: string; // "Start free trial"
  secondaryLabel?: string; // "Book a demo"
  primaryHref?: string; // "/demo" or "/trial"
  secondaryHref?: string; // "/demo" or "/contact"
  className?: string;
};

export default function CTABanner({
  title,
  primaryLabel = 'Start free trial',
  secondaryLabel = 'Book a demo',
  primaryHref = '/demo',
  secondaryHref = '/contact',
  className,
}: CTABannerProps) {
  return (
    <section
      role="region"
      aria-labelledby="cta-title"
      className={cn(
        'relative isolate full-bleed overflow-x-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
        className
      )}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="relative py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6 text-center">
          <AnimatedSection className="fade-in-up delay-100">
            <h2
              id="cta-title"
              className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.15] text-white"
            >
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {title}
              </span>
            </h2>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-200">
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              {/* Primario - Gradiente azul a púrpura */}
              <Link 
                href={primaryHref}
                onClick={() => trackCTA('cta_banner_primary', 'cta_banner', { label: primaryLabel })}
              >
                <LuminaryButton
                  size="lg"
                  variant="primary"
                  className="px-8 py-4 font-semibold text-lg"
                  data-cta-name="cta_banner_primary"
                  data-cta-location="cta_banner"
                >
                  {primaryLabel}
                </LuminaryButton>
              </Link>

              {/* Secundario - Transparente con borde */}
              <Link 
                href={secondaryHref}
                onClick={() => trackCTA('cta_banner_secondary', 'cta_banner', { label: secondaryLabel })}
              >
                <LuminaryButton
                  size="lg"
                  variant="secondary"
                  className="px-8 py-4 font-semibold text-lg"
                  data-cta-name="cta_banner_secondary"
                  data-cta-location="cta_banner"
                >
                  {secondaryLabel}
                </LuminaryButton>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
