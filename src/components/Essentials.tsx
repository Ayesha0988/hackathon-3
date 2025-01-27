import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
const Essentials = () => {
  return (
    <div>
         <div className="w-full h-auto md:h-auto  flex justify-center items-center flex-col">
        <div className="flex  items-center w-[90%] md:h-[52px] text-black ">
            <h1 className="text-[23px] font-semibold">The Essentials</h1>
          </div>

          <div className=' flex w-[90%] justify-center items-center flex-row'>
     <div className='text-[#11111] gap-[40px] grid md:grid-cols-3 justify-center items-center '>

{/* Img */}
      <div className='relative'>
      <Image
      src="/img1.svg"
      alt='Hero'
      height={"1344"}
      width={"700"}
      />
      <Button className='absolute top-[80%] left-[10%] bg-white text-black hover:bg-[#F5F5F5]'>Mens</Button>

      </div>

      <div className='relative'>
      <Image
      src="/img2.svg"
      alt='Hero'
      height={"1344"}
      width={"700"}
      />
       <Button className='absolute top-[80%] left-[10%] bg-white text-black hover:bg-[#F5F5F5]'>Womens</Button>
      </div>
      <div className='relative'>
      <Image
      src="/img3.svg"
      alt='Hero'
      height={"1344"}
      width={"700"}
      />
       <Button className='absolute top-[80%] left-[10%] bg-white text-black hover:bg-[#F5F5F5]'>Kids</Button>
      </div>



     

     </div>
     </div>
        
      </div>
    </div>
  )
}

export default Essentials