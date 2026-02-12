'use client';

import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import CTABanner from '@/components/HeroCTA';
import HelpContact from '@/components/sections/HelpContact';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Clock,
  CheckCircle,
} from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Introduce tu nombre'),
  email: z.string().email('Email no válido'),
  phone: z.string().min(9, 'Introduce un teléfono válido').optional(),
  company: z.string().optional(),
  subject: z.string().min(5, 'Introduce un asunto'),
  message: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

type ContactFormInput = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormInput>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormInput) => {
    try {
      setStatus('idle');
      const res = await fetch('/api/contact-sales', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error('Error');
      setStatus('ok');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <main className="mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
      {/* Hero Section */}
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
            <div className="max-w-4xl mx-auto text-center">
              <AnimatedSection className="fade-in-up delay-100">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-white mb-6">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Hablemos
                  </span>
                  <br />
                  <span className="text-white">Estamos aquí para ayudarte</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-200">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  ¿Tienes alguna pregunta? ¿Quieres conocer más sobre Ulpiano?
                  Estamos a tu disposición para resolver cualquier duda.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Información de contacto */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Información de contacto
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Elige la forma que prefieras para ponerte en contacto con
                nosotros
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection className="fade-in-up delay-200">
              <div className="bg-white rounded-xl border shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-gray-600 mb-4">
                  Escríbenos y te responderemos en menos de 24 horas
                </p>
                <a
                  href="mailto:contacto@ulpiano.es"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  contacto@ulpiano.es
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-300">
              <div className="bg-white rounded-xl border shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Teléfono</h3>
                <p className="text-gray-600 mb-4">
                  Llámanos de lunes a viernes de 9:00 a 18:00
                </p>
                <a
                  href="tel:+34930478967"
                  className="text-purple-600 hover:text-purple-700 font-medium"
                >
                  +34 930 478 967
                </a>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-400">
              <div className="bg-white rounded-xl border shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Chat en vivo</h3>
                <p className="text-gray-600 mb-4">
                  Chatea con nuestro equipo en tiempo real
                </p>
                <button className="text-green-600 hover:text-green-700 font-medium">
                  Abrir chat
                </button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Formulario de contacto */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Envíanos un mensaje
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Completa el formulario y nos pondremos en contacto contigo lo
                antes posible
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-200">
            <div className="bg-white rounded-xl border shadow-lg p-8 md:p-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">
                      Nombre <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      {...register('name')}
                      className="mt-2"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="email">
                      Email <span className="text-red-500">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@empresa.com"
                      {...register('email')}
                      className="mt-2"
                    />
                    {errors.email && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone">Teléfono</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+34 600 000 000"
                      {...register('phone')}
                      className="mt-2"
                    />
                    {errors.phone && (
                      <p className="text-sm text-red-600 mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="company">Empresa</Label>
                    <Input
                      id="company"
                      placeholder="Nombre de tu empresa"
                      {...register('company')}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">
                    Asunto <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="subject"
                    placeholder="¿Sobre qué quieres hablar?"
                    {...register('subject')}
                    className="mt-2"
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <Label htmlFor="message">
                    Mensaje <span className="text-red-500">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos más detalles..."
                    rows={6}
                    {...register('message')}
                    className="mt-2"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-600 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                {status === 'ok' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <p className="text-green-800">
                      ¡Mensaje enviado correctamente! Te responderemos pronto.
                    </p>
                  </div>
                )}

                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800">
                      Hubo un error al enviar el mensaje. Por favor, inténtalo
                      de nuevo.
                    </p>
                  </div>
                )}

                <div className="flex justify-end">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                  >
                    {isSubmitting ? (
                      'Enviando...'
                    ) : (
                      <>
                        Enviar mensaje
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Horarios y ubicación */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection className="fade-in-up delay-100">
              <div className="bg-white rounded-xl border shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Horario de atención</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="font-medium">Lunes - Viernes</span>
                    <span className="text-gray-600">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sábados</span>
                    <span className="text-gray-600">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Domingos</span>
                    <span className="text-gray-600">Cerrado</span>
                  </div>
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-600">
                      * El chat en vivo está disponible 24/7 para clientes
                      premium
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection className="fade-in-up delay-200">
              <div className="bg-white rounded-xl border shadow-lg p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="text-2xl font-bold">Oficina principal</h3>
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700">
                    <strong>Ulpiano</strong>
                    <br />
                    Madrid, España
                  </p>
                  <p className="text-sm text-gray-600">
                    Trabajamos principalmente de forma remota, pero puedes
                    contactarnos para coordinar una reunión presencial si lo
                    necesitas.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* HelpContact */}
      <HelpContact />

      {/* CTA Banner */}
      <CTABanner
        title="¿Listo para empezar?"
        primaryLabel="Prueba gratuita"
        secondaryLabel="Solicita una demo"
        primaryHref="/demo"
        secondaryHref="/demo"
      />
    </main>
  );
}
