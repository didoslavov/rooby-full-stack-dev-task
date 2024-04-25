import Image, { StaticImageData } from "next/image";
import React from "react";

function Card({
  card,
}: {
  card: {
    result: string;
    type: string;
    text: string;
    img: StaticImageData;
    name: string;
    position: string;
  };
}) {
  return (
    <figure className="col-start-2 col-end-12 mb-6 flex flex-col justify-between border-t border-main-grey-700 py-6 md:mb-0 md:flex-row md:gap-10 lg:pb-[80px] lg:pt-[49px] xl:gap-[153px]">
      <div className="flex flex-col gap-6">
        <span className="text-5xl font-bold lg:text-[72px] lg:leading-[74px] lg:-tracking-[1px]">
          {card.result}
        </span>
        <span className="mb-2 text-xl font-bold md:mb-0">{card.type}</span>
      </div>
      <div className="flex flex-col gap-6 lg:w-[65%]">
        <p className="text-sm font-medium md:text-3xl lg:leading-[42px] lg:-tracking-[0.44px]">
          {card.text}
        </p>
        <div className="flex gap-x-3">
          <Image src={card.img} alt="Image of a person" />
          <div className="flex flex-col">
            <span className="font-bold">{card.name}</span>
            <span className="text-main-grey">{card.position}</span>
          </div>
        </div>
      </div>
    </figure>
  );
}

export default Card;
