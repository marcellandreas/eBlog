import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";
import { menuNav } from "../data/data";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <div className="flex flex-row justify-between p-5 px-5 md:px-32 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div>
          <Link to="/" className=" font-semibold text-2xl p-1 cursor-pointer">
            eBlog -
          </Link>
        </div>

        <nav className="hidden md:flex gap-5 font-medium p-1 text-lg">
          {menuNav.map((nav, i) => (
            <Link
              to={nav.to}
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-[#539165] transition-all cursor-pointer"
            >
              {nav.name}
            </Link>
          ))}
        </nav>

        <div className="flex md:hidden " onClick={handleChange}>
          <div className=" p-2">
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
      <div
        className={` ${
          menu ? "translate-x-0" : "-translate-x-full"
        } md:hidden flex flex-col absolute bg-[#ffffff] left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full z-40 h-fit transition-transform duration-300 `}
      >
        {menuNav.map((nav, i) => (
          <Link
            to={nav.to}
            spy={true}
            smooth={true}
            duration={500}
            className="hover:text-[#539165] transition-all cursor-pointer"
          >
            {nav.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
