# Ejemplos de Implementación de Tracking

Este documento contiene ejemplos prácticos de cómo implementar tracking en diferentes componentes de la landing.

## 📋 Índice

1. [CTAs en Hero](#ctas-en-hero)
2. [Botones de Planes](#botones-de-planes)
3. [Links en Footer](#links-en-footer)
4. [Formularios](#formularios)
5. [Modales](#modales)
6. [Tabs y Navegación](#tabs-y-navegación)
7. [Tracking Automático de Secciones](#tracking-automático-de-secciones)

---

## 1. CTAs en Hero

### Ejemplo Básico

```tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { trackCTA } from '@/lib/tracking';

export function HeroSection() {
  return (
    <section>
      <h1>Bienvenido a Ulpiano</h1>
      <p>La mejor plataforma para gestión de herencias</p>
      
      <div className="flex gap-4">
        {/* CTA Principal */}
        <Link 
          href="/demo"
          onClick={() => trackCTA('solicitar_demo', 'hero')}
        >
          <Button
            data-cta-name="solicitar_demo"
            data-cta-location="hero"
          >
            Solicitar Demo
          </Button>
        </Link>

        {/* CTA Secundario */}
        <Link 
          href="/precios"
          onClick={() => trackCTA('ver_precios', 'hero')}
        >
          <Button
            variant="outline"
            data-cta-name="ver_precios"
            data-cta-location="hero"
          >
            Ver Precios
          </Button>
        </Link>
      </div>
    </section>
  );
}
```

### Con Parámetros Adicionales

```tsx
<Link 
  href="/demo"
  onClick={() => trackCTA('solicitar_demo', 'hero', {
    variant: 'primary',
    campaign: 'launch_2024',
    position: 'above_fold'
  })}
>
  <Button>Solicitar Demo</Button>
</Link>
```

---

## 2. Botones de Planes

### Card de Plan Completa

```tsx
'use client';

import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { trackPlanSelected } from '@/lib/tracking';

type PlanCardProps = {
  planName: string;
  price: number;
  billing: 'mensual' | 'anual';
  features: string[];
  onSelect: () => void;
};

export function PlanCard({ 
  planName, 
  price, 
  billing, 
  features,
  onSelect 
}: PlanCardProps) {
  const handleSelect = () => {
    // Trackear selección de plan
    trackPlanSelected(planName, price, billing, {
      features_count: features.length,
      location: 'pricing_page'
    });
    
    // Ejecutar callback
    onSelect();
  };

  return (
    <Card>
      <h3>{planName}</h3>
      <p className="text-3xl font-bold">{price}€/mes</p>
      
      <ul>
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>

      <Button
        onClick={handleSelect}
        data-plan-name={planName}
        data-plan-price={price}
        data-plan-billing={billing}
      >
        Seleccionar Plan
      </Button>
    </Card>
  );
}
```

### Comparador de Planes

```tsx
'use client';

import { useState } from 'react';
import { trackPlanSelected, track } from '@/lib/tracking';

export function PlanComparator() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handlePlanSelect = (planName: string, price: number) => {
    setSelectedPlan(planName);
    
    // Trackear selección
    trackPlanSelected(planName, price, 'anual', {
      location: 'comparator',
      previous_selection: selectedPlan
    });
  };

  const handleCompare = () => {
    // Trackear acción de comparación
    track('plans_compared', {
      plans_count: 3,
      selected_plan: selectedPlan
    });
  };

  return (
    <div>
      {/* Planes */}
      <Button onClick={() => handlePlanSelect('Esencial', 299)}>
        Esencial
      </Button>
      <Button onClick={() => handlePlanSelect('Pro', 799)}>
        Pro
      </Button>
      
      <Button onClick={handleCompare}>
        Comparar Planes
      </Button>
    </div>
  );
}
```

---

## 3. Links en Footer

### Footer con Tracking

```tsx
'use client';

import Link from 'next/link';
import { trackCTA } from '@/lib/tracking';

export function Footer() {
  return (
    <footer>
      <div className="grid grid-cols-4 gap-8">
        {/* Columna Producto */}
        <div>
          <h4>Producto</h4>
          <ul>
            <li>
              <Link 
                href="/producto"
                onClick={() => trackCTA('ver_producto', 'footer')}
              >
                Características
              </Link>
            </li>
            <li>
              <Link 
                href="/precios"
                onClick={() => trackCTA('ver_precios', 'footer')}
              >
                Precios
              </Link>
            </li>
          </ul>
        </div>

        {/* Columna Recursos */}
        <div>
          <h4>Recursos</h4>
          <ul>
            <li>
              <Link 
                href="/blog"
                onClick={() => trackCTA('ver_blog', 'footer')}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link 
                href="/guias"
                onClick={() => trackCTA('ver_guias', 'footer')}
              >
                Guías
              </Link>
            </li>
          </ul>
        </div>

        {/* CTA en Footer */}
        <div className="col-span-2">
          <h4>¿Listo para empezar?</h4>
          <Link 
            href="/demo"
            onClick={() => trackCTA('solicitar_demo', 'footer_cta')}
          >
            <Button
              size="lg"
              data-cta-name="solicitar_demo"
              data-cta-location="footer_cta"
            >
              Solicitar Demo Gratuita
            </Button>
          </Link>
        </div>
      </div>
    </footer>
  );
}
```

---

## 4. Formularios

### Formulario de Contacto

```tsx
'use client';

import { useState } from 'react';
import { track } from '@/lib/tracking';

export function ContactForm() {
  const [formData, setFormData] = useState({
    company: '',
    role: '',
    employees: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Trackear inicio de envío
    track('form_submit_start', {
      form_type: 'contact',
      location: 'contact_page'
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        // Trackear éxito
        track('form_submit_success', {
          form_type: 'contact',
          location: 'contact_page',
          // NO incluir datos personales
          company_size: formData.employees,
          role_type: formData.role
        });
      } else {
        // Trackear error
        track('form_submit_error', {
          form_type: 'contact',
          error_code: response.status
        });
      }
    } catch (error) {
      track('form_submit_error', {
        form_type: 'contact',
        error_type: 'network'
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Campos del formulario */}
      <input
        type="text"
        value={formData.company}
        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        placeholder="Empresa"
      />
      
      <select
        value={formData.role}
        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
      >
        <option value="">Selecciona tu rol</option>
        <option value="abogado">Abogado</option>
        <option value="asesor">Asesor</option>
        <option value="notario">Notario</option>
      </select>

      <button type="submit">Enviar</button>
    </form>
  );
}
```

### Formulario Multi-Step

```tsx
'use client';

import { useState } from 'react';
import { track } from '@/lib/tracking';

export function MultiStepForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;

  const handleStepChange = (newStep: number) => {
    // Trackear cambio de paso
    track('form_step_change', {
      form_type: 'onboarding',
      from_step: step,
      to_step: newStep,
      progress_percent: Math.round((newStep / totalSteps) * 100)
    });

    setStep(newStep);
  };

  const handleAbandon = () => {
    // Trackear abandono
    track('form_abandoned', {
      form_type: 'onboarding',
      abandoned_at_step: step,
      progress_percent: Math.round((step / totalSteps) * 100)
    });
  };

  return (
    <div>
      <div>Paso {step} de {totalSteps}</div>
      
      {/* Contenido del paso actual */}
      
      <button onClick={() => handleStepChange(step + 1)}>
        Siguiente
      </button>
      
      <button onClick={handleAbandon}>
        Cancelar
      </button>
    </div>
  );
}
```

---

## 5. Modales

### Modal de Contacto con Ventas

```tsx
'use client';

import { useEffect } from 'react';
import { Dialog } from '@/components/ui/dialog';
import { track } from '@/lib/tracking';

type ContactSalesModalProps = {
  open: boolean;
  onClose: () => void;
  source?: string;
};

export function ContactSalesModal({ 
  open, 
  onClose,
  source = 'unknown'
}: ContactSalesModalProps) {
  
  // Trackear apertura del modal
  useEffect(() => {
    if (open) {
      track('modal_opened', {
        modal_type: 'contact_sales',
        source
      });
    }
  }, [open, source]);

  const handleClose = () => {
    // Trackear cierre
    track('modal_closed', {
      modal_type: 'contact_sales',
      source
    });
    
    onClose();
  };

  const handleSubmit = () => {
    // Trackear conversión
    track('modal_converted', {
      modal_type: 'contact_sales',
      source
    });
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <h2>Contacta con Ventas</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario */}
        <button type="submit">Enviar</button>
      </form>
    </Dialog>
  );
}
```

---

## 6. Tabs y Navegación

### Tabs con Tracking

```tsx
'use client';

import { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { track } from '@/lib/tracking';

export function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('digitalizacion');

  const handleTabChange = (newTab: string) => {
    // Trackear cambio de tab
    track('tab_changed', {
      section: 'features',
      from_tab: activeTab,
      to_tab: newTab
    });

    setActiveTab(newTab);
  };

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      <TabsList>
        <TabsTrigger value="digitalizacion">
          Digitalización
        </TabsTrigger>
        <TabsTrigger value="gestion">
          Gestión
        </TabsTrigger>
        <TabsTrigger value="reportes">
          Reportes
        </TabsTrigger>
      </TabsList>

      <TabsContent value="digitalizacion">
        {/* Contenido */}
      </TabsContent>
      <TabsContent value="gestion">
        {/* Contenido */}
      </TabsContent>
      <TabsContent value="reportes">
        {/* Contenido */}
      </TabsContent>
    </Tabs>
  );
}
```

---

## 7. Tracking Automático de Secciones

### Hook Personalizado para Sección Específica

```tsx
'use client';

import { useEffect, useRef } from 'react';
import { trackSectionView } from '@/lib/tracking';

export function useSectionTracking(sectionId: string, sectionName: string) {
  const hasTrackedRef = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (hasTrackedRef.current) return;

    const element = document.getElementById(sectionId);
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTrackedRef.current) {
            trackSectionView(sectionName);
            hasTrackedRef.current = true;
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.5, // 50% visible
        rootMargin: '0px'
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [sectionId, sectionName]);
}
```

### Uso del Hook

```tsx
'use client';

import { useSectionTracking } from '@/lib/hooks/useSectionTracking';

export function FeaturesSection() {
  // Trackear cuando la sección sea visible
  useSectionTracking('features', 'features_section');

  return (
    <section id="features">
      <h2>Características</h2>
      {/* Contenido */}
    </section>
  );
}
```

### Componente con Múltiples Secciones

```tsx
'use client';

import { useLandingTracking } from '@/lib/hooks/useLandingTracking';
import { useSectionTracking } from '@/lib/hooks/useSectionTracking';

export default function ProductPage() {
  // Tracking automático de scroll
  useLandingTracking();

  // Tracking de secciones específicas
  useSectionTracking('features', 'features_section');
  useSectionTracking('testimonials', 'testimonials_section');
  useSectionTracking('faq', 'faq_section');

  return (
    <div>
      <section id="hero">Hero</section>
      <section id="features">Features</section>
      <section id="testimonials">Testimonials</section>
      <section id="faq">FAQ</section>
    </div>
  );
}
```

---

## 8. Tracking de Videos

### Video Player con Tracking

```tsx
'use client';

import { useRef } from 'react';
import { track } from '@/lib/tracking';

export function VideoPlayer({ videoId, title }: { videoId: string; title: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const trackedMilestonesRef = useRef<Set<number>>(new Set());

  const handlePlay = () => {
    track('video_play', {
      video_id: videoId,
      video_title: title
    });
  };

  const handlePause = () => {
    const currentTime = videoRef.current?.currentTime || 0;
    const duration = videoRef.current?.duration || 0;
    const percentWatched = Math.round((currentTime / duration) * 100);

    track('video_pause', {
      video_id: videoId,
      video_title: title,
      percent_watched: percentWatched,
      seconds_watched: Math.round(currentTime)
    });
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;

    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    const percentWatched = Math.round((currentTime / duration) * 100);

    // Trackear milestones: 25%, 50%, 75%, 100%
    const milestones = [25, 50, 75, 100];
    
    milestones.forEach((milestone) => {
      if (
        percentWatched >= milestone &&
        !trackedMilestonesRef.current.has(milestone)
      ) {
        trackedMilestonesRef.current.add(milestone);
        
        track('video_progress', {
          video_id: videoId,
          video_title: title,
          milestone: milestone
        });
      }
    });
  };

  const handleEnded = () => {
    track('video_completed', {
      video_id: videoId,
      video_title: title
    });
  };

  return (
    <video
      ref={videoRef}
      onPlay={handlePlay}
      onPause={handlePause}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleEnded}
      controls
    >
      <source src={`/videos/${videoId}.mp4`} type="video/mp4" />
    </video>
  );
}
```

---

## 9. Tracking de Descargas

### Botón de Descarga

```tsx
'use client';

import { track } from '@/lib/tracking';

export function DownloadButton({ 
  fileUrl, 
  fileName, 
  fileType 
}: { 
  fileUrl: string; 
  fileName: string; 
  fileType: string;
}) {
  const handleDownload = () => {
    track('file_download', {
      file_name: fileName,
      file_type: fileType,
      location: 'resources_page'
    });
  };

  return (
    <a 
      href={fileUrl} 
      download={fileName}
      onClick={handleDownload}
    >
      <button>
        Descargar {fileName}
      </button>
    </a>
  );
}
```

---

## 10. Tracking de Búsqueda

### Barra de Búsqueda

```tsx
'use client';

import { useState } from 'react';
import { track } from '@/lib/tracking';

export function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    track('search_performed', {
      query_length: query.length,
      location: 'header',
      // NO incluir el query completo por privacidad
      has_results: true // Esto se determinaría después de la búsqueda
    });

    // Realizar búsqueda...
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Buscar..."
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
```

---

## 📝 Notas Importantes

1. **Nunca trackear datos personales**: email, teléfono, nombre, dirección, etc.
2. **Usar data attributes**: Facilita el debugging y la auditoría
3. **Ser consistente**: Usar los mismos nombres de eventos en toda la aplicación
4. **Documentar eventos**: Mantener un registro de todos los eventos implementados
5. **Testing**: Verificar en desarrollo que los eventos se disparan correctamente

## 🔗 Referencias

- [Documentación Principal](./TRACKING.md)
- [Guía de GTM](https://developers.google.com/tag-manager)
- [Mejores Prácticas de Analytics](https://support.google.com/analytics/answer/9267735)
