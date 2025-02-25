import React from 'react'
import { BoxJob } from './BoxJob'
import { FieldBox } from '../SearchBar/FieldBox'
import { IJob } from '@/interface/IJob'

export interface IListJob{
    jobs : IJob[] | undefined,
    type: 'col' | 'row'; // tui muốn chỗ này chỉ col hoặc row
    isLoading?:boolean
}
export const ListJob : React.FC<IListJob> = ({ jobs, type , isLoading = false }) => {
  const gridClass = type === 'col' ? 'grid-cols-1' : 'grid-cols-3';
  return (
    <div className="">
      <div className={`grid ${gridClass} gap-3`}>
      {isLoading && Array.from({ length: 20 }).map((_, index) => (
   <BoxJob key={index} isLoading={true} />
))}

        {jobs?.map((job, index) => (
          <BoxJob job={job} key={index} isLoading={false}></BoxJob>
        ))}
      </div>
    </div>
  )
}
