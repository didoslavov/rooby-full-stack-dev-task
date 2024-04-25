import Image, { StaticImageData } from "next/image";

const Logo = ({
  src,
  className,
}: {
  src: StaticImageData;
  className: string;
}) => {
  return (
    <div
      className={`flex items-center justify-center rounded-xl bg-white p-5 ${className}`}
    >
      <Image src={src} alt="Company Logo" />
    </div>
  );
};

export default Logo;
