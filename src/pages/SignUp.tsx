import { FormSignUp } from '@/components/SignUp/FormSignUp'
import React from 'react'
import { NavLink } from 'react-router'

export const SignUp = () => {
  return (
    <div className="bg-[#f8f9fd] min-h-screen flex items-center justify-center">
    <div className="flex  justify-between w-[1140px] bg-white rounded shadow-lg">
      <FormSignUp></FormSignUp>
       <div className="flex-1 bg-[linear-gradient(45deg,_#451da0,_#d153f7)] flex gap-2 flex-col justify-center items-center">
          <p className="text-white font-bold text-3xl">Welcom to sign up</p>
          <p className="text-white">Did you have a account</p>
          <NavLink to="/login"className="text-white border-2 rounded-2xl py-3 px-6">
          Sign In
          </NavLink>
          
       </div>
    </div>
 </div>
    
  )
}
