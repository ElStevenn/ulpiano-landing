import type { Metadata } from 'next';
import { Inter, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import { PageTransition } from '@/components/ui/PageTransition';
import { BackToTop } from '@/components/ui/BackToTop';
import { CookieConsent } from '@/components/ui/CookieConsent';
import { ScrollLock } from '@/components/ui/ScrollLock';
import { AnalyticsProvider } from '@/components/site/AnalyticsProvider';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Ulpiano — Plataforma Integral de Herencias Online',
  description:
    'Moderniza la planificación sucesoria con tecnología, automatización y seguridad de nivel empresarial.',
  icons: {
    icon: '/ulpiano-logo.png',
    shortcut: '/ulpiano-logo.png',
    apple: '/ulpiano-logo.png',
  },
  openGraph: {
    title: 'Ulpiano — Plataforma Integral de Herencias Online',
    description:
      'Moderniza la planificación sucesoria con tecnología, automatización y seguridad de nivel empresarial.',
    url: 'https://ulpiano.es',
    siteName: 'Ulpiano',
    images: [
      {
        url: 'https://ulpiano.es/favicon.png',
        width: 512,
        height: 512,
        alt: 'Logotipo de Ulpiano',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ulpiano — Plataforma Integral de Herencias Online',
    description:
      'Moderniza la planificación sucesoria con tecnología, automatización y seguridad de nivel empresarial.',
    images: [
      {
        url: 'https://ulpiano.es/favicon.png',
        width: 512,
        height: 512,
        alt: 'Logotipo de Ulpiano',
        type: 'image/png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="es" className={`${inter.variable} ${geistMono.variable}`}>
      <head>
        {/* Google Tag Manager */}
        {gtmId && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        
        <AnalyticsProvider>
          <ScrollLock />
          <PageTransition>
            <Header />
            {children}
            <Footer />
            <BackToTop />
          </PageTransition>
        </AnalyticsProvider>
        <CookieConsent />
      </body>
    </html>
  );
}
