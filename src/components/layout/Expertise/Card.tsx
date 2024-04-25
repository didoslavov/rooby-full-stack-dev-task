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

function Card({ index, expertise }: { index: number; expertise: Expertise }) {
  return (
    <article
      key={index}
      className={`flex flex-col items-center text-center md:text-start ${index % 2 === 1 ? "xl:flex-row-reverse xl:gap-24" : "xl:flex-row"} col-start-2 col-end-12 mt-16 border-t border-main-grey-700 pt-6 md:my-16 xl:my-[120px] xl:pt-12`}
    >
      <div className="flex-1 pb-6 pt-6 md:pt-11">
        <span className="bg-main-yellow mb-4 inline-block rounded px-2 py-[6px] text-sm font-bold uppercase tracking-[1.4px] text-main-grey">
          {expertise.banner}
        </span>
        <Heading className="mb-6">
          <h3 className="leading-[58px] -tracking-[0.67px] md:text-5xl">
            {expertise.heading}
          </h3>
        </Heading>
        <p className="mb-4 text-sm leading-7 tracking-[0.2px] md:text-lg xl:w-[82%]">
          {expertise.description}
        </p>
        <ul className="xl:w-[82%]">
          {expertise.list.map((li: string, i: number) => (
            <div key={i} className="mb-6 flex items-start">
              <Image
                src={check}
                alt="Check icon"
                className="mr-2 mt-2 md:mr-6"
              />
              <li className="text-start text-sm leading-7 tracking-[0.2px] md:text-lg">
                {li}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex-1">
        <Image alt={expertise.heading} src={expertise.img} />
      </div>
    </article>
  );
}

export default Card;
