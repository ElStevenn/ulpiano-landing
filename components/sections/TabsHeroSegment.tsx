'use client';

import { useMemo, useRef, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Activity,
  Boxes,
  Calculator,
  Clock,
  Cog,
  FileCheck2,
  Folder,
  KeyRound,
  MessageSquare,
  PieChart,
  Plug,
  RefreshCw,
  Scale,
  Shield,
  Target,
  Users,
} from "lucide-react";

type WidgetInteraction = "hover-reveal" | "toggle-sim" | "open-modal";

type Widget = {
  icon: string;
  title: string;
  meta: string;
  interaction: WidgetInteraction;
};

type MicroChart =
  | {
      kind: "bar-compact";
      labels: string[];
      values: number[];
      unit: string;
      animate?: boolean;
    }
  | {
      kind: "cards-metrics";
      items: { label: string; value: string; status: "good" | "warn" | "bad" }[];
      animate?: boolean;
    }
  | {
      kind: "donut";
      slices: { label: string; value: number }[];
      unit: string;
      animate?: boolean;
    }
  | {
      kind: "sparkline";
      series: number[];
      unit: string;
      animate?: boolean;
    };

type RightPane = {
  type: "interactiveWidgets";
  widgets: Widget[];
  microChart?: MicroChart;
};

type TabItem = {
  id: "notarias" | "despachos" | "asesorias" | "asesores-financieros";
  label: string;
  headline: string;
  tagline: string;
  copy: string;
  cta: string;
  rightPane: RightPane;
};

type TabsData = {
  component: "TabsHeroSegment";
  tabs: TabItem[];
};

