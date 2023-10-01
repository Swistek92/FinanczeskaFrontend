import Hero from "@/components/Hero";
import Component1 from "@/components/Component1";
import Component2 from "@/components/Component2";
import Chat from "@/components/Chat";
import BarChart from "@/components/BarChart";
import { DoughnutChart } from "@/components/DoughnutChart";
import Login from "@/components/Login";

export default function Home() {
  return (
    <main className='flex flex-col w-full bg-gray-100'>
      <Hero />
      <Login />
      {/* <Chat /> */}
      <Component1 />
      <Component2 />
      <BarChart />
      <DoughnutChart />
      <p className='opacity-0' id='bottom'>
        bottom
      </p>
    </main>
  );
}
