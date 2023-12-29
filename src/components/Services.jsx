import React from "react";
import Accordion from "./Accordion";
import Retargeting from "./Retargeting";
import BrandedPPC from "./BrandedPPC";

const Services = () => {
  return (
    <div className="w-full bg-[#344054] px-8 sm:px-16 md:px-28 lg:px-48 xl:px-80 py-5 md:py-10 lg:py-[60px] font-semibold flex flex-col gap-5 md:gap-7 lg:gap-10 xl:gap-14">
      <div className="flex flex-col gap-2">
        <div className="w-5 h-1 bg-red-400 rounded-sm md:w-6 lg:w-7 md:h-2 lg:h-3" />
        <h1 className="text-[#FCFCFD] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl max-w-7 font-semibold">
          Our Services
        </h1>
      </div>
      <div className="flex flex-col gap-3">
        <Accordion title="Retargeting" answer={<Retargeting />} />
        <Accordion title="Banded PPC" answer={<BrandedPPC />} />
      </div>
    </div>
  );
};

export default Services;
