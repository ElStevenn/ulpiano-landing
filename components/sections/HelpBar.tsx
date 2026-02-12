'use client';

export default function HelpBar() {
  return (
    <section className="w-full py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl bg-gray-100 text-[#0f172a] dark:bg-white/10 dark:text-white px-6 py-8 sm:px-10 sm:py-10 flex flex-col items-center justify-center gap-4 border border-black/5">
          <p className="text-lg md:text-xl font-medium text-center">
            ¿Necesitas ayuda para encontrar el plan adecuado? <span className="text-[#ff6b5a]">Habla con nuestro equipo.</span>
          </p>
          {/* Botón eliminado como se solicitó */}
        </div>
      </div>
    </section>
  );
}


