import Button from "../atoms/button";

export interface TabsProps<T extends string> {
  items: {
    id: T;
    label: string;
    onClick: () => void;
  }[];
  selectedTab: T;
}

//a simple tabs component which can be reused, utilised generics for type safety
function Tabs<T extends string>({ items, selectedTab }: TabsProps<T>) {
  return (
    <div className="flex gap-0.5">
      {items.map((item, idx) => (
        <Button
          key={`${item.id}-${idx}`}
          variant={selectedTab === item.id ? "primary" : "ghost"}
          onClick={item.onClick}
        >
          {item.label}
        </Button>
      ))}
    </div>
  );
}

export default Tabs;
