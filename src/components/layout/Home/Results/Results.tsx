import Heading from "@/components/ui/Heading";
import Card from "./Card";
import { getResultsData } from "@/data/homeData";

const cards = getResultsData();

function Results() {
  return (
    <section className="col-span-full grid grid-cols-subgrid bg-white xl:pb-20">
      <Heading className="col-span-full text-center md:col-start-2 md:col-end-10 md:text-start">
        <h2 className="mb-3 lg:leading-[68px] lg:-tracking-[0.67px]">
          Real-life results and revenue
        </h2>
      </Heading>
      <p className="col-start-2 col-end-11 mb-8 self-center text-center text-base font-normal text-main-grey-800 md:text-start md:text-lg md:leading-7 lg:mb-[72px]">
        See how companies like yours have smashed their sales success goals
      </p>
      <Card card={cards[0]} />
      <Card card={cards[1]} />
    </section>
  );
}

export default Results;
