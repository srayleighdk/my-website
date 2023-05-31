"use client";
import Image from "next/image";
import Link from "next/link";
import useCartStore from "@/app/hooks/useCartDrawer";
import useFromStore from "@/app/hooks/useFromStore";
import imgObliqua from "../../products/productsImage/Obliqua/pl.avif";

const cartProducts = [
  { name: "Obliqua", price: 99, images: [imgObliqua], href: "#" },
  { name: "Obliqua", price: 99, images: [imgObliqua], href: "#" },
];

const CartDrawer = () => {
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
    <div className="drawer-side">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <div className="flex h-full w-80 flex-col justify-start gap-3 bg-white">
        <h2 className="flex flex-row items-center justify-between px-3 pt-6 text-2xl xl:px-3 xl:pt-9 text-black">
          Your cart
        </h2>
        <ul className="grow touch-pan-y divide-y overflow-y-scroll px-3 xl:px-3">
          {cart?.map((item, index) => (
            <li className="py-3" key={index}>
              <div className="relative flex h-[120px] flex-row items-start justify-start gap-4">
                <div className="h-full w-[97px] flex-none">
                  <Image
                    alt={item.name}
                    height={100}
                    width={100}
                    src={item.images[0].url}
                  />
                </div>
                <div className="flex h-full grow flex-col truncate">
                  <div className="flex grow flex-row gap-2 truncate">
                    <div className="flex grow flex-col truncate">
                      <Link href={item.name}>
                        <span className="truncate text-base font-bold text-black">
                          {item.name}
                        </span>
                      </Link>
                    </div>
                    <button
                      aria-label="Remove item from cart"
                      className="h-5 w-5 flex-none"
                      onClick={() => removeFromCart(item)}
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
                  <div className="flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-1 md:flex-nowrap">
                    <div className="relative flex w-full flex-row items-center justify-between gap-1 max-w-[100px] flex-none text-sm text-black">
                      <button
                        className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed relative bg-grayish text-black hover:bg-sold-out hover:text-white disabled:bg-grayish/40 disabled:hover:text-black rounded-full w-8 h-8 max-w-8 max-h-8 overflow-hidden flex justify-center items-center h-8 w-8 flex-none leading-[0]"
                        type="button"
                        data-variant="circle_grayLight"
                        onClick={() => decrementQuantity(item)}
                      >
                        {" "}
                        -
                      </button>
                      <span className="grow text-center text-sm font-bold">
                        {item.quantity}
                      </span>
                      <button
                        className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed relative bg-grayish text-black hover:bg-sold-out hover:text-white disabled:bg-grayish/40 disabled:hover:text-black rounded-full w-8 h-8 max-w-8 max-h-8 overflow-hidden flex justify-center items-center h-8 w-8 flex-none leading-[0]"
                        type="button"
                        data-variant="circle_grayLight"
                        onClick={() => incrementQuantity(item)}
                      >
                        {" "}
                        +
                      </button>
                    </div>
                    <span className="flex flex-row items-center gap-2 text-sm text-black">
                      <span className="font-bold">${item.price}</span>
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="space-y-3 px-6 pb-6 pt-3 shadow-[0px_0_5px_rgba(0,0,0,.3)] xl:px-9 xl:pb-9">
          <svg
            className="my-3 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <div className="flex flex-row justify-between">
            <span className="text-base font-bold text-black">
              Total{" "}
              <span className="text-sm text-sold-out">(including VAT)</span>
            </span>
            <span className="text-base font-bold text-black">
              {total && total}
            </span>
          </div>
          <svg
            className="my-2 h-px w-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 1"
            preserveAspectRatio="none"
          >
            <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
          </svg>
          <Link
            href="/checkout"
            className="btn btn-circle btn-block rounded-full"
          >
            Ready to Order
          </Link>
        </div>
      </div>
    </div>
  );
};
export default CartDrawer;
