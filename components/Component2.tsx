import Image from "next/image";
import React from "react";
import wykres from "@/public/wykres.jpg";

const Component2 = () => {
  return (
    <div className='flex flex-row bg-gray-100 w-full  overflow-scroll '>
      <div className='flex flex-col w-1/2 h-40 border  m-2 p-2 '>
        <h2 className='text-xl text-black'>Lorem ipsum</h2>
        <p className='text-sm text-black'>some data</p>
        <Image
          className=''
          src={wykres}
          width={400}
          height={250}
          alt='wykres'
        />
      </div>
      <div className='flex flex-col w-1/2 h-40 border  m-2 p-2 '>
        <h2 className='text-xl text-black'>Lorem ipsum</h2>
        <p className='text-sm text-black'>some data</p>
        <Image src={wykres} width={400} height={250} alt='wykres' />
      </div>
      <div className='flex flex-col w-1/2 h-40 border  m-2 p-2 '>
        <h2 className='text-xl text-black'>Lorem ipsum</h2>
        <p className='text-sm text-black'>some data</p>
        <Image src={wykres} width={400} height={250} alt='wykres' />
      </div>
      <div className='flex flex-col w-1/2 h-40 border  m-2 p-2 '>
        <h2 className='text-xl text-black'>Lorem ipsum</h2>
        <p className='text-sm text-black'>some data</p>
        <Image src={wykres} width={400} height={250} alt='wykres' />
      </div>
    </div>
  );
};

export default Component2;
