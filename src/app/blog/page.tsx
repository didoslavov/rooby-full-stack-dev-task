import PostLayout from "@/components/layout/Blog/PostLayout";
import PostCard from "@/components/ui/PostCard";
import { getPosts } from "@/data/blogPosts";

const posts = getPosts();

function page() {
  return (
    <section className="col-span-full grid grid-cols-subgrid bg-white py-12 lg:py-[120px]">
      <PostLayout />
      <div className="col-start-2 col-end-12 mb-12 grid grid-cols-subgrid lg:mb-[120px]">
        <PostCard
          medium
          post={posts[9]}
          className="col-start-1 col-end-12 mb-20 md:col-end-6 lg:mb-0"
        />
        <div className="col-span-full flex flex-col gap-7 md:col-span-5 lg:self-center">
          {posts.slice(10, 13).map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
      <div className="col-span-full col-start-2 mb-8 grid grid-cols-10 gap-x-[30px] gap-y-7 md:col-end-13 md:gap-y-[120px]">
        {posts.slice(13, 16).map((p) => (
          <PostCard
            small
            key={p.id}
            post={p}
            className="col-span-9 sm:col-span-3"
          />
        ))}
      </div>
    </section>
  );
}

export default page;
