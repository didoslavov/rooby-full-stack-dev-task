import Offers from "@/components/layout/Pricing/Offers/Offers";
import Heading from "@/components/ui/Heading";

export default function Pricing() {
  return (
    <div className="col-start-1 col-end-13 grid max-w-[1440px] grid-cols-12 gap-x-[30px] overflow-hidden bg-main-grey-100 lg:pb-[120px] lg:pt-[72px]">
      <div className="col-span-full row-start-1 grid grid-cols-subgrid lg:mb-[100px]">
        <Heading className="lg:col-start-2 lg:col-end-8 lg:text-[64px]">
          <h1 className="lg:leading-[74px] lg:-tracking-[0.89px]">
            Choose the right plan{" "}
            <span className="text-main-grey-700">for your business</span>
          </h1>
        </Heading>
        <p className="row-start-1 self-end text-lg leading-7 -tracking-[0.35px] lg:col-start-9 lg:col-end-12">
          Built with love for growing businesses. Check out the Rooody CRM
          pricing grid below. Switch between plans at any time.
        </p>
      </div>
      <Offers />
    </div>
  );
}
