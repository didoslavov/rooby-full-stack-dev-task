import React from "react";
import increase from "/public/increase.svg";
import marketing from "/public/marketing.svg";
import help from "/public/help.svg";
import Image from "next/image";
import Heading from "@/components/ui/Heading";
import check from "/public/check.svg";

const cards = [
  {
    img: increase,
    banner: "Sales",
    heading: "Increase company revenue up to 65%",
    description:
      "Automate your sales, marketing, and service in one platform. Avoid data leaks and enable consistent messaging.",
    list: [
      "Close more deals with single-page contact management",
      "Enjoy one-click calling, call scripts and voicemail automation",
      "Track stages and milestones of your deals to keep the sales process on track",
    ],
  },
  {
    img: marketing,
    banner: "Marketing",
    heading: "Marketing",
    description:
      "Market like the most successful companies in the world with Agile CRM's marketing automation software.",
    list: [
      "Close more deals with single-page contact management",
      "Use our templates to create high converting, mobile responsive landing pages",
      "Integrate social media easily into your marketing campaigns & contact views",
    ],
  },
  {
    img: help,
    banner: "Service",
    heading: "Help Desk Software",
    description:
      "Great customer support separates decent companies from excellent companies. A positive customer support experience is a crucially important piece of the customer journey.",
    list: [
      "Resolve every issue in the shortest possible time with powerful ticketing features",
      "Categorize tickets according to the issue and route them to the appropriate group (e.g. sales or support)",
      "Enjoy at-a-glance views of important data—such as ticket priority—on your dashboard",
    ],
  },
];

function Expertise() {
  return (
    <section className="col-start-1 col-end-13 grid grid-cols-subgrid bg-white">
      {cards.map((c, i) => (
        <article
          key={i}
          className={`flex flex-col items-center text-center md:text-start ${i % 2 === 1 ? "xl:flex-row-reverse xl:gap-24" : "xl:flex-row"} col-start-2 col-end-12 mt-16 border-t border-main-grey-700 pt-6 md:my-16 xl:my-[120px] xl:pt-12`}
        >
          <div className="flex-1 pb-6 pt-6 md:pt-11">
            <span className="bg-main-yellow mb-4 inline-block rounded px-2 py-[6px] text-sm font-bold uppercase tracking-[1.4px] text-main-grey">
              {c.banner}
            </span>
            <Heading className="mb-6">
              <h3 className="leading-[58px] -tracking-[0.67px] md:text-5xl">
                {c.heading}
              </h3>
            </Heading>
            <p className="mb-4 text-sm leading-7 tracking-[0.2px] md:text-lg xl:w-[82%]">
              {c.description}
            </p>
            <ul className="xl:w-[82%]">
              {c.list.map((li, i) => (
                <div key={i} className="mb-6 flex items-start">
                  <Image
                    src={check}
                    alt="Check icon"
                    className="mr-2 mt-2 md:mr-6"
                  />
                  <li className="text-start text-sm leading-7 tracking-[0.2px] md:text-lg">
                    {li}
                  </li>
                </div>
              ))}
            </ul>
          </div>
          <div className="flex-1">
            <Image alt={c.heading} src={c.img} />
          </div>
        </article>
      ))}
    </section>
  );
}

export default Expertise;
