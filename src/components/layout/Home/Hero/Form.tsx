"use client";

import { useEffect, useState } from "react";
import Notification from "../../../ui/Notification";
import TextInput from "@/components/ui/TextInput";
import SubmitInput from "@/components/ui/SubmitInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { isEmailValid } from "@/utils/validators";

function Form() {
  const [notification, setNotification] = useState({ type: "", text: "" });
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string }>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    reset();

    setNotification({
      type: "success",
      text: `We'll send you more information at ${data.email}`,
    });
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
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="col-start-1 col-end-11 grid grid-cols-12 rounded-[12px] bg-white py-3 pr-3 shadow-sm">
          <TextInput
            placeholder="Enter your email"
            className="col-start-1 col-end-9 flex-1"
            register={register("email", {
              required: { value: true, message: "Email is required." },
              validate: (value) =>
                isEmailValid(value) || "Please enter a valid email",
              minLength: {
                value: 5,
                message: `Email should be 5 chars or more`,
              },
            })}
          />
          <SubmitInput
            value="Try for free"
            className="col-start-9 col-end-13 text-[17px] font-semibold leading-[40px]"
          />
        </div>
        {errors.email && (
          <p className="pl-4 pt-2 text-xs text-red-400">
            {errors.email.message}
          </p>
        )}
      </form>
    </>
  );
}

export default Form;
