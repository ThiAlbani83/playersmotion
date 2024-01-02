import React from "react";
import Titles from "./Titles";

const SocialProof = () => {
  return (
    <div id="partners" className="w-full bg-slate-100 px-8 sm:px-16 md:px-28 lg:px-48 xl:px-80 py-5 md:py-10 lg:py-[60px] font-semibold flex flex-col gap-5 md:gap-7 lg:gap-10 xl:gap-14">
      <Titles title='Our Partners' textColor='text-gray-900'/>
      <div className="flex flex-wrap items-start justify-center w-full gap-5 sm:gap-10 md:gap-16 lg:gap-24">
        <img src="/1.png" alt="bodog-logo" className="w-40" />
        <img src="/2.png" alt="bovada-logo" className="w-40" />
        <img src="/3.png" alt="bitdreams-logo" className="w-40" />
        <img src="/4.png" alt="slots-logo" className="w-48" />
        <img src="/5.png" alt="saga-logo" className="w-48" />
      </div>
    </div>
  );
};

export default SocialProof;
