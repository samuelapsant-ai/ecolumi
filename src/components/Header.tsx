import React, { useState, useEffect } from 'react';
import { Menu, X, Heart, Instagram } from 'lucide-react';
import { EcolumiLogo } from './EcolumiLogo';
import { CONTACT_INFO } from '../data/ecolumiData';

interface HeaderProps {
  onOpenSupport: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSupport }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Nossa história', href: '#historia' },
    { label: 'Como fazemos', href: '#como-fazemos' },
    { label: 'Impacto', href: '#impacto' },
    { label: 'A Luminária', href: '#luminaria' },
    { label: 'Participe', href: '#participe' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      id="cabecalho"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-[#EAE4D6]'
          : 'bg-white/90 backdrop-blur-xs border-b border-stone-200/70'
      }`}
    >
      {/* Barra superior institucional discreta */}
      <div className="border-b border-[#F0EBE1] bg-[#FAF8F5] text-[11px] py-1.5 px-4 sm:px-8 text-[#59554E] font-mono tracking-tight flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#F58220]"></span>
          <span>ONG de sustentabilidade criativa | Itaquera — São Paulo</span>
        </div>
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={CONTACT_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#59554E] hover:text-[#F58220] transition-colors flex items-center gap-1"
          >
            <Instagram className="w-3 h-3 text-[#F58220]" />
            <span>{CONTACT_INFO.instagramHandle}</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logotipo Oficial Ecolumi */}
          <a
            href="#inicio"
            className="flex items-center group focus:outline-hidden focus:ring-2 focus:ring-[#F58220] focus:ring-offset-2 rounded-xs"
            title="Ecolumi — Início"
          >
            <EcolumiLogo variant="horizontal" size="sm" showSubtitle={true} />
          </a>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] text-[#59554E] hover:text-[#F58220] font-medium tracking-tight transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#F58220] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Botão de Destaque Desktop */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSupport}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#F58220] hover:bg-[#DC6F13] text-white font-sans text-sm font-semibold tracking-tight transition-all shadow-xs hover:shadow-sm active:translate-y-[1px] cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-white/30 text-white" />
              <span>Apoie a Ecolumi</span>
            </button>
          </div>

          {/* Botão Mobile Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSupport}
              className="px-3 py-1.5 rounded-sm bg-[#F58220] text-white text-xs font-semibold sm:hidden"
            >
              Apoie
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#23201C] hover:text-[#F58220] hover:bg-[#FAF8F5] rounded-sm transition-colors cursor-pointer"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EAE4D6] bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-[15px] font-medium text-[#23201C] hover:bg-[#FFF7ED] hover:text-[#F58220] rounded-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[#F0EBE1]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSupport();
              }}
              className="w-full py-3 rounded-sm bg-[#F58220] text-white font-semibold text-center text-sm shadow-xs flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-white/20" />
              <span>Apoie a Ecolumi</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
