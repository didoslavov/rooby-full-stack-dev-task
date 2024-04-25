import React from "react";
import Heading from "../ui/Heading";
import star from "/public/integrations/star.svg";
import hubspot from "/public/integrations/hubspot.svg";
import zoom from "/public/integrations/zoom.svg";
import meets from "/public/integrations/meets.svg";
import zendesk from "/public/integrations/zendesk.svg";
import intercom from "/public/integrations/intercom.svg";
import box from "/public/integrations/box.svg";
import slack from "/public/integrations/slack.svg";
import asana from "/public/integrations/asana.svg";
import teams from "/public/integrations/teams.svg";
import arrow from "/public/integrations/arrow.svg";
import Image from "next/image";
import Logo from "./Logo";
import Link from "next/link";

function Integrations() {
  return (
    <section className="col-start-1 col-end-13 grid grid-cols-subgrid py-10 md:py-14 xl:py-[120px]">
      <Heading className="col-span-full text-center text-5xl leading-[68px] -tracking-[0.67px]">
        <h2>Over 300+ integrations</h2>
      </Heading>
      <p className="col-span-full mb-[72px] text-center text-lg leading-7 text-main-grey-800">
        Expand the capabilities of <span className="font-black">Roooby</span>{" "}
        with hundreds of apps and integrations
      </p>
      <div className="col-start-2 col-end-13 mb-[72px] grid grid-cols-10 gap-2">
        <Logo src={star} className="col-span-3 md:col-span-1" />
        <Logo src={hubspot} className="col-span-3 md:col-span-2" />
        <Logo src={zoom} className="col-span-3 md:col-span-3" />
        <Logo src={meets} className="col-span-3 md:col-span-1" />
        <Logo src={zendesk} className="col-span-3 md:col-span-2" />
        <Logo src={intercom} className="col-span-3 md:col-span-3" />
        <Logo src={box} className="col-span-3 md:col-span-1" />
        <Logo src={slack} className="col-span-3 md:col-span-1" />
        <Logo src={asana} className="col-span-3 md:col-span-3" />
        <Logo src={teams} className="col-span-3 md:col-span-1" />
      </div>
      <Link
        href="#"
        className="relative col-start-2 col-end-12 flex items-center justify-center py-1  text-center tracking-[0.51px] transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:h-0 before:w-full before:rounded-[4px] before:bg-main-blue-900 before:opacity-20 before:transition-all before:duration-500 hover:before:h-full sm:col-start-4 sm:col-end-11 md:text-2xl lg:col-start-5 lg:col-end-9"
      >
        See all apps and extensions
        <Image
          src={arrow}
          alt="Arrow pointing right"
          className="ml-2 inline-block stroke-main-blue"
        />
      </Link>
    </section>
  );
}

export default Integrations;
