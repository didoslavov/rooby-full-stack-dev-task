import Link from "next/link";
import React, { ReactNode } from "react";
import { BiChevronRight } from "react-icons/bi";

function MainLink({
  children,
  className,
  active,
}: {
  children: ReactNode;
  className?: string;
  active?: boolean;
}) {
  return (
    <Link
      href="#"
      className={`relative font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:rounded-[4px] ${active ? "before:bg-main-green" : "before:bg-main-blue-900"} before:opacity-20 before:transition-all before:duration-500 hover:before:h-full`}
    >
      {children}
      <BiChevronRight
        className={`inline-block ${active && "text-main-green"} ${className}`}
        size={26}
      />
    </Link>
  );
}

export default MainLink;
