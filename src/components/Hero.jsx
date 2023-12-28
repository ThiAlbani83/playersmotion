import React from "react";

const Hero = () => {
  return (
    <section className='bg-[url("/hero-image.png")] w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[650px] xl:h-[700px] bg-cover'>
      <div className="flex flex-col items-center justify-center w-full h-full gap-0 px-8 bg-black/80 sm:px-16 md:px-28 lg:px-48 xl:px-60">
        <h1 className="text-5xl leading-3 text-white">Title Here</h1>
        <h1 className="text-2xl leading-3 text-white">Your Subtitle Here</h1>
      </div>
    </section>
  );
};

export default Hero;
