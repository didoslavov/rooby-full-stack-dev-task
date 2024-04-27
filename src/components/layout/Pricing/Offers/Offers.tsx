import React from "react";
import Card from "./Card";

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
    <section className="col-start-2 col-end-13 grid grid-cols-10 gap-[9px]">
      {offers.map((o, i) => (
        <Card offer={o} key={i} />
      ))}
    </section>
  );
}

export default Offers;
