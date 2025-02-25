import { CiHeart } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LuMapPin } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
import { IJob } from "@/interface/IJob";
import { Skeleton } from "../ui/skeleton";
import { NavLink } from "react-router";
export interface BoxJobInterface {
   job?: IJob;
   isLoading: boolean;
}
export const BoxJob: React.FC<BoxJobInterface> = ({
   job,
   isLoading = false,
}) => {
   return (
      <>
         {isLoading ? (
            <div>
               {" "}
               <div className=" space-x-4 bg-white p-2  border-2 border-[#e7e7e8]">
                  <Skeleton className="h-4 w-[90%]" />
                  <div className="flex items-center mt-2 space-x-4">
                     <Skeleton className="h-12 w-12 rounded-md" />
                     <div className="space-y-2 flex-1">
                        <Skeleton className="h-4 w-[80%]" />
                        <Skeleton className="h-4 w-[200px]" />
                        <Skeleton className="h-4 w-[200px]" />
                     </div>
                  </div>
               </div>
            </div>
         ) : (
            <NavLink to={`/jobs/${job?.id}`}> <div className="bg-white border-2 border-[#e7e7e8] p-2 rounded-lg hover:border-highlight">
            <div className="flex gap-1 justify-between">
               <h2 className="text-[16px] font-medium truncate whitespace-nowrap overflow-hidden text-ellipsis">
                  {job?.title}
               </h2>
               <CiHeart
                  color="#2c95ff"
                  className="text-2xl flex-shrink-0"
               ></CiHeart>
            </div>
            <div className="flex gap-3 mt-1 items-center">
               {isLoading ? (
                  <Skeleton className="rounded-sm w-[64px] min-w-[64px] h-[64px] min-h-[64px]"></Skeleton>
               ) : (
                  <figure className="bg-white box-border rounded-sm w-[64px] min-w-[64px] h-[64px] min-h-[64px]">
                     <img
                        className="rounded-sm w-full h-full object-contain my-auto relative"
                        src={job?.company?.img_url || "/default-company-image.png"}
                        alt=""
                     />
                  </figure>
               )}
               <div className="flex-1">
                  <p className="text-[#939295]  font-medium truncate max-w-full whitespace-nowrap overflow-hidden text-ellipsis">
                     Công ty TNHH Công nghệ xiaoming thành phố HCM
                  </p>
                  <div className="flex items-center gap-2 my-[2px]">
                     <RiMoneyDollarCircleLine
                        className="text-xl"
                        color="gray"
                     />
                     <p className="font-semibold text-highlight">
                        10 - 12 triệu
                     </p>
                  </div>
                  <div className="flex items-center gap-2">
                     <LuMapPin className="text-xl" color="gray" />
                     <p className="font-semibold">TP.HCM</p>
                  </div>
               </div>
            </div>
            <hr className="my-1"></hr>
            <p className="text-right text-[12px] flex items-center justify-end gap-2">
               <CiClock2 className="text-lg"></CiClock2> Còn 15 ngày
            </p>
         </div></NavLink>
           
         )}
      </>
   );
};
