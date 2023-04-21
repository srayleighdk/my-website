"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import CarouselSlider from "./components/Carousel/Carousel";
import CardComponents from "./components/Card/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <CarouselSlider />
      <CardComponents />
    </main>
  );
}
