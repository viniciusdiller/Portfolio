import { useEffect, useRef } from "react";
import { Heart, Code2 } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const { t } = useLanguage();
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 95%" } }
      );
    }, footerRef);
    return () => ctx.revert();
  }, []);

  return (
    <footer ref={footerRef} className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50 opacity-0">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold font-mono text-gradient hover:scale-105 transition-transform cursor-pointer"
          >
            {"<VD />"}
          </button>
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            {t.footer.made_with}
            <motion.span
              animate={{ scale: [1, 1.25, 1] }}
              transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex"
            >
              <Heart className="h-4 w-4 text-primary fill-primary" />
            </motion.span>
            {t.footer.and}
            <Code2 className="h-4 w-4 text-primary" />
            {t.footer.by} Vinícius Diller
          </p>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Vinícius Diller. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
