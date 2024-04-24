import { IoMdClose } from "react-icons/io";
import React from "react";

function Notification({
  type,
  text,
  closeNotification,
}: {
  type: string;
  text: string;
  closeNotification: () => void;
}) {
  return (
    <div
      className={`${type === "error" ? "text-main-red-900 bg-main-grey-200" : "bg-main-blue-900 text-white"} border-dark-blue fixed right-8 top-10 z-50 rounded-lg border px-6 py-4 text-xs md:text-base xl:px-10 xl:py-8 xl:text-xl`}
    >
      <IoMdClose
        className="text-dark-blue absolute right-1 top-1 hover:cursor-pointer xl:right-2 xl:top-2 xl:text-2xl"
        onClick={closeNotification}
      />
      {text}
    </div>
  );
}

export default Notification;
