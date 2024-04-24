import React from 'react';
import phone from "../assets/Phone.svg";

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

      <div></div>
    </div>
  )
}

export default Hero