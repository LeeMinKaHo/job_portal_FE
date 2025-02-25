import React from "react";
import { SearchBox } from "./SearchBox";
import { OppucationBox } from "./OppucationBox";
import { FieldBox } from "./FieldBox";
import { PositionBox } from "./PositionBox";
import { ProviceBox } from "./ProviceBox";
import { CiSearch } from "react-icons/ci";
import { NavLink } from "react-router";

export const SearchBar = () => {
   return (
      <div className="relative flex rounded-md overflow-visible shadow-custom p-2 bg-white">
         <div className="relative flex-1 grid grid-cols-3  ">
            <PositionBox></PositionBox>
            <OppucationBox></OppucationBox>
            <ProviceBox></ProviceBox>
         </div>
         <NavLink
            to="/jobs"
            className="w-[180px] flex items-center justify-center  gap-1 bg-primary text-white font-bold rounded-sm"
         >
            <CiSearch className="text-xl "></CiSearch>
            Find Job
         </NavLink>
      </div>
   );
};
