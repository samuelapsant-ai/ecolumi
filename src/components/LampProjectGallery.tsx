import React, { useState } from 'react';
import { Maximize2, X, ShieldAlert, Wrench, Clock, Zap, Sparkles } from 'lucide-react';
import { PROTOTYPE_PHOTOS, TECHNICAL_SPECS } from '../data/ecolumiData';
import { LampPhoto } from '../types';

export const LampProjectGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<LampPhoto | null>(null);

  return (
    <section id="luminaria" className="py-20 md:py-28 bg-[#FAF8F5] border-b border-[#EAE4D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho Mandatório */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#F58220]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#F58220] font-semibold">
              A Luminária Ecolumi
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#23201C] tracking-tight mb-6 font-sans">
            Do palito à luz.
          </h2>
          <p className="text-lg text-[#59554E] leading-relaxed font-sans">
            Conheça os detalhes construtivos da nossa luminária sustentável. Cada encaixe foi projetado para unir estabilidade mecânica, ventilação natural para a lâmpada LED e uma geometria acolhedora de sombras e luz difusa.
          </p>
        </div>

        {/* Galeria de Fotos Autênticas */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
            <div>
              <span className="font-mono text-xs text-[#8A857D] uppercase tracking-wider block mb-1">
                Galeria Fotográfica Oficial (Clique para ampliar detalhes)
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-xs border border-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                Fotografias autênticas do projeto Ecolumi
              </span>
            </div>
            <span className="font-mono text-xs text-[#F58220] self-start sm:self-auto">
              {PROTOTYPE_PHOTOS.length} registros fotográficos
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROTOTYPE_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group bg-white border border-[#EAE4D6] rounded-xs overflow-hidden cursor-pointer hover:border-[#F58220] hover:shadow-xs transition-all flex flex-col"
              >
                <div className="relative aspect-[4/3] bg-stone-100 overflow-hidden">
                  <img
                    src={photo.imageSrc}
                    alt={photo.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5">
                    <span className="inline-block px-2 py-0.5 bg-white/95 backdrop-blur-xs text-[#23201C] font-mono text-[10px] font-semibold rounded-xs border border-[#EAE4D6]">
                      {photo.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white p-1.5 rounded-xs">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-sans font-bold text-sm text-[#23201C] mb-1 group-hover:text-[#F58220] transition-colors">
                      {photo.title}
                    </h3>
                    <p className="text-xs text-[#59554E] leading-relaxed">
                      {photo.caption}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#F0EBE1] flex items-center justify-between text-[10px] font-mono text-[#8A857D]">
                    <span>Palitos de madeira</span>
                    <span className="text-[#F58220]">Ver ampliado →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FICHA TÉCNICA & CUIDADOS DE SEGURANÇA */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Ficha Técnica */}
          <div className="lg:col-span-8 bg-white border border-[#EAE4D6] p-6 sm:p-8 rounded-xs">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#EAE4D6]">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-[#F58220] font-semibold block mb-0.5">
                  Especificações de Projeto
                </span>
                <h3 className="text-xl font-bold text-[#23201C] font-sans">
                  Ficha Técnica Oficial
                </h3>
              </div>
              <span className="text-xs font-mono text-[#23201C] bg-[#FAF8F5] px-2.5 py-1 rounded-xs border border-[#EAE4D6] font-medium">
                Padrão Ecolumi • 2026
              </span>
            </div>

            <div className="space-y-6">
              {TECHNICAL_SPECS.map((spec, index) => (
                <div key={index} className="pb-5 border-b border-[#F5EFE6] last:border-b-0 last:pb-0">
                  <div className="flex items-baseline justify-between gap-4 mb-1">
                    <span className="font-sans font-semibold text-sm text-[#23201C]">
                      {spec.label}
                    </span>
                    <span className="font-mono text-[11px] text-[#8A857D]">
                      Item {index + 1}
                    </span>
                  </div>
                  <p className="text-sm text-[#59554E] leading-relaxed mb-1.5 font-sans">
                    {spec.value}
                  </p>
                  {spec.editableNote && (
                    <p className="text-xs font-mono text-[#8A857D] bg-[#FAF8F5] p-2 rounded-xs border border-dashed border-[#EAE4D6]">
                      <span className="text-[#DC6F13] font-medium">Nota técnica: </span>
                      {spec.editableNote}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Bloco Obrigatório de Segurança e Aperfeiçoamento */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#FFF7ED] border border-[#FDC89B] p-6 rounded-xs">
              <div className="flex items-center gap-2 mb-3 text-[#DC6F13]">
                <ShieldAlert className="w-5 h-5 shrink-0" />
                <h4 className="font-sans font-bold text-sm tracking-tight">
                  Aviso Importante de Segurança
                </h4>
              </div>
              <p className="text-xs leading-relaxed text-[#59554E] font-sans mb-3">
                Esta luminária é um <strong>projeto comunitário em desenvolvimento experimental</strong>, construído em oficinas participativas de artesanato.
              </p>
              <p className="text-xs leading-relaxed text-[#59554E] font-sans">
                Ela <strong>não é um produto industrial final certificado</strong>. Todos os ensaios de ligação elétrica devem utilizar lâmpadas frias LED e ser conduzidos sob supervisão responsável, mantendo a peça longe de água e fontes térmicas.
              </p>
            </div>

            <div className="bg-white border border-[#EAE4D6] p-6 rounded-xs">
              <div className="flex items-center gap-2 mb-3 text-[#23201C]">
                <Wrench className="w-4 h-4 text-[#F58220]" />
                <h4 className="font-sans font-bold text-sm tracking-tight">
                  Evolução Colaborativa
                </h4>
              </div>
              <p className="text-xs text-[#59554E] leading-relaxed mb-4">
                Tem sugestões de melhoria para o design das cúpulas, encaixes mais resistentes ou métodos de fixação? Ajude nosso núcleo de projetos em Itaquera.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#F58220] hover:text-[#DC6F13] font-medium transition-colors"
              >
                <span>Contribuir com o projeto técnico →</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Lightbox de Foto Ampliada */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="bg-white max-w-3xl w-full rounded-xs overflow-hidden shadow-2xl border border-[#EAE4D6] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-[#EAE4D6] bg-[#FAF8F5]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F58220]"></span>
                <span className="font-mono text-xs font-semibold text-[#23201C]">
                  {selectedPhoto.title}
                </span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="text-[#8A857D] hover:text-[#23201C] p-1 rounded-xs transition-colors cursor-pointer"
                aria-label="Fechar visualização"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="aspect-[4/3] bg-stone-900 overflow-hidden flex items-center justify-center">
              <img
                src={selectedPhoto.imageSrc}
                alt={selectedPhoto.alt}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-5 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-sm text-[#23201C] font-medium">
                  {selectedPhoto.caption}
                </p>
                <span className="text-xs font-mono text-[#8A857D] mt-0.5 block">
                  Luminária artesanal feita com palitos de sorvete pela Ecolumi • Itaquera, SP
                </span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="px-4 py-2 bg-[#FAF8F5] hover:bg-[#F0EBE1] text-xs font-mono text-[#23201C] border border-[#EAE4D6] rounded-xs transition-colors shrink-0 cursor-pointer"
              >
                Voltar à galeria
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
