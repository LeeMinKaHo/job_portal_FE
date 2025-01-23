import { XCircleIcon } from "lucide-react";

export const ToastError = () => {
   return (
      <div className="flex items-center bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded shadow-lg">
         <XCircleIcon className="h-6 w-6 mr-2 text-red-500" />
         <span className="text-sm">Please check your email or password</span>
      </div>
   );
};
