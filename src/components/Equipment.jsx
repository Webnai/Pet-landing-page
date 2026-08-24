import arrowUp from "../assets/white-arrow-up-right.svg";
import icu from "../assets/icu.jpeg";
import tools from "../assets/tools.png";
import { useScrollReveal } from "../hooks/useScrollReveal";

const Equipment = () => {
  const gridRef = useScrollReveal({ targets: ":scope > div", stagger: 0.12, scale: 0.94, y: 30 });

  return (
    <div id="equipment" className="scroll-mt-24 w-[85%] m-auto rounded-3xl mt-20 mb-24">
      <h1 className="text-[28px] xs:text-[32px] sm:text-[38px] md:text-[44px] lg:text-[48px] w-full lg:w-[50%] font-bold justify-start">
        Our doctors choose only the best equipment
      </h1>

      <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        <div className="gsap-hover-btn flex flex-col bg-[#3051FF] rounded-3xl justify-between col-span-1 sm:col-span-2 min-h-[160px] sm:min-h-[181px] p-4">
          <div className="flex justify-between">
            <p className="w-[70%] text-[22px] sm:text-[24px] font-normal">All our equipment has international quality certificates</p>
            <div>
              <figure className="gsap-hover-icon flex bg-[white] rounded-full p-2 items-start flex-end">
                <img src={arrowUp}></img>
              </figure>
            </div>
          </div>
          <div className="w-full">
            <p className="flex justify-end text-[#AEBBFF]">More About</p>
          </div>
        </div>

        <div
          style={{ "--image-url": `url(${icu})` }}
          className="rounded-3xl col-span-1 sm:col-span-2 bg-cover bg-bottom bg-[image:var(--image-url)] min-h-[181px]"
        ></div>

        <div className="gsap-hover-btn flex rounded-3xl justify-between border col-span-1 min-h-[160px] sm:min-h-[181px] p-4">
          <div className="w-[80%]">
            <p className="text-[20px] sm:text-[22px]">All equipment undergoes special treatment</p>
          </div>
          <div className="flex items-end">
            <figure className="gsap-hover-icon bg-[white] rounded-full p-2">
              <img src={arrowUp}></img>
            </figure>
          </div>
        </div>

        <div
          style={{ "--image-url": `url(${tools})` }}
          className="rounded-3xl col-span-1 bg-cover bg-center bg-[image:var(--image-url)] min-h-[181px]"
        ></div>

        <div className="gsap-hover-btn flex flex-col bg-[#3051FF] rounded-3xl justify-between col-span-1 sm:col-span-2 min-h-[160px] sm:min-h-[181px] p-4">
          <div className="flex justify-between">
            <p className="w-[70%] text-[20px] sm:text-[22px]">Our clinic uses proven drugs and also provides them to our clients</p>
            <div>
              <figure className="gsap-hover-icon flex bg-[white] rounded-full p-2 items-start flex-end">
                <img src={arrowUp}></img>
              </figure>
            </div>
          </div>
          <div className="w-full">
            <p className="flex justify-end text-[#AEBBFF]">More About</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Equipment;
