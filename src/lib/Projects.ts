import aquiTemOds from "@/assets/AquiTemODS.png";
import meiDeSaqua from "@/assets/MEIdeSaqua.png";
import Apaixonese from "@/assets/Apaixonese.png";
import RafaelROdrigues from "@/assets/RafaelRodrigues.png";
import VivaMar from "@/assets/VivaMar.png";
import RodizioRace from "@/assets/RodizioRace.png";
import PousadaPratagy from "@/assets/PousadaPratagy.png";
import AnaliseEmail from "@/assets/AnaliseEmail.png";
import Olimpiada from "@/assets/Olimpiada.png";
import SiteSemiJoia from "@/assets/SiteSemiJoia.png";
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
  },
  {
    title: "Site de Semi Joias",
    description: isPt
      ? "E-commerce institucional e vitrine de produtos para marca de semi-joias, com foco em responsividade e catálogo de alta conversão."
      : "E-commerce showcase platform for jewelry brand, designed with mobile-first responsive layout and conversion-focused product display.",
    image: SiteSemiJoia,
    technologies: ["JS", "HTML", "CSS"],
    liveUrl: "https://site-semi-joias.vercel.app/",
    destaque: false,
    category: "commercial",
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
  },
];
