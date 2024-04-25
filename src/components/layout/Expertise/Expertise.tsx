import React from "react";
import increase from "/public/expertise/increase.svg";
import marketing from "/public/expertise/marketing.svg";
import help from "/public/expertise/help.svg";
import Card from "./Card";

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
        <Card key={i} expertise={c} />
      ))}
    </section>
  );
}

export default Expertise;
