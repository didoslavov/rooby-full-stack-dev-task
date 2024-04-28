import Chip from "@/components/ui/Chip";
import Heading from "@/components/ui/Heading";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import Link from "next/link";
import React from "react";

/**
 * @prop {boolean} small changes font size of the heading to 24px.
 * @prop {boolean} medium changes font size of the heading to 32px.
 * @prop {boolean} big changes layout of the card, Image is outside the container.
 */

function PostCard({
  className,
  post,
  small,
  medium,
  big,
}: {
  className?: string;
  post: BlogPost;
  small?: boolean;
  medium?: boolean;
  big?: boolean;
}) {
  return (
    <>
      <article
        className={`${className} ${!post.content.image && "row-start-2"} ${big && `self-center border-b border-t border-main-grey-700`}`}
      >
        {post.content.image && (
          <Chip className={`mb-4 ${big && "mt-4"}`}>{post.tag}</Chip>
        )}
        <figure className={`group ${!big && "border-t border-main-grey-700"}`}>
          {post.content.image && !big && (
            <Image
              src={post.content.image}
              alt="Blog image"
              className="my-6 w-full group-hover:drop-shadow-xl"
            />
          )}
          <div className={`${big && "flex flex-col justify-between"}`}>
            <Heading>
              <h3
                className={`${big ? "mb-9 text-2xl lg:mb-[118px] lg:text-[40px] lg:leading-[50px] lg:-tracking-[0.56px]" : medium ? "mb-6 text-lg md:leading-[42px] md:-tracking-[0.44px] lg:text-2xl xl:text-[32px]" : small ? "mb-8 text-base sm:text-lg lg:text-2xl lg:leading-[34px] lg:-tracking-[0.33px]" : "mb-8 mt-4 text-base lg:w-[87%] lg:text-2xl lg:leading-[34px] lg:-tracking-[0.33px]"}`}
              >
                <Link href="#">{post.title}</Link>
              </h3>
            </Heading>
            <p className={`flex justify-between ${big && "mb-4"}`}>
              <span>
                <span className="text-xs font-medium md:text-base">
                  {formatDate(post.date)}
                </span>
                <span className="text-xs font-medium text-main-grey-700 md:text-base">
                  , by {post.content.quote.author}
                </span>
              </span>
              {!post.content.image && <Chip className="mb-4">{post.tag}</Chip>}
            </p>
          </div>
        </figure>
      </article>
      {big && (
        <div className="col-span-full w-full max-w-[555px] lg:col-span-5">
          <Image
            src={post.content.image}
            alt="Blog image"
            className="col-start-1 col-end-12 row-start-2 my-6 w-full group-hover:drop-shadow-xl md:col-start-6 md:row-start-1"
          />
        </div>
      )}
    </>
  );
}

export default PostCard;
