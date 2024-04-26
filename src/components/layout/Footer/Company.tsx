import NavContainer from "@/components/ui/NavContainer";
import getFooterLinks from "@/data/footerData";

function Company() {
  const data = getFooterLinks("company");

  return (
    <article className="col-start-4 row-start-2 justify-self-end sm:col-start-6 lg:row-start-1 xl:col-start-5">
      <NavContainer data={data} />
    </article>
  );
}

export default Company;
