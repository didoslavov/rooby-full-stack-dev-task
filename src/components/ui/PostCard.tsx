import Chip from "@/components/ui/Chip";
import Heading from "@/components/ui/Heading";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function PostCard({ className, card }: { className?: string; card: BlogPost }) {
  return (
    <article className={`${className}`}>
      <Chip className="mb-4">{card.tag}</Chip>
      <figure className="group border-t border-main-grey-700">
        <Image
          src={card.content.image}
          alt="Blog image"
          className="my-6 w-full group-hover:drop-shadow-xl"
        />
        <Heading className="">
          <h3 className="mb-6 text-lg md:leading-[42px] md:-tracking-[0.44px] lg:text-2xl xl:text-[32px]">
            <Link href="">{card.title}</Link>
          </h3>
        </Heading>
        <p>
          <span className="text-xs font-medium md:text-base">
            {formatDate(card.date)}
          </span>
          <span className="text-xs font-medium text-main-grey-700 md:text-base">
            ,by {card.content.quote.author}
          </span>
        </p>
      </figure>
    </article>
  );
}

export default PostCard;
