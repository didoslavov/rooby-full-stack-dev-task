import { getFilteredPosts } from "@/data/blogPosts";

export default function Page({ params }: { params: { slug: string } }) {
  const blogPosts = getFilteredPosts(params.slug);

  return (
    <div className="col-span-full col-start-2">My Post: {params.slug}</div>
  );
}
