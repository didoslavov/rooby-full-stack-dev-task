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
    <section className="col-start-2 col-end-12">
      {cards.map((c, i) => (
        <article
          key={i}
          className={`flex ${i % 2 === 1 ? "flex-row-reverse" : "flex-row"} my-[120px] border-t border-main-grey-700 pt-12`}
        >
          <div className="flex-1 pb-6 pt-11">
            <span className="bg-main-yellow rounded px-2 py-[6px] text-sm font-bold uppercase tracking-[1.4px] text-main-grey">
              {c.banner}
            </span>
            <Heading>
              <h3 className="text-5xl leading-[58px] -tracking-[0.67px]">
                {c.heading}
              </h3>
            </Heading>
            <p className="w-[82%] text-lg leading-7 tracking-[0.2px]">
              {c.description}
            </p>
            <ul className="w-[82%]">
              {c.list.map((li, i) => (
                <div key={i} className="flex items-start">
                  <Image src={check} alt="Check icon" className="mr-6 mt-2" />
                  <li className="text-lg leading-7 tracking-[0.2px]">{li}</li>
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
