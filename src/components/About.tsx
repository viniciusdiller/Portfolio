import { useEffect, useRef } from "react";
import { Code2, Database, ExternalLink, Globe, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import SplitTitle from "./SplitTitle";
import SpotlightCard from "./SpotlightCard";
import TechMarquee from "./TechMarquee";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardInfoRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const isPt = language === "pt";

  const skills = [
    { icon: <Code2 className="h-8 w-8" />, title: t.about.skill_frontend, description: t.about.skill_frontend_desc },
    { icon: <Database className="h-8 w-8" />, title: t.about.skill_backend, description: t.about.skill_backend_desc },
    { icon: <Globe className="h-8 w-8" />, title: t.about.skill_fullstack, description: t.about.skill_fullstack_desc },
    { icon: <Zap className="h-8 w-8" />, title: t.about.skill_performance, description: t.about.skill_performance_desc },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Divider line draw
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: "left" },
        { scaleX: 1, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: dividerRef.current, start: "top 88%" } }
      );

      // Text block — slide from left with clip
      gsap.fromTo(
        textRef.current,
        { opacity: 0, clipPath: "inset(0 100% 0 0)", x: -20 },
        { opacity: 1, clipPath: "inset(0 0% 0 0)", x: 0, duration: 0.85, ease: "power3.out",
          scrollTrigger: { trigger: textRef.current, start: "top 85%" } }
      );

      // Info card
      gsap.fromTo(
        cardInfoRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "back.out(1.4)",
          scrollTrigger: { trigger: cardInfoRef.current, start: "top 85%" } }
      );

      // Skills stagger with flip-in
      if (skillsRef.current) {
        gsap.fromTo(
          skillsRef.current.children,
          { opacity: 0, y: 50, rotateY: -30, transformOrigin: "left center" },
          { opacity: 1, y: 0, rotateY: 0, duration: 0.6, ease: "back.out(1.3)",
            stagger: 0.12,
            scrollTrigger: { trigger: skillsRef.current, start: "top 88%" } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <SplitTitle as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" >
            {`${t.about.title} ${t.about.title_highlight}`}
          </SplitTitle>
          <div ref={dividerRef} className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" style={{ transformOrigin: "left" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div ref={textRef} className="space-y-6 opacity-0">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t.about.p1}{" "}
              <span className="text-primary font-semibold">{t.about.p1_highlight}</span>
              {t.about.p1_end}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">{t.about.p2}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isPt
                ? "Atualmente, trabalho com as mais recentes tecnologias do mercado, criando soluções que conectam pessoas e simplificam processos."
                : "I work with the latest market technologies, building solutions that connect people and simplify processes."}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {isPt ? (
                <>
                  Também atuo como freelancer e estou construindo minha própria empresa, a{" "}
                  <a
                    href="https://totalsoftware.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Total Software
                  </a>
                  .
                </>
              ) : (
                <>
                  I also work as a freelancer and I'm building my own company,{" "}
                  <a
                    href="https://totalsoftware.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    Total Software
                  </a>
                  .
                </>
              )}
            </p>
          </div>

          <div ref={cardInfoRef} className="relative opacity-0">
            <div className="card-glass rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-muted-foreground font-mono">Status: {t.contact.availability}</span>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{isPt ? "Localização" : "Location"}</p>
                  <p className="text-foreground font-semibold">Saquarema, RJ - Brasil</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{isPt ? "Foco atual" : "Current focus"}</p>
                  <p className="text-foreground font-semibold">Soluções Gov Tech &amp; Web Apps</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{isPt ? "Experiência" : "Experience"}</p>
                  <p className="text-foreground font-semibold">{isPt ? "Projetos em produção" : "Projects in production"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{isPt ? "Empresa" : "Company"}</p>
                  <a
                    href="https://totalsoftware.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground font-semibold hover:text-primary transition-colors inline-flex items-center gap-1.5"
                  >
                    Total Software
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SpotlightCard key={index} className="rounded-xl opacity-0" spotlightColor="189 100% 50%">
              <Card
                className="card-glass h-full p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
                style={{ perspective: 600 }}
              >
                <div className="text-primary mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-sm text-muted-foreground">{skill.description}</p>
              </Card>
            </SpotlightCard>
          ))}
        </div>

        <div className="mt-16 border-t border-border/50 pt-10">
          <TechMarquee />
        </div>
      </div>
    </section>
  );
};

export default About;
