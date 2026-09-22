import React from 'react';
import officialLogoImg from '../assets/images/ecolumi_official_logo.jpg';

interface EcolumiLogoProps {
  /**
   * 'full': Complete vertical logo with popsicle lamp, glowing bulb, Ecolumi wordmark with leaf, and subtitles.
   * 'horizontal': Compact horizontal logo with lamp mark + Ecolumi wordmark with leaf.
   * 'mark': Just the popsicle stick lamp icon with warm glowing light.
   * 'image': Renders the official uploaded brand image asset.
   */
  variant?: 'full' | 'horizontal' | 'mark' | 'image';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const EcolumiLogo: React.FC<EcolumiLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  if (variant === 'image') {
    const imgSizes = {
      sm: 'w-8 h-8',
      md: 'w-12 h-12',
      lg: 'w-24 h-24',
      xl: 'w-48 h-48',
    };
    return (
      <img
        src={officialLogoImg}
        alt="Logo Oficial da Ecolumi - Luminárias Sustentáveis"
        referrerPolicy="no-referrer"
        className={`object-contain rounded-xs ${imgSizes[size]} ${className}`}
      />
    );
  }

  // Dimension scaling for the vector SVG lamp icon
  const iconDimensions = {
    sm: { w: 32, h: 32 },
    md: { w: 42, h: 42 },
    lg: { w: 68, h: 68 },
    xl: { w: 120, h: 120 },
  }[size];

