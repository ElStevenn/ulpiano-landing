'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Briefcase, User } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  {
    label: 'Soy profesional',
    description: 'Abogados, notarías, asesorías',
    href: 'https://backoffice.ulpiano.es/',
    icon: Briefcase,
    gradientFrom: 'rgba(99,102,241,0.2)',
    gradientTo: 'rgba(139,92,246,0.2)',
    hoverBorder: 'rgba(139,92,246,0.35)',
    iconColor: '#818cf8',
  },
  {
    label: 'Soy cliente',
    description: 'Accede a tu portal de cliente',
    href: 'https://app.ulpiano.es/',
    icon: User,
    gradientFrom: 'rgba(6,182,212,0.2)',
    gradientTo: 'rgba(59,130,246,0.2)',
    hoverBorder: 'rgba(59,130,246,0.35)',
    iconColor: '#22d3ee',
  },
];

export default function LoginPage() {
  return (
    <section
      style={{
        background: '#030712',
        minHeight: 'calc(100vh - 72px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Background effects */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(59,130,246,0.12), transparent 60%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(139,92,246,0.08), transparent 50%)',
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          maxWidth: 520,
          padding: '64px 24px',
          boxSizing: 'border-box',
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40, textDecoration: 'none' }}>
          <Image
            src="/ulpiano-logo.png"
            alt="Logotipo de ULPIANO"
            width={40}
            height={40}
            style={{ filter: 'brightness(1.15)' }}
            priority
          />
          <span style={{ fontSize: 20, fontWeight: 600, letterSpacing: '0.08em', color: 'rgba(255,255,255,0.95)' }}>
            ULPIANO
          </span>
        </Link>

        {/* Heading */}
        <h1 style={{ fontSize: 36, fontWeight: 700, color: '#fff', textAlign: 'center', marginBottom: 8 }}>
          Bienvenido de nuevo.
        </h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginBottom: 40 }}>
          Selecciona cómo quieres acceder.
        </p>

        {/* Role cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <a
                key={role.label}
                href={role.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 16,
                  width: '100%',
                  minWidth: 340,
                  padding: '20px 24px',
                  borderRadius: 16,
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.03)',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                  e.currentTarget.style.borderColor = role.hoverBorder;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <div
                    style={{
                      flexShrink: 0,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: `linear-gradient(135deg, ${role.gradientFrom}, ${role.gradientTo})`,
                    }}
                  >
                    <Icon style={{ width: 20, height: 20, color: role.iconColor }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                      {role.label}
                    </div>
                    <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                      {role.description}
                    </div>
                  </div>
                </div>
                <ArrowRight style={{ width: 20, height: 20, flexShrink: 0, color: 'rgba(255,255,255,0.3)' }} />
              </a>
            );
          })}
        </div>

        {/* Back to home */}
        <Link
          href="/"
          style={{ marginTop: 40, fontSize: 14, color: 'rgba(255,255,255,0.35)', textDecoration: 'none' }}
        >
          ← Volver al inicio
        </Link>
      </motion.div>
    </section>
  );
}
