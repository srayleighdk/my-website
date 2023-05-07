"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import logo from "../../../public/images/HPS-corelogo-a.webp";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push("/")}
      alt="Logo"
      className="hidden md:block cursor-pointer bg-blue-500"
      height={100}
      width={100}
      src={logo}
    />
  );
};

export default Logo;
