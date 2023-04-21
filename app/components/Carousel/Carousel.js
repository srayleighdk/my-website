"use client";
import "./../../globals.css";
import Image from "next/image";
import { Carousel, Button } from "flowbite-react";
import slide1 from "../../../public/images/slide1.webp";
import slide2 from "../../../public/images/slide2.webp";

const theme = {
  root: {
    base: "relative h-full w-full",
    leftControl:
      "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
    rightControl:
      "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
      on: "bg-white dark:bg-gray-800",
    },
    base: "h-3 w-3 rounded-full",
    wrapper: "absolute bottom-5 left-1/2 flex -translate-x-1/2 space-x-3",
  },
  item: {
    base: "absolute top-1/2 left-1/2 block w-full h-full -translate-x-1/2 -translate-y-1/2",
    wrapper: "w-full flex-shrink-0 transform cursor-default snap-center",
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70 sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-none",
    snap: "snap-x",
  },
};
export default function CarouselSlider() {
  return (
    <div
      className="bg-white
      h-56 sm:h-64 xl:h-80 2xl:h-96"
    >
      <Carousel theme={theme} indicators={false}>
        <div
          style={{
            backgroundImage: `url(${slide1.src})`,
            backgroundSize: "cover",
          }}
        >
          <p className="absolute bottom-16 right-40 text-white font-bold transition-transform">
            Tropical Plants
          </p>
          <Button className="absolute bottom-2 right-[165px]">Shop now</Button>
        </div>
        <div
          style={{
            backgroundImage: `url(${slide2.src})`,
            backgroundSize: "cover",
          }}
        >
          <p className="absolute bottom-16 right-40 text-white font-bold transition-transform">
            Favorite Plants
          </p>
          <Button className="absolute bottom-2 right-[165px]">Shop now</Button>
        </div>
        <Image src={slide2} alt="slide 2" className="h-full" />
      </Carousel>
    </div>
  );
}
