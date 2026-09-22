import officialLogoImg from '../assets/images/ecolumi_official_logo.jpg';
import heroLampImg from '../assets/images/ecolumi_hero_lamp_1788997134259.jpg';
import processHandsImg from '../assets/images/ecolumi_process_hands_1788997146835.jpg';
import lampDetailImg from '../assets/images/ecolumi_lamp_detail_1788997157906.jpg';
import lampLitImg from '../assets/images/ecolumi_lamp_lit_1788997169752.jpg';

import {
  TimelineEvent,
  HowWeDoStep,
  ImpactDimension,
  ImpactMetric,
  LampPhoto,
  TechnicalSpecItem,
  ParticipationMethod,
} from '../types';

/**
 * ============================================================================
 * DADOS INSTITUCIONAIS DA ECOLUMI
 * Arquivo central para edição de textos, datas e substituição de imagens futuras.
 * ============================================================================
 */

export const ECOLUMI_IMAGES = {
  // Logotipo Oficial da Ecolumi
  logo: officialLogoImg,
  // Modelo principal artesanal da Ecolumi (Luminária com palitos de sorvete)
  hero: heroLampImg,
  // Montagem manual / mãos em oficina
  processHands: processHandsImg,
  // Detalhe dos encaixes e textura de madeira
  detail: lampDetailImg,
  // Luminária acesa com projeção de sombras
  lit: lampLitImg,
};

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: 'step-1',
    stepNumber: '01',
    title: 'Ideia inicial',
    dateOrStatus: '28 de abril de 2026',
    description:
      'Percepção de que o palito de sorvete — um resíduo comum e descartável — possui potencial geométrico e estrutural para se transformar em design funcional e reflexão ecológica.',
    confirmed: true,
  },
  {
    id: 'step-2',
    stepNumber: '02',
    title: 'Definição do nome Ecolumi',
    dateOrStatus: '28 de abril de 2026',
    description:
      'União entre ecologia e iluminação: a luz que nasce não apenas da lâmpada, mas do cuidado ambiental e da conscientização coletiva.',
    confirmed: true,
  },
  {
    id: 'step-3',
    stepNumber: '03',
    title: 'Escolha das cores laranja e branco',
    dateOrStatus: '28 de abril de 2026',
    description:
      'O laranja como expressão de calor, energia criativa e acolhimento humano; o branco como símbolo de luz, clareza, espaço e transparência de propósitos.',
    confirmed: true,
  },
  {
    id: 'step-4',
    stepNumber: '04',
    title: 'Pesquisas sobre sustentabilidade e comunidade',
    dateOrStatus: '5 de maio de 2026',
    description:
      'Mapeamento das necessidades do território de Itaquera, identificação de materiais disponíveis e estudo de métodos educativos acessíveis a jovens e adultos.',
    confirmed: true,
  },
  {
    id: 'step-5',
    stepNumber: '05',
    title: 'Construção do primeiro modelo',
    dateOrStatus: 'De 2 a 16 de junho de 2026',
    description:
      'Desenvolvimento do protótipo inaugural: montagem iniciada em 2 de junho e finalizada com sucesso em 16 de junho. Dezenas de palitos sobrepostos em camadas calculadas, testando colagem, estabilidade mecânica e difusão de luz.',
    confirmed: true,
  },
  {
    id: 'step-6',
    stepNumber: '06',
    title: 'Criação dos canais de divulgação — Instagram',
    dateOrStatus: '19 de agosto de 2026',
    description:
      'Lançamento do perfil oficial (@ecolumi_) e canal institucional para documentar abertamente cada etapa do processo e atrair primeiros voluntários e parceiros.',
    confirmed: true,
  },
  {
    id: 'step-7',
    stepNumber: '07',
    title: 'Próximos passos e oficinas',
    dateOrStatus: 'Planejamento em andamento',
    description:
      'Estruturação das primeiras oficinas práticas comunitárias em Itaquera para ensinar o método de montagem e debater consumo sustentável com a vizinhança.',
    confirmed: false,
  },
];

