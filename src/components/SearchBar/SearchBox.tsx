import React from "react";
import { FieldBox } from "./FieldBox";
import { ListFieldBox } from "./ListFieldBox";
import { PositionBox } from "./PositionBox";
import { MutiSelectFieldBox } from "./MutiSelectFieldBox";
import { SearchBar } from "./SearchBar";

export const SearchBox = () => {
   return (
      <div
         className=" p-4 box-border rounded-md relative z-10 top-[-20px] container bg-gradient-to-b from-gray-200/33 via-white/50 to-white"
         style={{
            boxShadow: "0px 8px 24px 0px rgba(160, 159, 198, 0.32)",
            backdropFilter: "blur(16px)",
         }}
      >
         <SearchBar></SearchBar>
         <ListFieldBox></ListFieldBox>
      </div>
   );
};
