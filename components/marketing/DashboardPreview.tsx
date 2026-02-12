'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Bolt, CheckCircle2, FileText, User } from "lucide-react";
import { Button } from "@/components/ui/button";

type CountUpValueProps = {
  target: number;
  durationMs?: number;
  start?: boolean;
};

function CountUpValue({ target, durationMs = 1200, start = false }: CountUpValueProps) {
  const [value, setValue] = useState<number>(0);
  const frameRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    const animate = (time: number) => {
      if (startTimeRef.current === null) startTimeRef.current = time;
      const elapsed = time - startTimeRef.current;
      const progress = Math.min(elapsed / durationMs, 1);
      setValue(Math.round(progress * target));
      if (progress < 1) frameRef.current = requestAnimationFrame(animate);
    };
    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      startTimeRef.current = null;
    };
  }, [target, durationMs, start]);

  return <span>{value}</span>;
}

export function DashboardPreview() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState<boolean>(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) setInView(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video rounded-xl border bg-muted/30 overflow-hidden"
      aria-hidden
    >
      {/* Soft glow */}
      <div className="absolute -inset-24 bg-[radial-gradient(closest-side,theme(colors.primary/10),transparent)] blur-3xl" />

      {/* Frame */}
      <div className="relative h-full w-full p-3 md:p-4 animate-ulp-drop-in">
        <div className="grid h-full grid-cols-[56px,1fr] gap-3">
          {/* Left sidebar visible */}
          <div className="rounded-lg border bg-white/80 backdrop-blur p-2 flex flex-col items-center gap-2">
            <div className="mt-1 mb-2 h-6 w-6 rounded overflow-hidden">
              <Image src="/logo.svg" alt="Ulpiano" width={24} height={24} />
            </div>
            <div className="h-8 w-8 rounded-md bg-neutral-200" />
            <div className="h-8 w-8 rounded-md bg-neutral-200" />
            <div className="h-8 w-8 rounded-md bg-neutral-200" />
            <div className="h-8 w-8 rounded-md bg-neutral-200" />
            <div className="h-8 w-8 rounded-md bg-neutral-200" />
          </div>

          {/* Main content */}
          <div className="min-w-0">
            {/* Top bar */}
            <div className="flex items-center justify-between rounded-lg bg-white/70 backdrop-blur border px-3 py-2">
              <div className="h-6 w-28 rounded-md bg-neutral-200" />
              <div className="flex items-center gap-2">
                <div className="h-6 w-20 rounded-md bg-neutral-200" />
                <div className="h-6 w-6 rounded-md bg-neutral-200" />
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mt-3">
              {/* Cards */}
              <div className="rounded-xl bg-indigo-50 border p-3">
                <div className="flex items-center gap-2 text-neutral-600 text-xs">
                  <FileText className="size-4" /> Total Expedientes
                </div>
                <div className="mt-2 text-2xl font-semibold">
                  <CountUpValue target={38} start={inView} />
                </div>
                <div className="mt-0.5 text-xs text-neutral-500">Gestión completa</div>
              </div>
              <div className="rounded-xl bg-orange-50 border p-3">
                <div className="flex items-center gap-2 text-neutral-600 text-xs">
                  <Bolt className="size-4" /> En Curso
                </div>
                <div className="mt-2 text-2xl font-semibold">
                  <CountUpValue target={20} start={inView} />
                </div>
                <div className="mt-0.5 text-xs text-neutral-500">Requieren atención</div>
              </div>
              <div className="rounded-xl bg-green-50 border p-3">
                <div className="flex items-center gap-2 text-neutral-600 text-xs">
                  <CheckCircle2 className="size-4" /> Completados
                </div>
                <div className="mt-2 text-2xl font-semibold">
                  <CountUpValue target={18} start={inView} />
                </div>
                <div className="mt-0.5 text-xs text-neutral-500">Finalizados cri exito</div>
              </div>
              <div className="rounded-xl bg-white border p-3">
                <div className="flex items-center gap-2 text-neutral-600 text-xs">
                  <User className="size-4" /> Mis Tareas
                </div>
                <div className="mt-2 text-2xl font-semibold">
                  <CountUpValue target={7} start={inView} />
                </div>
                <div className="mt-0.5 text-xs text-neutral-500">Asignadas a ti</div>
              </div>
            </div>

            {/* Immediate attention */}
            <div className="mt-3 rounded-xl border bg-white p-3">
              <div className="text-sm font-medium">Atención Inmediata</div>
              <div className="mt-2 grid grid-cols-4 gap-2 text-sm">
                <div className="rounded-lg bg-purple-50 px-3 py-2 flex items-center gap-2">
                  <div className="relative">
                    <span className="block size-2 rounded-full bg-fuchsia-500" />
                    <span className="absolute inset-0 rounded-full bg-fuchsia-500/40 animate-ulp-pulse-ring" />
                  </div>
                  Firmas Pendientes
                </div>
                <div className="rounded-lg bg-rose-50 px-3 py-2 flex items-center gap-2">
                  <div className="relative">
                    <span className="block size-2 rounded-full bg-rose-500" />
                    <span className="absolute inset-0 rounded-full bg-rose-500/40 animate-ulp-pulse-ring" />
                  </div>
                  Incidencias
                </div>
                <div className="rounded-lg bg-amber-50 px-3 py-2">Próximos a Vencer</div>
                <div className="rounded-lg bg-indigo-50 px-3 py-2">Docs. Pendientes</div>
              </div>
            </div>

            {/* Table with real client names */}
            <div className="mt-3 rounded-xl border overflow-hidden">
              <div className="bg-neutral-100/60 px-3 py-2 text-xs text-neutral-600">
                Expedientes Recientes
              </div>
              <div className="relative bg-white text-sm">
                <div className="grid grid-cols-[2fr,1.5fr,1.5fr,1fr,1fr,1.2fr] gap-2 px-3 py-2 border-b text-neutral-600 font-medium">
                  <div>Expediente</div>
                  <div>Cliente</div>
                  <div>Trámite</div>
                  <div>Estado</div>
                  <div>Asignado</div>
                  <div className="text-right">Acción</div>
                </div>
                {[
                  { expediente: "Expediente de Juan", cliente: "Juan Barragán", tramite: "Herencia intestada", estado: "Listo para firmar" },
                  { expediente: "Expediente de Mario", cliente: "Mario Bartolomé", tramite: "Donación", estado: "Completado" },
                ].map((row, idx) => (
                  <div key={idx} className="grid grid-cols-[2fr,1.5fr,1.5fr,1fr,1fr,1.2fr] gap-2 px-3 py-2 border-b last:border-0 items-center">
                    <div className="truncate">{row.expediente}</div>
                    <div className="truncate">{row.cliente}</div>
                    <div className="truncate">{row.tramite}</div>
                    <div className="truncate">{row.estado}</div>
                    <div>
                      <div className="flex -space-x-2">
                        <span className="inline-block size-6 rounded-full bg-neutral-300 border-2 border-white" />
                        <span className="inline-block size-6 rounded-full bg-neutral-300 border-2 border-white" />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button size="sm">Abrir expediente</Button>
                    </div>
                  </div>
                ))}

                {/* row highlight sweep */}
                <div className="pointer-events-none absolute inset-x-0 top-10 h-8 bg-gradient-to-r from-transparent via-neutral-200/50 to-transparent animate-ulp-sweep" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPreview;


