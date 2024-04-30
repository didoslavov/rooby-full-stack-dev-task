import Heading from "../../../ui/Heading";
import Image from "next/image";
import heroImage from "/public/hero/hero.svg";
import Form from "./Form";
import Partners from "@/components/ui/Partners";

function Hero() {
  return (
    <section className="col-start-1 col-end-13 grid grid-cols-12 py-4 pl-4 sm:col-start-2 sm:col-end-12 md:col-start-1 md:col-end-13 md:py-20 md:pl-4 2xl:col-start-1 2xl:col-end-13 2xl:gap-x-20">
      <Image
        src={heroImage}
        alt="Dashboard image"
        className="col-span-full col-start-2 row-start-4 sm:translate-x-20 md:col-span-full md:col-start-9 md:row-span-full md:translate-x-0 md:self-start md:justify-self-start xl:col-start-7 xl:justify-self-end"
      />
      <article className="col-start-1 col-end-13 mb-10 grid grid-cols-12 self-start md:col-end-9 md:pb-2 xl:col-end-7 xl:pb-20">
        <Heading className="col-span-full col-start-1 mb-6 text-center md:col-end-11 md:text-start md:text-4xl lg:col-span-full xl:text-6xl">
          <h1 className="-tracking-[0.89] text-main-blue lg:leading-[74px]">
            Bringing companies and customers together, anywhere
          </h1>
        </Heading>
        <p className="col-span-full col-start-1 mb-16 self-start text-lg leading-7 md:col-end-10">
          An awesome & powefull tools for your business, increase business
          revenue with enterprise-grade links built to acquire and engage
          cutomers.
        </p>
        <Form />
        <p className="col-span-full col-start-1 pl-4 text-sm text-main-grey md:col-end-6 lg:col-end-7">
          Full access. No credit card required.
        </p>
      </article>
      <div className="col-start-1 col-end-12 grid grid-cols-subgrid">
        <Partners>Trusted by 1,000+ customers</Partners>
      </div>
    </section>
  );
}

export default Hero;
