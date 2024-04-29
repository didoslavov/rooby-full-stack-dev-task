"use client";

import Chip from "@/components/ui/Chip";
import Customer from "@/components/ui/Customer";
import Heading from "@/components/ui/Heading";
import SocialIcons from "@/components/ui/SocialIcons";
import { getMorePosts, getPostById } from "@/data/blogPosts";
import { BlogPost } from "@/types/blog";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import linkIcon from "/public/ic_insert_link.svg";
import Link from "next/link";
import PostCard from "@/components/ui/PostCard";

function Details({ params }: { params: { postId: string } }) {
  const [post, setPost] = useState<BlogPost | undefined>();
  const morePosts = post && getMorePosts(post?.tag);

  useEffect(() => {
    setPost(getPostById(Number(params.postId)));
  }, [params.postId]);

  return (
    <section className="col-span-full grid grid-cols-subgrid pt-10 md:pt-20">
      <article className="col-span-full grid grid-cols-subgrid gap-0">
        <Chip className="col-start-1 col-end-13 mb-4 px-3 lg:col-start-3 lg:col-end-11 lg:px-0 xl:col-start-4 xl:col-end-10">
          {post?.tag}
        </Chip>
        <Heading className="col-start-1 col-end-13  mb-6 border-t border-main-grey-700 px-3 pt-4 text-center lg:col-start-3 lg:col-end-11 lg:px-0 lg:text-start xl:col-start-4 xl:col-end-10">
          <h2 className="text-3xl md:text-5xl md:leading-[58px] md:-tracking-[0.67px]">
            {post?.title}
          </h2>
        </Heading>
        <div className="col-start-1 col-end-13 mb-[49px] px-3 text-center lg:col-start-3 lg:col-end-11 lg:px-0 lg:text-start xl:col-start-4 xl:col-end-10">
          <span className="text-xs font-medium md:text-base">
            {formatDate(post?.date)}
          </span>
          <span className="text-xs font-medium text-main-grey-700 md:text-base">
            , by {post?.content.quote.author}
          </span>
        </div>
        <Image
          src={post?.content.image || ""}
          alt="Blog post image"
          className="col-start-3 col-end-11 max-h-[555px] w-full"
        />
      </article>
      <article className="col-span-full grid grid-cols-subgrid bg-white md:pb-20 xl:mb-[100px]">
        <div className="col-start-1 col-end-13 px-3 py-9 lg:col-start-3 lg:col-end-11 lg:px-0 xl:col-start-4 xl:col-end-10 xl:py-[100px]">
          <p className="pb-[38px] font-medium xl:text-2xl xl:leading-[34px] xl:-tracking-[0.33]">
            {post?.content.main.intro}
          </p>
          <Heading className="mb-[14px] text-center md:text-start">
            <h3 className="text-5xl -tracking-[-0.67px]">
              {post?.content.main.heading}
            </h3>
          </Heading>
          <p className="mb-8 text-lg leading-7">{post?.content.main.text[0]}</p>
          <p className="mb-4 text-lg leading-7">{post?.content.main.text[1]}</p>
          <div className="mb-8 border-b border-t border-main-grey-700 py-6 md:mb-[72px]">
            <p className="mb-8 text-2xl font-medium leading-[34px]">
              {post?.content.quote.paragraph}
            </p>
            <p className="font-medium text-main-grey-700">
              {post?.content.quote.author}
            </p>
          </div>
          <Image
            src={post?.image || ""}
            alt="Blog post image"
            className="mb-8 md:mb-[72px]"
          />
          <Heading className="mb-[14px] text-center md:text-start">
            <h3 className="text-5xl -tracking-[-0.67px]">
              {post?.content.sub.heading}
            </h3>
          </Heading>
          <p className="mb-8 text-lg leading-7 md:mb-[72px]">
            {post?.content.sub.intro}
          </p>
          <Heading className="mb-3 text-center md:text-start">
            <h3 className="text-[32px] leading-[42px] -tracking-[-0.44px]">
              {post?.content.sub.heading}
            </h3>
          </Heading>
          <p className="mb-8 text-lg leading-7">{post?.content.sub.text[0]}</p>
          <p className="mb-4 text-lg leading-7">{post?.content.sub.text[1]}</p>
          <div className="flex items-center justify-between border-b border-t border-main-grey-700 py-6">
            <Customer
              img={post?.publisher.avatar}
              name={post?.publisher.name}
              position={post?.publisher.position}
              className="text-sm"
            />
            <div className="flex items-center gap-4">
              <SocialIcons />
              <Link target="_blank" href="#">
                <Image src={linkIcon} alt="Linked In Logo" />
              </Link>
            </div>
          </div>
        </div>
      </article>
      <article className="col-span-full grid grid-cols-subgrid ">
        <div className="col-start-1 col-end-13 grid grid-cols-12 gap-x-[30px] px-4 py-10 xl:col-start-3 xl:col-end-12 xl:px-0 xl:pb-[100px] xl:pt-10">
          <Heading className="col-span-10 mb-8 md:mb-[72px]">
            <h3 className="leading-[74px] -tracking-[0.89px] sm:text-5xl md:text-[64px]">
              More from this topic
            </h3>
          </Heading>
          {morePosts
            ?.slice(0, 3)
            .map((p) => (
              <PostCard
                key={p.id}
                post={p}
                className="col-span-full sm:col-span-4"
                small
              />
            ))}
        </div>
      </article>
    </section>
  );
}

export default Details;