  const LampIconSvg = (
    <svg
      width={iconDimensions.w}
      height={iconDimensions.h}
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 drop-shadow-xs"
      aria-hidden="true"
    >
      <defs>
        {/* Glow radiante da lâmpada */}
        <radialGradient id="ecolumiBulbGlow" cx="50%" cy="45%" r="40%">
          <stop offset="0%" stopColor="#FFFBEB" stopOpacity="1" />
          <stop offset="35%" stopColor="#FEF08A" stopOpacity="0.95" />
          <stop offset="70%" stopColor="#F58220" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#F58220" stopOpacity="0" />
        </radialGradient>
        {/* Gradiente do palito de madeira ecológico cor de laranja */}
        <linearGradient id="stickGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF8A24" />
          <stop offset="100%" stopColor="#E66A00" />
        </linearGradient>
        <linearGradient id="stickHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFA149" />
          <stop offset="100%" stopColor="#F58220" />
        </linearGradient>
      </defs>

      {/* Brilho quente central da luz */}
      <circle cx="60" cy="38" r="26" fill="url(#ecolumiBulbGlow)" />
      <circle cx="60" cy="37" r="9" fill="#FFFDF0" />

      {/* Palito superior da cúpula (horizontal, bordas arredondadas) */}
      <rect x="36" y="14" width="48" height="6.5" rx="3.25" fill="url(#stickGradient)" stroke="#DC6F13" strokeWidth="0.75" />

      {/* Palitos inclinados da cúpula (formato de quebra-luz trapezoidal de palitos de sorvete) */}
      {/* Esquerda externa */}
      <rect x="31" y="22" width="7" height="34" rx="3.5" transform="rotate(18 31 22)" fill="url(#stickGradient)" stroke="#DC6F13" strokeWidth="0.75" />
      {/* Esquerda intermediária */}
      <rect x="42" y="21" width="7" height="34" rx="3.5" transform="rotate(9 42 21)" fill="url(#stickGradient)" stroke="#DC6F13" strokeWidth="0.75" />
      {/* Direita intermediária */}
      <rect x="71" y="22" width="7" height="34" rx="3.5" transform="rotate(-9 71 22)" fill="url(#stickGradient)" stroke="#DC6F13" strokeWidth="0.75" />
      {/* Direita externa */}
      <rect x="82" y="24" width="7" height="34" rx="3.5" transform="rotate(-18 82 24)" fill="url(#stickGradient)" stroke="#DC6F13" strokeWidth="0.75" />

      {/* Palitos de base da cúpula (horizontal com pontas de palito salientes) */}
      <rect x="22" y="52" width="76" height="6.5" rx="3.25" fill="url(#stickHighlight)" stroke="#DC6F13" strokeWidth="0.75" />
      <circle cx="28" cy="62" r="3" fill="#E66A00" />
      <circle cx="43" cy="62" r="3" fill="#E66A00" />
      <circle cx="77" cy="62" r="3" fill="#E66A00" />
      <circle cx="92" cy="62" r="3" fill="#E66A00" />

      {/* Tripé de palitos / Base em 'A' */}
      {/* Perna central */}
      <rect x="56.5" y="58" width="7" height="30" rx="3.5" fill="url(#stickGradient)" stroke="#DC6F13" strokeWidth="0.75" />
      {/* Perna esquerda inclinada */}
      <rect x="43" y="60" width="7" height="31" rx="3.5" transform="rotate(-26 43 60)" fill="url(#stickGradient)" stroke="#DC6F13" strokeWidth="0.75" />
      {/* Perna direita inclinada */}
      <rect x="70" y="60" width="7" height="31" rx="3.5" transform="rotate(26 70 60)" fill="url(#stickGradient)" stroke="#DC6F13" strokeWidth="0.75" />

      {/* Base dupla de palitos horizontais */}
      <rect x="30" y="88" width="60" height="6.5" rx="3.25" fill="url(#stickHighlight)" stroke="#DC6F13" strokeWidth="0.75" />
      <rect x="28" y="93" width="64" height="6.5" rx="3.25" fill="url(#stickGradient)" stroke="#DC6F13" strokeWidth="0.75" />

      {/* Pés de sustentação */}
      <circle cx="33" cy="103" r="3" fill="#DC6F13" />
      <circle cx="87" cy="103" r="3" fill="#DC6F13" />
    </svg>
  );

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center justify-center p-1 bg-white rounded-xs border border-[#FDC89B] shadow-xs ${className}`}>
        {LampIconSvg}
      </div>
    );
  }

  if (variant === 'horizontal') {
    return (
      <div className={`inline-flex items-center gap-3 ${className}`}>
        {/* Ícone da Luminária com borda delicada */}
        <div className="relative flex items-center justify-center p-1 bg-white rounded-xs border border-[#FDC89B] shadow-xs hover:border-[#F58220] transition-colors shrink-0">
          {LampIconSvg}
        </div>

        {/* Tipografia Oficial da Ecolumi */}
        <div className="flex flex-col select-none">
          <div className="flex items-baseline leading-none">
            <span className="font-sans font-extrabold text-[#F58220] text-2xl tracking-tight">
              Ecolum
            </span>
            {/* Letra 'i' com a folha ecológica substituindo o pingo */}
            <span className="relative font-sans font-extrabold text-[#F58220] text-2xl tracking-tight inline-block">
              i
              {/* Folha ecológica estilizada no pingo do 'i' */}
              <svg
                className="absolute -top-1.5 -right-1 w-3 h-3 text-[#F58220] transform rotate-12"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M2.00002 12C2.00002 6.47715 6.47717 2 12 2C17.5229 2 22 6.47715 22 12C22 17.5228 17.5229 22 12 22C12 16.4772 7.52286 12 2.00002 12Z" />
              </svg>
            </span>
          </div>

          {showSubtitle && (
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#8A857D] mt-0.5 font-medium">
              Luminárias Sustentáveis
            </span>
          )}
        </div>
      </div>
    );
  }

  // Variant === 'full' (Vertical completa com slogans oficiais)
  return (
    <div className={`flex flex-col items-center text-center p-6 bg-white rounded-xs border border-[#FDC89B] shadow-xs max-w-sm mx-auto ${className}`}>
      {/* Imagem/Ícone da Luminária */}
      <div className="mb-4 p-2 bg-[#FFF7ED] rounded-xs border border-[#FDC89B]/60">
        {LampIconSvg}
      </div>

      {/* Tipografia 'Ecolumi' com folha */}
      <div className="flex items-baseline leading-none mb-2">
        <span className="font-sans font-extrabold text-[#F58220] text-4xl sm:text-5xl tracking-tight">
          Ecolum
        </span>
        <span className="relative font-sans font-extrabold text-[#F58220] text-4xl sm:text-5xl tracking-tight inline-block">
          i
          <svg
            className="absolute -top-3 -right-2 w-5 h-5 text-[#F58220] transform rotate-12"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2.00002 12C2.00002 6.47715 6.47717 2 12 2C17.5229 2 22 6.47715 22 12C22 17.5228 17.5229 22 12 22C12 16.4772 7.52286 12 2.00002 12Z" />
          </svg>
        </span>
      </div>

      {/* Slogan 1: LIGHTING LIVES. SUSTAINING FUTURES. */}
      <p className="text-xs font-mono font-semibold text-[#59554E] tracking-widest uppercase mb-2">
        Lighting Lives. Sustaining Futures.
      </p>

      {/* Slogan 2 com divisores: — A NON-PROFIT ORGANIZATION — */}
      <div className="flex items-center gap-3 w-full justify-center text-[11px] font-mono text-[#8A857D] uppercase tracking-wider">
        <span className="w-8 h-px bg-[#EAE4D6]" />
        <span>Organização Sem Fins Lucrativos</span>
        <span className="w-8 h-px bg-[#EAE4D6]" />
      </div>
    </div>
  );
};
