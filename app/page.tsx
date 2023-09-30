import Image from "next/image";
import city from "@/public/city.jpg";
export default function Home() {
  return (
    <main className='flex flex-col w-full'>
      <div className='flex w-full relative'>
        <div className='absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2'>
          lala
        </div>
        <h1 className='absolute left-1/2 top-1/3 transform -translate-x-1/2 -translate-y-1/2'>
          FERNUME
        </h1>
        <Image
          className='-hue-rotate-100 w-full h-60'
          src={city}
          width={1000}
          height={1000}
          alt='city'
        />
      </div>
    </main>
  );
}
