'use client';

import Link from 'next/link';
import { LuminaryButton } from './LuminaryButton';

interface MenuItem {
  id: string;
  label: string;
  href: string;
  hasDropdown?: boolean;
}

interface LuminaryNavigationProps {
  logo?: string;
  menuItems?: MenuItem[];
  ctaButton?: string;
  ctaHref?: string;
}

export const LuminaryNavigation = ({ 
  logo = "/logo.svg",
  menuItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'product', label: 'Product', href: '/product', hasDropdown: true },
    { id: 'solutions', label: 'Solutions', href: '/solutions', hasDropdown: true },
    { id: 'about', label: 'About Us', href: '/about' },
    { id: 'security', label: 'Security', href: '/security' },
    { id: 'resources', label: 'Resources', href: '/resources' }
  ],
  ctaButton = "Contact sales",
  ctaHref = "/contact"
}: LuminaryNavigationProps) => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/5 backdrop-blur-sm border-b border-white/10">
      <div className="flex items-center">
        <Link href="/">
          <img src={logo} alt="Ulpiano" className="h-8" />
        </Link>
      </div>
      
      <ul className="hidden md:flex items-center space-x-8">
        {menuItems.map(item => (
          <li key={item.id}>
            <Link href={item.href} className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors">
              {item.label}
              {item.hasDropdown && <span className="text-xs">▼</span>}
            </Link>
          </li>
        ))}
      </ul>
      
      <Link href={ctaHref}>
        <LuminaryButton 
          variant="primary" 
          size="md"
        >
          {ctaButton}
        </LuminaryButton>
      </Link>
    </nav>
  );
};
