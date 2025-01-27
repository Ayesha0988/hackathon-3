import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Dontmiss = () => {
  return (
    <div>
 <div className='mt-28 mb-7'>
          <span className='text-xl font-semibold px-10 lg:px-20'>{`Don't`} Miss</span>
        </div>

{/* Img */}
<div className='flex justify-center px-10'>
    <Image
    className=''
    src={'/sec5.svg'}
    alt='shoes banner'
    width={1351}
    height={700}
    />
    </div>
      <div className=' text-[#111111] w-[90%] gap-[8px] md:gap-[10px]  h-[270px] md:h-[270px] flex flex-col justify-center items-center '>

     <div>
      <h1 className='md:text-[56px] text-[30px] font-medium '>FLIGHT ESSENTIALS</h1>
     </div>

     <div className="flex justify-center text-center items-center md:flex flex-col md:flex-row md:text-[16px] text-[13px] mt-2 gap-1">
      <p >Your built-to-last, all-week wears—but with style only  
    </p>
    <p>Jordan Brand can deliver.</p>
     </div>

<div className='flex gap-2 my-3 md:mt-5'>
      <div>
        <Link
        href="/Products"
        >
      <button className='md:py-[7.5px] py-[5px]  md:px-[22px]  px-[15px] rounded-full bg-[#111111] text-white hover:bg-[#3d3d3d]'>Shop</button>
      </Link>
      </div>
     </div>
     </div>

     

     </div>
     
        
      
    
  )
}

export default Dontmiss