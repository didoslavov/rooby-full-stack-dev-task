import Heading from "@/components/ui/Heading";
import MainLink from "@/components/ui/MainLink";
import Card from "./Card";
import { getTestimonialsData } from "@/data/homeData";

const cards = getTestimonialsData();

function Testimonials() {
  return (
    <section className="col-start-1 col-end-13 grid grid-cols-subgrid gap-y-3 py-10 sm:gap-y-12 md:mb-14 md:gap-y-[72px] md:py-14 xl:py-[120px]">
      <Heading className="col-start-2 col-end-12 md:col-end-7">
        <h2 className="text-2xl lg:text-5xl">
          We love our Customers and They love us too
        </h2>
      </Heading>
      <div className="col-start-2 col-end-3 self-end justify-self-start text-nowrap tracking-[0.43px] md:col-start-10 md:col-end-12 md:text-xl lg:text-end xl:col-start-11">
        <MainLink link="#" active>
          See all
        </MainLink>
      </div>
      <article className="col-start-2 col-end-12 flex flex-col gap-9 md:flex-row md:gap-7">
        <Card card={cards[0]} />
        <Card card={cards[1]} />
        <Card card={cards[2]} />
      </article>
    </section>
  );
}

export default Testimonials;
