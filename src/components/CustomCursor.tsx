import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices to save resources
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let isHovering = false;

    const moveCursor = (e: MouseEvent) => {
      const { clientX: x, clientY: y, target } = e;

      // Quick 60fps GPU translate without layout recalculation
      gsap.to(dot, { x, y, duration: 0.08, ease: "none", overwrite: "auto" });
      gsap.to(ring, { x, y, duration: 0.25, ease: "power2.out", overwrite: "auto" });

      // Event delegation for clickable elements (O(1), zero MutationObservers, zero memory leak)
      const el = target as HTMLElement | null;
      const clickable = Boolean(el?.closest?.("a, button, [role='button'], input, textarea, select"));

      if (clickable && !isHovering) {
        isHovering = true;
        gsap.to(ring, { scale: 1.8, opacity: 0.6, duration: 0.2, borderColor: "hsl(189 100% 50%)" });
        gsap.to(dot, { scale: 0.5, duration: 0.2 });
      } else if (!clickable && isHovering) {
        isHovering = false;
        gsap.to(ring, { scale: 1, opacity: 1, duration: 0.2, borderColor: "hsl(189 100% 50% / 0.6)" });
        gsap.to(dot, { scale: 1, duration: 0.2 });
      }
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "hsl(189 100% 50%)",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2 will-change-transform"
        style={{
          width: 32,
          height: 32,
          borderRadius: "50%",
          border: "1.5px solid hsl(189 100% 50% / 0.6)",
        }}
      />
    </>
  );
};

export default CustomCursor;
