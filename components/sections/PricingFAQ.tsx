'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

export default function PricingFAQ() {
  const items: FaqItem[] = useMemo(
    () => [
      {
        question: '¿Qué métodos de pago aceptan?',
        answer: (
          <div className="space-y-3 text-sm md:text-base text-gray-600">
            <p>
              Aceptamos todas las principales tarjetas de crédito y transferencias bancarias. Contáctanos por chat si deseas realizar un pago offline.
            </p>
          </div>
        ),
      },
      {
        question: '¿Necesito una tarjeta de crédito para registrarme?',
        answer: (
          <div className="space-y-3 text-sm md:text-base text-gray-600">
            <p>
              No. Puedes registrarte y usar Ulpiano durante 14 días sin introducir los datos de tu tarjeta de crédito. Solo tendrás que introducir los datos de pago al finalizar tu prueba, cuando elijas un plan.
            </p>
          </div>
        ),
      },
      {
        question: '¿Existe un plan gratuito?',
        answer: (
          <div className="space-y-3 text-sm md:text-base text-gray-600">
            <p>
              Sí. El plan gratuito incluye la gestión de 1 cliente con 2 expedientes y 2 usuarios.
            </p>
          </div>
        ),
      },
      {
        question: '¿Ofrecen precios especiales para organizaciones sin ánimo de lucro?',
        answer: (
          <div className="space-y-3 text-sm md:text-base text-gray-600">
            <p>
              Sí, las organizaciones sin ánimo de lucro pueden acceder a un descuento. Por favor, contáctanos para verificar si tu organización cumple los requisitos.
            </p>
          </div>
        ),
      },
      {
        question: '¿Cómo funciona la prueba gratuita de 14 días?',
        answer: (
          <div className="space-y-3 text-sm md:text-base text-gray-600">
            <p>
              Al registrarte para la prueba, tendrás acceso a todas las funcionalidades del plan Enterprise durante 14 días. Una vez finalizada la prueba, tu plan se reducirá al plan gratuito.
            </p>
          </div>
        ),
      },
      {
        question: '¿Puedo cambiar mi plan en cualquier momento?',
        answer: (
          <div className="space-y-3 text-sm md:text-base text-gray-600">
            <p>
              Sí. Puedes actualizarlo en cualquier momento. Si decides bajar de plan o cancelar, podrás usar tu plan actual hasta el final del periodo de facturación, ya que no ofrecemos reembolsos durante una suscripción inicial. No obstante, podrás cambiar de plan en cualquier renovación.
            </p>
          </div>
        ),
      },
      {
        question: '¿Qué ocurre si supero el límite de mi plan?',
        answer: (
          <div className="space-y-3 text-sm md:text-base text-gray-600">
            <p>
              Deberás pagar los excesos o actualizar a un plan superior con una mayor asignación de recursos. Las suscripciones mensuales y anuales se cobran automáticamente al final del ciclo de facturación.
            </p>
          </div>
        ),
      },
    ],
    []
  );

  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headersRef = useRef<Array<HTMLButtonElement | null>>([]);

  function onHeaderKeyDown(
    e: React.KeyboardEvent<HTMLButtonElement>,
    index: number
  ) {
    const total = items.length;
    const focusHeader = (i: number) => headersRef.current[i]?.focus();
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        focusHeader((index + 1) % total);
        break;
      case 'ArrowUp':
        e.preventDefault();
        focusHeader((index - 1 + total) % total);
        break;
      case 'Home':
        e.preventDefault();
        focusHeader(0);
        break;
      case 'End':
        e.preventDefault();
        focusHeader(total - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        setOpenIndex((cur) => (cur === index ? null : index));
        break;
    }
  }

  return (
    <section
      aria-labelledby={`${baseId}-title`}
      className="mx-auto max-w-[1200px] rounded-2xl border shadow-sm p-6 md:p-8 bg-[var(--brand-surface,#F5F7FB)] text-[var(--brand-text,#0F172A)] border-[var(--brand-muted,#94A3B8)]/30 dark:bg-[var(--brand-surface-dark,#0B1220)] dark:text-[var(--brand-text-dark,#E5E7EB)] dark:border-[var(--brand-muted-dark,#334155)]/40"
    >
      <h2 id={`${baseId}-title`} className="text-2xl md:text-3xl font-semibold">
        Preguntas Frecuentes
      </h2>

      <div className="mt-4 divide-y divide-[var(--brand-muted,#94A3B8)]/30 dark:divide-[var(--brand-muted-dark,#334155)]/40">
        {items.map((item, i) => (
          <AccordionRow
            key={i}
            index={i}
            baseId={baseId}
            question={item.question}
            onKeyDown={onHeaderKeyDown}
            open={openIndex === i}
            setOpenIndex={setOpenIndex}
            headerRef={(el) => (headersRef.current[i] = el)}
          >
            {item.answer}
          </AccordionRow>
        ))}
      </div>
    </section>
  );
}

function AccordionRow({
  index,
  baseId,
  question,
  children,
  onKeyDown,
  open,
  setOpenIndex,
  headerRef,
}: {
  index: number;
  baseId: string;
  question: string;
  children: React.ReactNode;
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>, index: number) => void;
  open: boolean;
  setOpenIndex: React.Dispatch<React.SetStateAction<number | null>>;
  headerRef: (el: HTMLButtonElement | null) => void;
}) {
  const headerId = `${baseId}-header-${index}`;
  const panelId = `${baseId}-panel-${index}`;
  const panelInnerRef = useRef<HTMLDivElement | null>(null);
  const [maxHeight, setMaxHeight] = useState<string>(open ? '999px' : '0px');
  const [opacity, setOpacity] = useState<number>(open ? 1 : 0);

  useEffect(() => {
    const el = panelInnerRef.current;
    const h = el ? el.scrollHeight : 0;
    if (open) {
      setMaxHeight(`${h}px`);
      setOpacity(1);
    } else {
      setMaxHeight('0px');
      setOpacity(0);
    }
  }, [open]);

  return (
    <div className="py-1">
      <button
        ref={headerRef}
        id={headerId}
        aria-controls={panelId}
        aria-expanded={open}
        onKeyDown={(e) => onKeyDown(e, index)}
        onClick={() => setOpenIndex((cur) => (cur === index ? null : index))}
        className="group flex w-full items-center justify-between gap-4 rounded-xl px-3 py-4 md:py-5 text-left outline-none transition-colors hover:bg-white/50 focus-visible:bg-white/60 focus-visible:ring-2 focus-visible:ring-[var(--brand-primary,#1E3A8A)] dark:hover:bg-white/5 dark:focus-visible:bg-white/10"
      >
        <span className="text-base md:text-lg font-medium text-[var(--brand-text,#0F172A)] dark:text-[var(--brand-text-dark,#E5E7EB)]">
          {question}
        </span>
        <ChevronDown
          className={`size-5 shrink-0 transition-transform duration-200 text-[var(--brand-muted,#94A3B8)] group-hover:text-[var(--brand-primary,#1E3A8A)] ${
            open ? 'rotate-180 text-[var(--brand-primary,#1E3A8A)]' : ''
          }`}
          aria-hidden
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        hidden={!open}
        className="overflow-hidden px-3"
        style={{
          maxHeight,
          transition: 'max-height 250ms ease, opacity 200ms ease',
          opacity,
        }}
      >
        <div ref={panelInnerRef} className="pb-5 pt-1">
          {children}
        </div>
      </div>
    </div>
  );
}
