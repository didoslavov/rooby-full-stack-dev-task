import Link from "next/link";
import React, { ReactNode } from "react";

function Button({
  link,
  children,
  type,
  size,
  className,
}: {
  link: string;
  children: ReactNode;
  size: "sm" | "lg";
  type?: "full" | "outline" | "accent";
  className?: string;
}) {
  return (
    <Link
      href={link}
      className={`${type === "full" ? "bg-main-blue  text-white hover:bg-white hover:text-black" : type === "outline" ? "bg-white text-black hover:bg-main-blue hover:text-white" : "bg-main-green hover:bg-white hover:text-black"} ${className && className} ${size === "sm" ? "rounded-md py-2 text-xs -tracking-[0.19px]" : "rounded-md py-4 -tracking-[0.25px] lg:text-lg"} w-fit rounded-[8px] px-2 font-bold transition-all duration-500 hover:cursor-pointer`}
    >
      {children}
    </Link>
  );
}

export default Button;
