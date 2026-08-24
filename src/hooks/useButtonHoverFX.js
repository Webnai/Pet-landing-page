import { useEffect } from "react";
import { gsap } from "../lib/gsapConfig";

const BUTTON_SELECTOR = ".gsap-hover-btn";
const ICON_SELECTOR = ".gsap-hover-icon";

/**
 * Delegated hover micro-interaction for every element marked `.gsap-hover-btn`
 * across the page (pills, CTAs, arrow buttons). Lifts the button slightly and
 * pops/rotates its `.gsap-hover-icon` child. Mount once at the app root.
 */
export default function useButtonHoverFX() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const noHover = window.matchMedia("(hover: none)").matches;
    if (reduceMotion || noHover) return;

    const handleEnter = (e) => {
      const btn = e.target.closest?.(BUTTON_SELECTOR);
      if (!btn) return;
      const icon = btn.querySelector(ICON_SELECTOR);
      gsap.to(btn, { y: -3, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      if (icon) gsap.to(icon, { scale: 1.15, rotate: 12, duration: 0.35, ease: "back.out(2)", overwrite: "auto" });
    };

    const handleLeave = (e) => {
      const btn = e.target.closest?.(BUTTON_SELECTOR);
      if (!btn) return;
      const icon = btn.querySelector(ICON_SELECTOR);
      gsap.to(btn, { y: 0, duration: 0.3, ease: "power2.out", overwrite: "auto" });
      if (icon) gsap.to(icon, { scale: 1, rotate: 0, duration: 0.35, ease: "power2.out", overwrite: "auto" });
    };

    document.addEventListener("mouseenter", handleEnter, true);
    document.addEventListener("mouseleave", handleLeave, true);

    return () => {
      document.removeEventListener("mouseenter", handleEnter, true);
      document.removeEventListener("mouseleave", handleLeave, true);
    };
  }, []);
}
