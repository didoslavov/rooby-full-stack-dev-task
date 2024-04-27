import Button from "@/components/ui/Button";
import React from "react";
import check from "/public/expertise/check.svg";
import Image from "next/image";
import Chip from "@/components/ui/Chip";

function Card({
  offer,
  className,
}: {
  offer: {
    title: string;
    description: string;
    price: string;
    benefits: string[];
  };
  className?: string;
}) {
  return (
    <article className="col-span-3 rounded-xl bg-white xl:p-8">
      <div className="mb-6">
        <div className="mb-2 flex items-center gap-3">
          <h3 className="text-2xl font-bold">{offer.title}</h3>
          {offer.title.toLowerCase() === "professional" && (
            <Chip offer>recommended</Chip>
          )}
        </div>
        <p className="leading-[26px]">{offer.description}</p>
      </div>
      <p className="mb-6 indent-3 font-bold">
        <span className="-trackick-[0.67px] text-5xl leading-[57px]">
          ${offer.price}
        </span>
        <span className="leading-[26px] text-main-grey-600">/month</span>
      </p>
      <Button
        link="#"
        size="lg"
        type="outline"
        className="mb-3 block w-full border border-main-grey-700 border-opacity-25 text-center"
      >
        Try For Free
      </Button>
      <p className="mb-8 text-nowrap text-center text-sm tracking-[0.16px] text-main-grey-600">
        Free 14-day trial. No credit card required.
      </p>
      <ul className="flex flex-col gap-4 border-t border-main-grey-700 border-opacity-25 pt-6">
        {offer.benefits.map((b, i) => (
          <div key={i} className="flex items-center gap-3">
            <Image
              src={check}
              alt="Check Icon"
              className={`${offer.title.toLowerCase() === "starter" && i > 5 ? "opacity-25" : offer.title.toLowerCase() === "professional" && i > 7 ? "opacity-25" : ""}`}
            />
            <li
              className={`leading-[26px] tracking-[0.18px] text-black ${offer.title.toLowerCase() === "starter" && i > 5 ? "text-opacity-25 line-through" : offer.title.toLowerCase() === "professional" && i > 7 ? "line-through opacity-25" : ""}`}
            >
              {b}
            </li>
          </div>
        ))}
      </ul>
    </article>
  );
}

export default Card;
