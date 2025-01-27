import { HomeBanner } from "@/components/Banner/HomeBanner";
import { HotCompany } from "@/components/Company/HotCompany";
import { HotJob } from "@/components/HotJob/HotJob";
import { BoxJob } from "@/components/Jobs/BoxJob";
import { ListJob } from "@/components/Jobs/ListJob";
import { SearchBox } from "@/components/SearchBar/SearchBox";
import React from "react";

export const Home = () => {
   return (
      <>
         <HomeBanner></HomeBanner>
         <SearchBox></SearchBox>
         <HotJob></HotJob>
         <HotCompany></HotCompany>
      </>
   );
};
