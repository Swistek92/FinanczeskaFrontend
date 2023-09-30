import Image from "next/image";
import city from "@/public/city.jpg";
import wykres from "@/public/wykres.jpg";

import Link from "next/link";

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
      <div className='flex w-full relative'>
        <div className='absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2'>
          <Link href='#frist'>first</Link>
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
    </main>
  );
}
