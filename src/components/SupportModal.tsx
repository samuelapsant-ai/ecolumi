import React from 'react';
import { X, Heart, PackageOpen, Handshake, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/ecolumiData';
import { EcolumiLogo } from './EcolumiLogo';

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export const SupportModal: React.FC<SupportModalProps> = ({
  isOpen,
  onClose,
  onContactClick,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-2xl w-full rounded-xs shadow-2xl border border-[#EAE4D6] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Cabeçalho do Modal */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#EAE4D6] bg-[#FAF8F5]">
          <div className="flex items-center gap-3">
            <EcolumiLogo variant="mark" size="sm" className="w-8 h-8 p-0.5" />
            <div>
              <h3 className="font-sans font-bold text-lg text-[#23201C]">
                Apoie a Ecolumi
              </h3>
              <span className="text-[11px] font-mono text-[#8A857D]">
                Itaquera, São Paulo — Sustentabilidade & Comunidade
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-[#8A857D] hover:text-[#23201C] p-1 rounded-xs transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Conteúdo com formas de apoio */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          <p className="text-sm text-[#59554E] leading-relaxed font-sans">
            Sua contribuição fortalece oficinas gratuitas para jovens e adultos em Itaquera, permitindo que mais materiais sejam reaproveitados e transformados em luz.
          </p>

          <div className="space-y-4">
            {/* Opção 1: Doação de Materiais */}
            <div className="p-4 bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs">
              <div className="flex items-start gap-3">
                <PackageOpen className="w-5 h-5 text-[#F58220] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#23201C] mb-1">
                    1. Doação de Materiais e Insumos
                  </h4>
                  <p className="text-xs text-[#59554E] leading-relaxed mb-2">
                    Aceitamos palitos de sorvete de madeira limpos (novos ou higienizados), cola atóxica PVA para madeira, cabos elétricos revestidos em tecido, bocais de louça E27 e lâmpadas LED frias (4W a 6W).
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onContactClick();
                    }}
                    className="text-xs font-mono text-[#F58220] hover:text-[#DC6F13] font-medium cursor-pointer"
                  >
                    Combinar entrega de materiais em Itaquera →
                  </button>
                </div>
              </div>
            </div>

            {/* Opção 2: Cessão de Espaço para Oficinas */}
            <div className="p-4 bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs">
              <div className="flex items-start gap-3">
                <Handshake className="w-5 h-5 text-[#F58220] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans font-bold text-sm text-[#23201C] mb-1">
                    2. Parcerias Institucionais & Espaços
                  </h4>
                  <p className="text-xs text-[#59554E] leading-relaxed mb-2">
                    Escolas públicas, coletivos culturais, associações de moradores e cooperativas de reciclagem da Zona Leste paulistana que queiram receber uma oficina prática da Ecolumi.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onContactClick();
                    }}
                    className="text-xs font-mono text-[#F58220] hover:text-[#DC6F13] font-medium cursor-pointer"
                  >
                    Propor atividade em conjunto →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rodapé do Modal */}
        <div className="px-6 py-4 border-t border-[#EAE4D6] bg-[#FAF8F5] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <span className="text-xs font-mono text-[#8A857D]">
            Ecolumi • Itaquera, São Paulo
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-[#EAE4D6] bg-white text-xs font-mono text-[#59554E] hover:text-[#23201C] rounded-xs cursor-pointer"
            >
              Fechar
            </button>
            <button
              onClick={() => {
                onClose();
                onContactClick();
              }}
              className="px-5 py-2 bg-[#F58220] hover:bg-[#DC6F13] text-white text-xs font-semibold rounded-xs shadow-xs cursor-pointer"
            >
              Falar com a Ecolumi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
