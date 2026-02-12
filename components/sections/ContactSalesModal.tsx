'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { pricingConfig } from '@/pricing.config';
import { cn } from '@/lib/utils';

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function ContactSalesModal({ open, onClose }: Props) {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(pricingConfig.contactSalesEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json?.ok)
        setResult('Hemos recibido tu solicitud. Te contactaremos pronto.');
      else setResult('Ha ocurrido un error. Inténtalo de nuevo.');
      window.dataLayer?.push({ event: 'pricing_contact_sales_submit' });
      form.reset();
    } catch (err) {
      setResult('Ha ocurrido un error.');
    } finally {
      setLoading(false);
    }
  }

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="w-full max-w-lg">
        <Card className="rounded-2xl">
          <CardHeader>
            <CardTitle>Contacta con ventas</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#1a2332]"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#4a90e2]"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#1a2332]"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#4a90e2]"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-[#1a2332]"
                >
                  Empresa
                </label>
                <input
                  id="company"
                  name="company"
                  className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#4a90e2]"
                />
              </div>
              <div>
                <label
                  htmlFor="size"
                  className="block text-sm font-medium text-[#1a2332]"
                >
                  Tamaño del equipo
                </label>
                <select
                  id="size"
                  name="size"
                  className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#4a90e2]"
                >
                  <option value="1-5">1-5</option>
                  <option value="6-15">6-15</option>
                  <option value="16-50">16-50</option>
                  <option value=">50">Más de 50</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#1a2332]"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-[#4a90e2]"
                />
              </div>
              {result && <p className="text-sm text-[#1a2332]">{result}</p>}
              <div className="flex gap-3 pt-2">
                <Button type="submit" disabled={loading}>
                  {loading ? 'Enviando…' : 'Enviar'}
                </Button>
                <Button type="button" variant="outline" onClick={onClose}>
                  Cerrar
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <p className="text-xs text-[#8a94a6]">
              Tus datos se tratarán conforme a nuestra Política de Privacidad.
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
