import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/HPS-corelogo-black.png";

const Logo = () => {
  return (
    <span className="flex flex-row items-center justify-start gap-4">
      <span className="w-[23px] leading-[0] lg:hidden">
        <button aria-label="open the main site menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22.931"
            height="21.46"
            viewBox="0 0 22.931 21.46"
          >
            <g
              fill="none"
              stroke="#000"
              strokeLinecap="round"
              strokeWidth="1.5"
            >
              <path d="M.75.75h21.431"></path>
              <path d="M.75 10.255h21.431"></path>
              <path d="M.75 20.71h21.431"></path>
            </g>
          </svg>
        </button>
      </span>
      <Link href={"/"} aria-label="iXanh homepage">
        <Image
          alt="Logo"
          className="hidden md:block cursor-pointer text-black"
          height={100}
          width={100}
          src={logo}
        />
      </Link>
    </span>
  );
};

export default Logo;
