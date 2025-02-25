import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import React from "react";
import { FaChevronUp } from "react-icons/fa6";
import { PiUploadLight } from "react-icons/pi";
export const PersonalInformationBlock = () => {
   return (
      <div className="mx-7 mt-4 p-[18px] bg-white">
         <p className="text-xl font-semibold">Personal information</p>
         <hr className="mb-6 mt-2"></hr>
         <form action="">
            <label htmlFor="" className="font-semibold">
               Avatar
            </label>

            <div className="flex gap-5 items-center">
               <Avatar className="w-[100px] h-[100px]">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
               </Avatar>

               <div>
                  <label className="flex items-center gap-2 px-4 py-2 max-w-[150px] text-primary bg-[#f8f6fb] rounded-lg shadow-md cursor-pointer transition">
                     <input type="file" className="hidden" />
                     <PiUploadLight />
                     Chọn tệp
                  </label>
                  <p>
                     Định dạng .JPG, .JPEG, .PNG dung lượng thấp hơn 300 KB with
                     the minimum size 300x300 px
                  </p>
               </div>
            </div>
            <hr className="mb-6 mt-4"></hr>
            {/* Row 1 */}
            <div className="flex gap-7 items-center">
               <div className="flex-1 flex flex-col">
                  <label htmlFor="" className="font-semibold mb-3">
                     Full name
                  </label>
                  <input
                     type="text"
                     name=""
                     id=""
                     className="block w-full h-10 px-4 font-semibold  border rounded-sm"
                  />
               </div>
               <div className="flex-1 flex flex-col">
                  <label htmlFor="" className="font-semibold mb-3">
                     Date of birth
                  </label>
                  <input
                     type="date"
                     name=""
                     id=""
                     className="block w-full h-10 px-4 font-semibold  border rounded-sm"
                  />
               </div>
            </div>
            {/* Row 2 */}
            <div className="mt-3 flex gap-7 items-center">
               <div className="flex-1 flex flex-col">
                  <label htmlFor="" className="font-semibold mb-3">
                     Province/City
                  </label>
                  <select
                     name=""
                     id=""
                     className="h-10 px-4 font-semibold  border rounded-sm"
                  >
                     <option value="">Hồ Chí Minh City</option>
                  </select>
               </div>
               <div className="flex-1 flex flex-col">
                  <label htmlFor="" className="font-semibold mb-3">
                     Address
                  </label>
                  <input
                     type="text"
                     name=""
                     id=""
                     className="block w-full h-10 px-4 font-semibold  border rounded-sm"
                  />
               </div>
            </div>
            {/* Row 3 */}
            <div className="mt-3 flex gap-7 items-center">
               <div className="flex-1 flex flex-col">
                  <label htmlFor="" className="font-semibold mb-3">Gender</label>
                  <div className="flex items-center gap-4">
                     <label className="flex items-center gap-2 cursor-pointer">
                        <input
                           type="radio"
                           name="Gender"
                           value="Female"
                           className="hidden peer"
                        />
                        <div className="w-5 h-5 border-2 border-primary rounded-full flex items-center justify-center peer-checked:bg-primary">
                           <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 font-medium">
                           Female
                        </span>
                     </label>

                     <label className="flex items-center gap-2 cursor-pointer">
                        <input
                           type="radio"
                           name="Gender"
                           value="Male"
                           className="hidden peer"
                        />
                        <div className="w-5 h-5 border-2 border-primary rounded-full flex items-center justify-center peer-checked:bg-primary">
                           <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                        </div>
                        <span className="text-gray-700 font-medium">Male</span>
                     </label>
                  </div>
               </div>
               <div className="flex-1 flex flex-col">
                 <label htmlFor="" className="font-semibold mb-3">Phone</label>
                 <input type="tel" name="" id="" className="block w-full h-10 px-4 font-semibold  border rounded-sm"/>
               </div>
            </div>
           
         </form>
      </div>
   );
};
