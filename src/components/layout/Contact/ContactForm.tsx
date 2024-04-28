import SubmitInput from "@/components/ui/SubmitInput";
import TextArea from "@/components/ui/TextArea";
import TextInput from "@/components/ui/TextInput";
import React from "react";

function ContactForm({ className }: { className?: string }) {
  //TODO: Add dynamic props
  return (
    <form className={`${className} grid grid-cols-subgrid grid-rows-6 gap-y-6`}>
      <TextInput
        className="col-start-1 col-end-12 -tracking-[29px] placeholder:text-[21px]"
        name="name"
        placeholder="Your Name"
        value=""
      />
      <TextInput
        className="col-start-1 col-end-12 -tracking-[29px] placeholder:text-[21px]"
        name="email"
        placeholder="Your Email"
        value=""
      />
      <TextArea
        name="message"
        placeholder="Message"
        value=""
        className="col-start-1 col-end-12 row-span-2"
      />
      <SubmitInput
        value="Send message"
        green
        className="row-span- col-start-1 col-end-3 h-fit p-1"
      />
    </form>
  );
}

export default ContactForm;
