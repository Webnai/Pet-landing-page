import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import telegram from "../assets/telegram.svg";
import { useScrollReveal } from "../hooks/useScrollReveal";

const scrollToId = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const Footer = () => {
  const ctaRef = useScrollReveal({ y: 30 });
  const linksRef = useScrollReveal({ targets: ":scope > ul", stagger: 0.08, y: 24 });

  return (
    <div>
      <div className="w-[90%] sm:w-[85%] m-auto">
        <div ref={ctaRef} className="flex flex-col w-full sm:w-[70%] lg:w-[40%] m-auto items-center mb-8 text-center">
          <h1 className="text-[28px] xs:text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] font-bold mb-6">
            Always happy to help your friend
          </h1>

          <button
            onClick={() => scrollToId("waitlist")}
            className="gsap-hover-btn inline-flex items-center font-bold bg-white py-4 px-8 text-[16px]"
          >
            Join Waitlist
          </button>
        </div>

        <div className="mb-10 w-full sm:w-[85%] lg:w-[70%] m-auto">
          <div ref={linksRef} className="grid grid-cols-2 sm:grid-cols-3 lg:flex lg:justify-between gap-8 text-[18px]">
            <ul className="flex flex-col gap-4 items-center text-center">
              <li className="font-bold mb-2">About Us</li>
              <li>Address</li>
              <li>Connection</li>
            </ul>

            <ul className="flex flex-col gap-4 items-center text-center">
              <li className="font-bold mb-2">Services</li>
              <li>Dentistry</li>
              <li>Documentation</li>
              <li>Vaccination</li>
              <li>Surgery</li>
              <li>Consultation</li>
              <li>Newborns</li>
            </ul>

            <ul className="flex flex-col gap-4 items-center text-center">
              <li className="font-bold mb-2">Doctors</li>
              <li>Specialists</li>
              <li>Licenses</li>
              <li>Practice</li>
              <li>Vacancies</li>
            </ul>

            <ul className="flex flex-col gap-4 items-center text-center">
              <li className="font-bold mb-2">Equipment</li>
              <li>Certificates</li>
              <li>Exploitation</li>
            </ul>

            <ul className="flex flex-col gap-4 items-center text-center">
              <li className="font-bold mb-2">Charity</li>
              <li>Promotion</li>
              <li>Partners</li>
              <li>Achievements</li>
            </ul>

            <ul className="flex flex-col gap-4 items-center text-center">
              <li className="font-bold mb-2">Reviews</li>
              <li>Our clients</li>
              <li>On platforms</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-10 px-2 sm:px-20 m-auto pb-16 border-t-2 border-white">
          <div className="flex">
            <p className="text-[#AEBBFF] text-center">© Copywriting | All rights reserved</p>
          </div>

          <div className="flex gap-4">
            <img className="h-[24px]" src={instagram} alt="instagram"></img>
            <img className="h-[24px]" src={facebook} alt="facebook"></img>
            <img className="h-[24px]" src={linkedin} alt="linkedin"></img>
            <img className="h-[24px]" src={telegram} alt="telegram"></img>
          </div>

          <div className="flex">
            <p className="text-[#AEBBFF] text-center">Terms of Use | Privacy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