const DATA: TabsData = {
  component: "TabsHeroSegment",
  tabs: [
    {
      id: "notarias",
      label: "Notarías",
      headline: "Digitaliza la gestión de herencias en tu notaría sin fricciones.",
      tagline: "Operativa sin fricciones",
      copy:
        "Para notarías que buscan digitalizar y optimizar la gestión de herencias, reduciendo picos de trabajo y mejorando la fidelización de clientes.",
      cta: "Ver más",
      rightPane: {
        type: "interactiveWidgets",
        widgets: [
          {
            icon: "document-check",
            title: "Expedientes 100% digitalizados",
            meta: "Gestiona todo el proceso de principio a fin",
            interaction: "hover-reveal",
          },
          {
            icon: "calculator-smart",
            title: "Generación de documentación automatizada",
            meta: "Ahorra tiempo y evita errores",
            interaction: "hover-reveal",
          },
          {
            icon: "timeline-bolt",
            title: "Gestión de picos de trabajo",
            meta: "Adapta tu capacidad sin perder eficiencia",
            interaction: "hover-reveal",
          },
          {
            icon: "clock",
            title: "Reducción de tiempos: de 12h a 6h por expediente",
            meta: "Menos tiempo por caso",
            interaction: "hover-reveal",
          },
        ],
        microChart: {
          kind: "bar-compact",
          labels: ["Antes 12h", "Con Ulpiano 6h"],
          values: [100, 50],
          unit: "h por expediente",
          animate: true,
        },
      },
    },
    {
      id: "despachos",
      label: "Abogados",
      headline: "Gestión sucesoria eficiente, con la seguridad que tus clientes esperan",
      tagline: "Eficiencia y seguridad",
      copy:
        "Para despachos de abogados que quieren ofrecer a sus clientes un servicio más eficiente en la tramitación de herencias, agilizando los procesos y mejorando la comunicación con el cliente",
      cta: "Ver más",
      rightPane: {
        type: "interactiveWidgets",
        widgets: [
          {
            icon: "gavel-scale",
            title: "Plantillas — Escenarios de planificación sucesoria",
            meta: "Listos para personalizar",
            interaction: "hover-reveal",
          },
          {
            icon: "chat-shield",
            title: "Comunicación — Portal de cliente",
            meta: "Seguro y accesible",
            interaction: "hover-reveal",
          },
          {
            icon: "clock-gear",
            title: "Automatización — −37% en horas por expediente",
            meta: "Reduce tiempo manual",
            interaction: "hover-reveal",
          },
          {
            icon: "target-arrow",
            title: "Resolución de conflictos",
            meta: "Previene y resuelve disputas",
            interaction: "hover-reveal",
          },
        ],
        microChart: undefined,
      },
    },
    {
      id: "asesorias",
      label: "Asesorías",
      headline: "Centraliza toda la sucesión en un sólo lugar",
      tagline: "Centraliza y automatiza la tramitación",
      copy:
        "Para asesorías que requieren una herramienta integral para centralizar y automatizar la tramitación sucesoria.",
      cta: "Ver más",
      rightPane: {
        type: "interactiveWidgets",
        widgets: [
          {
            icon: "folder-sync",
            title: "Tramitación ágil",
            meta: "Simplifica la gestión de expedientes",
            interaction: "hover-reveal",
          },
          {
            icon: "shield-key",
            title: "Cumplimiento normativo",
            meta: "Controla requisitos legales",
            interaction: "hover-reveal",
          },
          {
            icon: "calculator-smart",
            title: "Informes automáticos",
            meta: "Documentación fiscal y legal inmediata",
            interaction: "hover-reveal",
          },
          {
            icon: "pie-trust",
            title: "Visualización dinámica",
            meta: "Indicadores y métricas para decidir mejor",
            interaction: "hover-reveal",
          },
        ],
        microChart: {
          kind: "donut",
          slices: [
            { label: "Automatizado", value: 68 },
            { label: "Manual", value: 32 },
          ],
          unit: "% tareas",
          animate: true,
        },
      },
    },
    {
      id: "asesores-financieros",
      label: "Asesores Financieros",
      headline: "Planificar hoy y protege el legado de mañana de tus clientes.",
      tagline: "Protege el legado",
      copy:
        "Para asesores financieros que desean ofrecer a sus clientes un plan innovador y seguro para la planificación de herencias.",
      cta: "Ver más",
      rightPane: {
        type: "interactiveWidgets",
        widgets: [
          {
            icon: "document-check",
            title: "Apertura del testamento",
            meta: "Hitos claros del proceso",
            interaction: "hover-reveal",
          },
          {
            icon: "pie-trust",
            title: "Escenarios de planificación sucesoria",
            meta: "Simula reparto y liquidez",
            interaction: "hover-reveal",
          },
          {
            icon: "calculator-smart",
            title: "Optimización fiscal",
            meta: "Reducción impositiva",
            interaction: "hover-reveal",
          },
          {
            icon: "target-arrow",
            title: "Transmisión segura",
            meta: "Custodia y entrega",
            interaction: "hover-reveal",
          },
        ],
        microChart: undefined,
      },
    },
  ],
};

const ACCENT_BY_TAB: Record<TabItem["id"], string> = {
  "notarias": "var(--color-Primary-400)",
  "despachos": "var(--color-Error-400)",
  "asesorias": "var(--color-Success-400)",
  "asesores-financieros": "var(--color-Warning-400)",
};

function useParallax() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 .. 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    const children = (containerRef.current?.querySelectorAll("[data-parallax-item]") || []) as unknown as HTMLElement[];
    children.forEach((el, idx) => {
      const depth = (idx + 1) * 0.6;
      el.style.transform = `translate3d(${x * depth * 4}px, ${y * depth * 4}px, 0)`;
    });
  };
  const onMouseLeave = () => {
    const children = (containerRef.current?.querySelectorAll("[data-parallax-item]") || []) as unknown as HTMLElement[];
    children.forEach((el) => {
      el.style.transform = "translate3d(0,0,0)";
    });
  };
  return { containerRef, onMouseMove, onMouseLeave };
}

