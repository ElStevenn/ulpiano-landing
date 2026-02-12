'use client';

import { useMemo, useRef, useState } from "react";

type Option = { value: string; label: string };

type LeadPayload = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  companyName: string;
  companyType: string;
  referral?: string;
};

type FormErrors = Partial<Record<keyof LeadPayload, string>>;

const DEFAULT_COMPANY_TYPES: Option[] = [
  { value: "ria", label: "RIA" },
  { value: "wm", label: "Wealth Management" },
  { value: "bank", label: "Bank/Trust" },
  { value: "law", label: "Law Firm" },
  { value: "acct", label: "Accounting/Tax" },
  { value: "other", label: "Other" },
];

const DEFAULT_STATES: Option[] = [
  { value: "CA", label: "California" },
  { value: "NY", label: "New York" },
  { value: "TX", label: "Texas" },
  { value: "FL", label: "Florida" },
  { value: "IL", label: "Illinois" },
];

export default function LeadCaptureHeroForm({
  privacyHref,
  termsHref,
  title = "Transforma la gestión de herencias en tu firma",
  subtitle = "Descubre cómo ulpiano.es impulsa tu negocio y mejora la satisfacción de tus clientes.",
  successRedirect,
  hideForm = false,
}: {
  privacyHref: string;
  termsHref: string;
  title?: string;
  subtitle?: string;
  successRedirect?: string;
  hideForm?: boolean;
}) {
  const [values, setValues] = useState<LeadPayload>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    companyName: "",
    companyType: "",
    referral: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bootTs = useRef<number>(Date.now());
  const [honey, setHoney] = useState("");

  const emailRegex = useMemo(() => /^(?:[a-z0-9_+.-]+)@(?:[a-z0-9.-]+)\.(?:[a-z]{2,})$/i, []);
  const phoneRegex = useMemo(() => /^[+\d][\d\s\-()]{6,}$/i, []);

  function validateField(name: keyof LeadPayload, val: string): string | undefined {
    switch (name) {
      case "firstName":
      case "lastName":
      case "companyName":
        return val.trim().length ? undefined : "Required";
      case "email":
        return emailRegex.test(val) ? undefined : "Invalid email";
      case "phone": {
        if (!phoneRegex.test(val)) return "Invalid phone";
        const digits = (val.match(/\d/g) || []).length;
        return digits >= 7 ? undefined : "Invalid phone";
      }
      case "state":
      case "companyType":
        return val ? undefined : "Required";
      default:
        return undefined;
    }
  }

  function validateAll(v: LeadPayload): FormErrors {
    const errs: FormErrors = {};
    (Object.keys(v) as Array<keyof LeadPayload>).forEach((k) => {
      const msg = validateField(k, String(v[k] ?? ""));
      if (msg) errs[k] = msg;
    });
    return errs;
  }

  const setVal = (name: keyof LeadPayload) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setValues((prev) => ({ ...prev, [name]: e.target.value }));
  };
  const blurVal = (name: keyof LeadPayload) => (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const msg = validateField(name, e.target.value);
    setErrors((er) => ({ ...er, [name]: msg }));
  };

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (honey.trim().length > 0) {
      setError("Spam detected");
      setLoading(false);
      return;
    }
    if (Date.now() - bootTs.current < 1000) {
      setError("Please wait a moment before submitting.");
      setLoading(false);
      return;
    }

    const errs = validateAll(values);
    setErrors(errs);
    if (Object.keys(errs).length) {
      setLoading(false);
      return;
    }

    const payload = {
      name: `${values.firstName} ${values.lastName}`.trim(),
      email: values.email,
      company: values.companyName,
      size: values.companyType,
      message: [values.referral, values.phone ? `phone: ${values.phone}` : undefined, values.state ? `state: ${values.state}` : undefined]
        .filter(Boolean)
        .join(" | "),
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Error al enviar el formulario");
      if (successRedirect) window.location.href = successRedirect;
    } catch (err) {
      const message = err instanceof Error ? err.message : "Error inesperado";
      setError(message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative py-16 lg:py-24">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h1 className="font-serif text-5xl lg:text-6xl font-bold leading-tight text-[#1D1D1F]">{title}</h1>
            <p className="font-sans text-lg text-neutral-600 mt-6">{subtitle}</p>
          </div>
          <div>
            {hideForm ? (
              <div className="bg-white p-6 lg:p-8 rounded-[16px] shadow-sm border"></div>
            ) : (
              <form role="form" noValidate onSubmit={onSubmit} className="bg-white p-6 lg:p-8 rounded-[16px] shadow-sm border">
                {/* Honeypot */}
                <div className="hidden">
                  <label htmlFor="website">Website</label>
                  <input id="website" name="website" value={honey} onChange={(e) => setHoney(e.target.value)} />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <FieldWrapper id="firstName" label="First Name*" error={errors.firstName}>
                    <input id="firstName" name="firstName" value={values.firstName} onChange={setVal("firstName")} onBlur={blurVal("firstName")} className="w-full rounded-[16px] border border-[var(--color-ulpiano-border)] bg-white px-4 py-3 text-base outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-Primary-400)]" />
                  </FieldWrapper>
                  <FieldWrapper id="lastName" label="Last Name*" error={errors.lastName}>
                    <input id="lastName" name="lastName" value={values.lastName} onChange={setVal("lastName")} onBlur={blurVal("lastName")} className="w-full rounded-[16px] border border-[var(--color-ulpiano-border)] bg-white px-4 py-3 text-base outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-Primary-400)]" />
                  </FieldWrapper>
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <FieldWrapper id="email" label="Email*" error={errors.email}>
                    <input id="email" name="email" type="email" value={values.email} onChange={setVal("email")} onBlur={blurVal("email")} className="w-full rounded-[16px] border border-[var(--color-ulpiano-border)] bg-white px-4 py-3 text-base outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-Primary-400)]" />
                  </FieldWrapper>
                  <FieldWrapper id="phone" label="Phone*" error={errors.phone}>
                    <input id="phone" name="phone" value={values.phone} onChange={setVal("phone")} onBlur={blurVal("phone")} className="w-full rounded-[16px] border border-[var(--color-ulpiano-border)] bg-white px-4 py-3 text-base outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-Primary-400)]" />
                  </FieldWrapper>
                </div>

                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <FieldWrapper id="state" label="State*" error={errors.state}>
                    <select id="state" name="state" value={values.state} onChange={setVal("state")} onBlur={blurVal("state")} className="w-full appearance-none rounded-[16px] border border-[var(--color-ulpiano-border)] bg-white px-4 py-3 text-base outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-Primary-400)]">
                      <option value="">Select your state*</option>
                      {DEFAULT_STATES.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </FieldWrapper>
                  <FieldWrapper id="companyName" label="Company Name*" error={errors.companyName}>
                    <input id="companyName" name="companyName" value={values.companyName} onChange={setVal("companyName")} onBlur={blurVal("companyName")} className="w-full rounded-[16px] border border-[var(--color-ulpiano-border)] bg-white px-4 py-3 text-base outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-Primary-400)]" />
                  </FieldWrapper>
                </div>

                <div className="mt-3">
                  <FieldWrapper id="companyType" label="Company Type*" error={errors.companyType}>
                    <select id="companyType" name="companyType" value={values.companyType} onChange={setVal("companyType")} onBlur={blurVal("companyType")} className="w-full appearance-none rounded-[16px] border border-[var(--color-ulpiano-border)] bg-white px-4 py-3 text-base outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-Primary-400)]">
                      <option value="">Select company type*</option>
                      {DEFAULT_COMPANY_TYPES.map((opt) => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </FieldWrapper>
                </div>

                <div className="mt-3">
                  <FieldWrapper id="referral" label="How did you hear about us? (optional)">
                    <textarea id="referral" name="referral" rows={4} value={values.referral} onChange={setVal("referral")} onBlur={() => undefined} className="w-full rounded-[16px] border border-[var(--color-ulpiano-border)] bg-white px-4 py-3 text-base outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-Primary-400)]" />
                  </FieldWrapper>
                </div>

                {error && (
                  <p role="alert" className="mt-3 text-[13px] text-[var(--color-Error-400)]">{error}</p>
                )}

                <p className="mt-4 text-xs text-neutral-600">
                  By submitting, you agree to our {" "}
                  <a className="underline outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-Primary-400)]" style={{ outlineOffset: 2 }} href={privacyHref} target="_blank" rel="noopener">
                    Privacy Policy
                  </a>
                  {" "}and{" "}
                  <a className="underline outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-Primary-400)]" style={{ outlineOffset: 2 }} href={termsHref} target="_blank" rel="noopener">
                    Terms of Use
                  </a>
                  .
                </p>

                <button type="submit" disabled={loading} className="mt-4 inline-flex h-12 items-center justify-center rounded-full px-6 text-white font-medium bg-[var(--color-luminary-coral)] hover:bg-[var(--color-luminary-coral)]/90 disabled:opacity-60">
                  {loading ? "Enviando…" : "Solicitar una Demo"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function FieldWrapper({ id, label, required, children, error }: { id: string; label: string; required?: boolean; children: React.ReactNode; error?: string }) {
  const describedBy = error ? `${id}-error` : undefined;
  return (
    <div>
      <label htmlFor={id} className="mb-1 block text-sm font-medium text-[#1D1D1F]">
        {label} {required ? "*" : null}
      </label>
      <div aria-describedby={describedBy}>{children}</div>
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-[13px] text-[var(--color-Error-400)]">{error}</p>
      )}
    </div>
  );
}


