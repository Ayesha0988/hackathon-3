import React from 'react'
import Image from 'next/image';
import { projectData } from '@/projectCard/Card';
const Airmax = () => {
  return (
    <div>
 <div className='w-full min-h-screen  flex justify-center items-center flex-col'>
 <div className='flex justify-between  items-center w-[90%] md:h-[52px] text-black '>
    <div>
        <h1 className='text-[22px]'>Best of Air Max</h1>
    </div>
    <div className='flex justify-center items-center gap-2 '>
        <h1  className='text-[15px]'>Shop</h1>
        <div className='flex gap-2'>
            <div>
                <Image
                src='/left.png'
                alt='left'
                width={"48"}
                height={"48"}
                className='md:w-[48px] md:h-[48px] w-[38px] h-[38px] cursor-pointer'
                />
            </div>
            <div>
            <Image
                src='/right.svg'
                alt='left'
                width={"48"}
                height={"48"}
                className='md:w-[48px] md:h-[48px] w-[38px] h-[38px] cursor-pointer'

                />
            </div>
        </div>

    </div>

 </div>
  <div className="w-[90%]  mx-auto grid grid-cols-1 mt-5 md:grid-cols-3 gap-3">
  {projectData.slice(0,3).map((item) => {
    return (
      <div
        key={item.id}
        className="pb-4 m-1 shadow-lg rounded-lg md:transition-all duration-300 md:hover:scale-105 ">
        <Image
          src={item.image}
          alt={item.title}
          width={441}
          height={441}
          className="w-full  cursor-pointer "
        />
        <div className="px-1 pt-1">
        <div className='flex justify-between items-center'>
          <h1 className=" text-black font-medium text-[15px]">{item.title}</h1>
          <p>{item.price}</p>
          </div>
          <p className="text-[14px] text-[#757575] font-thing  pt-1">
            {item.description}
          </p>
        </div>
    
      </div>
    );
  })}
</div>
         </div>
    </div>
  )
}

export default Airmax