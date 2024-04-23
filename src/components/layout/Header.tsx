import Image from "next/image";
import React from "react";
import logo from "/public/logo.svg";
import NavLink from "../ui/NavLink";

const navLinks = ["Product", "Pricing", "Company", "Recources", "Contact"];

function Header() {
  return (
    <header className="col-start-3 col-end-11 grid grid-cols-12 items-center py-6 pl-14">
      <Image
        src={logo}
        className="col-start-1"
        alt="Company logo - Rooody"
        width={95}
        height={26}
      />
      <ul className="col-start-3 col-end-8 flex gap-9 text-sm">
        {navLinks.map((l, i) => (
          <li key={i} className="relative px-1 py-1">
            <NavLink className="before:bg-main-blue-900 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:rounded-[4px] before:opacity-20 before:transition-all before:duration-500 hover:before:w-full">
              {l}
            </NavLink>
          </li>
        ))}
      </ul>
      <NavLink className="hover:bg-main-grey-200 col-start-10 mr-6 rounded-[4px] bg-white px-4 py-2 text-center text-xs font-bold -tracking-[0.19px]">
        Log In
      </NavLink>
      <NavLink className="col-span-2 col-start-11 w-[65%] rounded-[4px] bg-main-blue py-2 text-center text-xs font-bold -tracking-[0.19px] text-white hover:skew-x-1 hover:skew-y-1 hover:scale-110">
        Try for Free
      </NavLink>
    </header>
  );
}

export default Header;
