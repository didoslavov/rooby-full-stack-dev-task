import { partners } from "@/data/partners";
import Image from "next/image";
import React, { ReactNode } from "react";

function Partners({ children }: { children: ReactNode }) {
  return (
    <div className="col-start-1 col-end-13 grid grid-cols-subgrid items-center justify-items-center">
      <p className="col-span-full col-start-1 row-start-2 justify-self-start font-medium -tracking-[0.22px] md:col-end-4 md:row-auto ">
        {children}
      </p>
      <div className="col-span-full col-start-1 row-start-3 flex flex-wrap justify-between gap-3 pb-4 pt-4 md:col-start-4 md:col-end-13 md:row-auto md:gap-8 lg:flex-nowrap xl:col-start-4 xl:col-end-12 xl:gap-16">
        {partners.map((l, i) => (
          <Image
            src={l}
            key={i}
            alt="Company logo"
            className={`${i === partners.length - 1 && "flex-1  md:flex-grow-0"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Partners;
