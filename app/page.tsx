import {
  BarChart,
  Component1,
  Component2,
  DoughnutChart,
  Hero,
  Login,
} from "@/components";
import CustomBtn from "@/components/CustomBtn";

export default function Home() {
  return (
    <main className='flex flex-col w-full bg-gray-100'>
      <Hero />
      <CustomBtn />
      {/* <Login /> */}
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
