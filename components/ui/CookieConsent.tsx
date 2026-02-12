'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'ulpiano-cookie-consent';

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
    window.dataLayer?.push({ event: 'cookie_consent', action: 'accepted' });
  }

  function handleReject() {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
    window.dataLayer?.push({ event: 'cookie_consent', action: 'rejected' });
  }

  if (!visible) return null;

  return (
    <>
      {/* Dark overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9998,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />

      {/* Bottom banner */}
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e5e7eb',
          boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.15)',
          padding: '20px 24px',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {/* Text */}
          <p
            style={{
              fontSize: '14px',
              color: '#4b5563',
              lineHeight: 1.6,
              margin: 0,
              flex: '1 1 0%',
              minWidth: '280px',
            }}
          >
            🍪 Utilizamos cookies propias y de terceros para mejorar tu
            experiencia, analizar el tráfico y personalizar contenido. Consulta
            nuestra{' '}
            <Link
              href="/privacy"
              style={{ color: '#2563eb', fontWeight: 500, textDecoration: 'underline' }}
            >
              Política de Privacidad
            </Link>{' '}
            y los{' '}
            <Link
              href="/terms"
              style={{ color: '#2563eb', fontWeight: 500, textDecoration: 'underline' }}
            >
              Términos y Condiciones
            </Link>
            .
          </p>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              gap: '12px',
              flexShrink: 0,
            }}
          >
            <button
              onClick={handleReject}
              style={{
                padding: '10px 20px',
                borderRadius: '12px',
                border: '1px solid #d1d5db',
                backgroundColor: 'transparent',
                color: '#6b7280',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer',
              }}
            >
              Solo necesarias
            </button>
            <button
              onClick={handleAccept}
              style={{
                padding: '10px 24px',
                borderRadius: '12px',
                border: 'none',
                background: 'linear-gradient(to right, #2563eb, #7c3aed)',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Aceptar todas
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
