import React from "react";
import Heading from "../../ui/Heading";
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
import Logo from "./Logo";
import MainLink from "../../ui/MainLink";

function Integrations() {
  return (
    <section className="col-start-1 col-end-13 grid grid-cols-subgrid py-10 md:py-14 xl:py-[120px]">
      <Heading className="col-span-full text-center leading-[68px] -tracking-[0.67px]">
        <h2>Over 300+ integrations</h2>
      </Heading>
      <p className="col-span-full mb-[72px] text-center text-lg leading-7 text-main-grey-800">
        Expand the capabilities of <span className="font-black">Roooby</span>{" "}
        with hundreds of apps and integrations
      </p>
      <div className="col-start-2 col-end-13 mb-[72px] grid grid-cols-10 gap-2">
        <Logo src={star} className="md:col-span-1" />
        <Logo src={hubspot} className="md:col-span-2" />
        <Logo src={zoom} />
        <Logo src={meets} className="md:col-span-1" />
        <Logo src={zendesk} className="md:col-span-2" />
        <Logo src={intercom} />
        <Logo src={box} className="md:col-span-1" />
        <Logo src={slack} className="md:col-span-1" />
        <Logo src={asana} />
        <Logo src={teams} className="md:col-span-1" />
      </div>
      <div className="col-start-2 col-end-12 py-1  text-center tracking-[0.51px] sm:col-start-4 sm:col-end-11 md:text-2xl lg:col-start-5 lg:col-end-9">
        <MainLink>See all apps and extensions</MainLink>
      </div>
    </section>
  );
}

export default Integrations;
