import { UseFormRegisterReturn } from "react-hook-form";

function TextInput({
  placeholder,
  className,
  register,
}: {
  placeholder: string;
  className?: string;
  register: UseFormRegisterReturn;
}) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`rounded-[12px] p-3 pl-6 text-main-grey outline-none placeholder:text-lg placeholder:font-medium placeholder:-tracking-[0.25px] placeholder:text-main-grey-700 ${className}`}
      {...register}
    />
  );
}

export default TextInput;
