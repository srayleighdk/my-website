import Link from "next/link";
import Image from "next/image";
const ImageProduct = ({ images }) => {
  return (
    <>
      <div className="hidden md:col-span-1 md:col-start-1 md:block lg:col-span-1 lg:col-start-2">
        <div>
          {images.map((item, index) => (
            <a href={`#item${index + 1}`}>
              <Image alt="Image" src={item.url} width={100} height={100} />
            </a>
          ))}
        </div>
      </div>
      <div className="col-span-full md:col-span-4 md:col-start-2 lg:col-span-4 lg:col-start-3">
        <div className="carousel w-full">
          {images.map((item, index) => (
            <div id={`item${index + 1}`} className="carousel-item w-full">
              <Image
                className="w-full"
                src={item.url}
                height={500}
                width={500}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ImageProduct;
