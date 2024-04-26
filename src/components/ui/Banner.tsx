import { BiChevronRight } from "react-icons/bi";
import React from "react";
import Heading from "./Heading";
import Link from "next/link";

function Banner() {
  return (
    <section className="relative col-start-1 col-end-13 grid max-h-[468px] grid-cols-subgrid text-white">
      <div className="z-40 col-start-1 col-end-9 row-start-1 grid grid-cols-subgrid bg-main-blue xl:py-[120px] ">
        <Heading className="col-start-2 col-end-9 mb-6">
          <h2 className="text-[64px] leading-[74px] -tracking-[0.89px]">
            Ready to supercharge your business?
          </h2>
        </Heading>
        <p className="col-start-2 col-end-7 text-lg font-medium leading-7">
          Ask about <span className="text-lg font-black leading-7">Rooody</span>{" "}
          products, pricing, implementation, or anything else. Our highly
          trained reps are standing by, ready to help.
        </p>
      </div>
      <div className="pointer-events-none z-30 col-start-8 col-end-13 row-start-1 bg-main-yellow pr-[5%]"></div>
      <div className="pointer-events-none absolute -bottom-[80%] -right-[10%] z-50 flex h-[800px] w-[800px] translate-y-20 flex-col items-center rounded-[50%] bg-main-green transition-all duration-300 hover:bg-main-green-100">
        <div className="peer pointer-events-auto mb-6 mr-20 mt-32 flex w-fit items-center gap-4 rounded-lg bg-white px-8 py-5 text-lg font-bold -tracking-[0.25px] text-black drop-shadow-2xl hover:cursor-pointer hover:bg-main-green">
          <Link href="#">Try For Free</Link>
          <BiChevronRight size={28} />
        </div>
        <p className="mr-20 text-start text-sm peer-hover:text-black">
          Full access. No credit card required.
        </p>
      </div>
    </section>
  );
}

export default Banner;
