import { FaCaretDown } from "react-icons/fa6";
import logo from "../assets/logo-tet-2025.webp";
import { GrNotification } from "react-icons/gr";
import default_avatar from "../assets/default_avatar.svg";
export const Header = () => {
   return (
      <div className="bg-primary ">
         <div className="container flex justify-between items-center">
            <div className="flex  items-center">
               <img src={logo}></img>
               <a className="py-2 px-7 text-white font-bold text-sm">
                  Cơ hội việc làm
               </a>
            </div>
            <div className="flex  items-center">
               <a className="p-3 text-white">Miền Bắc</a>
               <GrNotification color="white" className=" px-4 box-content" />
               <div className="flex  items-center p-2">
                  <img
                     src={default_avatar}
                     className="w-8 h-8 box-content"
                  ></img>
                  <b className="text-white p-1 ">Minh</b>
                  <FaCaretDown color="white" />
               </div>
            </div>
         </div>
      </div>
   );
};
