import React from "react";
import arrowUp from "../assets/arrow-up-right.svg";
import doctorBg from "../assets/doctors-bg.png";

const Doctors = () => {
  return (
    <div className="w-[85%] m-auto rounded-3xl mt-20">
      <h1 className="text-[48px] w-[65%] mb-10">
        Our doctors provide a wide range of services, from routine check-ups
      </h1>

      <div className="flex bg-[#3051FF] rounded-3xl">

        <div className="flex flex-col justify-between w-[50%] p-[40px]">

            <div>
                <p>
                    Our veterinarians have completed extensive training and education in
                    veterinary medicine, including a Doctor of Veterinary Medicine (DVM)
                    degree from an accredited veterinary school.
                </p>
            </div>
          

          <div className="flex  justify-between items-end">

            <ul className="text-[20px]">
              <li>Surgeons</li>
              <li>Dentist</li>
              <li>Therapists</li>
              <li>Ophthalmologists</li>
            </ul>

            <div className="inline-flex items-center bg-white  text-[#183DFF] rounded-3xl p-1 gap-3 ">
              <p className="font-[16px] pl-8">View all</p>
              <div className="bg-[#183DFF] rounded-full p-2">
                <img src={arrowUp}></img>
              </div>
            </div>

          </div>

        </div>

        <div
          style={{ "--image-url": `url(${doctorBg})` }}
          className={`rounded-3xl bg-cover bg-center  bg-[image:var(--image-url)] min-w-[50%] min-h-[587px] p-[40px] `}
        >
          <div className="inline-flex float-end items-center bg-white  text-[#183DFF] rounded-3xl p-1 gap-3 ">
            <p className="font-[16px] pl-8">View all</p>
            <div className="bg-[#183DFF] rounded-full p-2">
              <img src={arrowUp}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
