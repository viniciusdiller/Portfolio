import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { useLanguage } from "@/context/LanguageContext";
import MagneticButton from "./MagneticButton";
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, Cpu, Database, CheckCircle2, ShieldCheck, Activity } from "lucide-react";

const RobotCTA = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <Card className="relative w-full overflow-hidden border-primary/20 bg-card/70 backdrop-blur-xl shadow-2xl">
          <Spotlight className="-top-32 left-10 md:left-40" size={300} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 sm:p-10 lg:p-12">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-center space-y-5 relative z-10 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full hud-pill border border-secondary/30 text-secondary text-xs font-mono w-fit">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span>{t.contact.availability}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight leading-snug">
                Construindo aplicações web que{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  não caem sob pressão.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground max-w-xl leading-relaxed">
                {t.hero.description}
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
                <Activity className="w-4 h-4 text-primary" />
                <span>{t.contact.response_time}</span>
              </div>

              <div className="flex flex-wrap gap-4 pt-2">
                <MagneticButton strength={0.25}>
                  <Button
                    onClick={() => scrollToSection("projects")}
                    size="lg"
                    className="group bg-primary text-background font-bold shadow-lg hover:shadow-neon transition-all"
                  >
                    {t.hero.cta_projects}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </MagneticButton>

                <MagneticButton strength={0.25}>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    size="lg"
                    className="border-primary/40 text-foreground hover:text-primary hover:border-primary font-semibold"
                  >
                    {t.hero.cta_contact}
                  </Button>
                </MagneticButton>
              </div>
            </div>

            {/* Right Interactive Telemetry/Terminal Column (Zero-Lag, 0% CPU vs 4MB Spline) */}
            <div className="lg:col-span-5 relative z-10">
              <div className="cyber-glass rounded-2xl p-5 border border-white/10 shadow-xl space-y-4 font-mono text-xs">
                {/* Window Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary/80" />
                    <span className="text-[11px] text-muted-foreground ml-2">sys_monitor.ts</span>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-primary">
                    <Terminal className="w-3 h-3" />
                    <span>NODE ONLINE</span>
                  </div>
                </div>

                {/* Status Grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-[10px]">
                      <Cpu className="w-3.5 h-3.5 text-primary" />
                      <span>ARQUITETURA</span>
                    </div>
                    <p className="font-bold text-foreground text-sm">Full-Stack</p>
                    <span className="text-[10px] text-primary/80">React • Node • TS</span>
                  </div>

                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                    <div className="flex items-center gap-1.5 text-muted-foreground text-[10px]">
                      <Database className="w-3.5 h-3.5 text-secondary" />
                      <span>BANCO & APIS</span>
                    </div>
                    <p className="font-bold text-foreground text-sm">Escalável</p>
                    <span className="text-[10px] text-secondary/80">SQL • REST • Zero IDOR</span>
                  </div>
                </div>

                {/* Production metrics */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-2">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                      <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                      <span>Disponibilidade</span>
                    </span>
                    <span className="text-secondary font-bold">99.9% Uptime</span>
                  </div>
                  <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full w-[99%]" />
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-muted-foreground pt-1">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3 text-primary" />
                      <span>Alta Concorrência</span>
                    </span>
                    <span className="text-primary font-bold">Suportado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default RobotCTA;
