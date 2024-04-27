import Link from "next/link";
import React, { ReactNode } from "react";
import { BiChevronRight } from "react-icons/bi";

/**
 * @param { boolean} plane Renders the link without arrow icon.
 */

function MainLink({
  children,
  className,
  active,
  plane,
  link,
}: {
  children: ReactNode;
  className?: string;
  active?: boolean;
  plane?: boolean;
  link: string;
}) {
  return (
    <Link
      href={link}
      className={`${className} relative font-medium transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:rounded-[4px] ${active ? "before:bg-main-green" : "before:bg-main-blue-900"} before:opacity-20 before:transition-all before:duration-500 hover:before:h-full`}
    >
      {children}
      {!plane && (
        <BiChevronRight
          className={`inline-block ${active && "text-main-green"}`}
          size={26}
        />
      )}
    </Link>
  );
}

export default MainLink;
