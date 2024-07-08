import React from 'react'
import bluearrow from '../assets/white-arrow-up-right.svg'
import arrowUp from '../assets/arrow-up-right.svg'

const Contact = () => {
  return (
    <div className='w-[83%] m-auto mb-40'>
      <div className='rounded-2xl flex h-[550px] bg-[#3051FF]'>

        <div className='w-[50%] flex flex-col justify-between p-12'>
            <div>
                <h1 className='text-[48px] font-bold'>Would you like us to contact you?</h1>
                <h1 className='text-[48px] font-bold'>We're always in touch</h1>
            </div>
            
           <div className='flex gap-4 items-center'>
                <p className='text-[32px] font-bold'>pet.clinic@gmail.com</p>
                <div className='flex bg-[white] rounded-full p-2 items-start flex-end'>
                    <img src={bluearrow}></img>
              </div>
            </div>  
        </div>

        <div className='flex flex-col bg-white w-[50%] rounded-2xl p-12 justify-between'>
            <form className='mt-20' action="">
                <input placeholder='Your Name' className='placeholder-[#DEDEDE] w-[100%] text-[24px] text-blue border-b-2 border-blue bg-white mb-9'></input>
                <input placeholder='Your Number' className='placeholder-[#DEDEDE] w-[100%] text-[24px] text-blue border-b-2 border-blue bg-white mb-9'></input>
                <input placeholder='Type of Your Pet' className='placeholder-[#DEDEDE] w-[100%] text-[24px] text-blue border-b-2 border-blue bg-white mb-9'></input>
                <input placeholder='What time should I call you?' className='placeholder-[#DEDEDE] w-[100%] text-blue text-[24px] border-b-2 border-blue bg-white mb-9'></input>
            </form>
            <div>
              <button className="flex items-center bg-white border-2 border-blue text-blue rounded-3xl p-1 gap-3">
                <p className=" font-bold pl-8">Send</p>
                <div className="bg-blue rounded-full p-2">
                  <img src={arrowUp} alt="Arrow Up" />
                </div>
              </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
