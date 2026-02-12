'use client';

import { cn } from "@/lib/utils";

type Props = {
  isAnnual: boolean;
  onToggle: () => void;
  discountPercent?: number;
};

export default function BillingToggle({
  isAnnual,
  onToggle,
  discountPercent = 20,
}: Props) {
  return (
    <div className="flex items-center justify-start gap-3 py-2">
      <span className={cn("text-sm font-medium", !isAnnual ? "text-[#0f172a]" : "text-gray-500")}>Facturación mensual</span>
      <button
        aria-label="Cambiar a facturación anual o mensual"
        onClick={onToggle}
        className={cn(
          "relative inline-flex h-7 w-12 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",
          isAnnual ? "bg-blue-600" : "bg-gray-300"
        )}
      >
        <span
          className={cn(
            "inline-block h-5 w-5 transform rounded-full bg-white shadow transition-transform",
            isAnnual ? "translate-x-6" : "translate-x-1"
          )}
        />
      </button>
      <span
        className={cn(
          "text-sm font-medium",
          isAnnual ? "text-[#0f172a]" : "text-gray-500"
        )}
      >
        Facturación anual{" "}
        <span className="ml-1 text-xs text-emerald-500 font-semibold">
          -{discountPercent}%
        </span>
      </span>
    </div>
  );
}


