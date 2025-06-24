import { create } from "zustand";

export type VariableItem = {
  id: string;
  name: string;
  description: string;
};

export type VariableGroup = {
  id: string;
  name: string;
  items: VariableItem[];
  active: boolean;
};

export type MoneyDataPoint = {
  month: string;
  value: number;
  description?: string;
};

type DashboardState = {
  mainVariables: {
    [key: string]: VariableGroup;
  };
  selectedItems: Record<string, string[]>;
  moneyData: MoneyDataPoint[];
  hoveredDataPoint: MoneyDataPoint | null;

  toggleGroup: (groupId: string) => void;
  toggleItem: (groupId: string, itemId: string) => void;
  setHoveredDataPoint: (point: MoneyDataPoint | null) => void;
};

export const useDashboardStore = create<DashboardState>((set, get) => ({
  mainVariables: {
    variable1: {
      id: "variable1",
      name: "Main Variables 1",
      active: true,
      items: [
        {
          id: "carbon1",
          name: "Carbon 1",
          description:
            "Carbon emissions primary metric Carbon emissions primary metric Carbon emissions primary metric Carbon emissions primary metric",
        },
        {
          id: "co2_distribution",
          name: "CO2 Distribution",
          description: "Distribution of CO2 sources",
        },
        {
          id: "fleet_sizing",
          name: "Fleet Sizing",
          description: "Optimal vehicle fleet sizing",
        },
      ],
    },
    variable2: {
      id: "variable2",
      name: "Main Variables 2",
      active: false,
      items: [
        {
          id: "parking_rate",
          name: "Parking Rate",
          description: "Rate charged for parking in zones",
        },
        {
          id: "border_rate",
          name: "Border Rate",
          description: "Fee near city borders",
        },
        {
          id: "request_rate",
          name: "Request Rate",
          description: "Ride request rate per hour",
        },
      ],
    },
  },

  selectedItems: {
    variable1: ["carbon1"],
    variable2: [],
  },

  moneyData: [
    { month: "Jan", value: 12000 },
    { month: "Feb", value: 14500 },
    { month: "Mar", value: 11000 },
    { month: "Apr", value: 16500 },
    { month: "May", value: 9800 },
    { month: "Jun", value: 17500 },
  ],

  hoveredDataPoint: null,

  toggleGroup: (groupId) => {
    const current = get();
    const updatedGroup = {
      ...current.mainVariables[groupId],
      active: !current.mainVariables[groupId].active,
    };
    set({
      mainVariables: {
        ...current.mainVariables,
        [groupId]: updatedGroup,
      },
    });
  },

  toggleItem: (groupId, itemId) => {
    const current = get();
    const currentSelected = current.selectedItems[groupId] || [];
    const newSelected = currentSelected.includes(itemId)
      ? currentSelected.filter((id) => id !== itemId)
      : [...currentSelected, itemId];
    set({
      selectedItems: {
        ...current.selectedItems,
        [groupId]: newSelected,
      },
    });
  },

  setHoveredDataPoint: (point) => set({ hoveredDataPoint: point }),
}));
