import Image from "next/image";
import Link from "next/link";
import bg from "./69e397d172903c75f3db272a1183e404.avif";
const BlogTrendDIY = () => {
  return (
    <div className="relative z-0 w-full overflow-hidden bg-gray-100 h-[230px] md:h-[320px] lg:h-[628px]">
      <Image alt="Image background" fill={true} src={bg} />
      <div className="grid-container relative h-full overflow-hidden">
        <Link
          href="/blog"
          className="absolute bottom-3 left-3 w-3/4 overflow-hidden lg:left-0 xl:bottom-8"
        >
          <span className="block ">
            <span className="bg-white relative z-10 h-[32px] box-decoration-clone px-3 py-2 font-serif leading-[2.6rem] md:leading-[3rem] lg:h-[76px] lg:px-6 lg:py-4 lg:leading-[4.9rem] xl:h-24 3xl:leading-[7rem] bg-white/85 text-black/[.99] text-xl md:text-3xl lg:text-6xl 3xl:text-7xl">
              Blogs, trends, DIY's and more..
            </span>
          </span>
          <span className="block">
            <span className="bg-white relative z-10 h-[32px] box-decoration-clone px-3 py-2 font-serif leading-[2.6rem] md:leading-[3rem] lg:h-[76px] lg:px-6 lg:py-4 lg:leading-[4.9rem] xl:h-24 3xl:leading-[7rem] bg-white/85 text-black/[.99] text-xl md:text-3xl lg:text-6xl 3xl:text-7xl">
              Be inspired, learn and share!
            </span>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogTrendDIY;
