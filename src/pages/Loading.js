import React from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export const Loading = () => {
    return Array(10).fill({}).map(()=>{
  return (
    <div className='col-4 text-center p-5'>
                {/* <Skeleton className='mb-4 '  height={100} width={100}  baseColor={"gray"}/> */}
              <Skeleton className='mb-2 '  height={100}   baseColor={"gray"}/> 
        
          </div>

  )
}
    )}