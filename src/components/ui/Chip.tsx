import React, { ReactNode } from "react";

function Chip({ children, accent }: { children: ReactNode; accent?: boolean }) {
  return (
    <span
      className={`block w-fit rounded ${accent ? "mb-2 bg-main-yellow px-2 py-[6px] text-main-grey sm:mb-8" : "mb-4 bg-inherit text-main-grey-700"} text-sm font-bold uppercase tracking-[1.4px] text-main-grey`}
    >
      {children}
    </span>
  );
}

export default Chip;
