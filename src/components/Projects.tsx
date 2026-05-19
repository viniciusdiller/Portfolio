import { useEffect, useRef } from "react";
import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import SplitTitle from "./SplitTitle";
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
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const destaqueRef = useRef<HTMLDivElement>(null);
  const normalGridRef = useRef<HTMLDivElement>(null);
  const isPt = language === "pt";

  const projects = [
    {
      title: "MEIdeSaquá",
      description: isPt ? 'Sistema de gestão e cadastro para MEIs de Saquarema. Ganhou 1° lugar do Prêmio PSPE "Sala do Empreendedor" em 2026.' : 'Management system for MEIs in Saquarema. Won 1st place at PSPE Award "Sala do Empreendedor" in 2026.',
      image: meiDeSaqua, technologies: sharedGovTechStack, liveUrl: "https://meidesaqua.saquarema.rj.gov.br",
      destaque: true, contribuitor: "viniciusvalledev", award: "1° lugar • Prêmio PSPE 2026",
    },
    {
      title: "AquiTemODS",
      description: isPt ? 'Plataforma digital para a Prefeitura de Saquarema focada nos ODS da ONU. Ganhou 2° lugar na categoria "Gestão Inovadora".' : 'Digital platform for Saquarema City Hall focused on UN SDGs. Won 2nd place in "Innovative Management" category.',
      image: aquiTemOds, technologies: sharedGovTechStack, liveUrl: "https://aquitemods.saquarema.rj.gov.br",
      destaque: true, contribuitor: "viniciusvalledev", award: "2° lugar • Gestão Inovadora",
    },
    {
      title: "Rodízio Race",
      description: isPt ? "Plataforma gamificada para encontros sociais em rodízios. Salas privadas, avatares, ranking ao vivo e feed de fotos." : "Gamified platform for all-you-can-eat restaurant gatherings. Private rooms, avatars, live ranking and photo feed.",
      image: RodizioRace, technologies: ["TypeScript", "Supabase", "API"], liveUrl: "https://rodiziorace.mechama.eu/", destaque: false, contribuitor: "ramorimdias",
    },
    {
      title: "Rafael Rodrigues Imóveis",
      description: isPt ? "Site imobiliário com painel admin exclusivo para o corretor." : "Real estate website with exclusive admin panel for the broker.",
      image: RafaelROdrigues, technologies: sharedGovTechStack, liveUrl: "https://rafaelrodriguesimoveis.com.br/", destaque: false, contribuitor: "viniciusvalledev",
    },
    {
      title: "APG Empresa",
      description: isPt ? "Site institucional com área admin: posts, moderação de comentários e gestão de usuários." : "Institutional site with admin area: posts, comment moderation, user management.",
      image: APGEmpresa, technologies: sharedGovTechStack, liveUrl: "https://apgempresa.com/", destaque: false, contribuitor: "SouzaDioggo, arthurfrattani7",
    },
    {
      title: "Rancho AFG",
      description: isPt ? "Sistema de gestão para o Rancho AFG." : "Management system for Rancho AFG.",
      image: RanchoAFG, technologies: ["React", "TypeScript", "Node.js", "Supabase"], liveUrl: "https://rancho-afg.vercel.app/", destaque: false,
    },
    {
      title: isPt ? "Analisador de E-mails com IA" : "AI Email Analyzer",
      description: isPt ? "Ferramenta de IA para analisar e categorizar e-mails automaticamente." : "AI tool to automatically analyze and categorize emails.",
      image: AnaliseEmail, technologies: ["JS", "Python", "HTML", "CSS"], liveUrl: "https://autou-five.vercel.app/", destaque: false,
    },
    {
      title: isPt ? "Busca de Atletas Olímpicos 2024" : "2024 Olympic Athletes Search",
      description: isPt ? "App para buscar informações sobre atletas das Olimpíadas 2024." : "App to search info about 2024 Olympics athletes.",
      image: Olimpiada, technologies: ["JS", "HTML", "CSS"], liveUrl: "https://olimpiadas-ashen-pi.vercel.app/", destaque: false,
    },
    {
      title: isPt ? "Site de Semi Joias" : "Semi-Jewelry Store",
      description: isPt ? "Site de venda para marca de semi joias." : "Sales website for a semi-jewelry brand.",
      image: SiteSemiJoia, technologies: ["JS", "HTML", "CSS"], liveUrl: "https://site-semi-joias.vercel.app/", destaque: false,
    },
  ];

  const destaqueProjects = projects.filter((p) => p.destaque);
  const normalProjects = projects.filter((p) => !p.destaque);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(dividerRef.current,
        { scaleX: 0, transformOrigin: "center" },
        { scaleX: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: dividerRef.current, start: "top 88%" } }
      );
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: subtitleRef.current, start: "top 88%" } }
      );

      // Destaque cards — alternating slide in
      if (destaqueRef.current) {
        Array.from(destaqueRef.current.children).forEach((child, i) => {
          gsap.fromTo(child,
            { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
            { opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
              scrollTrigger: { trigger: child, start: "top 88%" } }
          );
        });
      }

      // Normal grid — stagger with scale + blur
      if (normalGridRef.current) {
        gsap.fromTo(
          normalGridRef.current.children,
          { opacity: 0, y: 50, scale: 0.92, filter: "blur(6px)" },
          { opacity: 1, y: 0, scale: 1, filter: "blur(0px)",
            duration: 0.55, ease: "power3.out", stagger: 0.09,
            scrollTrigger: { trigger: normalGridRef.current, start: "top 88%" } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <SplitTitle as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {`${t.projects.title} ${t.projects.title_highlight}`}
          </SplitTitle>
          <div ref={dividerRef} className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p ref={subtitleRef} className="text-lg text-muted-foreground max-w-2xl mx-auto opacity-0">{t.projects.subtitle}</p>
        </div>

        <div ref={destaqueRef} className="space-y-12 mb-20">
          {destaqueProjects.map((project, index) => (
            <Card key={`destaque-${index}`} className="overflow-hidden card-glass border-primary/20 hover:border-primary/50 transition-all duration-300 group shadow-lg opacity-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 lg:h-auto min-h-[300px]">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </a>
                  <div className="absolute top-4 right-4 z-20 flex flex-col gap-2 items-end">
                    <Badge className="bg-primary text-primary-foreground border-0 shadow-lg px-3 py-1 text-sm">{t.projects.featured_badge}</Badge>
                    {project.award && <Badge className="bg-secondary text-secondary-foreground border-0 shadow-lg px-3 py-1 text-xs">{project.award}</Badge>}
                  </div>
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-between bg-card/50">
                  <div>
                    <h3 className="text-3xl font-bold group-hover:text-primary transition-colors mb-4">{project.title}</h3>
                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, ti) => (
                        <Badge key={ti} variant="secondary" className="bg-primary/5 text-primary hover:bg-primary/10 border-primary/20">{tech}</Badge>
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
                      <span className="text-muted-foreground text-sm">{t.projects.collaboration}: <span className="font-medium text-foreground">{project.contribuitor}</span></span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {normalProjects.length > 0 && (
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-border" />
            <h3 className="text-2xl font-bold">{t.projects.others_title} <span className="text-gradient">{t.projects.others_highlight}</span></h3>
            <div className="h-[1px] flex-1 bg-border" />
          </div>
        )}

        <div ref={normalGridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {normalProjects.map((project, index) => (
            <Card key={`normal-${index}`} className="overflow-hidden card-glass hover:border-primary/50 transition-all duration-300 group hover:scale-[1.03] opacity-0">
              <div className="relative h-48 overflow-hidden">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.map((tech, ti) => (
                    <Badge key={ti} variant="outline" className="text-xs border-primary/20 text-primary/80">{tech}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10 p-0 h-auto">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-4 w-4" />{t.projects.view}
                    </a>
                  </Button>
                  {project.contribuitor && (
                    <span className="text-xs text-muted-foreground"><Code2 className="inline h-3 w-3 mr-1" />{project.contribuitor}</span>
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
