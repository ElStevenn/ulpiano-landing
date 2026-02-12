'use client';

import { useMemo, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  FileText,
  LayoutDashboard,
  MessageSquare,
  Percent,
  Users,
} from "lucide-react";

type ProfileId = "notarias" | "despachos" | "asesorias" | "asesores-financieros";

const ACCENT_BY_TAB: Record<ProfileId, string> = {
  notarias: "var(--color-Primary-400)",
  despachos: "var(--color-Error-400)",
  asesorias: "var(--color-Success-400)",
  "asesores-financieros": "var(--color-Warning-400)",
};

function AccentGlow({ color }: { color: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-12 -z-10 blur-3xl opacity-20"
      style={{
        background: `radial-gradient(700px 320px at 20% 20%, ${color}, transparent 60%), radial-gradient(700px 320px at 80% 60%, ${color}, transparent 60%)`,
      }}
    />
  );
}

// Visuals
function VisualNotarias({ accent }: { accent: string }) {
  return (
    <div className="relative rounded-xl border bg-white/5 p-4 text-white shadow-sm">
      <div className="grid grid-cols-[200px_1fr] gap-4">
        <div className="rounded-lg border border-white/10 bg-white/5 p-3">
          <div className="h-3 w-4/5 rounded bg-white/20" />
          <div className="mt-3 space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-2 w-5/6 rounded bg-white/10" />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="h-4 w-1/3 rounded bg-white/20" />
            <div className="mt-3 grid grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="h-16 rounded bg-white/10" />
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <div className="text-sm text-white/80">Tiempo por expediente</div>
            <div className="mt-2 flex items-center gap-3">
              <div className="h-3 w-1/2 rounded-full bg-white/10">
                <div className="h-3 rounded-full" style={{ width: "100%", background: accent }} />
              </div>
              <div className="text-sm">12h</div>
              <div className="h-px w-6 bg-white/30" />
              <div className="h-3 w-1/3 rounded-full bg-white/10">
                <div className="h-3 rounded-full" style={{ width: "100%", background: accent }} />
              </div>
              <div className="text-sm">6h</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function VisualDespachos({ accent }: { accent: string }) {
  return (
    <div className="relative rounded-xl border bg-white/5 p-4 text-white shadow-sm">
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-2 flex items-center gap-2 text-white/80">
            <FileText className="size-4" />
            <span className="text-sm">Plantillas</span>
          </div>
          <div className="space-y-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-2 w-5/6 rounded bg-white/10" />
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <div className="mb-2 flex items-center gap-2 text-white/80">
            <MessageSquare className="size-4" />
            <span className="text-sm">Portal de cliente</span>
          </div>
          <div className="h-16 rounded bg-white/10" />
        </div>
      </div>
      <div className="mt-4 rounded-lg border border-white/10 bg-white/5 p-3">
        <div className="text-xs text-white/70">Ahorro medio en horas</div>
        <div className="mt-1 text-lg font-semibold" style={{ color: accent }}>−37% horas</div>
      </div>
    </div>
  );
}

function VisualAsesorias({ accent }: { accent: string }) {
  return (
    <div className="relative rounded-xl border bg-white/5 p-4 text-white shadow-sm">
      <div className="grid grid-cols-3 gap-3">
        {["Expedientes", "Pendientes", "Completados"].map((t, i) => (
          <div key={t} className="rounded-lg border border-white/10 bg-white/5 p-3">
            <div className="text-xs text-white/70">{t}</div>
            <div className="mt-2 text-2xl font-semibold">{[42, 8, 34][i]}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 h-24 w-full rounded-lg border border-white/10 bg-white/5">
        <svg viewBox="0 0 100 40" className="h-full w-full">
          <polyline
            points="0,30 20,26 40,24 60,18 80,16 100,10"
            fill="none"
            stroke={accent}
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

function MilestoneGraph({ steps, accent }: { steps: string[]; accent: string }) {
  return (
    <div className="rounded-xl border bg-white/5 p-6 text-white">
      <div className="relative mx-4 mt-2 flex items-center justify-between">
        <div aria-hidden className="absolute left-6 right-6 top-3 h-0.5" style={{ background: `${accent}55` }} />
        {steps.map((label) => (
          <div key={label} className="relative flex flex-col items-center">
            <div className="relative">
              <div className="size-3 rounded-full" style={{ background: accent, boxShadow: "0 0 0 2px var(--color-ulpiano-border)" }} />
              <div className="pointer-events-none absolute -inset-2 rounded-full opacity-60" style={{ boxShadow: `0 0 14px ${accent}77` }} aria-hidden />
            </div>
            <div className="mt-2 w-28 text-center text-xs text-white/80">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

const DATA = {
  tabs: [
    {
      id: "notarias" as const,
      label: "Notarías",
      titleLines: [
        "Digitaliza los trámites sucesorios de tus clientes sin fricciones.",
        "Digitaliza la gestión de herencias en tu notaría",
      ],
      intro:
        "Para notarias que buscan digitalizar y optimizar la gestión de herencias, reduciendo picos de trabajo y mejorando la fidelización de clientes.",
      bullets: [
        "Expedientes 100% digitalizados",
        "Generación de documentación automatizada",
        "Gestión de picos de trabajo",
        "Reducción de tiempos: de 12h a 6h por expediente",
      ],
    },
    {
      id: "despachos" as const,
      label: "Despachos de Abogados",
      titleLines: [
        "Herencias tramitadas más rápido, con menos esfuerzo y más control",
        "Gestión sucesoria eficiente, con la seguridad que tus clientes esperan",
      ],
      intro:
        "Para despachos de abogados que quieren ofrecer a sus clientes un servicio más eficiente en la tramitación de herencias, agilizando los procesos y mejorando la comunicación con el cliente",
      bullets: [
        "Plantillas — Escenarios de planificación sucesoria",
        "Comunicación — Portal de cliente",
        "Automatización — −37% en horas por expediente",
        "Resolución de conflictos",
      ],
    },
    {
      id: "asesorias" as const,
      label: "Asesorías",
      titleLines: [
        "Centraliza toda la sucesión en un sólo lugar",
        "Agilidad y cumplimiento normativo en cada sucesión",
      ],
      intro:
        "Para asesorías que requieren una herramienta integral para centralizar y automatizar la tramitación sucesoria.",
      bullets: [
        "Tramitación ágil",
        "Cumplimiento normativo",
        "Informes automáticos",
        "Visualización dinámica",
      ],
    },
    {
      id: "asesores-financieros" as const,
      label: "Asesores Financieros",
      titleLines: [
        "Planificar hoy y protege el legado de mañana de tus clientes.",
        "Ofrece a tus clientes planificación patrimonial avanzada",
      ],
      intro:
        "Para asesores financieros que desean ofrecer a sus clientes un plan innovador y seguro para la planificación de herencias.",
      bullets: [
        "Apertura del testamento",
        "Escenarios de planificación sucesoria",
        "Optimización fiscal",
        "Transmisión segura",
      ],
    },
  ] satisfies Array<{
    id: ProfileId;
    label: string;
    titleLines: string[];
    intro: string;
    bullets: string[];
  }>,
};

export default function ProfessionalsShowcase({ ctaHref = "#features" }: { ctaHref?: string }) {
  const order = useMemo<ProfileId[]>(() => DATA.tabs.map((t) => t.id), []);
  const [value, setValue] = useState<ProfileId>(order[0]);
  const active = DATA.tabs.find((t) => t.id === value)!;
  const accent = ACCENT_BY_TAB[value];

  const containerRef = useRef<HTMLDivElement | null>(null);
  const touchStartX = useRef<number | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft" || e.key === "Home" || e.key === "End") {
      e.preventDefault();
      const idx = order.indexOf(value);
      if (e.key === "ArrowRight") setValue(order[(idx + 1) % order.length]);
      if (e.key === "ArrowLeft") setValue(order[(idx - 1 + order.length) % order.length]);
      if (e.key === "Home") setValue(order[0]);
      if (e.key === "End") setValue(order[order.length - 1]);
    }
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      const idx = order.indexOf(value);
      setValue(order[dx < 0 ? (idx + 1) % order.length : (idx - 1 + order.length) % order.length]);
    }
    touchStartX.current = null;
  };

  const goPrev = () => {
    const idx = order.indexOf(value);
    setValue(order[(idx - 1 + order.length) % order.length]);
  };
  const goNext = () => {
    const idx = order.indexOf(value);
    setValue(order[(idx + 1) % order.length]);
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-x-hidden",
        "py-16 md:py-24"
      )}
      style={{ background: "var(--color-ulpiano-base)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="mb-6 text-center font-serif text-2xl font-semibold text-white md:text-3xl">
          Pensado para Profesionales
        </h2>
        <Tabs value={value} onValueChange={(v) => setValue(v as ProfileId)} className="mt-2">
          <div className="flex items-center justify-center">
            <TabsList
              role="tablist"
              aria-label="Segmentos profesionales"
              className="bg-transparent h-auto p-0 overflow-x-auto"
              onKeyDown={handleKeyDown}
            >
              {DATA.tabs.map((t) => (
                <TabsTrigger
                  key={t.id}
                  role="tab"
                  value={t.id}
                  className={cn(
                    "group relative mx-2 px-3 py-2 text-white/70 hover:text-white",
                    "opacity-70 hover:opacity-100 data-[state=active]:text-white data-[state=active]:opacity-100",
                    "data-[state=active]:shadow-[0_0_20px_var(--tab-accent)]"
                  )}
                  aria-selected={t.id === value}
                  aria-controls={`panel-${t.id}`}
                  style={{
                    textShadow: t.id === value ? `0 0 12px ${ACCENT_BY_TAB[t.id]}55` : undefined,
                    boxShadow: t.id === value ? `0 0 20px ${ACCENT_BY_TAB[t.id]}33` : undefined,
                    "--tab-accent": ACCENT_BY_TAB[t.id],
                  } as React.CSSProperties}
                >
                  <span
                    className="relative inline-block after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 group-hover:after:h-[2px] group-data-[state=active]:after:scale-x-100"
                    style={{ color: ACCENT_BY_TAB[t.id] }}
                  >
                    {t.label}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {DATA.tabs.map((t) => (
            <TabsContent
              key={t.id}
              id={`panel-${t.id}`}
              role="tabpanel"
              value={t.id}
              className="relative mt-10 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-2 data-[state=active]:duration-300"
            >
              <div
                ref={containerRef}
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                className="relative grid items-center gap-8 md:grid-cols-[1fr_1fr] rounded-xl border"
                style={{
                  borderColor: "var(--color-ulpiano-border)",
                  boxShadow: `0 0 0 1px var(--color-ulpiano-border), 0 0 60px ${ACCENT_BY_TAB[t.id]}33`,
                  background: "var(--color-ulpiano-base)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <AccentGlow color={ACCENT_BY_TAB[t.id]} />
                {/* Left column */}
                <div className="p-6 md:p-8">
                  <div className="space-y-2">
                    {t.titleLines.map((line) => (
                      <h3 key={line} className="font-serif text-2xl font-semibold text-white md:text-3xl">
                        {line}
                      </h3>
                    ))}
                  </div>
                  <p className="mt-3 max-w-prose text-white/80">{t.intro}</p>
                  <ul className="mt-5 space-y-2 text-white/80">
                    {t.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 rounded-full" style={{ background: accent }} />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button variant="outline" className="rounded-full" asChild>
                      <a href={ctaHref}>Ver más</a>
                    </Button>
                  </div>
                </div>

                {/* Right column - lazy render only when active */}
                <div className="p-6 md:p-8">
                  {value === t.id && (
                    <div className="animate-in fade-in slide-in-from-right-2">
                      {t.id === "notarias" && <VisualNotarias accent={ACCENT_BY_TAB[t.id]} />}
                      {t.id === "despachos" && <VisualDespachos accent={ACCENT_BY_TAB[t.id]} />}
                      {t.id === "asesorias" && <VisualAsesorias accent={ACCENT_BY_TAB[t.id]} />}
                      {t.id === "asesores-financieros" && (
                        <MilestoneGraph
                          steps={["Apertura del testamento", "Escenarios de planificación sucesoria", "Optimización fiscal", "Transmisión segura"]}
                          accent={ACCENT_BY_TAB[t.id]}
                        />
                      )}
                    </div>
                  )}
                </div>

                {/* Lateral controls */}
                <button
                  type="button"
                  aria-label="Anterior"
                  onClick={goPrev}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border bg-white/10 p-2 text-white/80 backdrop-blur hover:bg-white/20 focus-visible:outline focus-visible:outline-1"
                >
                  <ChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Siguiente"
                  onClick={goNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border bg-white/10 p-2 text-white/80 backdrop-blur hover:bg-white/20 focus-visible:outline focus-visible:outline-1"
                >
                  <ChevronRight className="size-5" />
                </button>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}


