import React from "react";
import { AboutUs } from "./AboutUs";
import { Information } from "./Information";
import { Contact } from "./Contact";

export const Footer = () => {
   return (
      <div className="bg-[#39216e] text-[#cdcbd4] py-3 ">
         <div className="flex gap-24 container">
            <AboutUs></AboutUs>
            <div className="flex gap-3">
               <Information></Information>
               <Contact></Contact>
            </div>
         </div>
      </div>
   );
};
