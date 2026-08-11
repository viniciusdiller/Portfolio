import { Badge } from "@/components/ui/badge";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { useLanguage } from "@/context/LanguageContext";
import { getProjects } from "@/lib/Projects";

const FeaturedScroll = () => {
  const { language } = useLanguage();
  const isPt = language === "pt";
  const project = getProjects(isPt).find((p) => p.destaque);

  if (!project) return null;

  return (
    <section className="overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="space-y-4">
            {project.award && (
              <Badge className="border-0 bg-secondary text-secondary-foreground shadow-lg px-3 py-1 text-xs">
                {project.award}
              </Badge>
            )}
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl">
              {project.title}
            </h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground sm:text-lg">
              {project.description}
            </p>
            <div className="flex flex-wrap justify-center gap-2 pt-2">
              {project.technologies.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="border-primary/20 bg-primary/5 text-primary"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        }
      >
        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block h-full w-full">
          <img
            src={project.image}
            alt={project.title}
            className="mx-auto h-full w-full rounded-2xl object-cover object-top"
            draggable={false}
          />
        </a>
      </ContainerScroll>
    </section>
  );
};

export default FeaturedScroll;
