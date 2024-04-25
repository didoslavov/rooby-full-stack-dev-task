import Image, { StaticImageData } from "next/image";
import Heading from "@/components/ui/Heading";
import check from "/public/expertise/check.svg";

interface Expertise {
  banner: string;
  heading: string;
  description: string;
  list: string[];
  img: StaticImageData;
}

function Card({ expertise }: { expertise: Expertise }) {
  return (
    <>
      <div className="py-6 md:pt-11 lg:flex-1">
        <span className="mb-2 block w-fit rounded bg-main-yellow px-2 py-[6px] text-sm font-bold uppercase tracking-[1.4px] text-main-grey sm:mb-8">
          {expertise.banner}
        </span>
        <Heading className="mb-6">
          <h3 className="-tracking-[0.67px] lg:text-5xl lg:leading-[58px]">
            {expertise.heading}
          </h3>
        </Heading>
        <p className="mb-4 text-sm leading-7 tracking-[0.2px] lg:text-lg xl:w-[82%]">
          {expertise.description}
        </p>
        <ul className="xl:w-[82%]">
          {expertise.list.map((li: string, i: number) => (
            <div key={i} className="mb-6 flex items-start lg:justify-between">
              <Image
                src={check}
                alt="Check icon"
                className="mr-2 mt-2 lg:mr-6"
              />
              <li className="text-sm leading-7 tracking-[0.2px] lg:text-lg">
                {li}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex justify-end overflow-hidden drop-shadow-xl lg:flex-1">
        <Image alt={expertise.heading} src={expertise.img} />
      </div>
    </>
  );
}

export default Card;
