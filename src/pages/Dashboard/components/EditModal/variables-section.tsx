import { useEffect, useMemo, useState } from "react";
import { useDashboardStore } from "../../../../store/dashboard-store";
import VariableCategory from "./variable-category";
import { IconHelp } from "@tabler/icons-react";

function debounce(fn: (item: string) => void) {
  let timeout: ReturnType<typeof setTimeout>;

  const debounced = (item: string) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(item), 1500);
  };

  debounced.cancel = () => clearTimeout(timeout);

  return debounced;
}

function VariablesSection() {
  const { mainVariables } = useDashboardStore();
  const [contextItem, setContextItem] = useState<string | null>();

  const debouncedSetHoveredItem = debounce((item: string) => {
    setContextItem(item);
  });

  useEffect(() => {
    return () => {
      debouncedSetHoveredItem.cancel();
    };
  }, [debouncedSetHoveredItem]);

  const handleItemHoverStart = (item: string) => {
    debouncedSetHoveredItem(item);
  };

  const handleItemHoverEnd = () => {
    debouncedSetHoveredItem.cancel();
    setContextItem(null);
  };

  const matched = useMemo(() => {
    return Object.values(mainVariables)
      .flatMap((group) => group.items)
      .find((item) => item.name === contextItem);
  }, [mainVariables, contextItem]);

  return (
    <div className="bg-[#161618] border border-[#525252] pt-[30px] mt-5 rounded-[5px]">
      <div className="h-[350px] overflow-auto flex flex-col gap-6 px-[30px] pb-[30px]">
        {Object.values(mainVariables).map((group) => (
          <VariableCategory
            key={group.id}
            heading={group.name}
            items={group.items.map((item) => item.name)}
            handleItemHoverStart={handleItemHoverStart}
            handleItemHoverEnd={handleItemHoverEnd}
          />
        ))}
      </div>
      {matched && (
        <div className="w-full bg-[#222324] p-10">
          <div className="flex items-center gap-5">
            <p className="font-bold text-xl">{matched.name}</p>
            <IconHelp size={18} className="text-[#888888]" />
          </div>
          <div className="text-[#BBBBBB] mt-[25px] text-[15px]">
            {matched.description}
          </div>
        </div>
      )}
    </div>
  );
}

export default VariablesSection;
