import Customer from "@/components/ui/Customer";
import { StaticImageData } from "next/image";
import React from "react";
import { VscQuote } from "react-icons/vsc";

function Card({
  card,
}: {
  card: { text: string; img: StaticImageData; name: string; position: string };
}) {
  return (
    <div className="flex-1">
      <VscQuote className="mb-1 text-main-green md:mb-6" size={40} />
      <figure className="flex flex-col justify-between border-t border-main-grey-700 pt-2 md:h-full md:pt-6">
        <p className="mb-6 font-medium -tracking-[0.33px] sm:text-lg md:mb-0 md:text-balance md:leading-[34px] lg:text-2xl">
          {card.text}
        </p>
        <Customer img={card.img} name={card.name} position={card.position} />
      </figure>
    </div>
  );
}

export default Card;
