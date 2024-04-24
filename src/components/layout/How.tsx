import React from "react";
import Heading from "../ui/Heading";
import face from "/public/face.svg";
import laptop from "/public/laptop.svg";
import wound from "/public/wound.svg";
import Image from "next/image";

const cards = [
  {
    icon: face,
    heading: "Lead customers to happiness",
    description:
      "Roooby Support helps you provide personalized support when and where customers need it, so customers stay happy.",
  },
  {
    icon: laptop,
    heading: "Support your support",
    description:
      "Productive agents are happy agents. Give them all the support tools and information they need to best serve your customers.",
  },
  {
    icon: wound,
    heading: "Grow without growing pains",
    description:
      "Our software is powerful enough to handle the most complex business, yet flexible enough to scale with you as you grow.",
  },
];

function How() {
  return (
    <section className="col-span-full grid grid-cols-12 bg-main-blue p-4 pt-16 lg:pt-32">
      <Heading className="col-start-1 col-end-13 mb-8 text-center text-2xl text-white sm:col-start-3 sm:col-end-11 lg:text-start lg:text-5xl xl:col-start-2 xl:col-end-7">
        <h2 className="leading-tight">
          Here&apos;s how Roooby can benefit your business
        </h2>
      </Heading>
      <p className="col-start-2 col-end-12 mb-6 self-end text-center text-sm leading-7 text-main-grey-100 sm:col-start-3 sm:col-end-11 lg:text-start lg:text-lg xl:col-start-7 xl:col-end-12 xl:mb-[74px] xl:pr-24">
        Build more meaningful and lasting relationships — better understand
        their needs, identify new opportunities to help, address any problems
        faster.
      </p>
      <div className="col-start-2 col-end-12 flex flex-col gap-4 sm:col-start-3 sm:col-end-11 md:col-start-4 md:col-end-10 lg:col-start-1 lg:col-end-13 lg:flex-row lg:gap-[9px] lg:px-8 xl:col-start-2 xl:col-end-12 xl:px-0">
        {cards.map((c, i) => (
          <figure
            key={i}
            className="hover:bg-main-yellow group rounded-xl bg-main-blue-900 px-4 py-8 text-white transition-all duration-500 hover:-translate-y-[10px] hover:cursor-pointer lg:px-8 lg:py-16"
          >
            <Image
              src={c.icon}
              alt="Icon"
              className="mb-8 group-hover:invert lg:mb-14"
            />
            <div className="grid grid-cols-10 border-t border-opacity-[24%] py-4 group-hover:border-opacity-100 group-hover:invert">
              <h3 className="col-start-1 col-end-10 mb-[14px] text-xl font-bold tracking-[0.28px] lg:col-end-10">
                {c.heading}
              </h3>
              <p className="col-start-1 col-end-10 leading-[26px] lg:col-end-10">
                {c.description}
              </p>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default How;
