import React from "react";
import Heading from "../ui/Heading";
import Image from "next/image";
import heroImage from "/public/hero.png";
import Form from "../ui/Form";
import google from "/public/google.svg";
import atlassian from "/public/atlassian.svg";
import canon from "/public/canon.svg";
import walmart from "/public/walmart.svg";
import amazon from "/public/amazon.svg";

const logos = [google, atlassian, canon, walmart, amazon];

function Hero() {
  return (
    <section className="col-start-1 col-end-13 row-start-2 grid grid-cols-12 items-center justify-center justify-items-center p-4 sm:col-start-2 sm:col-end-12 md:col-start-1 md:col-end-13 md:py-20 md:pl-4 2xl:col-start-2 2xl:col-end-13 2xl:gap-x-20">
      <Image
        src={heroImage}
        alt="Dashboard image"
        className="col-span-full row-start-4 md:col-span-full md:col-start-9 md:row-span-full md:self-start md:justify-self-start xl:col-start-7"
      />
      <article className="col-start-1 col-end-13 mb-10 grid grid-cols-12 self-start md:col-end-9 md:pb-2 xl:col-end-7 xl:pb-20">
        <Heading className="col-span-full col-start-1 mb-6 text-center md:col-end-11 md:text-start  md:text-4xl lg:col-span-full xl:text-6xl">
          <h1 className="-tracking-[0.89] text-main-blue md:leading-[74px]">
            Bringing companies and customers together, anywhere
          </h1>
        </Heading>
        <p className="col-span-full col-start-1 mb-16 self-start text-lg leading-7 md:col-end-10">
          An awesome & powefull tools for your business, increase business
          revenue with enterprise-grade links built to acquire and engage
          cutomers.
        </p>
        <Form />
        <p className="col-span-full col-start-1 pl-4 text-sm text-main-grey md:col-end-6">
          Full access. No credit card required.
        </p>
      </article>
      <p className="col-span-full col-start-1  row-start-2 justify-self-start -tracking-[0.22px] md:col-end-4 md:row-auto ">
        Trusted by 1,000+ customers
      </p>
      <div className="col-span-full col-start-1 row-start-3 flex flex-wrap justify-between gap-3 pb-8 pt-4 md:col-start-4 md:col-end-13 md:row-auto md:gap-8 lg:flex-nowrap xl:col-start-4 xl:col-end-12  xl:gap-16">
        {logos.map((l, i) => (
          <Image
            src={l}
            key={i}
            alt="Company logo"
            className={`${i === logos.length - 1 && "flex-1  md:flex-grow-0"}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
