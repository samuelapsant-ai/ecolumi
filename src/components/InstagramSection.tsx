import React from 'react';
import { Instagram, ExternalLink, Camera, ArrowUpRight } from 'lucide-react';
import { CONTACT_INFO, ECOLUMI_IMAGES } from '../data/ecolumiData';

export const InstagramSection: React.FC = () => {
  return (
    <section id="instagram" className="py-20 md:py-24 bg-[#FAF8F5] border-b border-[#EAE4D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#F58220]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#F58220] font-semibold">
              Redes & Bastidores
            </span>
          </div>
          {/* Título e Texto Mandatórios */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#23201C] tracking-tight mb-4 font-sans">
            Acompanhe a construção da Ecolumi.
          </h2>
          <p className="text-lg text-[#59554E] leading-relaxed font-sans">
            Veja os protótipos, os bastidores, as pesquisas e as próximas ações da nossa ONG.
          </p>
        </div>

        {/* Card Editorial do Perfil do Instagram com Link Oficial */}
        <div className="bg-white border border-[#EAE4D6] rounded-xs p-6 sm:p-8 lg:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-[#EAE4D6]">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#FFF7ED] border-2 border-[#F58220] flex items-center justify-center text-[#F58220]">
                <Instagram className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-sans font-bold text-lg text-[#23201C]">
                    Ecolumi Oficial
                  </span>
                  <span className="text-[11px] font-mono text-[#F58220] bg-[#FFF7ED] px-2 py-0.5 rounded-xs border border-[#FDC89B]">
                    ONG Itaquera
                  </span>
                </div>
                {/* Perfil Oficial no Instagram */}
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-mono text-xs text-[#8A857D]">
                    Perfil:
                  </span>
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-bold text-[#F58220] hover:text-[#DC6F13] bg-[#FFF7ED] hover:bg-[#FEEFD9] px-2.5 py-0.5 rounded-xs border border-[#FDC89B] transition-colors"
                  >
                    {CONTACT_INFO.instagramHandle}
                  </a>
                </div>
              </div>
            </div>

            {/* Link para o Instagram Oficial */}
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#F58220] hover:bg-[#DC6F13] text-white font-sans text-sm font-semibold rounded-xs shadow-xs transition-colors"
            >
              <span>Abrir Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Galeria prévia conceitual do feed (bastidores reais dos palitos e protótipos) */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-xs text-[#8A857D] uppercase tracking-wider">
                Feed de bastidores (registros do projeto)
              </span>
              <span className="text-xs font-mono text-[#F58220]">
                #Ecolumi #ItaqueraSustentavel
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="relative aspect-square bg-stone-100 rounded-xs overflow-hidden group border border-[#EAE4D6]">
                <img
                  src={ECOLUMI_IMAGES.hero}
                  alt="Luminária artesanal feita com palitos de sorvete pela Ecolumi"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono p-2 text-center">
                  O primeiro modelo aceso
                </div>
              </div>

              <div className="relative aspect-square bg-stone-100 rounded-xs overflow-hidden group border border-[#EAE4D6]">
                <img
                  src={ECOLUMI_IMAGES.processHands}
                  alt="Processo manual com palitos de sorvete"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono p-2 text-center">
                  Mãos em ação na bancada
                </div>
              </div>

              <div className="relative aspect-square bg-stone-100 rounded-xs overflow-hidden group border border-[#EAE4D6]">
                <img
                  src={ECOLUMI_IMAGES.detail}
                  alt="Detalhes da madeira e encaixes dos palitos"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono p-2 text-center">
                  Encaixes e textura dos palitos
                </div>
              </div>

              <div className="relative aspect-square bg-stone-100 rounded-xs overflow-hidden group border border-[#EAE4D6]">
                <img
                  src={ECOLUMI_IMAGES.lit}
                  alt="Luminária acesa projetando sombras acolhedoras"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono p-2 text-center">
                  Sombras geométricas e luz
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#F0EBE1] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono text-[#8A857D]">
            <span>Perfil oficial confirmado: <strong>@ecolumi_</strong></span>
            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F58220] hover:text-[#DC6F13] underline font-medium"
            >
              instagram.com/ecolumi_ ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
