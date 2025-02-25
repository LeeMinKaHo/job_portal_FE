import React from "react";
import { Sidabar_Container } from "./Sidebar_Container/Sidabar_Container";
import { FaUserFriends } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { IoDocumentAttach } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { AiFillSnippets } from "react-icons/ai";
export const SideBar = () => {
   const datas = [
      {
         name: "Account Management",
         childrens: [
            {
               icon: FaUserFriends,
               name: "Your Account",
            },
         ],
      },
      {
         name: "CV Management",
         childrens: [
            {
               icon: TiDocumentText,
               name: "Your profile",
            },
            {
               icon: IoDocumentAttach,
               name: "CV decorator",
            },
         ],
      },
      {
         name: "Jobs Management",
         childrens: [
            {
               icon: IoDocumentAttach,
               name: "Applied jobs",
            },
            {
               icon: FaHeart,
               name: "Saved jobs",
            },
            {
               icon: AiFillSnippets,
               name: "Job reminder",
            },
            {
               icon: FaUserFriends,
               name: "Job alert",
            },
         ],
      },
      {
         name: "My Companies",
         childrens: [
            {
               icon: FaUserFriends,
               name: "Companies view your profile",
            },
            {
               icon: FaUserFriends,
               name: "Followed companies",
            },
         ],
      },
   ];

   return (
      <div className="px-[6px] shadow-custom bg-white" >
         {/* Dùng map thay vì forEach để render */}
         {datas.map((data, index) => (
            <Sidabar_Container key={index} name={data.name} childrens={data.childrens} />
         ))}
      </div>
   );
};

