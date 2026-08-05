import aquiTemOds from "@/assets/AquiTemODS.png";
import meiDeSaqua from "@/assets/MEIdeSaqua.png";
import Apaixonese from "@/assets/Apaixonese.png";
import RafaelROdrigues from "@/assets/RafaelRodrigues.png";
import VivaMar from "@/assets/VivaMar.png";
import RodizioRace from "@/assets/RodizioRace.png";
import RanchoAFG from "@/assets/RanchoAfg.png";
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

export type Project = {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  repositoryUrl?: string;
  destaque: boolean;
  contribuitor?: string;
  award?: string;
};

export const getProjects = (isPt: boolean): Project[] => [
  {
    title: "MEIdeSaquá",
    description: isPt
      ? 'Sistema de gestão e cadastro para MEIs de Saquarema. Ganhou 1° lugar do Prêmio PSPE "Sala do Empreendedor" em 2026.'
      : 'Management system for MEIs in Saquarema. Won 1st place at PSPE Award "Sala do Empreendedor" in 2026.',
    image: meiDeSaqua,
    technologies: sharedGovTechStack,
    liveUrl: "https://meidesaqua.saquarema.rj.gov.br",
    destaque: true,
    contribuitor: "viniciusvalledev",
    repositoryUrl: "https://github.com/viniciusdiller/MeideSaqua-Front",
    award: "1° lugar • Prêmio PSPE 2026",
  },
  {
    title: "AquiTemODS",
    description: isPt
      ? 'Plataforma digital para a Prefeitura de Saquarema focada nos ODS da ONU. Ganhou 2° lugar na categoria "Gestão Inovadora".'
      : 'Digital platform for Saquarema City Hall focused on UN SDGs. Won 2nd place in "Innovative Management" category.',
    image: aquiTemOds,
    technologies: sharedGovTechStack,
    liveUrl: "https://aquitemods.saquarema.rj.gov.br",
    destaque: true,
    contribuitor: "viniciusvalledev",
    repositoryUrl: "https://github.com/viniciusdiller/AquiTemODS-Front",
    award: "2° lugar • Gestão Inovadora",
  },
  {
    title: "Apaixonese",
    description: isPt
      ? "Plataforma voltada para a Secretaria de Turismo. Onde os turistas podem ver estabelecimentos parceiros do Cadastur."
      : "A platform for the Tourism Secretariat that allows tourists to view Cadastur-registered partner establishments.",
    image: Apaixonese,
    technologies: ["React", "NestJS", "MySQL", "API", "Jest"],
    liveUrl: "https://apaixonese.saquarema.rj.gov.br/",
    destaque: false,
    contribuitor: "viniciusvalledev",
    repositoryUrl: "https://github.com/viniciusdiller/ApaixoneSe-Front",
  },
  {
    title: "Rafael Rodrigues Imóveis",
    description: isPt
      ? "Site imobiliário com painel admin exclusivo para o corretor."
      : "Real estate website with exclusive admin panel for the broker.",
    image: RafaelROdrigues,
    technologies: sharedGovTechStack,
    liveUrl: "https://rafaelrodriguesimoveis.com/",
    destaque: false,
    contribuitor: "viniciusvalledev",
    repositoryUrl:
      "https://github.com/viniciusvalledev/LandingPage-imobiliaria",
  },
  {
    title: "VivaMar",
    description: isPt
      ? "Site da pousada VivaMar com área administrativa para gestão de reservas, quartos e informações aos hóspedes."
      : "VivaMar guesthouse website featuring an admin area to manage bookings, rooms, and guest information.",
    image: VivaMar,
    technologies: ["React", "Next.js", "API"],
    liveUrl: "https://vivamarpousada.com/",
    destaque: false,
    contribuitor: "viniciusvalledev",
    repositoryUrl: "https://github.com/viniciusdiller/Landing-Page-Viva-Mar",
  },
  {
    title: "Rodízio Race",
    description: isPt
      ? "Plataforma gamificada para encontros sociais em rodízios. Salas privadas, avatares, ranking ao vivo e feed de fotos."
      : "Gamified platform for all-you-can-eat restaurant gatherings. Private rooms, avatars, live ranking and photo feed.",
    image: RodizioRace,
    technologies: ["TypeScript", "Supabase", "API"],
    liveUrl: "https://rodiziorace.mechama.eu/",
    destaque: false,
    contribuitor: "ramorimdias",
    repositoryUrl: "https://github.com/viniciusdiller/Corrida-Rodizio",
  },
  {
    title: "APG Empresa",
    description: isPt
      ? "Site institucional com área admin: posts, moderação de comentários e gestão de usuários."
      : "Institutional site with admin area: posts, comment moderation, user management.",
    image: APGEmpresa,
    technologies: sharedGovTechStack,
    liveUrl: "https://apgempresa.com/",
    destaque: false,
    contribuitor: "SouzaDioggo, arthurfrattani7",
    repositoryUrl: "https://github.com/SouzaDioggo/APG",
  },
  {
    title: "Rancho AFG",
    description: isPt
      ? "Sistema de gestão para o Rancho AFG."
      : "Management system for Rancho AFG.",
    image: RanchoAFG,
    technologies: ["React", "TypeScript", "Node.js", "Supabase"],
    liveUrl: "https://rancho-afg.vercel.app/",
    destaque: false,
    repositoryUrl: "https://github.com/viniciusdiller/Rancho-AFG",
  },
  {
    title: "Gerador de QR Code",
    description: isPt
      ? "Sistema de geração de QR Codes."
      : "QR Code generation system.",
    image: QR,
    technologies: ["Python", "Excel"],
    liveUrl: "https://github.com/viniciusdiller/Gerador-de-QR-Code",
    destaque: false,
    repositoryUrl: "https://github.com/viniciusdiller/Gerador-de-QR-Code",
  },
  {
    title: isPt ? "Analisador de E-mails com IA" : "AI Email Analyzer",
    description: isPt
      ? "Ferramenta de IA para analisar e categorizar e-mails automaticamente."
      : "AI tool to automatically analyze and categorize emails.",
    image: AnaliseEmail,
    technologies: ["JS", "Python", "HTML", "CSS"],
    liveUrl: "https://autou-five.vercel.app/",
    destaque: false,
    repositoryUrl:
      "https://github.com/viniciusdiller/Analisador-de-Emails-com-IA-integrada",
  },
  {
    title: isPt
      ? "Busca de Atletas Olímpicos 2024"
      : "2024 Olympic Athletes Search",
    description: isPt
      ? "App para buscar informações sobre atletas das Olimpíadas 2024."
      : "App to search info about 2024 Olympics athletes.",
    image: Olimpiada,
    technologies: ["JS", "HTML", "CSS"],
    liveUrl: "https://olimpiadas-ashen-pi.vercel.app/",
    destaque: false,
  },
  {
    title: isPt ? "Site de Semi Joias" : "Semi-Jewelry Store",
    description: isPt
      ? "Site de venda para marca de semi joias."
      : "Sales website for a semi-jewelry brand.",
    image: SiteSemiJoia,
    technologies: ["JS", "HTML", "CSS"],
    liveUrl: "https://site-semi-joias.vercel.app/",
    destaque: false,
  },
];
