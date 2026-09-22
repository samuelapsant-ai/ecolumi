import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Manifesto } from './components/Manifesto';
import { HistoryTimeline } from './components/HistoryTimeline';
import { HowWeDoIt } from './components/HowWeDoIt';
import { ImpactSection } from './components/ImpactSection';
import { LampProjectGallery } from './components/LampProjectGallery';
import { GetInvolved } from './components/GetInvolved';
import { InstagramSection } from './components/InstagramSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { SupportModal } from './components/SupportModal';

export default function App() {
  const [supportModalOpen, setSupportModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#23201C] flex flex-col selection:bg-[#F58220]/20 selection:text-[#F58220]">
      {/* 1. Cabeçalho com Navegação Fixa */}
      <Header onOpenSupport={() => setSupportModalOpen(true)} />

      <main className="flex-1">
        {/* 2. Hero Principal com Fotografia da Luminária de Palitos de Sorvete */}
        <Hero
          onExploreClick={() => scrollToSection('como-fazemos')}
          onSupportClick={() => setSupportModalOpen(true)}
        />

        {/* 3. Bloco de Manifesto "Não é só uma luminária." */}
        <Manifesto />

        {/* 4. Nossa História com Linha do Tempo e Território Itaquera */}
        <HistoryTimeline />

        {/* 5. Como Fazemos em Quatro Etapas e Fotos Reais do Processo */}
        <HowWeDoIt />

        {/* 6. Impacto em 4 Dimensões e Indicadores Reais */}
        <ImpactSection />

        {/* 7. Projeto da Luminária com Galeria e Ficha Técnica */}
        <LampProjectGallery />

        {/* 8. Participe com 6 Formas de Colaboração */}
        <GetInvolved
          onParticipateClick={() => scrollToSection('contato')}
          onPartnerClick={() => scrollToSection('contato')}
          onInstagramClick={() => scrollToSection('instagram')}
        />

        {/* 9. Acompanhe a Construção da Ecolumi no Instagram */}
        <InstagramSection />

        {/* 10. Formulário de Contato e Canais Institucionais */}
        <ContactSection />
      </main>

      {/* Rodapé Oficial da Ecolumi */}
      <Footer onOpenSupport={() => setSupportModalOpen(true)} />

      {/* Modal de Apoio e Doações */}
      <SupportModal
        isOpen={supportModalOpen}
        onClose={() => setSupportModalOpen(false)}
        onContactClick={() => {
          setSupportModalOpen(false);
          scrollToSection('contato');
        }}
      />
    </div>
  );
}
