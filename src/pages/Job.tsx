import { BoxJob } from "@/components/Jobs/BoxJob";
import { ListJob } from "@/components/Jobs/ListJob";
import { AdvanceSearch } from "@/components/SearchBar/AdvanceSearch";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { IJob } from "@/interface/IJob";
import { getAllJobs } from "@/services/services";

import React, { useEffect, useState } from "react";



export const Job = () => {
   const [jobs, setJobs] = useState<IJob[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
   useEffect(() => {}, [jobs]);
   async function fetchJobs() {
      try { 
         await new Promise(resolve => setTimeout(resolve,3000))
         setJobs((await getAllJobs().then()).data)
         setIsLoading(false)
         
      } catch (error) {
          console.error("Lỗi khi lấy danh sách công việc:", error);
      }
  }
  
  // Gọi API khi component mount
  useEffect(() => {
      fetchJobs();
  }, []);
  
   return (
      <div>
         <div className="pt-8">
            <div className=" pb-3">
               <div className="container bg-[#5c27d6] rounded-lg p-3">
                  <p className="text-white font-semibold text-xl">Jobs</p>
                  <p className="text-white font-semibold text-3xl mb-2">
                     Marketing
                  </p>
                  <SearchBar></SearchBar>
                  <AdvanceSearch></AdvanceSearch>
               </div>
            </div>
         </div>

         <div className="flex container gap-2 ">
            <div className="flex-1 flex flex-col gap-2">
               <ListJob jobs={jobs} type="col" isLoading={isLoading}></ListJob>
            </div>
            <div className="w-[27%] h-full overflow-hidden">
               <img
                  className="w-full h-full object-cover"
                  src="https://vieclam24h.vn/_next/image?url=https%3A%2F%2Fcdn1.vieclam24h.vn%2Fimages%2Fseeker-banner%2F2025%2F01%2F16%2F270x600-125%2520THA%25CC%2580NH%2520TU%25CC%259B%25CC%25A3U%25206%2520(1)_173701742759.jpg&w=1920&q=75"
                  alt=""
               />
            </div>
         </div>
      </div>
   );
};
