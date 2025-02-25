import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { Sidebar_Item } from "./Sidebar_Item";
import { IconType } from "react-icons";

export interface SideBarItem {
   icon: IconType;
   name: string;
   isActive?: boolean;
}

export interface SidebarContainerProps {
   name: string;
   childrens?: SideBarItem[];
}

export const Sidabar_Container = ({ name, childrens }: SidebarContainerProps) => {
   const [open, setOpen] = useState(true);

   return (
      <div>
         {/* Header Sidebar */}
         <div 
            className="flex gap-1 items-center h-10 cursor-pointer select-none"
            onClick={() => setOpen(!open)}
         >
            {/* Icon xoay khi open == false */}
            <BsChevronDown
               className={`w-5 h-4 transition-transform duration-300 ${
                  open ? "rotate-0" : "-rotate-90"
               }`}
            />
            <p className="font-bold text-[13px]">{name}</p>
         </div>

         {/* Danh sách con ẩn/hiện khi open == true */}
         <div className={`ml-4 transition-all duration-300 ${open ? "block" : "hidden"}`}>
            {childrens?.map((item, index) => (
               <Sidebar_Item key={index} {...item} />
            ))}
         </div>
      </div>
   );
};

