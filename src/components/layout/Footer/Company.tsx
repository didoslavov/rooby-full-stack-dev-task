import NavContainer from "@/components/ui/NavContainer";
import getFooterLinks from "@/data/footerData";

function Company() {
  const data = getFooterLinks("company");

  return (
    <article>
      <NavContainer data={data} />
    </article>
  );
}

export default Company;
