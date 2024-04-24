import React from 'react';
import cat1 from "../assets/Cat-hero.png";
import phone from "../assets/Phone.svg";
import arrowUp from "../assets/arrow-up-right.svg";
import catHeart1 from "../assets/cat-heart.svg";
import catHeart2 from "../assets/cat-heart2.svg";

const Hero = () => {
  return (
    <div className='w-[85%] m-auto'>
      <div>
        <div className='flex items-center justify-center gap-6'>
          <h1 className='text-[120px] text-white font-optima font-extrabold'>We are Pet.</h1>

          <div className='flex rounded-3xl p-4 bg-[#3051FF] text-[18px] '>
            <img src={phone}></img>
            +1 234 567 890
          </div>
        </div>
        
        <h1 className='text-[64px] align-center p-0 m-0'>Caring Vets, Healthy Pets - Trust Us</h1>
      </div>

      <div className='flex w-full pt-[80px]'>

        <div className='flex w-[50%] items-center gap-4'>
          <div className='bg-[#3051FF] rounded-3xl relative'>
            <img src={cat1} className='mt-[-80px]'></img>
            <img src={catHeart1} className='absolute top-16 left-3'></img>
            <img src={catHeart2} className='absolute top-28 right-2'></img>
          </div>

          <div className='w-[50%]'>
            <p className='text-[18px] font-thin mb-2'>Our veterinary clinic is a compassionate and skilled facility dedicated to providing high-quality medical care for pets.</p>
            <div className='inline-flex items-center bg-white text-[#183DFF] rounded-3xl p-1 gap-3'>
              <p className='font-[16px] pl-8'>Services</p>
              <div className='bg-[#183DFF] rounded-full p-2'>
                <img src={arrowUp}></img>
              </div>
            </div>
          </div>

        </div>

        <div></div>
      </div>
    </div>
  )
}

export default Hero