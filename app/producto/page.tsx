import { Card } from '@/components/ui/card';
import CTABanner from '@/components/HeroCTA';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { LuminaryButton } from '@/components/ui/LuminaryButton';
import {
  CheckCircle,
  Clock,
  Shield,
  BarChart3,
  Users,
  FileText,
  Calculator,
  Upload,
  Sparkles,
  Eye,
  FileCheck,
  Building2,
  Scale,
  TrendingUp,
  Zap,
  ArrowRight,
  Home as HomeIcon,
  CreditCard,
  PieChart,
  Target,
  Layers,
  GitBranch,
  Brain,
  Globe,
  UserCheck,
  FileSpreadsheet,
  Network,
  Settings,
  Smartphone,
  Share,
  User,
  Trash2,
  ArrowLeft,
  Package,
  HelpCircle,
  Play,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FamilySuccessionPlan } from '@/components/sections/FamilySuccessionPlan';
import InteractiveDemo from '@/components/sections/InteractiveDemo';
 

// Componente Hero específico para producto
function ProductHero() {
  return (
    <section className="relative isolate w-full min-h-screen flex flex-col justify-center items-center overflow-x-hidden text-white bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 pt-20 pb-12">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Grid pattern overlay - full width */}
      <div
        className="absolute inset-x-0 top-16 bottom-0 opacity-30 w-full"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          backgroundRepeat: 'repeat',
        }}
      ></div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 w-full flex flex-col items-center text-center">
        {/* Top Badge */}
        <AnimatedSection className="fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-medium mb-8">
            <Sparkles className="size-3" />
            <span>Software líder en gestión de herencias</span>
          </div>
        </AnimatedSection>

        {/* Title */}
        <AnimatedSection className="fade-in-up delay-100">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
              Potencia tu negocio
            </span>
            <br />
            <span className="text-white">con IA y el software líder</span>
            <br />
            <span className="text-white">en gestión de herencias</span>
          </h1>
        </AnimatedSection>

        {/* Subtitle */}
        <AnimatedSection className="fade-in-up delay-200">
          <p className="max-w-2xl text-lg md:text-xl text-slate-400 leading-relaxed mb-10">
            Transforma la complejidad legal en claridad digital. Automatiza
            procesos, reduce errores y ofrece un servicio excepcional a tus
            clientes.
          </p>
        </AnimatedSection>

        {/* Action Buttons */}
        <AnimatedSection className="fade-in-up delay-300">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
            <Link href="#demo">
              <button className="relative group overflow-hidden px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all shadow-lg shadow-blue-500/20">
                <span>Solicitar Demo</span>
                <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
            <Link href="#trial">
              <button className="px-8 py-4 rounded-xl font-semibold text-lg flex items-center gap-2 bg-white/5 border border-white/10 hover:bg-white/10 transition-all backdrop-blur-sm">
                <div className="size-6 rounded-full bg-white/10 flex items-center justify-center">
                  <Play className="size-3 fill-white ml-0.5" />
                </div>
                <span>Prueba Gratuita 14 días</span>
              </button>
            </Link>
          </div>
        </AnimatedSection>

        {/* Metrics/Stats */}
        <AnimatedSection className="fade-in-up delay-400 w-full max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 py-8 border-t border-white/5">
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">
                95%
              </span>
              <span className="text-sm text-slate-500 uppercase tracking-wider">
                Reducción de errores
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">
                6h
              </span>
              <span className="text-sm text-slate-500 uppercase tracking-wider">
                Ahorro por expediente
              </span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold text-white mb-1">
                500+
              </span>
              <span className="text-sm text-slate-500 uppercase tracking-wider">
                Profesionales confían
              </span>
            </div>
          </div>
        </AnimatedSection>

        {/* Scroll Indicator */}
        <AnimatedSection className="fade-in-up delay-500 mt-12">
          <div className="flex flex-col items-center gap-2">
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
              <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce"></div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Sección 1: Entiende el presente
