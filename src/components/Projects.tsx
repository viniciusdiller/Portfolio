import { useEffect, useRef } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import aquiTemOds from "@/assets/AquiTemODS.png";
import meiDeSaqua from "@/assets/MEIdeSaqua.png";
import RodizioRace from "@/assets/RodizioRace.png";
import RanchoAFG from "@/assets/RanchoAfg.png";
import AnaliseEmail from "@/assets/AnaliseEmail.png";
import Olimpiada from "@/assets/Olimpiada.png";
import SiteSemiJoia from "@/assets/SiteSemiJoia.png";
import APGEmpresa from "@/assets/APGEmpresa.png";
import RafaelROdrigues from "@/assets/RafaelRodrigues.png";

gsap.registerPlugin(ScrollTrigger);

const sharedGovTechStack = ["React", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS"];

const Projects = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const destaqueRef = useRef<HTMLDivElement>(null);
  const normalGridRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "MEIdeSaquá",
      description: t.language === "pt"
        ? 'Sistema de gestão e cadastro para Microempreendedores Individuais (MEI) de Saquarema. Plataforma que facilita o registro, acompanhamento e suporte aos MEIs locais. Ganhou 1° lugar do Prêmio PSPE "Sala do Empreendedor" em 2026.'
        : 'Management and registration system for Individual Micro-entrepreneurs (MEI) in Saquarema. Platform that facilitates registration, tracking, and support for local MEIs. Won 1st place at the PSPE Award "Sala do Empreendedor" in 2026.',
      image: meiDeSaqua, technologies: sharedGovTechStack,
      liveUrl: "https://meidesaqua.saquarema.rj.gov.br", destaque: true,
      contribuitor: "viniciusvalledev", award: "1° lugar • Prêmio PSPE 2026",
    },
    {
      title: "AquiTemODS",
      description: t.language === "pt"
        ? 'Plataforma digital para a Prefeitura de Saquarema focada nos Objetivos de Desenvolvimento Sustentável. Sistema completo de gestão e transparência de ações municipais alinhadas aos ODS da ONU. Ganhou 2° lugar na categoria "Gestão Inovadora".'
        : 'Digital platform for the Saquarema City Hall focused on the Sustainable Development Goals. Complete management and transparency system for municipal actions aligned with UN SDGs. Won 2nd place in the "Innovative Management" category.',
      image: aquiTemOds, technologies: sharedGovTechStack,
      liveUrl: "https://aquitemods.saquarema.rj.gov.br", destaque: true,
      contribuitor: "viniciusvalledev", award: "2° lugar • Gestão Inovadora",
    },
    {
      title: "Rodízio Race",
      description: t.language === "pt"
        ? "Uma plataforma projetada para gamificar encontros sociais em rodízios. O site permite a criação de salas privadas, escolha de avatares personalizados, um ranking ao vivo e um feed de fotos para validação dos pontos!"
        : "A platform designed to gamify social gatherings at all-you-can-eat restaurants. It enables private room creation, custom avatars, a live ranking, and a photo feed for point validation!",
      image: RodizioRace, technologies: ["TypeScript", "Supabase", "API", "Translate"],
      liveUrl: "https://rodiziorace.mechama.eu/", destaque: false, contribuitor: "ramorimdias",
    },
    {
      title: "Rafael Rodrigues Imóveis",
      description: t.language === "pt"
        ? "Site imobiliário com painel administrativo exclusivo para o corretor, que possui controle total sobre as informações exibidas no site: cadastro e edição de imóveis, gerênciãmento de fotos, valores e detalhes de cada listagem, tudo sem depender de terceiros."
        : "Real estate website with an exclusive admin panel for the broker, giving full control over the site's displayed information: property registration, editing, photo management, pricing, and listing details — all without depending on third parties.",
      image: RafaelROdrigues, technologies: sharedGovTechStack,
      liveUrl: "https://rafaelrodriguesimoveis.com.br/", destaque: false, contribuitor: "viniciusvalledev",
    },
    {
      title: "APG Empresa",
      description: t.language === "pt"
        ? "Site institucional com área administrativa completa: sistema de posts com criação, edição e categorização de conteúdo, moderação de comentários e gestão de usuários."
        : "Institutional website with a full admin area: post system with content creation, editing and categorization, comment moderation, and user management.",
      image: APGEmpresa, technologies: sharedGovTechStack,
      liveUrl: "https://apgempresa.com/", destaque: false, contribuitor: "SouzaDioggo, arthurfrattani7",
    },
    {
      title: "Rancho AFG",
      description: t.language === "pt"
        ? "Sistema de gestão para o Rancho AFG, facilitando o controle de aulas e comunicação com os membros."
        : "Management system for Rancho AFG, facilitating class control and member communication.",
      image: RanchoAFG, technologies: ["React", "TypeScript", "Node.js", "Supabase"],
      liveUrl: "https://rancho-afg.vercel.app/", destaque: false,
    },
    {
      title: t.language === "pt" ? "Analisador de E-mails com IA" : "AI Email Analyzer",
      description: t.language === "pt"
        ? "Ferramenta que utiliza inteligência artificial para analisar e categorizar e-mails automaticamente, melhorando a produtividade e organização da caixa de entrada."
        : "Tool that uses artificial intelligence to automatically analyze and categorize emails, improving inbox productivity and organization.",
      image: AnaliseEmail, technologies: ["JS", "Python", "HTML", "CSS"],
      liveUrl: "https://autou-five.vercel.app/", destaque: false,
    },
    {
      title: t.language === "pt" ? "Busca de Atletas Olímpicos 2024" : "2024 Olympic Athletes Search",
      description: t.language === "pt"
        ? "Aplicação web que permite buscar informações detalhadas sobre atletas das Olimpíadas de 2024."
        : "Web application that allows searching for detailed information about athletes from the 2024 Olympics.",
      image: Olimpiada, technologies: ["JS", "HTML", "CSS"],
      liveUrl: "https://olimpiadas-ashen-pi.vercel.app/", destaque: false,
    },
    {
      title: t.language === "pt" ? "Site de Semi Joias" : "Semi-Jewelry Store",
      description: t.language === "pt"
        ? "Site de venda para uma marca de semi joias, apresentando produtos e opções de contato para clientes interessados."
        : "Sales website for a semi-jewelry brand, showcasing products and contact options for interested customers.",
      image: SiteSemiJoia, technologies: ["JS", "HTML", "CSS"],
      liveUrl: "https://site-semi-joias.vercel.app/", destaque: false,
    },
  ];

  const destaqueProjects = projects.filter((p) => p.destaque);
  const normalProjects = projects.filter((p) => !p.destaque);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: headerRef.current, start: "top 85%" } }
      );
      if (destaqueRef.current) {
        gsap.fromTo(
          destaqueRef.current.children,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.18,
            scrollTrigger: { trigger: destaqueRef.current, start: "top 85%" } }
        );
      }
      if (normalGridRef.current) {
        gsap.fromTo(
          normalGridRef.current.children,
          { opacity: 0, y: 40, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out", stagger: 0.1,
            scrollTrigger: { trigger: normalGridRef.current, start: "top 85%" } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div ref={headerRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">{t.projects.title} {t.projects.title_highlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.projects.subtitle}</p>
        </div>

        <div ref={destaqueRef} className="space-y-12 mb-20">
          {destaqueProjects.map((project, index) => (
            <Card key={`destaque-${index}`} className="overflow-hidden card-glass border-primary/20 hover:border-primary/50 transition-all duration-300 group shadow-lg opacity-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 lg:h-auto min-h-[300px]">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </a>
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                    <Badge className="bg-primary text-primary-foreground border-0 shadow-lg px-3 py-1 text-sm">{t.projects.featured_badge}</Badge>
                    {project.award && (
                      <Badge className="bg-secondary text-secondary-foreground border-0 shadow-lg px-3 py-1 text-xs">{project.award}</Badge>
                    )}
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-between bg-card/50">
                  <div>
                    <h3 className="text-3xl font-bold group-hover:text-primary transition-colors mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 border-primary/20">{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mt-auto">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-neon transition-all w-full sm:w-auto">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />{t.projects.view}
                      </a>
                    </Button>
                    {project.contribuitor && (
                      <span className="text-muted-foreground text-sm">
                        {t.projects.collaboration}: <span className="font-medium text-foreground">{project.contribuitor}</span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {normalProjects.length > 0 && (
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-border"></div>
            <h3 className="text-2xl font-bold">{t.projects.others_title} <span className="text-gradient">{t.projects.others_highlight}</span></h3>
            <div className="h-[1px] flex-1 bg-border"></div>
          </div>
        )}

        <div ref={normalGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {normalProjects.map((project, index) => (
            <Card key={`normal-${index}`} className="overflow-hidden card-glass hover:border-primary/50 transition-all duration-300 group hover:scale-[1.02] opacity-0">
              <div className="relative h-48 overflow-hidden">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs border-primary/20 text-primary/80">{tech}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-4 w-4" />{t.projects.view}
                    </a>
                  </Button>
                  {project.contribuitor && (
                    <span className="text-xs text-muted-foreground">
                      <Code2 className="inline h-3 w-3 mr-1" />{project.contribuitor}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
