"use client";

import { AiOutlineMenu, AiOutlineShoppingCart } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import useRentModal from "@/app/hooks/useRentModal";

import { signOut } from "next-auth/react";

const UserMenu = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = useCallback(() => {
    router.push("/dashboard");
    setIsOpen((value) => !value);
  }, [isOpen]);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  });

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    rentModal.onOpen();
  }, [currentUser, loginModal, rentModal]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={onRent}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          iXanh your home
        </div>
        <div className="relative">
          <AiOutlineShoppingCart />
          <span className="absolute inset-0 object-right-top">
            <span className=" -mr-6 inline-flex items-center rounded-full border-2 border-white bg-yellow-500 px-2 py-1 text-[0.6rem] font-semibold leading-none text-white lg:-mt-1 ">
              1
            </span>
          </span>
        </div>
        <div
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar src={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={handleClick} label="Dash Board" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="Login" />
                <MenuItem onClick={registerModal.onOpen} label="Signup" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
