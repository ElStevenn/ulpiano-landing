'use client';

import Link from 'next/link';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';

export default function AsesoriasHero() {
  return (
    <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-hidden text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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

      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <div className="py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section - Text and Features */}
            <div className="space-y-8">
              <AnimatedSection className="fade-in-up delay-100">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.15] text-white">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Ahorra tiempo y potencia tu asesoría
                  </span>
                  <br />
                  <span className="text-white">
                    con herramientas de automatización sucesoria
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-200">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Con ulpiano.es, agiliza el cálculo de impuestos, visualiza la
                  distribución de bienes y ofrece a tus clientes un servicio
                  integral en materia de herencias.
                </p>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-300">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Gestión Fiscal y Ahorro de Horas Manuales
                      </h3>
                      <p className="text-white/70 text-sm">
                        Cálculo automatizado de ISD con simulaciones que
                        contemplan reducciones y bonificaciones autonómicas.
                        Informes profesionales para facilitar autoliquidaciones.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Visualización Patrimonial y Escenarios de Distribución
                      </h3>
                      <p className="text-white/70 text-sm">
                        Diagramas interactivos y simulaciones en tiempo real
                        para mostrar la repartición de activos y el impacto
                        fiscal de cada escenario.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-white">
                        Optimización y Colaboración
                      </h3>
                      <p className="text-white/70 text-sm">
                        Flujo de trabajo digital centralizado y actualización
                        normativa constante para evitar sanciones y asegurar la
                        validez de cada documento.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Right Section - Contact Form */}
            <AnimatedSection className="fade-in-up delay-400">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Solicita una demo personalizada
                </h2>

                <form className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label
                        htmlFor="firstName"
                        className="text-white/80 text-sm"
                      >
                        Nombre
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Nombre"
                        className="mt-1 bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="lastName"
                        className="text-white/80 text-sm"
                      >
                        Apellidos
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Apellidos"
                        className="mt-1 bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-white/80 text-sm">
                      Email profesional
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@asesoria.es"
                      className="mt-1 bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="jobTitle" className="text-white/80 text-sm">
                      Cargo
                    </Label>
                    <Input
                      id="jobTitle"
                      type="text"
                      placeholder="Asesor, Socio, etc."
                      className="mt-1 bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-white/80 text-sm">
                      Teléfono
                    </Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+34 600 000 000"
                      className="mt-1 bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="source" className="text-white/80 text-sm">
                      ¿Cómo nos conociste?
                    </Label>
                    <Input
                      id="source"
                      type="text"
                      placeholder="Referencia, LinkedIn, Google, etc."
                      className="mt-1 bg-white/90 border-0 text-gray-900 placeholder:text-gray-500"
                    />
                  </div>

                  <div className="pt-4">
                    <LuminaryButton
                      type="submit"
                      variant="primary"
                      className="w-full px-8 py-4 font-semibold text-lg"
                    >
                      Solicitar demo
                    </LuminaryButton>
                  </div>

                  <p className="text-xs text-white/60 text-center">
                    Ulpiano necesita la información de contacto que nos
                    proporcionas para contactarte sobre nuestros productos y
                    servicios. Puedes darte de baja de estas comunicaciones en
                    cualquier momento. Para más información sobre cómo darte de
                    baja, así como nuestras prácticas de privacidad y compromiso
                    con la protección de tu privacidad, consulta nuestra
                    Política de Privacidad.
                  </p>
                </form>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Fade transition to next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgb(15 23 42))',
        }}
      />
    </section>
  );
}
