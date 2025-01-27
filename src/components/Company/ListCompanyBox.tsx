import React from 'react'
import { CompanyBox } from './CompanyBox'

export const ListCompanyBox = () => {
  return (
    <div className='flex gap-3'>
        <CompanyBox></CompanyBox>
        <CompanyBox></CompanyBox>
        <CompanyBox></CompanyBox>
        <CompanyBox></CompanyBox>
        <CompanyBox></CompanyBox>
    </div>
  )
}
