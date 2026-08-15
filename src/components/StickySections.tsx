import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Children, ReactNode, useRef } from "react";

interface StickySectionsProps {
  children: ReactNode;
  className?: string;
}

const StickySections = ({ children, className }: StickySectionsProps) => {
  const container = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const panels = Children.toArray(children);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      const panelElements = panelRefs.current;
      const total = panelElements.length;

      if (!panelElements[0] || total < 2) return;

      gsap.set(panelElements[0], { y: "0%", scale: 1, rotation: 0 });

      for (let i = 1; i < total; i++) {
        if (!panelElements[i]) continue;
        gsap.set(panelElements[i], { y: "100%", scale: 1, rotation: 0 });
      }

      const scrollTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".sticky-sections",
          start: "top top",
          end: `+=${window.innerHeight * (total - 1)}`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
        },
      });

      for (let i = 0; i < total - 1; i++) {
        const currentPanel = panelElements[i];
        const nextPanel = panelElements[i + 1];
        const position = i;
        if (!currentPanel || !nextPanel) continue;

        scrollTimeline.to(
          currentPanel,
          {
            scale: 0.92,
            rotation: 2,
            duration: 1,
            ease: "none",
          },
          position,
        );

        scrollTimeline.to(
          nextPanel,
          {
            y: "0%",
            duration: 1,
            ease: "none",
          },
          position,
        );
      }

      return () => {
        scrollTimeline.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container, dependencies: [panels.length] },
  );

  return (
    <div className={className} ref={container}>
      <div className="sticky-sections relative h-screen w-full overflow-hidden">
        {panels.map((panel, i) => (
          <div
            key={i}
            ref={(el) => {
              panelRefs.current[i] = el;
            }}
            className="absolute inset-0 h-full w-full overflow-y-auto bg-background"
          >
            {panel}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StickySections;
