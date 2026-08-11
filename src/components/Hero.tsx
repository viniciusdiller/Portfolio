import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Eu from "@/assets/Eu.jpg";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";
import ParticleCanvas from "./ParticleCanvas";
import MagneticButton from "./MagneticButton";

const ROLES_PT = ["Full-Stack Developer", "React Specialist", "TypeScript Engineer", "Gov Tech Builder"];
const ROLES_EN = ["Full-Stack Developer", "React Specialist", "TypeScript Engineer", "Gov Tech Builder"];

const Hero = () => {
  const { t, language } = useLanguage();
  const imgRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const typeInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const roleIndex = useRef(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  // Typewriter effect
  useEffect(() => {
    const roles = language === "pt" ? ROLES_PT : ROLES_EN;
    let currentRole = 0;
    let charIdx = 0;
    let deleting = false;

    const tick = () => {
      const target = roles[currentRole];
      if (!roleRef.current) return;

      if (!deleting) {
        roleRef.current.textContent = target.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === target.length) {
          deleting = true;
          clearInterval(typeInterval.current!);
          typeInterval.current = setInterval(tick, 80);
          setTimeout(() => {
            clearInterval(typeInterval.current!);
            typeInterval.current = setInterval(tick, 80);
          }, 1800);
        }
      } else {
        roleRef.current.textContent = target.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          currentRole = (currentRole + 1) % roles.length;
          clearInterval(typeInterval.current!);
          setTimeout(() => {
            typeInterval.current = setInterval(tick, 80);
          }, 400);
        }
      }
    };

    setTimeout(() => {
      typeInterval.current = setInterval(tick, 100);
    }, 1400);

    return () => {
      if (typeInterval.current) clearInterval(typeInterval.current);
    };
  }, [language]);

  // Cursor blink
  useEffect(() => {
    if (!cursorRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(cursorRef.current, {
        opacity: 0,
        repeat: -1,
        yoyo: true,
        duration: 0.5,
        ease: "none",
      });
    });
    return () => ctx.revert();
  }, []);

  // Entrance timeline
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.6, rotate: -12 },
      { opacity: 1, scale: 1, rotate: 0, duration: 1.0, ease: "back.out(1.4)" }
    )
      .fromTo(
        greetingRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 0.5 },
        "-=0.6"
      )
      .fromTo(
        nameRef.current,
        { opacity: 0, y: 40, skewX: -5 },
        { opacity: 1, y: 0, skewX: 0, duration: 0.7 },
        "-=0.3"
      )
      .fromTo(
        roleRef.current?.parentElement ?? null,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.3"
      )
      .fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      )
      .fromTo(
        btnsRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.2"
      )
      .fromTo(
        socialsRef.current?.children ?? null,
        { opacity: 0, scale: 0.5, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.1 },
        "-=0.2"
      );

    return () => { tl.kill(); };
  }, []);

  // Mouse parallax on photo
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!imgRef.current) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 18;
      const y = (e.clientY / innerHeight - 0.5) * 18;
      gsap.to(imgRef.current, { x, y, duration: 0.9, ease: "power2.out" });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Particle background */}
      <ParticleCanvas />

      {/* Ambient blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* Photo with parallax */}
          <div ref={imgRef} className="flex-shrink-0 opacity-0">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 animate-glow" />
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
                <p ref={greetingRef} className="text-primary font-mono text-sm sm:text-base mb-2 tracking-widest uppercase opacity-0">
                  {t.hero.greeting}
                </p>
                <h1 ref={nameRef} className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 opacity-0">
                  <span className="text-gradient glow-text">Vinícius Diller</span>
                </h1>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6 opacity-0"
                  ref={(el) => { if (el) el.style.opacity = "0"; }}
                >
                  <span ref={roleRef} className="text-primary"></span>
                  <span ref={cursorRef} className="text-primary ml-0.5 opacity-100">|</span>
                </h2>
              </div>

              <p ref={descRef} className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-0">
                {t.hero.description}
              </p>

              <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0">
                <MagneticButton>
                  <Button
                    onClick={() => scrollToSection("projects")}
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group shadow-lg hover:shadow-neon transition-all magnetic"
                  >
                    {t.hero.cta_projects}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </MagneticButton>
                <MagneticButton>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-black font-semibold magnetic"
                  >
                    {t.hero.cta_contact}
                  </Button>
                </MagneticButton>
              </div>

              {/* Social Links */}
              <div ref={socialsRef} className="flex gap-4 justify-center lg:justify-start pt-4">
                <a href="https://github.com/viniciusdiller" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all opacity-0">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/viniciusdiller/" target="_blank" rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all opacity-0">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:viniciusdiller@gmail.com"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:scale-110 transition-all opacity-0">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollToSection("about")}
        aria-label={language === "pt" ? "Rolar para a seção sobre" : "Scroll to about section"}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;
