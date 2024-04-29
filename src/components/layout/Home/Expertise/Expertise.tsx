import Card from "./Card";
import Link from "next/link";
import Button from "@/components/ui/Button";
import { getExpertiseData } from "@/data/homeData";

const cards = getExpertiseData();

function Expertise() {
  return (
    <section className="col-start-1 col-end-13 grid grid-cols-subgrid bg-white">
      {cards.map((c, i) => {
        return (
          <article
            key={c.id}
            className={`relative flex flex-col items-center gap-10 sm:text-center md:flex-row md:text-start lg:gap-0 ${i === cards.length - 1 && "mb-16 lg:mb-[120px]"} ${i % 2 === 1 ? "xl:flex-row-reverse xl:gap-24" : "xl:flex-row"} col-start-2 col-end-12 mt-16 border-t border-main-grey-700 xl:mt-[120px] xl:pt-12`}
          >
            <Card expertise={c} />
            {i === 1 && (
              <div className="pointer-events-none absolute -bottom-10 flex flex-col items-center gap-3 rounded-xl bg-main-blue py-2 pl-6 pr-3 text-base text-white transition-all duration-500 hover:bg-main-yellow hover:text-black sm:bottom-8 sm:left-10 sm:flex-row md:-bottom-10 md:left-40 lg:-bottom-14 lg:left-56 lg:text-lg xl:bottom-10 xl:left-14">
                <p className=" font-bold -tracking-[0.25px]">
                  Automate your sales & marketing
                </p>
                <Button
                  link="#"
                  size="lg"
                  type="accent"
                  className="pointer-events-auto px-4 py-[8px] text-center font-bold lg:pl-5 lg:pr-[18px] xl:px-6 xl:py-4"
                >
                  Start now
                </Button>
              </div>
            )}
          </article>
        );
      })}
    </section>
  );
}

export default Expertise;
