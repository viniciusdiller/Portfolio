import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aquiTemOds from "@/assets/AquiTemODS.png";
import meiDeSaqua from "@/assets/MEIdeSaqua.png";
import RanchoAFG from "@/assets/RanchoAfg.png";
import AnaliseEmail from "@/assets/AnaliseEmail.png";
import Olimpiada from "@/assets/Olimpiada.png";
import SiteSemiJoia from "@/assets/SiteSemiJoia.png";

const Projects = () => {
  const projects = [
    {
      title: "AquiTemODS",
      description:
        "Plataforma digital para a Prefeitura de Saquarema focada nos Objetivos de Desenvolvimento Sustentável. Sistema completo de gestão e transparência de ações municipais alinhadas aos ODS da ONU.",
      image: aquiTemOds,
      technologies: [
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Tailwind CSS",
      ],
      liveUrl: "https://aquitemods.saquarema.rj.gov.br",
      destaque: true,
      contribuitor: "viniciusvalledev",
    },
    {
      title: "MEIdeSaquá",
      description:
        "Sistema de gestão e cadastro para Microempreendedores Individuais (MEI) de Saquarema. Plataforma que facilita o registro, acompanhamento e suporte aos MEIs locais.",
      image: meiDeSaqua,
      technologies: ["React", "TypeScript", "API REST", "Dashboard Admin"],
      liveUrl: "https://meidesaqua.saquarema.rj.gov.br",
      destaque: true,
      contribuitor: "viniciusvalledev",
    },
    {
      title: "Rancho AFG",
      description:
        "Sistema de gestão para o Rancho AFG, facilitando o controle de aulas e comunicação com os membros. Plataforma intuitiva para otimizar as operações do rancho.",
      image: RanchoAFG,
      technologies: ["React", "TypeScript", "Node.js", "Supabase"],
      liveUrl: "https://rancho-afg.vercel.app/",
      destaque: false,
    },
    {
      title: "Analisador de E-mails com IA",
      description:
        "Ferramenta que utiliza inteligência artificial para analisar e categorizar e-mails automaticamente, melhorando a produtividade e organização da caixa de entrada.",
      image: AnaliseEmail,
      technologies: ["JS", "Python", "HTML", "CSS"],
      liveUrl: "https://autou-five.vercel.app/",
      destaque: false,
    },
    {
      title: "Busca de Atletas Olímpicos nas Olimpíadas de 2024",
      description:
        "Aplicação web que permite aos usuários buscar informações detalhadas sobre atletas participantes das Olimpíadas de 2024, incluindo estatísticas, histórico de desempenho e curiosidades.",
      image: Olimpiada,
      technologies: ["JS", "HTML", "CSS"],
      liveUrl: "olimpiadas-ashen-pi.vercel.app/",
      destaque: false,
    },
    {
      title: "Site de Semi Joias",
      description:
        "Site de vendar para uma marca de semi joias, apresentando produtos, e opções de contato para clientes interessados.",
      image: SiteSemiJoia,
      technologies: ["JS", "HTML", "CSS"],
      liveUrl: "https://site-semi-joias.vercel.app/",
      destaque: false,
    },
    // Adicione mais projetos aqui para testar o grid...
  ];

  const destaqueProjects = projects.filter((p) => p.destaque);
  const normalProjects = projects.filter((p) => !p.destaque);

  return (
    <section
      id="projects"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Header da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient">Projetos em destaque</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções de alto impacto desenvolvidas e em operação.
          </p>
        </div>

        {/* AREA DOS dESTAQUES  */}
        <div className="space-y-12 mb-20">
          {destaqueProjects.map((project, index) => (
            <Card
              key={`destaque-${index}`}
              className="overflow-hidden card-glass border-primary/20 hover:border-primary/50 transition-all duration-300 group shadow-lg"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden h-64 lg:h-auto min-h-[300px]">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </a>
                  <div className="absolute top-4 right-4 z-20">
                    <Badge className="bg-primary text-primary-foreground border-0 shadow-lg px-3 py-1 text-sm">
                      destaque
                    </Badge>
                  </div>
                </div>

                {/* Conteúdo destaque */}
                <div className="p-8 lg:p-10 flex flex-col justify-between bg-card/50">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground mb-8 leading-relaxed text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="secondary"
                          className="bg-primary/5 text-primary hover:bg-primary/10 border-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between mt-auto">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary hover:bg-primary/90 shadow-lg hover:shadow-neon transition-all w-full sm:w-auto"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Ver Projeto
                      </a>
                    </Button>

                    {project.contribuitor && (
                      <span className="text-muted-foreground text-sm">
                        Colaboração:{" "}
                        <span className="font-medium text-foreground">
                          {project.contribuitor}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Divisor Visual (Opcional) */}
        {normalProjects.length > 0 && (
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-1 bg-border"></div>
            <h3 className="text-2xl font-bold text-muted-foreground">
              Outros Projetos
            </h3>
            <div className="h-[1px] flex-1 bg-border"></div>
          </div>
        )}
        {/* AREA DOS OUTROS PROJETOS  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {normalProjects.map((project, index) => (
            <Card
              key={`normal-${index}`}
              className="flex flex-col overflow-hidden hover:border-primary/50 transition-all duration-300 group h-full"
            >
              <div className="relative overflow-hidden h-48">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                    <ExternalLink className="text-white w-8 h-8" />
                  </div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </a>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="mt-auto pt-4">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="text-xs py-0 h-6"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs py-0 h-6">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    className="w-full group/btn hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.liveUrl} target="_blank">
                      Acessar
                      <ExternalLink className="ml-2 h-3 w-3 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground bg-muted px-4 py-2 rounded-full">
            <Code2 className="h-5 w-5" />
            <p className="text-sm font-medium">
              Mais projetos em desenvolvimento...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
