import { z } from 'zod';

export const demoLeadSchema = z.object({
  name: z.string().min(2, 'Introduce tu nombre'),
  lastName: z.string().min(2, 'Introduce tu apellido'),
  email: z.string().email('Email no válido'),
  phone: z.string().min(9, 'Introduce un teléfono válido'),
  company: z.string().optional(),
  source: z.string().optional(),
  size: z.string().optional(),
  message: z.string().optional(),
});

export type DemoLeadInput = z.infer<typeof demoLeadSchema>;
