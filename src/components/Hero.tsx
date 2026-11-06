import { useState, useEffect, useRef } from "react";
import { ArrowUpRight, ChevronDown, Github, Linkedin, Mail, Copy, Check, Sparkles, User, Terminal } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import MagneticButton from "./MagneticButton";
import ParticleCanvas from "./ParticleCanvas";
import { useLanguage } from "@/context/LanguageContext";
import avatar3D from "@/assets/avatar-3d.png";
import Eu from "@/assets/Eu.jpg";

const Hero = () => {
  const { t, language } = useLanguage();
  const [avatarMode, setAvatarMode] = useState<"3d" | "photo">("3d");
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth mouse coordinates for 3D perspective parallax (optimized for low-end laptops)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 90, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Parallax offsets for different layers
  const textX = useTransform(smoothMouseX, [-0.5, 0.5], [16, -16]);
  const textY = useTransform(smoothMouseY, [-0.5, 0.5], [12, -12]);

  const charRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [7, -7]);
  const charRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);
  const charX = useTransform(smoothMouseX, [-0.5, 0.5], [-10, 10]);
  const charY = useTransform(smoothMouseY, [-0.5, 0.5], [-8, 8]);

  const leftCardsX = useTransform(smoothMouseX, [-0.5, 0.5], [-14, 14]);
  const leftCardsY = useTransform(smoothMouseY, [-0.5, 0.5], [-10, 10]);
  const rightCardsX = useTransform(smoothMouseX, [-0.5, 0.5], [-16, 16]);
  const rightCardsY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);

  const bloomX = useTransform(smoothMouseX, [-0.5, 0.5], [-20, 20]);
  const bloomY = useTransform(smoothMouseY, [-0.5, 0.5], [-16, 16]);

  useEffect(() => {
    const updateRioTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("pt-BR", {
          timeZone: "America/Sao_Paulo",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date());
        setCurrentTime(timeStr);
      } catch {
        setCurrentTime("11:00");
      }
    };
    updateRioTime();
    const interval = setInterval(updateRioTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const rafId = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const clientX = e.clientX;
    const clientY = e.clientY;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(clientX / innerWidth - 0.5);
      mouseY.set(clientY / innerHeight - 0.5);
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    mouseX.set(0);
    mouseY.set(0);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("viniciusdiller@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#040711]"
      style={{ perspective: "1200px" }}
    >
      {/* Background canvas effects */}
      <ParticleCanvas />

      {/* Atmospheric cybernetic bloom behind the 3D subject */}
      <motion.div
        style={{ x: bloomX, y: bloomY }}
        className="pointer-events-none absolute w-[420px] sm:w-[600px] lg:w-[760px] h-[420px] sm:h-[600px] lg:h-[760px] rounded-full glow-bloom-cyan blur-3xl opacity-60 z-0"
      />

      {/* Top telemetry status pill */}
      <div className="absolute top-20 sm:top-24 z-20 flex items-center justify-center w-full px-4 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="pointer-events-auto inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full hud-pill text-xs font-mono text-muted-foreground border border-primary/25 hover:border-primary/50 transition-colors shadow-lg"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary" />
          </span>
          <span className="text-foreground/90 font-medium">
            {t.hero.status_badge}
          </span>
          {currentTime && (
            <span className="hidden sm:inline-flex items-center pl-2 border-l border-border/80 text-primary/80">
              {t.hero.location} {currentTime}
            </span>
          )}
        </motion.div>
      </div>

      {/* 
        LAYER 0: Giant Monumental Typography Stacked Behind the Subject
        (Depth Stacking - Sandwich effect)
      */}
      <motion.div
        style={{ x: textX, y: textY }}
        aria-hidden="true"
        className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none z-0 overflow-hidden"
      >
        <span className="font-display font-black text-[18vw] sm:text-[15vw] lg:text-[12.5vw] tracking-tight text-white/[0.045] lg:text-white/[0.06] uppercase leading-[0.82] select-none text-center">
          VINICIUS
        </span>
        <span className="font-display font-black text-[18vw] sm:text-[15vw] lg:text-[12.5vw] tracking-tight text-white/[0.045] lg:text-white/[0.06] uppercase leading-[0.82] select-none text-center">
          DILLER
        </span>
      </motion.div>

      {/* Main 3-Column Cyber Grid */}
      <div className="container max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

        {/* 
          COLUMN 1: High-Authority Headline, Impact Metric, Primary CTAs
        */}
        <motion.div
          style={{ x: leftCardsX, y: leftCardsY }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-2 lg:order-1"
        >
          {/* Main punchy tagline */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-primary text-xs font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
              <Terminal className="w-3.5 h-3.5" />
              <span>Full-Stack Engineer</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {t.hero.tagline_start}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary glow-text">
                {t.hero.tagline_highlight}
              </span>
            </h1>
          </div>

          {/* Metric / Authority Card with cursor Spotlight */}
          <div className="relative w-full max-w-md cyber-glass rounded-2xl p-4 sm:p-5 text-left border border-white/10 group overflow-hidden">
            <Spotlight className="from-primary/40 via-secondary/20 to-transparent" size={240} />
            <div className="flex items-start justify-between gap-3 relative z-10">
              <div>
                <div className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight flex items-baseline gap-1">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                    {t.hero.metric_value}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1 leading-snug">
                  {t.hero.metric_sub}
                </p>
              </div>
              <span className="shrink-0 text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/30">
                GovTech
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full pt-1">
            <MagneticButton strength={0.25}>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background font-bold px-6 py-6 rounded-full shadow-lg hover:shadow-neon transition-all duration-300 flex items-center gap-2 group"
              >
                <span>{t.hero.cta_projects}</span>
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Button>
            </MagneticButton>

            <MagneticButton strength={0.25}>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="outline"
                size="lg"
                className="hud-pill text-foreground hover:text-primary hover:border-primary/60 font-semibold px-6 py-6 rounded-full transition-all duration-300"
              >
                {t.hero.cta_contact}
              </Button>
            </MagneticButton>
          </div>
        </motion.div>

        {/* 
          COLUMN 2: The 3D Subject (Centerpiece with 3D Tilt & Rim Light)
        */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative order-1 lg:order-2">
          {/* Avatar Switcher badge on top right of avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="mb-3 z-30"
          >
            <div className="hud-pill inline-flex items-center gap-1 p-1 rounded-full border border-primary/25 text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setAvatarMode("3d")}
                className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-200 ${
                  avatarMode === "3d"
                    ? "bg-primary text-background font-bold shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>3D Render</span>
              </button>
              <button
                type="button"
                onClick={() => setAvatarMode("photo")}
                className={`flex items-center gap-1 px-3 py-1 rounded-full transition-all duration-200 ${
                  avatarMode === "photo"
                    ? "bg-primary text-background font-bold shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <User className="w-3 h-3" />
                <span>{language === "pt" ? "Foto Real" : "Photo"}</span>
              </button>
            </div>
          </motion.div>

          {/* Interactive 3D Card / Frame */}
          <motion.div
            style={{
              x: charX,
              y: charY,
              rotateX: charRotateX,
              rotateY: charRotateY,
              transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex items-center justify-center select-none"
          >
            {avatarMode === "3d" ? (
              <div className="relative group cursor-pointer">
                {/* Holographic rim light contour */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-b from-primary/30 via-transparent to-secondary/30 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative w-64 sm:w-72 md:w-80 lg:w-[350px] aspect-square rounded-3xl overflow-hidden border border-primary/30 shadow-2xl bg-black/40">
                  <img
                    src={avatar3D}
                    alt="Vinícius Diller 3D Cyberpunk Avatar"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                    style={{
                      maskImage: "radial-gradient(ellipse at 50% 48%, black 65%, transparent 95%)",
                      WebkitMaskImage: "radial-gradient(ellipse at 50% 48%, black 65%, transparent 95%)",
                    }}
                  />
                  {/* Subtle specular scanline highlight */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-primary/10 pointer-events-none" />
                </div>
              </div>
            ) : (
              <div className="relative group cursor-pointer">
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary to-secondary blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-glow" />

                <div className="relative w-56 sm:w-64 lg:w-72 aspect-square rounded-full overflow-hidden border-2 border-primary/60 shadow-2xl bg-background">
                  <img
                    src={Eu}
                    alt="Vinícius Diller"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-full pointer-events-none" />
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* 
          COLUMN 3: Context Cards ("Sobre mim", "Contato por e-mail", Socials)
        */}
        <motion.div
          style={{ x: rightCardsX, y: rightCardsY }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col space-y-4 order-3 w-full max-w-md mx-auto lg:mx-0"
        >
          {/* Card 1: Sobre mim */}
          <div className="relative cyber-glass rounded-2xl p-5 border border-white/10 group overflow-hidden">
            <Spotlight className="from-secondary/30 via-primary/20 to-transparent" size={220} />
            <div className="relative z-10 space-y-2 text-left">
              <h2 className="text-sm font-mono uppercase tracking-wider text-primary font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                {t.hero.about_card_title}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t.hero.about_card_body}
              </p>
              <div className="pt-2 flex flex-wrap gap-1.5">
                {["React", "Node.js", "TypeScript", "Tailwind", "APIs"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-foreground/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Contato por e-mail & Redes */}
          <div className="relative cyber-glass rounded-2xl p-5 border border-white/10 group overflow-hidden">
            <Spotlight className="from-primary/30 via-cyan-400/20 to-transparent" size={220} />
            <div className="relative z-10 space-y-3 text-left">
              <div>
                <h2 className="text-sm font-mono uppercase tracking-wider text-secondary font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {t.hero.contact_card_title}
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t.hero.contact_card_subtitle}
                </p>
              </div>

              {/* Email Pill with Quick Copy */}
              <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-black/40 border border-white/10 group/pill hover:border-primary/50 transition-colors">
                <span className="text-xs font-mono text-foreground/90 truncate mr-2 select-all">
                  viniciusdiller@gmail.com
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  aria-label="Copiar e-mail"
                  className="shrink-0 p-1.5 rounded-lg bg-primary/10 hover:bg-primary text-primary hover:text-background transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-secondary" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Social Circles */}
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://github.com/viniciusdiller"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-9 h-9 rounded-full hud-pill flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:scale-105 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/viniciusdiller/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full hud-pill flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:scale-105 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:viniciusdiller@gmail.com"
                  aria-label="E-mail direto"
                  className="w-9 h-9 rounded-full hud-pill flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:scale-105 transition-all"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue to next section */}
      <motion.button
        onClick={() => scrollToSection("about")}
        aria-label="Rolar para próxima seção"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-muted-foreground hover:text-primary transition-colors text-xs font-mono"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-[10px] tracking-widest uppercase opacity-70">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
