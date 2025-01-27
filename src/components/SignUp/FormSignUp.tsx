import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "@radix-ui/react-toast";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ToastSuccess } from "../Toast/ToastSuccess";
import { ToastError } from "../Toast/ToastError";

interface SignUpForm {
   gmail: string;
   password: string;

}

export const FormSignUp = () => {
   const [formSignUp, setFormSignUp] = useState<SignUpForm>({
      gmail: "",
      password: "",
      
   });
   const [validation, setValidation] = useState({
      UserName: false,
      Password: false,
      wrongAccount: false,
   });
   const { toast } = useToast();
   const navigate = useNavigate();

   const validateForm = () => {
      const isGmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formSignUp.gmail);
      const isPasswordValid = formSignUp.password.length > 0;

      setValidation({
         UserName: !isGmailValid,
         Password: !isPasswordValid,
         wrongAccount: false,
      });

      return isGmailValid && isPasswordValid;
   };

   const submitForm = () => {
      if (!validateForm()) return;

      axios
         .post(
            "http://localhost:3000/user",
            { ...formSignUp ,
                role:"EMPLOYER"
            },
            { headers: { "Content-Type": "application/json" } }
         )
         .then((response) => {
            if (response.status === 201) {
               navigate("/");
               toast({
                  title: "Success",
                  description: <ToastSuccess />,
                  action: <ToastAction altText="Close">Close</ToastAction>,
               });
               clearForm();
            } else {
               setValidation({ ...validation, wrongAccount: true });
            }
         })
         .catch((e) => {
            console.error("Error:", e.response?.data || e.message);
            setValidation({ ...validation, wrongAccount: true });
         });
   };

   const clearForm = () => {
      setFormSignUp({ gmail: "", password: "" });
   };

   return (
      <form
         onSubmit={(e) => {
            e.preventDefault();
            submitForm();
         }}
         className="flex-1 pr-10 px-8 py-10"
      >
         <p className="text-2xl font-bold mb-4">Sign up</p>
         {validation.wrongAccount && <ToastError />}
         <label className="block font-medium mb-2">Email</label>
         {validation.UserName ? (
   <input
      onChange={(e) =>{
        setValidation({...validation , UserName:false})
        setFormSignUp({ ...formSignUp, gmail: e.target.value })
      }
        
      }
      value={formSignUp.gmail}
      type="text"
      className={
         "bg-gray-200 w-full px-3 py-2 mb-4 h-12 rounded-3xl border-2 border-red-500 focus:outline-none focus:ring-red-500 focus:border-red-500"
      }
      placeholder="Username"
   />
) : (
   <input
      onChange={(e) =>
         setFormSignUp({ ...formSignUp, gmail: e.target.value })
      }
      value={formSignUp.gmail}
      type="text"
      className="bg-gray-200 w-full px-3 py-2 mb-4 h-12 rounded-3xl focus:outline-none focus:ring-2 focus:ring-[#a58edc] focus:border-[#a58edc]"
      placeholder="Username"
   />
)}

         {validation.UserName && (
            <p className="text-red-500 text-sm mb-4">Please enter a valid email address.</p>
         )}

         <label className="block font-medium mb-2">Password</label>
         <input
            onChange={(e) =>
               setFormSignUp({ ...formSignUp, password: e.target.value })
            }
            value={formSignUp.password}
            type="password"
            className={`bg-gray-200 w-full px-3 py-2 mb-2 h-12 rounded-3xl focus:outline-none ${
               validation.Password
                  ? "focus:ring-red-500 focus:border-red-500"
                  : "focus:ring-[#a58edc] focus:border-[#a58edc]"
            }`}
            placeholder="Password"
         />
         {validation.Password && (
            <p className="text-red-500 text-sm mb-4">Password cannot be empty.</p>
         )}

         <button
            type="submit"
            className="bg-primary text-white px-4 py-2 hover:bg-opacity-70 w-full h-11 rounded-3xl font-semibold"
         >
            Sign Up
         </button>

         <div className="mt-4 flex items-center justify-between">
            <div>
               <input type="checkbox" id="rememberMe" />
               <label htmlFor="rememberMe" className="ml-2">
                  Remember Me
               </label>
            </div>
            <a href="#">Forgot password</a>
         </div>
      </form>
   );
};
