import React from "react";
import Heading from "../../ui/Heading";
import face from "/public/benefits/face.svg";
import laptop from "/public/benefits/laptop.svg";
import wound from "/public/benefits/wound.svg";
import Card from "./Card";

const cards = [
  {
    icon: face,
    heading: "Lead customers to happiness",
    description:
      "Rooody Support helps you provide personalized support when and where customers need it, so customers stay happy.",
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

function Benefits() {
  return (
    <section className="col-span-full grid grid-cols-12 bg-main-blue p-4 pt-16 lg:py-32">
      <Heading className="col-start-1 col-end-13 mb-8 text-center text-2xl text-white sm:col-start-3 sm:col-end-11 lg:text-start lg:text-5xl xl:col-start-2 xl:col-end-7">
        <h2 className="leading-tight">
          Here&apos;s how Rooody can benefit your business
        </h2>
      </Heading>
      <p className="col-start-2 col-end-12 mb-6 self-end text-center text-sm leading-7 text-main-grey-100 sm:col-start-3 sm:col-end-11 lg:text-start lg:text-lg xl:col-start-7 xl:col-end-12 xl:mb-[74px] xl:pr-24">
        Build more meaningful and lasting relationships — better understand
        their needs, identify new opportunities to help, address any problems
        faster.
      </p>
      <div className="col-start-2 col-end-12 flex flex-col gap-4 sm:col-start-3 sm:col-end-11 md:col-start-4 md:col-end-10 lg:col-start-1 lg:col-end-13 lg:flex-row lg:gap-[9px] lg:px-8 xl:col-start-2 xl:col-end-12 xl:px-0">
        {cards.map((c, i) => (
          <Card key={i} card={c} />
        ))}
      </div>
    </section>
  );
}

export default Benefits;
