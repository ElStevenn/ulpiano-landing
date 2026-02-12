export type Plan = 'starter' | 'essential' | 'pro'

export type FeatureRow = {
  section?: string | null
  name: string
  starter?: boolean | string | null
  essential?: boolean | string | null
  pro?: boolean | string | null
}

export const planLabels: Record<Plan, string> = {
  starter: 'starter',
  essential: 'Esencial',
  pro: 'Pro',
}

// NOTA: General - Sistema de notificaciones en posición 4 (después de Colaboración con partners).
export const featureRows: FeatureRow[] = [
  // 1. General (Sistema de notificaciones en posición 4)
  { section: 'General', name: 'Branding personalizado (portal)', starter: false, essential: true, pro: '✓ / white-label, dominio propio' },
  { name: 'Portal del cliente', starter: false, essential: '✓ / brandable', pro: '✓ / white-label + propio' },
  { name: 'Colaboración con partners', starter: false, essential: true, pro: true },
  { name: 'Sistema de notificaciones', starter: true, essential: true, pro: true },
  { name: 'Almacenamiento', starter: '50 GB', essential: '500 GB', pro: '5 TB' },
  { name: 'Soporte chat/email (SLA)', starter: '✓ (48–72h)', essential: '✓ / 24–48h prioritario', pro: '✓ / dedicado, SLA' },

  // 2. Ulpiano AI
  { section: 'Ulpiano AI', name: 'Ulpiano AI (asistente)', starter: true, essential: true, pro: '✓ / tuning a medida' },
  { name: 'Digitalizar documentos (extracción)', starter: false, essential: true, pro: true },
  { name: 'Digitalizar documentos (comprensión)', starter: false, essential: true, pro: true }, 
  { name: 'Generación de documentos sucesorios', starter: false, essential: true, pro: true }, 

  // 3. Gestión patrimonial
  { section: 'Gestión patrimonial', name: 'Inventario de bienes', starter: true, essential: true, pro: true },
  { name: 'Registro de deudas', starter: true, essential: true, pro: true },
  { name: 'Documentos por bien (adjuntos)', starter: true, essential: true, pro: true },
  { name: 'Activos digitales', starter: true, essential: true, pro: true },

  // 4. Planificación sucesoria
  { section: 'Planificación sucesoria', name: 'Árbol familiar (visual)', starter: true, essential: true, pro: true },
  { name: 'Títulos e instituciones sucesorias', starter: true, essential: true, pro: true },
  { name: 'Escenarios de planificación', starter: '2 por expediente', essential: '4 por expediente', pro: 'Ilimitados' },
  { name: 'Crear escenarios en 1 click', starter: false, essential: true, pro: true },
  { name: 'Comparador de escenarios', starter: true, essential: true, pro: true }, 

  // 5. Fiscalidad de la herencia
  { section: 'Fiscalidad de la herencia', name: 'Cálculo valor fiscal mínimo inmuebles', starter: true, essential: true, pro: true },
  { name: 'Detalle de reducciones fiscales aplicadas', starter: true, essential: true, pro: true },
  { name: 'Detalle de bonificaciones fiscales aplicadas', starter: true, essential: true, pro: true },
  { name: 'Modelo S05 - Solicitud de prórroga', starter: true, essential: true, pro: true },
  { name: 'Modelo 660 - Relación de inventario', starter: true, essential: true, pro: true },
  
  { name: 'Modelo 650 - Declarar una herencia', starter: false, essential: true, pro: true },
  { name: 'Modelo 651 - Declarar una donación', starter: false, essential: true, pro: true },
  { name: 'Modelo 652 - Declarar un seguro de vida', starter: false, essential: true, pro: true },
  { name: 'Cálculo plusvalía municipal - Próximamente', starter: false, essential: true, pro: true },
  
  { name: 'Modelo 655 - Próximamente', starter: false, essential: false, pro: true },
  { name: 'Modelo 600 - Próximamente', starter: false, essential: false, pro: true },
  
  // 6. Integraciones / API / Seguridad
  { section: 'Integraciones / API / Seguridad', name: 'API (endpoints)', starter: false, essential: '✓ (API básica)', pro: '✓ (API completa + SSO/SCIM)' },
  { name: 'Conectores (Zapier, pasarelas)', starter: '✓ (pasarelas básicas)', essential: '✓ (Zapier + pasarelas)', pro: '✓ / integraciones a medida' },
  { name: 'SSO / SAML', starter: false, essential: '✓ (proyecto)', pro: '✓ (incluido / configurable)' },
  { name: 'Seguridad (encriptación, backups)', starter: '✓ estándar', essential: '✓ avanzada', pro: '✓ enterprise (auditoría, logs)' },

  // 7. Onboarding / Formación / Servicios
  { section: 'Onboarding / Formación / Servicios', name: 'Onboarding incluido', starter: '2 sesiones – 299 €', essential: '5 sesiones – 599 €', pro: 'Onboarding extendido – 1.599 €' },
  { name: 'Gestor de cuenta', starter: false, essential: true, pro: 'Gestor de cuenta dedicado' },
  { name: 'Revisión legal humana (abogado)', starter: 'add-on', essential: 'add-on', pro: 'add-on' },
  { name: 'Gestión del expediente', starter: 'add-on', essential: 'add-on', pro: 'add-on' },
]
