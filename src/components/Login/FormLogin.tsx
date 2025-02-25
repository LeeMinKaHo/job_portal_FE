import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner"
import { ToastError } from "../Toast/ToastError";
import { useDispatch } from "react-redux";
import { login } from "@/features/login/loginSlice";

interface LoginForm {
   gmail: string;
   password: string;
}

export const FormLogin = () => {
   const [formLogin, setFormLogin] = useState<LoginForm>({
      gmail: "",
      password: "",
   });
   const [wrongAccount, setWrongAccount] = useState(false);
  
   let navigate = useNavigate();
   const dispatch = useDispatch();
   function submitForm() {
      axios
         .post(
            "http://localhost:3000/auth/signIn",
            {
               ...formLogin,
            },
            {
               headers: {
                  "Content-Type": "application/json",
               },
            }
         )
         .then((response) => {
            console.log(response);
            if (response.status === 200) {
               const { user } = response.data;
               if (wrongAccount == true) setWrongAccount(false);
               if( user.role == "ADMIN")
               {
                  navigate("/admin")
               }
               else{
                  navigate("/")
               }
               toast.success("Đăng nhập thành công!", {
                  duration: 3000,
                  style: {
                     background: "#4CAF50", // Màu xanh lá
                     color: "white",
                     fontWeight: "bold",
                  },
               });
               clearForm();
               dispatch(login());
            } else {
               setWrongAccount(true);
            }
         })
         .catch((e) => {
            console.error("Error:", e.response?.data || e.message);
            setWrongAccount(true);
         });
   }
   function clearForm() {
      setFormLogin({
         gmail: "",
         password: "",
      });
   }

   const moveToNextInputFieldOnEnter = (event: KeyboardEvent) => {
      console.log("Đã chạy");
      if (event.code === "Enter") {
         const currentInput = event.target as HTMLInputElement;

         if (currentInput.nodeName != "INPUT") return;

         const form = currentInput.form;

         if (!form) return;

         const formInputs = Array.from(form).filter(
            (element) => element.nodeName === "INPUT"
         ) as HTMLInputElement[];

         const nextInputIndex = formInputs.indexOf(currentInput) + 1;
         if (nextInputIndex > formInputs.length) return;

         const nextInput = formInputs[nextInputIndex];

         nextInput.focus();
         event.preventDefault();
      }
   };
   useEffect(() => {
      document.addEventListener("keydown", moveToNextInputFieldOnEnter);

      return () => {
         document.removeEventListener("keydown", moveToNextInputFieldOnEnter);
      };
   }, []);
   return (
      <div className="flex-1 pr-10  px-8 py-10">
         <p className="text-2xl font-bold mb-4">Sign In</p>
         <form action="">
            {wrongAccount && <ToastError></ToastError>}
            <label className="block font-medium mb-2">Username</label>
            <input
               
               autoFocus
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
              
               type="button"
               onClick={() => {
                  submitForm();
               }}
               className="bg-primary text-white px-4 py-2  hover:bg-opacity-70 w-full h-11 rounded-3xl font-semibold"
            >
               Sign In
            </button>
         </form>
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
