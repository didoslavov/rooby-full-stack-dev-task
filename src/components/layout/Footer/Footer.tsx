import React from "react";
import Socials from "./Socials";
import Company from "./Company";
import Product from "./Product";
import Discover from "./Discover";
import Help from "./Help";
import Copyrights from "./Copyrights";

function Footer() {
  return (
    <footer className="col-start-1 col-end-13 grid grid-cols-subgrid gap-y-10 bg-white py-9 lg:gap-y-0 xl:pt-28">
      <Socials />
      <Company />
      <Product />
      <Discover />
      <Help />
      <Copyrights />
    </footer>
  );
}

export default Footer;
