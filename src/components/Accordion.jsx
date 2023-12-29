import { useState } from "react";
import { CiSquarePlus } from "react-icons/ci";
import { CiSquareMinus } from "react-icons/ci";

const Accordion = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="p-4 bg-gray-200 rounded-lg ">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex items-center justify-between w-full"
      >
        <span>{title}</span>
        {accordionOpen ? (
          <CiSquareMinus className="text-[27px]" />
        ) : (
          <CiSquarePlus className="text-[27px]" />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-1000 ease-in-out text-gray-800 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 mt-2"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default Accordion;