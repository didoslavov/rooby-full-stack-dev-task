import React, { ReactNode } from "react";

function Chip({
  children,
  accent,
  offer,
  className,
}: {
  children: ReactNode;
  accent?: boolean;
  offer?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`block w-fit rounded ${className} ${accent ? "bg-main-yellow px-2 py-[6px] text-main-grey" : offer ? "bg-main-green-100 px-2 py-1 text-xs text-main-green" : "bg-inherit text-main-grey-700"} text-sm font-bold uppercase tracking-[1.4px]`}
    >
      {children}
    </span>
  );
}

export default Chip;
