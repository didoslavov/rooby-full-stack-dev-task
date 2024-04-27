import Image from "next/image";
import logo from "/public/logo.svg";
import SocialIcons from "@/components/ui/SocialIcons";

function Socials() {
  return (
    <article className="col-span-6 col-start-2 sm:col-span-4 sm:col-start-4 lg:col-span-3 lg:col-start-2 lg:row-start-1 xl:pb-[100px] xl:pr-20">
      <Image src={logo} alt="Company Logo" className="mb-[26px]" />
      <div className="mb-6 text-sm text-main-grey">
        <p className="leading-6">We built an elegant solution. </p>
        <p className="text-wrap leading-6">
          Our team created a fully integrated sales and marketing solution for
          SMBs
        </p>
      </div>
      <SocialIcons />
    </article>
  );
}

export default Socials;
