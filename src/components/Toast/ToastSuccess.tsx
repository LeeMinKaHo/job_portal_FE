import { CheckCircle } from "lucide-react";
import React from "react";

export const ToastSuccess = () => {
   return (
      <div className="flex items-center space-x-2">
         <CheckCircle className="w-5 h-5 text-green-500" />
         <span>Đăng nhập thành công! Chào mừng bạn đã quay lại.</span>
      </div>
   );
};
