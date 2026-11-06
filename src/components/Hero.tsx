import { useState, useRef } from "react";
import { ArrowUpRight, ChevronDown, Github, Linkedin, Mail, Copy, Check, Sparkles, User, Terminal, Award, Zap, ShieldCheck } from "lucide-react";
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

  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth mouse coordinates for 3D perspective parallax (GPU optimized)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 30, stiffness: 90, mass: 0.5 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  // Layer 0: Background typography parallax (moves inversely)
  const textX = useTransform(smoothMouseX, [-0.5, 0.5], [20, -20]);
  const textY = useTransform(smoothMouseY, [-0.5, 0.5], [14, -14]);

  // Layer 1: Central character 3D perspective tilt
  const charRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [9, -9]);
  const charRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-11, 11]);
  const charX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
  const charY = useTransform(smoothMouseY, [-0.5, 0.5], [-10, 10]);

  // Multi-plane 3D floating badges (independent Z-depth parallax)
  const badge1X = useTransform(smoothMouseX, [-0.5, 0.5], [-24, 24]);
  const badge1Y = useTransform(smoothMouseY, [-0.5, 0.5], [-18, 18]);
  const badge2X = useTransform(smoothMouseX, [-0.5, 0.5], [20, -20]);
  const badge2Y = useTransform(smoothMouseY, [-0.5, 0.5], [16, -16]);

  // Layer 2: Side cards parallax
  const leftCardsX = useTransform(smoothMouseX, [-0.5, 0.5], [-16, 16]);
  const leftCardsY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);
  const rightCardsX = useTransform(smoothMouseX, [-0.5, 0.5], [-18, 18]);
  const rightCardsY = useTransform(smoothMouseY, [-0.5, 0.5], [-14, 14]);

  // Glow bloom tracking
  const bloomX = useTransform(smoothMouseX, [-0.5, 0.5], [-25, 25]);
  const bloomY = useTransform(smoothMouseY, [-0.5, 0.5], [-20, 20]);

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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#040711]"
      style={{ perspective: "1200px" }}
    >
      {/* 
        HUD TECHNICAL RETICLES & COORDINATES (Discreet Aerospace Framing)
      */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden xl:block select-none">
        {/* Top-Left */}
        <div className="absolute top-24 left-8 text-[10px] font-mono text-primary/35 tracking-widest flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-ping" />
          <span>SYS // 22°55&apos;S 42°29&apos;W [SAQUAREMA_HUB]</span>
        </div>

        {/* Top-Right */}
        <div className="absolute top-24 right-8 text-[10px] font-mono text-secondary/35 tracking-widest flex items-center gap-2">
          <span>HARDWARE_ACCEL // 60FPS</span>
          <span className="w-1.5 h-1.5 bg-secondary/40 rounded-full" />
        </div>

        {/* Bottom-Left */}
        <div className="absolute bottom-8 left-8 text-[10px] font-mono text-muted-foreground/30 tracking-widest">
          + [CORE // FULL-STACK ARCHITECTURE]
        </div>

        {/* Bottom-Right */}
        <div className="absolute bottom-8 right-8 text-[10px] font-mono text-muted-foreground/30 tracking-widest">
          + [AWARD // PSPE 2026 TOP_1]
        </div>
      </div>

      {/* Background canvas effects */}
      <ParticleCanvas />

      {/* Atmospheric cybernetic bloom behind the 3D subject */}
      <motion.div
        style={{ x: bloomX, y: bloomY }}
        className="pointer-events-none absolute w-[420px] sm:w-[620px] lg:w-[820px] h-[420px] sm:h-[620px] lg:h-[820px] rounded-full glow-bloom-cyan blur-3xl opacity-65 z-0"
      />

      {/* 
        LAYER 0: Monumental Typography Behind Avatar (Depth Stacking)
      */}
      <motion.div
        style={{ x: textX, y: textY }}
        aria-hidden="true"
        className="absolute inset-0 flex flex-col items-center justify-center select-none pointer-events-none z-0 overflow-hidden"
      >
        <span className="font-display font-black text-[18vw] sm:text-[15vw] lg:text-[12.5vw] tracking-tighter text-white/[0.04] lg:text-white/[0.055] uppercase leading-[0.82] select-none text-center">
          VINICIUS
        </span>
        <span className="font-display font-black text-[18vw] sm:text-[15vw] lg:text-[12.5vw] tracking-tighter text-white/[0.04] lg:text-white/[0.055] uppercase leading-[0.82] select-none text-center">
          DILLER
        </span>
      </motion.div>

      {/* Main 3-Column Cyber Grid */}
      <div className="container max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">

        {/* 
          COLUMN 1: Command Center (Headline, Metric, Primary CTAs)
        */}
        <motion.div
          style={{ x: leftCardsX, y: leftCardsY }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 order-2 lg:order-1"
        >
          {/* Eyebrow Terminal Tag */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-primary text-xs font-mono tracking-wider px-3 py-1 rounded-full bg-primary/10 border border-primary/25 shadow-sm">
              <Terminal className="w-3.5 h-3.5 animate-pulse" />
              <span>&gt; vinicius_diller --mode=high-impact</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              {t.hero.tagline_start}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-300 to-secondary glow-text">
                {t.hero.tagline_highlight}
              </span>
            </h1>
          </div>

          {/* Metric / Authority Card with Cyber Corners & Spotlight */}
          <div className="relative w-full max-w-md cyber-glass cyber-corners rounded-2xl p-5 text-left border border-white/10 group overflow-hidden shadow-2xl">
            <Spotlight className="from-primary/40 via-secondary/20 to-transparent" size={260} />

            <div className="relative z-10 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-secondary" />
                  <span className="font-display font-black text-2xl sm:text-3xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">
                    {t.hero.metric_value}
                  </span>
                </div>
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-secondary/15 text-secondary border border-secondary/35 font-bold">
                  {t.hero.metric_badge}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
                {t.hero.metric_sub}
              </p>

              {/* Technical Telemetry Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-2 border-t border-white/10 text-[10px] font-mono text-muted-foreground">
                <span className="flex items-center gap-1 text-primary">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Zero-Trust</span>
                </span>
                <span>•</span>
                <span className="text-foreground/80">99.9% Uptime</span>
                <span>•</span>
                <span className="text-secondary font-medium">GovTech Saquarema</span>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 w-full pt-1">
            <MagneticButton strength={0.25}>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-background font-bold px-7 py-6 rounded-full shadow-lg hover:shadow-neon transition-all duration-300 flex items-center gap-2 group"
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
          COLUMN 2: The 3D Subject Centerpiece (Depth Tilt & Floating Hologram Chips)
        */}
        <div className="lg:col-span-4 flex flex-col items-center justify-center relative order-1 lg:order-2">
          {/* Avatar Switcher Capsule */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="mb-4 z-30"
          >
            <div className="hud-pill inline-flex items-center gap-1 p-1 rounded-full border border-primary/25 text-[11px] font-mono shadow-xl">
              <button
                type="button"
                onClick={() => setAvatarMode("3d")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 ${
                  avatarMode === "3d"
                    ? "bg-primary text-background font-bold shadow-md shadow-primary/30"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Sparkles className="w-3 h-3" />
                <span>3D Avatar</span>
              </button>
              <button
                type="button"
                onClick={() => setAvatarMode("photo")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 ${
                  avatarMode === "photo"
                    ? "bg-primary text-background font-bold shadow-md shadow-primary/30"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <User className="w-3 h-3" />
                <span>{language === "pt" ? "Foto Real" : "Photo"}</span>
              </button>
            </div>
          </motion.div>

          {/* Interactive 3D Frame with Perspective Parallax */}
          <div className="relative flex items-center justify-center select-none">
            {/* Multi-Plane Floating Holographic Badges (Depth Z-Layers) */}
            <motion.div
              style={{ x: badge1X, y: badge1Y }}
              className="absolute -top-3 -right-4 sm:-right-8 z-30 pointer-events-none"
            >
              <div className="hud-pill px-3 py-1.5 rounded-full border border-secondary/40 shadow-xl flex items-center gap-1.5 text-[10px] font-mono text-secondary backdrop-blur-md">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                <span>1° Lugar Prêmio PSPE</span>
              </div>
            </motion.div>

            <motion.div
              style={{ x: badge2X, y: badge2Y }}
              className="absolute -bottom-2 -left-4 sm:-left-8 z-30 pointer-events-none"
            >
              <div className="hud-pill px-3 py-1.5 rounded-full border border-primary/40 shadow-xl flex items-center gap-1.5 text-[10px] font-mono text-primary backdrop-blur-md">
                <Zap className="w-3 h-3" />
                <span>GovTech Architecture</span>
              </div>
            </motion.div>

            {/* 3D Model Body */}
            <motion.div
              style={{
                x: charX,
                y: charY,
                rotateX: charRotateX,
                rotateY: charRotateY,
                transformStyle: "preserve-3d",
              }}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-center justify-center"
            >
              {avatarMode === "3d" ? (
                <div className="relative group cursor-pointer">
                  {/* Holographic rim light contour */}
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-b from-primary/35 via-transparent to-secondary/35 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                  <div className="relative w-64 sm:w-72 md:w-80 lg:w-[360px] aspect-square rounded-3xl overflow-hidden border border-primary/35 shadow-2xl bg-black/50">
                    <img
                      src={avatar3D}
                      alt="Vinícius Diller 3D Avatar"
                      className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                      style={{
                        maskImage: "radial-gradient(ellipse at 50% 48%, black 65%, transparent 95%)",
                        WebkitMaskImage: "radial-gradient(ellipse at 50% 48%, black 65%, transparent 95%)",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040711]/90 via-transparent to-primary/10 pointer-events-none" />
                  </div>
                </div>
              ) : (
                <div className="relative group cursor-pointer">
                  <div className="absolute -inset-3 rounded-full bg-gradient-to-r from-primary to-secondary blur-xl opacity-65 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none animate-glow" />

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
        </div>

        {/* 
          COLUMN 3: Architecture Telemetry & Quick Connect
        */}
        <motion.div
          style={{ x: rightCardsX, y: rightCardsY }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 flex flex-col space-y-4 order-3 w-full max-w-md mx-auto lg:mx-0"
        >
          {/* Card 1: Sobre mim (Terminal Window Style) */}
          <div className="relative cyber-glass cyber-corners rounded-2xl p-5 border border-white/10 group overflow-hidden shadow-2xl">
            <Spotlight className="from-secondary/30 via-primary/20 to-transparent" size={240} />
            <div className="relative z-10 space-y-3 text-left">
              {/* Terminal Window Header */}
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-destructive/70" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <span className="w-2 h-2 rounded-full bg-secondary/70" />
                  <span className="text-[10px] font-mono text-muted-foreground ml-1.5">diller_profile.ts</span>
                </div>
                <span className="text-[10px] font-mono text-primary font-bold">FULL-STACK</span>
              </div>

              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {t.hero.about_card_body}
              </p>

              {/* Interactive Tech Badges */}
              <div className="pt-1 flex flex-wrap gap-1.5">
                {["React 19", "NestJS", "TypeScript", "Node.js", "SQL", "Deploy", "APIs", "Testes Unitários", "Tailwind"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-foreground/80 hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: Contato & Socials */}
          <div className="relative cyber-glass cyber-corners rounded-2xl p-5 border border-white/10 group overflow-hidden shadow-2xl">
            <Spotlight className="from-primary/30 via-cyan-400/20 to-transparent" size={240} />
            <div className="relative z-10 space-y-3 text-left">
              <div>
                <h2 className="text-xs font-mono uppercase tracking-wider text-secondary font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  {t.hero.contact_card_title}
                </h2>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {t.hero.contact_card_subtitle}
                </p>
              </div>

              {/* Email Pill with Quick Copy */}
              <div className="flex items-center justify-between p-2 sm:p-2.5 rounded-xl bg-black/50 border border-white/10 group/pill hover:border-primary/50 transition-colors">
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
                  className="w-9 h-9 rounded-full hud-pill flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:scale-105 transition-all shadow-md"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/viniciusdiller/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full hud-pill flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:scale-105 transition-all shadow-md"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:viniciusdiller@gmail.com"
                  aria-label="E-mail direto"
                  className="w-9 h-9 rounded-full hud-pill flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/60 hover:scale-105 transition-all shadow-md"
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
        transition={{ delay: 1.0, duration: 0.6 }}
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
