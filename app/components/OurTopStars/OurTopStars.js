import Link from "next/link";
import ProductsList from "@/app/products/ProductsList";

const OurTopStars = () => {
  return (
    <div className="pt-10 p-2 md:px-10 lg:px-20">
      <h2 className="font-bold text-2xl text-center">Our Top Stars</h2>
      <ProductsList />
      <div className="pt-5 flex justify-center items-center">
        <Link href="/products">
          <button className=" btn btn-outline btn-sm text-black rounded-full">
            View our all plants
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurTopStars;
