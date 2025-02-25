import { CiSearch } from "react-icons/ci"

export const OppucationBox = () => {
  return (
    <div>
         <div className="relative flex items-center">
              <CiSearch className="absolute left-3 text-gray-500 text-xl" />
              <input
                type="text"
                placeholder="Nhập vị trí muốn ứng tuyển"
                className="pl-10 py-3 w-full  outline-none"
              />
            </div>
    </div>
  )
}
