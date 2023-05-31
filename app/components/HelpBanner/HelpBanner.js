"use client";
import Image from "next/image";
import avatar from "./EMMA-small.avif";
import { Button } from "flowbite-react";
const HelpBanner = () => {
  return (
    <div className="w-full bg-amber-400 px-3 py-4 md:px-0 md:py-10">
      <div className="grid-container grid w-full grid-cols-1 gap-3 md:grid-cols-12 xl:gap-4">
        <section className=" col-span-full flex flex-row flex-nowrap items-center justify-center [&>div]:ml-3 [&>div]:flex [&>div]:flex-col [&>div]:flex-nowrap [&>div]:items-start [&>div]:justify-start [&>div]:gap-2 [&>div]:md:ml-[40px] [&>div]:md:gap-4 [&>div]:lg:ml-[100px] [&>div]:lg:gap-6 [&_h2]:font-sans [&_h2]:text-sm [&_h2]:font-bold [&_h2]:text-white [&_h2]:md:text-2xl [&_h2]:lg:text-3xl ">
          <div className=" relative h-[100px] w-[100px] flex-none overflow-hidden rounded-full md:h-[200px] md:w-[200px] ">
            <Image fill={true} alt="avatar" src={avatar} />
          </div>
          <div>
            <h2>Hi, I am Emma, your iXanh.com guide!</h2>
            <Button pill={true}>Can I help you?</Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HelpBanner;
