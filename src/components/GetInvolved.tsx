import React from 'react';
import { HandMetal, Users, PackageOpen, Handshake, Megaphone, HeartHandshake, ArrowRight } from 'lucide-react';
import { PARTICIPATION_METHODS, CONTACT_INFO } from '../data/ecolumiData';

interface GetInvolvedProps {
  onParticipateClick: () => void;
  onPartnerClick: () => void;
  onInstagramClick: () => void;
}

export const GetInvolved: React.FC<GetInvolvedProps> = ({
  onParticipateClick,
  onPartnerClick,
  onInstagramClick,
}) => {
  const getIcon = (id: string) => {
    switch (id) {
      case 'part-1':
        return <Megaphone className="w-5 h-5 text-[#F58220]" />;
      case 'part-2':
        return <HandMetal className="w-5 h-5 text-[#F58220]" />;
      case 'part-3':
        return <PackageOpen className="w-5 h-5 text-[#F58220]" />;
      case 'part-4':
        return <Handshake className="w-5 h-5 text-[#F58220]" />;
      case 'part-5':
        return <Users className="w-5 h-5 text-[#F58220]" />;
      case 'part-6':
        return <HeartHandshake className="w-5 h-5 text-[#F58220]" />;
      default:
        return <HeartHandshake className="w-5 h-5 text-[#F58220]" />;
    }
  };

  return (
    <section id="participe" className="py-20 md:py-28 bg-white border-b border-[#EAE4D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Mandatório */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#F58220]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#F58220] font-semibold">
              Construção Comunitária
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#23201C] tracking-tight mb-6 font-sans">
            A Ecolumi cresce quando mais pessoas colocam a mão na massa.
          </h2>
          <p className="text-lg text-[#59554E] leading-relaxed font-sans">
            Acreditamos na força da união entre vizinhos, educadores, artistas e voluntários. Você não precisa ter experiência anterior com marcenaria ou artesanato para se somar à nossa jornada em Itaquera.
          </p>
        </div>

        {/* Grade das 6 Formas de Participação */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {PARTICIPATION_METHODS.map((item) => (
            <div
              key={item.id}
              className="p-6 bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs hover:border-[#F58220] hover:bg-[#FFFDFB] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-9 h-9 rounded-xs bg-white border border-[#EAE4D6] flex items-center justify-center shadow-2xs">
                    {getIcon(item.id)}
                  </div>
                  <span className="font-mono text-[11px] text-[#F58220] bg-white px-2 py-0.5 rounded-xs border border-[#FDC89B]">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#23201C] mb-2 font-sans">
                  {item.title}
                </h3>

                <p className="text-sm text-[#59554E] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#EFE9DF] text-[11px] font-mono text-[#8A857D]">
                Aberto a moradores e apoiadores
              </div>
            </div>
          ))}
        </div>

        {/* Três Botões de Ação Mandatórios */}
        <div className="p-8 bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs flex flex-col lg:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#23201C] font-sans mb-1">
              Como você gostaria de colaborar hoje?
            </h3>
            <p className="text-sm text-[#59554E] font-sans">
              Envie sua mensagem ou acompanhe as novidades pelas nossas redes sociais.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 w-full lg:w-auto">
            <button
              onClick={onParticipateClick}
              className="flex-1 sm:flex-none px-6 py-3 bg-[#F58220] hover:bg-[#DC6F13] text-white font-sans text-sm font-semibold rounded-xs shadow-xs transition-all active:translate-y-[1px] cursor-pointer"
            >
              Quero participar
            </button>

            <button
              onClick={onPartnerClick}
              className="flex-1 sm:flex-none px-6 py-3 bg-white hover:bg-[#FFF7ED] border border-[#F58220] text-[#F58220] font-sans text-sm font-semibold rounded-xs transition-colors cursor-pointer"
            >
              Propor parceria
            </button>

            <a
              href={CONTACT_INFO.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-6 py-3 bg-white hover:bg-[#FAF8F5] border border-[#EAE4D6] text-[#23201C] hover:text-[#F58220] font-sans text-sm font-semibold rounded-xs transition-colors cursor-pointer"
            >
              <span>Acompanhar no Instagram</span>
              <span className="text-xs">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
