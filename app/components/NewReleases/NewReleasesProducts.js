import NewReleasesItem from "./NewReleasesItem";
import imgObliqua from "../../products/productsImage/Obliqua/pl.avif";
import imgDeliciosa from "../../products/productsImage/Deliciosa/pl.avif";
import imgMelanochrysum from "../../products/productsImage/Melanochrysum/pl.avif";
import imgWarocqueanum from "../../products/productsImage/Warocqueanum/pl.avif";

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
  {
    name: "Obliqua3",
    href: "#",
    price: 99,
    images: [imgWarocqueanum],
  },
  {
    name: "Obliqua3",
    href: "#",
    price: 99,
    images: [imgWarocqueanum],
  },
  {
    name: "Obliqua3",
    href: "#",
    price: 99,
    images: [imgWarocqueanum],
  },
];

const NewReleasesProducts = () => {
  return (
    <div className="grid grid-cols-5 gap-3 2xl:max-w-[1626px] m-auto">
      {products.map((item, index) => (
        <NewReleasesItem
          key={index}
          index={index}
          name={item.name}
          href={item.href}
          price={item.price}
          image={item.images[0]}
        />
      ))}
    </div>
  );
};

export default NewReleasesProducts;