export const HOW_WE_DO_STEPS: HowWeDoStep[] = [
  {
    id: 'how-1',
    number: '01',
    verb: 'Reaproveitar.',
    description: 'Selecionamos materiais simples e pensamos em novas possibilidades para eles.',
    details: 'Coleta consciente e seleção minuciosa de palitos de madeira e componentes reutilizáveis, ressignificando resíduos urbanos.',
  },
  {
    id: 'how-2',
    number: '02',
    verb: 'Construir.',
    description: 'Organizamos os palitos, testamos formatos e desenvolvemos a luminária manualmente.',
    details: 'Trabalho manual paciente, onde cada fileira de palitos é alinhada com cola atóxica formando padrões geométricos que estruturam o corpo da peça.',
  },
  {
    id: 'how-3',
    number: '03',
    verb: 'Aprender.',
    description: 'O processo é usado para estimular criatividade, conhecimento e educação ambiental.',
    details: 'Mais que produzir um objeto, cada etapa convida à reflexão sobre física da luz, paciência artesanal e consumo responsável de recursos.',
  },
  {
    id: 'how-4',
    number: '04',
    verb: 'Compartilhar.',
    description: 'Apresentamos o resultado à comunidade e incentivamos novas pessoas a participar.',
    details: 'A luminária final ilumina casas, espaços de convivência e rodas de conversa, inspirando vizinhos e parceiros a colocarem as mãos na massa.',
  },
];

export const IMPACT_DIMENSIONS: ImpactDimension[] = [
  {
    id: 'dim-ambiental',
    title: 'Ambiental',
    shortDesc: 'Incentivo ao reaproveitamento e ao consumo consciente',
    longDesc:
      'Desafia a cultura do descarte imediato ao demonstrar que materiais orgânicos simples, como palitos de sorvete, podem ter ciclo de vida longo e nobre.',
  },
  {
    id: 'dim-educacional',
    title: 'Educacional',
    shortDesc: 'Aprendizado por meio da prática e da construção',
    longDesc:
      'Metodologia mão na massa que desenvolve raciocínio espacial, noções básicas de eletricidade segura e sensibilização ambiental prática.',
  },
  {
    id: 'dim-comunitario',
    title: 'Comunitário',
    shortDesc: 'Aproximação com moradores, estudantes e parceiros de Itaquera',
    longDesc:
      'Fortalecimento dos laços de vizinhança na Zona Leste paulistana através de encontros que unem diferentes gerações em torno de um mesmo projeto.',
  },
  {
    id: 'dim-criativo',
    title: 'Criativo',
    shortDesc: 'Valorização do trabalho manual e da criação de soluções acessíveis',
    longDesc:
      'Autonomia criativa ao provar que o belo e o funcional não dependem de maquinários caros ou insumos inacessíveis, mas do olhar e do método.',
  },
];

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'met-1',
    value: '50+',
    unit: 'luminárias',
    label: 'Meta inaugural de luminárias',
    status: 'Produção comunitária em curso',
  },
  {
    id: 'met-2',
    value: '100%',
    unit: 'biodegradável',
    label: 'Palitos e madeira de reflorestamento',
    status: 'Matéria-prima limpa e atóxica',
  },
  {
    id: 'met-3',
    value: 'Zona Leste',
    unit: 'Itaquera',
    label: 'Território de atuação comunitária',
    status: 'Oficinas presenciais em SP',
  },
  {
    id: 'met-4',
    value: '4W LED',
    unit: 'baixo consumo',
    label: 'Segurança elétrica e luz fria',
    status: 'Iluminação consciente',
  },
];

export const PROTOTYPE_PHOTOS: LampPhoto[] = [
  {
    id: 'photo-hero-view',
    title: 'Luminária Artesanal Ecolumi',
    caption: 'Cúpula e estrutura vazada construídas com sobreposição manual de palitos de madeira em padrão circular.',
    alt: 'Luminária artesanal feita com palitos de sorvete pela Ecolumi - vista geral',
    imageSrc: heroLampImg,
    tag: 'Estrutura & Design',
  },
  {
    id: 'photo-lit-view',
    title: 'Difusão & Iluminação Acesa',
    caption: 'Luminária acesa emitindo brilho suave e aconchegante, projetando sombras geométricas no ambiente.',
    alt: 'Luminária da Ecolumi acesa com luz âmbar suave',
    imageSrc: lampLitImg,
    tag: 'Iluminação Acesa',
  },
  {
    id: 'photo-hands-assembly',
    title: 'Oficina de Montagem Manual',
    caption: 'Processo educativo em bancada: alinhamento minucioso dos palitos, colagem atóxica e nivelamento.',
    alt: 'Mãos em oficina prática montando a luminária de palitos',
    imageSrc: processHandsImg,
    tag: 'Processo & Mão na Massa',
  },
  {
    id: 'photo-detail-joints',
    title: 'Detalhes dos Encaixes em Madeira',
    caption: 'Close-up da trama geométrica intercalada, permitindo circulação contínua de ar e durabilidade.',
    alt: 'Detalhe dos encaixes e texturas dos palitos de madeira da luminária',
    imageSrc: lampDetailImg,
    tag: 'Acabamento & Detalhes',
  },
];

