'use client';

import { useEffect, useId, useMemo, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

export default function FAQAccordion() {
  const items: FaqItem[] = useMemo(
    () => [
      {
        question: "¿Por qué es importante un software de gestión de herencias? ¿Quién lo necesita?",
        answer: (
          <div className="space-y-3 text-sm md:text-base text-[var(--brand-text,#0F172A)]/80 dark:text-[var(--brand-text-dark,#E5E7EB)]/80">
            <p>
              El software de planificación sucesoria constituye una herramienta avanzada para despachos de abogados, notarías, asesorías y profesionales del ámbito financiero. Permite analizar la planificación sucesoria existente, detectar vacíos o ineficiencias, calcular la carga fiscal derivada del Impuesto sobre Sucesiones y Donaciones (ISD) y generar documentación jurídica esencial como testamentos, pactos sucesorios, escrituras de aceptación de herencia y donaciones, entre otras.
            </p>
            <p>
              Además, automatiza tareas tradicionalmente manuales: elaboración de borradores, cálculo de impuestos, simulación de escenarios de reparto del caudal hereditario y creación de esquemas visuales para facilitar la comprensión del plan.
            </p>
            <p className="font-medium">Para los profesionales, este tipo de software ofrece ventajas estratégicas:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Mejorar la calidad del servicio con planes sucesorios integrales y técnicamente sólidos.</li>
              <li>Obtener una visión global del patrimonio del cliente (balance patrimonial, masa hereditaria y valor neto).</li>
              <li>Reforzar el vínculo con el cliente integrando planificación patrimonial y sucesoria en un mismo marco.</li>
              <li>Fidelizar a la siguiente generación de herederos con una gestión integral, rigurosa y continuada.</li>
            </ul>
            <p>
              Es también una herramienta pedagógica que ayuda a explicar con claridad las implicaciones jurídicas y fiscales, fomentando la confianza y la transparencia mediante una experiencia digital moderna e interactiva.
            </p>
          </div>
        ),
      },
      {
        question: "¿Puede Ulpiano ayudar con la planificación fiscal?",
        answer: (
          <div className="space-y-3 text-sm md:text-base text-[var(--brand-text,#0F172A)]/80 dark:text-[var(--brand-text-dark,#E5E7EB)]/80">
            <p>
              Sí. Ulpiano ayuda con la planificación fiscal como parte de su software de planificación sucesoria. Permite calcular las posibles implicaciones fiscales en el ISD —a nivel estatal y autonómico— derivadas de la situación patrimonial de cada cliente y proponer alternativas.
            </p>
          </div>
        ),
      },
      {
        question: "¿Por qué es importante un software de planificación sucesorio?",
        answer: (
          <div className="space-y-3 text-sm md:text-base text-[var(--brand-text,#0F172A)]/80 dark:text-[var(--brand-text-dark,#E5E7EB)]/80">
            <p>
              Debe ayudar en cuatro aspectos fundamentales: organizar y visualizar el plan existente, diseñar estrategias y detectar oportunidades, facilitar la creación de documentos en línea y generar un espacio colaborativo para acceder a planes y documentos vigentes.
            </p>
            <p>
              Además, ha de contemplar supuestos complejos, múltiples tipologías documentales, cumplir la normativa fiscal estatal y autonómica, y disponer de un sólido motor de informes.
            </p>
          </div>
        ),
      },
      {
        question: "¿Pueden los notarios y abogados utilizar un software de gestión de herencias?",
        answer: (
          <div className="space-y-3 text-sm md:text-base text-[var(--brand-text,#0F172A)]/80 dark:text-[var(--brand-text-dark,#E5E7EB)]/80">
            <p>
              Ulpiano puede ser utilizado tanto por abogados como por notarios. Agiliza la incorporación de nuevos clientes y ofrece visualizaciones claras incluso para planes complejos. También permite simular cómo distintos instrumentos jurídicos y financieros impactan en una futura distribución hereditaria.
            </p>
          </div>
        ),
      },
      {
        question: "¿Con Ulpiano, se puede visualizar la distribución sucesoria de un cliente?",
        answer: (
          <div className="space-y-3 text-sm md:text-base text-[var(--brand-text,#0F172A)]/80 dark:text-[var(--brand-text-dark,#E5E7EB)]/80">
            <p>
              Sí. Ulpiano transforma documentos y estrategias sucesorias en diagramas interactivos fáciles de comprender, que ayudan a clarificar el plan para el asesor y para el cliente.
            </p>
          </div>
        ),
      },
      {
        question: "¿Se adapta Ulpiano a la realidad plurilegislativa española?",
        answer: (
          <div className="space-y-3 text-sm md:text-base text-[var(--brand-text,#0F172A)]/80 dark:text-[var(--brand-text-dark,#E5E7EB)]/80">
            <p>
              Ulpiano no es un software de herencias más: es la primera plataforma en España diseñada para adaptarse a la pluralidad de regímenes civiles y fiscales autonómicos.
            </p>
            <p>
              Tiene en cuenta automáticamente el vecindario civil del causante e integra instituciones sucesorias propias de cada comunidad autónoma. Permite gestionar herencias con rigor jurídico y adaptación territorial, ajustándose a las necesidades de cada cliente.
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

  function onHeaderKeyDown(e: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const total = items.length;
    const focusHeader = (i: number) => headersRef.current[i]?.focus();
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        focusHeader((index + 1) % total);
        break;
      case "ArrowUp":
        e.preventDefault();
        focusHeader((index - 1 + total) % total);
        break;
      case "Home":
        e.preventDefault();
        focusHeader(0);
        break;
      case "End":
        e.preventDefault();
        focusHeader(total - 1);
        break;
      case "Enter":
      case " ":
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
  const [maxHeight, setMaxHeight] = useState<string>(open ? "999px" : "0px");
  const [opacity, setOpacity] = useState<number>(open ? 1 : 0);

  useEffect(() => {
    const el = panelInnerRef.current;
    const h = el ? el.scrollHeight : 0;
    if (open) {
      setMaxHeight(`${h}px`);
      setOpacity(1);
    } else {
      setMaxHeight("0px");
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
          className={`size-5 shrink-0 transition-transform duration-200 text-[var(--brand-muted,#94A3B8)] group-hover:text-[var(--brand-primary,#1E3A8A)] ${open ? "rotate-180 text-[var(--brand-primary,#1E3A8A)]" : ""}`}
          aria-hidden
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={headerId}
        hidden={!open}
        className="overflow-hidden px-3"
        style={{ maxHeight, transition: "max-height 250ms ease, opacity 200ms ease", opacity }}
      >
        <div ref={panelInnerRef} className="pb-5 pt-1">
          {children}
        </div>
      </div>
    </div>
  );
}


