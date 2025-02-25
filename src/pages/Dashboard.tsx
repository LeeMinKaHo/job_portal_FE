import { Header } from '@/components/Header'
import { SideBar } from '@/components/Sidebar_Employer/SideBar'

import React from 'react'

export const Dashboard = () => {
  return (
    <div>
      <Header type='ADMIN'></Header>
      <div className='flex'>
        <SideBar></SideBar>
        <div>

        </div>
      </div>
    </div>
  )
}
