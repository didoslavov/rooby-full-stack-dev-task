import Heading from "@/components/ui/Heading";
import MainLink from "@/components/ui/MainLink";
import React from "react";
import { posts } from "@/data/blogPosts";
import { BlogPost } from "@/types/blog";
import PostCard from "@/components/ui/PostCard";

const cards: BlogPost[] = posts.slice(0, 2);

function News() {
  return (
    <section className="col-start-1 col-end-13 grid grid-cols-subgrid gap-y-3 bg-white py-10 sm:gap-y-12 md:gap-y-[72px] md:py-14 xl:py-[120px]">
      <Heading className="col-start-2 col-end-12 md:col-end-10">
        <h2 className="text-2xl lg:text-5xl xl:text-[64px]">
          What’s new at Rooody?
        </h2>
      </Heading>
      <div className="col-start-2 col-end-3 self-end justify-self-start text-nowrap tracking-[0.43px] md:col-start-10 md:col-end-12 md:text-xl lg:text-end xl:col-start-11">
        <MainLink link="#" active>
          See all
        </MainLink>
      </div>
      <PostCard
        card={cards[0]}
        className="col-start-2 col-end-12 mb-4 sm:col-start-2 sm:col-end-7"
      />
      <PostCard
        card={cards[1]}
        className="col-start-2 col-end-12 mb-4 sm:col-start-7 sm:col-end-12"
      />
    </section>
  );
}

export default News;
