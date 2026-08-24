import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import cat1 from "../assets/Cat-hero.png";
import phone from "../assets/Phone.svg";
import arrowUp from "../assets/arrow-up-right.svg";
import catHeart1 from "../assets/cat-heart.svg";
import catHeart2 from "../assets/cat-heart2.svg";
import cat2heart1 from "../assets/cat2-hero-heart.svg";
import cat2heart2 from "../assets/cat2-hero-heart2.svg";
import cat2 from "../assets/cat2-hero.png";
import dogHeart1 from "../assets/dog-heart.svg";
import dogHeart2 from "../assets/dog-heart2.svg";
import dog from "../assets/dog-hero.png";
import map from "../assets/map-pin.svg";
import tail from "../assets/tail.svg";
import { gsap, useGSAP } from "../lib/gsapConfig";

const Hero = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out" } })
          .fromTo(
            heroRef.current.querySelectorAll(".hero-reveal"),
            { opacity: 0, y: 24 },
            { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }
          )
          .fromTo(
            heroRef.current.querySelectorAll(".hero-card"),
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.15 },
            "-=0.5"
          );

        const isDesktop = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        if (!isDesktop) return;

        const parallaxTargets = heroRef.current.querySelectorAll(".hero-parallax");
        const movers = Array.from(parallaxTargets).map((el, i) => ({
          el,
          x: gsap.quickTo(el, "x", { duration: 0.6, ease: "power3.out" }),
          y: gsap.quickTo(el, "y", { duration: 0.6, ease: "power3.out" }),
          strength: 8 + i * 2,
        }));

        const handleMove = (e) => {
          const { innerWidth, innerHeight } = window;
          const relX = e.clientX / innerWidth - 0.5;
          const relY = e.clientY / innerHeight - 0.5;
          movers.forEach(({ x, y, strength }) => {
            x(relX * strength);
            y(relY * strength);
          });
        };

        heroRef.current.addEventListener("mousemove", handleMove);
        return () => heroRef.current?.removeEventListener("mousemove", handleMove);
      });

      return () => mm.revert();
    },
    { scope: heroRef }
  );

  return (
    <div id="about" ref={heroRef} className="w-[85%] mb-[46px] m-auto scroll-mt-24">
      <div>
        <div className="lg:flex lg:flex-row flex flex-col items-center justify-center lg:gap-6 text-center lg:text-left">
          <div className="hero-reveal font-optima text-white font-bold text-[42px] xs:text-[52px] sm:text-[64px] md:text-[88px] lg:text-[140px] leading-none">
            We
            <Typewriter
              words={[" are Pet."]}
              loop={true}
              cursor={true}
              cursorStyle=""
              typeSpeed={100}
              deleteSpeed={50}
              delaySpeed={6000}
            />
          </div>
          <div className="hero-reveal gsap-hover-btn inline-flex rounded-3xl self-center p-4 bg-[#3051FF] hover:-mt-[4px] hover:border-white border border-hidden hover:border-solid hover:cursor-pointer text-[16px] sm:text-[18px] mt-4 lg:mt-0">
            <img src={phone} alt=""></img>
            +1 234 567 890
          </div>
        </div>

        <h1 className="hero-reveal text-[26px] xs:text-[30px] font-bold lg:text-[56px] m-auto text-center">
          Caring Vets, Healthy Pets - Trust Us
        </h1>
      </div>

      <div className="lg:flex w-full pt-[40px] gap-10 lg:gap-20 m-0">
        <div className="flex-col w-full lg:w-[50%]">
          <div className="flex flex-col xs:flex-row items-center mb-4 lg:mb-8 gap-4">
            <div className="hero-card hero-parallax bg-[#3051FF] rounded-3xl relative w-full xs:w-auto flex justify-center">
              <img src={cat1} className="mt-[-40px] max-w-full h-auto" alt="Cat at the vet"></img>
              <img src={catHeart1} className="absolute lg:top-16 top-10 lg:left-3 left-3"></img>
              <img src={catHeart2} className="absolute lg:top-28 top-16 right-0 lg:right-2"></img>
            </div>

            <div className="w-full xs:w-[55%]">
              <p className="text-[13px] xs:text-[10px] lg:text-[18px] font-thin mb-2">
                Our veterinary clinic is a compassionate and skilled facility
                dedicated to providing high-quality medical care for pets.
              </p>
              <div className="gsap-hover-btn inline-flex items-center bg-white text-[#183DFF] rounded-3xl p-1 gap-3">
                <p className="font-bold pl-8">Services</p>
                <div className="gsap-hover-icon bg-[#183DFF] rounded-full p-2">
                  <img src={arrowUp} alt=""></img>
                </div>
              </div>
            </div>
          </div>

          <div className="gsap-hover-btn inline-flex bg-[#3051FF] items-center gap-1 p-4 rounded-full">
            <img src={map} alt=""></img>
            <p className="text-[12px] lg:text-[14px]">2715 Ash Dr. San Jose, South Dakota 83475</p>
          </div>
        </div>

        <div className="lg:flex w-full lg:w-[50%] gap-6 relative mt-10 lg:mt-0">
          <div className="hero-card hero-parallax flex flex-col mt-[40px] w-full max-w-[300px] mx-auto lg:mx-0">
            <div className="bg-white rounded-3xl relative flex justify-center">
              <img src={dog} className="mt-[-40px] max-w-full h-auto" alt="Dog at the vet"></img>
              <img src={dogHeart1} className="absolute top-28 left-3"></img>
              <img src={dogHeart2} className="absolute top-16 right-2"></img>
            </div>
            <p className="text-center xs:text-left">Trust us to be your go-to vet clinic for all your pet&apos;s healthcare needs.</p>
          </div>

          <div className="hero-card flex flex-col items-center lg:items-start lg:mt-[-20px] mt-6 lg:mt-[-20px]">
            <div className="hero-parallax bg-[#3051FF] mt-10 rounded-3xl mb-2 relative flex justify-center overflow-hidden">
              <img src={tail} className="absolute h-[200px] lg:h-auto right-[-45%] -z-0"></img>
              <img src={cat2} className="mt-[-40px] max-w-full h-auto"></img>
              <img src={cat2heart1} className="absolute top-20 lg:top-32 left-3"></img>
              <img src={cat2heart2} className="absolute top-8 lg:top-16 right-4"></img>
            </div>

            <div className="gsap-hover-btn inline-flex self-start items-center bg-white text-[#183DFF] rounded-3xl p-1 gap-3">
              <p className="font-bold pl-8">Reviews</p>
              <div className="gsap-hover-icon bg-[#183DFF] rounded-full p-2">
                <img src={arrowUp} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
