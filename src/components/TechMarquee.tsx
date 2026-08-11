import { useMemo } from "react";
import { getProjects } from "@/lib/Projects";

const TechMarquee = () => {
  const technologies = useMemo(() => {
    const all = getProjects(true).flatMap((p) => p.technologies);
    return Array.from(new Set(all));
  }, []);

  const loop = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden py-6 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max gap-10 animate-marquee">
        {loop.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-2 font-mono text-sm sm:text-base text-muted-foreground/80 whitespace-nowrap"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/70" />
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
