import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Eu from "@/assets/Eu.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Eu.jpg */}
          <div className="flex-shrink-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-glow"></div>
              <img
                src={Eu}
                alt="Vinícius Diller"
                className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover border-4 border-background"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="space-y-6">
              <div>
                <p className="text-primary font-mono text-sm sm:text-base mb-2 tracking-wide">
                  Olá, eu sou
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4">
                  <span className="text-gradient glow-text">
                    Vinícius Diller
                  </span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6">
                  Full-Stack Web Developer
                </h2>
              </div>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Construindo soluções web escaláveis e inovadoras com foco em
                impacto real. Especializado em criar experiências digitais que
                transformam negócios.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group shadow-lg hover:shadow-neon transition-all"
                >
                  Ver Projetos
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-black font-semibold"
                >
                  Entre em Contato
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start pt-4">
                <a
                  href="https://github.com/viniciusdiller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/viniciusdiller/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="mailto:viniciusdiller@gmail.com"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
