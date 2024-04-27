import NavContainer from "@/components/ui/NavContainer";
import getFooterLinks from "@/data/footerData";

function Product() {
  const data = getFooterLinks("product");

  return (
    <article className="col-span-2 col-start-4 row-start-2 justify-self-end sm:col-start-5 md:col-start-7 lg:row-start-1 xl:col-start-6">
      <NavContainer data={data} />
    </article>
  );
}

export default Product;
