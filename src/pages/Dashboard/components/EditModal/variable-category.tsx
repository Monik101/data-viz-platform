import { IconCheck, IconPlus, IconSparkles } from "@tabler/icons-react";
import { useState } from "react";
import { cn } from "../../../../utils";

//we can upadate selected item in storage instead of state

const Pill = ({
  text,
  isSelected,
  onClick,
  handleItemHoverStart,
  handleItemHoverEnd,
}: {
  text: string;
  isSelected: boolean;
  onClick: () => void;
  handleItemHoverStart: (item: string) => void;
  handleItemHoverEnd: () => void;
}) => {
  return (
    <div
      className={cn(
        "bg-[#5959594D] border-[0.5px] border-[#EEEEEE] text-[#D5D5D5] flex justify-between items-center gap-5 px-2.5 py-[5px] rounded-[20px]",
        {
          "bg-[#CCFF001A] border-[#C9FF3B] text-[#C8E972FD]": isSelected,
        }
      )}
      onClick={onClick}
      onMouseEnter={() => handleItemHoverStart(text)}
      onMouseLeave={handleItemHoverEnd}
    >
      <p className="">{text}</p>
      <div className="flex items-center">
        <IconSparkles size={14} />
        {isSelected ? <IconCheck size={14} /> : <IconPlus size={14} />}
      </div>
    </div>
  );
};

function VariableCategory({
  heading,
  items,
  handleItemHoverStart,
  handleItemHoverEnd,
}: {
  heading: string;
  items: string[];
  handleItemHoverStart: (item: string) => void;
  handleItemHoverEnd: () => void;
}) {
  const [selectedItem, setSelectedItems] = useState<string[]>([]);
  return (
    <div>
      <p className="text-[15px] text-[#D5D5D5 mb-5">{heading}</p>
      <div className="flex flex-wrap gap-5">
        {items.map((text, idx) => (
          <Pill
            key={`${text}-${idx}`}
            text={text}
            isSelected={selectedItem.includes(text)}
            onClick={() =>
              setSelectedItems((prev) =>
                prev.includes(text)
                  ? prev.filter((item) => item != text)
                  : prev.length > 2
                  ? prev
                  : [...prev, text]
              )
            }
            handleItemHoverStart={handleItemHoverStart}
            handleItemHoverEnd={handleItemHoverEnd}
          />
        ))}
      </div>
    </div>
  );
}

export default VariableCategory;
