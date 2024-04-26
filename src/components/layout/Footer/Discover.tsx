import NavContainer from "@/components/ui/NavContainer";
import getFooterLinks from "@/data/footerData";

function Discover() {
  const data = getFooterLinks("discover");

  return (
    <article className="col-span-2 col-start-10 row-start-1 w-fit justify-self-end lg:col-start-9 xl:col-start-8">
      <NavContainer data={data} />
    </article>
  );
}

export default Discover;
