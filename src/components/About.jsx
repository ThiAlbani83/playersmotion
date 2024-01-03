import React from "react";
import Titles from "./Titles";

const About = () => {
  return (
    <div className="w-full bg-gray-900" id="About Us">
      <div className="w-full bg-[url('/about-banner.png')] bg-cover bg-no-repeat bg-center font-semibold flex flex-col gap-5 md:gap-7 lg:gap-10 xl:gap-14">
        <div className="flex flex-col items-start justify-center w-full h-full gap-5 bg-black/80 px-8 sm:px-16 md:px-28 lg:px-48 xl:px-80 py-5 md:py-10 lg:py-[60px]">
          <Titles title="About Us" textColor="text-slate-100" />
          <div className="flex flex-col w-full gap-5">
            <p className="text-[14px] leading-6 md:leading-8 lg:leading-10 tracking-wide md:text-base text-slate-100">
              Welcome to Players Motion, your premier partner in driving
              unparalleled quality traffic to iGaming Operators worldwide. With
              a seasoned team boasting over 20 years of collective experience in
              the industry, we are dedicated to propelling your brand to new
              heights through strategic marketing solutions.
            </p>
            <p className="text-[14px] leading-6 md:leading-8 lg:leading-10 tracking-wide md:text-base text-slate-100">
              At Players Motion, we specialize in a comprehensive range of
              services, including Retargeting, Branded PPC, Digital Influencer
              collaborations, and targeted Social Media Ads. Our expertise lies
              in crafting bespoke campaigns that not only attract but engage
              your target audience, ensuring maximum impact and conversion for
              your iGaming operations.
            </p>
            <p className="text-[14px] leading-6 md:leading-8 lg:leading-10 tracking-wide md:text-base text-slate-100">
              What sets us apart is our commitment to excellence and a deep
              understanding of the dynamic iGaming landscape. We pride ourselves
              on staying ahead of industry trends, leveraging cutting-edge
              strategies to keep your brand at the forefront of the gaming
              market.
            </p>
            <p className="text-[14px] leading-6 md:leading-8 lg:leading-10 tracking-wide md:text-base text-slate-100">
              Whether you're looking to enhance brand visibility, increase
              player acquisition, or optimize your marketing ROI, Players Motion
              is your trusted partner. Join us on a journey where innovation
              meets experience, and together, let's redefine success in the
              iGaming industry.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
