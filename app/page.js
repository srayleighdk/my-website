import { Inter } from "next/font/google";
import CarouselSlider from "./components/Carousel/Carousel";
import OurTopStars from "./components/OurTopStars/OurTopStars";
import PopularCategories from "./components/PopularCategories/PopularCategories";
import NewReleases from "./components/NewReleases/NewReleases";
import ShipmentGuarantee from "./components/ShipmentGuarantee/ShipmentGuarantee";
import BlogTrendDIY from "./components/BlogTrendDIY/BlogTrendDIY";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="">
      <CarouselSlider />
      <OurTopStars />
      <PopularCategories />
      <NewReleases />
      <ShipmentGuarantee />
      <BlogTrendDIY />
    </main>
  );
}
