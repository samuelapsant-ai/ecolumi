import React from 'react';
import { Leaf, GraduationCap, Users, Lightbulb, AlertCircle, Edit3 } from 'lucide-react';
import { IMPACT_DIMENSIONS, IMPACT_METRICS } from '../data/ecolumiData';

export const ImpactSection: React.FC = () => {
  const getDimensionIcon = (id: string) => {
    switch (id) {
      case 'dim-ambiental':
        return <Leaf className="w-5 h-5 text-[#F58220]" />;
      case 'dim-educacional':
        return <GraduationCap className="w-5 h-5 text-[#F58220]" />;
      case 'dim-comunitario':
        return <Users className="w-5 h-5 text-[#F58220]" />;
      case 'dim-criativo':
        return <Lightbulb className="w-5 h-5 text-[#F58220]" />;
      default:
        return <Lightbulb className="w-5 h-5 text-[#F58220]" />;
    }
  };

  return (
    <section id="impacto" className="py-20 md:py-28 bg-white border-b border-[#EAE4D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Mandatório da Seção */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#F58220]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#F58220] font-semibold">
              Dimensões de Transformação
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#23201C] tracking-tight mb-6 font-sans">
            Pequenos materiais. Grandes possibilidades.
          </h2>
          <p className="text-lg text-[#59554E] leading-relaxed font-sans">
            O impacto da Ecolumi não se mede apenas pela luminária pronta, mas pela transformação de olhar que ocorre quando um morador percebe que suas mãos podem criar beleza e utilidade a partir do que seria descartado.
          </p>
        </div>

        {/* As 4 Dimensões de Impacto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {IMPACT_DIMENSIONS.map((dim) => (
            <div
              key={dim.id}
              className="p-7 sm:p-8 bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs hover:border-[#FDC89B] hover:bg-[#FFFDFB] transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xs bg-white border border-[#EAE4D6] flex items-center justify-center shadow-2xs">
                  {getDimensionIcon(dim.id)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#23201C] font-sans">
                    {dim.title}
                  </h3>
                  <span className="text-xs font-mono text-[#F58220]">
                    Pilar Institucional
                  </span>
                </div>
              </div>

              <h4 className="text-base font-semibold text-[#23201C] mb-2 leading-snug">
                {dim.shortDesc}
              </h4>

              <p className="text-sm text-[#59554E] leading-relaxed">
                {dim.longDesc}
              </p>
            </div>
          ))}
        </div>

        {/* INDICADORES DE IMPACTO REAL */}
        <div className="p-8 sm:p-10 bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#EAE4D6]">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#F58220] font-semibold block mb-1">
                Painel de Indicadores Socioambientais
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#23201C] font-sans">
                Transparência e metas reais
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white border border-[#EAE4D6] text-[#23201C] font-mono text-xs rounded-xs">
              <span className="w-2 h-2 rounded-full bg-[#F58220]"></span>
              <span>Indicadores Oficiais • 2026</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {IMPACT_METRICS.map((metric) => (
              <div
                key={metric.id}
                className="p-5 bg-white border border-[#EAE4D6] rounded-xs flex flex-col justify-between shadow-2xs"
              >
                <div>
                  <span className="text-3xl sm:text-4xl font-mono font-bold text-[#23201C] block mb-1">
                    {metric.value}
                  </span>
                  <span className="text-xs font-mono text-[#8A857D] uppercase tracking-wider block mb-2">
                    {metric.unit}
                  </span>
                  <p className="text-sm font-semibold text-[#23201C] leading-tight">
                    {metric.label}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#F0EBE1]">
                  <span className="inline-block text-[11px] font-mono text-[#DC6F13] bg-[#FFF7ED] px-2 py-0.5 rounded-xs border border-[#FDC89B]">
                    {metric.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs font-mono text-[#8A857D]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] shrink-0"></span>
            <span>
              A Ecolumi atua com responsabilidade socioambiental: cada luminária simboliza resíduos desviados do descarte e pessoas capacitadas em Itaquera.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
