"use client";

import { CgClose } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import React, { useState } from "react";
import logo from "/public/logo.svg";
import NavLink from "../ui/NavLink";

const navLinks = ["Product", "Pricing", "Company", "Recources", "Contact"];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative col-start-1 col-end-13 grid grid-cols-12 items-center px-4 py-6 md:pl-14 2xl:col-start-3 2xl:col-end-11">
      <Image
        src={logo}
        className={`${isOpen ? "left absolute top-6 z-50 m-4" : "col-span-2 col-start-1"}`}
        alt="Company logo - Rooody"
        width={95}
        height={26}
      />
      <ul
        className={`${isOpen ? "fixed right-0 top-0 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-main-grey-100 text-2xl font-bold text-main-blue-900" : "hidden"} col-start-3 col-end-8 text-sm md:gap-4 lg:flex xl:gap-9`}
      >
        {navLinks.map((l, i) => (
          <li key={i} className="relative px-1 py-1">
            <NavLink className="before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:rounded-[4px] before:bg-main-blue-900 before:opacity-20 before:transition-all before:duration-500 hover:before:w-full">
              {l}
            </NavLink>
          </li>
        ))}
        <CgClose
          size={30}
          className="absolute right-4 top-6 text-main-blue-900 hover:cursor-pointer lg:hidden"
          onClick={toggleMobileMenu}
        />
      </ul>
      <NavLink className="col-span-3 col-start-4 text-nowrap rounded-[4px] bg-white px-4 py-2 text-center text-xs font-bold -tracking-[0.19px] hover:bg-main-grey-200 sm:mr-4 md:col-span-2 md:col-start-8 lg:col-span-1 lg:col-start-10">
        Log In
      </NavLink>
      <NavLink className="col-span-3 col-start-8 rounded-[4px] bg-main-blue py-2 text-center text-xs font-bold -tracking-[0.19px] text-white hover:skew-x-1 hover:skew-y-1 hover:scale-110 sm:col-span-2 sm:col-start-7 md:col-start-10 lg:col-start-11 lg:w-[65%]">
        Try for Free
      </NavLink>
      <AiOutlineMenu
        onClick={toggleMobileMenu}
        size={30}
        className="col-start-12 text-main-blue-900 hover:cursor-pointer md:col-start-13 lg:hidden"
      />
    </header>
  );
}

export default Header;
