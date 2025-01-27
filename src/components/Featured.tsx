import React from "react";
import Image from "next/image";
const Featured = () => {
  return (
    <div>
      <div className='mt-28 mb-6'>
        <span className='text-xl font-semibold px-10 lg:px-20'>Featured</span>
        </div>

          <div className='w-full  flex justify-center items-center flex-row'>
     <div className='text-[#111111] h-auto gap-[40px] flex flex-col justify-center items-center '>

{/* Img */}

<div className='flex justify-center px-10'>
        <Image
               
                src={'/featured.png'}
                alt=''
                width={1351}
                height={925}/>
        </div>

      <div className=' text-[#111111] w-[90%] gap-[8px] md:gap-[10px]  h-[270px] md:h-[270px] flex flex-col justify-center items-center '>

     <div>
      <h1 className='md:text-[56px] text-[22px] font-medium '>STEP INTO WHAT FEELS GOOD</h1>
     </div>

     <div className="flex justify-center items-center md:flex flex-col md:flex-row md:text-[16px] text-[14px] mt-2 gap-1">
      <p >Cause everyone should know the feeling  
    </p>
    <p>of running in that perfect pair.</p>
     </div>

<div className='flex gap-2 my-3 md:mt-5'>
      <div>
      <button className='md:py-[7.5px] py-[5px]  md:px-[22px]  px-[15px] rounded-full bg-[#111111] text-white'>Find Your Shoe</button>
      </div>
     </div>
     </div>

     

     </div>
     </div>
        
      </div>
    
  );
};

export default Featured;
