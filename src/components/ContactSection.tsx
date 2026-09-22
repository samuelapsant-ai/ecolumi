import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/ecolumiData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ nome: '', email: '', assunto: '', mensagem: '' });
    }, 600);
  };

  return (
    <section id="contato" className="py-20 md:py-28 bg-white border-b border-[#EAE4D6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[1.5px] bg-[#F58220]"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#F58220] font-semibold">
              Fale Conosco
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#23201C] tracking-tight mb-6 font-sans">
            Contato
          </h2>
          <p className="text-lg text-[#59554E] leading-relaxed font-sans">
            Quer propor uma oficina na sua escola, doar palitos e materiais, ou saber mais sobre o projeto da Ecolumi em Itaquera? Envie uma mensagem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Coluna do Formulário Mandatório */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#EAE4D6] p-6 sm:p-8 md:p-10 rounded-xs">
            <h3 className="text-xl font-bold text-[#23201C] mb-6 font-sans flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#F58220]" />
              <span>Envie uma mensagem para a nossa equipe</span>
            </h3>

            {submitted ? (
              <div className="p-6 bg-white border border-[#FDC89B] rounded-xs text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-[#FFF7ED] text-[#F58220] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-[#23201C] font-sans">
                  Mensagem recebida com sucesso!
                </h4>
                <p className="text-sm text-[#59554E] font-sans max-w-md mx-auto">
                  Agradecemos seu contato e interesse pela Ecolumi. Responderemos em breve pelo seu e-mail informado.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 bg-[#F58220] text-white text-xs font-semibold rounded-xs"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block text-xs font-mono uppercase tracking-wider text-[#23201C] font-semibold mb-1.5"
                    >
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      required
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Seu nome"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#EAE4D6] focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] rounded-xs text-sm text-[#23201C] outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono uppercase tracking-wider text-[#23201C] font-semibold mb-1.5"
                    >
                      E-mail para resposta *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seuemail@exemplo.com"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#EAE4D6] focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] rounded-xs text-sm text-[#23201C] outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="assunto"
                    className="block text-xs font-mono uppercase tracking-wider text-[#23201C] font-semibold mb-1.5"
                  >
                    Assunto *
                  </label>
                  <input
                    type="text"
                    id="assunto"
                    required
                    value={formData.assunto}
                    onChange={(e) => setFormData({ ...formData, assunto: e.target.value })}
                    placeholder="Ex.: Proposta de oficina, doação de palitos, voluntariado"
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EAE4D6] focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] rounded-xs text-sm text-[#23201C] outline-hidden transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block text-xs font-mono uppercase tracking-wider text-[#23201C] font-semibold mb-1.5"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    required
                    rows={4}
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    placeholder="Escreva sua mensagem, sugestão ou proposta..."
                    className="w-full px-3.5 py-2.5 bg-white border border-[#EAE4D6] focus:border-[#F58220] focus:ring-1 focus:ring-[#F58220] rounded-xs text-sm text-[#23201C] outline-hidden transition-colors resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#F58220] hover:bg-[#DC6F13] text-white font-sans text-sm font-semibold rounded-xs shadow-xs transition-all cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Enviando...</span>
                  ) : (
                    <>
                      <span>Enviar mensagem</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Coluna de Informações Oficiais */}
          <div className="lg:col-span-5 space-y-6">
            {/* Cartão de Território e Endereço */}
            <div className="p-6 bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs">
              <div className="flex items-center gap-2.5 mb-3 text-[#23201C]">
                <MapPin className="w-5 h-5 text-[#F58220]" />
                <h4 className="font-sans font-bold text-base">Território & Sede</h4>
              </div>
              <p className="text-sm font-semibold text-[#23201C] mb-1 font-sans">
                {CONTACT_INFO.city}
              </p>
              <div className="mt-2 p-3 bg-white border border-[#EAE4D6] rounded-xs">
                <span className="text-[11px] font-mono text-[#8A857D] block mb-0.5">
                  Base de atuação comunitária:
                </span>
                <span className="text-xs font-mono text-[#23201C] font-medium">
                  {CONTACT_INFO.address}
                </span>
              </div>
              <p className="text-xs text-[#59554E] mt-2.5 leading-relaxed">
                As oficinas e ações presenciais são realizadas em polos parceiros, escolas públicas e centros comunitários de Itaquera e da Zona Leste de São Paulo.
              </p>
            </div>

            {/* Cartão de E-mail Institucional */}
            <div className="p-6 bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs">
              <div className="flex items-center gap-2.5 mb-3 text-[#23201C]">
                <Mail className="w-5 h-5 text-[#F58220]" />
                <h4 className="font-sans font-bold text-base">Canal de E-mail</h4>
              </div>
              <div className="p-3 bg-white border border-[#EAE4D6] rounded-xs">
                <span className="text-[11px] font-mono text-[#8A857D] block mb-1">
                  E-mail institucional oficial:
                </span>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-xs font-mono font-bold text-[#F58220] hover:text-[#DC6F13] bg-[#FFF7ED] hover:bg-[#FEEFD9] px-2.5 py-1.5 rounded-xs border border-[#FDC89B] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{CONTACT_INFO.email}</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </div>
              <p className="text-xs text-[#59554E] mt-2.5 leading-relaxed">
                Responderemos mensagens institucionais, dúvidas sobre oficinas e propostas de parcerias com prioridade.
              </p>
            </div>

            {/* Cartão de Redes Sociais */}
            <div className="p-6 bg-[#FAF8F5] border border-[#EAE4D6] rounded-xs">
              <h4 className="font-sans font-bold text-base text-[#23201C] mb-2">
                Redes Sociais Oficiais
              </h4>
              <p className="text-xs text-[#59554E] mb-3 leading-relaxed">
                Acompanhe o dia a dia do projeto, tutoriais de montagem e as próximas datas de oficinas:
              </p>
              <div className="p-3 bg-white border border-[#EAE4D6] rounded-xs space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#59554E]">Instagram oficial:</span>
                  <a
                    href={CONTACT_INFO.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#F58220] hover:text-[#DC6F13] bg-[#FFF7ED] hover:bg-[#FEEFD9] px-2.5 py-1 rounded-xs border border-[#FDC89B] transition-colors inline-flex items-center gap-1"
                  >
                    <span>{CONTACT_INFO.instagramHandle}</span>
                    <span className="text-[10px]">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
