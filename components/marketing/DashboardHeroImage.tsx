'use client';

import Image from "next/image";
import { useState } from "react";
import DashboardPreview from "@/components/marketing/DashboardPreview";

export default function DashboardHeroImage() {
  type Source = "png" | "svg" | "preview";
  const [source, setSource] = useState<Source>("png");

  if (source === "preview") {
    return <DashboardPreview />;
  }

  return (
    <div className="relative w-full max-w-full rounded-2xl overflow-hidden bg-slate-950 shadow-2xl shadow-black/40">
      {/* Outer glow with gradient */}
      <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-purple-500/40 blur-lg opacity-60 -z-10 overflow-hidden"></div>
      
      {/* Border wrapper with gradient */}
      <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-purple-500/50">
        <div className="relative w-full rounded-2xl bg-slate-950 overflow-hidden">
          {/* Inner glow effect */}
          <div className="absolute inset-0 rounded-2xl ring-1 ring-blue-400/30 ring-inset shadow-[inset_0_0_30px_rgba(59,130,246,0.15)] pointer-events-none z-10"></div>
          
          {/* Image content - fills container completely */}
          <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
            <Image
              src={source === "png" ? "/Imagen1_PantallaP.png" : "/dashboard-hero.svg"}
              alt="Vista del panel de control de Ulpiano"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1400px"
              onError={() => setSource((prev) => (prev === "png" ? "svg" : "preview"))}
            />

            {/* Subtle vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.1)_100%)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}


