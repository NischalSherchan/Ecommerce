import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
  const nav = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    const trackScrollValue = window.scrollY;
    trackScrollValue > 10 ? setScrolled(true) : setScrolled(false);
  };
  window.addEventListener("scroll", handleScroll);

  return (
    <header
      className={`fixed top-0  ${
        scrolled ? "bg-[#051922]" : "bg-transparent"
      } w-[100vw] py-[15px] text-white bg-[#051922]`}
    >
      <div className="mycontainer mx-auto  flex items-center justify-between relative sm:[550px]">
        {/* <h1 className="text-[#F28123] text=[32px] font-bold cursor-pointer">FruitNinja</h1> */}

        <h1
          onClick={() => nav("/")}
          className=" text-[#F28123] text=[32px] w-20px font-bold cursor-pointer hover:text-white transition-all duration-300"
        >
          FruitNinja
        </h1>

        <div className="hidden lg:block">
          <nav className="flex items-center gap-8 font-semibold ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive && "text-[#F28123]"
                } hover:text-[#F28123] transition-colors duration-300`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                `${
                  isActive && "text-[#F28123]"
                } hover:text-[#F28123] transition-colors duration-300 `
              }
            >
              AboutUs
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                `${
                  isActive && "text-[#F28123]"
                } hover:text-[#F28123] transition-colors duration-300`
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/Gallery"
              className={({ isActive }) =>
                `${
                  isActive && "text-[#F28123]"
                } hover:text-[#F28123] transition-colors duration-300`
              }
            >
              Gallery
            </NavLink>
          </nav>
        </div>

        <div className="hidden lg:block">
          <div className="flex gap-6">
            <FaShoppingCart className="cursor-pointer hover:text-[#F28123] transition-colors duration-300 " />
            <FaSearch className="cursor-pointer hover:text-[#F28123] transition-colors duration-300" />
          </div>
        </div>

        <div
          className="block lg:hidden text-3xl   cursor-pointer"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            console.log("stte", menuOpen);
          }}
        >
          {menuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
        </div>
      </div>

      {/* mobile navaigation */}

      <div >
      {menuOpen ? <div className="absolute ml-[68.95vw] mt-[15px] bg-[#F28123] w-[300px] h-[90vh] pt-5  transition-all ${menuOpen ? 'opacity-100' : 'opacity-0'}">
          <ul>
            <nav className="flex flex-col items-center gap-8 font-semibold ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive && "text-zinc-500"
                  } hover:text-zinc-500 transition-colors duration-300`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `${
                    isActive && "text-zinc-500"
                  } hover:text-zinc-500 transition-colors duration-300 `
                }
              >
                AboutUs
              </NavLink>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `${
                    isActive && "text-zinc-500"
                  } hover:text-zinc-500 transition-colors duration-300`
                }
              >
                Contact
              </NavLink>
              <NavLink
                to="/Gallery"
                className={({ isActive }) =>
                  `${
                    isActive && "text-zinc-500"
                  } hover:text-zinc-500 transition-colors duration-300`
                }
              >
                Gallery
              </NavLink>
            </nav>
          </ul>
        </div> : ""}
        
      </div>
    </header>
  );
};

export default Header;