function UnderstandPresent() {
  const assets = {
    realEstate: 330000,
    cash: 231055,
    securities: 0,
    vehicles: 0,
    companies: 0,
    digital: 0,
  };
  const debts = {
    mortgage: 31000,
    creditCard: 1090,
  };
  const totalAssets =
    assets.realEstate +
    assets.cash +
    assets.securities +
    assets.vehicles +
    assets.companies +
    assets.digital;
  const totalDebts = debts.mortgage + debts.creditCard;
  const netWorth = totalAssets - totalDebts;
  const formatCurrency = (n: number) => `${n.toLocaleString('es-ES')} €`;
  const formatNumber = (n: number) => n.toLocaleString('es-ES');
  const percent = (v: number, total: number) =>
    total > 0 ? Math.max(4, Math.round((v / total) * 100)) : 4;
  return (
    <section className="w-full py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-luminary-navy)' }}
          >
            Convierte la complejidad en claridad
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ulpiano te ofrece una visión 360º de documentos, herederos y
            patrimonio para entender el punto de partida.
          </p>
        </AnimatedSection>

        {/* Abstracciones de documentos */}
        <div
          id="abstracciones"
          className="grid lg:grid-cols-2 gap-12 items-center mb-16 scroll-mt-24"
        >
          <AnimatedSection className="fade-in-up">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Abstracciones de documentos
            </h3>
            <div className="flex items-center gap-2 text-blue-600 font-medium mb-6">
              <FileSpreadsheet className="size-5" />
              <span>Procesamiento inteligente</span>
            </div>
            <p className="text-lg text-muted-foreground">
              Digitaliza escrituras, testamentos y contratos en segundos.
              Ulpiano AI extrae automáticamente la información clave, reduciendo
              errores y acelerando tu trabajo.
            </p>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-200">
            <div className="bg-white rounded-xl border shadow-lg p-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-medium">Documento</span>
                  <button className="ml-1 text-xs bg-white/20 hover:bg-white/30 px-2 py-1 rounded flex items-center gap-2">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    <span>Escaneando...</span>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-blue-50 p-3 rounded border">
                  <div className="text-sm font-medium text-blue-800">
                    Testamento de Juan Barragán Díaz
                  </div>
                  <div className="text-xs text-blue-600 mt-1">
                    Documento procesado automáticamente
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded border">
                  <div className="text-sm font-medium text-gray-600 mb-2">
                    Tipo: Fideicomiso de Residuo
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Fideicomisario:</span>
                      <span className="text-sm font-medium">
                        Juan Barragán Domínguez
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Fiduciario:</span>
                      <span className="text-sm font-medium">
                        María Domínguez García
                      </span>
                    </div>
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-600">
                        Bienes del Fideicomiso:
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <HomeIcon className="size-4 text-blue-600" />
                            <span className="text-sm">Casa</span>
                          </div>
                          <span className="text-sm font-medium">315.000 €</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Building2 className="size-4 text-green-600" />
                            <span className="text-sm">Piso</span>
                          </div>
                          <span className="text-sm font-medium">260.000 €</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <CreditCard className="size-4 text-purple-600" />
                            <span className="text-sm">Dinero</span>
                          </div>
                          <span className="text-sm font-medium">180.000 €</span>
                        </div>
                        <div className="border-t pt-1 mt-2">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-gray-700">
                              Valor Fideicomiso:
                            </span>
                            <span className="text-sm font-bold text-blue-600">
                              755.000 €
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Acordeones visuales no interactivos */}
                <div className="rounded border bg-white">
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div className="text-sm font-semibold text-gray-700">
                      Heredero
                    </div>
                    <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                      Escaneando...
                    </button>
                  </div>
                </div>
                <div className="rounded border bg-white">
                  <div className="px-4 py-3 flex items-center justify-between">
                    <div className="text-sm font-semibold text-gray-700">
                      Legatarios
                    </div>
                    <button className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded flex items-center gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                      Escaneando...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Árbol familiar */}
        <AnimatedSection
          id="arbol-familiar"
          className="fade-in-up delay-300 scroll-mt-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Izquierda: contenedor uniforme como el resto de tarjetas */}
            <div className="bg-white rounded-xl border shadow-lg p-6">
              <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-6">
                <span className="font-medium">Árbol familiar</span>
              </div>
              <div className="relative">
                <div className="bg-gray-50 p-4 rounded border">
                  <FamilySuccessionPlan showTitle={false} appearance="light" />
                </div>
              </div>
            </div>

            {/* Derecha: texto alineado al patrón */}
            <div className="self-center">
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-luminary-navy)' }}
              >
                Árbol familiar
              </h3>
              <div className="flex items-center gap-2 text-green-600 font-medium mb-6">
                <Network className="size-5" />
                <span>Visualización clara y profesional</span>
              </div>
              <p className="text-lg text-muted-foreground">
                Un esquema claro: Familiares, legitimarios, herederos,
                atribuciones y títulos sucesorios. Ideal para explicar planes de
                sucesión de forma visual.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Inventario de bienes */}
        <AnimatedSection
          id="inventario-bienes"
          className="fade-in-up delay-400 scroll-mt-24"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ color: 'var(--color-luminary-navy)' }}
              >
                Creación de inventario de bienes
              </h3>
              <div className="flex items-center gap-2 text-purple-600 font-medium mb-6">
                <PieChart className="size-5" />
                <span>Inventario centralizado</span>
              </div>
              <p className="text-lg text-muted-foreground">
                Centraliza todo el patrimonio —inmuebles, cuentas, activos
                digitales y más— en un único inventario digital y visual. Una
                radiografía precisa para empezar a planificar.
              </p>
            </div>

            <div className="bg-white rounded-xl border shadow-lg p-6">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-6">
                <span className="font-medium">Inventario de bienes</span>
              </div>

              <div className="space-y-5">
                {/* Resumen */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-lg border bg-white p-4">
                    <div className="text-xs text-gray-500">Total Bienes</div>
                    <div className="mt-1 text-2xl font-bold text-gray-800">
                      {formatCurrency(totalAssets)}
                    </div>
                  </div>
                  <div className="rounded-lg border bg-white p-4">
                    <div className="text-xs text-gray-500">Total Deudas</div>
                    <div className="mt-1 text-2xl font-bold text-gray-800">
                      {formatCurrency(totalDebts)}
                    </div>
                  </div>
                  <div className="rounded-lg border bg-white p-4">
                    <div className="text-xs text-gray-500">Patrimonio Neto</div>
                    <div className="mt-1 text-2xl font-bold text-emerald-600">
                      {formatCurrency(netWorth)}
                    </div>
                    <div className="mt-2 h-1.5 bg-gray-200 rounded-full">
                      <div
                        className="h-1.5 bg-emerald-500 rounded-full"
                        style={{ width: `${percent(netWorth, totalAssets)}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Bienes vs Deudas (detalle corto) */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="rounded-lg border bg-white p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="grid size-8 place-items-center rounded-lg bg-blue-100 text-blue-700">
                        <HomeIcon className="size-4" />
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        Bienes
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="grid size-6 place-items-center rounded bg-blue-50 text-blue-600">
                          <HomeIcon className="size-3" />
                        </div>
                        <span className="flex-1">Valor inmueble</span>
                        <span className="font-medium text-gray-800">
                          {formatCurrency(assets.realEstate)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="grid size-6 place-items-center rounded bg-blue-50 text-blue-600">
                          <CreditCard className="size-3" />
                        </div>
                        <span className="flex-1">Cuenta bancaria</span>
                        <span className="font-medium text-gray-800">
                          {formatCurrency(assets.cash)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border bg-white p-4">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="grid size-8 place-items-center rounded-lg bg-rose-100 text-rose-700">
                        <CreditCard className="size-4" />
                      </div>
                      <div className="text-sm font-medium text-gray-700">
                        Deudas
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <div className="grid size-6 place-items-center rounded bg-rose-50 text-rose-600">
                          <Building2 className="size-3" />
                        </div>
                        <span className="flex-1">Préstamo hipotecario</span>
                        <span className="font-medium text-gray-800">
                          {formatCurrency(debts.mortgage)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="grid size-6 place-items-center rounded bg-rose-50 text-rose-600">
                          <CreditCard className="size-3" />
                        </div>
                        <span className="flex-1">Tarjeta de crédito</span>
                        <span className="font-medium text-gray-800">
                          {formatCurrency(debts.creditCard)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Categorías de bienes (granular) */}
                <div className="rounded-xl border bg-white p-4">
                  <div className="text-sm font-medium text-gray-700 mb-3">
                    Categorías de bienes
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {/* Inmuebles */}
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-700 min-w-0">
                          <HomeIcon className="size-4 text-blue-600" />
                          <span className="truncate">Inmuebles</span>
                        </div>
                        <div className="ml-3 flex items-baseline gap-1 shrink-0">
                          <div className="font-semibold leading-none">
                            {formatNumber(assets.realEstate)}
                          </div>
                          <span className="text-xs text-gray-500">€</span>
                        </div>
                      </div>
                      <div className="mt-2 h-1.5 bg-gray-200 rounded-full">
                        <div
                          className="h-1.5 bg-blue-500 rounded-full"
                          style={{
                            width: `${percent(
                              assets.realEstate,
                              totalAssets
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                    {/* Efectivo y cuentas */}
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-700 min-w-0">
                          <CreditCard className="size-4 text-indigo-600" />
                          <span className="truncate">Efectivo y cuentas</span>
                        </div>
                        <div className="ml-3 flex items-baseline gap-1 shrink-0">
                          <div className="font-semibold leading-none">
                            {formatNumber(assets.cash)}
                          </div>
                          <span className="text-xs text-gray-500">€</span>
                        </div>
                      </div>
                      <div className="mt-2 h-1.5 bg-gray-200 rounded-full">
                        <div
                          className="h-1.5 bg-indigo-500 rounded-full"
                          style={{
                            width: `${percent(assets.cash, totalAssets)}%`,
                          }}
                        />
                      </div>
                    </div>
                    {/* Valores */}
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-700 min-w-0">
                          <BarChart3 className="size-4 text-emerald-600" />
                          <span className="truncate">Valores</span>
                        </div>
                        <div className="ml-3 flex items-baseline gap-1 shrink-0">
                          <div className="font-semibold leading-none">
                            {assets.securities
                              ? formatNumber(assets.securities)
                              : '—'}
                          </div>
                          {assets.securities ? (
                            <span className="text-xs text-gray-500">€</span>
                          ) : null}
                        </div>
                      </div>
                      <div className="mt-2 h-1.5 bg-gray-200 rounded-full">
                        <div
                          className="h-1.5 bg-emerald-500 rounded-full"
                          style={{
                            width: `${percent(
                              assets.securities,
                              totalAssets
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                    {/* Vehículos */}
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-700 min-w-0">
                          <Package className="size-4 text-amber-600" />
                          <span className="truncate">Vehículos</span>
                        </div>
                        <div className="ml-3 flex items-baseline gap-1 shrink-0">
                          <div className="font-semibold leading-none">
                            {assets.vehicles
                              ? formatNumber(assets.vehicles)
                              : '—'}
                          </div>
                          {assets.vehicles ? (
                            <span className="text-xs text-gray-500">€</span>
                          ) : null}
                        </div>
                      </div>
                      <div className="mt-2 h-1.5 bg-gray-200 rounded-full">
                        <div
                          className="h-1.5 bg-amber-500 rounded-full"
                          style={{
                            width: `${percent(assets.vehicles, totalAssets)}%`,
                          }}
                        />
                      </div>
                    </div>
                    {/* Empresa/Participaciones */}
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-700 min-w-0">
                          <Building2 className="size-4 text-fuchsia-600" />
                          <span className="truncate">
                            Empresa/Participaciones
                          </span>
                        </div>
                        <div className="ml-3 flex items-baseline gap-1 shrink-0">
                          <div className="font-semibold leading-none">
                            {assets.companies
                              ? formatNumber(assets.companies)
                              : '—'}
                          </div>
                          {assets.companies ? (
                            <span className="text-xs text-gray-500">€</span>
                          ) : null}
                        </div>
                      </div>
                      <div className="mt-2 h-1.5 bg-gray-200 rounded-full">
                        <div
                          className="h-1.5 bg-fuchsia-500 rounded-full"
                          style={{
                            width: `${percent(assets.companies, totalAssets)}%`,
                          }}
                        />
                      </div>
                    </div>
                    {/* Activos digitales */}
                    <div className="rounded-lg border p-3">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2 text-gray-700 min-w-0">
                          <Sparkles className="size-4 text-purple-600" />
                          <span className="truncate">Activos digitales</span>
                        </div>
                        <div className="ml-3 flex items-baseline gap-1 shrink-0">
                          <div className="font-semibold leading-none">
                            {assets.digital
                              ? formatNumber(assets.digital)
                              : '—'}
                          </div>
                          {assets.digital ? (
                            <span className="text-xs text-gray-500">€</span>
                          ) : null}
                        </div>
                      </div>
                      <div className="mt-2 h-1.5 bg-gray-200 rounded-full">
                        <div
                          className="h-1.5 bg-purple-500 rounded-full"
                          style={{
                            width: `${percent(assets.digital, totalAssets)}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

// Sección 2: Planifica para mañana
function PlanForTomorrow() {
  return (
    <section
      id="escenarios"
      className="w-full py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 scroll-mt-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Simula, compara y elige la mejor estrategia sucesoria
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Escenarios claros, cálculos precisos y proyecciones dinámicas para
            tomar decisiones con confianza.
          </p>
        </AnimatedSection>
        <InteractiveDemo />
      </div>
    </section>
  );
}

// Sección 3: Implementa y gestiona
function ImplementAndManage() {
  return (
    <section className="w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-luminary-navy)' }}
          >
            De la planificación a la ejecución, con tecnología inteligente
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ulpiano simplifica el trabajo diario, genera documentos y te conecta
            con tus clientes.
          </p>
        </AnimatedSection>

        {/* Ulpiano AI */}
        <div
          id="ulpiano-ai"
          className="grid lg:grid-cols-2 gap-12 items-center mb-16 scroll-mt-24"
        >
          <AnimatedSection className="fade-in-up">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Ulpiano AI
            </h3>
            <div className="flex items-center gap-2 text-purple-600 font-medium mb-6">
              <Brain className="size-5" />
              <span>Análisis inteligente</span>
            </div>
            <p className="text-lg text-muted-foreground">
              Un copiloto experto en herencias y sucesiones. Analiza documentos,
              detecta inconsistencias y propone mejoras para que tomes
              decisiones con seguridad.
            </p>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-200">
            <div className="bg-white rounded-xl border shadow-lg p-6">
              <div className="bg-purple-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-6">
                <span className="font-medium">Ulpiano AI</span>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-red-50 p-3 rounded text-center">
                    <div className="text-red-600 mb-1">⚠️</div>
                    <div className="text-sm font-medium text-red-800">
                      Concerns
                    </div>
                    <div className="text-xs text-red-600">3 issues</div>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded text-center">
                    <div className="text-yellow-600 mb-1">💡</div>
                    <div className="text-sm font-medium text-yellow-800">
                      Opportunities
                    </div>
                    <div className="text-xs text-yellow-600">2 strategies</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded text-center">
                    <div className="text-blue-600 mb-1">📄</div>
                    <div className="text-sm font-medium text-blue-800">
                      Missing Docs
                    </div>
                    <div className="text-xs text-blue-600">4 documents</div>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded">
                  <div className="text-sm font-medium text-gray-800 mb-2">
                    Insight Details
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">
                        One minor child (Timmy Roy) lacks a named guardian
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">
                        Consider establishing a trust for minor beneficiaries
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <span className="text-gray-700">
                        Power of attorney document missing
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded">
                  <div className="text-sm font-medium text-blue-800 mb-2">
                    LUMINARY AI
                  </div>
                  <div className="flex items-center justify-between text-xs text-blue-600">
                    <span>Section 4.0.3 (page 6)</span>
                    <span>Result 1 of 3</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Creación de documentos */}
        <div
          id="creacion-documentos"
          className="grid lg:grid-cols-2 gap-12 items-center mb-16 scroll-mt-24"
        >
          <AnimatedSection className="fade-in-up order-2 lg:order-1">
            <div className="bg-white rounded-xl border shadow-lg p-6">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-6">
                <span className="font-medium">Creación de documentos</span>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded">
                  <div className="text-sm font-medium text-gray-800 mb-3">
                    Documentos Disponibles
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-3 rounded-xl border bg-purple-50">
                      <div className="flex items-center gap-3">
                        <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700">
                          <FileText className="size-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-700 flex items-center gap-2">
                            Testamento{' '}
                            <Sparkles className="size-4 text-purple-500" />
                          </div>
                          <div className="mt-1 h-2 w-40 rounded bg-purple-200/60" />
                          <div className="mt-1 h-2 w-28 rounded bg-purple-200/60" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-green-600 text-white text-xs rounded">
                          Generado
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl border bg-purple-50">
                      <div className="flex items-center gap-3">
                        <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700">
                          <FileText className="size-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-700 flex items-center gap-2">
                            Pacto Sucesorio{' '}
                            <Sparkles className="size-4 text-purple-500" />
                          </div>
                          <div className="mt-1 h-2 w-44 rounded bg-purple-200/60" />
                          <div className="mt-1 h-2 w-32 rounded bg-purple-200/60" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-blue-600 text-white text-xs rounded">
                          Generar
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl border bg-purple-50">
                      <div className="flex items-center gap-3">
                        <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700">
                          <FileText className="size-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-700 inline-flex items-baseline gap-1">
                            <span>
                              Escritura de Manifestación y Aceptación de
                              Herencia
                            </span>
                            <Sparkles className="size-4 text-purple-500 align-middle" />
                          </div>
                          <div className="mt-1 h-2 w-56 rounded bg-purple-200/60" />
                          <div className="mt-1 h-2 w-40 rounded bg-purple-200/60" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-amber-500 text-white text-xs rounded">
                          Borrador
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-xl border bg-purple-50">
                      <div className="flex items-center gap-3">
                        <div className="grid size-10 place-items-center rounded-lg bg-purple-100 text-purple-700">
                          <FileText className="size-5" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-purple-700 flex items-center gap-2">
                            Modelo 650{' '}
                            <Sparkles className="size-4 text-purple-500" />
                          </div>
                          <div className="mt-1 h-2 w-36 rounded bg-purple-200/60" />
                          <div className="mt-1 h-2 w-24 rounded bg-purple-200/60" />
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="px-3 py-1 bg-amber-500 text-white text-xs rounded">
                          Borrador
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded">
                  <div className="text-sm font-medium text-green-800 mb-2">
                    Último Documento Generado
                  </div>
                  <div className="text-xs text-green-700">
                    <div className="font-medium">
                      Testamento de María García
                    </div>
                    <div>Generado el 15/01/2025 - Listo para revisión</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up order-1 lg:order-2">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Creación de documentos
            </h3>
            <div className="flex items-center gap-2 text-blue-600 font-medium mb-6">
              <FileText className="size-5" />
              <span>Generación automática</span>
            </div>
            <p className="text-lg text-muted-foreground">
              Desde borradores de testamentos hasta escrituras de donación:
              genera en minutos modelos listos para revisión, personalización y
              validación jurídica.
            </p>
          </AnimatedSection>
        </div>

        {/* Portal del cliente */}
        <div
          id="portal-cliente"
          className="grid lg:grid-cols-2 gap-12 items-center scroll-mt-24"
        >
          <AnimatedSection className="fade-in-up">
            <h3
              className="text-2xl font-bold mb-4"
              style={{ color: 'var(--color-luminary-navy)' }}
            >
              Portal del cliente
            </h3>
            <div className="flex items-center gap-2 text-green-600 font-medium mb-6">
              <Smartphone className="size-5" />
              <span>Acceso seguro</span>
            </div>
            <p className="text-lg text-muted-foreground">
              Facilita la relación con clientes y herederos gracias a un espacio
              digital seguro donde consultar expedientes, firmar documentos y
              recibir actualizaciones.
            </p>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-200">
            <div className="bg-white rounded-xl border shadow-lg p-6">
              <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-6">
                <span className="font-medium">Portal del cliente</span>
              </div>

              <div className="flex gap-4">
                {/* Sidebar */}
                <div className="w-1/3 bg-gray-50 rounded-lg p-4">
                  <div className="space-y-4">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white font-bold text-sm">F</span>
                      </div>
                      <span className="font-semibold text-sm">
                        Fabrega Legal
                      </span>
                    </div>

                    {/* Expediente activo */}
                    <div className="bg-blue-100 p-3 rounded">
                      <div className="text-sm font-medium text-blue-800">
                        Expediente del Pau
                      </div>
                      <div className="text-xs text-blue-600">Tramitación</div>
                    </div>

                    {/* Navegación */}
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 bg-blue-100 rounded">
                        <HomeIcon className="size-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">
                          Inicio
                        </span>
                      </div>
                      <div className="flex items-center gap-2 p-2 text-gray-600">
                        <Share className="size-4" />
                        <span className="text-sm">Compartir</span>
                      </div>
                    </div>

                    {/* Secciones */}
                    <div className="space-y-2">
                      <div className="text-xs font-medium text-gray-500 uppercase">
                        Personas
                      </div>
                      <div className="flex items-center gap-2 p-1 text-gray-600">
                        <Users className="size-4" />
                        <span className="text-sm">General</span>
                      </div>
                      <div className="flex items-center gap-2 p-1 text-gray-600">
                        <Network className="size-4" />
                        <span className="text-sm">Árbol familiar</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs font-medium text-gray-500 uppercase">
                        Inventario
                      </div>
                      <div className="flex items-center gap-2 p-1 text-gray-600">
                        <Package className="size-4" />
                        <span className="text-sm">Muebles</span>
                      </div>
                      <div className="flex items-center gap-2 p-1 text-gray-600">
                        <Building2 className="size-4" />
                        <span className="text-sm">Inmuebles</span>
                      </div>
                      <div className="flex items-center gap-2 p-1 text-gray-600">
                        <CreditCard className="size-4" />
                        <span className="text-sm">Cuentas</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contenido principal */}
                <div className="w-2/3 space-y-4">
                  {/* Header */}
                  <div className="bg-gray-100 px-4 py-2 rounded text-xs text-gray-600">
                    Estás visualizando el expediente de Expediente del Pau
                    <div className="float-right w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">P</span>
                    </div>
                  </div>

                  {/* Bienvenida */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-gray-800">
                      Bienvenido, Familia Mateu!
                    </h3>
                    <p className="text-sm text-gray-600">
                      Gestiona una herencia sin testamento
                    </p>
                    <p className="text-xs text-gray-500">
                      Determina legalmente quiénes son los herederos legítimos,
                      reúne la documentación necesaria y lleva a cabo todo el
                      proceso de adjudicación y liquidación.
                    </p>
                    <div className="text-right">
                      <a href="#" className="text-blue-600 text-sm font-medium">
                        Descargar tu plan
                      </a>
                    </div>
                  </div>

                  {/* Pasos */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Users className="size-5 text-blue-600" />
                        <span className="text-sm font-medium">
                          PASO 1: Personas
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">
                        Determina herederos
                      </p>
                      <div className="flex items-center justify-end">
                        <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded flex items-center gap-1">
                          Empezar
                          <ArrowRight className="size-3" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <Package className="size-5 text-blue-600" />
                        <span className="text-sm font-medium">
                          PASO 2: Inventario
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">
                        Registra el activo y deudas
                      </p>
                      <div className="flex items-center justify-end">
                        <button className="bg-gray-300 text-gray-600 text-xs px-3 py-1 rounded flex items-center gap-1">
                          Continuar
                          <ArrowRight className="size-3" />
                        </button>
                      </div>
                    </div>

                    <div className="bg-white border rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="size-5 text-blue-600" />
                        <span className="text-sm font-medium">
                          PASO 3: Reparto
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 mb-3">
                        Atribuye bienes y derechos
                      </p>
                      <div className="flex items-center justify-end">
                        <button className="bg-gray-300 text-gray-600 text-xs px-3 py-1 rounded flex items-center gap-1">
                          Continuar
                          <ArrowRight className="size-3" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-center">
                    <a href="#" className="text-blue-600 text-sm">
                      + Añadir familiar
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// Sección de beneficios clave
function KeyBenefits() {
  const benefits = [
    {
      icon: <Clock className="size-6" />,
      metric: 'De 12h a 6h',
      description: 'por expediente',
    },
    {
      icon: <Shield className="size-6" />,
      metric: 'Seguridad jurídica',
      description: 'en cada paso',
    },
    {
      icon: <BarChart3 className="size-6" />,
      metric: 'Visualizaciones',
      description: 'y reporting para clientes',
    },
    {
      icon: <Users className="size-6" />,
      metric: 'Fidelización',
      description: 'y mejor experiencia para herederos',
    },
  ];

  return (
    <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-x-hidden py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados que transforman tu práctica
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Métricas reales que demuestran el impacto de Ulpiano en la gestión
            de herencias
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
            return (
              <AnimatedSection
                key={index}
                className={`fade-in-up ${delays[index]} h-full`}
              >
                <div className="bg-white/10 backdrop-blur-sm border border-blue-300 rounded-lg p-6 text-white text-center h-full flex flex-col">
                  <div className="flex justify-center mb-4">
                    <div className="grid size-12 place-items-center rounded-lg bg-white/20 text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold mb-2 text-white">
                    {benefit.metric}
                  </div>
                  <p className="text-white/80 flex-grow">
                    {benefit.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Sección de casos de uso
function UseCases() {
  const cases = [
    {
      icon: <Building2 className="size-8" />,
      title: 'Notarías',
      description: 'Digitaliza expedientes y reduce picos de trabajo',
      features: [
        'Gestión centralizada',
        'Reducción de errores',
        'Mejor organización',
      ],
    },
    {
      icon: <Scale className="size-8" />,
      title: 'Abogados',
      description: 'Ofrece tramitaciones más rápidas y con mejor comunicación',
      features: [
        'Automatización documental',
        'Comunicación mejorada',
        'Eficiencia operativa',
      ],
    },
    {
      icon: <Calculator className="size-8" />,
      title: 'Asesorías',
      description: 'Centraliza la gestión patrimonial en una sola herramienta',
      features: [
        'Gestión fiscal',
        'Planificación patrimonial',
        'Cumplimiento normativo',
      ],
    },
    {
      icon: <TrendingUp className="size-8" />,
      title: 'Asesores Financieros',
      description: 'Planifica con escenarios claros y valor añadido',
      features: [
        'Simulaciones fiscales',
        'Visualizaciones claras',
        'Valor añadido',
      ],
    },
  ];

  return (
    <section className="w-full py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold"
            style={{ color: 'var(--color-luminary-navy)' }}
          >
            Adaptado a cada profesional
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Soluciones específicas para las necesidades de cada tipo de
            profesional
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((useCase, index) => {
            const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
            return (
              <AnimatedSection
                key={index}
                className={`fade-in-up ${delays[index]}`}
              >
                <div className="p-6 h-full bg-white rounded-lg border shadow-sm">
                  <div className="flex justify-center mb-4">
                    <div className="grid size-16 place-items-center rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-950/40 dark:text-orange-300">
                      {useCase.icon}
                    </div>
                  </div>
                  <h3
                    className="text-xl font-semibold mb-3 text-center"
                    style={{ color: 'var(--color-luminary-navy)' }}
                  >
                    {useCase.title}
                  </h3>
                  <p className="text-muted-foreground text-center mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="size-4 text-green-600" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Componente: Plataforma integral
function PlatformOverview() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--color-luminary-navy)' }}
          >
            La plataforma integral que revoluciona la gestión de herencias con
            tecnología de vanguardia
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection className="fade-in-up">
            <div className="bg-white rounded-lg border shadow-sm p-6 h-full">
              <div className="flex justify-center mb-4">
                <div className="grid size-16 place-items-center rounded-lg bg-blue-100 text-blue-700">
                  <Scale className="size-8" />
                </div>
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-center"
                style={{ color: 'var(--color-luminary-navy)' }}
              >
                Centralización completa
              </h3>
              <p className="text-muted-foreground text-center">
                Centraliza todos los procesos de sucesiones en un solo entorno
                digital.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-100">
            <div className="bg-white rounded-lg border shadow-sm p-6 h-full">
              <div className="flex justify-center mb-4">
                <div className="grid size-16 place-items-center rounded-lg bg-blue-100 text-blue-700">
                  <Zap className="size-8" />
                </div>
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-center"
                style={{ color: 'var(--color-luminary-navy)' }}
              >
                Reducción de errores
              </h3>
              <p className="text-muted-foreground text-center">
                Reduce tiempos y errores con inteligencia documental y flujos
                automatizados.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-200">
            <div className="bg-white rounded-lg border shadow-sm p-6 h-full">
              <div className="flex justify-center mb-4">
                <div className="grid size-16 place-items-center rounded-lg bg-blue-100 text-blue-700">
                  <Shield className="size-8" />
                </div>
              </div>
              <h3
                className="text-xl font-semibold mb-3 text-center"
                style={{ color: 'var(--color-luminary-navy)' }}
              >
                Seguridad jurídica
              </h3>
              <p className="text-muted-foreground text-center">
                Gana seguridad jurídica, eficiencia y mejor comunicación con
                clientes y herederos.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

// Componente: Ahorra tiempo, involucra clientes
function TimeSavingFeatures() {
  return (
    <section className="relative isolate w-screen -ml-[50vw] left-1/2 right-1/2 overflow-x-hidden py-16 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <div className="relative mx-auto max-w-[1400px] px-3 sm:px-5 lg:px-6">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Ahorra tiempo, involucra clientes, entrega más
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Las visualizaciones de planificación sucesoria de Ulpiano ayudan a
            los asesores a simplificar conversaciones sobre estructuras de
            planificación sucesoria sofisticadas.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatedSection className="fade-in-up">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-blue-300 p-6 h-full">
              <div className="flex justify-center mb-4">
                <div className="grid size-16 place-items-center rounded-lg bg-white/20 text-white">
                  <Target className="size-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-white">
                Ver el panorama completo
              </h3>
              <p className="text-white/80 text-center">
                Da a los clientes una visión clara del impacto de su plan
                sucesorio. Compara cambios hipotéticos en la planificación
                sucesoria con unos clics. Muestra exactamente quién recibe qué y
                cuándo.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-100">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-blue-300 p-6 h-full">
              <div className="flex justify-center mb-4">
                <div className="grid size-16 place-items-center rounded-lg bg-white/20 text-white">
                  <Layers className="size-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-white">
                Simplifica la complejidad
              </h3>
              <p className="text-white/80 text-center">
                Comprende rápidamente la estructura y estrategia detrás de
                cualquier fideicomiso con diagramas de una sola página y vistas
                de resumen. Claridad que antes tomaba horas, ahora toma minutos.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="fade-in-up delay-200">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-blue-300 p-6 h-full">
              <div className="flex justify-center mb-4">
                <div className="grid size-16 place-items-center rounded-lg bg-white/20 text-white">
                  <Target className="size-8" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-white">
                Eleva tus materiales
              </h3>
              <p className="text-white/80 text-center">
                Haz que las conversaciones de estrategia sean simples, sin
                perder profundidad. Construimos el generador de presentaciones
                de Ulpiano para que personalices materiales para cada cliente
                con solo unos clics.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default function Home({
  params,
}: {
  params?: Promise<Record<string, string | string[]>>;
}) {
  return (
    <>
      {/* Hero específico para producto - full width */}
      <ProductHero />

      {/* Plataforma integral - full width */}
      <PlatformOverview />

      {/* Beneficios clave - full width */}
      <KeyBenefits />

      {/* Sección 1: Entiende el presente - full width */}
      <UnderstandPresent />

      {/* Sección 2: Planifica para mañana - full width */}
      <PlanForTomorrow />

      {/* Sección 3: Implementa y gestiona - full width */}
      <ImplementAndManage />

      {/* Ahorra tiempo, involucra clientes - full width */}
      <TimeSavingFeatures />

      {/* Casos de uso - full width */}
      <UseCases />

      {/* CTA Banner Final - full width */}
      <CTABanner
        title="Empieza a usar la herramienta del mañana en la gestión de herencias"
        primaryLabel="Empieza tu prueba de 14 días"
        secondaryLabel="Solicita una demo"
        primaryHref="/demo"
        secondaryHref="/contact"
      />
    </>
  );
}
