import React from "react";
import Socials from "./Socials";
import Company from "./Company";
import Product from "./Product";
import Discover from "./Discover";
import Help from "./Help";

function Footer() {
  return (
    <footer className="col-start-2 col-end-13 grid grid-cols-subgrid xl:pt-28">
      <Socials />
      <Company />
      <Product />
      <Discover />
      <Help />
    </footer>
  );
}

export default Footer;
