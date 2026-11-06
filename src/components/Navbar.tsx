import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat("pt-BR", {
          timeZone: "America/Sao_Paulo",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date());
        setCurrentTime(timeStr);
      } catch {
        setCurrentTime("13:00");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "projects", label: t.nav.projects },
    { id: "contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 pt-3 sm:pt-4 px-4 pointer-events-none flex justify-center"
    >
      <div className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full hud-pill cyber-glass border border-white/10 shadow-2xl backdrop-blur-xl">
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                type="button"
                onClick={() => scrollToSection(link.id)}
                className={`relative px-3.5 py-1.5 text-xs font-mono font-medium rounded-full transition-colors duration-200 ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="navbar-pill-indicator"
                    className="absolute inset-0 rounded-full bg-primary/15 border border-primary/40 shadow-sm"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </button>
            );
          })}
        </div>

        {/* Live Rio de Janeiro Clock Telemetry */}
        {currentTime && (
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 border-l border-white/10 text-[11px] font-mono text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
            <span>Rio de Janeiro {currentTime}</span>
          </div>
        )}

        {/* Language Toggle */}
        <button
          type="button"
          onClick={() => setLanguage(language === "pt" ? "en" : "pt")}
          className="px-2.5 py-1 rounded-full border border-white/10 hover:border-primary/40 text-primary font-mono text-xs font-semibold tracking-wider transition-all"
          aria-label="Alternar idioma"
        >
          {language === "pt" ? "EN" : "PT"}
        </button>

        {/* Fale comigo Primary CTA */}
        <button
          type="button"
          onClick={() => scrollToSection("contact")}
          className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-primary hover:bg-primary/90 text-background font-bold text-xs tracking-wide shadow-md hover:shadow-neon transition-all"
        >
          <span>{language === "pt" ? "Fale comigo" : "Get in touch"}</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>

        {/* Mobile Menu Trigger */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-1.5 rounded-full text-muted-foreground hover:text-foreground"
          aria-label="Abrir menu"
        >
          {isMobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto md:hidden fixed top-16 left-4 right-4 max-w-xs mx-auto"
          >
            <div className="cyber-glass rounded-2xl p-3 border border-white/15 shadow-2xl space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  onClick={() => scrollToSection(link.id)}
                  className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-mono transition-colors ${
                    activeSection === link.id
                      ? "text-primary bg-primary/10 font-bold border border-primary/20"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
