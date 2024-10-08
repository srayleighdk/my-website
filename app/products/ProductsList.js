import ProductItem from "./ProductItem";

import imgObliqua from "./productsImage/Obliqua/pl.avif";
import imgDeliciosa from "./productsImage/Deliciosa/pl.avif";
import imgMelanochrysum from "./productsImage/Melanochrysum/pl.avif";
import imgWarocqueanum from "./productsImage/Warocqueanum/pl.avif";

import getAllProducts from "../actions/getAllProducts";

const products = [
  {
    name: "Obliqua",
    href: "#",
    price: 99,
    images: [imgObliqua],
  },
  {
    name: "Obliqua1",
    href: "#",
    price: 99,
    images: [imgDeliciosa],
  },
  {
    name: "Obliqua2",
    href: "#",
    price: 99,
    images: [imgMelanochrysum],
  },
  {
    name: "Obliqua3",
    href: "#",
    price: 99,
    images: [imgWarocqueanum],
  },
];

export default async function ProductsList() {
  const allProducts = await getAllProducts();
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 pt-4">
      {allProducts &&
        allProducts.map((product) => (
          <ProductItem
            key={product.name}
            name={product.name}
            href={`/product/${product.name}`}
            price={product.price}
            images={product.images}
          />
        ))}
    </div>
  );
}
