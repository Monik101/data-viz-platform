import { useState } from "react";
import Button from "../../../components/atoms/buttons";

function Tabs() {
  const [selectedTab, setSelectedTab] = useState<
    "charging-station" | "fleet-sizing" | "parking"
  >("charging-station");
  return (
    <div className="flex gap-0.5">
      <Button
        variant={selectedTab === "charging-station" ? "primary" : "ghost"}
        onClick={() => setSelectedTab("charging-station")}
      >
        Charging Stations
      </Button>
      <Button
        variant={selectedTab === "fleet-sizing" ? "primary" : "ghost"}
        onClick={() => setSelectedTab("fleet-sizing")}
      >
        Fleet Sizing
      </Button>
      <Button
        variant={selectedTab === "parking" ? "primary" : "ghost"}
        onClick={() => setSelectedTab("parking")}
      >
        Parking
      </Button>
    </div>
  );
}

export default Tabs;
