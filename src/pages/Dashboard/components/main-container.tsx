import { IconBoltFilled, IconClockRecord } from "@tabler/icons-react";
import Button from "../../../components/atoms/button";
import BestScenerio from "./best-scenerio-sections";
import Analytics from "./analytics-section";
import { useState } from "react";
import Edit from "./EditModal/edit";

function MainContainer() {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="flex-1 border-l border-t rounded-sm border-[#525252] bg-[#161618] pt-10 px-10 overflow-auto">
      <div className="flex justify-between items-center w-full mb-10">
        <div className="flex items-center gap-3">
          <IconBoltFilled />
          {/* font is roobert but different from design! */}
          <h1 className="font-roobert text-[32px] font-bold">
            Charging Station
          </h1>
        </div>
        <div className="flex gap-3">
          <Button size="sm">
            <IconClockRecord size={18} />
          </Button>
          <Button size="sm" onClick={() => setOpen(true)}>
            Edit Variables
          </Button>
          <Button size="sm">
            <IconClockRecord size={18} />
          </Button>
        </div>
      </div>
      <BestScenerio />
      <Analytics />
      <Edit isOpen={open} onClose={() => setOpen(false)} />
    </div>
  );
}

export default MainContainer;
