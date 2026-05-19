import { useEffect, useRef } from "react";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Eu from "@/assets/Eu.jpg";
import gsap from "gsap";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLParagraphElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const roleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnsRef = useRef<HTMLDivElement>(null);
  const socialsRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      imgRef.current,
      { opacity: 0, scale: 0.7, rotate: -8 },
      { opacity: 1, scale: 1, rotate: 0, duration: 0.9 }
    )
      .fromTo(
        greetingRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.5 },
        "-=0.5"
      )
      .fromTo(
        nameRef.current,
        { opacity: 0, y: 32 },
        { opacity: 1, y: 0, duration: 0.6 },
        "-=0.3"
      )
      .fromTo(
        roleRef.current,
        { opacity: 0, y: 24 },
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
        socialsRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.2"
      );

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
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
          {/* Photo */}
          <div ref={imgRef} className="flex-shrink-0 opacity-0">
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
                <p ref={greetingRef} className="text-primary font-mono text-sm sm:text-base mb-2 tracking-wide opacity-0">
                  {t.hero.greeting}
                </p>
                <h1 ref={nameRef} className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 opacity-0">
                  <span className="text-gradient glow-text">Vinícius Diller</span>
                </h1>
                <h2 ref={roleRef} className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mb-6 opacity-0">
                  {t.hero.role}
                </h2>
              </div>

              <p ref={descRef} className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-0">
                {t.hero.description}
              </p>

              <div ref={btnsRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0">
                <Button
                  onClick={() => scrollToSection("projects")}
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold group shadow-lg hover:shadow-neon transition-all"
                >
                  {t.hero.cta_projects}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-black font-semibold"
                >
                  {t.hero.cta_contact}
                </Button>
              </div>

              {/* Social Links */}
              <div ref={socialsRef} className="flex gap-4 justify-center lg:justify-start pt-4 opacity-0">
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
