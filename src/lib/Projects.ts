import aquiTemOds from "@/assets/AquiTemODS.png";
import meiDeSaqua from "@/assets/MEIdeSaqua.png";
import Apaixonese from "@/assets/Apaixonese.png";
import RafaelROdrigues from "@/assets/RafaelRodrigues.png";
import VivaMar from "@/assets/VivaMar.png";
import RodizioRace from "@/assets/RodizioRace.png";
import PousadaPratagy from "@/assets/PousadaPratagy.png";
import AnaliseEmail from "@/assets/AnaliseEmail.png";
import Olimpiada from "@/assets/Olimpiada.png";
import APGEmpresa from "@/assets/APGEmpresa.png";
import QR from "@/assets/QR.png";

const sharedGovTechStack = [
  "React",
  "TypeScript",
  "Node.js",
  "MySQL",
  "Tailwind CSS",
];

export type ProjectCategory = "govtech" | "systems" | "commercial";

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  repositoryUrl?: string;
  isPrivateRepo?: boolean;
  destaque: boolean;
  category: ProjectCategory;
  contribuitor?: string;
  award?: string;
  scope?: string;
  context?: string;
  highlights?: string[];
};

export const getProjects = (isPt: boolean): Project[] => [
  {
    title: "MEIdeSaquá",
    description: isPt
      ? 'Plataforma oficial de cadastro e gestão para microempreendedores individuais de Saquarema. Premiada com o 1° lugar no Prêmio PSPE 2026 (Sala do Empreendedor).'
      : 'Official registration and management platform for micro-entrepreneurs in Saquarema. Awarded 1st place at the 2026 PSPE Award.',
    image: meiDeSaqua,
    technologies: sharedGovTechStack,
    liveUrl: "https://meidesaqua.saquarema.rj.gov.br",
    destaque: true,
    category: "govtech",
    contribuitor: "viniciusvalledev",
    repositoryUrl: "https://github.com/viniciusdiller/MeideSaqua-Front",
    award: "1° lugar • Prêmio PSPE 2026",
    scope: isPt ? "Desenvolvimento Full-Stack & Interface" : "Full-Stack Development & UI",
    context: isPt
      ? "Portal oficial desenvolvido para a Prefeitura de Saquarema para centralizar cadastro, emissão de guias e suporte a microempreendedores locais. Premiado em âmbito estadual."
      : "Official portal built for Saquarema City Hall to centralize registrations, tax slips, and local business support.",
    highlights: isPt
      ? [
          "1° lugar no Prêmio PSPE 2026 (Sala do Empreendedor)",
          "Mais de 1.000 cadastros suportados em produção contínua",
          "Painel administrativo com relatórios e filtros para a gestão pública",
        ]
      : [
          "1st place at 2026 PSPE Award",
          "Over 1,000 active registrations handled in production",
          "Reporting dashboard with filters for municipal administration",
        ],
  },
  {
    title: "AquiTemODS",
    description: isPt
      ? 'Plataforma municipal para mapeamento e acompanhamento dos Objetivos de Desenvolvimento Sustentável (ODS/ONU). Premiada com o 2° lugar na categoria Gestão Inovadora.'
      : 'Municipal platform tracking UN Sustainable Development Goals for Saquarema City Hall. Awarded 2nd place in Innovative Management.',
    image: aquiTemOds,
    technologies: sharedGovTechStack,
    liveUrl: "https://aquitemods.saquarema.rj.gov.br",
    destaque: true,
    category: "govtech",
    contribuitor: "viniciusvalledev",
    repositoryUrl: "https://github.com/viniciusdiller/AquiTemODS-Front",
    award: "2° lugar • Gestão Inovadora",
    scope: isPt ? "Frontend & Integração com APIs Governamentais" : "Frontend & Gov API Integrations",
    context: isPt
      ? "Plataforma pública de monitoramento e transparência das iniciativas municipais alinhadas aos Objetivos de Desenvolvimento Sustentável da ONU."
      : "Public dashboard tracking municipal initiatives aligned with the UN Sustainable Development Goals.",
    highlights: isPt
      ? [
          "2° lugar na categoria Gestão Inovadora",
          "Mapeamento visual e indicadores de impacto socioeconômico",
          "Interface fluida com foco em acessibilidade e responsividade",
        ]
      : [
          "2nd place in Innovative Management category",
          "Visual impact indicators and interactive data mapping",
          "Accessible, high-performance responsive interface",
        ],
  },
  {
    title: "Apaixonese",
    description: isPt
      ? "Plataforma turística da Secretaria de Turismo de Saquarema para consulta de estabelecimentos credenciados pelo Cadastur, com mapeamento e integração de dados."
      : "Tourism platform for Saquarema Tourism Secretariat to explore Cadastur-certified establishments with live business mapping.",
    image: Apaixonese,
    technologies: ["React", "NestJS", "MySQL", "API", "Jest"],
    liveUrl: "https://apaixonese.saquarema.rj.gov.br/",
    destaque: false,
    category: "govtech",
    contribuitor: "viniciusvalledev",
    repositoryUrl: "https://github.com/viniciusdiller/ApaixoneSe-Front",
    scope: isPt ? "Arquitetura Backend & Frontend" : "Backend Architecture & Frontend",
    context: isPt
      ? "Guia turístico oficial da Secretaria de Turismo de Saquarema para consulta de rede hoteleira, restaurantes e atrativos cadastrados no Cadastur."
      : "Saquarema Tourism Secretariat official guide mapping Cadastur-certified hotels, restaurants, and attractions.",
    highlights: isPt
      ? [
          "Backend estruturado com NestJS e testes unitários em Jest",
          "Modelagem de dados relacional em MySQL",
          "Filtros rápidos por categoria e localização",
        ]
      : [
          "Modular NestJS backend with Jest unit test coverage",
          "Relational MySQL schema design",
          "Fast category and geographical filtering",
        ],
  },
  {
    title: "Rafael Rodrigues Imóveis",
    description: isPt
      ? "Plataforma imobiliária com catálogo dinâmico de imóveis, filtros avançados e painel administrativo exclusivo para gestão de leads e anúncios."
      : "Real estate portal featuring dynamic property catalog, advanced search filters, and private admin management panel.",
    image: RafaelROdrigues,
    technologies: sharedGovTechStack,
    liveUrl: "https://rafaelrodriguesimoveis.com/",
    destaque: false,
    category: "commercial",
    contribuitor: "viniciusvalledev",
    repositoryUrl:
      "https://github.com/viniciusvalledev/LandingPage-imobiliaria",
    isPrivateRepo: true,
    scope: isPt ? "Desenvolvimento Full-Stack (Cliente)" : "Full-Stack Web (Private Client)",
    context: isPt
      ? "Portal comercial para corretora imobiliária com catálogo dinâmico de imóveis, busca com filtros avançados e painel restrito para administração."
      : "Commercial real estate portal with property catalog, search filters, and private admin management dashboard.",
    highlights: isPt
      ? [
          "Painel exclusivo para gerenciamento de imóveis e captações",
          "Formulários de contato direto e captura de leads",
          "Código privado sob termo de confidencialidade",
        ]
      : [
          "Custom inventory and lead capture admin panel",
          "Direct contact channels and lead management",
          "Private repository under NDA",
        ],
  },
  {
    title: "Pousada Pratagy",
    description: isPt
      ? "Plataforma web para a Pousada Pratagy em Saquarema com catálogo visual de acomodações, integração direta para reservas e alta pontuação de performance."
      : "Modern web platform for Pousada Pratagy in Saquarema featuring room catalogs, direct booking channels, and optimized performance scores.",
    image: PousadaPratagy,
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://pousadapratagy.com/",
    destaque: false,
    category: "commercial",
    repositoryUrl: "https://github.com/viniciusdiller/Landing-Page-Pratagy",
    isPrivateRepo: true,
    scope: isPt ? "Frontend & Otimização de Performance" : "Frontend & Web Performance",
    context: isPt
      ? "Website institucional para a Pousada Pratagy em Saquarema, desenvolvido com foco em velocidade, apresentação de acomodações e canais diretos de reserva."
      : "Modern web platform for Pousada Pratagy in Saquarema featuring room presentations, local guides, and direct bookings.",
    highlights: isPt
      ? [
          "Desenvolvido com React, Next.js e Tailwind CSS",
          "Otimização de imagens e pontuação de carregamento ágil",
          "Código privado sob termo comercial",
        ]
      : [
          "Built with React, Next.js, TypeScript and Tailwind CSS",
          "Optimized asset loading and high lighthouse performance",
          "Private commercial repository",
        ],
  },
  {
    title: "VivaMar",
    description: isPt
      ? "Website institucional da Pousada VivaMar com área administrativa integrada para controle de reservas, quartos e suporte aos hóspedes."
      : "Guesthouse web platform with integrated administrative portal for booking management, room availability, and guest services.",
    image: VivaMar,
    technologies: ["React", "Next.js", "API"],
    liveUrl: "https://vivamarpousada.com/",
    destaque: false,
    category: "commercial",
    contribuitor: "viniciusvalledev",
    repositoryUrl: "https://github.com/viniciusdiller/Landing-Page-Viva-Mar",
    scope: isPt ? "Full-Stack Web (Cliente)" : "Full-Stack Web (Private Client)",
    context: isPt
      ? "Website para a Pousada VivaMar com área administrativa integrada para controle de quartos, reservas e informações turísticas."
      : "Guesthouse web platform featuring integrated admin controls for room availability and guest support.",
    highlights: isPt
      ? [
          "Painel administrativo para gestão de quartos e tarifas",
          "Design responsivo sob medida",
          "Integração com APIs de atendimento",
        ]
      : [
          "Dedicated admin panel for room management",
          "Custom responsive UI",
          "Integrated contact and messaging channels",
        ],
  },
  {
    title: "Rodízio Race",
    description: isPt
      ? "Aplicação web gamificada para encontros em rodízios, com sincronização em tempo real de salas privadas, avatares, feed de fotos e placar dinâmico via Supabase."
      : "Gamified real-time web application for dining events featuring private rooms, avatars, live scoreboards, and photo feeds via Supabase.",
    image: RodizioRace,
    technologies: ["TypeScript", "Supabase", "API"],
    liveUrl: "https://rodiziorace.mechama.eu/",
    destaque: false,
    category: "systems",
    contribuitor: "ramorimdias",
    repositoryUrl: "https://github.com/viniciusdiller/Corrida-Rodizio",
    scope: isPt ? "Full-Stack & Supabase Realtime" : "Full-Stack & Supabase Realtime",
    context: isPt
      ? "Aplicação social gamificada que conecta amigos em rodízios gastronômicos através de salas privadas, sincronização ao vivo e placares de consumo."
      : "Gamified social app connecting dining groups with real-time rooms, scoreboards, and photo uploads.",
    highlights: isPt
      ? [
          "Sincronização em tempo real via Supabase Realtime",
          "Salas privadas com avatares e placar dinâmico",
          "Feed de upload e exibição de fotos instantâneas",
        ]
      : [
          "Real-time state synchronization via Supabase Realtime",
          "Private room sessions with avatars and live rankings",
          "Instant photo feed and shared gallery",
        ],
  },
  {
    title: "APG Empresa",
    description: isPt
      ? "Portal corporativo com arquitetura modular, sistema de publicação editorial, moderação de comentários e controle de acesso baseado em funções."
      : "Corporate portal featuring modular architecture, editorial publishing CMS, comment moderation, and role-based access control.",
    image: APGEmpresa,
    technologies: sharedGovTechStack,
    liveUrl: "https://apgempresa.com/",
    destaque: false,
    category: "systems",
    contribuitor: "SouzaDioggo, arthurfrattani7",
    repositoryUrl: "https://github.com/SouzaDioggo/APG",
    scope: isPt ? "Full-Stack & Sistema Administrativo" : "Full-Stack & CMS Portal",
    context: isPt
      ? "Portal institucional corporativo contendo CMS interno para redação de artigos, moderação de comentários e controle de perfis de usuário."
      : "Corporate portal featuring internal CMS for content publication, comment moderation, and user management.",
    highlights: isPt
      ? [
          "Sistema de gerenciamento de conteúdo (CMS) proprietário",
          "Controle de permissões baseado em funções (RBAC)",
          "Desenvolvido em equipe com versionamento colaborativo",
        ]
      : [
          "Custom CMS publication engine",
          "Role-based access control (RBAC)",
          "Collaborative multi-contributor workflow",
        ],
  },
  {
    title: isPt ? "Analisador de E-mails com IA" : "AI Email Analyzer",
    description: isPt
      ? "Aplicação para processamento e classificação automatizada de e-mails, com extração de intenções e triagem operacional."
      : "Automated email triage and processing application leveraging NLP models for intent detection and category routing.",
    image: AnaliseEmail,
    technologies: ["JS", "Python", "HTML", "CSS"],
    liveUrl: "https://autou-five.vercel.app/",
    destaque: false,
    category: "systems",
    repositoryUrl:
      "https://github.com/viniciusdiller/Analisador-de-Emails-com-IA-integrada",
    scope: isPt ? "Engenharia de Software & NLP" : "Software Engineering & NLP",
    context: isPt
      ? "Ferramenta de automação que processa e-mails recebidos, analisa o conteúdo textual e categoriza a demanda automaticamente para triagem operacional."
      : "Operational automation tool processing incoming emails with NLP models to classify intents and route tickets.",
    highlights: isPt
      ? [
          "Triagem automatizada com redução de tempo manual",
          "Processamento de texto em lote com Python e JavaScript",
          "Interface web direta para visualização dos resultados",
        ]
      : [
          "Automated intent extraction and priority sorting",
          "Batch text analysis pipeline with Python and JavaScript",
          "Clean web UI for reviewing processed results",
        ],
  },
  {
    title: "Gerador de QR Code",
    description: isPt
      ? "Utilitário de geração e exportação de QR Codes em lote, integrado a planilhas de dados para automação de processos operacionais."
      : "Batch QR Code generation and export utility integrated with spreadsheet pipelines for workflow automation.",
    image: QR,
    technologies: ["Python", "Excel"],
    liveUrl: "https://github.com/viniciusdiller/Gerador-de-QR-Code",
    destaque: false,
    category: "systems",
    repositoryUrl: "https://github.com/viniciusdiller/Gerador-de-QR-Code",
    scope: isPt ? "Engenharia de Automação & Scripting" : "Automation Scripting & Utility",
    context: isPt
      ? "Utilitário desenvolvido para automação operacional de geração massiva de QR Codes a partir de tabelas de dados, agilizando rotinas de inventário e divulgação."
      : "Batch QR code generation tool reading data tables and exporting high-resolution codes for operational pipelines.",
    highlights: isPt
      ? [
          "Processamento automatizado de planilhas Excel em lote",
          "Exportação em alta definição pronta para impressão",
          "Script robusto em Python",
        ]
      : [
          "Automated batch spreadsheet parsing",
          "High-resolution print-ready exports",
          "Robust Python processing core",
        ],
  },
  {
    title: isPt
      ? "Busca de Atletas Olímpicos 2024"
      : "2024 Olympic Athletes Search",
    description: isPt
      ? "Aplicação interativa para consulta rápida e filtragem de atletas, modalidades e dados competitivos das Olimpíadas de Paris 2024."
      : "Interactive search application for quick querying and filtering of Olympic athlete profiles, sports, and stats from Paris 2024.",
    image: Olimpiada,
    technologies: ["JS", "HTML", "CSS"],
    liveUrl: "https://olimpiadas-ashen-pi.vercel.app/",
    destaque: false,
    category: "systems",
    scope: isPt ? "Frontend & Filtragem de Dados" : "Frontend & Data Querying",
    context: isPt
      ? "Aplicação de busca e visualização rápida com base nos atletas, modalidades e estatísticas das Olimpíadas de Paris 2024."
      : "Interactive query application filtering athletes, sports, and stats from the 2024 Paris Olympic Games.",
    highlights: isPt
      ? [
          "Busca instantânea e filtros por país e modalidade",
          "Interface dinâmica e responsiva sem dependências pesadas",
          "Construído com JavaScript moderno",
        ]
      : [
          "Instant search and multi-facet filtering",
          "Lightweight responsive interface",
          "Modern vanilla JavaScript architecture",
        ],
  },
];
