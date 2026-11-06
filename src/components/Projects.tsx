import { useEffect, useRef, useState, useMemo } from "react";
import {
  ExternalLink,
  Code2,
  Github,
  Lock,
  Terminal,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLanguage } from "@/context/LanguageContext";
import { getProjects, type Project } from "@/lib/Projects";
import SplitTitle from "./SplitTitle";
import SpotlightCard from "./SpotlightCard";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS_PER_PAGE = 6;

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
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const isPt = language === "pt";

  const projects = useMemo(() => getProjects(isPt), [isPt]);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);

  const paginatedProjects = useMemo(() => {
    const startIndex = (currentPage - 1) * PROJECTS_PER_PAGE;
    return projects.slice(startIndex, startIndex + PROJECTS_PER_PAGE);
  }, [projects, currentPage]);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 space-y-3">
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

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {paginatedProjects.map((project) => {
            const displayUrl = formatDisplayUrl(project.liveUrl);

            return (
              <div key={project.title} className="h-full">
                <SpotlightCard className="h-full rounded-2xl">
                  <Card className="h-full overflow-hidden cyber-glass cyber-corners border-white/10 hover:border-primary/50 transition-all duration-300 flex flex-col justify-between group shadow-xl">
                    {/* Window Title Bar */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center justify-between px-4 py-2.5 bg-black/50 border-b border-white/5 text-xs font-mono select-none cursor-pointer"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="flex items-center gap-1.5 shrink-0">
                          <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span
                          className="text-[11px] text-muted-foreground/70 truncate max-w-[140px] sm:max-w-[170px]"
                          title={displayUrl}
                        >
                          {displayUrl}
                        </span>
                      </div>

                      <div className="shrink-0 flex items-center gap-1.5">
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

                    {/* Preview Image with Click Trigger */}
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="relative aspect-[16/10] overflow-hidden bg-black/40 cursor-pointer"
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-300 z-10" />
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute bottom-3 right-3 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono bg-black/80 text-primary border border-primary/30 backdrop-blur-md">
                          <Maximize2 className="w-3 h-3" />
                          <span>{t.projects.view_details}</span>
                        </span>
                      </div>
                    </div>

                    {/* Content Details */}
                    <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between gap-4">
                      <div
                        onClick={() => setSelectedProject(project)}
                        className="space-y-2 cursor-pointer"
                      >
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
                        {/* Tech Stack Tags */}
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono bg-white/[0.04] text-muted-foreground border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 4 && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-mono text-muted-foreground/70">
                              +{project.technologies.length - 4}
                            </span>
                          )}
                        </div>

                        {/* Action Footer */}
                        <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
                          <div className="flex items-center gap-2">
                            <Button
                              size="sm"
                              onClick={() => setSelectedProject(project)}
                              className="h-8 px-3 text-xs bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-sm transition-all"
                            >
                              <Maximize2 className="mr-1.5 h-3.5 w-3.5" />
                              {t.projects.view_details}
                            </Button>

                            <Button
                              asChild
                              size="sm"
                              variant="outline"
                              className="h-8 px-2.5 text-xs border-white/15 hover:border-primary/40 hover:bg-primary/10 text-foreground transition-all"
                            >
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={t.projects.view}
                              >
                                <ExternalLink className="h-3.5 w-3.5" />
                              </a>
                            </Button>

                            {project.repositoryUrl && (
                              project.isPrivateRepo ? (
                                <span
                                  className="inline-flex items-center px-2 py-1 text-xs text-muted-foreground/50 border border-white/5 rounded select-none font-mono"
                                  title={t.projects.repository_private_tooltip}
                                >
                                  <Lock className="h-3.5 w-3.5" />
                                </span>
                              ) : (
                                <Button
                                  asChild
                                  size="sm"
                                  variant="outline"
                                  className="h-8 px-2.5 text-xs border-white/15 hover:border-primary/40 hover:bg-primary/10 text-foreground transition-all"
                                >
                                  <a
                                    href={project.repositoryUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={t.projects.repository}
                                  >
                                    <Github className="h-3.5 w-3.5" />
                                  </a>
                                </Button>
                              )
                            )}
                          </div>

                          {project.contribuitor && (
                            <span
                              className="text-[11px] font-mono text-muted-foreground/70 truncate max-w-[100px]"
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
              </div>
            );
          })}
        </div>

        {/* Pagination Navigation */}
        {totalPages > 1 && (
          <nav
            aria-label={isPt ? "Navegação entre páginas de projetos" : "Projects page navigation"}
            className="mt-12 sm:mt-16 flex items-center justify-center gap-2 sm:gap-3"
          >
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              aria-label={t.projects.pagination_prev}
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl cyber-glass border-white/10 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex items-center gap-1.5 px-2 py-1 rounded-xl cyber-glass border border-white/10">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                const isActive = page === currentPage;
                return (
                  <button
                    key={page}
                    onClick={() => goToPage(page)}
                    aria-current={isActive ? "page" : undefined}
                    aria-label={`${t.projects.pagination_page} ${page}`}
                    className={`h-8 w-8 sm:h-9 sm:w-9 rounded-lg font-mono text-xs sm:text-sm font-medium transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground font-bold shadow-neon border border-primary"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                    }`}
                  >
                    {page}
                  </button>
                );
              })}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              aria-label={t.projects.pagination_next}
              className="h-9 w-9 sm:h-10 sm:w-10 rounded-xl cyber-glass border-white/10 hover:border-primary/40 hover:bg-primary/10 text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:pointer-events-none transition-all"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </nav>
        )}
      </div>

      {/* Project Details Modal / Popup */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        <DialogContent className="w-[94vw] sm:w-full max-w-2xl lg:max-w-3xl max-h-[85dvh] sm:max-h-[88vh] overflow-y-auto overflow-x-hidden cyber-scrollbar cyber-glass border border-white/15 p-0 gap-0 bg-[#040711]/95 backdrop-blur-2xl text-foreground shadow-2xl rounded-2xl">
          {selectedProject && (
            <div className="w-full max-w-full overflow-x-hidden">
              {/* Window Header */}
              <div className="flex items-center justify-between px-3.5 sm:px-5 py-2.5 sm:py-3 bg-black/60 border-b border-white/10 select-none pr-11 sm:pr-12">
                <div className="flex items-center gap-1.5 sm:gap-2 min-w-0">
                  <div className="flex items-center gap-1 shrink-0">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span
                    className="ml-1 sm:ml-2 font-mono text-[11px] sm:text-xs text-muted-foreground/80 truncate max-w-[110px] sm:max-w-[220px]"
                    title={formatDisplayUrl(selectedProject.liveUrl)}
                  >
                    {formatDisplayUrl(selectedProject.liveUrl)}
                  </span>
                </div>
                <div className="shrink-0 flex items-center">
                  {selectedProject.award ? (
                    <Badge className="bg-primary/20 text-primary border border-primary/30 text-[10px] sm:text-xs font-semibold px-2 py-0.5 truncate max-w-[130px] sm:max-w-none">
                      {selectedProject.award}
                    </Badge>
                  ) : (
                    <Badge variant="outline" className="text-emerald-400 border-emerald-500/30 bg-emerald-950/30 text-[10px] sm:text-xs px-2 py-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse mr-1" />
                      {t.projects.status_production}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Preview Image in Modal */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/50 border-b border-white/10">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#040711] via-[#040711]/30 to-transparent opacity-90" />
                <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 flex flex-col items-start gap-1">
                  <DialogTitle className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white drop-shadow-md break-words">
                    {selectedProject.title}
                  </DialogTitle>
                  {selectedProject.scope && (
                    <span className="inline-block text-[11px] sm:text-xs font-mono text-primary bg-primary/15 border border-primary/25 px-2 py-0.5 rounded break-words max-w-full">
                      {selectedProject.scope}
                    </span>
                  )}
                </div>
              </div>

              {/* Details Body */}
              <div className="p-4 sm:p-6 md:p-8 space-y-4 sm:space-y-6 overflow-x-hidden max-w-full">
                <DialogDescription className="text-xs sm:text-sm md:text-base text-foreground/90 leading-relaxed font-normal break-words">
                  {selectedProject.context || selectedProject.description}
                </DialogDescription>

                {/* Technical Highlights */}
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-primary" />
                      <span>{t.projects.modal_highlights_label}</span>
                    </h4>
                    <div className="space-y-2">
                      {selectedProject.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-xs sm:text-sm text-foreground/85 bg-white/[0.02] border border-white/5 rounded-lg p-2.5 sm:p-3"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="break-words leading-relaxed flex-1 min-w-0 font-sans">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="space-y-2.5">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {t.projects.modal_stack_label}
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-1 rounded text-xs font-mono bg-white/[0.04] text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Collaboration & Attribution */}
                {selectedProject.contribuitor && (
                  <div className="text-xs font-mono text-muted-foreground pt-1">
                    <span>{t.projects.collaboration}: </span>
                    <span className="text-foreground font-semibold">
                      {selectedProject.contribuitor}
                    </span>
                  </div>
                )}

                {/* Action Buttons in Modal */}
                <div className="pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full sm:w-auto">
                    <Button
                      asChild
                      size="default"
                      className="h-10 px-4 text-xs sm:text-sm bg-primary text-primary-foreground hover:bg-primary/90 font-medium shadow-neon w-full sm:w-auto justify-center"
                    >
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        {t.projects.modal_visit_btn}
                      </a>
                    </Button>

                    {selectedProject.repositoryUrl && (
                      selectedProject.isPrivateRepo ? (
                        <div
                          className="flex items-center justify-center gap-2 px-3.5 py-2 text-xs text-muted-foreground/60 border border-white/10 rounded-md select-none font-mono w-full sm:w-auto text-center"
                          title={t.projects.repository_private_tooltip}
                        >
                          <Lock className="h-3.5 w-3.5 shrink-0" />
                          <span className="truncate">{t.projects.modal_private_repo_btn}</span>
                        </div>
                      ) : (
                        <Button
                          asChild
                          variant="outline"
                          size="default"
                          className="h-10 px-4 text-xs sm:text-sm border-white/20 hover:border-primary/40 hover:bg-primary/10 text-foreground w-full sm:w-auto justify-center"
                        >
                          <a
                            href={selectedProject.repositoryUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="mr-2 h-4 w-4" />
                            {t.projects.modal_repo_btn}
                          </a>
                        </Button>
                      )
                    )}
                  </div>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setSelectedProject(null)}
                    className="text-muted-foreground hover:text-foreground text-xs font-mono h-9 w-full sm:w-auto"
                  >
                    {t.projects.modal_close_btn}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
