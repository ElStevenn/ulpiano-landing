'use client';

import { useState, useEffect } from 'react';
import { GitBranch, Calculator, TrendingUp, ChevronRight } from 'lucide-react';

export default function InteractiveDemo() {
  const [activeTab, setActiveTab] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isChanging, setIsChanging] = useState(false);

  // Escucha eventos personalizados para activar tabs desde fuera del componente
  useEffect(() => {
    const handleTabActivation = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (!customEvent.detail) return;

      const tabName = customEvent.detail;
      let tabIndex = 0;

      if (tabName === 'calculador') {
        tabIndex = 1;
      } else if (tabName === 'proyecciones') {
        tabIndex = 2;
      } else if (tabName === 'escenarios') {
        tabIndex = 0;
      }

      if (tabIndex !== activeTab) {
        setIsChanging(true);
        setIsAnimating(true);
        setTimeout(() => {
          setActiveTab(tabIndex);
          setTimeout(() => {
            setIsChanging(false);
            setIsAnimating(false);
          }, 50);
        }, 400);
      }
    };

    window.addEventListener('activateTab', handleTabActivation);

    return () => {
      window.removeEventListener('activateTab', handleTabActivation);
    };
  }, [activeTab]);

  const tabs = [
    {
      title: '1 Creación de escenarios',
      subtitle: 'Comparación de alternativas',
      description:
        'Diseña distintas alternativas (pactos sucesorios, donaciones, testamentos) y visualiza sus efectos de manera inmediata.',
      icon: GitBranch,
      demo: (
        <div className="bg-white p-6">
          <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-6">
            <span className="font-medium">Creación de escenarios</span>
          </div>
          <div className="space-y-4">
            <div className="space-y-3">
              {[
                {
                  label: 'Escenario 1',
                  a: 16,
                  b: 0,
                  colorA: 'bg-red-500',
                  colorB: '',
                  total: '€77.49M',
                },
                {
                  label: 'Escenario 2',
                  a: 4,
                  b: 15,
                  colorA: 'bg-blue-400',
                  colorB: 'bg-red-500',
                  total: '€76.26M',
                },
                {
                  label: 'Escenario 3',
                  a: 8,
                  b: 14,
                  colorA: 'bg-blue-400',
                  colorB: 'bg-red-500',
                  total: '€72.57M',
                },
                {
                  label: 'Escenario 4',
                  a: 12,
                  b: 10,
                  colorA: 'bg-blue-400',
                  colorB: 'bg-red-500',
                  total: '€65.55M',
                },
              ].map((row, i) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between"
                >
                  <span className="text-sm font-medium">{row.label}</span>
                  <div className="flex items-center gap-2">
                    <div className="w-28 h-3 bg-gray-200 rounded relative overflow-hidden">
                      <div
                        className={`absolute left-0 top-0 h-3 ${row.colorA} rounded`}
                        style={{ width: `${row.a * 4}px` }}
                      />
                      {row.b > 0 && (
                        <div
                          className={`absolute left-${row.a} top-0 h-3 ${row.colorB} rounded`}
                          style={{
                            left: `${row.a * 4 + 4}px`,
                            width: `${row.b * 4}px`,
                          }}
                        />
                      )}
                    </div>
                    <span className="text-sm font-bold">{row.total}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-blue-50 p-4 rounded">
              <div className="text-sm font-medium text-blue-800 mb-3">
                Benefits of gifting
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <div className="font-medium">Escenario 2</div>
                  <div className="text-green-600">↑ €2M</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Escenario 3</div>
                  <div className="text-green-600">↑ €6M</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Escenario 4</div>
                  <div className="text-green-600">↑ €9M</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '2 Calculador',
      subtitle: 'Cálculos automáticos',
      description:
        'Calcula automáticamente el impacto fiscal y patrimonial de cada escenario, adaptado a la normativa española y autonómica.',
      icon: Calculator,
      demo: (
        <div className="bg-white p-6">
          <div className="bg-blue-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-6">
            <span className="font-medium">Calculador</span>
          </div>
          <div className="space-y-4">
            <div className="flex gap-2 text-sm">
              <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded">
                After Elizabeth&apos;s Death (2055)
              </button>
              <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
                Waterfall A
              </button>
              <button className="px-3 py-1 bg-gray-100 text-gray-600 rounded">
                Waterfall B
              </button>
            </div>
            <div className="space-y-3">
              <div>
                <div className="text-sm font-medium text-gray-600 mb-1">
                  Waterfall A
                </div>
                <div className="flex h-6 bg-gray-200 rounded">
                  <div className="w-3/4 h-6 bg-teal-400 rounded-l"></div>
                  <div className="w-1/4 h-6 bg-red-500 rounded-r"></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>€166.3M</span>
                  <span>€161.8M</span>
                </div>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-600 mb-1">
                  Waterfall B
                </div>
                <div className="flex h-6 bg-gray-200 rounded">
                  <div className="w-4/5 h-6 bg-teal-400 rounded-l"></div>
                  <div className="w-1/5 h-6 bg-red-500 rounded-r"></div>
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span>€178.0M</span>
                  <span>€154.1M</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-3 rounded">
              <div className="text-sm font-medium text-blue-800 mb-2">
                Hypothetical waterfall benefits
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="text-center">
                  <div className="font-medium">Estate tax</div>
                  <div className="text-red-600">↓ €7.8M</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Total wealth</div>
                  <div className="text-green-600">↑ €11.8M</div>
                </div>
                <div className="text-center">
                  <div className="font-medium">Charitable</div>
                  <div className="text-green-600">↑ €4.2M</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '3 Proyecciones',
      subtitle: 'Análisis predictivo',
      description:
        'Anticipa el futuro con gráficos interactivos que muestran cómo evolucionará el patrimonio y cómo se distribuirán los bienes en distintos supuestos.',
      icon: TrendingUp,
      demo: (
        <div className="bg-white p-6">
          <div className="bg-orange-600 text-white px-4 py-2 rounded-t-lg -mt-6 -mx-6 mb-6">
            <span className="font-medium">Proyecciones</span>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Patrimonio Actual
                </div>
                <div className="text-lg font-bold text-gray-800">€5.2M</div>
                <div className="text-xs text-gray-500">Valor total</div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <div className="text-sm font-medium text-gray-600 mb-2">
                  Proyección 2030
                </div>
                <div className="text-lg font-bold text-gray-800">€7.8M</div>
                <div className="text-xs text-green-600">+50% crecimiento</div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded">
              <div className="text-sm font-medium text-gray-800 mb-3">
                Evolución Patrimonial
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs">2025</span>
                  <div className="w-16 h-2 bg-gray-200 rounded">
                    <div className="w-8 h-2 bg-blue-500 rounded"></div>
                  </div>
                  <span className="text-xs">€5.2M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">2027</span>
                  <div className="w-16 h-2 bg-gray-200 rounded">
                    <div className="w-10 h-2 bg-blue-500 rounded"></div>
                  </div>
                  <span className="text-xs">€6.1M</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs">2030</span>
                  <div className="w-16 h-2 bg-gray-200 rounded">
                    <div className="w-16 h-2 bg-green-500 rounded"></div>
                  </div>
                  <span className="text-xs">€7.8M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Tabs column */}
          <div className="space-y-4">
            {tabs.map((tab, index) => {
              const tabId =
                index === 0
                  ? 'escenarios'
                  : index === 1
                  ? 'calculador'
                  : 'proyecciones';
              return (
                <button
                  key={index}
                  id={tabId}
                  onClick={() => {
                    if (index !== activeTab) {
                      setIsChanging(true);
                      setIsAnimating(true);
                      setTimeout(() => {
                        setActiveTab(index);
                        setTimeout(() => {
                          setIsChanging(false);
                          setIsAnimating(false);
                        }, 50);
                      }, 400);
                    }
                  }}
                  className={`w-full p-6 rounded-2xl transition-all duration-300 text-left scroll-mt-24 ${
                    activeTab === index
                      ? 'bg-white shadow-lg ring-2 ring-blue-300/50'
                      : 'bg-white/10 text-white/90 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        activeTab === index ? 'bg-blue-500' : 'bg-white/20'
                      }`}
                    >
                      <tab.icon
                        className={`w-6 h-6 ${
                          activeTab === index ? 'text-white' : 'text-white'
                        }`}
                      />
                    </div>
                    <div>
                      <h3
                        className={`font-semibold ${
                          activeTab === index ? 'text-gray-900' : 'text-white'
                        }`}
                      >
                        {tab.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          activeTab === index
                            ? 'text-gray-600'
                            : 'text-white/80'
                        }`}
                      >
                        {tab.subtitle}
                      </p>
                      <p
                        className={`text-sm mt-1 ${
                          activeTab === index
                            ? 'text-gray-600'
                            : 'text-white/90'
                        }`}
                      >
                        {tab.description}
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 ml-auto transition-transform ${
                        activeTab === index
                          ? 'text-blue-500 rotate-90'
                          : 'text-white/60'
                      }`}
                    />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Demo content */}
          <div
            className={`transition-all duration-500 ease-in-out ${
              isChanging ? 'opacity-0 scale-[0.99]' : 'opacity-100 scale-100'
            }`}
            style={{
              transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-xl bg-white">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 pointer-events-none"></div>
              <div className="relative">{tabs[activeTab].demo}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
