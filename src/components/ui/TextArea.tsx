import React, { ChangeEventHandler } from "react";

function TextArea({
  name,
  placeholder,
  className,
  onChangeHandler,
  value,
}: {
  name: string;
  placeholder: string;
  className?: string;
  onChangeHandler?: ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
}) {
  return (
    <textarea
      name={name}
      id={name}
      placeholder={placeholder}
      className={`resize-none rounded-[12px] p-4 pl-6 text-main-grey outline-none placeholder:font-medium placeholder:-tracking-[0.29px] placeholder:text-main-grey-700 ${className}`}
      onChange={onChangeHandler}
      value={value}
    />
  );
}

export default TextArea;
