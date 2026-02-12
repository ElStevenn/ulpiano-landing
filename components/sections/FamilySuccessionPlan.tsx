'use client';

import { Card } from "@/components/ui/card";

export function FamilySuccessionPlan({ showTitle = true, appearance = "dark" }: { showTitle?: boolean; appearance?: "dark" | "light" }) {
  const familyData = {
    parents: {
      label: "Juan y María Rodríguez Mateos",
      totalEstate: "1,163",
      currency: "M €"
    },
    children: [
      {
        name: "Carlos",
        assets: [
          { icon: "🏠", name: "Casa familiar", value: "100.000 €" },
          { icon: "💰", name: "Cuenta bancaria", value: "75.000 €" },
          { icon: "📈", name: "Acciones empresa", value: "200.000 €" }
        ],
        total: "375.000 €"
      },
      {
        name: "Ana",
        assets: [
          { icon: "🏠", name: "Casa familiar", value: "100.000 €" },
          { icon: "💰", name: "Cuenta bancaria", value: "185.000 €" },
          { icon: "🚗", name: "Coche alta gama", value: "40.000 €" }
        ],
        total: "325.000 €"
      },
      {
        name: "Laura",
        assets: [
          { icon: "🏠", name: "Casa familiar", value: "100.000 €" },
          { icon: "💰", name: "Cuenta bancaria", value: "140.000 €" },
          { icon: "🌴", name: "Vivienda playa", value: "223.000 €" }
        ],
        total: "463.000 €",
        hasSubstitution: true
      }
    ],
    substitutes: [
      { name: "Esther", icon: "👧" },
      { name: "Tomás", icon: "👦" }
    ]
  };

  // Colores en modo light alineados con los paneles de referencia
  // Texto principal: slate-800, texto secundario: slate-600, bordes y líneas: slate-300, acentos: slate-900
  const mainTextColor = appearance === "light" ? "#1f2937" : "white"; // slate-800
  const secondaryTextColor = appearance === "light" ? "#475569" : "rgba(255,255,255,0.8)"; // slate-600
  const borderColor = appearance === "light" ? "#cbd5e1" : "rgba(255,255,255,0.4)"; // slate-300
  const connectorColor = appearance === "light" ? "#cbd5e1" : "rgba(255,255,255,0.9)"; // slate-300
  const accentColor = appearance === "light" ? "#0f172a" : "var(--color-luminary-coral)"; // slate-900
  const parentFillColor = appearance === "light" ? "#ffffff" : "rgba(255, 255, 255, 0.1)";
  const childFillColor = appearance === "light" ? "#f8fafc" : "rgba(255, 255, 255, 0.1)";
  const substituteFillColor = appearance === "light" ? "#f8fafc" : "rgba(255, 255, 255, 0.1)";

  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      {/* Árbol familiar */}
      <div className="relative">
        <svg width="100%" height="400" viewBox="0 0 900 400" className="mt-2">
          {/* Fila 0 - Padres */}
          <rect x="300" y="20" width="300" height="80" rx="8" 
            fill={parentFillColor} 
            stroke={borderColor} 
            strokeWidth="2" />
          <text x="450" y="45" textAnchor="middle" className="text-sm font-medium" fill={mainTextColor} style={{ fontFamily: "var(--font-Roboto)" }}>
            {familyData.parents.label}
          </text>
          <text x="450" y="65" textAnchor="middle" className="text-xs" fill={secondaryTextColor} style={{ fontFamily: "var(--font-Roboto)" }}>
            Patrimonio total: {familyData.parents.totalEstate} {familyData.parents.currency}
          </text>
          <text x="450" y="85" textAnchor="middle" className="text-xs" fill={secondaryTextColor} style={{ fontFamily: "var(--font-Roboto)" }}>
            (1.163.000 €)
          </text>
          
          {/* Línea principal de padres a Ana (centro) */}
          <line x1="450" y1="100" x2="450" y2="170" stroke={connectorColor} strokeWidth="3" />
          
          {/* Línea horizontal desde el centro */}
          <line x1="450" y1="170" x2="150" y2="170" stroke={connectorColor} strokeWidth="3" />
          <line x1="450" y1="170" x2="750" y2="170" stroke={connectorColor} strokeWidth="3" />
          
          {/* Líneas perpendiculares a Carlos, Ana y Laura */}
          <line x1="150" y1="170" x2="150" y2="210" stroke={connectorColor} strokeWidth="3" />
          <line x1="450" y1="170" x2="450" y2="210" stroke={connectorColor} strokeWidth="3" />
          <line x1="750" y1="170" x2="750" y2="210" stroke={connectorColor} strokeWidth="3" />
          
          {/* Fila 1 - Hijos */}
          {familyData.children.map((child, index) => {
            const x = 50 + index * 280;
            return (
              <g key={child.name}>
                <rect x={x} y="210" width="240" height="140" rx="8" 
                  fill={childFillColor} 
                  stroke={borderColor} 
                  strokeWidth="2" />
                
                {/* Nombre del hijo */}
                <text x={x + 120} y="230" textAnchor="middle" className="text-sm font-semibold" fill={mainTextColor} style={{ fontFamily: "var(--font-Roboto)" }}>
                  {child.name}
                </text>
                
                {/* Assets del hijo */}
                {child.assets.map((asset, assetIndex) => (
                  <g key={asset.name}>
                    <text x={x + 15} y={250 + assetIndex * 25} className="text-xs" fill={secondaryTextColor} style={{ fontFamily: "var(--font-Roboto)" }}>
                      {asset.icon} {asset.name}
                    </text>
                    <text x={x + 225} y={250 + assetIndex * 25} textAnchor="end" className="text-xs font-semibold" fill={accentColor} style={{ fontFamily: "var(--font-Roboto)" }}>
                      {asset.value}
                    </text>
                  </g>
                ))}
                
                {/* Total del hijo */}
                <line x1={x + 15} y1={325} x2={x + 225} y2={325} stroke={borderColor} strokeWidth="1" />
                <text x={x + 15} y={340} className="text-xs font-medium" fill={secondaryTextColor} style={{ fontFamily: "var(--font-Roboto)" }}>
                  Total:
                </text>
                <text x={x + 225} y={340} textAnchor="end" className="text-sm font-bold" fill={accentColor} style={{ fontFamily: "var(--font-Roboto)" }}>
                  {child.total}
                </text>
                
                {/* Sustitución vulgar para Laura */}
                {child.hasSubstitution && (
                  <g>
                    {/* Línea desde Laura hacia abajo */}
                    <line x1={x + 120} y1="350" x2={x + 120} y2="370" stroke={connectorColor} strokeWidth="3" />
                    
                    {/* Texto "Sustitutos vulgares" en el espacio */}
                    <text x={x + 120} y="385" textAnchor="middle" className="text-xs font-medium" fill={secondaryTextColor} style={{ fontFamily: "var(--font-Roboto)" }}>
                      Sustitutos vulgares
                    </text>
                    
                    {/* Texto "❌ (renuncia o fallecimiento)" debajo */}
                    <text x={x + 120} y="400" textAnchor="middle" className="text-xs font-medium" fill={secondaryTextColor} style={{ fontFamily: "var(--font-Roboto)" }}>
                      ❌ (renuncia o fallecimiento)
                    </text>
                    
                    {/* Línea que continúa después del texto */}
                    <line x1={x + 120} y1="415" x2={x + 120} y2="440" stroke={connectorColor} strokeWidth="3" />
                    
                    {/* Línea horizontal desde el tronco principal */}
                    <line x1={x + 120} y1="440" x2={x + 60} y2="440" stroke={connectorColor} strokeWidth="3" />
                    <line x1={x + 120} y1="440" x2={x + 180} y2="440" stroke={connectorColor} strokeWidth="3" />
                    
                    {/* Líneas perpendiculares a los sustitutos */}
                    <line x1={x + 60} y1="440" x2={x + 60} y2="480" stroke={connectorColor} strokeWidth="3" />
                    <line x1={x + 180} y1="440" x2={x + 180} y2="480" stroke={connectorColor} strokeWidth="3" />
                    
                    {/* Esther - centrada respecto a Laura */}
                    <rect x={x + 20} y="480" width="80" height="50" rx="6" 
                      fill={substituteFillColor} 
                      stroke={borderColor} 
                      strokeWidth="2" />
                    <text x={x + 60} y="505" textAnchor="middle" className="text-xs" fill={mainTextColor} style={{ fontFamily: "var(--font-Roboto)" }}>
                      👧 Esther
                    </text>
                    
                    {/* Tomás - centrado respecto a Laura */}
                    <rect x={x + 160} y="480" width="80" height="50" rx="6" 
                      fill={substituteFillColor} 
                      stroke={borderColor} 
                      strokeWidth="2" />
                    <text x={x + 200} y="505" textAnchor="middle" className="text-xs" fill={mainTextColor} style={{ fontFamily: "var(--font-Roboto)" }}>
                      👦 Tomás
                    </text>
                  </g>
                )}
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
