import { UseFormRegisterReturn, useForm } from "react-hook-form";

function TextArea({
  placeholder,
  className,
  register,
}: {
  placeholder: string;
  className?: string;
  register: UseFormRegisterReturn;
}) {
  return (
    <textarea
      placeholder={placeholder}
      className={`resize-none rounded-[12px] p-4 pl-6 text-main-grey outline-none placeholder:font-medium placeholder:-tracking-[0.29px] placeholder:text-main-grey-700 ${className}`}
      {...register}
    />
  );
}

export default TextArea;
