import Hero from "@/components/Hero";
import Component1 from "@/components/Component1";
import Component2 from "@/components/Component2";
import Chat from "@/components/Chat";

export default function Home() {
  return (
    <main className='flex flex-col w-full'>
      <Hero />

      <Chat />

      <Component1 />
      <Component2 />

      <p className='opacity-0' id='bottom'>
        bottom
      </p>
    </main>
  );
}
