import Image from "next/image";
import wykres from "@/public/wykres.jpg";

import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById("first");
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className='flex flex-col w-full'>
      <Hero />

      <div className='flex flex-row h-60 w-full bg-gray-100 '>
        <div className='bg-orange-300 w-1/5 h-50 mr-3 mt-3 text-black'>
          lala
        </div>
        <div className='bg-orange-300 w-4/5 h-50 mt-3 text-black'>lala</div>
      </div>

      {/* //////////////// */}
      <div className='flex flex-row bg-gray-100 w-full h-40  '>
        <div className='flex flex-col w-1/4 h-25 border border-red-300 m-2 p-2 '>
          <h2 className='text-xl text-red-800'>lalalal</h2>
          <p className='text-sm text-black'>some data</p>
          <Image src={wykres} width={250} height={250} alt='wykres' />
        </div>
        <div className='flex flex-col w-1/4 h-25 border border-red-300 m-2 p-2 '>
          <h2 className='text-xl text-red-800'>lalalal</h2>
          <p className='text-sm text-black'>some data</p>
          <Image src={wykres} width={250} height={250} alt='wykres' />
        </div>
        <div className='flex flex-col w-1/4 h-25 border border-red-300 m-2 p-2 '>
          <h2 className='text-xl text-red-800'>lalalal</h2>
          <p className='text-sm text-black'>some data</p>
          <Image src={wykres} width={250} height={250} alt='wykres' />
        </div>
        <div className='flex flex-col w-1/4 h-25 border border-red-300 m-2 p-2 '>
          <h2 className='text-xl text-red-800'>lalalal</h2>
          <p className='text-sm text-black'>some data</p>
          <Image src={wykres} width={250} height={250} alt='wykres' />
        </div>
      </div>
      <h1 id='bottom'>bottom</h1>
    </main>
  );
}
