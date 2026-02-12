'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  Zap,
  Shield,
  Users,
  FileText,
  BarChart3,
  Home,
  CreditCard,
  Building2,
  Package,
  Brain,
  Globe,
  Target,
  TrendingUp,
  Clock,
  Eye,
  FileCheck,
  Calculator,
  Upload,
  Settings,
  Smartphone,
  Share,
  User,
  Trash2,
  ArrowLeft,
  HelpCircle,
  ChevronRight,
  Play,
  Star,
  Award,
  Lock,
  RefreshCw,
  Maximize2,
  Minimize2,
} from 'lucide-react';

// Componente Hero moderno con animaciones
function ModernHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-300 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Software líder en gestión de herencias</span>
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Potencia tu negocio
            </span>
            <br />
            <span className="text-white">con IA y el software líder</span>
            <br />
            <span className="text-white">en gestión de herencias</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transforma la complejidad legal en claridad digital. Automatiza
            procesos, reduce errores y ofrece un servicio excepcional a tus
            clientes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="#demo">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <span className="flex items-center gap-2">
                  Solicitar Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-75 transition-opacity"></div>
              </button>
            </Link>

            <Link href="#trial">
              <button className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-blue-300 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                <span className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Prueba Gratuita 14 días
                </span>
              </button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">95%</div>
              <div className="text-gray-400">Reducción de errores</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">6h</div>
              <div className="text-gray-400">Ahorro por expediente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">500+</div>
              <div className="text-gray-400">Profesionales confían</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

