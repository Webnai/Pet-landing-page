import React from 'react'
import { useInView } from "react-intersection-observer";
import smile from '../assets/smile.svg';
import joy from '../assets/joy.svg';
import handshake from '../assets/handshake.svg';
import together from '../assets/together.svg';
import spiral from '../assets/spiral.svg';
import home from '../assets/home.svg';
import arrowUp from '../assets/white-arrow-up-right.svg';

const Charity = () => {
  const { ref, inView } = useInView({
    triggerOnce: true
  });

  return (
    <div className='w-[83%] m-auto mt-20 mb-28'>
      <h1 className='w-[50%] text-[48px] font-bold'>We collaborate with charities around the world</h1>
      <div className={`flex justify-between mt-[40px] `}>
        <p className='w-[45%] text-[21px]'>Our vet clinic prioritizes community involvement and animal welfare through regular charity events benefiting local animal shelters, rescue organizations, and related causes</p>
        <div className='border-l-2 p-2 '>
          <h1 className='text-[48px] font-medium'>110+</h1>
          <p>Animals save <br/>All time</p>
        </div>
        <div className='border-l-2 p-2 '>
          <h1 className='text-[48px] font-medium'>64</h1>
          <p>Charitable events <br/>Held</p>
        </div>
      </div>
      <div ref={ref} className={`grid grid-cols-4 gap-6 mt-10 ${inView ? "fadeUpContainer" : ""}`}>
        <div className='col-span-1'>
          <p className='text-[22px] w-[60%]'>Collaborate with popular brand</p>
        </div>

        <div className='col-span-1 py-6 px-10 bg-[#3051FF] rounded-3xl'>
          <div className='flex justify-between items-center'>
              <p className='text-[16px] font-bold text-[#AEBBFF]'>Happy Smile Foundation</p>
              <img src={smile}></img>
          </div>
        </div>

        <div className='col-span-1 py-6 px-10 bg-[#3051FF] rounded-3xl'>
          <div className='flex justify-between items-center'>
              <p className='text-[16px] font-bold text-[#AEBBFF]'>Healthy Atmosphere Foundation</p>
              <img src={joy}></img>
          </div>
        </div>

        <div className='col-span-1 py-6 px-10 bg-[#3051FF] rounded-3xl'>
          <div className='flex justify-between items-center'>
              <p className='text-[16px] font-bold text-[#AEBBFF]'>Friendly Hand Foundation</p>
              <img src={handshake}></img>
          </div>
        </div>

        <div className='col-span-1 py-6 px-10 bg-[#3051FF] rounded-3xl'>
          <div className='flex justify-between items-center'>
              <p className='text-[16px] font-bold text-[#AEBBFF]'>We Are Together Foundation</p>
              <img src={together}></img>
          </div>
        </div>

        <div className='col-span-1 py-6 px-10 bg-[#3051FF] rounded-3xl'>
          <div className='flex justify-between items-center'>
              <p className='text-[16px] font-bold text-[#AEBBFF]'>Circle of Life Foundation</p>
              <img src={spiral}></img>
          </div>
        </div>

        <div className='col-span-1 py-6 px-10 bg-[#3051FF] rounded-3xl'>
          <div className='flex justify-between items-center'>
              <p className='text-[16px] font-bold text-[#AEBBFF]'>Good Hands Foundation</p>
              <img src={home}></img>
          </div>
        </div>

        <div className='flex rounded-3xl justify-between border col-span-1 p-4'>
          <div className='w-[80%]'>
            <p className='text-[22px]'>Contact us for cooperation</p>
          </div>
          <div className='flex items-center'>
              <figure className=' bg-[white] rounded-full p-2'>
                <img src={arrowUp}></img>
              </figure>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Charity