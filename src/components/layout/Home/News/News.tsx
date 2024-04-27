import Heading from "@/components/ui/Heading";
import MainLink from "@/components/ui/MainLink";
import React, { Fragment } from "react";
import Card from "./Card";
import meeting from "/public/news/meeting.svg";
import urban from "/public/news/urban.svg";

const cards = [
  {
    chip: "service",
    img: meeting,
    heading: "How To Deliver a Successful Product Launch",
    publishedAt: "05 Sep 2024",
    author: "Joshua Nash",
  },
  {
    chip: "service",
    img: urban,
    heading:
      "What Makes an Authentic Employee Profile, and Why Does It Matter?",
    publishedAt: "07 Sep 2023",
    author: "Ivan Neshev",
  },
];

function News() {
  return (
    <section className="col-start-1 col-end-13 grid grid-cols-subgrid gap-y-3 bg-white py-10 sm:gap-y-12 md:gap-y-[72px] md:py-14 xl:py-[120px]">
      <Heading className="col-start-2 col-end-12 md:col-end-10">
        <h2 className="text-2xl lg:text-5xl xl:text-[64px]">
          What’s new at Rooody?
        </h2>
      </Heading>
      <div className="col-start-2 col-end-3 self-end justify-self-start text-nowrap tracking-[0.43px] md:col-start-10 md:col-end-12 md:text-xl lg:text-end xl:col-start-11">
        <MainLink active>See all</MainLink>
      </div>
      <Card
        card={cards[0]}
        className="col-start-2 col-end-12 mb-4 sm:col-start-2 sm:col-end-7"
      />
      <Card
        card={cards[1]}
        className="col-start-2 col-end-12 mb-4 sm:col-start-7 sm:col-end-12"
      />
    </section>
  );
}

export default News;
