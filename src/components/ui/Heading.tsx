import React, { ReactNode } from "react";

function Heading({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`text-3xl font-bold -tracking-[0.89] md:leading-[74px] ${className}`}
    >
      {children}
    </div>
  );
}

export default Heading;
