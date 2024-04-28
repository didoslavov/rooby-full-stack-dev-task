import React, { Fragment } from "react";
import { BiChevronRight } from "react-icons/bi";

function SubmitInput({
  value,
  className,
  green,
}: {
  value: string;
  className?: string;
  green?: boolean;
}) {
  return (
    <div
      className={`${className} ${green ? "flex items-center bg-main-green px-2 transition-all duration-500 hover:bg-main-green-100 hover:text-black hover:shadow-xl" : "bg-main-blue hover:bg-main-yellow hover:text-main-blue"} overflow-hidden rounded-[8px] text-white transition-all duration-500 hover:cursor-pointer`}
    >
      <input
        type="submit"
        value={value}
        className={`w-full cursor-pointer bg-inherit px-2 py-1 text-[17px] font-semibold leading-[40px] tracking-tight text-inherit`}
      />
      {green && <BiChevronRight size={26} className="text-inherit" />}
    </div>
  );
}

export default SubmitInput;
