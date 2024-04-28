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
      <h4 className="text-lg font-bold">{heading}</h4>
      <p className="text-lg leading-7 text-main-grey">{text}</p>
    </div>
  );
}

export default ContactInfo;
