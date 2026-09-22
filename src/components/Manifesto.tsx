import React from 'react';
import { Sparkles, Sun, CheckCircle2 } from 'lucide-react';

export const Manifesto: React.FC = () => {
  return (
    <section
      id="manifesto"
      className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE4D6] relative overflow-hidden"
    >
      {/* Detalhe de linhas finas editoriais */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px] bg-[#F58220]"></span>
          <span className="font-mono text-xs uppercase tracking-widest text-[#F58220] font-semibold">
            Manifesto Ecolumi
          </span>
        </div>

        {/* Título Mandatório do Bloco */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#23201C] tracking-tight leading-[1.1] mb-10 font-sans">
          Não é só uma luminária.
        </h2>

        {/* Frase Chave Mandatória em Destaque */}
        <div className="p-6 sm:p-8 md:p-10 bg-white border-l-4 border-[#F58220] border-y border-r border-[#EAE4D6] shadow-xs mb-10 rounded-xs">
          <blockquote className="text-xl sm:text-2xl md:text-3xl text-[#23201C] font-medium leading-snug tracking-tight font-sans">
            “É um material que ganha outra função. É uma oficina que vira aprendizado. É uma ideia que passa de mão em mão e chega à comunidade como luz.”
          </blockquote>
        </div>

        {/* Parágrafos explicativos humanos e específicos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 text-[#59554E] leading-relaxed text-base sm:text-lg">
          <div>
            <p className="mb-4">
              Cada peça construída na Ecolumi começa com o que a maioria das pessoas descarta sem pensar duas vezes: o palito de picolé de madeira. Um objeto cotidiano que, quando organizado com calma e intenção, revela resistência física, ritmo geométrico e uma capacidade surpreendente de acolher a luz.
            </p>
            <p>
              Não prometemos fórmulas mágicas. Acreditamos na potência do gesto concreto: sentar ao redor de uma mesa de oficina em Itaquera, aprender a lidar com as mãos, medir, colar e ver nascer um objeto que verdadeiramente ilumina um quarto ou uma sala de estudos.
            </p>
          </div>

          <div>
            <p className="mb-4">
              Cada luminária representa reaproveitamento inteligente, trabalho coletivo, educação ambiental e a comprovação palpável de que uma ideia simples pode se transformar em ação real.
            </p>
            <div className="mt-6 pt-6 border-t border-[#EAE4D6] space-y-3 font-sans text-sm text-[#23201C]">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#F58220] mt-1.5 shrink-0"></span>
                <span>
                  <strong>A luz que acolhe:</strong> Transforma o ambiente doméstico com calor humano e estética contemporânea.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-[#F58220] mt-1.5 shrink-0"></span>
                <span>
                  <strong>O conhecimento que fica:</strong> A pessoa que monta uma luminária nunca mais olha para um resíduo da mesma forma.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
