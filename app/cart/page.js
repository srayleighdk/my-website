"use client";
import Link from "next/link";
import Image from "next/image";
import useCartStore from "@/app/hooks/useCartDrawer";
import useFromStore from "@/app/hooks/useFromStore";
const Cart = () => {
  const cart = useFromStore(useCartStore, (state) => state.items);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    );
  }
  return (
    <div className="grid-container grid w-full grid-cols-1 gap-3 md:grid-cols-12 xl:gap-4 px-3 md:my-5 lg:px-0">
      <h2 className="col-span-full col-start-1 mb-3 xl:col-span-10 xl:col-start-2 xl:mb-6 text-xl lg:text-4xl md:text-2xl font-bold font-serif">
        your shopping cart
      </h2>
      <section className="col-span-full col-start-1 xl:col-span-10 xl:col-start-2">
        <div className="mb-6 text-sm xl:text-base ">
          <Link href="/products">
            <button className="btn rounded-full text-black bg-white hover:bg-black hover:text-white transition">
              Continue shipping
            </button>
          </Link>
        </div>
        <table className="w-full table-fixed text-left md:table-auto">
          <thead>
            <tr className="hidden md:table-row">
              <td className="text-sm xl:text-base">Product</td>
              <td></td>
              <td className="text-sm xl:text-base">Size</td>
              <td className="w-36 text-sm xl:text-base">Quantity</td>
              <td className="text-right text-sm xl:text-base">Price</td>
              <td className="text-right text-sm xl:text-base"></td>
            </tr>
          </thead>
          <tbody>
            <tr className="hidden md:table-row">
              <td colSpan="6">
                <svg
                  className="my-2 h-px w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 1"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
                </svg>
              </td>
            </tr>
            {cart?.map((item, index) => (
              <tr className="h-full" key={index}>
                <td className="relative h-full w-full md:w-[147px]">
                  <div className="flex flex-row justify-start md:block">
                    <div className="relative h-full w-[96px] flex-none md:w-[147px]">
                      <div className="aspect-h-76 aspect-w-61 xl:aspect-h-26 xl:aspect-w-21 transform transition-transform  md:motion-safe:group-hover:scale-110">
                        <Image
                          src={item.images[0].url}
                          alt={item.name}
                          fill={true}
                        />
                      </div>
                    </div>
                    <div className=" relative flex w-full flex-col justify-between overflow-hidden pl-3 pr-4 md:hidden ">
                      <div className="flex flex-1 flex-col  justify-start">
                        <span className="truncate text-sm font-bold">
                          {item.name}
                        </span>
                        <span className="mt-2 text-sm font-bold">
                          ${item.price}
                        </span>
                      </div>
                      <div className="relative flex w-full flex-row items-center justify-between gap-1 max-w-35 text-sm">
                        <button
                          className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed relative bg-grayish text-black hover:bg-sold-out hover:text-white disabled:bg-grayish/40 disabled:hover:text-black rounded-full w-8 h-8 max-w-8 max-h-8 overflow-hidden flex justify-center items-center h-8 w-8 flex-none leading-[0]"
                          type="button"
                          data-variant="circle_grayLight"
                        >
                          {" "}
                          -
                        </button>
                        <span className="grow text-center text-sm font-bold">
                          1
                        </span>
                        <button
                          className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed relative bg-grayish text-black hover:bg-sold-out hover:text-white disabled:bg-grayish/40 disabled:hover:text-black rounded-full w-8 h-8 max-w-8 max-h-8 overflow-hidden flex justify-center items-center h-8 w-8 flex-none leading-[0]"
                          type="button"
                          data-variant="circle_grayLight"
                        >
                          {" "}
                          +
                        </button>
                      </div>
                      <div className="absolute right-0 top-0">
                        <button
                          aria-label="Remove item from cart"
                          className="h-4 w-4"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="hidden pl-3 align-top md:table-cell xl:pl-6">
                  <span className="block text-sm font-bold xl:text-3xl">
                    {item.name}
                  </span>
                </td>
                <td className="2xl:w-30 hidden align-top md:table-cell md:w-14 xl:w-17.5 xl:max-w-17.5 xl:text-2xl">
                  S
                </td>
                <td className="hidden align-top md:table-cell xl:w-35 xl:max-w-35">
                  <div className="flex w-full flex-row items-center justify-between">
                    <div className="relative flex w-full flex-row items-center justify-between gap-1 max-w-25 md:text-sm xl:text-base">
                      <button
                        className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed relative bg-grayish text-black hover:bg-sold-out hover:text-white disabled:bg-grayish/40 disabled:hover:text-black rounded-full w-8 h-8 max-w-8 max-h-8 overflow-hidden flex justify-center items-center h-8 w-8 flex-none leading-[0]"
                        type="button"
                        data-variant="circle_grayLight"
                      >
                        {" "}
                        -
                      </button>
                      <span className="grow text-center text-sm font-bold">
                        1
                      </span>
                      <button
                        className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed relative bg-grayish text-black hover:bg-sold-out hover:text-white disabled:bg-grayish/40 disabled:hover:text-black rounded-full w-8 h-8 max-w-8 max-h-8 overflow-hidden flex justify-center items-center h-8 w-8 flex-none leading-[0]"
                        type="button"
                        data-variant="circle_grayLight"
                      >
                        {" "}
                        +
                      </button>
                    </div>
                  </div>
                </td>
                <td className=" hidden text-right align-top font-bold md:table-cell md:text-sm xl:w-35 xl:max-w-35 xl:text-3xl ">
                  {item.price}
                </td>
                <td className="hidden text-right align-top md:table-cell md:w-0">
                  <button
                    aria-label="Remove item from cart"
                    className="h-4 w-4 md:-mr-6 xl:-mr-8 xl:h-6 xl:w-6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      ></path>
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="6">
                <svg
                  className="my-2 h-px w-full"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 1"
                  preserveAspectRatio="none"
                >
                  <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
                </svg>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <span className="font-bold">Order notes</span>
          <textarea
            className="h-20 w-full px-3 py-1 md:h-14 md:py-2 focus:border-primary focus:ring focus:ring-inset focus:ring-primary"
            name="order_comment"
            maxLength="200"
          ></textarea>
          <span className="mb-3 block text-sm text-sold-out">
            maximal 200 characters
          </span>
        </div>
        <svg
          className="my-3 h-px w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
        </svg>
        <div className="hidden flex-row items-center justify-between md:flex">
          <span className="text-sm font-bold xl:text-2xl">
            Total{" "}
            <span className="text-sm text-sold-out md:text-base">
              (including VAT)
            </span>
          </span>
          <span className="text-sm font-bold xl:text-3xl">${total}</span>
        </div>
        <div className="mt-3 w-full text-center">
          <Link href="/checkout">
            {" "}
            <button
              className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed max-h-10 px-6 py-3 relative bg-primary text-white hover:bg-primary-dark disabled:bg-primary/40 rounded-full"
              type="button"
              data-variant="rounded_yellow"
            >
              {" "}
              Continue to order
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Cart;
