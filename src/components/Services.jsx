import React from "react";
import Accordion from "./Accordion";
import Retargeting from "./Retargeting";

const Services = () => {
  return (
    <div className="w-full bg-[#344054] px-8 sm:px-16 md:px-28 lg:px-48 xl:px-60 py-[60px] font-semibold">
      <Accordion
        title="Retargeting"
        answer={<Retargeting />}
      />
    </div>
  );
};

export default Services;
