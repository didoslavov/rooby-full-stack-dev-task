import NavContainer from "@/components/ui/NavContainer";
import getFooterLinks from "@/data/footerData";

function Company() {
  const data = getFooterLinks("company");

  return (
    <article className="col-start-2 row-start-3 sm:col-start-4 md:row-start-2 md:justify-self-end lg:col-start-6 lg:row-start-1 xl:col-start-5">
      <NavContainer data={data} />
    </article>
  );
}

export default Company;
