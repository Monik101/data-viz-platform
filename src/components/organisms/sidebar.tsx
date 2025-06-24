import { IconMenu2, type Icon, type IconProps } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { cn } from "../../utils";

type SidebarBaseItemType = {
  id: string;
  icon: React.ForwardRefExoticComponent<IconProps & React.RefAttributes<Icon>>;
  text?: string;
};

type SidebarButtonItemType = {
  type: "button";
  action: () => void;
};

type SidebarLinkItemType = {
  type: "link";
  route: string;
};

export type SidebarItem = SidebarBaseItemType &
  (SidebarButtonItemType | SidebarLinkItemType);

interface SidebarProps {
  selectedItemId?: string;
  items: SidebarItem[];
  footerItem?: SidebarItem;
}

//resuable sidebar with items and selected item as props
function Sidebar({ items, footerItem, selectedItemId }: SidebarProps) {
  return (
    <div className="pt-8 px-7 flex flex-col gap-10 items-center h-full">
      <div className="group hover:bg-[#525252] p-2 rounded-lg">
        <IconMenu2 />
      </div>
      {items.map((item, idx) => (
        <SidebarItem
          key={`${item.type}-${idx}`}
          item={item}
          isSelected={item.id === selectedItemId}
        />
      ))}
      {footerItem && (
        <div className="mt-auto mb-10">
          <SidebarItem item={footerItem} isSelected={false} />
        </div>
      )}
    </div>
  );
}

const SidebarItem = ({
  item,
  isSelected,
}: {
  item: SidebarItem;
  isSelected: boolean;
}) => {
  const { icon: Icon, text } = item;

  //slightly modified hover state of items and selected state as per design
  if (item.type === "button") {
    return (
      <div
        onClick={item.action}
        className={cn(
          "group hover:bg-[#242424] p-2 rounded-lg border-[0.5px] border-[#0e0d0d] transition-all duration-200 ease-in-out",
          {
            "bg-[#242424] border-[0.5px] border-[#525252]": isSelected,
          }
        )}
      >
        <Icon
          size={24}
          className={cn(
            "text-[#858882] group-hover:text-white transition-all duration-200 ease-in-out",
            {
              "text-white": isSelected,
            }
          )}
        />
        {text && <span>{text}</span>}
      </div>
    );
  }

  //in-case of link type button such as profile page (if use-case allows)
  if (item.type === "link") {
    return (
      <Link
        to={item.route}
        className={cn(
          "group hover:bg-[#242424] p-2 rounded-lg border-[0.5px] border-[#0e0d0d] transition-all duration-200 ease-in-out",
          {
            "bg-[#242424] border-[0.5px] border-[#525252]": isSelected,
          }
        )}
      >
        <Icon
          size={24}
          className={cn(
            "text-[#858882] group-hover:text-white transition-all duration-200 ease-in-out",
            {
              "text-white": isSelected,
            }
          )}
        />
        {text && <span>{text}</span>}
      </Link>
    );
  }

  return null;
};

export default Sidebar;
