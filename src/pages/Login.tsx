import { NavLink } from "react-router";
import { FormLogin } from "../components/Login/FormLogin"

export const Login = () => {
   return (
      <div className="bg-[#f8f9fd] min-h-screen flex items-center justify-center">
         <div className="flex  justify-between w-[1140px] bg-white rounded shadow-lg">
           <FormLogin></FormLogin>
            <div className="flex-1 bg-[linear-gradient(45deg,_#451da0,_#d153f7)] flex gap-2 flex-col justify-center items-center">
               <p className="text-white font-bold text-3xl">Welcom to login</p>
               <p className="text-white">Don't have a account</p>
               <NavLink to="/sign-up"className="text-white border-2 rounded-2xl py-3 px-6">
               Sign Up
               </NavLink>
               
            </div>
         </div>
      </div>
   );
};
