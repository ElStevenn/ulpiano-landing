'use client';

import Link from 'next/link';

interface PromoBannerProps {
  badge?: string;
  title?: string;
  ctaText?: string;
  ctaHref?: string;
}

export const PromoBanner = ({ 
  badge = "NOW ON DEMAND",
  title = "Introducing Luminary Insights: Automatically generate estate planning guidance",
  ctaText = "Watch Now",
  ctaHref = "/demo"
}: PromoBannerProps) => {
  return (
    <div className="promo-banner">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4">
          <span className="promo-badge">{badge}</span>
          <span className="text-sm font-medium">{title}</span>
        </div>
        <Link 
          href={ctaHref}
          className="flex items-center gap-2 text-sm font-semibold hover:underline"
        >
          {ctaText} →
        </Link>
      </div>
    </div>
  );
};
