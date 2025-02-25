import {
   Breadcrumb,
   BreadcrumbList,
   BreadcrumbItem,
   BreadcrumbLink,
   BreadcrumbSeparator,
   BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Heart } from "lucide-react";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaCheckCircle, FaRegCalendarAlt } from "react-icons/fa";
import { CiMedal } from "react-icons/ci";
import { useParams } from "react-router";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { apply, getOneJob } from "@/services/services";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogFooter,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";
import { Label } from "@radix-ui/react-dropdown-menu";
import { IApplication } from "@/interface/IApplication";
import { toast } from "sonner";
export interface Job {
   id: number;
   title: string;
   salary: number;
   recruitment_quantity: number;
   benefits: string;
   job_description: string;
   gender: boolean;
   is_Hidden: boolean;
   company_id: number;
   company: Company;
}
export interface Company {
   id: number;
   name: string;
   address: string;
   img_url: string;
}
export const JobDetail = () => {
   const [job, setJob] = useState<Job | null>(null);
   const [open, setOpen] = useState(false);
   const [selectedFile, setSelectedFile] = useState<File | null>(null);
   const [loading, setLoading] = useState(true);
   const { id } = useParams<{ id: string }>(); // Lấy id từ URL// Chỉ chạy lại khi `id` thay đổi
   useEffect(() => {
      async function fetchJob() {
         if (id) {
            const jobData = await getOneJob(id);
            setJob(jobData); // ✅ Không lỗi TypeScript
         }
      }
      fetchJob();
   }, [id]);
   const fileInputRef = useRef<HTMLInputElement | null>(null);

   const handleClick = () => {
      if (fileInputRef.current) {
         fileInputRef.current.click();
      }
   };
   const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;
      console.log(file);
      setSelectedFile(file);
   };
   const handleSubmit = async () => {
      const application: IApplication = {
         jobID: job?.id,
      };
      try {
         if (selectedFile) {
            await apply({ jobID: job?.id }, selectedFile); // Gửi API
            setOpen(false); // Đóng dialog sau khi gửi thành công
            toast.success("Ứng tuyển thành công!", {
               duration: 3000,
               style: {
                  background: "#4CAF50", // Màu xanh lá
                  color: "white",
                  fontWeight: "bold",
               },
            });
         }
      } catch (e: unknown) {
         // e có kiểu unknown
         if (axios.isAxiosError(e)) {
            // Kiểm tra nếu lỗi là từ Axios
            console.error("Error:", e.response?.data || e.message);
         } else {
            console.error("Unexpected Error:", e);
         }
      }
   };
   return !job ? (
      <p>Đang load</p>
   ) : (
      <div className="container">
         <Breadcrumb>
            <BreadcrumbList>
               <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbSeparator />
               <BreadcrumbItem>
                  <BreadcrumbLink href="/components">Components</BreadcrumbLink>
               </BreadcrumbItem>
               <BreadcrumbSeparator />
               <BreadcrumbItem>
                  <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
               </BreadcrumbItem>
            </BreadcrumbList>
         </Breadcrumb>
         <div className="flex bg-white px-10 py-4 shadow-custom gap-7 mb-5">
            <img
               className="w-[120px] h-[120px] object-cover"
               src="https://cdn1.vieclam24h.vn/upload/files_cua_nguoi_dung/logo/2020/09/09/4659820_vieclam24h_1599633371.jpg"
               alt=""
            />
            <div>
               <p className="text-[#6f6d71] font-medium mb-4">{job.title}</p>
               <h2 className="font-bold text-2xl mt-4 mb-4">
                  Tổ Trưởng Chất Lượng SMT
               </h2>
               <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                     <img
                        className="w-[32px] h-[32px] pt-[2px] md:pt-0"
                        src="https://vieclam24h.vn/img/job-detail-v3/icon-coin.png"
                        alt=""
                     />
                     <p className="text-[#9392a3]">
                        Salaries:{" "}
                        <b className="text-secondary">7 - 12 million</b>
                     </p>
                  </div>
                  <div className="flex items-center gap-2">
                     <img
                        className="w-[32px] h-[32px] pt-[2px] md:pt-0"
                        src="https://vieclam24h.vn/img/job-detail-v3/icon-schedual.png"
                        alt=""
                     />
                     <p className="text-[#9392a3]">
                        Deadline to apply:{" "}
                        <b className="text-black">13/02/2025</b>
                     </p>
                  </div>
                  <div className="flex items-center gap-2">
                     <img
                        className="w-[32px] h-[32px] pt-[2px] md:pt-0"
                        src="https://vieclam24h.vn/img/job-detail-v3/icon-map.png"
                        alt=""
                     />
                     <p className="text-[#9392a3]">
                        Location: <b className="text-black">Bac Ninh</b>
                     </p>
                  </div>
               </div>
               <div className="mt-8 flex items-center gap-1">
                  <div className="flex items-center px-2 py-1 rounded-md gap-2 bg-orange-100">
                     <i className="svicon-bullseye-arrow text-orange-600 text-[16px] leading-6"></i>
                     <span className="text-orange-600 text-[14px] leading-6">
                        First Opportunity!
                     </span>
                  </div>
                  <p>Be the first to apply</p>
               </div>
               <div className="flex gap-4 mt-4 ">
                  <Dialog open={open} onOpenChange={setOpen}>
                     <DialogTrigger asChild>
                        <button className="hover:cursor-pointer  w-[165px] gap-1 bg-primary text-white flex items-center justify-center py-3 px-6 rounded-sm">
                           {<IoPaperPlaneOutline></IoPaperPlaneOutline>}
                           Apply
                        </button>
                     </DialogTrigger>
                     <DialogContent className="sm:max-w-[425px]">
                        <DialogHeader>
                           <p className="text-xs font-medium">Apply now</p>
                           <DialogTitle>{job?.title}</DialogTitle>
                           <DialogDescription>
                              {job.company.name}
                           </DialogDescription>
                        </DialogHeader>
                        <img
                           src="https://vieclam24h.vn/img/apply-job.png"
                           alt=""
                           className="mx-auto"
                        />
                        <div className="flex gap-1">
                           <button className="flex-1 bg-[#f8f6fb] py-2 rounded-sm text-primary font-semibold">
                              Choose current CV
                           </button>
                           <button
                              onClick={handleClick}
                              className="flex-1 bg-[#f8f6fb] py-2 rounded-sm text-primary font-semibold"
                           >
                              Upload existing CV
                           </button>
                        </div>

                        {/* chỗ này hiển thị load cv thành công */}
                        {selectedFile && (
                           <div className="flex items-center px-2 py-3 bg-[#f7fbff] gap-2 border-2 rounded-md border-highlight">
                              <FaCheckCircle></FaCheckCircle>
                              <div>
                                 <p className="text-xs font-medium">
                                    {selectedFile.name}
                                 </p>
                                 <a
                                    className="text-sm text-primary font-medium hover:underline "
                                    onClick={() =>
                                       window.open(
                                          URL.createObjectURL(selectedFile),
                                          "_blank"
                                       )
                                    }
                                 >
                                    View CV
                                 </a>
                              </div>
                           </div>
                        )}

                        <input
                           type="file"
                           ref={fileInputRef}
                           className="hidden"
                           onChange={handleFileChange}
                        />

                        <DialogFooter>
                           <Button
                              type="submit"
                              className="w-[150px] bg-primary text-white"
                              onClick={handleSubmit}
                           >
                              Apply
                           </Button>
                        </DialogFooter>
                     </DialogContent>
                  </Dialog>

                  <button className="bg-[#f5f1ff] w-[48px] h-[48px] flex items-center justify-center rounded">
                     <Heart className="text-primary w-[18px] h-[18px]" />
                  </button>
               </div>
            </div>
         </div>
         <div className="bg-white shadow-custom px-10 py-4">
            <b className="mb-3">General information</b>
            <div className="px-4 pt-5 pb-1 bg-[#f5f3ff]">
               <div className="flex items-center border-b mb-4 pb-3">
                  <div className="flex items-center w-[33%]">
                     <div className="flex items-center justify-center w-10 h-10 bg-[#ede9fe] rounded-full">
                        <FaRegCalendarAlt className="text-primary"></FaRegCalendarAlt>
                     </div>

                     <div className="ml-3">
                        <p className="text-[12px] text-gray-600">Posted date</p>
                        <p className="font-medium text-[14px] mt-1">
                           08/01/2025
                        </p>
                     </div>
                  </div>
                  <div className="flex items-center w-[33%]">
                     <div className="flex items-center justify-center w-10 h-10 bg-[#ede9fe] rounded-full">
                        <CiMedal className="text-primary"></CiMedal>
                     </div>
                     <div className="ml-3">
                        <p className="text-[12px]  text-gray-600">Rank</p>
                        <p className="font-medium text-[14px] mt-1">
                           Leader - supervisor
                        </p>
                     </div>
                  </div>
               </div>
               <div className="flex items-center border-b mb-4 pb-3">
                  <div className="flex items-center w-[33%]">
                     <div className="flex items-center justify-center w-10 h-10 bg-[#ede9fe] rounded-full">
                        <FaRegCalendarAlt className="text-primary"></FaRegCalendarAlt>
                     </div>

                     <div className="ml-3">
                        <p className="text-[12px]  text-gray-600">
                           Posted date
                        </p>
                        <p className="font-medium text-[14px]">08/01/2025</p>
                     </div>
                  </div>
                  <div className="flex items-center w-[33%]">
                     <div className="flex items-center justify-center w-10 h-10 bg-[#ede9fe] rounded-full">
                        <CiMedal className="text-primary"></CiMedal>
                     </div>
                     <div className="ml-3">
                        <p className="text-[12px]  text-gray-600">Rank</p>
                        <p className="font-medium text-[14px]">
                           Leader - supervisor
                        </p>
                     </div>
                  </div>
               </div>
               <div className="flex items-center border-b mb-4 pb-3">
                  <div className="flex items-center w-[33%]">
                     <div className="flex items-center justify-center w-10 h-10 bg-[#ede9fe] rounded-full">
                        <FaRegCalendarAlt className="text-primary"></FaRegCalendarAlt>
                     </div>

                     <div className="ml-3">
                        <p className="text-[12px]  text-gray-600">
                           Posted date
                        </p>
                        <p className="font-medium text-[14px]">08/01/2025</p>
                     </div>
                  </div>
                  <div className="flex items-center w-[33%]">
                     <div className="flex items-center justify-center w-10 h-10 bg-[#ede9fe] rounded-full">
                        <CiMedal className="text-primary"></CiMedal>
                     </div>

                     <div className="ml-3">
                        <p className="text-[12px]  text-gray-600">Rank</p>
                        <p className="font-medium text-[14px]">
                           Leader - supervisor
                        </p>
                     </div>
                  </div>
               </div>
               <div className="flex items-center border-b mb-4 pb-3">
                  <div className="flex items-center w-[33%]">
                     <div className="flex items-center justify-center w-10 h-10 bg-[#ede9fe] rounded-full">
                        <FaRegCalendarAlt className="text-primary"></FaRegCalendarAlt>
                     </div>

                     <div className="ml-3">
                        <p className="text-[12px]  text-gray-600">
                           Posted date
                        </p>
                        <p className="font-medium text-[14px]">08/01/2025</p>
                     </div>
                  </div>
                  <div className="flex items-center w-[33%]">
                     <div className="flex items-center justify-center w-10 h-10 bg-[#ede9fe] rounded-full">
                        <CiMedal></CiMedal>
                     </div>
                     <div className="ml-3">
                        <p className="text-[12px]  text-gray-600">Rank</p>
                        <p className="font-medium text-[14px]">
                           Leader - supervisor
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div>
               <b>Job description</b>
               <ul>
                  - Lập check sheet kiểm tra nguyên liệu cấp vào chuyền SMT -
                  Đào tạo, sắp xếp nhân lực theo ca đảm bảo thực hiện đầy đủ các
                  hoạt động liên quan đến SMT IPQC theo đúng quy trình, tiêu
                  chuẩn. - Xác nhận các sản phẩm bất thường, thông tin, phối hợp
                  với SMT QE và các bộ phận có liên quan đưa ra phương hướng
                  giải quyết, ngăn chặn sản phẩm lỗi kịp thời - Quản lý SMT IPQC
                  OP (công nhân) - Báo cáo cho kỹ sư quản lý chất lượng SMT về
                  các vấn đề chất lượng ảnh hưởng đến chuyền SMT - Đảm bảo hàng
                  thực hiện block/unblock đúng theo yêu cầu và tiêu chuẩn công
                  việc. - Cải tiến quy trình làm việc
               </ul>
            </div>
            <div>
               <b>Job description</b>
               <ul>
                  - Lập check sheet kiểm tra nguyên liệu cấp vào chuyền SMT -
                  Đào tạo, sắp xếp nhân lực theo ca đảm bảo thực hiện đầy đủ các
                  hoạt động liên quan đến SMT IPQC theo đúng quy trình, tiêu
                  chuẩn. - Xác nhận các sản phẩm bất thường, thông tin, phối hợp
                  với SMT QE và các bộ phận có liên quan đưa ra phương hướng
                  giải quyết, ngăn chặn sản phẩm lỗi kịp thời - Quản lý SMT IPQC
                  OP (công nhân) - Báo cáo cho kỹ sư quản lý chất lượng SMT về
                  các vấn đề chất lượng ảnh hưởng đến chuyền SMT - Đảm bảo hàng
                  thực hiện block/unblock đúng theo yêu cầu và tiêu chuẩn công
                  việc. - Cải tiến quy trình làm việc
               </ul>
            </div>
            <div>
               <b>Job description</b>
               <ul>
                  - Lập check sheet kiểm tra nguyên liệu cấp vào chuyền SMT -
                  Đào tạo, sắp xếp nhân lực theo ca đảm bảo thực hiện đầy đủ các
                  hoạt động liên quan đến SMT IPQC theo đúng quy trình, tiêu
                  chuẩn. - Xác nhận các sản phẩm bất thường, thông tin, phối hợp
                  với SMT QE và các bộ phận có liên quan đưa ra phương hướng
                  giải quyết, ngăn chặn sản phẩm lỗi kịp thời - Quản lý SMT IPQC
                  OP (công nhân) - Báo cáo cho kỹ sư quản lý chất lượng SMT về
                  các vấn đề chất lượng ảnh hưởng đến chuyền SMT - Đảm bảo hàng
                  thực hiện block/unblock đúng theo yêu cầu và tiêu chuẩn công
                  việc. - Cải tiến quy trình làm việc
               </ul>
            </div>
         </div>
      </div>
   );
};
