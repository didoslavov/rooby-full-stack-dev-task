"use client";

import { CgClose } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import React, { useState } from "react";
import logo from "/public/logo.svg";
import NavLink from "../ui/NavLink";
import Link from "next/link";

const navLinks = ["Product", "Pricing", "Company", "Blog", "Contact"];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <header className="relative col-start-1 col-end-13 grid grid-cols-12 items-center px-4 py-6 md:pl-4 2xl:col-start-2 2xl:col-end-12">
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
            <NavLink link={l.toLowerCase()}>{l}</NavLink>
          </li>
        ))}
        <CgClose
          size={30}
          className="absolute right-4 top-6 text-main-blue-900 hover:cursor-pointer lg:hidden"
          onClick={toggleMobileMenu}
        />
      </ul>
      <Link
        href="#"
        className="col-span-3 col-start-4 text-nowrap rounded-[4px] bg-white px-4 py-2 text-center text-xs font-bold -tracking-[0.19px] transition-all duration-500 hover:bg-main-blue-900 hover:bg-opacity-20 sm:mr-4 md:col-span-2 md:col-start-8 lg:col-span-1 lg:col-start-11"
      >
        Log In
      </Link>
      <Link
        href="#"
        className="group col-span-3 col-start-8 rounded-[4px] bg-main-blue py-2 text-center text-xs font-bold -tracking-[0.19px] text-white transition-all duration-75 hover:skew-x-2 hover:skew-y-2 hover:scale-110 hover:bg-main-yellow hover:text-main-blue sm:col-span-2 sm:col-start-7 md:col-start-10 lg:col-start-12 xl:col-span-1"
      >
        <span className="group-hover:-skew-2 inline-block group-hover:-skew-y-2">
          Try for Free
        </span>
      </Link>
      <AiOutlineMenu
        onClick={toggleMobileMenu}
        size={30}
        className="col-start-12 text-main-blue-900 hover:cursor-pointer md:col-start-13 lg:hidden"
      />
    </header>
  );
}

export default Header;
