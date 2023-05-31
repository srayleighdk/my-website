import Link from "next/link";
import Image from "next/image";
const NewReleasesItem = ({ name, href, image, price, index }) => {
  console.log(index);
  return (
    <div
      className={`relative overflow-hidden md:transform md:transition-all cursor-pointer ${
        index === 0 ? "col-span-2 row-span-2" : ""
      }`}
    >
      <Link href={href} className="group relative flex flex-col justify-start">
        <div
          className={`${
            index === 0
              ? "aspect-h-493 aspect-w-345 lg:aspect-h-490 xl:aspect-h-486 2xl:aspect-h-484 3xl:aspect-h-471"
              : "aspect-h-305 aspect-w-246"
          }  bg-gray-100 transform transition-transform md:motion-safe:group-hover:scale-110`}
        >
          <Image
            className="object-cover"
            alt={name}
            height={500}
            width={500}
            src={image}
          />
          {index === 0 ? (
            <div className="absolute z-10 flex flex-col flex-nowrap justify-end p-3 lg:p-6">
              <span className="flex flex-none flex-row justify-center items-center relative whitespace-nowrap z-10 bg-white/85 text-black md:flex font-serif h-12 px-3 text-4xl box-tiny max-w-full truncate">
                {name}
              </span>
              <span className="flex flex-none flex-row justify-center items-center relative whitespace-nowrap z-10 bg-white/85 text-black md:flex font-serif h-12 px-3 text-4xl box-tiny max-w-full truncate">
                {name}
              </span>
              <span className="flex flex-none flex-row justify-center items-center relative whitespace-nowrap z-10 bg-black text-white md:flex font-serif h-12 px-3 md:text-4xl box-tiny lg:h-[76px] lg:font-serif text-sm lg:text-6xl">
                <span className="flex flex-row items-center gap-2">
                  ${price}
                </span>
              </span>
            </div>
          ) : null}
        </div>
        <button></button>
        {index != 0 ? (
          <section className="flex grow flex-col justify-start lg:mt-2 lg:justify-between ">
            <span className="truncate m-0 font-sans text-sm font-bold leading-tight 3xl:text-base">
              {name}
            </span>
            <span className="text-sm italic leading-none lg:text-base 3xl:text-base">
              {name}
            </span>
            <span className="flex flex-row items-center gap-2 text-sm leading-tight 3xl:text-base">
              <span className="font-bold">${price}</span>
            </span>
          </section>
        ) : null}
      </Link>
    </div>
  );
};

export default NewReleasesItem;
