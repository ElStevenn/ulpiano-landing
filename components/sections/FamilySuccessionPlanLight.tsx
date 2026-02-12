'use client';

export function FamilySuccessionPlanLight() {
  const accent = "var(--color-luminary-coral)";
  const strokeColor = "#D9DCE3";
  const textColor = "#0f172a"; // slate-900
  const subText = "#334155";   // slate-700

  return (
    <div className="w-full mx-auto p-4">
      {/* Árbol familiar (light) */}
      <div
        className="relative rounded-xl border bg-white p-4 shadow-sm overflow-auto overscroll-contain"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="min-w-[1100px]">
          <svg width="100%" height="600" viewBox="0 0 900 600" className="mt-2">
            {/* Fila 0 - Padres */}
            <rect x="300" y="30" width="300" height="80" rx="8" 
              fill="#ffffff" 
              stroke={strokeColor} 
              strokeWidth="1.5" />
            <text x="450" y="55" textAnchor="middle" className="text-sm font-medium" fill={textColor}>
              Juan y María Rodríguez Mateos
            </text>
            <text x="450" y="75" textAnchor="middle" className="text-xs" fill={subText}>
              Patrimonio total: 1,163 M €
            </text>
            <text x="450" y="95" textAnchor="middle" className="text-xs" fill={subText}>
              (1.163.000 €)
            </text>

            {/* Tronco principal */}
            <line x1="450" y1="110" x2="450" y2="180" stroke={strokeColor} strokeWidth="1.5" shapeRendering="crispEdges" />
            {/* Barra horizontal hijos */}
            <line x1="180" y1="180" x2="720" y2="180" stroke={strokeColor} strokeWidth="1.5" shapeRendering="crispEdges" />
            {/* Verticales a cada hijo */}
            <line x1="240" y1="180" y2="220" x2="240" stroke={strokeColor} strokeWidth="1.5" shapeRendering="crispEdges" />
            <line x1="450" y1="180" y2="220" x2="450" stroke={strokeColor} strokeWidth="1.5" shapeRendering="crispEdges" />
            <line x1="660" y1="180" y2="220" x2="660" stroke={strokeColor} strokeWidth="1.5" shapeRendering="crispEdges" />

            {/* Hijos */}
            {[
              { name: "Carlos", x: 120, items: [
                { label: "🏠 Casa familiar", value: "100.000 €" },
                { label: "⏱️ Cuenta bancaria", value: "75.000 €" },
                { label: "🧾 Acciones empresa", value: "200.000 €" },
              ], total: "375.000 €" },
              { name: "Ana", x: 330, items: [
                { label: "🏠 Casa familiar", value: "100.000 €" },
                { label: "⏱️ Cuenta bancaria", value: "185.000 €" },
                { label: "🚗 Coche alta gama", value: "40.000 €" },
              ], total: "325.000 €" },
              { name: "Laura", x: 540, items: [
                { label: "🏠 Casa familiar", value: "100.000 €" },
                { label: "⏱️ Cuenta bancaria", value: "140.000 €" },
                { label: "🏝️ Vivienda playa", value: "223.000 €" },
              ], total: "463.000 €" },
            ].map((child, idx) => (
              <g key={child.name}>
                <rect x={child.x} y="220" width="240" height="140" rx="10" fill="#f8fafc" stroke={strokeColor} />
                <text x={child.x + 120} y="242" textAnchor="middle" className="text-sm font-semibold" fill={textColor}>{child.name}</text>
                {child.items.map((it, i) => (
                  <g key={it.label}>
                    <text x={child.x + 18} y={262 + i * 24} className="text-xs" fill={subText}>{it.label}</text>
                    <text x={child.x + 222} y={262 + i * 24} textAnchor="end" className="text-xs font-semibold" fill={accent}>{it.value}</text>
                  </g>
                ))}
                <line x1={child.x + 16} y1={335} x2={child.x + 224} y2={335} stroke={strokeColor} strokeWidth="1" />
                <text x={child.x + 18} y={350} className="text-xs font-medium" fill={subText}>Total:</text>
                <text x={child.x + 222} y={350} textAnchor="end" className="text-sm font-bold" fill={accent}>{child.total}</text>
              </g>
            ))}

            {/* Tronco Laura hacia sustitutos */}
            <line x1="660" y1="360" x2="660" y2="398" stroke={strokeColor} strokeWidth="1.5" shapeRendering="crispEdges" />
            <text x="660" y="410" textAnchor="middle" className="text-xs font-medium" fill={subText}>Sustitutos vulgares</text>
            <text x="660" y="424" textAnchor="middle" className="text-xs font-medium" fill={subText}>❌ (renuncia o fallecimiento)</text>
            <line x1="660" y1="440" x2="660" y2="460" stroke={strokeColor} strokeWidth="1.5" shapeRendering="crispEdges" />
            <line x1="660" y1="460" x2="600" y2="460" stroke={strokeColor} strokeWidth="1.5" shapeRendering="crispEdges" />
            <line x1="660" y1="460" x2="720" y2="460" stroke={strokeColor} strokeWidth="1.5" shapeRendering="crispEdges" />
            <line x1="600" y1="460" x2="600" y2="500" stroke={strokeColor} strokeWidth="1.5" shapeRendering="crispEdges" />
            <line x1="720" y1="460" x2="720" y2="500" stroke={strokeColor} strokeWidth="1.5" shapeRendering="crispEdges" />

            {/* Sustitutos */}
            <rect x="560" y="500" width="80" height="40" rx="8" fill="#f8fafc" stroke={strokeColor} />
            <text x="600" y="525" textAnchor="middle" className="text-xs" fill={textColor}>👧 Esther</text>
            <rect x="680" y="500" width="80" height="40" rx="8" fill="#f8fafc" stroke={strokeColor} />
            <text x="720" y="525" textAnchor="middle" className="text-xs" fill={textColor}>👦 Tomás</text>
          </svg>
        </div>
      </div>
    </div>
  );
}
