import PostCard from "@/components/ui/PostCard";
import { getAllPosts } from "@/data/blogPosts";

const posts = getAllPosts();

function page() {
  return (
    <section className="col-span-full grid grid-cols-subgrid bg-white py-[120px]">
      <div className="col-start-2 col-end-12 mb-[120px] grid grid-cols-subgrid">
        <PostCard className="col-start-1 col-end-6" post={posts[2]} big />
      </div>
      <div className="col-start-2 col-end-13 mb-[120px] grid grid-cols-10 gap-x-[30px] gap-y-[120px]">
        {posts.slice(3, 9).map((p) => (
          <PostCard small key={p.id} post={p} className="col-span-3" />
        ))}
      </div>
      <div className="col-start-2 col-end-13 mb-[120px] grid grid-cols-subgrid">
        <PostCard medium post={posts[9]} className="col-start-1 col-end-6" />
        <div className="col-span-5 flex flex-col gap-7 self-center">
          {posts.slice(10, 13).map((p) => (
            <PostCard key={p.id} post={p} />
          ))}
        </div>
      </div>
      <div className="col-start-2 col-end-13 mb-8 grid grid-cols-10 gap-x-[30px] gap-y-[120px]">
        {posts.slice(13, 16).map((p) => (
          <PostCard small key={p.id} post={p} className="col-span-3" />
        ))}
      </div>
    </section>
  );
}

export default page;
