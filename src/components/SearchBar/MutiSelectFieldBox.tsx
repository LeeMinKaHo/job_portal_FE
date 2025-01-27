import * as Select from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, Check, ChevronUpIcon, CheckIcon, ChevronDownIcon } from "lucide-react";

import { useState } from "react";

const options = [
  { value: "developer", label: "Developer" },
  { value: "designer", label: "Designer" },
  { value: "manager", label: "Manager" },
]; 
export const MutiSelectFieldBox = () => {
    const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="w-full">
    <Select.Root onValueChange={(value) => setSelectedOption(value)}>
      <Select.Trigger
        className="flex items-center justify-between w-full py-2 px-4 border rounded-lg bg-white focus:ring-2 focus:ring-blue-500"
        aria-label="Position"
      >
        <Select.Value
          placeholder="Chọn vị trí muốn ứng tuyển"
          className="text-gray-500"
        />
        <Select.Icon>
          <ChevronDown />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content className="absolute mt-2 w-full bg-white border rounded-lg shadow-lg">
        <Select.ScrollUpButton className="flex items-center justify-center py-2">
          <ChevronUpIcon />
        </Select.ScrollUpButton>
        <Select.Viewport>
          {options.map((option) => (
            <Select.Item
              key={option.value}
              value={option.value}
              className="px-4 py-2 flex items-center cursor-pointer hover:bg-gray-200"
            >
              <Select.ItemText>{option.label}</Select.ItemText>
              <Select.ItemIndicator className="ml-auto text-blue-500">
                <CheckIcon />
              </Select.ItemIndicator>
            </Select.Item>
          ))}
        </Select.Viewport>
        <Select.ScrollDownButton className="flex items-center justify-center py-2">
          <ChevronDownIcon />
        </Select.ScrollDownButton>
      </Select.Content>
    </Select.Root>
    {selectedOption && (
      <div className="mt-2">
        <span className="text-gray-700">
          Bạn đã chọn: <strong>{selectedOption}</strong>
        </span>
        <button
          className="ml-2 text-sm text-red-500 underline"
          onClick={() => setSelectedOption("")}
        >
          Hủy chọn
        </button>
      </div>
    )}
  </div>
  )
}
