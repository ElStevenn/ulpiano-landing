'use client';

import { Fragment } from 'react';
import { featureRows } from '@/data/planFeatures';
import { cn } from '@/lib/utils';

function render(value: boolean | string | null | undefined) {
  if (value === true) return '✓';
  if (value === false || value == null) return '';
  return String(value);
}

export default function PlanFeaturesByPlan({
  className,
}: {
  className?: string;
}) {
  return (
    <section className={cn('w-full bg-white py-10', className)}>
      <div className="mx-auto max-w-[1200px] px-3 sm:px-5 lg:px-6">
        <h2 className="text-2xl sm:text-3xl font-semibold text-[#0f172a] text-center">
          Listado de funcionalidades por plan
        </h2>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full min-w-[780px] text-left">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-sm font-semibold">
                  Funcionalidad
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-center">
                  starter
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-center">
                  Esencial
                </th>
                <th className="px-4 py-3 text-sm font-semibold text-center">
                  Pro
                </th>
              </tr>
            </thead>
            <tbody>
              {featureRows.map((row, idx) => (
                <Fragment key={`${row.section ?? 'row'}-${idx}`}>
                  {row.section &&
                    (idx === 0 ||
                      featureRows[idx - 1]?.section !== row.section) && (
                      <tr className="bg-gray-100">
                        <td
                          colSpan={4}
                          className="px-4 py-2 text-xs font-semibold uppercase tracking-wide text-neutral-600"
                        >
                          {row.section}
                        </td>
                      </tr>
                    )}

                  <tr className="border-t border-slate-200/70">
                    <td className="px-4 py-3 text-sm font-medium text-[#0f172a]">
                      {row.name}
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-slate-800">
                      {render(row.starter)}
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-slate-800">
                      {render(row.essential)}
                    </td>
                    <td className="px-4 py-3 text-center text-sm text-slate-800">
                      {render(row.pro)}
                    </td>
                  </tr>
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

