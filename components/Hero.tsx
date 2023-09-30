"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import city from "@/public/city.jpeg";
import { BagIcon } from "./icons/BagIcon";
import { DolarIcon } from "./icons/DolarIcon";
import { FinanceIcon } from "./icons/FinanceIcon";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("bottom");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className='flex w-full relative'>
      <div className='absolute left-1/2 top-8 transform -translate-x-1/2 -translate-y-1/2 flex flex-row'>
        <BagIcon className='m-2' />
        <DolarIcon className='m-2' />
        <FinanceIcon className='m-2' />
      </div>
      <div className='absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2'>
        <button onClick={handleScroll}>scroll bottom</button>
      </div>
      <h1 className='absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2'>
        FERNUME
      </h1>
      <Image
        className='w-full h-60 fill-cyan-500'
        src={city}
        width={1000}
        height={1000}
        alt='city'
      />
    </div>
  );
};

export default Hero;
