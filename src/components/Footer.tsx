import React from 'react';
import { Heart, Sparkles, MapPin, ArrowUp, Instagram, Mail } from 'lucide-react';
import { CONTACT_INFO } from '../data/ecolumiData';
import { EcolumiLogo } from './EcolumiLogo';

interface FooterProps {
  onOpenSupport: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenSupport }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-[#EAE4D6] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#EAE4D6]">
          {/* Coluna Principal da Marca */}
          <div className="md:col-span-6 space-y-4">
            <EcolumiLogo variant="horizontal" size="md" showSubtitle={true} />

            {/* Frases Oficiais Mandatórias do Rodapé */}
            <p className="text-base text-[#23201C] font-medium font-sans max-w-md leading-snug">
              Ecolumi — Luz sustentável feita com criatividade e participação.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-[#59554E]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#F58220]" />
                <span>Itaquera, São Paulo — SP.</span>
              </div>
              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-mono text-[#F58220] hover:text-[#DC6F13] transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{CONTACT_INFO.instagramHandle}</span>
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="flex items-center gap-1.5 text-xs font-mono text-[#59554E] hover:text-[#F58220] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#F58220]" />
                <span>{CONTACT_INFO.email}</span>
              </a>
            </div>

            <p className="text-xs text-[#8A857D] leading-relaxed max-w-md">
              Organização da sociedade civil sem fins lucrativos dedicada à sustentabilidade prática, ao artesanato com palitos de sorvete e à educação comunitária.
            </p>
          </div>

          {/* Coluna de Links Rápidos */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#23201C] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-sm text-[#59554E]">
              <li>
                <a href="#inicio" className="hover:text-[#F58220] transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#historia" className="hover:text-[#F58220] transition-colors">
                  Nossa história
                </a>
              </li>
              <li>
                <a href="#como-fazemos" className="hover:text-[#F58220] transition-colors">
                  Como fazemos
                </a>
              </li>
              <li>
                <a href="#impacto" className="hover:text-[#F58220] transition-colors">
                  Impacto & Indicadores
                </a>
              </li>
              <li>
                <a href="#luminaria" className="hover:text-[#F58220] transition-colors">
                  Projeto da Luminária
                </a>
              </li>
              <li>
                <a href="#participe" className="hover:text-[#F58220] transition-colors">
                  Participe & Apoie
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-[#F58220] transition-colors">
                  Fale Conosco
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna de Apoio Comunitário */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-wider text-[#23201C] font-semibold">
              Participe da Causa
            </h4>
            <div className="space-y-2.5">
              <button
                onClick={onOpenSupport}
                className="w-full text-left px-3.5 py-2.5 rounded-xs bg-[#FFF7ED] hover:bg-[#FEEFD9] text-[#DC6F13] border border-[#FDC89B] text-xs font-semibold font-sans transition-colors cursor-pointer flex items-center justify-between shadow-2xs"
              >
                <span>Apoie o projeto com materiais</span>
                <Heart className="w-3.5 h-3.5" />
              </button>

              <a
                href={CONTACT_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-left px-3.5 py-2 rounded-xs bg-[#FAF8F5] hover:bg-[#F0EBE1] text-[#59554E] hover:text-[#23201C] border border-[#EAE4D6] text-xs font-mono transition-colors cursor-pointer flex items-center justify-between"
              >
                <span>Acompanhe no Instagram</span>
                <Instagram className="w-3.5 h-3.5 text-[#F58220]" />
              </a>

              <p className="text-[11px] font-mono text-[#8A857D] leading-tight pt-1">
                A Ecolumi é uma iniciativa socioambiental sem fins lucrativos focada em arte, design e capacitação comunitária.
              </p>
            </div>
          </div>
        </div>

        {/* Linha Final de Copyright e Botão Voltar ao Topo */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8A857D]">
          <div>
            © {new Date().getFullYear()} Ecolumi. Todos os direitos reservados.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#59554E]">Conceito: A luz nasce das mãos</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-[#59554E] hover:text-[#F58220] transition-colors cursor-pointer"
              aria-label="Voltar ao início da página"
            >
              <span>Topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
