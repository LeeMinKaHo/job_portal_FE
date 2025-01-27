import { CiSearch } from "react-icons/ci";

export const PositionBox = () => {
  return (
    <div className="relative flex items-center">
      <CiSearch className="absolute left-3 text-gray-500 text-xl" />
      <input
        type="text"
        placeholder="Nhập vị trí muốn ứng tuyển"
        className="pl-10 py-2 w-full border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
