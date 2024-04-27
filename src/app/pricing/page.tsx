import Offers from "@/components/layout/Pricing/Offers";
import Heading from "@/components/ui/Heading";

export default function Pricing() {
  return (
    <div className="col-start-1 col-end-13 grid max-w-[1440px] grid-cols-12 gap-x-[30px] overflow-hidden bg-main-grey-100 pt-8 lg:pt-[72px]">
      <div className="col-span-full row-start-1 mb-7 grid grid-cols-subgrid gap-y-8 lg:mb-[100px]">
        <Heading className="col-start-2 col-end-13 lg:col-end-8 lg:text-[64px]">
          <h1 className="lg:leading-[74px] lg:-tracking-[0.89px]">
            Choose the right plan{" "}
            <span className="text-main-grey-700">for your business</span>
          </h1>
        </Heading>
        <p className="col-start-2 col-end-12 self-end lg:col-start-9 lg:col-end-12 lg:row-start-1 lg:text-lg lg:leading-7 lg:-tracking-[0.35px]">
          Built with love for growing businesses. Check out the Rooody CRM
          pricing grid below. Switch between plans at any time.
        </p>
      </div>
      <Offers />
    </div>
  );
}
