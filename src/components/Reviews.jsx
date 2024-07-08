import React, { useState } from 'react';
import { useInView } from "react-intersection-observer";
import arrowUp from '../assets/arrow-up-right.svg';
import reviewer1 from '../assets/avatar1.png';
import reviewer2 from '../assets/avatar2.png';
import reviewer3 from '../assets/avatar3.png';
import reviewer4 from '../assets/avatar4.png';

const Reviews = () => {
  const [showAll, setShowAll] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <div className='w-[83%] m-auto mb-40'>
      <h1 className='flex justify-center text-[48px] mb-12 font-bold'>Our clients are always satisfied</h1>
      <div ref={ref} className={`relative ${inView ? "fadeUpContainer" : ""}`}>
        <div className='flex absolute w-full h-full bg-gradient-to-t from-[#183DFF] to-transparent items-end justify-center'>
          {!showAll && (
            <button onClick={() => setShowAll(true)} className="inline-flex items-center bg-white text-[#183DFF] rounded-3xl p-1 gap-3">
              <p className=" font-bold pl-8">View all Reviews</p>
              <div className="bg-[#183DFF] rounded-full p-2">
                <img src={arrowUp} alt="Arrow Up" />
              </div>
            </button>
          )}
        </div>
        <div className={`grid grid-cols-9 gap-8 `}>
          <div className='col-span-4 bg-white p-4 rounded-2xl'>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-2 items-center'>
                <img className='rounded-full h-[40px]' src={reviewer1} alt="Reviewer 1" />
                <p className='font-bold text-black text-[22px]'>Robert Kerry</p>
              </div>
              <p className='text-[22px] text-[#DEDEDE]'>12.12.2023</p>
            </div>
            <p className='text-black text-[18px]'>
              I've been bringing my pets to this veterinary clinic for years and have never been disappointed. The vets are highly skilled and provide personalized care for each animal.
            </p>
          </div>

          <div className='col-span-5 bg-white p-4 rounded-2xl'>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-2 items-center'>
                <img className='rounded-full h-[40px]' src={reviewer2} alt="Reviewer 2" />
                <p className='font-bold text-black text-[22px]'>Ivan Rov</p>
              </div>
              <p className='text-[22px] text-[#DEDEDE]'>02.02.2023</p>
            </div>
            <p className='text-black text-[18px]'>
              I recently had a positive experience at this veterinary clinic. The staff was friendly and efficient, making the check-in process a breeze. The vet was very patient in answering my questions and provided clear instructions for my pet's care.
            </p>
          </div>

          <div className='col-span-5 bg-white p-4 rounded-2xl'>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-2 items-center'>
                <img className='rounded-full h-[40px]' src={reviewer3} alt="Reviewer 3" />
                <p className='font-bold text-black text-[22px]'>Jonathan Bell</p>
              </div>
              <p className='text-[22px] text-[#DEDEDE]'>08.04.2023</p>
            </div>
            <p className='text-black text-[18px]'>
              As a satisfied client, I highly recommend this veterinary clinic. The staff is friendly and knowledgeable, and the vets are skilled and compassionate. From routine check-ups to complex surgeries, they provide top-notch care for all types of pets.
            </p>
          </div>

          <div className='col-span-4 bg-white p-4 rounded-2xl'>
            <div className='flex justify-between mb-4'>
              <div className='flex gap-2 items-center'>
                <img className='rounded-full h-[40px]' src={reviewer4} alt="Reviewer 4" />
                <p className='font-bold text-black text-[22px]'>Arthur Dill</p>
              </div>
              <p className='text-[22px] text-[#DEDEDE]'>12.12.2023</p>
            </div>
            <p className='text-black text-[18px]'>
              I've been bringing my pets to this veterinary clinic for years and have never been disappointed. The vets are highly skilled and provide personalized care for each animal.
            </p>
          </div>
          {showAll && (
            <>
              <div className='col-span-4 bg-white p-4 rounded-2xl'>
                <div className='flex justify-between mb-4'>
                  <div className='flex gap-2 items-center'>
                    <img className='rounded-full h-[40px]' src={reviewer3} alt="Reviewer 3" />
                    <p className='font-bold text-black text-[22px]'>Jonathan Bell</p>
                  </div>
                  <p className='text-[22px] text-[#DEDEDE]'>08.04.2023</p>
                </div>
                <p className='text-black text-[18px]'>
                  As a satisfied client, I highly recommend this veterinary clinic. The staff is friendly and knowledgeable, and the vets are skilled and compassionate. From routine check-ups to complex surgeries, they provide top-notch care for all types of pets.
                </p>
              </div>

              <div className='col-span-5 bg-white p-4 rounded-2xl'>
                <div className='flex justify-between mb-4'>
                  <div className='flex gap-2 items-center'>
                    <img className='rounded-full h-[40px]' src={reviewer1} alt="Reviewer 1" />
                    <p className='font-bold text-black text-[22px]'>Robert Kerry</p>
                  </div>
                  <p className='text-[22px] text-[#DEDEDE]'>12.12.2023</p>
                </div>
                <p className='text-black text-[18px]'>
                  I've been bringing my pets to this veterinary clinic for years and have never been disappointed. The vets are highly skilled and provide personalized care for each animal.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
