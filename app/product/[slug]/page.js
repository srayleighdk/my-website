import ProductDetail from "../ProductDetail";
import ImageProduct from "../ImageProduct";
import getProductByName from "@/app/actions/getProductByName";

export default async function Product({ params }) {
  const { slug } = params;
  console.log(slug);
  const product = await getProductByName(slug);
  console.log(product);
  return (
    <div className="mx-auto max-w-[120rem]">
      <section className="py-2 md:bg-white md:py-4 md:text-sm">
        <div className="grid-container px-3 lg:px-0">
          <div className="text-sm breadcrumbs">
            <ul>
              <li>
                <a>All Plants</a>
              </li>
              <li>
                <a>Obliqua</a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="grid-container grid w-full grid-cols-1 gap-3 md:grid-cols-12 xl:gap-4 pt-0 md:pt-3 lg:pt-6 mb-3 md:mb-10 md:px-3 lg:px-0">
        <ImageProduct images={product.images} />
        <ProductDetail product={product} />
      </div>
    </div>
  );
}
