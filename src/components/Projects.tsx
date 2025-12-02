import { ExternalLink, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import aquiTemOds from "@/assets/AquiTemODS.png";
import meiDeSaqua from "@/assets/MEIdeSaqupa.png";

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
      featured: true,
    },
    {
      title: "MEIdeSaquá",
      description:
        "Sistema de gestão e cadastro para Microempreendedores Individuais (MEI) de Saquarema. Plataforma que facilita o registro, acompanhamento e suporte aos MEIs locais, promovendo o empreendedorismo municipal.",
      image: meiDeSaqua,
      technologies: ["React", "TypeScript", "API REST", "Dashboard Admin"],
      liveUrl: "https://meidesaqua.saquarema.rj.gov.br",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Projetos em <span className="text-gradient">Produção</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções reais em operação, impactando milhares de usuários
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden card-glass hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative overflow-hidden h-64 lg:h-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </a>
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-20">
                      <Badge className="bg-primary text-primary-foreground border-0 shadow-lg">
                        ✨ Destaque
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-2xl sm:text-3xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button
                      asChild
                      className="bg-primary hover:bg-primary/90 text-primary-foreground group/btn shadow-lg hover:shadow-neon transition-all"
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                        Visitar Site
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Code2 className="h-5 w-5" />
            <p className="text-sm">Mais projetos em desenvolvimento...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
