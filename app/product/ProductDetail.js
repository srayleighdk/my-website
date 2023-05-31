"use client";
import { useState, useEffect } from "react";
import useCartStore from "../hooks/useCartDrawer";
import useFromStore from "../hooks/useFromStore";
const ProductDetail = ({ product }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);
  product.quantity = quantity;

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    product.quantity = quantity;
  };

  const handleDecrement = () => {
    if (quantity === 1) return;
    setQuantity((prevQuantity) => prevQuantity - 1);
    product.quantity = quantity;
  };

  useEffect(() => {
    setTotal(product.price * quantity);
  }, [product.price, quantity]);

  return (
    <div className="col-span-full px-3 md:col-span-7 md:col-start-6 md:px-0 lg:col-span-5 lg:col-start-7">
      <div className="flex flex-row items-center justify-between">
        <span className="truncate text-sm font-bold lg:text-4xl">
          {product.name}
        </span>
        <span className="md:hidden">
          <span className="flex flex-row items-center gap-2">
            <span className="font-bold">${product.price}</span>
          </span>
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
      <section className="flex flex-row flex-wrap justify-between">
        <h2 className="sr-only">Product options</h2>
        <div className="flex flex-col justify-start">
          <span className="text-sm font-bold">Size</span>
          <div className="flex flex-row flex-wrap justify-start gap-2 pt-2">
            <a href="#">
              <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-gray-500 text-black">
                <span>S</span>
              </span>
            </a>
            {/* <a href="#"> */}
            {/*   <span className="flex h-10 w-10 cursor-pointer select-none items-center justify-center rounded-full bg-grayish text-sold-out"> */}
            {/*     <span>M</span> */}
            {/*   </span> */}
            {/* </a> */}
          </div>
        </div>
      </section>
      <svg
        className="my-2 h-px w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
      </svg>
      <div className="grid grid-flow-row auto-rows-max grid-cols-3 gap-2">
        <div className="col-span-2 col-start-1 flex flex-row items-center justify-between">
          <span className="truncate">
            <span className="truncate font-bold md:text-sm">
              {product.name}
            </span>
          </span>
        </div>
        <div className="col-span-1 col-start-3 flex flex-row items-center justify-end">
          <span className="flex flex-row items-center gap-2 md:text-sm">
            <span className="font-bold">${total}</span>
          </span>
        </div>
        <div className="col-span-1 col-start-1 flex flex-row items-center justify-start">
          <div className="relative flex w-full flex-row items-center justify-between gap-1 w-[120px]">
            <button
              className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed relative bg-grayish text-black hover:bg-sold-out hover:text-white disabled:bg-grayish/40 disabled:hover:text-black rounded-full w-8 h-8 max-w-8 max-h-8 overflow-hidden flex justify-center items-center h-8 w-8 flex-none leading-[0]"
              type="button"
              data-variant="circle_grayLight"
              onClick={handleDecrement}
            >
              {" "}
              -
            </button>
            <span className="grow text-center text-sm font-bold">
              {product.quantity}
            </span>
            <button
              className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed relative bg-grayish text-black hover:bg-sold-out hover:text-white disabled:bg-grayish/40 disabled:hover:text-black rounded-full w-8 h-8 max-w-8 max-h-8 overflow-hidden flex justify-center items-center h-8 w-8 flex-none leading-[0]"
              type="button"
              data-variant="circle_grayLight"
              onClick={handleIncrement}
            >
              {" "}
              +
            </button>
          </div>
        </div>
        <svg
          className="col-span-full col-start-1 mb-2 h-px w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
        </svg>
      </div>
      <div className="">
        <section className="flex flex-row justify-between">
          <h2 className="sr-only">Total product price</h2>
          <span className="text-2xl font-bold">Total:</span>
          <span className="text-2xl font-bold">${total}</span>
        </section>
        <svg
          className="my-2 h-px w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
        </svg>
      </div>
      <div className="flex flex-row justify-end">
        <button
          className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed max-h-10 px-6 py-3 relative bg-primary text-white hover:bg-primary-dark disabled:bg-primary/40 rounded-full group"
          aria-label="Add to cart"
          type="button"
          data-variant="rounded_yellow"
          onClick={() => addToCart(product)}
        >
          <span className="flex h-3.2 flex-row items-center justify-start xl:h-4">
            <svg
              className="w-7 fill-current transition-transform md:motion-safe:group-hover:-rotate-12 mr-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 140 140"
            >
              <path d="M30.6,39.1l-3.2-14.3c-0.4-2.7-1.9-5.1-4.1-6.7c-1.7-1.1-3.7-1.3-5.6-0.8c-1.7,0.6-3.1,1.8-3.8,3.5 c-1.1,2.6-1.1,5.6,0.1,8.2c2.2,5.5,8.1,9.2,15,11.6l12.8,56.9h73.6l11.5-54H60.5C60.3,43.6,43.7,43.4,30.6,39.1z M15.8,28.3 c-1-2.1-1-4.5-0.2-6.6c0.5-1.1,1.4-2,2.6-2.4c0.5-0.1,0.9-0.2,1.4-0.2c0.9,0,1.9,0.2,2.6,0.7c1.8,1.2,3,3.2,3.2,5.3l3,13.2 C22.5,36.1,17.6,32.9,15.8,28.3z M113.7,95.6H43.3L31.1,41.4c13,4,28.3,4.2,29.3,4.2h63.9L113.7,95.6z"></path>
              <path d="M115.9,98.3H41.1L28.3,41.2c-8-2.9-13-6.9-15-11.9c-1.3-2.8-1.3-6-0.1-8.8c0.8-1.8,2.4-3.2,4.2-3.9c2.1-0.6,4.4-0.3,6.3,0.8 c2.5,1.6,4.1,4.2,4.5,7.2l3.1,13.9c12.9,4.2,29,4.3,29.2,4.3h67.3L115.9,98.3z M42.3,96.8h72.4l11.2-52.5H60.5 c-0.2,0-16.9-0.2-30.1-4.5L30,39.7l-3.3-14.7c-0.3-2.5-1.7-4.8-3.8-6.2c-1.5-0.9-3.3-1.2-5-0.7c-1.5,0.5-2.7,1.6-3.4,3.1 c-1,2.4-1,5.2,0.1,7.6c1.9,4.7,6.7,8.4,14.5,11.2l0.4,0.1L42.3,96.8z M114.3,96.3H42.7l-12.6-56l1.2,0.4c12.9,4,28.5,4.2,29.1,4.2 h64.8L114.3,96.3z M44,94.8h69.2l10.3-48.5h-63c-0.7,0-15.4-0.1-28.3-3.9L44,94.8z M29.4,39.5L28.1,39c-6.9-2.7-11.3-6.2-13-10.5 c-1.1-2.3-1.1-4.9-0.2-7.2c0.6-1.3,1.7-2.3,3-2.8c1.6-0.5,3.3-0.2,4.6,0.6c2,1.4,3.3,3.5,3.5,5.9L29.4,39.5z M19.6,19.8 c-0.4,0-0.8,0.1-1.2,0.2c-1,0.3-1.7,1.1-2.2,2c-0.8,1.9-0.7,4.1,0.2,6l0,0c1.4,3.6,5.1,6.7,10.9,9.1l-2.6-11.8 c-0.2-2-1.3-3.7-2.9-4.9C21.2,20.1,20.4,19.8,19.6,19.8z"></path>
              <path d="M60.5,106.3c-4.6,0-8.3,3.7-8.3,8.3s3.7,8.3,8.3,8.3s8.3-3.7,8.3-8.3C68.7,110,65,106.3,60.5,106.3z M60.5,120.9 c-3.5,0-6.3-2.8-6.3-6.3c0-3.5,2.8-6.3,6.3-6.3c3.5,0,6.3,2.8,6.3,6.3c0,0,0,0,0,0C66.8,118.1,64,120.9,60.5,120.9 C60.5,120.9,60.5,120.9,60.5,120.9L60.5,120.9z"></path>
              <path d="M60.5,123.7c-5,0-9-4-9-9s4-9,9-9s9,4,9,9S65.4,123.7,60.5,123.7z M60.5,107.1c-4.2,0-7.5,3.4-7.5,7.5 c0,4.2,3.4,7.5,7.5,7.5s7.5-3.4,7.5-7.5C68,110.5,64.6,107.1,60.5,107.1z M60.5,121.7c-3.9,0-7-3.1-7-7s3.1-7,7-7s7,3.1,7,7 S64.3,121.7,60.5,121.7z M60.5,109.1c-3.1,0-5.5,2.5-5.5,5.5c0,3.1,2.5,5.5,5.5,5.5s5.5-2.5,5.5-5.5S63.5,109.1,60.5,109.1 C60.5,109.1,60.5,109.1,60.5,109.1z"></path>
              <path d="M99.4,106.3c-4.6,0-8.3,3.7-8.3,8.3s3.7,8.3,8.3,8.3c4.6,0,8.3-3.7,8.3-8.3c0,0,0,0,0,0C107.7,110,104,106.3,99.4,106.3z  M99.4,120.9c-3.5,0-6.3-2.8-6.3-6.3s2.8-6.3,6.3-6.3c3.5,0,6.3,2.8,6.3,6.3c0,0,0,0,0,0C105.7,118.1,102.9,120.9,99.4,120.9 C99.4,120.9,99.4,120.9,99.4,120.9L99.4,120.9z"></path>
              <path d="M99.4,123.7c-5,0-9-4-9-9s4-9,9-9s9,4,9,9S104.4,123.7,99.4,123.7z M99.4,107.1c-4.2,0-7.5,3.4-7.6,7.5s3.4,7.5,7.5,7.5 c4.2,0,7.5-3.4,7.5-7.5c0,0,0,0,0,0C106.9,110.5,103.6,107.1,99.4,107.1z M99.4,121.7c-3.9,0-7-3.1-7-7s3.1-7,7-7c3.9,0,7,3.1,7,7 S103.3,121.7,99.4,121.7z M99.4,109.1c-3.1,0-5.5,2.5-5.6,5.5s2.5,5.5,5.5,5.5c3.1,0,5.5-2.5,5.5-5.5c0,0,0,0,0,0 C104.9,111.6,102.5,109.1,99.4,109.1z"></path>
            </svg>
            Add to cart
          </span>
        </button>
      </div>
      <div className="pt-4">
        <p>About this plant</p>
        <svg
          className="mb-6 mt-2 hidden md:block h-px w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 1"
          preserveAspectRatio="none"
        >
          <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
        </svg>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
