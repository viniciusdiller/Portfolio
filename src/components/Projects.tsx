import { useEffect, useRef, useState, useMemo } from "react";
import {
  ExternalLink,
  Code2,
  Github,
  Lock,
  Terminal,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { getProjects, type ProjectCategory } from "@/lib/Projects";
import SplitTitle from "./SplitTitle";
import SpotlightCard from "./SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

type FilterCategory = "all" | ProjectCategory;

const formatDisplayUrl = (url: string) => {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (parsed.pathname && parsed.pathname !== "/") {
      return `${host}${parsed.pathname}`;
    }
    return host;
  } catch {
    return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
  }
};

const Projects = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>("all");
  const isPt = language === "pt";

  const allProjects = useMemo(() => getProjects(isPt), [isPt]);

  const categoryCounts = useMemo(() => {
    return {
      all: allProjects.length,
      govtech: allProjects.filter((p) => p.category === "govtech").length,
      systems: allProjects.filter((p) => p.category === "systems").length,
      commercial: allProjects.filter((p) => p.category === "commercial").length,
    };
  }, [allProjects]);

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return allProjects;
    return allProjects.filter((p) => p.category === selectedCategory);
  }, [allProjects, selectedCategory]);

  const categories: { id: FilterCategory; label: string; count: number }[] = [
    { id: "all", label: t.projects.tab_all, count: categoryCounts.all },
    { id: "govtech", label: t.projects.tab_govtech, count: categoryCounts.govtech },
    { id: "systems", label: t.projects.tab_systems, count: categoryCounts.systems },
    { id: "commercial", label: t.projects.tab_commercial, count: categoryCounts.commercial },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        dividerRef.current,
        { scaleX: 0, transformOrigin: "center" },
        {
          scaleX: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: { trigger: dividerRef.current, start: "top 88%" },
        },
      );
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: { trigger: subtitleRef.current, start: "top 88%" },
        },
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="scroll-mt-20 py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-muted/20 relative"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full hud-pill text-xs font-mono text-primary border border-primary/25 mb-1">
            <Terminal className="w-3.5 h-3.5" />
            <span>[ 02 // CATÁLOGO DE ENGENHARIA ]</span>
          </div>
          <SplitTitle
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            {`${t.projects.title} ${t.projects.title_highlight}`}
          </SplitTitle>
          <div
            ref={dividerRef}
            className="w-24 h-1 bg-gradient-to-r from-primary via-cyan-300 to-secondary mx-auto rounded-full mt-3 mb-6"
          />
          <p
            ref={subtitleRef}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0"
          >
            {t.projects.subtitle}
          </p>
        </div>

        {/* Category Tabs Filter */}
        <div className="flex items-center justify-center mb-12">
          <div
            role="tablist"
            aria-label={isPt ? "Categorias de projetos" : "Project categories"}
            className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-2xl cyber-glass border border-white/10 max-w-full"
          >
            {categories.map((tab) => {
              const isActive = selectedCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(tab.id)}
                  className={`relative flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all duration-200 select-none ${
                    isActive
                      ? "text-primary font-semibold shadow-neon border border-primary/40 bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03] border border-transparent"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`inline-flex items-center justify-center text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                      isActive
                        ? "bg-primary text-primary-foreground font-bold"
                        : "bg-white/10 text-muted-foreground"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid of Engineering Software Windows */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const displayUrl = formatDisplayUrl(project.liveUrl);

              return (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="h-full"
                >
                  <SpotlightCard className="h-full rounded-2xl">
                    <Card className="h-full overflow-hidden cyber-glass cyber-corners border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                      {/* Software Window Header */}
                      <div className="flex items-center justify-between px-4 py-2.5 bg-black/50 border-b border-white/5 text-xs font-mono select-none">
                        <div className="flex items-center gap-2 min-w-0">
                          <div className="flex items-center gap-1.5 shrink-0">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <span
                            className="text-[11px] text-muted-foreground/70 truncate max-w-[140px] sm:max-w-[180px]"
                            title={displayUrl}
                          >
                            {displayUrl}
                          </span>
                        </div>

                        <div className="shrink-0">
                          {project.award ? (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-primary/15 text-primary border border-primary/30">
                              {project.award}
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] text-emerald-400 bg-emerald-950/40 border border-emerald-500/25">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              {t.projects.status_production}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Visual Preview */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-black/40">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full h-full"
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300 z-10" />
                          <img
                            src={project.image}
                            alt={project.title}
                            loading="lazy"
                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                          />
                        </a>
                      </div>

                      {/* Details & Actions */}
                      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                              {project.title}
                            </h3>
                            {project.destaque && (
                              <Badge
                                variant="outline"
                                className="text-[10px] uppercase font-mono tracking-wider border-primary/30 text-primary bg-primary/10 shrink-0"
                              >
                                {t.projects.featured_badge}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                        </div>

                        <div className="space-y-4 pt-2">
                          {/* Tech Pills */}
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-muted-foreground border border-white/10 group-hover:border-primary/20 group-hover:text-foreground/90 transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>

                          {/* Footer Actions */}
                          <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
                            <div className="flex items-center gap-2">
                              <Button
                                asChild
                                size="sm"
                                className="h-8 px-3 text-xs bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-sm transition-all"
                              >
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="mr-1.5 h-3.5 w-3.5" />
                                  {t.projects.view}
                                </a>
                              </Button>

                              {project.repositoryUrl && (
                                project.isPrivateRepo ? (
                                  <span
                                    className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-muted-foreground/60 border border-white/10 rounded select-none font-mono"
                                    title={t.projects.repository_private_tooltip}
                                  >
                                    <Lock className="h-3.5 w-3.5" />
                                    <span>{t.projects.repository_private}</span>
                                  </span>
                                ) : (
                                  <Button
                                    asChild
                                    size="sm"
                                    variant="outline"
                                    className="h-8 px-3 text-xs border-white/15 hover:border-primary/40 hover:bg-primary/10 text-foreground transition-all"
                                  >
                                    <a
                                      href={project.repositoryUrl}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Github className="mr-1.5 h-3.5 w-3.5" />
                                      {t.projects.repository}
                                    </a>
                                  </Button>
                                )
                              )}
                            </div>

                            {project.contribuitor && (
                              <span
                                className="text-[11px] font-mono text-muted-foreground/75 truncate max-w-[120px]"
                                title={`Colaboração: ${project.contribuitor}`}
                              >
                                <Code2 className="inline h-3 w-3 mr-1 text-primary/70" />
                                {project.contribuitor.split(",")[0]}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
