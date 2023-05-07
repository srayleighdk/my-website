"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

const SidebarItem = ({ label, href, icon: Icon }) => {
  const router = useRouter();
  return (
    <Link href={href} className="flex flex-row items-center">
      <div className="relative rounded-full h-14 w-14 flex items-center justify-center p-4 hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer lg:hidden">
        <Icon size={28} color="black" />
      </div>
      <div className="relative hidden lg:flex items-center gap-4 p-4 rounded-full hover:bg-slate-300 hover:bg-opacity-10 cursor-pointer">
        <Icon size={24} color="black" />
        <p className="hidden lg:block text-black text-xl">{label}</p>
      </div>
    </Link>
  );
};

export default SidebarItem;
