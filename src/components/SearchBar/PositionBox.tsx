import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaRegLightbulb } from "react-icons/fa";
export const PositionBox = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const options = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape'];

  const handleSearch = (event : React.ChangeEvent<HTMLInputElement>) => {
    const value : string = event.target.value;
    setSearchTerm(value);

    if (value ) {
      const filteredSuggestions = options.filter(option =>
        option.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };
  const [isFocused, setIsFocused] = useState(false);
  return (
    <div className="relative flex items-center">
      <CiSearch className="absolute left-3 text-gray-500 text-xl" />
      <input
        type="text"
        placeholder="Nhập vị trí muốn ứng tuyển"
        className="pl-10 py-3 w-full outline-none "
        onChange={handleSearch}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    <div
        className={`absolute z-20 top-12 bg-white shadow-md rounded w-full transition-all duration-300 transform ${
          isFocused ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
        }`}
      >
        <div className="p-2">
          <p className="font-bold text-highlight">Search Suggestion</p>
          <ul>
            <li className="flex items-center gap-1"> {<FaRegLightbulb></FaRegLightbulb>} React Native</li>
            <li className="flex items-center gap-1">ReactJS Developer</li>
          </ul>
        </div>
        <div className="p-2">
          <p className="font-bold">Popular Keywords</p>
          <ul>
            <li>Kế toán</li>
            <li>Nhân viên văn phòng</li>
          </ul>
        </div>
      </div>
    </div>
   
    
  );
};
