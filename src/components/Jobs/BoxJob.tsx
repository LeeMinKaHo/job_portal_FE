import { CiHeart } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { LuMapPin } from "react-icons/lu";
import { CiClock2 } from "react-icons/ci";
export const BoxJob = () => {
   return (
      <div className="bg-white border-2 border-[#e7e7e8] p-2 rounded-lg hover:border-highlight">
         <div className="flex gap-1 justify-between">
            <h2 className="text-[16px] font-medium truncate whitespace-nowrap overflow-hidden text-ellipsis">
               Chuyên gia tư 
            </h2>
            <CiHeart color="#2c95ff" className="text-2xl flex-shrink-0"></CiHeart>
         </div>
         <div className="flex gap-3 mt-1 items-center">
            <figure className="bg-white box-border rounded-sm w-[64px] min-w-[64px] h-[64px] min-h-[64px]">
               <img
                  className="rounded-sm w-full h-full object-contain my-auto relative"
                  src="https://cdn1.vieclam24h.vn/images/employer_avatar/2025/01/23/logo%20vib%20m%C6%A1%CC%81i_173762106671.jpg"
                  alt=""
               />
            </figure>

            <div>
               <p className="text-[#939295]  font-medium truncate w-64 whitespace-nowrap overflow-hidden text-ellipsis">Công ty TNHH Công nghệ xiaoming thành phố HCM</p>
               <div className="flex items-center gap-2 my-[2px]">
                  <RiMoneyDollarCircleLine className="text-xl"  color="gray" />
                  <p className="font-semibold text-highlight">10 - 12 triệu</p>
               </div>
               <div className="flex items-center gap-2">
                  <LuMapPin className="text-xl" color="gray"/>
                  <p className="font-semibold">TP.HCM</p>
               </div>
            </div>
         </div>
         <hr className="my-1"></hr>
         <p className="text-right text-[12px] flex items-center justify-end gap-2"><CiClock2 className="text-lg"></CiClock2>  Còn 15 ngày</p>
      </div>
   );
};
