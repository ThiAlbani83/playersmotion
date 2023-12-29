import React from "react";

const SocialProof = () => {
  return (
    <div id="partners" className="w-full bg-slate-100 px-8 sm:px-16 md:px-28 lg:px-48 xl:px-80 py-5 md:py-10 lg:py-[60px] font-semibold flex flex-col gap-5 md:gap-7 lg:gap-10 xl:gap-14">
      <div className="flex flex-col gap-2">
        <div className="flex w-5 h-1 bg-red-400 rounded-sm md:w-6 lg:w-7 md:h-2 lg:h-3" />
        <h1 className="text-3xl font-semibold text-gray-900 sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl max-w-7">
          Our Partners
        </h1>
      </div>
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
