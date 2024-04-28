import ContactInfo from "@/components/ui/ContactInfo";
import Heading from "@/components/ui/Heading";
import React from "react";
import Map from "./Map";

function Contact() {
  return (
    <>
      <Heading className="col-span-5 col-start-2 mb-[72px]">
        <h1 className="text-[64px]">Get in touch with our lovely team</h1>
      </Heading>
      <div className="col-start-2 col-end-8 grid grid-cols-subgrid">
        <div className="col-start-1 col-end-5 mb-8">
          <ContactInfo
            heading="Rooody Technologies"
            text="Plovdiv, Bulgaria, bul Vasil Levski 96"
          />
        </div>
        <div className="col-start-1 col-end-5 mb-8">
          <Map />
        </div>
        <div className="col-start-1 col-end-5 mb-20 flex justify-between">
          <ContactInfo border heading="General" text="hello@me.com" />
          <ContactInfo border heading="Support" text="support@me.com" />
        </div>
      </div>
    </>
  );
}

export default Contact;
