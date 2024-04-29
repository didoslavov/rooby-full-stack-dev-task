import ContactInfo from "@/components/ui/ContactInfo";
import Heading from "@/components/ui/Heading";
import React from "react";
import Map from "./Map";
import Partners from "@/components/ui/Partners";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="col-start-1 col-end-13 grid grid-cols-12">
      <Heading className="col-start-2 col-end-11 mb-10 text-center sm:col-start-3 lg:col-span-5 lg:col-start-2 lg:mb-[72px] lg:text-start">
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-[64px]">
          Get in touch with our lovely team
        </h1>
      </Heading>
      <div className="col-start-2 col-end-12 mb-0 grid grid-cols-subgrid sm:col-start-3 sm:col-end-10 md:col-start-2 md:col-end-6 lg:mb-14">
        <div className="col-start-1 col-end-12 mb-8 sm:col-end-10 md:col-start-1 md:col-end-5">
          <ContactInfo
            heading="Rooody Technologies"
            text="Plovdiv, Bulgaria, bul Vasil Levski 96"
          />
        </div>
        <div className="col-start-1 col-end-12 mb-8 sm:col-end-10 md:col-start-1 md:col-end-5">
          <Map />
        </div>
        <div className="col-start-1 col-end-10 mb-20 flex flex-row sm:gap-10 md:col-start-1 md:col-end-5 md:flex-col lg:flex-row lg:justify-between lg:gap-0">
          <ContactInfo border heading="General" text="hello@me.com" />
          <ContactInfo border heading="Support" text="support@me.com" />
        </div>
      </div>
      <ContactForm className="col-start-2 col-end-12 sm:col-start-3 sm:col-end-11 md:col-start-7 md:col-end-12" />
      <div className="col-start-1 col-end-13 grid grid-cols-subgrid bg-white py-10 lg:py-[105px]">
        <div className="col-start-2 col-end-12">
          <Partners>Our clients and partners</Partners>
        </div>
      </div>
    </div>
  );
}

export default Contact;
