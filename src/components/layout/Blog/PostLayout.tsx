import PostCard from "@/components/ui/PostCard";
import { getPosts } from "@/data/blogPosts";
import React from "react";

function PostLayout({ slug }: { slug?: string }) {
  const posts = getPosts(slug);
  const sliceOptions = slug
    ? { start: 1, end: undefined }
    : { start: 3, end: 9 };

  return (
    <div className="col-start-1 col-end-13 grid grid-cols-subgrid">
      <div className="col-start-2 col-end-12 mb-12 grid grid-cols-subgrid lg:mb-[120px]">
        <PostCard
          className="col-start-1 col-end-12 md:col-end-6"
          post={slug ? posts[0] : posts[2]}
          big
        />
      </div>
      <div className="col-start-2 col-end-13 mb-12 grid grid-cols-10 gap-x-[30px] gap-y-14 lg:mb-[120px] xl:gap-y-[120px]">
        {posts.slice(sliceOptions.start, sliceOptions.end).map((p) => (
          <PostCard
            small
            key={p.id}
            post={p}
            className="col-span-9 sm:col-span-3"
          />
        ))}
      </div>
    </div>
  );
}

export default PostLayout;
