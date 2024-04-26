import NavContainer from "@/components/ui/NavContainer";
import getFooterLinks from "@/data/footerData";
import React from "react";

function Help() {
  const data = getFooterLinks("help center");

  return (
    <article className="col-start-8 row-start-2 text-nowrap sm:col-start-9 md:col-start-10 lg:col-start-11 lg:row-start-1 xl:col-start-10 xl:ml-10">
      <NavContainer data={data} />
    </article>
  );
}

export default Help;
