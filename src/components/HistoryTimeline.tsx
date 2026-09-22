import React from 'react';
import { Calendar, Compass, MapPin, Tag } from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/ecolumiData';

export const HistoryTimeline: React.FC = () => {
  return (
    <section id="historia" className="py-20 md:py-28 bg-white border-b border-[#EAE4D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#F58220]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#F58220] font-semibold">
              Origem & Trajetória
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#23201C] tracking-tight mb-6 font-sans">
            Nossa história
          </h2>
          <p className="text-lg text-[#59554E] leading-relaxed font-sans">
            A Ecolumi nasceu de uma constatação simples: produzir luminárias artesanais com palitos de sorvete é um caminho acessível e potente para falar sobre sustentabilidade, criatividade e participação social.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs text-xs font-mono text-[#59554E]">
            <MapPin className="w-3.5 h-3.5 text-[#F58220]" />
            <span>
              <strong>Território:</strong> Sede planejada para Itaquera, Zona Leste de São Paulo — a raiz e o público central da nossa missão.
            </span>
          </div>
        </div>

        {/* Linha do Tempo Editorial */}
        <div className="relative border-l border-[#EAE4D6] ml-4 md:ml-8 pl-6 md:pl-10 space-y-12">
          {TIMELINE_EVENTS.map((event, index) => (
            <div key={event.id} className="relative group">
              {/* Marcador do nó na linha do tempo */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 flex items-center justify-center w-6 h-6 rounded-full bg-white border-2 border-[#F58220] group-hover:bg-[#F58220] group-hover:scale-110 transition-all shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F58220] group-hover:bg-white transition-colors"></span>
              </div>

              {/* Conteúdo do marco */}
              <div className="p-5 sm:p-6 bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs group-hover:border-[#FDC89B] group-hover:bg-[#FFFDFB] transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-xs font-bold text-[#F58220] bg-white px-2 py-0.5 rounded-xs border border-[#FDC89B]">
                      Etapa {event.stepNumber}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#23201C] font-sans">
                      {event.title}
                    </h3>
                  </div>

                  {/* Marcador de data oficial */}
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-xs border ${
                      event.confirmed
                        ? 'bg-[#FFF7ED] border-[#FDC89B] text-[#DC6F13] font-semibold'
                        : 'bg-white border-dashed border-[#EAE4D6] text-[#8A857D]'
                    }`}
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#F58220]" />
                    <span>{event.dateOrStatus}</span>
                  </span>
                </div>

                <p className="text-[#59554E] text-sm sm:text-base leading-relaxed font-sans">
                  {event.description}
                </p>

                {/* Nota para o time da Ecolumi */}
                <div className="mt-3 pt-3 border-t border-[#EFE9DF] flex items-center justify-between text-[11px] font-mono text-[#8A857D]">
                  <span className="flex items-center gap-1.5">
                    {event.confirmed ? (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span className="text-emerald-700 font-medium">Marco oficial confirmado</span>
                      </>
                    ) : (
                      <>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                        <span>Em estruturação</span>
                      </>
                    )}
                  </span>
                  <span className="text-[#8A857D] group-hover:text-[#F58220] transition-colors">
                    Passo {index + 1} de {TIMELINE_EVENTS.length}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rodapé editorial da linha do tempo */}
        <div className="mt-12 p-4 bg-[#FFF7ED] border border-[#FDC89B] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono text-[#59554E]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F58220]"></span>
            <span>
              <strong>Cronologia oficial:</strong> Marcos fundacionais e etapas de desenvolvimento do projeto em 2026 registrados pela equipe da Ecolumi em Itaquera.
            </span>
          </div>
          <span className="text-[#DC6F13] font-semibold">Itaquera • SP</span>
        </div>
      </div>
    </section>
  );
};
