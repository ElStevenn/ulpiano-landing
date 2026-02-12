'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { demoLeadSchema, type DemoLeadInput } from '@/lib/validations';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import {
  BookOpen,
  Building2,
  RotateCcw,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  Home,
} from 'lucide-react';

export default function DemoPage({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DemoLeadInput>({ resolver: zodResolver(demoLeadSchema) });
  const [status, setStatus] = useState<'idle' | 'ok' | 'error'>('idle');

  const onSubmit = async (data: DemoLeadInput) => {
    try {
      setStatus('idle');
      const res = await fetch('/api/lead', {
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

  const features = [
    {
      icon: BookOpen,
      title: 'Planificación y Tramitación',
      description: 'Gestión completa de expedientes sucesorios',
    },
    {
      icon: Building2,
      title: 'Fiscalidad Sucesoria',
      description: 'Cálculo automático de impuestos y obligaciones',
    },
    {
      icon: RotateCcw,
      title: 'Gestión Integral del Patrimonio',
      description: 'Visualización y optimización de activos',
    },
    {
      icon: Sparkles,
      title: 'IA',
      description: 'Inteligencia artificial para optimización',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center space-x-2 text-sm text-gray-300">
          <Link
            href="/"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <Home className="w-4 h-4" />
            Inicio
          </Link>
          <ChevronLeft className="w-4 h-4 rotate-180" />
          <span className="text-white font-medium">Solicitar Demo</span>
        </nav>
      </div>

      <div className="relative container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Section - Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Solicita una Demo Personalizada
                </span>
              </h1>

              <p className="text-xl text-gray-300 leading-relaxed">
                Ulpiano unifica la gestión de expedientes sucesorios, el cálculo
                de impuestos, y la visualización de escenarios de planificación.
              </p>
            </div>

            {/* Features Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">
                Funcionalidades que ofrece Ulpiano
              </h2>

              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-white/10 backdrop-blur-sm border border-blue-300 hover:bg-white/20 transition-all duration-200"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">
                        {feature.title}
                      </h3>
                      <p className="text-white/70 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="lg:pl-8">
            <div className="bg-white rounded-2xl shadow-xl border border-blue-300 p-8">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Form Header */}
                <div className="text-center mb-6">
                  <h3
                    className="text-2xl font-bold"
                    style={{ color: '#1a2332' }}
                  >
                    Solicita tu Demo
                  </h3>
                  <p style={{ color: '#6c757d' }}>
                    Descubre cómo Ulpiano puede transformar tu práctica
                  </p>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="firstName"
                      className="text-sm font-medium"
                      style={{ color: '#1a2332' }}
                    >
                      Nombre*
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Tu nombre"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      {...register('name')}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-600">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="lastName"
                      className="text-sm font-medium"
                      style={{ color: '#1a2332' }}
                    >
                      Apellido*
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Tu apellido"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      {...register('lastName')}
                    />
                    {errors.lastName && (
                      <p className="text-sm text-red-600">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium"
                    style={{ color: '#1a2332' }}
                  >
                    Correo electrónico*
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    {...register('email')}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="phone"
                    className="text-sm font-medium"
                    style={{ color: '#1a2332' }}
                  >
                    Teléfono*
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+34 600 000 000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    {...register('phone')}
                  />
                  {errors.phone && (
                    <p className="text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>

                {/* Company Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="company"
                    className="text-sm font-medium"
                    style={{ color: '#1a2332' }}
                  >
                    Empresa
                  </Label>
                  <Input
                    id="company"
                    placeholder="Nombre de tu empresa"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    {...register('company')}
                  />
                </div>

                {/* How did you hear about us */}
                <div className="space-y-2">
                  <Label
                    htmlFor="source"
                    className="text-sm font-medium"
                    style={{ color: '#1a2332' }}
                  >
                    ¿Cómo nos has conocido?
                  </Label>
                  <select
                    id="source"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
                    {...register('source')}
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="google">Google</option>
                    <option value="linkedin">LinkedIn</option>
                    <option value="referral">Recomendación</option>
                    <option value="event">Evento</option>
                    <option value="other">Otro</option>
                  </select>
                </div>

                {/* Privacy Notice */}
                <div className="text-xs text-gray-500 leading-relaxed">
                  Tu privacidad es importante para nosotros. HubSpot utiliza la
                  información que proporcionas para ponerse en contacto contigo
                  en relación con contenido, productos y servicios relevantes
                  para ti. Puedes darte de baja para dejar de recibir este tipo
                  de comunicaciones en cualquier momento. Si deseas obtener más
                  información sobre la protección de tus datos en HubSpot,
                  consulta nuestra{' '}
                  <a
                    href="#"
                    className="text-blue-500 hover:text-blue-600 hover:underline"
                  >
                    política de privacidad
                  </a>
                  .
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    'Enviando...'
                  ) : (
                    <>
                      Enviar formulario
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </Button>

                {/* Status Messages */}
                {status === 'ok' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-green-800 text-sm font-medium">
                      ¡Gracias! Te contactaremos en las próximas 24 horas.
                    </p>
                  </div>
                )}
                {status === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 text-sm font-medium">
                      Ha ocurrido un error. Por favor, inténtalo de nuevo.
                    </p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="relative container mx-auto px-4 py-8">
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-300 hover:text-white font-medium transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
