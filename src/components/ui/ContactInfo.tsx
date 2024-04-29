import React from "react";

function ContactInfo({
  heading,
  text,
  border,
  className,
}: {
  heading: string;
  text: string;
  border?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`${className} ${border && "border-l border-main-grey-700 px-4"}`}
    >
      <h4 className="text-base font-bold lg:text-lg">{heading}</h4>
      <p className="text-base leading-7 text-main-grey lg:text-lg">{text}</p>
    </div>
  );
}

export default ContactInfo;
