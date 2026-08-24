import { useRef } from "react";
import arrowUp from "../assets/arrow-up-right.svg";
import doctorBg from "../assets/doctors-bg.png";
import { gsap, useGSAP } from "../lib/gsapConfig";

const Doctors = () => {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const info = panelRef.current.querySelector(".doctors-info");
        const image = panelRef.current.querySelector(".doctors-image");

        gsap.fromTo(
          info,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: panelRef.current, start: "top 80%" },
          }
        );
        gsap.fromTo(
          image,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: panelRef.current, start: "top 80%" },
          }
        );
      });

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <div id="doctors" ref={sectionRef} className="scroll-mt-24 w-[85%] m-auto rounded-3xl mt-24 mb-24">
      <h1 className="text-[28px] xs:text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] w-full lg:w-[60%] font-bold mb-10">
        Our doctors provide a wide range of services, from routine check-ups
      </h1>

      <div ref={panelRef} className="flex flex-col lg:flex-row bg-[#3051FF] rounded-3xl overflow-hidden">
        <div className="doctors-info flex flex-col justify-between w-full lg:w-[50%] p-6 sm:p-8 lg:p-[40px] gap-8">
          <div>
            <p className="text-[19px] sm:text-[22px] lg:text-[24px] font-semibold">
              Our veterinarians have completed extensive training and education in
              veterinary medicine, including a Doctor of Veterinary Medicine (DVM)
              degree from an accredited veterinary school.
            </p>
          </div>

          <div className="flex flex-col xs:flex-row justify-between items-start xs:items-end gap-6">
            <ul className="text-[18px] sm:text-[20px] font-bold">
              <li>Surgeons</li>
              <li>Dentist</li>
              <li>Therapists</li>
              <li>Ophthalmologists</li>
            </ul>

            <div className="gsap-hover-btn inline-flex items-center bg-white text-[#183DFF] rounded-3xl p-1 gap-3">
              <p className="font-bold pl-8">Free Call</p>
              <div className="gsap-hover-icon bg-[#183DFF] rounded-full p-2">
                <img src={arrowUp}></img>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{ "--image-url": `url(${doctorBg})` }}
          className="doctors-image rounded-3xl bg-cover bg-center bg-[image:var(--image-url)] w-full lg:min-w-[50%] min-h-[280px] sm:min-h-[380px] lg:min-h-[587px] p-6 sm:p-8 lg:p-[40px]"
        >
          <div className="gsap-hover-btn inline-flex float-end items-center bg-white text-[#183DFF] rounded-3xl p-1 gap-3">
            <p className="font-bold pl-8">View all</p>
            <div className="gsap-hover-icon bg-[#183DFF] rounded-full p-2">
              <img src={arrowUp}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
