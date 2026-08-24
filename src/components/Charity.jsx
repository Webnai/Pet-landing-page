import { useRef } from "react";
import smile from "../assets/smile.svg";
import joy from "../assets/joy.svg";
import handshake from "../assets/handshake.svg";
import together from "../assets/together.svg";
import spiral from "../assets/spiral.svg";
import home from "../assets/home.svg";
import arrowUp from "../assets/white-arrow-up-right.svg";
import { gsap, useGSAP } from "../lib/gsapConfig";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Charity = () => {
  const statsRef = useRef(null);
  const animalsRef = useRef(null);
  const eventsRef = useRef(null);
  const gridRef = useScrollReveal({ targets: ":scope > div", stagger: 0.1, y: 30 });

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const proxy = { animals: 0, events: 0 };
        gsap.to(proxy, {
          animals: 110,
          events: 64,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: statsRef.current, start: "top 85%" },
          onUpdate: () => {
            animalsRef.current.textContent = `${Math.round(proxy.animals)}+`;
            eventsRef.current.textContent = `${Math.round(proxy.events)}`;
          },
        });
      });

      return () => mm.revert();
    },
    { scope: statsRef }
  );

  return (
    <div id="Charity" className="scroll-mt-24 w-[83%] m-auto mt-20 mb-28">
      <h1 className="w-full sm:w-[70%] lg:w-[50%] text-[28px] xs:text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold">
        We collaborate with charities around the world
      </h1>
      <div ref={statsRef} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 mt-10">
        <p className="w-full sm:w-[45%] text-[18px] sm:text-[21px]">
          Our vet clinic prioritizes community involvement and animal welfare through regular charity events benefiting local animal shelters, rescue organizations, and related causes
        </p>
        <div className="flex gap-6 sm:contents">
          <div className="border-l-2 p-2">
            <h1 ref={animalsRef} className="text-[36px] sm:text-[44px] lg:text-[48px] font-medium">
              110+
            </h1>
            <p>
              Animals save <br />
              All time
            </p>
          </div>
          <div className="border-l-2 p-2">
            <h1 ref={eventsRef} className="text-[36px] sm:text-[44px] lg:text-[48px] font-medium">
              64
            </h1>
            <p>
              Charitable events <br />
              Held
            </p>
          </div>
        </div>
      </div>
      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="col-span-1 flex items-center sm:items-start">
          <p className="text-[22px] w-full sm:w-[60%]">Collaborate with popular brand</p>
        </div>

        <div className="col-span-1 py-6 px-10 bg-[#3051FF] rounded-3xl">
          <div className="flex justify-between items-center">
            <p className="text-[16px] font-bold text-[#AEBBFF]">Happy Smile Foundation</p>
            <img src={smile}></img>
          </div>
        </div>

        <div className="col-span-1 py-6 px-10 bg-[#3051FF] rounded-3xl">
          <div className="flex justify-between items-center">
            <p className="text-[16px] font-bold text-[#AEBBFF]">Healthy Atmosphere Foundation</p>
            <img src={joy}></img>
          </div>
        </div>

        <div className="col-span-1 py-6 px-10 bg-[#3051FF] rounded-3xl">
          <div className="flex justify-between items-center">
            <p className="text-[16px] font-bold text-[#AEBBFF]">Friendly Hand Foundation</p>
            <img src={handshake}></img>
          </div>
        </div>

        <div className="col-span-1 py-6 px-10 bg-[#3051FF] rounded-3xl">
          <div className="flex justify-between items-center">
            <p className="text-[16px] font-bold text-[#AEBBFF]">We Are Together Foundation</p>
            <img src={together}></img>
          </div>
        </div>

        <div className="col-span-1 py-6 px-10 bg-[#3051FF] rounded-3xl">
          <div className="flex justify-between items-center">
            <p className="text-[16px] font-bold text-[#AEBBFF]">Circle of Life Foundation</p>
            <img src={spiral}></img>
          </div>
        </div>

        <div className="col-span-1 py-6 px-10 bg-[#3051FF] rounded-3xl">
          <div className="flex justify-between items-center">
            <p className="text-[16px] font-bold text-[#AEBBFF]">Good Hands Foundation</p>
            <img src={home}></img>
          </div>
        </div>

        <div className="gsap-hover-btn flex rounded-3xl justify-between border col-span-1 p-4">
          <div className="w-[80%]">
            <p className="text-[22px]">Contact us for cooperation</p>
          </div>
          <div className="flex items-center">
            <figure className="gsap-hover-icon bg-[white] rounded-full p-2">
              <img src={arrowUp}></img>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charity;
