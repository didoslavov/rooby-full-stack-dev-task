import NavContainer from "@/components/ui/NavContainer";
import getFooterLinks from "@/data/footerData";

function Discover() {
  const data = getFooterLinks("discover");

  return (
    <article className="col-span-2 col-start-7 w-fit justify-self-end">
      <NavContainer data={data} />
    </article>
  );
}

export default Discover;
