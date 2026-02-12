'use client';

import Link from "next/link";
import { MessageCircle, PhoneCall, Monitor, ChevronRight } from "lucide-react";

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-2xl border bg-white p-8 shadow-sm transition-colors hover:bg-white/95">
      {children}
    </div>
  );
}

function FloatingIcon({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute -top-6 left-6 grid h-14 w-14 place-items-center rounded-2xl"
      style={{ background: "var(--color-Primary-100)", color: "var(--color-Primary-400)" }}
      aria-hidden
    >
      {children}
    </div>
  );
}

export default function HelpContact() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-semibold tracking-tight text-[#0f172a] md:text-4xl">
          ¿En qué podemos ayudar?
        </h2>
        <p className="mt-6 text-lg text-neutral-600">Si tienes dudas, habla con nuestro equipo.</p>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {/* Chat */}
          <Card>
            <FloatingIcon>
              <MessageCircle className="h-6 w-6" />
            </FloatingIcon>
            <h3 className="mt-8 text-xl font-semibold text-[#0f172a]">Pregunta por chat</h3>
            <p className="mt-3 text-neutral-600">
              Haz una pregunta a través del live chat. Es rápido y fácil.
            </p>
            <Link
              href="#contact"
              className="mt-8 flex items-center justify-between rounded-xl border bg-neutral-50 px-4 py-3 text-[15px] font-medium text-[var(--color-Primary-400)] hover:bg-neutral-100"
              aria-label="Inicia una conversación por chat"
            >
              <span>Inicia una conversación</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Card>

          {/* Ventas */}
          <Card>
            <FloatingIcon>
              <PhoneCall className="h-6 w-6" />
            </FloatingIcon>
            <h3 className="mt-8 text-xl font-semibold text-[#0f172a]">Contacta con Ventas</h3>
            <p className="mt-3 text-neutral-600">
              Pregunta qué opciones y ventajas te ofrece Ulpiano.
            </p>
            <a
              href="tel:+34930478967"
              className="mt-8 flex items-center justify-between rounded-xl border bg-neutral-50 px-4 py-3 text-[15px] font-medium text-[var(--color-Primary-400)] hover:bg-neutral-100"
            >
              <span>Llama al +34 930 478 967</span>
              <ChevronRight className="h-4 w-4" />
            </a>
          </Card>

          {/* Webinars */}
          <Card>
            <FloatingIcon>
              <Monitor className="h-6 w-6" />
            </FloatingIcon>
            <h3 className="mt-8 text-xl font-semibold text-[#0f172a]">Asiste a los webinars</h3>
            <p className="mt-3 text-neutral-600">
              Descubre en una sesión todo lo que necesitas saber sobre Ulpiano.
            </p>
            <Link
              href="#webinars"
              className="mt-8 flex items-center justify-between rounded-xl border bg-neutral-50 px-4 py-3 text-[15px] font-medium text-[var(--color-Primary-400)] hover:bg-neutral-100"
            >
              <span>Apúntate gratis</span>
              <ChevronRight className="h-4 w-4" />
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
}


