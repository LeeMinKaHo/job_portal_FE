import React from 'react'
import { BoxJob } from './BoxJob'
import { FieldBox } from '../SearchBar/FieldBox'

export const ListJob = () => {
  return (
    <div className='container'>
       
        <div className='grid grid-cols-3 gap-3'>
            
      <BoxJob></BoxJob>
      <BoxJob></BoxJob>
      <BoxJob></BoxJob>

      </div>
    </div>
    
  )
}
