'use client';

import React from 'react';
import * as framerMotion from 'framer-motion';
import Link from 'next/link';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { CheckCircle } from 'lucide-react';
import { HeroBackground } from '@/components/hero/HeroBackground';

export default function AsesoriasHero() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = framerMotion.useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const textOpacity = framerMotion.useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const textY = framerMotion.useTransform(scrollYProgress, [0, 0.4], ['0%', '20%']);
  const bgOpacity = framerMotion.useTransform(scrollYProgress, [0.5, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative w-full h-[150vh]" style={{ background: '#030712' }}>
      <framerMotion.motion.div 
        style={{ opacity: bgOpacity }}
        className="sticky top-0 h-screen w-full flex items-center overflow-hidden text-white"
      >
        <HeroBackground />

        <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 w-full pt-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Section */}
            <framerMotion.motion.div 
              style={{ opacity: textOpacity, y: textY }}
              className="space-y-8"
            >
              
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] xl:text-[4.5rem] font-bold tracking-tight leading-[1.05] text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Ahorra tiempo y potencia tu asesoría
                  </span>
                  <br />
                  <span className="text-white">
                    con herramientas de automatización sucesoria
                  </span>
                </h1>
              </div>

              <div>
                <p className="text-base md:text-xl text-white/60 leading-relaxed font-light mb-8">
                  Con ulpiano.es, agiliza el cálculo de impuestos, visualiza la
                  distribución de bienes y ofrece a tus clientes un servicio
                  integral en materia de herencias.
                </p>
              </div>

              <div>
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
              </div>
            
            </framerMotion.motion.div>

            {/* Right Section */}
            <framerMotion.motion.div 
              style={{ opacity: textOpacity, y: textY }}
            >
              
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
            
            </framerMotion.motion.div>
          </div>
        </div>

        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent, #030712)',
          }}
        />
      </framerMotion.motion.div>
    </section>
  );
}
