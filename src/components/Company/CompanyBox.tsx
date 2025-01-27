import { PiSuitcaseSimple } from "react-icons/pi";

export const CompanyBox = () => {
   return (
      <div
         style={{
            boxShadow: "0px 0px 2px 0.25px #1D1B2112, 0px 1.5px 10px 0px #1D1B2114",
         }}
         className="w-full mx-auto flex flex-col pt-2 min-w-[130px] rounded-lg h-[112px] items-center"
      >
         <figure>
            <img
               src="https://vieclam24h.vn/_next/image?url=https%3A%2F%2Fcdn1.vieclam24h.vn%2Fimages%2Femployer_avatar%2F2022%2F09%2F13%2Fimages%2F166303510727.w-150.h-150.png&w=64&q=75"
               alt=""
            />
         </figure>
         <div className="flex items-center">
            <PiSuitcaseSimple />
            <p>26 vị trí đang tuyển</p>
         </div>
      </div>
   );
};

