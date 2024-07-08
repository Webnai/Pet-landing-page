import React from 'react';
import { useInView } from "react-intersection-observer";
import instagram from '../assets/instagram.svg';
import facebook from '../assets/facebook.svg';
import linkedin from '../assets/linkedin.svg';
import telegram from '../assets/telegram.svg';

const Footer = () => {
    const { ref, inView } = useInView({
        triggerOnce: true
        });


  return (
    <div>
        <div className='w-[83%] m-auto'>
            <div ref={ref} className={`flex  flex-col w-[40%] m-auto items-center mb-8 ${inView ? "fadeUpContainer" : ""}`}>
                <h1 className='text-[48px] font-bold text-center mb-6'>Always happy to help your friend</h1>

                <button className='inline-flex items-center font-bold bg-white py-4 px-8 text-[16px]'> Free Call</button>
            </div>

            <div className='mb-10 w-[70%] m-auto'>
                <div className='flex justify-between text[18px]'>
                    <ul className='flex flex-col gap-4 items-center'>
                        <li className='text-center font-bold mb-6'>About Us</li>
                        <li>Address</li>
                        <li>Connection</li>
                    </ul>

                    <ul className='flex flex-col gap-4 items-center'>
                        <li className='text-center font-bold mb-6'>Services</li>
                        <li>Dentistry</li>
                        <li>Documentation</li>
                        <li>Vacination</li>
                        <li>Documentation</li>
                        <li>Surgery</li>
                        <li>Consultation</li>
                        <li>Newborns</li>
                    </ul>

                    <ul className='flex flex-col gap-4 items-center'>
                        <li className='text-center font-bold mb-6'>Doctors</li>
                        <li>Specialists</li>
                        <li>Licenses</li>
                        <li>Practice</li>
                        <li>Vacancies</li>
                    </ul>

                    <ul className='flex flex-col gap-4 items-center'>
                        <li className='text-center font-bold mb-6'>Equipment</li>
                        <li>Certificates</li>
                        <li>Exploitation</li>
                    </ul>

                    <ul className='flex flex-col gap-4 items-center'>
                        <li className='text-center font-bold mb-6'>Charity</li>
                        <li>Promotion</li>
                        <li>Partners</li>
                        <li>Achievements</li>
                    </ul>

                    <ul className='flex flex-col gap-4 items-center'>
                        <li className='text-center font-bold mb-6'>Reviews</li>
                        <li>Our clients</li>
                        <li>On platforms</li>
                    </ul>
                </div>
                

            </div>

            <div className='flex justify-between pt-10 px-20 m-auto pb-16 border-t-2 border-white '>
                <div className='flex'>
                    <p className='text-[#AEBBFF]'>© Copywriting | All rights reserved</p>
                </div>

                <div className='flex gap-2 mr-20'>
                    <img className='h-[24px]' src={instagram} alt='instagram'></img>
                    <img className='h-[24px]' src={facebook} alt='instagram'></img>
                    <img className='h-[24px]' src={linkedin} alt='instagram'></img>
                    <img className='h-[24px]' src={telegram} alt='instagram'></img>
                </div>

                <div className='flex'>
                    <p className='text-[#AEBBFF]'>Terms of Use | Privacy</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
