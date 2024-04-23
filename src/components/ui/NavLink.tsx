import Link from "next/link";
import { ReactNode } from "react";

function NavLink({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href="#" className={`${className} transition-all duration-300`}>
      {children}
    </Link>
  );
}

export default NavLink;
