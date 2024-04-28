import ContactInfo from "@/components/ui/ContactInfo";
import Heading from "@/components/ui/Heading";
import React from "react";
import Map from "./Map";
import Partners from "@/components/ui/Partners";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="col-start-1 col-end-13 grid grid-cols-12">
      <Heading className="col-span-5 col-start-2 mb-[72px]">
        <h1 className="text-[64px]">Get in touch with our lovely team</h1>
      </Heading>
      <div className="col-start-2 col-end-6 mb-14 grid grid-cols-subgrid">
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
      <ContactForm className="col-start-7 col-end-12" />
      <div className="col-start-1 col-end-13 grid grid-cols-subgrid bg-white py-[105px]">
        <div className="col-start-2 col-end-12">
          <Partners>Our clients and partners</Partners>
        </div>
      </div>
    </div>
  );
}

export default Contact;
