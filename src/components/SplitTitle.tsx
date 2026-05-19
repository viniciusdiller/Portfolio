import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTitleProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  delay?: number;
}

const SplitTitle = ({ children, className = "", as: Tag = "h2", delay = 0 }: SplitTitleProps) => {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll(".char");

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        { opacity: 0, y: 60, rotateX: -90, transformOrigin: "50% 0%" },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.7,
          ease: "back.out(1.5)",
          stagger: 0.03,
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay]);

  const words = children.split(" ");

  return (
    <Tag
      ref={containerRef}
      className={className}
      style={{ perspective: 600, display: "flex", flexWrap: "wrap", gap: "0 0.25em", justifyContent: "center" }}
    >
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-flex", overflow: "hidden" }}>
          {word.split("").map((char, ci) => (
            <span
              key={ci}
              className="char"
              style={{
                display: "inline-block",
                opacity: 0,
                willChange: "transform, opacity",
              }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </Tag>
  );
};

export default SplitTitle;
