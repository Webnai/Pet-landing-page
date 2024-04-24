import { useState } from "react";
import logo from "../assets/Logo.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
import { navLinks } from "../constants/index.js";

const Navbar = () => {
  const [active, SetActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full inline-flex items-center lg:px-32 px-4 lg:mt-[56px] lg:mb-2 py-4 justify-between align-middle">
      <div className="flex w-full gap-12 items-center relative">
        <img
          src={logo}
          alt="logo"
          className="object-contain w-16 h-10 cursor-pointer"
        />
        <ul
          className="lg:inline-flex hidden gap-6 w-auto text-black top-[38px]"
        >
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-[#f9f9f9]" : "text-[#AEBBFF"
              } text-[18px] cursor-point`}
              onclick={() => SetActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:flex gap-4 hidden">
        <button className="lg:bg-[#183DFF] hover:bg-[white] hover:border-[#183DFF] hover:text-[#183DFF] text-white border-white">
          Questionaire
        </button>
        <button className="w-32 hover:text-white">
          Free Call
        </button>
      </div>

        <div>
            <img
                src={toggle ? close : menu}
                alt="menu"
                className="lg:hidden cursor-pointer w-10  h-10"
                onClick={() => setToggle(!toggle)}
            />
            <div className={`${!toggle ? "hidden" : "flex"} p-4 blue-gradient absolute top-15 left-0 min-w-[140px] z-10 gap-4`}>
                <ul className="list none y-transition transition-delay 600ms flex items-start flex-col gap-4">
                    {navLinks.map((link) => (
                        <li key={link.id} className={`{active === link.title ? "text-[#f9f9f9]" : "text-[#AEBBFF]"} text-[18px] cursor-pointer`} onClick={() => SetActive(link.title)}>
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </nav>
  );
};

export default Navbar;
