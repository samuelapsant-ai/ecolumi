import React from 'react';
import { ECOLUMI_IMAGES, HOW_WE_DO_STEPS } from '../data/ecolumiData';

export const HowWeDoIt: React.FC = () => {
  return (
    <section id="como-fazemos" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE4D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#F58220]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#F58220] font-semibold">
              Metodologia & Trabalho Manual
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#23201C] tracking-tight mb-6 font-sans">
            Como fazemos
          </h2>
          <p className="text-lg text-[#59554E] leading-relaxed font-sans">
            Um fluxo contínuo de experimentação onde o foco não é a pressa industrial, mas o cuidado de cada sobreposição, o calor da madeira e o aprendizado prático compartilhado.
          </p>
        </div>

        {/* As Quatro Etapas em Fluxo Editorial Horizontal (Não são cards genéricos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16">
          {HOW_WE_DO_STEPS.map((step, idx) => (
            <div
              key={step.id}
              className="relative p-6 sm:p-7 bg-white border-t-2 border-t-[#F58220] border-x border-b border-[#EAE4D6] rounded-xs flex flex-col justify-between hover:border-b-[#F58220] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#8A857D] group-hover:text-[#F58220] transition-colors">
                    FASE {step.number}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#EAE4D6] group-hover:bg-[#F58220] transition-colors"></span>
                </div>

                {/* Verbo e Frase Mandatórios */}
                <h3 className="text-xl sm:text-2xl font-bold text-[#23201C] mb-2 font-sans tracking-tight">
                  <span className="text-[#F58220]">{step.verb}</span>
                </h3>

                <p className="text-base text-[#23201C] font-medium mb-3 leading-snug font-sans">
                  {step.description}
                </p>

                <p className="text-xs sm:text-sm text-[#59554E] leading-relaxed">
                  {step.details}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex items-center justify-between text-[11px] font-mono text-[#8A857D]">
                <span>Oficina Comunitária</span>
                <span>Itaquera</span>
              </div>
            </div>
          ))}
        </div>

        {/* COMPOSIÇÃO EDITORIAL OBRIGATÓRIA DE FOTOGRAFIAS DO PROCESSO */}
        <div className="bg-white border border-[#EAE4D6] p-6 sm:p-8 lg:p-10 rounded-xs shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[#EAE4D6] gap-4">
            <div>
              <span className="font-mono text-xs text-[#F58220] font-semibold uppercase tracking-wider block mb-1">
                Documentação visual do processo
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#23201C] font-sans">
                O palito, a mão e o feixe de luz
              </h3>
            </div>
            <p className="text-xs font-mono text-[#8A857D] max-w-sm">
              Registros fotográficos do nosso processo: evidenciando a textura natural dos palitos e a refração acolhedora da iluminação.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Foto 1: Detalhe real da estrutura e textura dos palitos */}
            <div className="group">
              <div className="relative aspect-[4/3] bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs overflow-hidden">
                <img
                  src={ECOLUMI_IMAGES.detail}
                  alt="Estrutura artesanal real feita com palitos de sorvete pela Ecolumi - sobreposição em camadas e encaixes"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 bg-white/95 text-[#23201C] font-mono text-[11px] font-semibold rounded-xs shadow-xs border border-[#EAE4D6]">
                    01. Encaixe & Textura dos Palitos
                  </span>
                </div>
              </div>
              <div className="mt-3 px-1 flex items-baseline justify-between">
                <p className="text-xs sm:text-sm font-sans text-[#23201C] font-medium">
                  Encaixes em camadas com alinhamento preciso de palitos.
                </p>
                <span className="text-[11px] font-mono text-[#F58220] shrink-0 ml-2">
                  Estrutura Real
                </span>
              </div>
              <p className="text-xs text-[#59554E] px-1 mt-0.5">
                Precisão artesanal manual unindo sustentabilidade, rigidez estrutural e geometria acolhedora.
              </p>
            </div>

            {/* Foto 2: Luminária real acesa mostrando a projeção da luz */}
            <div className="group">
              <div className="relative aspect-[4/3] bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs overflow-hidden">
                <img
                  src={ECOLUMI_IMAGES.hero}
                  alt="Luminária real artesanal feita com palitos de sorvete pela Ecolumi acesa com luz âmbar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-2.5 py-1 bg-white/95 text-[#23201C] font-mono text-[11px] font-semibold rounded-xs shadow-xs border border-[#EAE4D6]">
                    02. Torre Real Acesa
                  </span>
                </div>
              </div>
              <div className="mt-3 px-1 flex items-baseline justify-between">
                <p className="text-xs sm:text-sm font-sans text-[#23201C] font-medium">
                  Iluminação acolhedora filtrada pela malha de palitos em ambiente real.
                </p>
                <span className="text-[11px] font-mono text-[#F58220] shrink-0 ml-2">
                  Luz Acolhedora
                </span>
              </div>
              <p className="text-xs text-[#59554E] px-1 mt-0.5">
                A trama cruzada projeta feixes geométricos de luz e sombra, transformando materiais simples em conforto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
