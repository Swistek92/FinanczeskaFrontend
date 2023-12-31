import Image from "next/image";
import React from "react";
import wykres from "@/public/wykres.jpg";
import { DoughnutChart } from ".";

const Component2 = () => {
  return (
    <div className='flex flex-row bg-gray-100 w-full h-auto  overflow-scroll '>
      <div className='flex flex-col w-auto h-auto  border-r-2   m-2 p-2 '>
        <h2 className='text-xl text-black'>zyski</h2>
        <p className='text-sm text-black'>zyski</p>
        <DoughnutChart />
      </div>
      <div className='flex flex-col w-auto h-auto  border-r-2   m-2 p-2 '>
        <h2 className='text-xl text-black'>zyski</h2>
        <p className='text-sm text-black'>zyski</p>
        <DoughnutChart />
      </div>
      <div className='flex flex-col w-auto h-auto  border-r-2   m-2 p-2 '>
        <h2 className='text-xl text-black'>zyski</h2>
        <p className='text-sm text-black'>zyski</p>
        <DoughnutChart />{" "}
      </div>
      <div className='flex flex-col w-auto h-auto  border-r-2   m-2 p-2 '>
        <h2 className='text-xl text-black'>zyski</h2>
        <p className='text-sm text-black'>zyski</p>
        <DoughnutChart />{" "}
      </div>
    </div>
  );
};

export default Component2;
