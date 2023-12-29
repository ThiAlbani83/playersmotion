import React from "react";

const Hero = () => {
  return (
    <section className='bg-[url("/hero-image.png")] w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] bg-cover'>
      <div className="flex flex-col items-start justify-center w-full h-full gap-5 bg-black/80 px-8 sm:px-16 md:px-28 lg:px-48 xl:px-80 py-5 md:py-10 lg:py-[60px]">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white md:max-w-[650px] font-semibold">Elevate your game with Players Motion: </h1>
        <h1 className="text-2xl text-white">Your go to partner to success!</h1>
      </div>
    </section>
  );
};

export default Hero;
