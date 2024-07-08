import React from "react";
import { useInView } from "react-intersection-observer";
import doctor from "../assets/Doctor.png";
import cat3Heart2 from "../assets/cat-heart2.svg";
import cat3Heart1 from "../assets/cat3-heart1.svg";
import cat3 from "../assets/cat3.png";
import cat4 from "../assets/cat4.png";
import dog2Heart1 from "../assets/dog2-heart.svg";
import dog2Heart2 from "../assets/dog2-heart2.svg";
import dog2Heart3 from "../assets/dog2-heart3.svg";
import dog2 from "../assets/dog2.png";
import dog3Heart1 from "../assets/dog3-heart1.svg";
import dog3 from "../assets/dog3.png";
import dog4 from "../assets/dog4.png";

const Services = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
      <div ref={ref} className={` bg-white w-[85%] m-auto rounded-3xl py-14 px-6 mb-20 ${inView ? "fadeUpContainer" : ""}`}>
      <p className="text-black w-[80%] text-center text-[48px] font-bold m-auto mb-[150px]">
        Our clinic provides a wide range of services
      </p>

      <div className=" grid grid-cols-3 gap-6 mb-14">

        <div className="bg-[#183DFF] m-0 col-span-1 p-0 rounded-2xl ">
          <div className="flex bg-[#f6f6f6]  justify-center rounded-2xl">
            <div className="flex relative">
              <img src={dog2} className="mt-[-50%]"></img>
              <img
                src={dog2Heart1}
                className="absolute top-[-80%] left-2"
              ></img>
              <img src={dog2Heart2} className="absolute bottom-6 right-1"></img>
              <img
                src={dog2Heart3}
                className="absolute top-[-80%] right-4"
              ></img>
            </div>
          </div>
          <div className="p-6">
            <p className="text-[24px] font-bold mb-4">Dentistry for animals</p>
            <p className="mb-4">
              Just like humans, animals can develop dental problems such as
              tooth decay, gum disease, and tooth loss.
            </p>
            <button className="rounded-2xl bg-[#183DFF] text-white border-white w-full">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-[#183DFF] m-0 p-0 rounded-2xl col-span-1 ">
          <div className="flex bg-[#3051FF]  justify-center rounded-2xl">
            <div className="flex relative">
              <img src={doctor} className="mt-[-50%]"></img>
            </div>
          </div>

          <div className="p-6">
            <p className="text-[24px] font-bold mb-4">Your pet's Documents</p>
            <p className="mb-4">
              Animals do not require legal documents like humans do. However,
              some animals may need certain...
            </p>
            <button className="rounded-2xl bg-[#183DFF] text-white border-white w-full">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-[#183DFF] m-0 p-0 rounded-2xl col-span-1 ">
          <div className="flex bg-[#f6f6f6]  justify-center rounded-2xl">
            <div className="flex relative">
              <img src={dog3} className="mt-[-50%]"></img>
              <img src={dog3Heart1} className="absolute top-6 left-16"></img>
              <img src={dog2Heart2} className="absolute bottom-6 right-1"></img>
              <img
                src={dog2Heart3}
                className="absolute top-[-80%] right-4"
              ></img>
            </div>
          </div>

          <div className="p-6">
            <p className="text-[24px] font-bold mb-4">Vaccination</p>
            <p className="mb-4">
              Vaccination for animals is the process of administering a vaccine
              to an animal to help prevent the spread...
            </p>
            <button className="rounded-2xl bg-[#183DFF] text-white border-white w-full">
              View Details
            </button>
          </div>
        </div>
      </div>

      <p className="text-black font-bold col-span-3 text-center text-[48px] m-auto mb-[160px]">
        From surgery to behavioral consultations
      </p>

      <div className="flex gap-6">
        <div className="bg-[#183DFF] m-0 p-0 rounded-2xl col-span-1 ">
          <div className="flex bg-[#3051FF]  justify-center  rounded-2xl">
            <div className="flex relative">
              <img src={cat3} className="mt-[-40%] h-[300px] object-cover"></img>
              <img
                src={cat3Heart1}
                className="absolute top-9 left-8"
              ></img>
              <img src={cat3Heart2} className="absolute bottom-6 right-6"></img>
            </div>
          </div>

          <div className="py-6 px-4">
            <p className="text-[24px] font-bold mb-4">Surgery for pets</p>
            <p className="mb-4 ">
              Pet surgery refers to medical procedures performed on animals under anesthesia by a licensed veterinarian.
            </p>
            <button className="rounded-2xl bg-[#183DFF] text-white border-white w-full">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-[#183DFF] m-0 p-0 rounded-2xl col-span-1 ">
          <div className="flex bg-[#f6f6f6]  justify-center rounded-2xl">
            <div className="flex relative">
              <img src={dog4} className="mt-[-50%]"></img>
              <img src={dog3Heart1} className="absolute top-6 left-1"></img>
              <img src={dog2Heart2} className="absolute bottom-6 -right-4"></img>
            </div>
          </div>

          <div className="p-6">
            <p className="text-[24px] font-bold mb-4">Consultation</p>
            <p className="mb-4">
            The veterinarian may also perform diagnostic tests such as blood work, urinalysis, or x-rays to help diagnose any underlying health issues.
            </p>
            <button className="rounded-2xl bg-[#183DFF] text-white border-white w-full">
              View Details
            </button>
          </div>
        </div>

        <div className="bg-[#183DFF] m-0 p-0 rounded-2xl col-span-1 ">
          <div className="flex bg-[#3051FF]  justify-center rounded-2xl">
            <div className="flex relative">
              <img src={cat4} className="mt-[-55%]"></img>
              
              <img src={dog2Heart1} className="absolute -top-20 -left-10"></img>
              <img
                src={dog2Heart3}
                className="absolute -top-16 -right-2"
              ></img>
            </div>
          </div>

          <div className="p-6">
            <p className="text-[24px] font-bold mb-4">Caring for newborn</p>
            <p className="mb-4">
            Animals do not require legal documents like humans do. However, some animals may need certain documents for specific purposes.
            </p>
            <button className="rounded-2xl bg-[#183DFF] text-white border-white w-full">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
