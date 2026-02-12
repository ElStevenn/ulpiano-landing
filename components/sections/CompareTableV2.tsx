'use client';

import { useEffect, useMemo, useState } from 'react';
import type { PricingTable, FeatureRow } from '@/pricing.config';
import { pricingConfig } from '@/pricing.config';
import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

function renderCell(
  value: boolean | string | null | undefined,
  isBasicoColumn: boolean = false
) {
  if (value === true) {
    return (
      <div className="flex items-center justify-center">
        <div
          className={cn(
            'w-5 h-5 rounded-full flex items-center justify-center',
            isBasicoColumn ? 'bg-indigo-100' : 'bg-emerald-50'
          )}
        >
          <Check
            className={cn(
              'w-3.5 h-3.5',
              isBasicoColumn ? 'text-indigo-600' : 'text-emerald-600'
            )}
            strokeWidth={3}
          />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex items-center justify-center opacity-50">
        <div className="w-4 h-4 rounded-full bg-slate-100/70 flex items-center justify-center">
          <div className="w-2.5 h-0.5 bg-slate-400/70 rounded-full" />
        </div>
      </div>
    );
  }
  if (typeof value === 'string') {
    return (
      <span
        className={cn(
          'text-sm font-bold',
          isBasicoColumn ? 'text-indigo-700' : 'text-slate-900'
        )}
      >
        {value}
      </span>
    );
  }
  return (
    <div className="flex items-center justify-center opacity-50">
      <div className="w-4 h-4 rounded-full bg-slate-100/70 flex items-center justify-center">
        <div className="w-2.5 h-0.5 bg-slate-400/70 rounded-full" />
      </div>
    </div>
  );
}

export default function CompareTableV2() {
  const [rows, setRows] = useState<PricingTable>([]);

  useEffect(() => {
    fetch(pricingConfig.featuresJsonPath)
      .then((r) => r.json())
      .then((data: PricingTable) => setRows(data))
      .catch(() => setRows([]));
  }, []);

  const filteredRows = useMemo(() => {
    const items: FeatureRow[] = [];
    let currentSection: string | null = null;

    for (const row of rows) {
      const name = (row.featureName || '').trim();
      if (!name) continue;

      if (row.section) {
        currentSection = row.section;
        items.push({
          ...row,
          featureName: row.section,
          freemium: null,
          basico: null,
          esencial: null,
        });
        continue;
      }

      items.push({
        ...row,
        section: currentSection || null,
      });
    }
    return items;
  }, [rows]);

  // Agrupar por secciones para mejor renderizado
  const groupedRows = useMemo(() => {
    const groups: { section: string | null; rows: FeatureRow[] }[] = [];
    let currentGroup: { section: string | null; rows: FeatureRow[] } | null =
      null;

    filteredRows.forEach((row) => {
      const isCategory =
        row.section &&
        [row.freemium, row.basico, row.esencial].every(
          (v) => v === null || v === undefined
        );

      if (isCategory) {
        if (currentGroup) {
          groups.push(currentGroup);
        }
        currentGroup = {
          section: row.featureName || null,
          rows: [],
        };
      } else if (currentGroup) {
        currentGroup.rows.push(row);
      }
    });

    if (currentGroup) {
      groups.push(currentGroup);
    }

    return groups;
  }, [filteredRows]);

  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        {/* Contenedor principal premium */}
        <div className="bg-white rounded-xl shadow-[0_1px_2px_rgba(0,0,0,0.03),0_2px_8px_rgba(0,0,0,0.02)] border border-slate-200/80 overflow-hidden">
          {/* Header refinado */}
          <div className="bg-slate-50/50 border-b border-slate-200/80">
            <div className="grid grid-cols-4 gap-0">
              <div className="px-6 py-4">
                <h3 className="text-xs font-extrabold text-slate-900 uppercase tracking-[0.08em]">
                  Funcionalidad
                </h3>
              </div>
              <div className="px-6 py-4 text-center border-l border-slate-200/70">
                <h3 className="text-xs font-bold text-slate-600 uppercase tracking-[0.08em]">
                  Freemium
                </h3>
              </div>
              <div className="px-6 py-4 text-center border-l border-indigo-200/50 bg-indigo-50/30 relative">
                <h3 className="text-xs font-extrabold text-indigo-700 uppercase tracking-[0.08em]">
                  Básico
                </h3>
                <p className="text-sm text-indigo-700 mt-1.5 font-bold">
                  99 €/mes
                </p>
              </div>
              <div className="px-6 py-4 text-center border-l border-slate-200/70">
                <h3 className="text-xs font-bold text-slate-600 uppercase tracking-[0.08em]">
                  Esencial
                </h3>
                <p className="text-sm text-slate-500 mt-1.5 font-semibold">
                  149 €/mes
                </p>
              </div>
            </div>
          </div>

          {/* Cuerpo de la tabla compacto */}
          <div>
            {groupedRows.map((group, groupIdx) => (
              <div
                key={`group-${groupIdx}`}
                className={cn(
                  'bg-white',
                  groupIdx > 0 && 'border-t border-slate-100'
                )}
              >
                {/* Encabezado de categoría refinado - más carácter de bloque */}
                {group.section && (
                  <div className="bg-slate-100/60 border-y border-slate-200/60 px-6 py-3.5">
                    <h4 className="text-[11px] font-bold text-slate-800 uppercase tracking-[0.15em] leading-tight">
                      {group.section}
                    </h4>
                  </div>
                )}

                {/* Filas de funcionalidades compactas */}
                <div>
                  {group.rows.map((row, rowIdx) => {
                    // Identificar filas clave (las que tienen valor en Básico)
                    const hasBasicoValue =
                      row.basico === true ||
                      (typeof row.basico === 'string' && row.basico !== '');
                    const isKeyRow = hasBasicoValue;

                    return (
                      <div
                        key={`row-${groupIdx}-${rowIdx}`}
                        className={cn(
                          'grid grid-cols-4 gap-0 transition-colors duration-100',
                          isKeyRow
                            ? 'hover:bg-indigo-50/15'
                            : 'hover:bg-slate-50/20',
                          rowIdx < group.rows.length - 1 &&
                            'border-b border-slate-100/60'
                        )}
                      >
                        {/* Nombre de funcionalidad */}
                        <div className="px-6 py-3 flex items-center">
                          <span
                            className={cn(
                              'text-sm leading-relaxed',
                              isKeyRow
                                ? 'font-semibold text-slate-900'
                                : 'font-normal text-slate-700'
                            )}
                          >
                            {row.featureName}
                          </span>
                        </div>

                        {/* Columna Freemium */}
                        <div className="px-6 py-3 flex items-center justify-center border-l border-slate-200/50 bg-white">
                          {renderCell(row.freemium, false)}
                        </div>

                        {/* Columna Básico - destacada con capas sutiles */}
                        <div className="px-6 py-3 flex items-center justify-center border-l border-indigo-200/50 bg-indigo-50/25">
                          {renderCell(row.basico, true)}
                        </div>

                        {/* Columna Esencial */}
                        <div className="px-6 py-3 flex items-center justify-center border-l border-slate-200/50 bg-white">
                          {renderCell(row.esencial, false)}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
