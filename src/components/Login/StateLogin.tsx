import default_avatar from "../../assets/default_avatar.svg";
import { FaCaretDown } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/store";
import { NavLink } from "react-router";
import { logout } from "@/features/login/loginSlice";
export const StateLogin = () => {
   const isLogin = useSelector((state: RootState) => state.login.isLogin);
   const dispatch = useDispatch();
   return (
      <div>
         {isLogin ? (
            <div className="relative flex items-center p-2 group">
               {/* Avatar và tên */}
               <img
                  src={default_avatar}
                  className="w-8 h-8 box-content"
                  alt="avatar"
               />
               <b className="text-white p-1">Minh</b>
               <FaCaretDown color="white" />

               {/* Dropdown menu */}

               <div className="absolute left-0 mt-2 top-8 z-10 w-32  bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300">
                  <NavLink to="/user/profile">
                     <p className="p-2 hover:bg-gray-200 cursor-pointer">
                        Account
                     </p>
                  </NavLink>
                  <p
                     onClick={() => dispatch(logout())}
                     className="p-2 hover:bg-gray-200 cursor-pointer "
                  >
                     Log out
                  </p>
               </div>
            </div>
         ) : (
            <NavLink to={"/login"}>
               <div className="font-semibold text-white">Sign Up/Login</div>
            </NavLink>
         )}
      </div>
   );
};
