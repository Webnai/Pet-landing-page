import { useState } from "react";
import logo from "../assets/Logo.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";




    

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full inline-flex md:items-center md:justify-between lg:px-32 pt-14 px-3 justify-between align-middle">
      <div className="flex w-full gap-12 items-center relative">
        <img
          src={logo}
          alt="logo"
          className="object-contain w-16 h-10 cursor-pointer"
        />
        <ul className="lg:inline-flex gap-6  text-bold text-[18px] text-[#AEBBFF] absolute lg:relative right-[-120px]">
          <li className=" hover:text-[#f9f9f9] cursor-pointer">About Us</li>
          <li className=" hover:text-[#f9f9f9] cursor-pointer">Services</li>
          <li className=" hover:text-[#f9f9f9] cursor-pointer">Doctors</li>
          <li className=" hover:text-[#f9f9f9] cursor-pointer">Equipment</li>
          <li className=" hover:text-[#f9f9f9] cursor-pointer">Charity</li>
          <li className=" hover:text-[#f9f9f9] cursor-pointer">Reviews</li>
        </ul>
      </div>

      <div className="lg:flex gap-4 hidden">
        <button className="lg:bg-[#183DFF] hover:bg-[white] hover:border-[#183DFF] hover:text-[#183DFF] text-white border-white">
          Questionaire
        </button>
        <button className="w-32 hover:bg-[#081555] hover:text-white">
          Free Call
        </button>
      </div>

      <img src={toggle ? close : menu} alt='menu' className='lg:hidden cursor-pointer w-10 h-10' onClick={() => setToggle(!toggle)} />
    </nav>
  );
};

export default Navbar;
