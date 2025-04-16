import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdAddShoppingCart } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { clearAll } from "../features/UserSlice";
import { toast } from "react-toastify";
import { useLogoutMutation } from "../features/authApi";
import { BiChevronDown } from "react-icons/bi";
import { FaPowerOff } from "react-icons/fa";
import Cart from "./Cart";
// to do
// cart is not working properly

const Header = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const nav = useNavigate();
  const [logout] = useLogoutMutation();
  const [cartOpen, setCartOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileItems, setProfileItems] = useState(false);
  const dispatch = useDispatch();

  const token =
    useSelector((store) => store?.userInfo?.user?.accessToken) || null;

  const loggedInUser = token
    ? useSelector((store) => store?.userInfo?.user?.data)
    : null;
  console.log("user", loggedInUser);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onLogout = async () => {
    await logout();
    dispatch(clearAll());
    toast.success("logout complete");
    nav('/login');
  };

  const navData = [
    {
      to: "/",
      title: "Home",
    },
    {
      to: "/About",
      title: "About us",
    },
    {
      to: "/Contact",
      title: "Contact Us",
    },
    {
      to: "/Gallery",
      title: "Gallery",
    },
    {
      to: "/Shop",
      title: "Shop",
    },
  ];

  return (
    <header
      className={`fixed top-0  ${
        scrolled ? "bg-[#051922]" : "bg-transparent"
      }  w-screen py-[15px]  text-white z-50`}
    >
      {cartOpen && <Cart onClose={() => setCartOpen(false)} />}
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
            {navData.map((ele, i) => (
              <NavLink
                to={ele.to}
                key={i}
                className={({ isActive }) =>
                  `${
                    isActive && "text-[#F28123]"
                  } hover:text-[#F28123] transition-colors duration-300`
                }
              >
                {ele.title}
              </NavLink>
            ))}
          </nav>
        </div>

        {token ? (
          <div className="hidden lg:block relative">
            <div className="flex items-center gap-6">
            <div>
            {
              !loggedInUser.isAdmin && (
              <FaShoppingCart
                className="cursor-pointer"
                onClick={() => setCartOpen(true)}
              />

              ) 
            }
            </div>

              <div
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => setProfileItems(!profileItems)}
              >
                {loggedInUser?.profile_pic ? (
                  <img
                    src={`${baseUrl}${loggedInUser.profile_pic}`}
                    alt="pp"
                    className="size-[36px] object-cover rounded-full border-2 border-secondary"
                  />
                ) : (
                  <FaRegUserCircle className="size-[36px]" />
                )}
                <BiChevronDown className={`${profileItems && "rotate-180 "}`} />
              </div>
            </div>
            {profileItems && (
              <div className="absolute top-10 w-[160px] bg-white p-1 rounded-md text-[#777] ">
                {loggedInUser.isAdmin === true ? (
                  <div>
                    <button
                      className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:text-black"
                      onClick={() => nav("./addProduct")}
                    >
                      <MdAddShoppingCart />
                      <p>add product</p>
                    </button>

                    <button
                      className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:text-black"
                      onClick={() => nav("./ProductList")}
                    >
                      <AiFillProduct />
                      <p>Product List</p>
                    </button>
                  </div>
                ) : null}
                <button className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:text-black">
                  <FaRegUserCircle />
                  <p>My Profile</p>
                </button>

                <button
                  className="px-4 py-2 flex items-center gap-2 text-red-600 cursor-pointer hover:text-red-800"
                  onClick={onLogout}
                >
                  <FaPowerOff />
                  <span>Sign Out</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          <button
            className="  bg-primary px-4 py-2 font-medium rounded-md cursor-pointer m-4"
            onClick={() => nav("/login")}
          >
            Login
          </button>
        )}

  { !token === null &&( <div
          className="block lg:hidden text-3xl   cursor-pointer"
          onClick={() => {
            setMenuOpen((prev) => !prev);
            console.log("stte", menuOpen);
          }}
        >
          {menuOpen ? <RxCross2 /> : <GiHamburgerMenu />}
        </div>)}
      </div>

      {/* mobile navaigation */}
      <div>
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 z-10"
            onClick={() => setMenuOpen(false)}
          />
        )}

        <div
          className={`fixed right-0 top-0 h-screen w-64 bg-[#F28123]/90 backdrop-blur-md pt-5 shadow-lg transform transition-all duration-300 ease-in-out z-20 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-4 right-4 text-white hover:text-zinc-500 transition-colors"
          >
            ✕
          </button>

          <ul>
            <nav className="flex flex-col items-center gap-8 font-semibold p-4 mt-8">
              {navData.map((ele) => (
                <NavLink
                  to={ele.to}
                  key={ele.to}
                  className={({ isActive }) =>
                    `${isActive ? "text-zinc-500 scale-110" : "text-white"} 
               hover:text-zinc-500 transition-all duration-200 transform hover:scale-110`
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {ele.title}
                </NavLink>
              ))}
            </nav>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
