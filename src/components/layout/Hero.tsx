import React from "react";
import Heading from "../ui/Heading";
import Image from "next/image";
import heroImage from "/public/hero.png";

function Hero() {
  return (
    <section className="col-start-3 col-end-11 row-start-2 grid grid-cols-12 items-center justify-center justify-items-center py-14 pl-12">
      <Image
        src={heroImage}
        alt="Dashboard image"
        className="col-span-full col-start-8 row-span-full"
      />
      <article className="col-start-1 col-end-8 grid grid-cols-12 self-start ">
        <Heading className="col-span-full mb-6 text-balance">
          <h1 className="text-main-blue">
            Bringing companies and customers together, anywhere
          </h1>
        </Heading>
        <p className="col-start-1 col-end-9 self-start text-lg leading-7">
          An awesome & powefull tools for your business, increase business
          revenue with enterprise-grade links built to acquire and engage
          cutomers.
        </p>
      </article>
    </section>
  );
}

export default Hero;
