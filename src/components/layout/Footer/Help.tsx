import NavContainer from "@/components/ui/NavContainer";
import getFooterLinks from "@/data/footerData";
import React from "react";

function Help() {
  const data = getFooterLinks("help center");

  return (
    <article className="col-start-9 col-end-11 justify-self-center">
      <NavContainer data={data} />
    </article>
  );
}

export default Help;