// Componente de características principales
function KeyFeatures() {
  const features = [
    {
      icon: Brain,
      title: 'Inteligencia Artificial',
      description:
        'Procesamiento inteligente de documentos con extracción automática de datos clave',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'Automatización Total',
      description:
        'Flujos de trabajo automatizados que reducen el tiempo de procesamiento en un 80%',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Shield,
      title: 'Seguridad Jurídica',
      description:
        'Cumplimiento normativo garantizado con auditoría completa de todos los procesos',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Users,
      title: 'Colaboración en Tiempo Real',
      description:
        'Portal seguro para clientes y herederos con acceso controlado y transparente',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Por qué elegir <span className="text-blue-600">Ulpiano</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La plataforma más avanzada para profesionales que buscan excelencia
            en la gestión de herencias
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente de demostración interactiva
function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const tabs = [
    {
      title: 'Digitalización',
      icon: Upload,
      description:
        'Sube documentos y obtén datos estructurados automáticamente',
      demo: (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center">
              <Upload className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                Procesamiento en tiempo real
              </h4>
              <p className="text-sm text-gray-600">Analizando documento...</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
              <span className="text-sm text-gray-600">Fideicomisario:</span>
              <span className="text-sm font-medium">
                Juan Barragán Domínguez
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
              <span className="text-sm text-gray-600">Valor total:</span>
              <span className="text-sm font-medium text-green-600">
                755.000 €
              </span>
            </div>
            <div className="flex items-center justify-between p-4 bg-white rounded-lg border">
              <span className="text-sm text-gray-600">Estado:</span>
              <span className="text-sm font-medium text-blue-600">
                ✓ Procesado
              </span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Visualización',
      icon: BarChart3,
      description:
        'Árboles familiares y diagramas interactivos claros y profesionales',
      demo: (
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Árbol Familiar</h4>
              <p className="text-sm text-gray-600">Relaciones y herencias</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                <User className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-xs font-medium">Carlos García</div>
              <div className="text-xs text-gray-500">75 años</div>
            </div>
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="w-8 h-8 bg-green-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                <User className="w-4 h-4 text-green-600" />
              </div>
              <div className="text-xs font-medium">Luis García</div>
              <div className="text-xs text-gray-500">49 años</div>
            </div>
            <div className="bg-white p-4 rounded-lg border text-center">
              <div className="w-8 h-8 bg-purple-100 rounded-full mx-auto mb-2 flex items-center justify-center">
                <User className="w-4 h-4 text-purple-600" />
              </div>
              <div className="text-xs font-medium">Ana García</div>
              <div className="text-xs text-gray-500">25 años</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: 'Generación',
      icon: FileText,
      description:
        'Documentos legales automáticos con plantillas validadas jurídicamente',
      demo: (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">
                Generación Automática
              </h4>
              <p className="text-sm text-gray-600">
                Documentos listos para firmar
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">Testamento</span>
              </div>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                Generado
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">Pacto Sucesorio</span>
              </div>
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                En proceso
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-white rounded-lg border">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-purple-600" />
                <span className="text-sm font-medium">Modelo 650</span>
              </div>
              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">
                Pendiente
              </span>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Descubre cómo funciona
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Una experiencia intuitiva que transforma la gestión de herencias en
            algo simple y eficiente
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Tabs */}
          <div className="space-y-4">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveTab(index);
                  setIsAnimating(true);
                  setTimeout(() => setIsAnimating(false), 300);
                }}
                className={`w-full p-6 rounded-2xl border transition-all duration-300 text-left ${
                  activeTab === index
                    ? 'bg-white border-blue-300 shadow-lg'
                    : 'bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      activeTab === index ? 'bg-blue-500' : 'bg-gray-200'
                    }`}
                  >
                    <tab.icon
                      className={`w-6 h-6 ${
                        activeTab === index ? 'text-white' : 'text-gray-600'
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`font-semibold ${
                        activeTab === index ? 'text-gray-900' : 'text-gray-700'
                      }`}
                    >
                      {tab.title}
                    </h3>
                    <p
                      className={`text-sm ${
                        activeTab === index ? 'text-gray-600' : 'text-gray-500'
                      }`}
                    >
                      {tab.description}
                    </p>
                  </div>
                  <ChevronRight
                    className={`w-5 h-5 ml-auto transition-transform ${
                      activeTab === index
                        ? 'text-blue-500 rotate-90'
                        : 'text-gray-400'
                    }`}
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Demo content */}
          <div
            className={`transition-all duration-300 ${
              isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            {tabs[activeTab].demo}
          </div>
        </div>
      </div>
    </section>
  );
}

// Componente de testimonios
function Testimonials() {
  const testimonials = [
    {
      name: 'María González',
      role: 'Notaria',
      company: 'Notaría González & Asociados',
      content:
        'Ulpiano ha revolucionado nuestro despacho. Reducimos el tiempo de procesamiento de expedientes en un 70% y nuestros clientes están más satisfechos que nunca.',
      rating: 5,
      avatar: 'MG',
    },
    {
      name: 'Carlos Ruiz',
      role: 'Abogado',
      company: 'Bufete Ruiz Legal',
      content:
        'La automatización de documentos nos permite enfocarnos en lo que realmente importa: el asesoramiento personalizado a nuestros clientes.',
      rating: 5,
      avatar: 'CR',
    },
    {
      name: 'Ana Martínez',
      role: 'Asesora Financiera',
      company: 'Family Office Martínez',
      content:
        'La visualización del patrimonio y los escenarios fiscales nos ayudan a tomar mejores decisiones para nuestros clientes de alto patrimonio.',
      rating: 5,
      avatar: 'AM',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Profesionales que ya confían en Ulpiano para transformar su práctica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                &quot;{testimonial.content}&quot;
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente de precios
function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 99, annual: 79 },
      description: 'Perfecto para despachos pequeños',
      features: [
        'Hasta 50 expedientes/mes',
        'Procesamiento básico de documentos',
        'Generación de testamentos',
        'Soporte por email',
        'Portal básico para clientes',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: { monthly: 199, annual: 159 },
      description: 'Ideal para despachos medianos',
      features: [
        'Hasta 200 expedientes/mes',
        'IA avanzada para documentos',
        'Todas las plantillas legales',
        'Soporte prioritario',
        'Portal completo para clientes',
        'Análisis fiscal avanzado',
        'Integración con sistemas',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: { monthly: 399, annual: 319 },
      description: 'Para grandes organizaciones',
      features: [
        'Expedientes ilimitados',
        'IA personalizada',
        'API completa',
        'Soporte 24/7',
        'Implementación dedicada',
        'Formación personalizada',
        'SLA garantizado',
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Planes que se adaptan a tu negocio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Elige el plan que mejor se ajuste a tus necesidades y escala con tu
            crecimiento
          </p>

          {/* Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span
              className={`text-sm ${
                !isAnnual ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              Mensual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            >
              <div
                className={`absolute top-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
                  isAnnual ? 'translate-x-8' : 'translate-x-1'
                }`}
              ></div>
            </button>
            <span
              className={`text-sm ${
                isAnnual ? 'text-gray-900' : 'text-gray-500'
              }`}
            >
              Anual <span className="text-green-600 font-medium">-20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-white border-blue-300 shadow-lg'
                  : 'bg-white border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    €{isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-500">/mes</span>
                </div>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Empezar ahora
                </button>
              </div>

              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Componente CTA final
function FinalCTA() {
  return (
    <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-x-hidden py-20 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900">
      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          ¿Listo para transformar tu práctica?
        </h2>
        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          Únete a cientos de profesionales que ya confían en Ulpiano para
          ofrecer un servicio excepcional a sus clientes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="#demo">
            <button className="group relative px-8 py-4 bg-white text-blue-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center gap-2">
                Solicitar Demo Gratuita
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </Link>

          <Link href="#trial">
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-900 transition-all duration-300">
              <span className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                Prueba Gratuita 14 días
              </span>
            </button>
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-gray-300">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            <span className="text-sm">Seguridad garantizada</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="text-sm">Configuración en 5 minutos</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            <span className="text-sm">Soporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Página principal
export default function Producto2Page({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  return (
    <div className="min-h-screen">
      <ModernHero />
      <KeyFeatures />
      <InteractiveDemo />
      <Testimonials />
      <Pricing />
      <FinalCTA />
    </div>
  );
}
