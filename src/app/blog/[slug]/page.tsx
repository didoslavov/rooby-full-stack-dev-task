export default function Page({ params }: { params: { slug: string } }) {
  return (
    <div className="col-span-full col-start-2">My Post: {params.slug}</div>
  );
}
