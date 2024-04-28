import PostCard from "@/components/ui/PostCard";
import { getAllPosts } from "@/data/blogPosts";

const posts = getAllPosts();

function page() {
  return (
    <section className="col-span-full grid grid-cols-subgrid bg-white py-[120px]">
      <div className="col-start-2 col-end-12 grid grid-cols-subgrid">
        <PostCard className="col-start-1 col-end-6" post={posts[2]} big />
      </div>
    </section>
  );
}

export default page;
