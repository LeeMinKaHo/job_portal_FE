import { Outlet } from "react-router";
import { Header } from "../components/Header";
import { Toaster } from "@/components/ui/sonner"
import { Footer } from "@/components/Footer/Footer";

export const Layout = () => {
   return (
      <>
         <Header type="CANDIDATE"></Header>
         <Toaster></Toaster>
         <div className="bg-[#f2f3f7] relative">
            <Outlet></Outlet>
         </div>

         <Footer></Footer>
      </>
   );
};
