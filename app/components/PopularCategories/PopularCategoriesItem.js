import Image from "next/image";
import Link from "next/link";
import image1 from "./image/6eabf5652d4f1bcf7ae405d476aecc00.avif";
import image2 from "./image/75a42a03b785a9cf34a9cbd694f5b009.avif";
import image3 from "./image/9d479e09f41991c03013253fe0086f21.avif";
import image4 from "./image/c2e0680e70d71830848884c3920a56c3.avif";

const ListView = [
  {
    image: image1,
    label: "Houseplants",
  },
  {
    image: image2,
    label: "Pots",
  },
  {
    image: image3,
    label: "Accessories",
  },
  {
    image: image4,
    label: "Care",
  },
];

const PopularCategoriesItem = () => {
  return ListView.map((item, index) => (
    <div
      key={index}
      className="group relative z-0 w-full overflow-hidden bg-gray-100"
    >
      <Image
        src={item.image}
        alt="image"
        height={500}
        width={500}
        className="transform transition-transform md:motion-safe:group-hover:scale-110"
      />
      <Link
        href="#"
        className="absolute flex inset-0 h-full w-full flex-col flex-nowrap justify-end overflow-hidden p-3"
      >
        <span className="flex-none">
          <span className="px-2 py-1 font-serif text-xs sm:py-2 sm:text-base xl:text-xl bg-white text-black/[.99] box-decoration-clone leading-[1.4] sm:leading[2.3rem] xl:leading-[2.6rem]">
            {item.label}
          </span>
        </span>
      </Link>
    </div>
  ));
};

export default PopularCategoriesItem;
