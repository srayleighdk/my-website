"use client";
import SidebarItem from "./SidebarItem";

import {
  BsHouseFill,
  BsFillArchiveFill,
  BsFillInboxFill,
} from "react-icons/bs";

const items = [
  { label: "Dashboard", icon: BsHouseFill, href: "/dashboard" },
  { label: "Setting", icon: BsFillArchiveFill, href: "/dashboard/settings" },
  { label: "Orders", icon: BsFillInboxFill, href: "/dashboard/orders" },
  { label: "Products", icon: BsFillInboxFill, href: "dashboard/products" },
];

const Sidebar = () => {
  return (
    <div className="">
      <div className="flex flex-col items-start">
        <div className="space-y-2 lg:w-[230px]">
          {items.map((item) => (
            <SidebarItem
              key={item.label}
              label={item.label}
              icon={item.icon}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