function IconFor(name: string) {
  switch (name) {
    case "document-check":
      return <FileCheck2 className="size-5" />;
    case "timeline-bolt":
      return <Activity className="size-5" />;
    case "users-heart":
      return <Users className="size-5" />;
    case "clock":
      return <Clock className="size-5" />;
    case "gavel-scale":
      return <GavelScale />;
    case "chat-shield":
      return (
        <span className="inline-flex items-center gap-1">
          <Shield className="size-5" />
          <MessageSquare className="size-4 opacity-75" />
        </span>
      );
    case "clock-gear":
      return (
        <span className="inline-flex items-center gap-1">
          <Clock className="size-5" />
          <Cog className="size-4 opacity-75" />
        </span>
      );
    case "folder-sync":
      return (
        <span className="inline-flex items-center gap-1">
          <Folder className="size-5" />
          <RefreshCw className="size-4 opacity-75" />
        </span>
      );
    case "calculator-smart":
      return <Calculator className="size-5" />;
    case "plug-cubes":
      return (
        <span className="inline-flex items-center gap-1">
          <Plug className="size-5" />
          <Boxes className="size-4 opacity-75" />
        </span>
      );
    case "pie-trust":
      return <PieChart className="size-5" />;
    case "shield-key":
      return (
        <span className="inline-flex items-center gap-1">
          <Shield className="size-5" />
          <KeyRound className="size-4 opacity-75" />
        </span>
      );
    case "target-arrow":
      return <Target className="size-5" />;
    default:
      return <Activity className="size-5" />;
  }
}

function GavelScale() {
  return (
    <span className="inline-flex items-center gap-1">
      <Scale className="size-5" />
      <Target className="size-4 opacity-75" />
    </span>
  );
}

function AccentGlow({ accent }: { accent: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -inset-10 -z-10 blur-3xl opacity-20"
      style={{
        background:
          `radial-gradient(600px 280px at 20% 20%, ${accent}, transparent 60%), radial-gradient(600px 280px at 80% 60%, ${accent}, transparent 60%)`,
      }}
    />
  );
}

function WidgetCard({
  widget,
  accent,
  index,
}: {
  widget: Widget;
  accent: string;
  index: number;
}) {
  const animatedPie = widget.icon === "pie-trust" && /Visualización/.test(widget.title);
  return (
    <div
      data-parallax-item
      className={cn(
        "group rounded-lg border bg-[var(--color-ulpiano-input-bg)] p-4 text-[var(--color-ulpiano-gray-soft)]",
        "transition-all hover:scale-[1.02] hover:shadow-md",
        "hover:border-[var(--color-ulpiano-border)]",
        "animate-in fade-in slide-in-from-bottom-1 duration-300"
      )}
      style={{ animationDelay: `${60 * index}ms` }}
    >
      <div className="flex items-start gap-3">
        <div
          className={cn(
            "relative grid size-9 place-items-center rounded-md",
            animatedPie ? "before:absolute before:inset-0 before:rounded-md before:animate-pulse before:bg-white/5" : undefined
          )}
          style={{ background: `${accent}22`, color: accent }}
        >
          {IconFor(widget.icon)}
        </div>
        <div className="min-w-0">
          <div className="truncate font-medium text-white">{widget.title}</div>
          <div className={cn(
            "text-xs/5 text-white/70 transition-opacity",
            "opacity-0 group-hover:opacity-100"
          )}>{widget.meta}</div>
        </div>
      </div>
    </div>
  );
}

