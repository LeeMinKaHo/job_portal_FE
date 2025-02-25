import { PersonalInformationBlock } from '@/components/PersonalInformation/PersonalInformationBlock'
import { RegistrationBlock } from '@/components/RegistrationBlock/RegistrationBlock'
import { SideBar } from '@/components/Sidebar_Employer/SideBar'
import { Sidabar_Container } from '@/components/Sidebar_Employer/Sidebar_Container/Sidabar_Container'
import { UserNameBlock } from '@/components/UserNameBlock/UserNameBlock'
import React from 'react'

export const Profile = () => {
  return (
    <div className='bg-[f2f3f7] flex'>
        <SideBar></SideBar>
        <div className='flex-1'>
            <UserNameBlock></UserNameBlock>
            <RegistrationBlock></RegistrationBlock>
            <PersonalInformationBlock></PersonalInformationBlock>
        </div>
    </div>
  )
}
