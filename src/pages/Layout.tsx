import { Outlet } from "react-router"
import { Header } from "../components/Header"
import { Toaster } from "@/components/ui/toaster"
import { Footer } from "@/components/Footer/Footer"



export const Layout = () => {
  return (
    <>
        <Header></Header>
        <Toaster></Toaster>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}
