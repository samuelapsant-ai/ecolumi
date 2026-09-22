import React from 'react';
import { ArrowRight, MapPin, Sparkles, Heart } from 'lucide-react';
import { ECOLUMI_IMAGES } from '../data/ecolumiData';
import { EcolumiLogo } from './EcolumiLogo';

interface HeroProps {
  onExploreClick: () => void;
  onSupportClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onSupportClick }) => {
  return (
    <section
      id="inicio"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden border-b border-[#EAE4D6] bg-white"
    >
      {/* Guias sutis laterais inspiradas em marcenaria */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-[#F5EFE6] hidden lg:block"></div>
        <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-[#F5EFE6] hidden lg:block"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Coluna de Texto Principal */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tag editorial com Logotipo Oficial */}
            <div className="inline-flex flex-wrap items-center gap-2.5 mb-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xs bg-[#FFF7ED] border border-[#FDC89B] text-[#DC6F13] font-mono text-[12px] font-semibold tracking-tight shadow-2xs">
                <EcolumiLogo variant="mark" size="sm" className="w-5 h-5 p-0 border-none bg-transparent shadow-none" />
                <span>Ecolumi • ONG Oficial</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xs bg-[#FAF8F5] border border-[#EAE4D6] text-[#59554E] font-mono text-[12px]">
                <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
                <span>Itaquera — São Paulo</span>
              </span>
            </div>

            {/* Conceito Oficial da Ecolumi */}
            <div className="mb-3 text-[13px] font-mono uppercase tracking-wider text-[#F58220] font-semibold flex items-center gap-2">
              <span className="w-5 h-[1.5px] bg-[#F58220]"></span>
              <span>A luz nasce das mãos</span>
            </div>

            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-bold text-[#23201C] tracking-tight leading-[1.12] mb-6 font-sans">
              Quando a criatividade acende, a comunidade se ilumina.
            </h1>

            {/* Texto de Apoio */}
            <p className="text-lg sm:text-xl text-[#59554E] leading-relaxed mb-8 max-w-2xl font-sans">
              A Ecolumi transforma materiais simples em luminárias sustentáveis, criando oportunidades de aprendizado, colaboração e impacto social e ecológico em Itaquera.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
              <a
                href="#como-fazemos"
                onClick={(e) => {
                  e.preventDefault();
                  onExploreClick();
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xs bg-[#F58220] hover:bg-[#DC6F13] text-white font-sans text-base font-semibold tracking-tight transition-all shadow-xs hover:shadow-sm active:translate-y-[1px] cursor-pointer"
              >
                <span>Conheça nosso projeto</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onSupportClick}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xs bg-white hover:bg-[#FFF7ED] border border-[#F58220] text-[#F58220] font-sans text-base font-semibold tracking-tight transition-colors cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-[#F58220]/20" />
                <span>Quero apoiar</span>
              </button>
            </div>

            {/* Fita de pilares reais */}
            <div className="pt-6 border-t border-[#EAE4D6] grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block font-mono text-xs text-[#8A857D] uppercase tracking-wider mb-0.5">
                  Matéria-prima
                </span>
                <span className="text-sm font-semibold text-[#23201C]">
                  Palitos de madeira
                </span>
              </div>
              <div>
                <span className="block font-mono text-xs text-[#8A857D] uppercase tracking-wider mb-0.5">
                  Território
                </span>
                <span className="text-sm font-semibold text-[#23201C]">
                  Itaquera, São Paulo
                </span>
              </div>
              <div>
                <span className="block font-mono text-xs text-[#8A857D] uppercase tracking-wider mb-0.5">
                  Atuação
                </span>
                <span className="text-sm font-semibold text-[#23201C]">
                  Artesanato & Educação
                </span>
              </div>
            </div>
          </div>

          {/* Coluna da Fotografia Oficial */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Moldura de profundidade suave */}
              <div className="absolute -inset-2 bg-gradient-to-br from-[#FFF7ED] to-[#F9F7F2] border border-[#EAE4D6] rounded-xs -z-10 translate-x-1 translate-y-1"></div>

              {/* Contêiner da Fotografia da Luminária */}
              <div className="relative bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs overflow-hidden shadow-xs">
                {/* Badge sobre a foto */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-xs text-[#23201C] border border-[#EAE4D6] font-mono text-[11px] font-medium tracking-tight rounded-xs shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-[#F58220]"></span>
                    Luminária Ecolumi • Feita à mão
                  </span>
                </div>

                <div className="aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-stone-100 relative">
                  <img
                    src={ECOLUMI_IMAGES.hero}
                    alt="Luminária sustentável feita com palitos de sorvete pela ONG Ecolumi"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500 ease-out"
                    loading="eager"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 via-black/10 to-transparent pointer-events-none"></div>
                </div>

                {/* Legenda Institucional da Foto */}
                <div className="px-4 py-3 bg-white border-t border-[#EAE4D6] flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-[#59554E] tracking-tight">
                    Luminária artesanal com palitos de madeira sobrepostos
                  </span>
                  <span className="text-[11px] font-mono text-[#F58220] font-medium bg-[#FFF7ED] px-2 py-0.5 rounded-xs border border-[#FDC89B] shrink-0">
                    100% Ecológica
                  </span>
                </div>
              </div>

              {/* Nota de rodapé da foto */}
              <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-[#8A857D] px-1">
                <span>Fotografia autêntica do modelo Ecolumi</span>
                <span>Itaquera • SP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
