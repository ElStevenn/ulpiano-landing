'use client';

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { demoLeadSchema, type DemoLeadInput } from "@/lib/validations";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export function DemoForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<DemoLeadInput>({ resolver: zodResolver(demoLeadSchema) });
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");

  const onSubmit = async (data: DemoLeadInput) => {
    try {
      setStatus("idle");
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Error");
      setStatus("ok");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
      <div className="grid gap-2">
        <Label htmlFor="name">Nombre</Label>
        <Input id="name" placeholder="Tu nombre" {...register("name")} />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" placeholder="tu@empresa.com" {...register("email")} />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="company">Empresa</Label>
        <Input id="company" placeholder="Nombre de empresa" {...register("company")} />
        {errors.company && (
          <p className="text-sm text-red-600">{errors.company.message}</p>
        )}
      </div>
      <div className="grid gap-2">
        <Label htmlFor="size">Tamaño de la firma (opcional)</Label>
        <Input id="size" placeholder="Ej. 10-50" {...register("size")} />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="message">Mensaje (opcional)</Label>
        <Textarea id="message" placeholder="Cuéntanos tu caso" {...register("message")} />
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Enviando…" : "Solicitar una demo"}
      </Button>
      <p className="text-xs text-muted-foreground">
        Sin compromiso • Respuesta en 24h • Cifrado AES‑256
      </p>
      {status === "ok" && (
        <p className="text-sm text-green-600">Gracias. Te contactaremos en 24h.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Ha ocurrido un error. Intenta de nuevo.</p>
      )}
    </form>
  );
}


