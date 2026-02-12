'use client';

import Link from 'next/link';
import Image from 'next/image';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import { ChevronDown, Menu, X, FileText, Users, Home, BarChart3, Calculator, TrendingUp, Cpu, Brain, FileSearch, FilePlus, BookOpen, Headphones, PenLine, Building2, Briefcase, Phone, Scale, Sparkles, Monitor } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { createScrollHandler } from '@/lib/scrollUtils';
import { useScrollProgress } from '@/lib/hooks/useScrollProgress';
import { motion, AnimatePresence } from 'framer-motion';

type DropdownItem = {
  label: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  scrollId?: string;
  tabDetail?: string;
};

type NavDropdown = {
  label: string;
  items: DropdownItem[];
};

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const { isScrolled } = useScrollProgress(30);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const isHomePage = pathname === '/';

  const navDropdowns: Record<string, NavDropdown> = {
    producto: {
      label: 'Producto',
      items: [
        { label: 'Abstracciones de documentos', description: 'Digitaliza documentos y extrae información clave', href: '/#abstracciones', icon: <FileSearch className="w-4 h-4" />, scrollId: 'abstracciones' },
        { label: 'Árbol familiar', description: 'Visualiza herederos y títulos sucesorios', href: '/#arbol-familiar', icon: <Users className="w-4 h-4" />, scrollId: 'arbol-familiar' },
        { label: 'Inventario de bienes', description: 'Centraliza el patrimonio en un inventario digital', href: '/#inventario-bienes', icon: <Home className="w-4 h-4" />, scrollId: 'inventario-bienes' },
        { label: 'Creación de escenarios', description: 'Crea escenarios con cálculos precisos', href: '/#escenarios', icon: <BarChart3 className="w-4 h-4" />, scrollId: 'escenarios', tabDetail: 'escenarios' },
        { label: 'Calculador fiscal', description: 'Simula la carga fiscal de cada escenario', href: '/#escenarios', icon: <Calculator className="w-4 h-4" />, scrollId: 'escenarios', tabDetail: 'calculador' },
        { label: 'Proyecciones', description: 'Proyecciones dinámicas de distribución', href: '/#escenarios', icon: <TrendingUp className="w-4 h-4" />, scrollId: 'escenarios', tabDetail: 'proyecciones' },
        { label: 'Creación de documentos', description: 'Genera documentos legales listos para revisión', href: '/#creacion-documentos', icon: <FilePlus className="w-4 h-4" />, scrollId: 'creacion-documentos' },
        { label: 'Portal del cliente', description: 'Espacio seguro para consultar y firmar', href: '/#portal-cliente', icon: <Monitor className="w-4 h-4" />, scrollId: 'portal-cliente' },
      ],
    },
    tecnologia: {
      label: 'Ulpiano AI',
      items: [
        { label: 'Ulpiano IA', description: 'Chat asistente del expediente', href: '/ulpiano-ia/asistente', icon: <Brain className="w-4 h-4" /> },
        { label: 'Procesamiento inteligente', description: 'Digitaliza y simplifica documentos sucesorios', href: '/ulpiano-ia/procesamiento-inteligente-documentos', icon: <Cpu className="w-4 h-4" /> },
        { label: 'Generación con IA', description: 'Crea testamentos y escrituras en minutos', href: '/ulpiano-ia/generacion-documentos-ia', icon: <Sparkles className="w-4 h-4" /> },
      ],
    },
    recursos: {
      label: 'Recursos',
      items: [
        { label: 'Soporte', description: 'Centro de ayuda y asistencia', href: '/support', icon: <Headphones className="w-4 h-4" /> },
        { label: 'Blog', description: 'Artículos y novedades del sector', href: '/blog', icon: <PenLine className="w-4 h-4" /> },
        { label: 'Guías', description: 'Guías prácticas paso a paso', href: '/guides', icon: <BookOpen className="w-4 h-4" /> },
      ],
    },
    empresa: {
      label: 'Empresa',
      items: [
        { label: 'Sobre nosotros', description: 'Conoce al equipo de Ulpiano', href: '/about', icon: <Building2 className="w-4 h-4" /> },
        { label: 'Únete al equipo', description: 'Oportunidades profesionales', href: '/careers', icon: <Briefcase className="w-4 h-4" /> },
        { label: 'Contacto', description: 'Ponte en contacto con nosotros', href: '/contact', icon: <Phone className="w-4 h-4" /> },
        { label: 'Legal', description: 'Política de privacidad y términos', href: '/legal', icon: <Scale className="w-4 h-4" /> },
      ],
    },
  };

  const handleDropdownEnter = useCallback((key: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    const trigger = triggerRefs.current[key];
    if (trigger) {
      const rect = trigger.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 8,
        left: rect.left + rect.width / 2,
        width: key === 'producto' ? 520 : 380,
      });
    }
    setActiveDropdown(key);
  }, []);

  const handleDropdownLeave = useCallback(() => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  }, []);

  const handleDropdownMenuEnter = useCallback(() => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
  }, []);

  const handleItemClick = useCallback((item: DropdownItem) => {
    setActiveDropdown(null);
    setIsOpen(false);

    if (isHomePage && item.scrollId) {
      const scrollOptions: Parameters<typeof createScrollHandler>[1] = {};
      if (item.tabDetail) {
        scrollOptions.onAfterScroll = () => {
          window.dispatchEvent(
            new CustomEvent('activateTab', { detail: item.tabDetail })
          );
        };
      }
      createScrollHandler(item.scrollId, scrollOptions)({ preventDefault: () => { } } as React.MouseEvent<HTMLAnchorElement>);
    } else if (item.tabDetail && !isHomePage) {
      router.push(item.href);
      setTimeout(() => {
        window.dispatchEvent(
          new CustomEvent('activateTab', { detail: item.tabDetail })
        );
      }, 800);
    } else {
      router.push(item.href);
    }
  }, [isHomePage, router]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setMobileAccordion(null);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Update dropdown position on scroll/resize
  useEffect(() => {
    if (!activeDropdown) return;
    const updatePosition = () => {
      const trigger = triggerRefs.current[activeDropdown];
      if (trigger) {
        const rect = trigger.getBoundingClientRect();
        setDropdownPosition((prev) => ({
          ...prev,
          top: rect.bottom + 8,
          left: rect.left + rect.width / 2,
        }));
      }
    };
    window.addEventListener('scroll', updatePosition, true);
    window.addEventListener('resize', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition, true);
      window.removeEventListener('resize', updatePosition);
    };
  }, [activeDropdown]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 w-full glass-header overflow-x-hidden transition-all duration-500',
          isScrolled && 'scrolled'
        )}
      >
        <div
          className={cn(
            'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between text-white transition-all duration-500',
            isScrolled ? 'h-[60px]' : 'h-[72px]'
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="ULPIANO inicio"
          >
            <div className="relative flex items-center justify-center">
              {/* Glow effect behind logo */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-md" />
              <Image
                src="/ulpiano-logo.png"
                alt="Logotipo de ULPIANO"
                width={40}
                height={40}
                className={cn(
                  'relative z-10 transition-all duration-500 group-hover:scale-105 drop-shadow-lg',
                  isScrolled ? 'w-[32px] h-[32px]' : 'w-[40px] h-[40px]'
                )}
                style={{ filter: 'brightness(1.2) drop-shadow(0 2px 4px rgba(0,0,0,0.3))' }}
                priority
              />
            </div>
            <span className="text-[17px] font-semibold tracking-[0.08em] text-white/95 group-hover:text-white transition-colors duration-300">
              ULPIANO
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 text-sm">
            {Object.entries(navDropdowns).map(([key, dropdown]) => (
              <div
                key={key}
                className="relative"
                onMouseEnter={() => handleDropdownEnter(key)}
                onMouseLeave={handleDropdownLeave}
              >
                <button
                  ref={(el) => { triggerRefs.current[key] = el; }}
                  className={cn(
                    'relative flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 text-white/70 hover:text-white hover:bg-white/[0.05]',
                    activeDropdown === key && 'text-white bg-white/[0.05]'
                  )}
                >
                  {dropdown.label}
                  <ChevronDown
                    className={cn(
                      'w-3.5 h-3.5 transition-transform duration-200',
                      activeDropdown === key && 'rotate-180'
                    )}
                  />
                </button>
              </div>
            ))}

            {/* Precios — standalone link */}
            <Link
              href="/precios"
              className={cn(
                'relative px-3 py-2 rounded-lg transition-all duration-200',
                isActive('/precios')
                  ? 'text-white bg-white/[0.05]'
                  : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
              )}
            >
              Precios
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" aria-label="Iniciar sesión">
              <button
                className="px-4 py-2 text-sm text-white/65 hover:text-white border border-white/[0.07] hover:border-white/[0.15] rounded-lg bg-transparent hover:bg-white/[0.04] transition-all duration-300 cursor-pointer font-medium"
              >
                Iniciar sesión
              </button>
            </Link>
            <Link href="/demo">
              <LuminaryButton
                variant="glow"
                size="sm"
                className="px-5 py-[9px] text-sm"
              >
                Solicitar demo
              </LuminaryButton>
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white/80 hover:text-white hover:bg-white/[0.05] transition-all"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* ========== Desktop Mega Menu — rendered as portal-like fixed overlay ========== */}
      <AnimatePresence>
        {activeDropdown && (
          <>
            {/* Invisible bridge area */}
            <div
              className="fixed z-[99] pointer-events-auto"
              style={{
                top: `${dropdownPosition.top - 12}px`,
                left: `${dropdownPosition.left - dropdownPosition.width / 2}px`,
                width: `${dropdownPosition.width}px`,
                height: '12px',
              }}
              onMouseEnter={handleDropdownMenuEnter}
              onMouseLeave={handleDropdownLeave}
            />

            <motion.div
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed z-[100] glass-mega-menu rounded-2xl overflow-hidden"
              style={{
                top: `${dropdownPosition.top}px`,
                left: `${dropdownPosition.left}px`,
                transform: 'translateX(-50%)',
                width: `${dropdownPosition.width}px`,
              }}
              onMouseEnter={handleDropdownMenuEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <div className="p-2">
                {activeDropdown === 'producto' ? (
                  <div className="grid grid-cols-2 gap-1">
                    {navDropdowns.producto.items.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleItemClick(item)}
                        className="flex items-start gap-3 p-3 rounded-xl text-left transition-all duration-200 hover:bg-white/[0.05] group cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.06] text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all shrink-0 mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-white/40 group-hover:text-white/60 transition-colors mt-0.5 leading-relaxed">
                            {item.description}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-col gap-1">
                    {navDropdowns[activeDropdown]?.items.map((item, i) => (
                      <button
                        key={i}
                        onClick={() => handleItemClick(item)}
                        className="flex items-center gap-3 p-3 rounded-xl text-left transition-all duration-200 hover:bg-white/[0.05] group cursor-pointer"
                      >
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.06] text-blue-400 group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                            {item.label}
                          </div>
                          <div className="text-xs text-white/40 group-hover:text-white/60 transition-colors mt-0.5">
                            {item.description}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ========== Mobile Drawer ========== */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 top-0 z-40 lg:hidden">
            {/* Backdrop — fades in */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Panel — slides in from right */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#0a0c19] border-l border-white/[0.08] overflow-y-auto"
              style={{ scrollbarWidth: 'none' }}
            >
              {/* Spacer for the header */}
              <div className={cn('transition-all duration-500', isScrolled ? 'h-[60px]' : 'h-[72px]')} />
              <div className="p-5 flex flex-col gap-1 text-white">
                {Object.entries(navDropdowns).map(([key, dropdown]) => (
                  <div key={key}>
                    {/* Accordion trigger */}
                    <button
                      onClick={() => setMobileAccordion(mobileAccordion === key ? null : key)}
                      className={cn(
                        'flex items-center justify-between w-full px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200',
                        mobileAccordion === key
                          ? 'text-white bg-white/[0.05]'
                          : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
                      )}
                    >
                      {dropdown.label}
                      <ChevronDown
                        className={cn(
                          'w-4 h-4 transition-transform duration-200',
                          mobileAccordion === key && 'rotate-180'
                        )}
                      />
                    </button>
                    {/* Accordion content */}
                    <AnimatePresence initial={false}>
                      {mobileAccordion === key && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pl-2 pr-1 pb-2 pt-1 flex flex-col gap-0.5">
                            {dropdown.items.map((item, i) => (
                              <button
                                key={i}
                                onClick={() => handleItemClick(item)}
                                className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-left transition-all duration-200 hover:bg-white/[0.05]"
                              >
                                <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-white/[0.06] text-blue-400 shrink-0">
                                  {item.icon}
                                </div>
                                <span className="text-sm text-white/80">{item.label}</span>
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <Link
                  href="/precios"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    'px-3 py-3 rounded-xl transition-all text-sm font-medium',
                    isActive('/precios')
                      ? 'text-white bg-white/[0.05]'
                      : 'text-white/70 hover:text-white hover:bg-white/[0.05]'
                  )}
                >
                  Precios
                </Link>

                <div className="mt-3 pt-4 border-t border-white/[0.06] flex flex-col gap-3">
                  <Link href="/demo" onClick={() => setIsOpen(false)}>
                    <LuminaryButton
                      variant="primary"
                      size="md"
                      className="w-full justify-center"
                    >
                      Solicitar demo
                    </LuminaryButton>
                  </Link>
                  <Link href="/login" onClick={() => setIsOpen(false)} aria-label="Iniciar sesión">
                    <LuminaryButton
                      variant="ghost"
                      size="md"
                      className="w-full justify-center"
                    >
                      Iniciar sesión
                    </LuminaryButton>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
