import React, { useState } from "react";
import {
   Pagination,
   PaginationContent,
   PaginationItem,
   PaginationPrevious,
   PaginationLink,
   PaginationEllipsis,
   PaginationNext,
} from "../ui/pagination";
import { ListJob } from "../Jobs/ListJob";
import {
   Carousel,
   CarouselContent,
   CarouselNext,
   CarouselPrevious,
} from "../ui/carousel";
import { IJob } from "@/interface/IJob";

export const HotJob = () => {
   // call API để lấy job
   const jobList: IJob[] = [
      {
         id: 1,
         title: "Software Engineer",
         salary: 120000,
         recruitment_quantity: 5,
         benefits: "Health insurance, Remote work, Stock options",
         job_description:
            "Develop and maintain web applications using modern technologies.",
         application_deadline: new Date("2025-03-15"),
         is_Hidden: false,
         gender: true, // true: Male, false: Female  
      },
      {
         id: 2,
         title: "Marketing Manager",
         salary: 80000,
         recruitment_quantity: 3,
         benefits: "Flexible work hours, Annual bonus, Travel allowances",
         job_description:
            "Plan and execute marketing campaigns to drive company growth.",
         application_deadline: new Date("2025-04-01"),
         is_Hidden: false,
         gender: false,
      },
      {
         id: 3,
         title: "Data Analyst",
         salary: 95000,
         recruitment_quantity: 4,
         benefits: "401(k) match, Gym membership, Free lunch",
         job_description: "Analyze data trends and provide business insights.",
         application_deadline: new Date("2025-05-10"),
         is_Hidden: false,
         gender: true,
      },
   ];
   
   return (
      <div className="py-6 bg-[#f6f9ff]">
         <div className="container ">
            <div className="flex items-center gap-3 mb-6">
               <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <g clip-path="url(#clip0_1067_28341)">
                     <circle cx="16" cy="16" r="16" fill="#FFF7ED"></circle>
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M25.5601 19.2061C25.3463 24.3105 21.1423 28.3835 15.9854 28.3835C10.6917 28.3835 6.4004 23.9479 6.4004 18.7985C6.4004 18.1102 6.38806 16.7347 7.42008 14.4139C8.0377 13.025 8.42507 12.1525 8.64369 11.3549C8.76381 10.9165 8.99742 10.2201 9.66337 11.3549C10.0561 12.024 10.0712 12.9864 10.0712 12.9864C10.0712 12.9864 11.5322 11.8652 12.5185 9.72338C13.9643 6.58348 12.8107 4.70655 12.4165 3.40136C12.2801 2.94985 12.1944 2.13839 13.1303 2.48365C14.0839 2.83554 16.6049 4.6003 17.9228 6.4604C19.8036 9.11514 20.472 11.6608 20.472 11.6608C20.472 11.6608 21.0742 10.9133 21.2877 10.1312C21.5289 9.24811 21.5324 8.37343 22.3073 9.31561C23.0442 10.2116 24.1386 11.8954 24.7546 13.4962C25.8731 16.4032 25.5601 19.2061 25.5601 19.2061Z"
                        fill="url(#paint0_linear_1067_28341)"
                     ></path>
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M15.9844 28.3836C12.3238 28.3836 9.35645 25.4162 9.35645 21.7557C9.35645 19.547 10.2465 18.206 12.099 16.3875C13.2851 15.2231 14.3952 13.793 14.867 12.8192C14.9599 12.6275 15.1713 11.6285 15.9863 12.7982C16.4139 13.4116 17.0841 14.5026 17.5139 15.4337C18.2548 17.0389 18.4316 18.5947 18.4316 18.5947C18.4316 18.5947 19.1577 18.1668 19.6552 17.0652C19.8156 16.7101 20.1399 15.366 21.0464 16.7099C21.7115 17.6961 22.6252 19.4694 22.6123 21.7557C22.6123 25.4162 19.6448 28.3836 15.9844 28.3836Z"
                        fill="#FC9502"
                     ></path>
                     <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.0877 21.1436C17.0309 21.1436 17.0309 22.8902 18.229 25.2223C19.0268 26.7751 17.8335 28.3833 16.0877 28.3833C14.3419 28.3833 13.4365 26.9681 13.4365 25.2223C13.4365 23.4766 15.1445 21.1436 16.0877 21.1436Z"
                        fill="#FCE202"
                     ></path>
                  </g>
                  <defs>
                     <linearGradient
                        id="paint0_linear_1067_28341"
                        x1="15.9998"
                        y1="28.4027"
                        x2="15.9998"
                        y2="2.42002"
                        gradientUnits="userSpaceOnUse"
                     >
                        <stop stop-color="#FF4C0D"></stop>
                        <stop offset="1" stop-color="#FC9502"></stop>
                     </linearGradient>
                     <clipPath id="clip0_1067_28341">
                        <rect width="32" height="32" fill="white"></rect>
                     </clipPath>
                  </defs>
               </svg>
               <p className="text-2xl font-medium">Việc làm tuyển gấp</p>
            </div>
            <ListJob jobs={jobList} type="row"></ListJob>

            <Pagination className="mt-6">
               <PaginationContent>
                  <PaginationItem>
                     <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationLink href="#">1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationLink href="#" isActive>
                        2
                     </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                     <PaginationNext href="#" />
                  </PaginationItem>
               </PaginationContent>
            </Pagination>
         </div>
      </div>
   );
};
