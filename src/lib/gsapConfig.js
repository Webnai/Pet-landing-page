import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

ScrollTrigger.defaults({
  toggleActions: "play none none none",
  markers: false,
});

export const EASE = "power3.out";
export const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, useGSAP };
