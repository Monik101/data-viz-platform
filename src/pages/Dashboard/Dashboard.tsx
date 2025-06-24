import { useState } from "react";
import Sidebar, { type SidebarItem } from "../../components/organisms/sidebar";
import {
  IconBellFilled,
  IconHomeFilled,
  IconCloudUpload,
  IconClipboardData,
  IconSettingsFilled,
  IconUserCircle,
} from "@tabler/icons-react";
import TopNav from "./components/top-nav";
import MainContainer from "./components/main-container";

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
        <TopNav />
        <MainContainer />
      </div>
    </div>
  );
};

export default Dashboard;
