"use client";

import Logo from "./Logo";
import RightBarMenu from "./RightBarMenu";

const Navbar = ({ currentUser }) => {
  return (
    <div className="sticky top-0 z-[60] bg-white shadow">
      <div className="grid-container flex flex-nowrap items-center justify-between gap-2 px-3 py-2 md:px-0 md:py-3">
        <Logo />
        {/* <UserMenu currentUser={currentUser} /> */}
        <RightBarMenu currentUser={currentUser} />
      </div>
      <svg
        className="hidden lg:block h-px w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 1"
        preserveAspectRatio="none"
      >
        <path d="M0,0 100,0" stroke="#707070" strokeWidth="1"></path>
      </svg>
    </div>
  );
};
export default Navbar;
