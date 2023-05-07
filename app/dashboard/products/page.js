import Link from "next/link";

const Product = () => {
  return (
    <div>
      <Link
        className="bg-blue-500 py-1 px-2 rounded-md"
        href={"/dashboard/products/new"}
      >
        Add new product
      </Link>
    </div>
  );
};
export default Product;
