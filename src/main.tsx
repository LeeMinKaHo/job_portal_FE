import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./pages/Layout.tsx";
import { Home } from "./pages/Home.tsx";
import { Login } from "./pages/Login.tsx";
import { SignUp } from "./pages/SignUp.tsx";
import { Job } from "./pages/Job.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";
import { Profile } from "./pages/Profile.tsx";
import { JobDetail } from "./pages/JobDetail.tsx";
import { Dashboard } from "./pages/Dashboard.tsx";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <Provider store={store}>
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Layout></Layout>}>
               <Route index element={  <Home></Home> } />
               <Route path="/login" element={<Login></Login>}></Route>
               <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
               <Route path="/jobs" element={<Job></Job>}></Route>
               <Route path="/user/profile" element={<Profile></Profile>}></Route>
               <Route path="/jobs/:id" element={<JobDetail></JobDetail>}></Route>
            </Route>
            <Route path="/admin" element={<Dashboard></Dashboard>}>
              
            </Route>
         </Routes>
         
      </BrowserRouter>
      </Provider>
   </StrictMode>
);
