import React from "react";
import Card from "./Card";
import Button from "@/components/ui/Button";
import FAQ from "./FAQ";
import Banner from "@/components/ui/Banner";

const offers = [
  {
    title: "Starter",
    description: "Get organized and set up simple sales processes lorem ipsum",
    price: "8,90",
    benefits: [
      "2 team members",
      "1,000 Contacts & Companies",
      "5 Campaign Workflows",
      "10 Nodes Per Campaign",
      "5 Automation Rules (Triggers)",
      "3 Plugins/Integrations",
      "Marketing Automation	",
      "Custom Deal Tracks",
      "Automated Voicemails	",
      "Post-call Automation	",
    ],
  },
  {
    title: "Professional",
    description:
      "Everything you need to boost performance and revenue lorem ipsum",
    price: "29,90",
    benefits: [
      "10 team members",
      "2,500 Contacts & Companies",
      "5 Campaign Workflows",
      "10 Nodes Per Campaign",
      "5 Automation Rules (Triggers)",
      "3 Plugins/Integrations",
      "Marketing Automation	",
      "Custom Deal Tracks",
      "Automated Voicemails	",
      "Post-call Automation	",
    ],
  },
  {
    title: "Enterprise",
    description:
      "Customize without limits and access unrivaled support lorem ipsum",
    price: "39,90",
    benefits: [
      "Unlimited team members",
      "5,000 Contacts & Companies",
      "25 Campaign Workflows",
      "20 Nodes Per Campaign",
      "15 Automation Rules (Triggers)",
      "10 Plugins/Integrations",
      "Marketing Automation	",
      "Custom Deal Tracks",
      "Automated Voicemails	",
      "Post-call Automation	",
    ],
  },
];

function Offers() {
  return (
    <section className="col-start-1 col-end-13 grid grid-cols-11 gap-[9px]">
      {offers.map((o, i) => (
        <div
          key={i}
          className={`${i === 0 ? "" : i === 1 ? " row-start-2 xl:col-start-5" : " row-start-3 xl:col-start-8"} col-span-9 col-start-2 sm:col-span-6 sm:col-start-4 xl:col-span-3 xl:col-start-2 xl:row-start-1`}
        >
          <Card className="" offer={o} />
        </div>
      ))}
      <div className="col-start-1 col-end-12 mt-7 flex flex-col items-center justify-center gap-10 border-t border-main-grey-700 px-4 py-6 md:flex-row lg:col-start-2 lg:mt-[100px] lg:justify-around lg:px-16 lg:py-14">
        <p className="text-center text-[32px] font-bold -tracking-[0.44px] lg:leading-[42px]">
          Need help choosing the right plan?
        </p>
        <div className="flex flex-col gap-5 lg:flex-row lg:gap-4">
          <Button className="px-8 shadow-lg" link="#" size="lg" type="outline">
            Contact sales
          </Button>
          <Button
            className="px-8 hover:shadow-lg"
            link="#"
            size="lg"
            type="full"
          >
            Compare plans
          </Button>
        </div>
      </div>
      <div className="col-span-full grid grid-cols-subgrid overflow-hidden">
        <FAQ />
        <Banner />
      </div>
    </section>
  );
}

export default Offers;
