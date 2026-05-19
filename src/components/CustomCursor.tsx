import { useEffect, useRef } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.1, ease: "none" });
      gsap.to(ring, { x: mouseX, y: mouseY, duration: 0.35, ease: "power2.out" });
    };

    const onEnterClickable = () => {
      gsap.to(ring, { scale: 2.2, opacity: 0.5, duration: 0.3, ease: "power2.out", borderColor: "hsl(189 100% 50%)" });
      gsap.to(dot, { scale: 0.4, duration: 0.3, ease: "power2.out" });
    };

    const onLeaveClickable = () => {
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: "power2.out", borderColor: "hsl(189 100% 50% / 0.6)" });
      gsap.to(dot, { scale: 1, duration: 0.3, ease: "power2.out" });
    };

    window.addEventListener("mousemove", moveCursor);

    const addListeners = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", onEnterClickable);
        el.addEventListener("mouseleave", onLeaveClickable);
      });
    };
    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "hsl(189 100% 50%)",
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid hsl(189 100% 50% / 0.6)",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
};

export default CustomCursor;
