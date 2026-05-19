import { useEffect, useRef } from "react";
import { Code2, Database, Globe, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardInfoRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { icon: <Code2 className="h-8 w-8" />, title: t.about.skill_frontend, description: t.about.skill_frontend_desc },
    { icon: <Database className="h-8 w-8" />, title: t.about.skill_backend, description: t.about.skill_backend_desc },
    { icon: <Globe className="h-8 w-8" />, title: t.about.skill_fullstack, description: t.about.skill_fullstack_desc },
    { icon: <Zap className="h-8 w-8" />, title: t.about.skill_performance, description: t.about.skill_performance_desc },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%" } }
      );
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -40 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: textRef.current, start: "top 85%" } }
      );
      gsap.fromTo(
        cardInfoRef.current,
        { opacity: 0, x: 40 },
        { opacity: 1, x: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: cardInfoRef.current, start: "top 85%" } }
      );
      if (skillsRef.current) {
        gsap.fromTo(
          skillsRef.current.children,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: skillsRef.current, start: "top 85%" } }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const isPt = language === "pt";

  return (
    <section id="about" ref={sectionRef} className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto max-w-6xl">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t.about.title} <span className="text-gradient">{t.about.title_highlight}</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
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
          </div>

          <div ref={cardInfoRef} className="relative opacity-0">
            <div className="card-glass rounded-2xl p-8 border border-primary/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-3 w-3 rounded-full bg-primary animate-pulse"></div>
                <span className="text-sm text-muted-foreground font-mono">
                  Status: {t.contact.availability}
                </span>
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
              </div>
            </div>
          </div>
        </div>

        <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="card-glass p-6 hover:border-primary/50 transition-all duration-300 hover:scale-105 group opacity-0"
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