function MicroChart({ chart, accent }: { chart?: MicroChart; accent: string }) {
  if (!chart) return null;
  if (chart.kind === "bar-compact") {
    const [a, b] = chart.values;
    return (
      <div className="rounded-lg border bg-[var(--color-ulpiano-input-bg)] p-4">
        <div className="mb-2 grid grid-cols-2 gap-4">
          {chart.labels.map((label) => (
            <div key={label} className="text-xs text-white/70">
              {label}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 items-end gap-4">
          <div className="h-3 w-full rounded-full bg-white/10">
            <div
              className="h-3 rounded-full transition-all"
              style={{ width: `${a}%`, background: accent }}
            />
          </div>
          <div className="h-3 w-full rounded-full bg-white/10">
            <div
              className="h-3 rounded-full transition-all"
              style={{ width: `${b}%`, background: accent }}
            />
          </div>
        </div>
        <div className="mt-3 grid grid-cols-2 gap-4 text-xs text-white/80">
          <div>12h → 6h por expediente</div>
          <div>Expedientes 100% digitalizados</div>
        </div>
        <div className="mt-2 text-right text-xs text-white/60">{chart.unit}</div>
      </div>
    );
  }
  if (chart.kind === "cards-metrics") {
    return (
      <div className="grid grid-cols-3 gap-2">
        {chart.items.map((it, i) => (
          <div
            key={it.label}
            className="rounded-lg border bg-[var(--color-ulpiano-input-bg)] p-3 text-white/80"
            style={{ animationDelay: `${80 * i}ms` }}
          >
            <div className="text-xs text-white/60">{it.label}</div>
            <div className="mt-1 font-semibold" style={{ color: accent }}>
              {it.value}
            </div>
          </div>
        ))}
      </div>
    );
  }
  if (chart.kind === "donut") {
    const total = chart.slices.reduce((s, x) => s + x.value, 0);
    let acc = 0;
    const colors = [accent, "#64748b"];
    return (
      <div className="relative grid place-items-center rounded-lg border bg-[var(--color-ulpiano-input-bg)] p-6">
        <div className="relative h-36 w-36 rounded-full">
          {chart.slices.map((s, i) => {
            const start = (acc / total) * 360;
            const sweep = (s.value / total) * 360;
            acc += s.value;
            return (
              <div
                key={s.label}
                className="absolute inset-0 rounded-full"
                style={{ background: `conic-gradient(${colors[i % colors.length]} ${start}deg ${start + sweep}deg, transparent ${start + sweep}deg 360deg)` }}
              />
            );
          })}
          <div className="absolute inset-5 rounded-full bg-[var(--color-ulpiano-base)]" />
        </div>
        <div className="mt-4 text-xs text-white/70">{chart.unit}</div>
      </div>
    );
  }
  if (chart.kind === "sparkline") {
    const max = Math.max(...chart.series);
    const min = Math.min(...chart.series);
    const points = chart.series
      .map((v, i) => {
        const x = (i / (chart.series.length - 1)) * 100;
        const y = ((v - min) / (max - min || 1)) * 100;
        return `${x},${100 - y}`;
      })
      .join(" ");
    return (
      <div className="rounded-lg border bg-[var(--color-ulpiano-input-bg)] p-4">
        <svg viewBox="0 0 100 100" className="h-24 w-full">
          <polyline points={points} fill="none" stroke={accent} strokeWidth="2" />
        </svg>
        <div className="mt-2 text-right text-xs text-white/60">{chart.unit}</div>
      </div>
    );
  }
  return null;
}

function MilestoneGraph({ steps, accent }: { steps: string[]; accent: string }) {
  return (
    <div className="rounded-lg border bg-[var(--color-ulpiano-input-bg)] p-4">
      <div className="relative mx-2 mt-2 flex items-center justify-between">
        <div
          aria-hidden
          className="absolute left-6 right-6 top-3 h-0.5"
          style={{ background: `${accent}55` }}
        />
        {steps.map((label, i) => (
          <div key={label} className="relative flex flex-col items-center">
            <div className="relative">
              <div
                className="size-3 rounded-full"
                style={{ background: accent, boxShadow: "0 0 0 2px var(--color-ulpiano-border)" }}
              />
              <div
                className="pointer-events-none absolute -inset-2 rounded-full opacity-60"
                style={{ boxShadow: `0 0 16px ${accent}77` }}
                aria-hidden
              />
            </div>
            <div className="mt-2 w-28 text-center text-xs text-white/80">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LeftColumn({ tab }: { tab: TabItem }) {
  const accent = ACCENT_BY_TAB[tab.id];
  return (
    <div className="relative">
      <AccentGlow accent={accent} />
      <div className="text-[var(--color-Primary-100)] text-sm tracking-wide">
        {tab.tagline}
      </div>
      <h1 className="mt-2 font-serif text-4xl font-semibold text-white md:text-6xl">
        {tab.headline}
      </h1>
      <p className="mt-4 max-w-prose text-[var(--color-ulpiano-gray-soft)]">
        {tab.copy}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button variant="outline" className="rounded-full" asChild>
          <a href="#features">Ver más</a>
        </Button>
      </div>
    </div>
  );
}

function RightColumn({ tab }: { tab: TabItem }) {
  const accent = ACCENT_BY_TAB[tab.id];
  const { containerRef, onMouseMove, onMouseLeave } = useParallax();
  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="grid grid-cols-1 gap-3 sm:grid-cols-2"
      >
        {tab.rightPane.widgets.map((w, i) => (
          <WidgetCard key={`${w.title}-${i}`} widget={w} accent={accent} index={i} />
        ))}
      </div>
      <MicroChart chart={tab.rightPane.microChart} accent={accent} />
    </div>
  );
}

export function TabsHeroSegment({ data = DATA }: { data?: TabsData }) {
  const [value, setValue] = useState<TabItem["id"]>(data.tabs[0].id);
  const order = useMemo(() => data.tabs.map((t) => t.id), [data.tabs]);
  const activeTab = data.tabs.find((t) => t.id === value)!;
  const accent = ACCENT_BY_TAB[value];

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const idx = order.indexOf(value);
      const nextIdx = e.key === "ArrowRight" ? (idx + 1) % order.length : (idx - 1 + order.length) % order.length;
      setValue(order[nextIdx]);
    }
  };

  return (
    <section
      id="segments"
      className={cn(
        "py-16 md:py-24"
      )}
      style={{ background: "var(--background)" }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="mb-6 text-center font-serif text-2xl font-semibold md:text-3xl">
          Pensado para Profesionales
        </h2>
        <Tabs value={value} onValueChange={(v) => setValue(v as TabItem["id"]) } className="mt-2">
          <div className="flex items-center justify-center">
            <TabsList
              role="tablist"
              aria-label="Segmentos profesionales"
              className="bg-transparent h-auto p-0 overflow-x-auto"
              onKeyDown={onKeyDown}
            >
              {data.tabs.map((t) => (
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

          {data.tabs.map((t) => (
            <TabsContent
              key={t.id}
              id={`panel-${t.id}`}
              role="tabpanel"
              value={t.id}
              className="mt-10 data-[state=active]:animate-in data-[state=active]:fade-in data-[state=active]:slide-in-from-bottom-2 data-[state=active]:duration-300"
            >
              <div
                className="grid items-center gap-8 md:grid-cols-[54%_46%] rounded-xl border bg-white"
                style={{
                  borderColor: "var(--color-ulpiano-border)",
                  boxShadow: `0 0 0 1px var(--color-ulpiano-border)`,
                }}
              >
                <div className="p-6 md:p-8">
                  <LeftColumn tab={t} />
                </div>
                <div className="p-6 md:p-8">
                  {t.id === "asesores-financieros" ? (
                    <MilestoneGraph
                      steps={[
                        "Apertura del testamento",
                        "Escenarios de planificación sucesoria",
                        "Optimización fiscal",
                        "Transmisión segura",
                      ]}
                      accent={ACCENT_BY_TAB[t.id]}
                    />
                  ) : (
                    <RightColumn tab={t} />
                  )}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}

export default TabsHeroSegment;


