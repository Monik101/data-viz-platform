import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import Tabs, { type TabsProps } from "../../../components/molecules/tabs";

type TabKey = "charging-station" | "fleet-sizing" | "parking";

function TopNav() {
  const [selectedTab, setSelectedTab] = useState<TabKey>("charging-station");

  const tabItems: TabsProps<TabKey>["items"] = [
    {
      id: "charging-station",
      label: "Charging Stations",
      onClick: () => setSelectedTab("charging-station"),
    },
    {
      id: "fleet-sizing",
      label: "Fleet Sizing",
      onClick: () => setSelectedTab("fleet-sizing"),
    },
    {
      id: "parking",
      label: "Parking",
      onClick: () => setSelectedTab("parking"),
    },
  ];

  return (
    <div className="py-6 px-6 flex-col md:flex-row gap-4 flex justify-between w-full">
      <Tabs<TabKey> items={tabItems} selectedTab={selectedTab} />
      <div className="flex bg-[#2C2E334D] border border-[#5A5A5A] rounded-[5px] py-2 px-3 gap-2 items-center">
        <IconSearch size={20} />
        <input
          type="text"
          placeholder="Search"
          className="outline-none text-white"
        />
      </div>
    </div>
  );
}

export default TopNav;
