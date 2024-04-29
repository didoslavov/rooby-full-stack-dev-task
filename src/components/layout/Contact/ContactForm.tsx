import SubmitInput from "@/components/ui/SubmitInput";
import TextArea from "@/components/ui/TextArea";
import TextInput from "@/components/ui/TextInput";
import React from "react";

function ContactForm({ className }: { className?: string }) {
  //TODO: Add dynamic props
  return (
    <form className={`${className} grid grid-cols-subgrid grid-rows-6 gap-y-6`}>
      <TextInput
        className="col-start-1 col-end-12 -tracking-[29px] placeholder:text-lg lg:placeholder:text-[21px]"
        name="name"
        placeholder="Your Name"
        value=""
      />
      <TextInput
        className="col-start-1 col-end-12 -tracking-[29px] placeholder:text-lg lg:placeholder:text-[21px]"
        name="email"
        placeholder="Your Email"
        value=""
      />
      <TextArea
        name="message"
        placeholder="Message"
        value=""
        className="col-start-1 col-end-12 row-span-2 placeholder:text-lg lg:placeholder:text-[21px]"
      />
      <SubmitInput
        value="Send message"
        green
        className="col-start-2 col-end-10 h-fit p-1 sm:col-end-8 md:col-start-2 md:col-end-5 lg:col-start-1 lg:col-end-3"
      />
    </form>
  );
}

export default ContactForm;
