import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import axios from "axios";
import { useState } from "react";

import { useNavigate } from "react-router";

import { ToastSuccess } from "../Toast/ToastSuccess";
import { ToastError } from "../Toast/ToastError";

interface LoginForm {
   gmail: string;
   password: string;
 }

export const FormLogin = () => {
   const [formLogin, setFormLogin] = useState<LoginForm>({
      gmail: "",
      password: "",
   });
   const [wrongAccount,setWrongAccount] = useState(false)
   const { toast } = useToast();
   let navigate = useNavigate();
   function submitForm() {
      axios
         .post(
            "http://localhost:3000/auth",
            {
               ...formLogin
            },
            {
               headers: {
                  "Content-Type": "application/json",
               },
            }
         )
         .then((response ) => {
            console.log(response)
            if (response.status === 200) {
               if(wrongAccount == true)
                  setWrongAccount(false)
               navigate("/");
               toast({
                  // fix sau
                  title: "Thông báo",
                  description: <ToastSuccess></ToastSuccess>,
                  action: (
                     <ToastAction altText="Đóng thông báo">Đóng</ToastAction>
                  ),
               });
               clearForm();
            } else {
               console.log("Vô đây rồi")
               setWrongAccount(true)
            }
         })
         .catch((e) => {
            console.error("Error:", e.response?.data || e.message)
            setWrongAccount(true)
         });
   }
   function clearForm() {
      setFormLogin({
         gmail: "",
         password: "",
      });
   }
   return (
      <div className="flex-1 pr-10  px-8 py-10">
         <p className="text-2xl font-bold mb-4">Sign In</p>
         {wrongAccount && <ToastError></ToastError>}  
         <label className="block font-medium mb-2">Username</label>
         <input
            onChange={(e) =>
               setFormLogin({ ...formLogin, gmail: e.target.value })
            }
            value={formLogin.gmail}
            type="text"
            className="bg-gray-200  w-full px-3 py-2 mb-4 h-12 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#a58edc] focus:border-[#a58edc]"
            placeholder="Username"
         />
         <label className="block font-medium mb-2">Password</label>
         <input
            onChange={(e) =>
               setFormLogin({ ...formLogin, password: e.target.value })
            }
            value={formLogin.password}
            type="password"
            className="bg-gray-200 w-full py-2  px-3 mb-4 h-12 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#a58edc] focus:border-[#a58edc]"
            placeholder="Password"
         />
         <button
            onClick={() => {
               submitForm();
             
            }}
            className="bg-primary text-white px-4 py-2  hover:bg-opacity-70 w-full h-11 rounded-3xl font-semibold"
         >
            Sign In
         </button>
         <div className="mt-4 flex items-center justify-between">
            <div>
               <input type="checkbox" id="rememberMe" className="" />
               <label htmlFor="rememberMe" className="ml-2">
                  Remember Me
               </label>
            </div>
            <a>Forgot password</a>
         </div>
      </div>
   );
};
