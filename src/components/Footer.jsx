import React from "react";

const Footer = () => {
  return (
    <div className="flex sticky top-0 z-50 items-center justify-between w-full px-8 sm:px-16 md:px-28 lg:px-48 xl:px-60 bg-[#FCFCFD]">
      <div className="flex flex-col items-center w-full py-5">
        <img src="/playersmotion-logo.png" alt="logo" className="h-20 w-36" />
        <span className="text-gray-800 text-[10px] px-2">© 2023 by Players Motion</span>
      </div>
    </div>
  );
};

export default Footer;
