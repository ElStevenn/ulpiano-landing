'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { createScrollHandler } from '@/lib/scrollUtils';

function FooterGroup({
  title,
  children,
  className = '',
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      {title && (
        <h3 className="font-bold text-[15px] mb-4 text-slate-900">{title}</h3>
      )}
      {children}
    </div>
  );
}

function FooterSubgroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-3 last:mb-0">
      <h4 className="text-[12px] font-semibold uppercase tracking-wider text-slate-900 mb-2">
        {title}
      </h4>
      {children}
    </div>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-[13px] text-slate-600 hover:text-slate-900 transition-colors block py-1"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <footer className="border-t border-slate-200 mt-12 sm:mt-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-x-6 sm:gap-x-8 gap-y-6 sm:gap-y-8 lg:gap-y-0 text-[13px]">
          {/* Columna 1: Contacto */}
          <div>
            <p className="text-[15px] font-semibold text-slate-900 mb-4 leading-tight">
              Plataforma integral para la planificación sucesoria
            </p>
            <FooterGroup title="Contacto">
              <div className="grid gap-1.5">
                <a
                  href="mailto:contacto@ulpiano.com"
                  className="text-[13px] text-slate-600 hover:text-slate-900 transition-colors"
                >
                  contacto@ulpiano.com
                </a>
                <a
                  href="tel:+34900123456"
                  className="text-[13px] text-slate-600 hover:text-slate-900 transition-colors"
                >
                  +34 900 123 456
                </a>
              </div>
            </FooterGroup>
          </div>

          {/* Columna 2: Hecho para */}
          <div>
            <FooterGroup title="Hecho para">
              <nav className="grid gap-1.5">
                <FooterLink href="/notarias">Notarías</FooterLink>
                <FooterLink href="/despacho-de-abogados">
                  Despachos de abogados
                </FooterLink>
                <FooterLink href="/asesorias">Asesorías</FooterLink>
                <FooterLink href="/family-office">Family office</FooterLink>
                <FooterLink href="/funerarias">Funerarias</FooterLink>
                <FooterLink href="/aseguradoras">Aseguradoras</FooterLink>
                <FooterLink href="/beneficios-corporativos">
                  Beneficios corporativos para empleados
                </FooterLink>
              </nav>
            </FooterGroup>
          </div>

          {/* Columna 3: Modelos */}
          <div>
            <FooterGroup title="Modelos">
              <nav className="grid gap-1.5">
                <FooterLink href="/modelo-650">Modelo 650</FooterLink>
                <FooterLink href="/modelo-651">Modelo 651</FooterLink>
                <FooterLink href="/modelo-652">Modelo 652</FooterLink>
                <FooterLink href="/modelo-653">Modelo 653</FooterLink>
                <FooterLink href="/modelo-660">Modelo 660</FooterLink>
              </nav>
            </FooterGroup>
          </div>

          {/* Columna 4: Producto */}
          <div>
            <FooterGroup title="Producto">
              <FooterSubgroup title="Entiende el presente">
                <nav className="grid gap-1.5">
                  {isHomePage ? (
                    <a
                      href="#abstracciones"
                      onClick={createScrollHandler('abstracciones')}
                      className="text-[13px] text-slate-600 hover:text-slate-900 transition-colors block py-1 cursor-pointer"
                    >
                      Abstracciones de documentos
                    </a>
                  ) : (
                    <FooterLink href="/#abstracciones">
                      Abstracciones de documentos
                    </FooterLink>
                  )}
                  {isHomePage ? (
                    <a
                      href="#arbol-familiar"
                      onClick={createScrollHandler('arbol-familiar')}
                      className="text-[13px] text-slate-600 hover:text-slate-900 transition-colors block py-1 cursor-pointer"
                    >
                      Árbol familiar
                    </a>
                  ) : (
                    <FooterLink href="/#arbol-familiar">
                      Árbol familiar
                    </FooterLink>
                  )}
                  {isHomePage ? (
                    <a
                      href="#inventario-bienes"
                      onClick={createScrollHandler('inventario-bienes')}
                      className="text-[13px] text-slate-600 hover:text-slate-900 transition-colors block py-1 cursor-pointer"
                    >
                      Creación de inventario de bienes
                    </a>
                  ) : (
                    <FooterLink href="/#inventario-bienes">
                      Creación de inventario de bienes
                    </FooterLink>
                  )}
                </nav>
              </FooterSubgroup>
              <FooterSubgroup title="Planifica para mañana">
                <nav className="grid gap-1.5">
                  {isHomePage ? (
                    <a
                      href="#escenarios"
                      onClick={createScrollHandler('escenarios', {
                        onAfterScroll: () => {
                          window.dispatchEvent(
                            new CustomEvent('activateTab', {
                              detail: 'escenarios',
                            })
                          );
                        },
                      })}
                      className="text-[13px] text-slate-600 hover:text-slate-900 transition-colors block py-1 cursor-pointer"
                    >
                      Creación de escenarios
                    </a>
                  ) : (
                    <FooterLink href="/#escenarios">
                      Creación de escenarios
                    </FooterLink>
                  )}
                  {isHomePage ? (
                    <a
                      href="#escenarios"
                      onClick={createScrollHandler('escenarios', {
                        onAfterScroll: () => {
                          window.dispatchEvent(
                            new CustomEvent('activateTab', {
                              detail: 'calculador',
                            })
                          );
                        },
                      })}
                      className="text-[13px] text-slate-600 hover:text-slate-900 transition-colors block py-1 cursor-pointer"
                    >
                      Calculador
                    </a>
                  ) : (
                    <FooterLink href="/#escenarios">Calculador</FooterLink>
                  )}
                  {isHomePage ? (
                    <a
                      href="#escenarios"
                      onClick={createScrollHandler('escenarios', {
                        onAfterScroll: () => {
                          window.dispatchEvent(
                            new CustomEvent('activateTab', {
                              detail: 'proyecciones',
                            })
                          );
                        },
                      })}
                      className="text-[13px] text-slate-600 hover:text-slate-900 transition-colors block py-1 cursor-pointer"
                    >
                      Proyecciones
                    </a>
                  ) : (
                    <FooterLink href="/#escenarios">Proyecciones</FooterLink>
                  )}
                </nav>
              </FooterSubgroup>
              <FooterSubgroup title="Implementa y gestiona">
                <nav className="grid gap-1.5">
                  <FooterLink href="/ulpiano-ia/asistente">
                    Ulpiano IA
                  </FooterLink>
                  <FooterLink href="/ulpiano-ia/generacion-documentos-ia">
                    Generación de documentos
                  </FooterLink>
                  <FooterLink href="/ulpiano-ia/procesamiento-inteligente-documentos">
                    Procesamiento de documentos
                  </FooterLink>
                  {isHomePage ? (
                    <a
                      href="#portal-cliente"
                      onClick={createScrollHandler('portal-cliente')}
                      className="text-[13px] text-slate-600 hover:text-slate-900 transition-colors block py-1 cursor-pointer"
                    >
                      Portal del cliente
                    </a>
                  ) : (
                    <FooterLink href="/#portal-cliente">
                      Portal del cliente
                    </FooterLink>
                  )}
                </nav>
              </FooterSubgroup>
            </FooterGroup>
          </div>

          {/* Columna 5: Empresa & Recursos */}
          <div>
            <FooterGroup title="Empresa & Recursos">
              <FooterSubgroup title="Empresa">
                <nav className="grid gap-1.5">
                  <FooterLink href="/about">Sobre nosotros</FooterLink>
                  <FooterLink href="/careers">Únete al equipo</FooterLink>
                  <FooterLink href="/contact">Contacto</FooterLink>
                  <FooterLink href="/legal">Legal</FooterLink>
                </nav>
              </FooterSubgroup>
              <FooterSubgroup title="Recursos">
                <nav className="grid gap-1.5">
                  <FooterLink href="/support">Soporte</FooterLink>
                  <FooterLink href="/blog">Blog</FooterLink>
                  <FooterLink href="/guides">Guías</FooterLink>
                </nav>
              </FooterSubgroup>
            </FooterGroup>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="text-[11px] text-slate-500">
              © {new Date().getFullYear()} Ulpiano
            </div>
            <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] text-slate-600">
              <Link
                href="/privacy"
                className="hover:text-slate-900 transition-colors"
              >
                Privacidad
              </Link>
              <span className="text-slate-300">·</span>
              <Link
                href="/terms"
                className="hover:text-slate-900 transition-colors"
              >
                Términos
              </Link>
              <span className="text-slate-300">·</span>
              <Link
                href="/sitemap.xml"
                className="hover:text-slate-900 transition-colors"
              >
                Sitemap
              </Link>
              <span className="text-slate-300">·</span>
              <Link
                href="/legal"
                className="hover:text-slate-900 transition-colors"
              >
                Legal
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
