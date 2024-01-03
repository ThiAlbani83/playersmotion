import React from "react";

const Titles = ({ title, textColor }) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-5 h-1 bg-red-400 rounded-sm md:w-6 lg:w-7 md:h-2 lg:h-3" />
      <h1 className={`text-3xl font-semibold ${textColor} sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl max-w-64`}>
        {title}
      </h1>
    </div>
  );
};

export default Titles;