export const TECHNICAL_SPECS: TechnicalSpecItem[] = [
  {
    label: 'Materiais principais',
    value: 'Palitos de madeira clara selecionados, cola vinílica atóxica de alta aderência (PVA) e base de nivelamento.',
    editableNote: 'Insumos 100% atóxicos e seguros para manuseio em oficinas educativas.',
  },
  {
    label: 'Tempo de montagem artesanal',
    value: 'Ciclo completo de montagem, alinhamento e cura da estrutura realizado em módulos práticos.',
    editableNote: 'Cada etapa respeita o tempo necessário de secagem para garantir rigidez estrutural.',
  },
  {
    label: 'Tipo de iluminação recomendada',
    value: 'Lâmpada LED fria de baixa potência (4W a 6W, bocal universal E27, bivolt). Consumo elétrico mínimo.',
    editableNote: 'O uso exclusivo de LED frio elimina riscos térmicos e garante eficiência energética máxima.',
  },
  {
    label: 'Cuidados e manutenção',
    value: 'Manter em ambiente interno arejado e seco; limpar com pano seco ou pincel macio.',
    editableNote: 'Fiação elétrica montada com plugue e interruptor com certificação de conformidade.',
  },
  {
    label: 'Conceito de design',
    value: 'Geometria radial vazada que dissipa calor e cria desenhos de luz acolhedores no espaço.',
    editableNote: 'Design aberto e replicável, pensado para democratizar o fazer artesanal.',
  },
];

export const PARTICIPATION_METHODS: ParticipationMethod[] = [
  {
    id: 'part-1',
    title: 'Acompanhar e compartilhar o projeto',
    description: 'Divulgue os passos da Ecolumi para amigos, escolas e iniciativas locais para ampliar o alcance da mensagem ecológica.',
    badge: 'Disseminação',
  },
  {
    id: 'part-2',
    title: 'Participar de oficinas',
    description: 'Aprenda a construir sua própria luminária com palitos de sorvete e compartilhe momentos de aprendizado e convivência.',
    badge: 'Mão na massa',
  },
  {
    id: 'part-3',
    title: 'Apoiar com materiais',
    description: 'Doações de palitos limpos de madeira, colas atóxicas, cabos encapados e lâmpadas LED frias para as oficinas comunitárias.',
    badge: 'Insumos',
  },
  {
    id: 'part-4',
    title: 'Oferecer uma parceria',
    description: 'Escolas, centros culturais, cooperativas e organizações de Itaquera e da Zona Leste que queiram sediar atividades.',
    badge: 'Território',
  },
  {
    id: 'part-5',
    title: 'Divulgar ações da ONG',
    description: 'Ajude a cobrir fotos das oficinas, produzir cartazes para os bairros ou escrever sobre sustentabilidade popular.',
    badge: 'Comunicação',
  },
  {
    id: 'part-6',
    title: 'Contribuir como voluntário',
    description: 'Seja facilitando encontros, organizando o espaço ou apoiando o planejamento pedagógico das atividades.',
    badge: 'Coletivo',
  },
];

export const CONTACT_INFO = {
  city: 'Itaquera, São Paulo — SP',
  address: 'Itaquera, Zona Leste de São Paulo — SP',
  email: 'ecolumiic@gmail.com',
  instagramUrl: 'https://www.instagram.com/ecolumi_?stkn=MXcwNjNjMmtmbTJ6MA==',
  instagramHandle: '@ecolumi_',
  territoryDescription: 'Atuação comunitária e oficinas em polos sociais e culturais de Itaquera, Zona Leste de São Paulo.',
};
