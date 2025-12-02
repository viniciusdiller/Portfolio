import { Code2, Database, Globe, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const skills = [
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Frontend",
      description: "React, TypeScript, Tailwind CSS",
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Backend",
      description: "Node.js, APIs RESTful, Databases",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Full-Stack",
      description: "Soluções completas end-to-end",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Performance",
      description: "Otimização e escalabilidade",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sou um desenvolvedor full-stack com experiência em soluções digitais para a{" "}
              <span className="text-primary font-semibold">Prefeitura de Saquarema</span>, sempre
              buscando inovação e novos desafios.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Minha paixão é transformar ideias em produtos digitais que geram impacto real. Com foco
              em código limpo, boas práticas e experiência do usuário, desenvolvo aplicações web
              modernas e escaláveis.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Atualmente, trabalho com as mais recentes tecnologias do mercado, criando soluções que
              conectam pessoas e simplificam processos.
            </p>
          </div>

          <div className="relative">
            <div className="card-glass rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm text-muted-foreground font-mono">Status: Disponível para projetos</span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Localização</p>
                  <p className="text-foreground font-semibold">Saquarema, RJ - Brasil</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Foco atual</p>
                  <p className="text-foreground font-semibold">Soluções Gov Tech & Web Apps</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Experiência</p>
                  <p className="text-foreground font-semibold">Projetos em produção</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="card-glass p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
            >
              <div className="text-primary mb-4 group-hover:scale-110 transition-transform">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
