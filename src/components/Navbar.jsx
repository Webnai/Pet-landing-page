import { useRef, useState } from "react";
import logo from "../assets/Logo.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants/index.js";
import { gsap, ScrollTrigger, useGSAP } from "../lib/gsapConfig";

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          navRef.current.querySelectorAll(".nav-reveal"),
          { opacity: 0, y: -16 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", stagger: 0.06 }
        );
      });

      const shrink = ScrollTrigger.create({
        start: "top -40",
        onEnter: () =>
          gsap.to(navRef.current, {
            paddingTop: 10,
            paddingBottom: 10,
            backgroundColor: "rgba(48,81,255,0.85)",
            backdropFilter: "blur(14px)",
            boxShadow: "0 10px 30px -15px rgba(0,0,0,0.45)",
            duration: 0.35,
            ease: "power2.out",
          }),
        onLeaveBack: () =>
          gsap.to(navRef.current, {
            paddingTop: 24,
            paddingBottom: 24,
            backgroundColor: "rgba(48,81,255,0)",
            backdropFilter: "blur(0px)",
            boxShadow: "0 0 0 rgba(0,0,0,0)",
            duration: 0.35,
            ease: "power2.out",
          }),
      });

      return () => {
        mm.revert();
        shrink.kill();
      };
    },
    { scope: navRef }
  );

  useGSAP(
    () => {
      if (!mobileMenuRef.current) return;
      if (toggle) {
        gsap.set(mobileMenuRef.current, { display: "flex" });
        gsap.fromTo(
          mobileMenuRef.current,
          { opacity: 0, y: -12, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "power3.out" }
        );
      } else {
        gsap.to(mobileMenuRef.current, {
          opacity: 0,
          y: -12,
          scale: 0.98,
          duration: 0.25,
          ease: "power2.in",
          onComplete: () => gsap.set(mobileMenuRef.current, { display: "none" }),
        });
      }
    },
    { dependencies: [toggle], scope: navRef }
  );

  return (
    <nav
      ref={navRef}
      className="w-full inline-flex items-center lg:px-32 px-4 pt-6 pb-6 justify-between align-middle sticky top-0 z-50"
    >
      <div className="flex w-full gap-4 sm:gap-12 items-center relative">
        <img
          src={logo}
          alt="logo"
          className="nav-reveal object-contain w-14 h-9 sm:w-16 sm:h-10 cursor-pointer"
        />
        <ul className="lg:inline-flex hidden gap-6 w-auto text-black top-[38px]">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`nav-reveal ${
                active === link.title ? "text-[#f9f9f9]" : "text-[#AEBBFF]"
              } text-[18px] hover:font-bold cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:flex gap-4 hidden font-bold shrink-0">
        <button
          onClick={() => scrollToId("waitlist")}
          className="nav-reveal gsap-hover-btn lg:bg-[#183DFF] hover:bg-white hover:border-blue hover:text-blue text-white border-white"
        >
          Join Waitlist
        </button>
        <button
          onClick={() => scrollToId("waitlist")}
          className="nav-reveal gsap-hover-btn w-32 hover:text-white hover:bg-blue hover:border-white"
        >
          Free Call
        </button>
      </div>

      <div>
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="nav-reveal lg:hidden cursor-pointer w-10 h-10"
          onClick={() => setToggle(!toggle)}
        />
        <div
          ref={mobileMenuRef}
          className="hidden flex-col p-4 bg-[#3051FF] rounded-2xl shadow-xl absolute top-20 right-4 left-4 sm:left-auto sm:min-w-[200px] z-10 gap-4"
        >
          <ul className="list-none flex items-start flex-col gap-4 w-full">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-[#f9f9f9]" : "text-[#AEBBFF]"
                } text-[18px] cursor-pointer`}
                onClick={() => {
                  setActive(link.title);
                  setToggle(false);
                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => {
              scrollToId("waitlist");
              setToggle(false);
            }}
            className="w-full bg-white text-[#183DFF] font-bold"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
