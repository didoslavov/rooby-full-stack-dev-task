import Heading from "@/components/ui/Heading";
import nellie from "/public/clients/nellie.svg";
import lawrence from "/public/clients/lawrence.svg";
import Card from "./Card";

const cards = [
  {
    result: "$2.5 M",
    type: "Generate sales",
    text: "Using Кирилица CRM is one of the best decisions we’ve ever made. We’ve seen our annual revenue explode, and the outlook just keeps getting sunnier.",
    img: nellie,
    name: "Nellie Foster",
    position: "Founder & CEO, Foster Business Strategies",
  },
  {
    result: "45%",
    type: "Grew revenue",
    text: "Yoora is created for sales people. It’s the kind of software that just works. I don’t have to try to make it work. It already does. It’s just perfect.",
    img: lawrence,
    name: "Lawrence Gibbs",
    position: "Marketing Director",
  },
];

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
