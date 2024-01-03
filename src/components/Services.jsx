import React from "react";
import Accordion from "./Accordion";
import Retargeting from "./Retargeting";
import BrandedPPC from "./BrandedPPC";
import SocialMediaTraffic from "./SocialMediaTraffic";
import DigitalInfluencerTraffic from "./DigitalInfluencerTraffic";
import Titles from "./Titles";

const Services = () => {
  return (
    <div id="Services" className="w-full bg-gray-950 px-8 sm:px-16 md:px-28 lg:px-48 xl:px-80 py-5 md:py-10 lg:py-[60px] font-semibold flex flex-col gap-5 md:gap-7 lg:gap-10 xl:gap-14">
      <Titles title="Our Services" textColor='text-slate-100' />
      <div className="flex flex-col gap-3 text-[20px]">
        <Accordion title="Retargeting" answer={<Retargeting />} />
        <Accordion title="Banded PPC" answer={<BrandedPPC />} />
        <Accordion
          title="Social Media Traffic"
          answer={<SocialMediaTraffic />}
        />
        <Accordion
          title="Digital Influencer Traffic "
          answer={<DigitalInfluencerTraffic />}
        />
      </div>
    </div>
  );
};

export default Services;
