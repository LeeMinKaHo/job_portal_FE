import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./pages/Layout.tsx";
import { Home } from "./pages/Home.tsx";
import { Login } from "./pages/Login.tsx";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout></Layout>}>
               <Route index element={  <Home></Home> } />
               <Route path="/login" element={<Login></Login>}></Route>
            </Route>
         </Routes>
      </BrowserRouter>
   </StrictMode>
);
