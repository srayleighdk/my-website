import { CiUser, CiSearch, CiShoppingCart } from "react-icons/ci";
import useLoginModal from "@/app/hooks/useLoginModal";
import useCartStore from "@/app/hooks/useCartDrawer";
import useFromStore from "@/app/hooks/useFromStore";

const RightBarMenu = () => {
  const loginModal = useLoginModal();
  const totalItems = useFromStore(useCartStore, (state) => state.totalItems);

  return (
    <ul className="flex flex-row items-center justify-start gap-2 lg:gap-8">
      <li className="leading-[0]">
        <button
          className="w-9"
          aria-label="profile"
          onClick={loginModal.onOpen}
        >
          <CiUser size={"2em"} />
        </button>
      </li>
      <li className="leading-[0]">
        <label
          htmlFor="my-drawer-3"
          className="relative w-9 drawer-button btn btn-square btn-ghost"
        >
          <CiShoppingCart size={"2em"} />
          <span className="absolute inset-0 object-right-top">
            <span className=" -mr-6 inline-flex items-center rounded-full border-2 border-white bg-primary px-2 py-1 text-[0.6rem] font-semibold leading-none text-white lg:-mt-1 ">
              {totalItems && totalItems}
            </span>
          </span>
        </label>
      </li>
      <li className="leading-[0]">
        <button className="flex w-9" aria-label="search">
          <CiSearch size={"2em"} />
        </button>
      </li>
    </ul>
  );
};

export default RightBarMenu;
