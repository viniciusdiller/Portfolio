import { useEffect, useRef } from "react";
import { Code2, Database, ExternalLink, Globe, Zap, Cpu, ShieldCheck, Cloud, Terminal } from "lucide-react";
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
    {
      icon: <Code2 className="h-7 w-7 text-primary" />,
      title: t.about.skill_frontend,
      description: t.about.skill_frontend_desc,
      tag: "UI / UX",
    },
    {
      icon: <Cpu className="h-7 w-7 text-secondary" />,
      title: t.about.skill_backend,
      description: t.about.skill_backend_desc,
      tag: "NestJS",
    },
    {
      icon: <Database className="h-7 w-7 text-primary" />,
      title: t.about.skill_sql,
      description: t.about.skill_sql_desc,
      tag: "Data / SQL",
    },
    {
      icon: <Globe className="h-7 w-7 text-secondary" />,
      title: t.about.skill_apis,
      description: t.about.skill_apis_desc,
      tag: "Zero-Trust",
    },
    {
      icon: <ShieldCheck className="h-7 w-7 text-primary" />,
      title: t.about.skill_testing,
      description: t.about.skill_testing_desc,
      tag: "QA / TDD",
    },
    {
      icon: <Cloud className="h-7 w-7 text-secondary" />,
      title: t.about.skill_deploy,
      description: t.about.skill_deploy_desc,
      tag: "DevOps",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: "left" },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: dividerRef.current, start: "top 88%" },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.85,
          ease: "power3.out",
          scrollTrigger: { trigger: textRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        cardInfoRef.current,
        { opacity: 0, y: 30, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.3)",
          scrollTrigger: { trigger: cardInfoRef.current, start: "top 85%" },
        }
      );

      if (skillsRef.current) {
        gsap.fromTo(
          skillsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.08,
            scrollTrigger: { trigger: skillsRef.current, start: "top 88%" },
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full hud-pill text-xs font-mono text-primary border border-primary/25">
            <Terminal className="w-3.5 h-3.5" />
            <span>[ 01 // ARQUITETURA & PROFILE ]</span>
          </div>
          <SplitTitle as="h2" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
            {`${t.about.title} ${t.about.title_highlight}`}
          </SplitTitle>
          <div
            ref={dividerRef}
            className="w-24 h-1 bg-gradient-to-r from-primary via-cyan-300 to-secondary mx-auto rounded-full mt-3"
            style={{ transformOrigin: "left" }}
          />
        </div>

        {/* Narrative & Profile Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Narrative Text */}
          <div ref={textRef} className="lg:col-span-7 flex flex-col justify-center space-y-5 opacity-0 text-left">
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.about.p1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold">
                {t.about.p1_highlight}
              </span>
              {t.about.p1_end}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {t.about.p2}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {isPt
                ? "Focado em software robusto: arquitetura limpa com NestJS e React, modelagem rigorosa de dados SQL e segurança de ponta a ponta com testes unitários automatizados."
                : "Focused on robust software: clean architecture with NestJS and React, strict SQL modeling, and end-to-end security with automated unit testing."}
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {isPt ? (
                <>
                  Também atuo como freelancer e estou construindo minha própria empresa, a{" "}
                  <a
                    href="https://totalsoftware.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Total Software
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  .
                </>
              ) : (
                <>
                  I also work as a freelancer and build my own software house,{" "}
                  <a
                    href="https://totalsoftware.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Total Software
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  .
                </>
              )}
            </p>
          </div>

          {/* Cyber Spec Terminal Card */}
          <div ref={cardInfoRef} className="lg:col-span-5 relative opacity-0 flex">
            <div className="cyber-glass cyber-corners rounded-2xl p-6 sm:p-7 border border-white/10 w-full flex flex-col justify-between shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                  <span className="text-foreground/90 font-bold">sys_specs.ts</span>
                </div>
                <span className="text-primary font-bold">ONLINE</span>
              </div>

              <div className="space-y-4 py-4 text-xs font-mono">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-muted-foreground">{isPt ? "Localização" : "Location"}</span>
                  <span className="text-foreground font-semibold">Saquarema, RJ - Brasil</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-muted-foreground">{isPt ? "Foco Central" : "Core Focus"}</span>
                  <span className="text-primary font-semibold">GovTech &amp; Web Apps</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-muted-foreground">Stack Base</span>
                  <span className="text-secondary font-semibold">Nest • React • Node • SQL</span>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-xl bg-black/40 border border-white/5">
                  <span className="text-muted-foreground">Software House</span>
                  <a
                    href="https://totalsoftware.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-bold hover:underline inline-flex items-center gap-1"
                  >
                    Total Software ↗
                  </a>
                </div>
              </div>

              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <span>Disponibilidade</span>
                <span className="text-secondary font-bold">Projetos &amp; Contratos</span>
              </div>
            </div>
          </div>
        </div>

        {/* 6-Card Skills & Engineering Matrix */}
        <div className="space-y-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white tracking-tight flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" />
              <span>{t.about.skills_title}</span>
            </h3>
            <span className="text-xs font-mono text-muted-foreground hidden sm:block">
              [ STACK // ARCHITECTURE ]
            </span>
          </div>

          <div ref={skillsRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skills.map((skill, index) => (
              <SpotlightCard key={index} className="rounded-2xl opacity-0" spotlightColor="183 100% 50%">
                <Card className="cyber-glass cyber-corners h-full p-6 border border-white/10 hover:border-primary/50 transition-all duration-300 group shadow-xl">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                      {skill.tag}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                    {skill.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {skill.description}
                  </p>
                </Card>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* Tech Marquee */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <TechMarquee />
        </div>
      </div>
    </section>
  );
};

export default About;
