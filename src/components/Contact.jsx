import { useRef, useState } from "react";
import bluearrow from "../assets/white-arrow-up-right.svg";
import whiteArrow from "../assets/arrow-up-right.svg";
import { gsap, useGSAP } from "../lib/gsapConfig";
import { useScrollReveal } from "../hooks/useScrollReveal";

// TODO(user): Replace with your real Formspree endpoint after completing the
// manual setup steps (sign up at formspree.io, create a form, verify your
// email, copy the endpoint). Set it as VITE_FORMSPREE_ENDPOINT in a local
// .env file (see .env.example) rather than editing this fallback directly.
const FORMSPREE_ENDPOINT =
  import.meta.env.VITE_FORMSPREE_ENDPOINT || "https://formspree.io/f/YOUR_FORM_ID";

const ROLES = ["Veterinarian", "Practice Manager / Owner", "Vet Tech / Staff", "Other"];

const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

const Contact = () => {
  const panelRef = useScrollReveal({ y: 40, scale: 0.98, start: "top 88%" });
  const successRef = useRef(null);
  const checkPathRef = useRef(null);

  const [formData, setFormData] = useState({ name: "", email: "", role: ROLES[0] });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState("");

  useGSAP(
    () => {
      if (status !== "success" || !successRef.current) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(successRef.current, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.5 });

        const path = checkPathRef.current;
        if (path) {
          const length = path.getTotalLength();
          gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
          tl.to(path, { strokeDashoffset: 0, duration: 0.5, ease: "power2.out" }, "-=0.2");
        }
      });
      return () => mm.revert();
    },
    { dependencies: [status] }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setStatus("error");
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const body = new FormData();
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("role", formData.role);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body,
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage("Something went wrong sending your request. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Couldn't reach the server. Check your connection and try again.");
    }
  };

  return (
    <div id="waitlist" className="scroll-mt-24 w-[92%] sm:w-[85%] lg:w-[83%] m-auto mb-40">
      <div ref={panelRef} className="rounded-2xl flex flex-col lg:flex-row bg-[#3051FF] overflow-hidden">
        <div className="w-full lg:w-1/2 flex flex-col justify-between gap-8 p-6 sm:p-10 lg:p-12">
          <div>
            <h1 className="text-[28px] xs:text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold">
              Join the waitlist
            </h1>
            <h1 className="text-[28px] xs:text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold">
              Be first in line for early access
            </h1>
          </div>

          <div className="flex gap-4 items-center">
            <a
              href="mailto:wilbertboadzo144@gmail.com"
              className="gsap-hover-btn flex items-center gap-4"
            >
              <p className="text-[16px] sm:text-[19px] lg:text-[22px] font-bold break-words">
                wilbertboadzo144@gmail.com
              </p>
              <div className="gsap-hover-icon flex bg-[white] rounded-full p-2 items-start flex-end shrink-0">
                <img src={bluearrow} alt=""></img>
              </div>
            </a>
          </div>
        </div>

        <div className="flex flex-col bg-white w-full lg:w-1/2 p-6 sm:p-10 lg:p-12 justify-center min-h-[420px]">
          {status === "success" ? (
            <div ref={successRef} className="flex flex-col items-center text-center gap-4 text-blue">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="30" stroke="#183DFF" strokeWidth="3" />
                <path
                  ref={checkPathRef}
                  d="M18 33L27 42L46 22"
                  stroke="#183DFF"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
              <h2 className="text-[24px] sm:text-[28px] font-bold">You&apos;re on the list!</h2>
              <p className="text-[16px] sm:text-[18px]">
                Thanks, {formData.name.split(" ")[0] || "friend"}. We&apos;ll email you at {formData.email} as soon as we&apos;re ready for you.
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-8" onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col gap-6">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  disabled={status === "submitting"}
                  className="placeholder-[#DEDEDE] w-full text-[18px] sm:text-[24px] text-blue border-b-2 border-blue bg-white outline-none disabled:opacity-50"
                />
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  disabled={status === "submitting"}
                  className="placeholder-[#DEDEDE] w-full text-[18px] sm:text-[24px] text-blue border-b-2 border-blue bg-white outline-none disabled:opacity-50"
                />
                <select
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  disabled={status === "submitting"}
                  className="w-full text-[18px] sm:text-[24px] text-blue border-b-2 border-blue bg-white outline-none disabled:opacity-50"
                >
                  {ROLES.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </div>

              {status === "error" && (
                <p className="text-red-600 text-[14px] sm:text-[16px]">{errorMessage}</p>
              )}

              <div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="gsap-hover-btn flex items-center bg-white border-2 border-blue text-blue rounded-3xl p-1 gap-3 disabled:opacity-60"
                >
                  <p className="font-bold pl-8">
                    {status === "submitting" ? "Sending..." : "Join Waitlist"}
                  </p>
                  <div className="gsap-hover-icon bg-blue rounded-full p-2">
                    <img src={whiteArrow} alt="" />
                  </div>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
