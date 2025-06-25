"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../public/images/logo.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-scroll";

const Nav = () => {
  useGSAP(() => {
    gsap.from(".nav_list", {
      y: "-100%",
      ease: "bounce",
      stagger: 0.2,
    });
  }, []);
  return (
    <header>
      <nav
        className="flex items-center justify-between mx-auto py-4 px-4"
        id="nav"
      >
        <div className="flex items-center font-bold text-2xl gap-2">
          <Image
            width={40}
            height={40}
            alt="Logo"
            src={Logo}
            className="logo"
          ></Image>
          <span className="text-primary font-primary">VPN</span>
        </div>
        <ul className=" space-x-4  hidden sm:flex ">
          <li className="nav_list">
            <Link to="About" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="nav_list">
            <Link to="Features" smooth={true} duration={500}>
              Features
            </Link>
          </li>
          <li className="nav_list">
            <Link to="Pricing" smooth={true} duration={500}>
              Pricing
            </Link>
          </li>
          <li className="nav_list">
            <Link to="Testimonials" smooth={true} duration={500}>
              Testimonials
            </Link>
          </li>
          <li className="nav_list">
            <Link to="About" smooth={true} duration={500}>
              Help
            </Link>
          </li>
        </ul>
        <div className="space-x-4 flex sm:flex-row flex-col">
          <button className="text-gray-600 hover:text-white rounded-full sm:p-3 p-2 cursor-pointer transition-colors duration-500 hover:bg-primary">
            Sign In
          </button>
          <button className="text-primary rounded-full  bg-white border-2 sm:p-3 p-2 border-primary cursor-pointer ">
            Sign Out
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
