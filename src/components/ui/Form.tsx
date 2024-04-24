"use client";

import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Notification from "./Notification";

function Form() {
  const [email, setPhone] = useState("");
  const [notification, setNotification] = useState({ type: "", text: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;

    if (!email.trim()) {
      setNotification({
        type: "error",
        text: "Моля, въведете валиден телефонен номер!",
      });
      return;
    }

    if (!emailRegex.test(email)) {
      setNotification({
        type: "error",
        text: "Please enter valid email.",
      });
      return;
    }
    setPhone("");

    setNotification({
      type: "success",
      text: `We'll send you more information at ${email}!`,
    });
  };

  const onEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const closeNotification = () => {
    setNotification({ type: "", text: "" });
  };

  useEffect(() => {
    if (notification.type) {
      const timeoutId = setTimeout(() => {
        setNotification({ type: "", text: "" });
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [notification]);
  return (
    <>
      {notification.type && (
        <Notification
          type={notification.type}
          text={notification.text}
          closeNotification={closeNotification}
        />
      )}
      <form
        className="col-start-1 col-end-13 mb-3 md:col-end-12 2xl:col-end-10"
        onSubmit={handleSubmit}
      >
        <div className="col-start-1 col-end-11 grid grid-cols-12 rounded-[12px] bg-white p-3 shadow-sm">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="col-start-1 col-end-9 flex-1 pl-2 text-main-grey outline-none transition-all duration-300 placeholder:text-lg placeholder:font-medium placeholder:-tracking-[0.25px] placeholder:text-main-grey-700"
            onChange={onEmailChange}
            value={email}
          />
          <input
            type="submit"
            value="Try for free"
            className="col-start-9 col-end-13 rounded-[8px] bg-main-blue px-2 py-1 text-[17px] font-semibold leading-[40px] tracking-tight text-white transition-all duration-300 hover:scale-105 hover:cursor-pointer"
          />
        </div>
      </form>
    </>
  );
}

export default Form;
