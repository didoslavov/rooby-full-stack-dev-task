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
      className={`text-6xl font-bold leading-[74px] -tracking-[0.89] ${className}`}
    >
      {children}
    </div>
  );
}

export default Heading;
