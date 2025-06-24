import { IconChevronDown, IconDots, IconSparkles } from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "../../../utils";

const Highlights = ({ description }: { description: string }) => {
  return (
    <div className="flex justify-between w-full py-[15px] px-6 border-[0.5px] border-[#C8E972] rounded-md font-medium bg-[#CCFF0005]">
      {description}
      <IconDots />
    </div>
  );
};

function BestScenerio() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="text-[#DCFF7FFD] space-y-6">
      <div className="flex w-full justify-between items-center">
        <div className="flex gap-2.5 items-center">
          <IconSparkles size={18} />
          <h1 className="text-2xl font-[600]">Best Scenario Results</h1>
        </div>
        <div
          className="border border-[#C8E972] rounded-4xl px-2.5 py-[5px] transition-transform duration-300 cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <IconChevronDown
            className={cn("transition-transform duration-300", {
              "rotate-180": isOpen,
            })}
          />
        </div>
      </div>
      <div
        className={cn(
          "transition-all duration-500 ease-in-out overflow-hidden",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex w-full flex-col gap-4">
          <Highlights description="The best found configuration based on profit is characterized by 11 zones (max) with charging stations and 48 total number of poles." />
          <Highlights description="The best found configuration based on satisfied demand is characterized by 11 zones (max) with charging stations and 48 total number of poles." />
        </div>
      </div>
    </div>
  );
}

export default BestScenerio;
