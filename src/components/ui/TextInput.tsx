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
  className: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  value: string;
}) {
  return (
    <input
      type="text"
      name={name}
      id={name}
      placeholder={placeholder}
      className="col-start-1 col-end-9 flex-1 pl-2 text-main-grey outline-none placeholder:text-lg placeholder:font-medium placeholder:-tracking-[0.25px] placeholder:text-main-grey-700"
      onChange={onChangeHandler}
      value={value}
    />
  );
}

export default TextInput;
