import { useEffect, useRef } from "react";
import gsap from "gsap";

export function useMouseParallax(strength = 20) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * strength;
      const y = (e.clientY / innerHeight - 0.5) * strength;
      gsap.to(el, { x, y, duration: 0.8, ease: "power2.out" });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [strength]);

  return ref;
}
