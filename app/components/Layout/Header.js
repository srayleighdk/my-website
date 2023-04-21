"use client";
import "./../../globals.css";
import { useState } from "react";
import Image from "next/image";
import logoText from "../../../public/images/new-logo.webp";
import logo from "../../../public/images/HPS-corelogo-a.webp";
import iconMenu from "../../../public/images/bars-solid.svg";
import iconCart from "../../../public/images/cart-shopping-solid.svg";
import iconXmart from "../../../public/images/xmark-solid.svg";
import BoxSearch from "../BoxSearch/BoxSearch";
export default function Header() {
  const [isDrawerOpen, setIsdrawerOpen] = useState(false);

  function handleDrawerToggle() {
    setIsdrawerOpen(!isDrawerOpen);
  }
  return (
    <div className="header">
      {/* <section> */}
      {/*   <div className="bg-primaryColor flex justify-around p-4 "> */}
      {/*     <Image src={logoText} alt="LogoText" width={150} height={150} /> */}
      {/*     <Image src={logo} alt="Logo" width={150} height={150} /> */}
      {/*   </div> */}
      {/* </section> */}
      {/* <section> */}
      {/*   <p className="bg-[#dadd28] text-[#00644b] font-semibold text-center px-1 py-2"> */}
      {/*     30% New Arrivals! Use code: NEWNEW20 | FREE Shipping on all Orders! */}
      {/*   </p> */}
      {/* </section> */}
      <section>
        <div className="bg-primaryColor flex justify-between content-center p-1 py-2">
          <button
            type="button"
            onClick={handleDrawerToggle}
            data-drawer-target="drawer-navigation"
            aria-controls="drawer-navigation"
          >
            <Image
              src={iconMenu}
              alt="Icon Menu"
              width={30}
              height={30}
              className="pl-1"
            />
          </button>
          <Image src={logo} alt="Logo" width={200} height={200} />
          <button>
            <Image
              src={iconCart}
              alt="Cart"
              width={30}
              height={30}
              className="pr-1"
            />
          </button>
        </div>
        <div className="search-box">
          <BoxSearch />
        </div>
        {isDrawerOpen && (
          <div className="fixed inset-0 z-40">
            <div
              className="fixed inset-0 bg-black opacity-50"
              onClick={() => setIsdrawerOpen(false)}
            />
            <div
              id="drawer-navigation"
              className={`fixed top-0 left-0 z-40 h-screen p-4 overflow-y-auto transition-transform ${isDrawerOpen} ? '' : '-translate-x-full'} bg-white w-80`}
              tabIndex="-1"
              aria-labelledby="drawer-navigation-label"
            >
              <h5
                id="drawer-navigation-label"
                className="font-semibold text-gray-500 uppercase"
              >
                Menu
              </h5>
              <button
                type="button"
                data-drawer-hide="drawer-navigation"
                aria-controls="drawer-navigation"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center"
                onClick={handleDrawerToggle}
              >
                <Image
                  src={iconXmart}
                  alt="xmark icon"
                  width={20}
                  height={20}
                />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <div className="w-auto" onClick={handleDrawerToggle}></div>
          </div>
        )}
      </section>
    </div>
  );
}
