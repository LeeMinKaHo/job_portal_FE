import React from 'react'
import { FaChevronUp } from "react-icons/fa6";
export const RegistrationBlock = () => {
  return (
    <div>
      <div className='mx-7 mt-4 p-[18px] bg-white'>
        <div className='flex gap-2 items-center'>
        <FaChevronUp></FaChevronUp>
        <p className='text-[18px] font-semibold'> Registration information</p>
        </div>
       
        <hr className='my-2'></hr>
        <div className='flex items-center '>
          Email
          <div className='p-[10px] bg-[#f6f6f6] w-[382px] ml-5'>leminhkhoa5241@gmail.com</div>
          <button className='ml-auto'>Edit mail</button>
        </div>
      </div>
    </div>
  )
}
