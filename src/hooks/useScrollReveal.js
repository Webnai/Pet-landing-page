import { useRef } from "react";
import { gsap, useGSAP, EASE, REDUCED_MOTION_QUERY } from "../lib/gsapConfig";

/**
 * Reveals a section (or its children, via `targets`) as it scrolls into view.
 * Respects prefers-reduced-motion by snapping content straight to its final state.
 */
export function useScrollReveal({
  targets,
  y = 60,
  x = 0,
  scale = 1,
  stagger = 0,
  duration = 0.9,
  ease = EASE,
  start = "top 85%",
} = {}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const mm = gsap.matchMedia();

      mm.add(REDUCED_MOTION_QUERY, () => {
        const els = targets
          ? containerRef.current.querySelectorAll(targets)
          : containerRef.current;

        gsap.fromTo(
          els,
          { opacity: 0, y, x, scale },
          {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            duration,
            ease,
            stagger,
            scrollTrigger: {
              trigger: containerRef.current,
              start,
            },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: containerRef }
  );

  return containerRef;
}
