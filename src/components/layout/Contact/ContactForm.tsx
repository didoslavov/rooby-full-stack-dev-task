"use client";

import Notification from "@/components/ui/Notification";
import SubmitInput from "@/components/ui/SubmitInput";
import TextArea from "@/components/ui/TextArea";
import TextInput from "@/components/ui/TextInput";
import { isEmailValid } from "@/utils/validators";
import React, { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface FormValues {
  name: "";
  email: "";
  message: "";
}

function ContactForm({ className }: { className?: string }) {
  const [notification, setNotification] = useState({ type: "", text: "" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    reset();

    setNotification({
      type: "success",
      text: `Thanks for reaching out!`,
    });
  };

  useEffect(() => {
    if (notification.type) {
      const timeoutId = setTimeout(() => {
        setNotification({ type: "", text: "" });
      }, 5000);

      return () => clearTimeout(timeoutId);
    }
  }, [notification]);

  const closeNotification = () => {
    setNotification({ type: "", text: "" });
  };

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
        onSubmit={handleSubmit(onSubmit)}
        className={`${className} grid grid-cols-subgrid grid-rows-6 gap-y-6`}
      >
        <div className="relative col-start-1 col-end-12">
          <TextInput
            register={register("name", {
              required: { value: true, message: "Name is required." },
              minLength: {
                value: 4,
                message: `Name should be 4 chars or more`,
              },
            })}
            className="h-full w-full placeholder:text-lg lg:placeholder:text-[21px]"
            placeholder="Your Name"
          />
          {errors && (
            <p className="absolute bottom-4 right-4 gap-1 text-xs text-red-400">
              {errors.name?.message}
            </p>
          )}
        </div>
        <div className="relative col-start-1 col-end-12">
          <TextInput
            register={register("email", {
              required: { value: true, message: "Email is required." },
              validate: (value) =>
                isEmailValid(value) || "Please enter a valid email",
              minLength: {
                value: 5,
                message: `Email should be 5 chars or more`,
              },
            })}
            className="h-full w-full selection:text-red-700 placeholder:text-lg lg:placeholder:text-[21px]"
            placeholder="Your Email"
          />
          {errors && (
            <p className="absolute bottom-4 right-4 gap-1 text-xs text-red-400">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div className="relative col-start-1 col-end-12 row-span-2">
          <TextArea
            placeholder="Message"
            className="row-span-2 h-full w-full placeholder:text-lg lg:placeholder:text-[21px]"
            register={register("message", {
              required: { value: true, message: "Message is required." },
              minLength: {
                value: 10,
                message: `Message should be 10 chars or more`,
              },
            })}
          />
          {errors && (
            <p className="absolute bottom-4 right-4 gap-1 text-xs text-red-400">
              {errors.message?.message}
            </p>
          )}
        </div>
        <SubmitInput
          value="Send message"
          green
          className="col-start-2 col-end-10 h-fit px-6 py-3 text-lg font-bold -tracking-[0.25px] sm:col-end-8 md:col-start-2 md:col-end-5 lg:col-start-1 lg:col-end-3"
        />
      </form>
    </>
  );
}

export default ContactForm;
