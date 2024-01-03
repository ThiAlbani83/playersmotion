import React from "react";

const Hero = () => {
  return (
    <section className='bg-[url("/hero-banner.png")] w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] bg-cover bg-top' id="Home">
      <div className="flex flex-col items-start justify-center w-full h-full gap-5 bg-black/80 px-8 sm:px-16 md:px-28 lg:px-48 xl:px-80 py-5 md:py-10 lg:py-[60px]">
        <h1 className="text-[36px] leading-[48px] sm:text-[48px] sm:leading-[60px] md:text-[60px] md:leading-[80px] lg:text-[72px] lg:leading-[90px] text-white md:max-w-[650px] font-semibold">Elevate your game with Players Motion: </h1>
        <h1 className="text-2xl text-white">Your go to partner to success!</h1>
      </div>
    </section>
  );
};

export default Hero;
