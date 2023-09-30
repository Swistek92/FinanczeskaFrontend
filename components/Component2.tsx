import Image from "next/image";
import React from "react";
import wykres from "@/public/wykres.jpg";
import { DoughnutChart } from "./DoughnutChart";

const Component2 = () => {
  return (
    <div className='flex flex-row bg-gray-100 w-full h-auto  overflow-scroll '>
      <div className='flex flex-col w-auto h-60   m-2 p-2 '>
        <h2 className='text-xl text-black'>Lorem ipsum</h2>
        <p className='text-sm text-black'>some data</p>
        <DoughnutChart />
      </div>
      <div className='flex flex-col w-auto h-60   m-2 p-2 '>
        <h2 className='text-xl text-black'>Lorem ipsum</h2>
        <p className='text-sm text-black'>some data</p>
        <DoughnutChart />
      </div>
      <div className='flex flex-col w-auto h-60   m-2 p-2 '>
        <h2 className='text-xl text-black'>Lorem ipsum</h2>
        <p className='text-sm text-black'>some data</p>
        <DoughnutChart />{" "}
      </div>
      <div className='flex flex-col w-auto h-60   m-2 p-2 '>
        <h2 className='text-xl text-black'>Lorem ipsum</h2>
        <p className='text-sm text-black'>some data</p>
        <DoughnutChart />{" "}
      </div>
    </div>
  );
};

export default Component2;
