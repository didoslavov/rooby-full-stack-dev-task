import Contact from "@/components/layout/Contact/Contact";
import Map from "@/components/layout/Contact/Map";
import ContactInfo from "@/components/ui/ContactInfo";
import Heading from "@/components/ui/Heading";
import React from "react";

function page() {
  return (
    <section className="col-span-full grid grid-cols-subgrid py-[72px]">
      <Contact />
    </section>
  );
}

export default page;
