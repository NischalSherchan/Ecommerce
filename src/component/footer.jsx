import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin,  FaTwitter } from "react-icons/fa";

const pageData = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/About",
  },
  {
    title: "Shop",
    link: "/shop",
  },
  {
    title: "Contact",
    link: "Contact",
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#051922] py-[60px] text-white mt-[50px]">
      <div className="mycontainer grid grid-cols-4 gap-5">
        {/* ABOUT US */}
        <section>
          <div className="mb-[14px]">
            <h1 className="footerHead">About Us</h1>
            <div className="mt-[14px] bg-[#F28123] h-0.5 w-8" />
          </div>
          <p className="opacity-75">
            Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit
            voluptatem accusantium doloremque laudantium, totam rem aperiam,
            eaque ipsa quae.
          </p>
        </section>

        {/* Get In Touch */}
        <section>
          <div className="mb-[14px]">
            <h1 className="footerHead">Get In Touch</h1>
            <div className="mt-[14px] bg-[#F28123] h-0.5 w-8" />
          </div>

          <ul className="opacity-75 space-y-2.5">
            <li>
              <Link to="https://www.google.com/maps/place/Agile+Institute/@27.7027882,85.3183314,17z/data=!3m1!4b1!4m6!3m5!1s0x39eb190aed3a1583:0xec5c63ce98efff78!8m2!3d27.7027835!4d85.3229448!16s%2Fg%2F11v0pqd9ly?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D">
                New Plaza, Kathmandu
              </Link>
            </li>
            <li>
              <Link to="mailto:zenismaharjan504@gmail.com">
                info@fruitkha.com
              </Link>
            </li>
            <li>
              <Link to="tel:9876543210">9876543210</Link>
            </li>
          </ul>
        </section>

        {/* Pages */}
        <section>
          <div className="mb-[14px]">
            <h1 className="footerHead">Pages</h1>
            <div className="mt-[14px] bg-[#F28123] h-0.5 w-8" />
          </div>

          <ul className="opacity-75 space-y-2.5  ">
            {pageData.map((el, i) => (
              <li
                key={i}
                className="flex items-baseline gap-2 hover:text-[#F28123]"
              >
                <FaChevronRight className="text-[#F28123] text-[10px]" />
                <Link to={el.link}>{el.title}</Link>
              </li>
            ))}
          </ul>
        </section>

        {/* SUBSCRIBE */}
        <section className="mb-[100px]">
          <div className="mb-[14px]">
            <h1 className="footerHead">Subscribe</h1>
            <div className="mt-[14px] bg-[#F28123] h-0.5 w-8" />
          </div>
          <p className="opacity-75 mb-[17.5px]">
            Subscribe to our mailing list to get the latest updates.
          </p>
          <div className="flex items-center gap-1">
            <input
              type="text"
              placeholder="EMAIL"
              className="p-[15px] rounded bg-[#343a40] text-xs"
            />
            <button
              type="submit"
              className="bg-[#343a40] p-[15px] rounded hover:opacity-75"
            >
              <FaPaperPlane className="text-[#F28123]" />
            </button>
          </div>
        </section>
      </div>
          <div className="w-100vw h-[0.5px] bg-white " />

      <div className=" flex justify-between px-20 py-3">
        <div >
          <p >Copyrights &copy; 2025, fruitsNinja All rights reserved</p>
          <p>Distrubuted by Nischal sherchan</p>
        </div>
        <div className="flex gap-1.5 cursor-pointer" >
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
