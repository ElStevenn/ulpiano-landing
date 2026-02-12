import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async rewrites() {
    return [
      // Serve the uploaded logo at a stable path
      { source: '/logo.svg', destination: '/ulpiano-logo.svg' },
    ];
  },
  async redirects() {
    return [
      // Redirect old URLs to new silo structure
      {
        source: '/procesamiento-inteligente-documentos',
        destination: '/ulpiano-ia/procesamiento-inteligente-documentos',
        permanent: true,
      },
      {
        source: '/generacion-documentos-ia',
        destination: '/ulpiano-ia/generacion-documentos-ia',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
