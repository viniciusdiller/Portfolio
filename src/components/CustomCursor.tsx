import { useEffect, useRef } from "react";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable on touch devices / coarse pointers
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isHovered = false;
    let isVisible = false;
    let rafId: number;

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
        ringX = mouseX;
        ringY = mouseY;
      }

      // DIRECT 0ms update for the central dot (hardware cursor equivalence)
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) scale(${isHovered ? 0.4 : 1})`;

      // Check if hovering clickable element via fast O(1) delegation
      const target = e.target as HTMLElement | null;
      const clickable = Boolean(target?.closest?.("a, button, [role='button'], input, textarea, select"));

      if (clickable !== isHovered) {
        isHovered = clickable;
        if (isHovered) {
          ring.style.borderColor = "hsl(183 100% 50%)";
          ring.style.backgroundColor = "hsl(183 100% 50% / 0.08)";
        } else {
          ring.style.borderColor = "hsl(183 100% 50% / 0.5)";
          ring.style.backgroundColor = "transparent";
        }
      }
    };

    // Tight 60/120Hz lerp for the trailing ring (responsive trailing aura, no sluggish lag)
    const renderLoop = () => {
      if (isVisible) {
        // High lerp factor (0.35) snaps to position within 2-3 frames
        ringX += (mouseX - ringX) * 0.35;
        ringY += (mouseY - ringY) * 0.35;

        const scale = isHovered ? 1.7 : 1;
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) scale(${scale})`;
      }

      rafId = requestAnimationFrame(renderLoop);
    };

    const onPointerLeave = () => {
      isVisible = false;
      if (dot) dot.style.opacity = "0";
      if (ring) ring.style.opacity = "0";
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.addEventListener("mouseleave", onPointerLeave);
    rafId = requestAnimationFrame(renderLoop);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("mouseleave", onPointerLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Zero-delay precision point */}
      <div
        ref={dotRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150 will-change-transform"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "hsl(183 100% 50%)",
          boxShadow: "0 0 10px hsl(183 100% 50% / 0.8)",
        }}
      />

      {/* Responsive aura ring */}
      <div
        ref={ringRef}
        aria-hidden="true"
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 opacity-0 transition-colors duration-200 will-change-transform"
        style={{
          width: 34,
          height: 34,
          borderRadius: "50%",
          border: "1.5px solid hsl(183 100% 50% / 0.5)",
          boxShadow: "0 0 15px hsl(183 100% 50% / 0.2)",
        }}
      />
    </>
  );
};

export default CustomCursor;
