import PostLayout from "@/components/layout/Blog/PostLayout";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="col-span-full grid grid-cols-subgrid bg-white py-12 lg:py-[120px]">
      <PostLayout slug={params.slug} />
    </div>
  );
}
