import React, { ChangeEventHandler } from "react";

function TextInput({
  name,
  placeholder,
  className,
  onChangeHandler,
  value,
}: {
  name: string;
  placeholder: string;
  className?: string;
  onChangeHandler?: ChangeEventHandler<HTMLInputElement>;
  value: string;
}) {
  return (
    <input
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
      className={`rounded-[12px] p-3 pl-6 text-main-grey outline-none placeholder:text-lg placeholder:font-medium placeholder:-tracking-[0.25px] placeholder:text-main-grey-700 ${className}`}
      onChange={onChangeHandler}
      value={value}
    />
  );
}

export default TextInput;
