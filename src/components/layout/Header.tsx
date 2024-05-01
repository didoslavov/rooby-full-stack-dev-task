"use client";

import { CgClose } from "react-icons/cg";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";
import React, { useState } from "react";
import logo from "/public/logo.svg";
import NavLink from "../ui/NavLink";
import Link from "next/link";
import Button from "../ui/Button";
import { usePathname } from "next/navigation";

const navLinks = ["Products", "Pricing", "Company", "Blog", "Contact"];

function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const openMobileNav = () => setIsOpen(true);
  const closeMobileNav = () => setIsOpen(false);

  return (
    <header className="relative col-start-1 col-end-13 grid grid-cols-12 items-center px-4 py-6 md:pl-4 2xl:col-start-1  2xl:col-end-12">
      <Link href="/">
        <Image
          src={logo}
          className={`${isOpen ? "absolute left-0 top-3 z-50 m-4" : "col-span-2 col-start-1 min-w-24"}`}
          alt="Company logo - Rooody"
          width={95}
          height={26}
          onClick={closeMobileNav}
        />
      </Link>
      <ul
        className={`${isOpen ? "fixed right-0 top-0 z-40 flex h-screen w-screen flex-col items-center justify-center gap-10 bg-main-grey-100 text-2xl font-bold text-main-blue-900" : "hidden"} col-start-3 col-end-8 text-sm md:gap-4 lg:flex xl:gap-9`}
      >
        {navLinks.map((l, i) => (
          <li onClick={closeMobileNav} key={i} className="relative px-1 py-1">
            <NavLink
              className={
                (pathname === `/${l.toLowerCase()}` &&
                  "border-b-2 border-black pb-2") ||
                undefined
              }
              link={"/" + l.toLowerCase()}
            >
              {l}
            </NavLink>
          </li>
        ))}
        <li
          onClick={closeMobileNav}
          className="relative block px-1 py-1 lg:hidden"
        >
          <NavLink link="#">Login</NavLink>
        </li>
        <li
          onClick={closeMobileNav}
          className="relative block px-1 py-1 lg:hidden"
        >
          <NavLink
            link="#"
            className="rounded-md bg-main-blue px-5 py-2 text-white before:hidden hover:bg-white hover:text-main-blue"
          >
            Try for free
          </NavLink>
        </li>
        <CgClose
          size={30}
          className="absolute right-4 top-6 text-main-blue-900 hover:cursor-pointer lg:hidden"
          onClick={isOpen ? closeMobileNav : openMobileNav}
        />
      </ul>
      <Button
        size="sm"
        link="#"
        type="outline"
        className="col-span-3 col-start-4 hidden text-nowrap px-5 text-center text-xs shadow-md md:col-span-2 md:col-start-8 lg:col-span-1 lg:col-start-11 lg:block"
      >
        Log In
      </Button>

      <Button
        link="#"
        size="sm"
        className="col-span-3 col-start-7 row-span-1 hidden text-nowrap px-6 text-center shadow-md md:col-start-10 lg:col-start-12 lg:block"
        type="full"
      >
        Try for Free
      </Button>
      <AiOutlineMenu
        onClick={isOpen ? closeMobileNav : openMobileNav}
        size={30}
        className="col-start-12 text-main-blue-900 hover:cursor-pointer md:col-start-13 lg:hidden"
      />
    </header>
  );
}

export default Header;
