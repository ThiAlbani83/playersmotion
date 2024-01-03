import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/react-splide/css";
import Titles from "./Titles";
import image1 from "../assets/1.png";
import image2 from "../assets/2.png";
import image3 from "../assets/3.png";
import image4 from "../assets/4.png";
import image5 from "../assets/5.png";

const SocialProof = () => {
  const galeryImages = [image1, image2, image3, image4, image5];
  new Splide(".splide").componentDidMount({ AutoScroll });

  return (
    <div
      id="Partners"
      className="w-full bg-slate-100 px-8 sm:px-16 md:px-28 lg:px-48 xl:px-80 py-5 md:py-10 lg:py-[60px] font-semibold flex flex-col gap-5 md:gap-7 lg:gap-10 xl:gap-14"
    >
      <Titles title="Some of Our Partners" textColor="text-gray-900" />
      <div className="flex flex-wrap items-start justify-center w-full gap-5 sm:gap-10 md:gap-16 lg:gap-24">
        <Splide
          options={{
            perMove: 1,
            perPage: 3,
            snap: true,
            pagination: true,
            breakpoints: {
              640: {
                perPage: 1,
              },
              768: {
                perPage: 2,
              },
              1024: {
                perPage: 3,
              },
            },
            padding: 30,
            arrows: true,
            drag: "true",
            gap: "5rem",
            mediaQuery: "max",
            width: "100%",
            type: "loop",
          }}
        >
          {galeryImages.map((item, index) => (
            <SplideSlide key={index}>
              <img src={item} alt={`partner ${index}`} className=""/>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default SocialProof;
