import DropDown from "@/components/ui/DropDown";
import NavLink from "@/components/ui/NavLink";
import React from "react";

function Copyrights() {
  return (
    <div className="col-span-full col-start-1 grid grid-cols-subgrid border-opacity-25 pt-4 sm:col-span-3 sm:row-start-1 sm:row-end-3 md:mx-10 md:mt-12 lg:col-span-full lg:row-start-2 lg:border-t lg:border-main-grey-700 xl:mt-24 xl:pt-11">
      <div className="col-span-full flex flex-col items-center justify-around gap-4 lg:grid lg:grid-cols-subgrid lg:gap-0">
        <p className="col-span-3 col-start-2 text-sm tracking-[0.2px] text-main-grey">
          © Copyright 2024
        </p>
        <div className="lg:col-start-5 lg:col-end-9 lg:justify-self-center">
          <ul className="flex flex-col gap-4 text-sm tracking-[0.2px] text-black lg:flex-row lg:gap-10">
            <li className="relative w-fit px-1">
              <NavLink>Terms of Service</NavLink>
            </li>
            <li className="relative w-fit px-1">
              <NavLink>Privacy Policy</NavLink>
            </li>
            <li className="relative w-fit px-1">
              <NavLink>Cookies</NavLink>
            </li>
          </ul>
        </div>
        <div className="col-span-2 col-start-10 justify-self-center">
          <DropDown title="English" options={["Bulgarian", "Spanish"]} />
        </div>
      </div>
    </div>
  );
}

export default Copyrights;
