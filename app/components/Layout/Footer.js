"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/HPS-corelogo-a.webp";
import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import iconZalo from "../../../public/images/Logo-ZaloPay-Square.webp";
import iconMomo from "../../../public/images/Logo-MoMo-Square.png";
import useLoginModal from "@/app/hooks/useLoginModal";
export default function Footer() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const loginModal = useLoginModal();

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <footer className="w-full bg-white">
      <div className="bg-neutral-500 py-7 text-white md:px-3 md:py-14 lg:px-0">
        <nav className="grid-container md:flex md:flex-row md:flex-wrap md:items-start md:justify-between md:gap-10">
          <div className=" mb-7 flex flex-col items-center justify-center md:mb-0 md:w-full md:flex-row md:justify-start lg:w-auto lg:flex-col xl:w-full xl:flex-row 3xl:w-auto 3xl:flex-col ">
            <Image alt="logo" src={logo} height={200} width={200} />
          </div>
          <div className="hidden flex-none flex-col justify-start gap-2 px-3 md:flex md:px-0">
            <span className="font-bold">Shop</span>
            <ul>
              <li>
                <Link href={"/products"} className="md:hover:underline">
                  All plants shop
                </Link>
              </li>
            </ul>
            <span className="mt-4 font-bold">My account</span>
            <ul>
              <li>
                <p className="cursor-pointer" onClick={loginModal.onOpen}>
                  Log in
                </p>
              </li>
            </ul>
          </div>
          <div className="hidden flex-none flex-col justify-start gap-2 px-3 md:flex md:px-0">
            <span className="font-bold">Customer service</span>
            <ul className="">
              <li>
                <Link href={"/products"} className="md:hover:underline">
                  Frequently asked questions
                </Link>
              </li>
              <li>
                <Link href={"/products"} className="md:hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href={"/products"} className="md:hover:underline">
                  Payment
                </Link>
              </li>
              <li>
                <Link href={"/products"} className="md:hover:underline">
                  Transpost and delivery
                </Link>
              </li>
              <li>
                <Link href={"/products"} className="md:hover:underline">
                  Guarantee
                </Link>
              </li>
              <li>
                <Link href={"/products"} className="md:hover:underline">
                  Return policy
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden flex-none flex-col justify-start gap-2 px-3 md:flex md:px-0">
            <span class="font-bold">About PLNTS</span>
            <ul>
              <li>
                <a class="md:hover:underline" href="/en/page/giftcard">
                  Giftcard
                </a>
              </li>
              <li>
                <a class="md:hover:underline" href="/en/page/about-us">
                  About us
                </a>
              </li>
              <li>
                <a class="md:hover:underline" href="/en/page/sustainability">
                  Sustainability
                </a>
              </li>
              <li>
                <a class="md:hover:underline" href="/en/page/meet-the-creators">
                  Meet the creators
                </a>
              </li>
              <li>
                <a class="md:hover:underline" href="/en/page/b2b">
                  B2b
                </a>
              </li>
              <li>
                <a class="md:hover:underline" href="/en/page/collaborations">
                  Collaborations{" "}
                </a>
              </li>
              <li>
                <a class="md:hover:underline" href="/en/page/press">
                  Press
                </a>
              </li>
              <li>
                <a class="md:hover:underline" href="/en/page/vacatures">
                  Job opportunities
                </a>
              </li>
            </ul>
          </div>
          <Link
            className=" flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden "
            href="/products"
          >
            All Plants shop
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </Link>
          <div className="md:hidden">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className=" flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden ">
                    <span className="font-bold">Customer service</span>
                    <PlusIcon
                      className={`${
                        open ? "rotate-45" : ""
                      } inline-block w-4 transform transition-transform`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel>
                      <ul class="flex flex-col flex-nowrap justify-start gap-2 px-6 py-3">
                        <li>
                          <a
                            href="https://support.plnts.com/hc/en-us"
                            class="md:hover:underline"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Frequently asked questions
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://support.plnts.com/hc/en-us/articles/360022189760-How-can-I-contact-your-support-"
                            class="md:hover:underline"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Contact
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://support.plnts.com/hc/en-us/categories/360002925560-Payments-and-Gifts"
                            class="md:hover:underline"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Payments
                          </a>
                        </li>
                        <li>
                          <Link
                            href="https://support.plnts.com/hc/categories/360002944199-Transport-and-delivery"
                            className="md:hover:underline"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Transport and delivery
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="md:hover:underline"
                            href="/en/page/guarantee"
                          >
                            Guarantee
                          </Link>
                        </li>
                        <li>
                          <Link
                            href="https://support.plnts.com/hc/en-us/articles/360020705899-Return-Policy"
                            className="md:hover:underline"
                            target="_blank"
                            rel="noreferrer noopener"
                          >
                            Return policy
                          </Link>
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>

          <div className="md:hidden">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className=" flex w-full flex-row items-center justify-between border-t border-black/30 px-3 py-2 md:hidden ">
                    <span className="font-bold">About Plants</span>
                    <PlusIcon
                      className={`${
                        open ? "rotate-45" : ""
                      } inline-block w-4 transform transition-transform`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel>
                      <ul className="flex flex-col flex-nowrap justify-start gap-2 px-6 py-3">
                        <li>
                          <Link
                            className="md:hover:underline"
                            href="/en/page/giftcard"
                          >
                            Giftcard
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="md:hover:underline"
                            href="/en/page/about-us"
                          >
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="md:hover:underline"
                            href="/en/page/sustainability"
                          >
                            Sustainability
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="md:hover:underline"
                            href="/en/page/meet-the-creators"
                          >
                            Meet the creators
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="md:hover:underline"
                            href="/en/page/b2b"
                          >
                            B2b
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="md:hover:underline"
                            href="/en/page/collaborations"
                          >
                            Collaborations{" "}
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="md:hover:underline"
                            href="/en/page/press"
                          >
                            Press
                          </Link>
                        </li>
                        <li>
                          <Link
                            className="md:hover:underline"
                            href="/en/page/vacatures"
                          >
                            Job opportunities
                          </Link>
                        </li>
                      </ul>
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
          <p
            onClick={loginModal}
            className=" flex w-full flex-row items-center justify-between border-b border-t border-black/30 px-3 py-2 md:hidden md:hover:underline cursor-pointer"
          >
            Log in
          </p>
          <div className="flex flex-none flex-col justify-start gap-2 px-3 md:px-0">
            <div className="mt-4 flex flex-row justify-between gap-4 md:mt-0 md:flex-col">
              <div className="flex flex-col justify-start gap-1 md:gap-4">
                <span className="order-2 font-bold md:order-1">Social</span>
                <ul className=" order-1 mb-0 flex flex-row gap-4 border-b pb-2 md:order-2 md:mb-0 md:border-none md:pb-0 ">
                  <li>
                    <Link href={"#"}>
                      <BsFacebook className=" fill-current " />{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href={"#"}>
                      <BsInstagram className="fill-current " />{" "}
                    </Link>
                  </li>
                </ul>
              </div>
              <ul className=" order-1 mb-0 flex flex-row gap-4 border-b pb-2 md:order-2 md:mb-0 md:border-none md:pb-0 "></ul>
            </div>
          </div>
          <div className="flex flex-none flex-col justify-start gap-2 px-3 md:px-0">
            <form className="flex flex-col justify-start space-y-2 w-full md:w-[260px]">
              <span className="font-bold">What's the word on the street?</span>
              <p>Be part of our community by subscribing to our newsletters!</p>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                className="transition-all h-8 w-full px-4 py-2.4 xl:h-10 xl:py-3 focus:ring-0 md:focus:border-primary xl:focus:ring xl:focus:ring-inset xl:focus:ring-primary mt-4 text-black"
              />
              <button
                type="submit"
                className="cursor-pointer inline-block leading-none select-none text-center focus:outline-none transition-colors disabled:cursor-not-allowed max-h-10 px-6 py-3 relative bg-primary text-white hover:bg-primary-dark disabled:bg-primary/40 rounded-full"
              >
                Surprise me!
              </button>
            </form>
          </div>
        </nav>
      </div>
      <div className="grid-container">
        <div className="flex flex-col flex-nowrap items-start justify-between md:flex-row xl:items-center"></div>
      </div>
    </footer>
  );
}
