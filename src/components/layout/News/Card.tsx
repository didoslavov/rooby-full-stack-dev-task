import Chip from "@/components/ui/Chip";
import Heading from "@/components/ui/Heading";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

function Card({
  className,
  card,
}: {
  className?: string;
  card: {
    chip: string;
    img: StaticImageData;
    heading: string;
    publishedAt: string;
    author: string;
  };
}) {
  return (
    <article className={`${className}`}>
      <Chip>{card.chip}</Chip>
      <figure className="group border-t border-main-grey-700">
        <Image
          src={card.img}
          alt="Blog image"
          className="my-6 w-full group-hover:drop-shadow-xl"
        />
        <Heading className="">
          <h3 className="mb-6 text-lg md:leading-[42px] md:-tracking-[0.44px] lg:text-2xl xl:text-[32px]">
            <Link href="">{card.heading}</Link>
          </h3>
        </Heading>
        <p>
          <span className="text-xs font-medium md:text-base">
            {card.publishedAt}
          </span>
          <span className="text-xs font-medium text-main-grey-700 md:text-base">
            ,by {card.author}
          </span>
        </p>
      </figure>
    </article>
  );
}

export default Card;
