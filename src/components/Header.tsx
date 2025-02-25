import { GrNotification } from "react-icons/gr";
import { StateLogin } from "./Login/StateLogin";

export interface HeaderProps {
  type: "ADMIN" | "EMPLOYER" | "CANDIDATE";
}

export const Header = (props: HeaderProps) => {
  const { type } = props;

  const renderHeader = () => {
    switch (type) {
      case "CANDIDATE":
        return (
          <div className="bg-primary h-16">
            <div className="container flex justify-between items-center h-full">
              <div className="flex items-center">
                <p className="font-semibold text-lg text-white">Vieclam24h</p>
                <a className="py-2 px-7 text-white font-bold text-sm">
                  Cơ hội việc làm
                </a>
              </div>
              <div className="flex items-center">
                <a className="p-3 text-white">Miền Bắc</a>
                <GrNotification color="white" className="px-4 box-content" />
                <StateLogin />
              </div>
            </div>
          </div>
        );

      case "EMPLOYER":
        return (
          <div className="bg-blue-600">
            <div className="container flex justify-between items-center">
              <div className="flex items-center">
                <img  alt="Logo" />
                <a className="py-2 px-7 text-white font-bold text-sm">
                  Quản lý tuyển dụng
                </a>
              </div>
              <div className="flex items-center">
                <a className="p-3 text-white">Hồ sơ ứng viên</a>
                <GrNotification color="white" className="px-4 box-content" />
                <StateLogin />
              </div>
            </div>
          </div>
        );

      case "ADMIN":
        return (
          <div className="bg-gray-800">
            <div className="container flex justify-between items-center">
              <div className="flex items-center">
                <img  alt="Logo" />
                <a className="py-2 px-7 text-white font-bold text-sm">
                  Quản trị hệ thống
                </a>
              </div>
              <div className="flex items-center">
                <a className="p-3 text-white">Dashboard</a>
                <GrNotification color="white" className="px-4 box-content" />
                <StateLogin />
              </div>
            </div>
          </div>
        );

      default:
        return <div className="bg-red-500 text-white p-4">Invalid Type</div>;
    }
  };

  return <>{renderHeader()}</>;
};
