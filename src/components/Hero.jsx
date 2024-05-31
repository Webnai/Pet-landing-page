import React from "react";
import cat1 from "../assets/Cat-hero.png";
import phone from "../assets/Phone.svg";
import arrowUp from "../assets/arrow-up-right.svg";
import catHeart1 from "../assets/cat-heart.svg";
import catHeart2 from "../assets/cat-heart2.svg";
import cat2heart1 from "../assets/cat2-hero-heart.svg";
import cat2heart2 from "../assets/cat2-hero-heart2.svg";
import cat2 from "../assets/cat2-hero.png";
import dogHeart1 from "../assets/dog-heart.svg";
import dogHeart2 from "../assets/dog-heart2.svg";
import dog from "../assets/dog-hero.png";
import map from "../assets/map-pin.svg";
import tail from "../assets/tail.svg";

const Hero = () => {
  return (
    <div className="w-[85%] mb-[46px] m-auto">
      <div>
        <div className="lg:flex lg:flex-row flex flex-col items-center justify-center lg:gap-6 ">
          <h1 className="text-[60px] xl:text-[140px] lg:text-[100px] text-white font-optima font-extrabold">
            We are Pet.
          </h1>

          <div className="inline-flex rounded-3xl self-center p-4 bg-[#3051FF] hover:bg-black hover:cursor-pointer text-[18px] ">
            <img src={phone}></img>
            +1 234 567 890
          </div>
        </div>

        <h1 className="text-[30px] lg:text-[56px] m-auto text-center">
          Caring Vets, Healthy Pets - Trust Us
        </h1>
      </div>

      <div className="lg:flex w-full pt-[40px] gap-20 m-0">
        <div className="flex-col lg:w-[50%]">
          <div className="flex items-center mb-4 lg:mb-8 gap-4">
            <div className="bg-[#3051FF] rounded-3xl relative">
              <img src={cat1} className="mt-[-40px]"></img>
              <img src={catHeart1} className="absolute lg:top-16 top-10 lg:left-3"></img>
              <img src={catHeart2} className="absolute lg:top-28 top-16 right-0 lg:right-2"></img>
            </div>

            <div className="w-[50%]">
              <p className="text-[10px] lg:text-[18px] font-thin mb-2">
                Our veterinary clinic is a compassionate and skilled facility
                dedicated to providing high-quality medical care for pets.
              </p>
              <div className="inline-flex items-center bg-white text-[#183DFF] rounded-3xl p-1 gap-3">
                <p className="font-[16px] pl-8">Services</p>
                <div className="bg-[#183DFF] rounded-full p-2">
                  <img src={arrowUp}></img>
                </div>
              </div>
            </div>
          </div>

          <div className="inline-flex bg-[#3051FF] p-4 rounded-full">
            <img src={map}></img>
            <p className="text-[12px] lg:text-[14px]">2715 Ash Dr. San Jose, South Dakota 83475</p>
          </div>
        </div>

        
        <div className="lg:flex w-[50%] gap-6 relative">

            <div className="flex flex-col mt-[40px] w-[300px]">
              <div className="bg-white rounded-3xl relative">
                <img src={dog}className="mt-[-40px]"></img>
                <img src={dogHeart1} className="absolute top-28 left-3"></img>
                <img src={dogHeart2} className="absolute top-16 right-2"></img>
              </div>
              <p>Trust us to be your go-to vet clinic for all your pet's healthcare needs.</p>
            </div>

            <div className="flex flex-col  lg:mt-[-20px] right-0">
              <div className="bg-[#3051FF] mt-10 rounded-3xl mb-2 relative">
                <img src={tail} className="absolute h-[200px] lg:h-auto right-[-45%] -z-0"></img>
                <img src={cat2}className="mt-[-40px] "></img>
                <img src={cat2heart1} className="absolute top-20 lg:top-32 left-3"></img>
                <img src={cat2heart2} className="absolute top-8 lg:top-16 right-4"></img>
              </div>

              <div className="inline-flex self-start items-center bg-white text-[#183DFF] rounded-3xl p-1 gap-3">
                <p className="font-[16px] pl-8">Reviews</p>
                <div className="bg-[#183DFF] rounded-full p-2">
                  <img src={arrowUp}></img>
                </div>
              </div>

            </div>   
          </div>    
      </div>
    </div>
  );
};

export default Hero;
