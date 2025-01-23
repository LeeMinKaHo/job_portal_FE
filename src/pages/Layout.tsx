import { Outlet } from "react-router"
import { Header } from "../components/Header"
import { Toaster } from "@/components/ui/toaster"



export const Layout = () => {
  return (
    <>
        <Header></Header>
        <Toaster></Toaster>
        <Outlet></Outlet>
    </>
  )
}
