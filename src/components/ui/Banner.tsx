import { BiChevronRight } from "react-icons/bi";
import React from "react";
import Heading from "./Heading";
import Link from "next/link";

function Banner() {
  return (
    <section className="relative col-start-1 col-end-13 grid max-h-[468px] grid-cols-subgrid text-white">
      <div className="z-40 col-start-1 col-end-13 row-start-1 grid grid-cols-subgrid bg-main-blue py-10 xl:col-end-9 xl:py-[120px] ">
        <Heading className="col-start-2 col-end-11 mb-6 xl:col-start-2 xl:col-end-8">
          <h2 className="text-center text-xl xl:text-[64px] xl:leading-[74px] xl:-tracking-[0.89px]">
            Ready to supercharge your business?
          </h2>
        </Heading>
        <p className="col-span-full mb-36 text-center text-lg font-medium leading-7 text-white text-opacity-70 md:col-start-3 md:col-end-10 xl:col-start-2 xl:col-end-7">
          Ask about <span className="text-lg font-black leading-7">Rooody</span>{" "}
          products, pricing, implementation, or anything else. Our highly
          trained reps are standing by, ready to help.
        </p>
      </div>
      <div className="pointer-events-none z-30 col-start-8 col-end-13 row-start-1 bg-main-yellow pr-[5%]"></div>
      <div className="pointer-events-none absolute -bottom-[30%] -right-[5%] z-50 flex h-72 w-80 flex-col items-center rounded-[50%] bg-main-green transition-all duration-500 hover:bg-main-green-100 sm:-bottom-[40%] md:-bottom-[60%] md:-right-[10%] md:h-96 md:w-96 xl:-bottom-[70%] xl:-right-[10%] xl:h-[800px] xl:w-[800px] xl:translate-y-20">
        <div className="peer pointer-events-auto mb-6 mt-10 flex w-fit items-center rounded-lg bg-white px-4 py-2 text-sm font-bold text-black drop-shadow-2xl transition-all duration-500 hover:cursor-pointer hover:bg-main-green xl:mr-20 xl:mt-32 xl:gap-4 xl:px-8 xl:py-5 xl:text-lg xl:-tracking-[0.25px]">
          <Link href="#">Try For Free</Link>
          <BiChevronRight size={28} />
        </div>
        <p className="text-start text-xs peer-hover:text-black xl:mr-20">
          Full access. No credit card required.
        </p>
      </div>
    </section>
  );
}

export default Banner;
