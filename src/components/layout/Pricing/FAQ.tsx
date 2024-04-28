"use client";

import { AiOutlinePlus } from "react-icons/ai";
import { BsDash } from "react-icons/bs";
import Heading from "@/components/ui/Heading";
import React, { useState } from "react";

const cards = [
  {
    question: "How Does Roooby CRM Compare To The Competition?",
    answer:
      "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
  },
  {
    question: "Can I Change Plans Or Cancel My Subscription At Any Time?",
    answer:
      "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
  },
  {
    question: "How Secure Is My Data With Roooby CRM?",
    answer:
      "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
  },
  {
    question: "What Is The Uptime Guarantee?",
    answer:
      "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
  },
  {
    question: "How Can I Add More Emails To My Account?",
    answer:
      "Rooby CRM offers the most affordable, comprehensive platform to manage the entire customer journey, from generating leads, to closing deals and supporting your customers. With a full suite of CRM, sales enablement, marketing automation, and help desk/customer support capabilities, it’s all you need to manage the entire customer lifecycle. Most of our competitors offer one or two of these functions as separate products, leaving you with the headache of integrating them and increasing the overall price point.",
  },
];

export default function FAQ() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion((prevIndex: number | null) =>
      prevIndex === index ? null : index,
    );
  };

  return (
    <article className="col-span-full grid grid-cols-12 bg-white px-4 xl:px-0">
      <Heading className="col-span-full col-start-1 my-11 text-center xl:col-span-6 xl:col-start-2 xl:my-[100px] xl:text-start">
        <h1 className="xl:text-[64px]">Frequently asked questions</h1>
      </Heading>
      <div className="col-span-full row-start-2 mb-20 flex xl:col-start-4 xl:col-end-12 xl:justify-end">
        <div>
          {cards.map((el, i) => (
            <div
              onClick={() => toggleAccordion(i)}
              key={i}
              className="flex flex-col gap-10 border-t border-main-grey-700 py-5 lg:py-16 "
            >
              <div className="flex items-start justify-between gap-5 hover:cursor-pointer md:items-center">
                <h4 className="text-xl font-medium leading-[42px] -tracking-[0.44px] sm:text-2xl md:text-[32px] ">
                  {el.question}
                </h4>
                {openAccordion === i ? (
                  <BsDash size={30} />
                ) : (
                  <AiOutlinePlus size={30} />
                )}
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 xl:w-[90%]  ${
                  openAccordion === i
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p>{el.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
