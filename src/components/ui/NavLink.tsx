import Link from "next/link";
import { ReactNode } from "react";

function NavLink({
  children,
  className,
  link,
}: {
  children: ReactNode;
  className?: string;
  link?: string;
}) {
  return (
    <Link
      href={link || "#"}
      className={`${className} transition-all duration-300 before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:rounded-[4px] before:bg-main-blue-900 before:opacity-20 before:transition-all before:duration-500 hover:before:w-full`}
    >
      {children}
    </Link>
  );
}

export default NavLink;
