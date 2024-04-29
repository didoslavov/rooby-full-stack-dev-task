import Details from "@/components/layout/Details/Details";

function page({ params }: { params: { postId: string } }) {
  return <Details params={params} />;
}

export default page;
