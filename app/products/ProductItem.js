"use client";
import Image from "next/image";
import Link from "next/link";
const ProductItem = ({ name, href, images, price }) => {
  return (
    <div className="flex flex-col items-center rounded-lg justify-center shadow-lg hover:shadow-cyan-500/50 cursor-pointer transition">
      <Image
        src={images[0]}
        width={500}
        height={500}
        alt={`Image for ${name}`}
      />
      <p className="font-extrabold">{name}</p>
      <p className="font-semibold">${price}</p>
    </div>
  );
};

export default ProductItem;
