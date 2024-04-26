import Image, { StaticImageData } from "next/image";

function Customer({
  img,
  name,
  position,
}: {
  img: StaticImageData;
  name: string;
  position: string;
}) {
  return (
    <div className="flex gap-x-3">
      <Image src={img} alt="Image of a person" />
      <div className="flex flex-col">
        <span className="font-bold">{name}</span>
        <span className="text-main-grey">{position}</span>
      </div>
    </div>
  );
}

export default Customer;
