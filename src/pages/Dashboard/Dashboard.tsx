import { useState } from "react";
import Sidebar, { type SidebarItem } from "../../components/organisms/sidebar";
import {
  IconBellFilled,
  IconHomeFilled,
  IconCloudUpload,
  IconClipboardData,
  IconSettingsFilled,
  IconUserCircle,
  IconSearch,
} from "@tabler/icons-react";
import Tabs from "./components/tabs";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState<
    "home" | "bell" | "clipBoard" | "cloud"
  >("home");

  //have utilised tabler icons for the assignment, it had some missing filled icons, but i have used filled icons where ever i could
  const sidebar_items: SidebarItem[] = [
    {
      id: "home",
      icon: IconHomeFilled,
      type: "button",
      action: () => setSelectedItem("home"),
    },
    {
      id: "bell",
      icon: IconBellFilled,
      type: "button",
      action: () => setSelectedItem("bell"),
    },
    {
      id: "clipBoard",
      icon: IconClipboardData,
      type: "button",
      action: () => setSelectedItem("clipBoard"),
    },
    {
      id: "cloud",
      icon: IconCloudUpload,
      type: "button",
      action: () => setSelectedItem("cloud"),
    },
    {
      id: "settings",
      icon: IconSettingsFilled,
      type: "button",
      action: () => setSelectedItem("cloud"),
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden rounded-md md:flex-row w-full h-full">
      <Sidebar
        items={sidebar_items}
        selectedItemId={selectedItem}
        footerItem={{
          id: "cloud",
          icon: IconUserCircle,
          type: "button",
          action: () => setSelectedItem("cloud"),
        }}
      />
      <div className="flex flex-col flex-1">
        <div className="py-6 px-6 flex justify-between w-full">
          <Tabs />
          <div className="flex bg-[#2C2E334D] border border-[#5A5A5A] rounded-[5px] py-2 px-3 gap-2 items-center">
            <IconSearch size={20} />
            <input
              type="text"
              placeholder="Search"
              className="outline-none text-white"
            />
          </div>
        </div>
        <div className="flex-1 border-l border-t rounded-sm border-[#525252]"></div>
      </div>
    </div>
  );
};

export default Dashboard;
