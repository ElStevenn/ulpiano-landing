'use client';

import React from 'react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import CTABanner from '@/components/HeroCTA';
import HelpContact from '@/components/sections/HelpContact';
import {
  Calendar,
  User,
  ArrowRight,
  Clock,
  TrendingUp,
  BookOpen,
  Lightbulb,
  Shield,
} from 'lucide-react';
import Link from 'next/link';

// Datos de ejemplo de artículos del blog
const blogPosts = [
  {
    id: 1,
    title: 'Guía completa del modelo 650: Todo lo que necesitas saber',
    excerpt:
      'Descubre cómo presentar correctamente el modelo 650 del Impuesto de Sucesiones y Donaciones. Te explicamos paso a paso el proceso completo.',
    author: 'María González',
    date: '15 de Enero, 2024',
    readTime: '8 min',
    category: 'Fiscal',
    image: '📊',
    featured: true,
  },
  {
    id: 2,
    title: 'Cómo digitalizar la gestión de herencias en tu notaría',
    excerpt:
      'Las notarías están adoptando tecnología para modernizar sus procesos. Te contamos cómo Ulpiano puede ayudarte a digitalizar tu gestión.',
    author: 'Carlos Ruiz',
    date: '10 de Enero, 2024',
    readTime: '6 min',
    category: 'Notarías',
    image: '⚖️',
    featured: true,
  },
  {
    id: 3,
    title: '5 tendencias en planificación sucesoria para 2024',
    excerpt:
      'El sector de la planificación sucesoria evoluciona rápidamente. Conoce las tendencias que marcarán este año.',
    author: 'Ana Martínez',
    date: '5 de Enero, 2024',
    readTime: '5 min',
    category: 'Tendencias',
    image: '📈',
    featured: false,
  },
  {
    id: 4,
    title: 'Seguridad y privacidad en la gestión de herencias digital',
    excerpt:
      'La seguridad de los datos es fundamental cuando se trata de información sensible. Te explicamos cómo protegemos tus datos.',
    author: 'David López',
    date: '28 de Diciembre, 2023',
    readTime: '7 min',
    category: 'Seguridad',
    image: '🔒',
    featured: false,
  },
  {
    id: 5,
    title: 'Reducciones y bonificaciones autonómicas en el ISD',
    excerpt:
      'Cada comunidad autónoma tiene sus propias normas. Te ayudamos a entender las reducciones y bonificaciones aplicables.',
    author: 'Laura Sánchez',
    date: '20 de Diciembre, 2023',
    readTime: '10 min',
    category: 'Fiscal',
    image: '💰',
    featured: false,
  },
  {
    id: 6,
    title: 'Inteligencia artificial en el derecho sucesorio',
    excerpt:
      'Cómo la IA está transformando la forma en que los profesionales gestionan herencias y planifican sucesiones.',
    author: 'Roberto Fernández',
    date: '15 de Diciembre, 2023',
    readTime: '9 min',
    category: 'Tecnología',
    image: '🤖',
    featured: false,
  },
];

const categories: Array<{
  name: string;
  count: number;
  icon: React.ComponentType<{ className?: string }>;
}> = [
  { name: 'Todos', count: 12, icon: BookOpen },
  { name: 'Fiscal', count: 4, icon: TrendingUp },
  { name: 'Notarías', count: 3, icon: Shield },
  { name: 'Tecnología', count: 2, icon: Lightbulb },
  { name: 'Tendencias', count: 3, icon: TrendingUp },
];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

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
                    Blog de Ulpiano
                  </span>
                  <br />
                  <span className="text-white">
                    Aprende sobre planificación sucesoria
                  </span>
                </h1>
              </AnimatedSection>

              <AnimatedSection className="fade-in-up delay-200">
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto mb-8">
                  Artículos, guías y noticias sobre derecho sucesorio,
                  planificación fiscal y tecnología aplicada a la gestión de
                  herencias.
                </p>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category, index) => (
              <AnimatedSection
                key={category.name}
                className="fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border bg-white hover:bg-gray-50 transition-colors"
                >
                  {(() => {
                    const IconComponent = category.icon;
                    return <IconComponent className="w-4 h-4 text-gray-600" />;
                  })()}
                  <span className="text-sm font-medium text-gray-700">
                    {category.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    ({category.count})
                  </span>
                </button>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Artículos destacados */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Artículos destacados
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Los contenidos más populares y relevantes
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <AnimatedSection
                key={post.id}
                className="fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <Link href={`/blog/${post.id}`}>
                  <article className="bg-white rounded-xl border shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer h-full flex flex-col">
                    <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-6xl">
                      {post.image}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-3 text-gray-900">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-sm text-gray-500">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-2 text-blue-600 font-medium">
                          Leer más
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Todos los artículos */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Todos los artículos
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Explora nuestro archivo completo de artículos
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4"></div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <AnimatedSection
                key={post.id}
                className="fade-in-up"
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                <Link href={`/blog/${post.id}`}>
                  <article className="bg-white rounded-xl border shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer h-full flex flex-col">
                    <div className="h-40 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-5xl">
                      {post.image}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-semibold">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1 text-blue-600 font-medium text-sm">
                          Leer
                          <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-x-hidden bg-gradient-to-br from-blue-600 to-purple-600 py-16 md:py-24">
        <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
          <AnimatedSection className="fade-in-up delay-100">
            <div className="text-white text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Suscríbete a nuestro newsletter
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Recibe las últimas noticias, guías y consejos sobre
                planificación sucesoria directamente en tu bandeja de entrada.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                onSubmit={(e) => {
                  e.preventDefault();
                  // TODO: Implementar suscripción al newsletter
                }}
              >
                <input
                  type="email"
                  placeholder="Tu email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* HelpContact */}
      <HelpContact />

      {/* CTA Banner */}
      <CTABanner
        title="¿Listo para transformar tu forma de trabajar?"
        primaryLabel="Prueba gratuita"
        secondaryLabel="Solicita una demo"
        primaryHref="/demo"
        secondaryHref="/demo"
      />
    </main>
  );
}
