import React from "react";
import { IconType } from "react-icons";

export interface SideBarItem {
   icon: IconType;
   name: string;
   isActive?: boolean;
}

export const Sidebar_Item = ({ icon: Icon, name, isActive = false }: SideBarItem) => {
   return (
      <div className={`sidebar-item ${isActive ? "bg-gray-200" : ""} flex items-center gap-2 p-2 rounded cursor-pointer`}>
         <Icon className="text-primary w-4 h-4" />
         <p className="text-sm">{name}</p>
      </div>
   );
};
