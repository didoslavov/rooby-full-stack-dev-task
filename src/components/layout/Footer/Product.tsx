import NavContainer from "@/components/ui/NavContainer";
import getFooterLinks from "@/data/footerData";
import React from "react";

function Product() {
  const data = getFooterLinks("product");

  return (
    <article className="col-span-2 col-start-5 justify-self-end">
      <NavContainer data={data} />
    </article>
  );
}

export default Product;
