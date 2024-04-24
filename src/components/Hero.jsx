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

const Hero = () => {
  return (
    <div className="w-[85%] m-auto">
      <div>
        <div className="flex items-center justify-center gap-6 ">
          <h1 className="text-[100px] text-white font-optima font-extrabold">
            We are Pet.
          </h1>

          <div className="flex rounded-3xl p-4 bg-[#3051FF] hover:bg-black hover:cursor-pointer text-[18px] ">
            <img src={phone}></img>
            +1 234 567 890
          </div>
        </div>

        <h1 className="text-[56px] m-auto text-center">
          Caring Vets, Healthy Pets - Trust Us
        </h1>
      </div>

      <div className="flex w-full pt-[40px] gap-20 m-0">
        <div className="flex-col w-[50%]">
          <div className="flex items-center mb-8 gap-4">
            <div className="bg-[#3051FF] rounded-3xl relative">
              <img src={cat1} className="mt-[-40px]"></img>
              <img src={catHeart1} className="absolute top-16 left-3"></img>
              <img src={catHeart2} className="absolute top-28 right-2"></img>
            </div>

            <div className="w-[50%]">
              <p className="text-[18px] font-thin mb-2">
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
            <p>2715 Ash Dr. San Jose, South Dakota 83475</p>
          </div>
        </div>

        
        <div className="flex w-[50%] gap-6 relative">

            <div className="flex flex-col w-[50%]">
              <div className="bg-white rounded-3xl relative">
                <img src={dog}className="mt-[-40px]"></img>
                <img src={dogHeart1} className="absolute top-28 left-3"></img>
                <img src={dogHeart2} className="absolute top-16 right-2"></img>
              </div>
              <p>Trust us to be your go-to vet clinic for all your pet's healthcare needs.</p>
            </div>

            <div className="flex flex-col mt-[-20px] absolute right-0">
              <div className="bg-[#3051FF] rounded-3xl relative mb-2">
                <img src={cat2}className="mt-[-40px] h-[332px]"></img>
                <img src={cat2heart1} className="absolute top-32 left-3"></img>
                <img src={cat2heart2} className="absolute top-16 right-4"></img>
              </div>

              <div className="inline-flex self-start grow-0 items-center bg-white text-[#183DFF] rounded-3xl p-1 gap-3">
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
