"use client";
import React, { useState } from "react";
import bg_img from "@/public/bg_img.jpeg";
import Image from "next/image";
import { Login } from ".";
const CustomBtn = () => {
  const [state, setState] = useState("btn");

  if (state === "btn") {
    return (
      <div className='flex items-center justify-center relative '>
        <div className=' flex items-center justify-center p-10 z-20 mr-20'>
          <div className='w-48 h-48  rounded-full  border-8 border-red-400  flex items-center justify-center  '>
            <button
              onClick={() => setState("asd")}
              className='w-36 h-36 rounded-full bg-orange-500  border-8 border-orange-600 flex items-center justify-center '
            >
              Wanna talk?
            </button>
          </div>
        </div>
        <Image
          className='absolute opacity-80 h-full w-full'
          src={bg_img}
          width={1500}
          height={1500}
          alt='asd'
        />
      </div>
    );
  } else {
    return <Login />;
  }
};

export default CustomBtn;
