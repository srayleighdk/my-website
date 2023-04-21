"use client";
import "./../../globals.css";
import { useState } from "react";
import iconGlass from "../../../public/images/glass-solid.svg";
import Image from "next/image";

const BoxSearch = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    // handle search logic here
    e.preventDefault();
    console.log(`Searching for ${searchText}`);
  };

  return (
    <div className="bg-primaryColor px-1 pb-3">
      <div className="relative">
        <input
          type="text"
          name="search"
          id="search"
          className="bg-white text-black h-10 focus:ring-indigo-500 focus:border-indigo-500 block w-full pr-12 sm:text-sm border-gray-300 rounded"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          type="button"
          className="bg-[#f8ba8c] h-10 pt-1 absolute inset-y-0 right-0 flex items-center px-[14px] py-2 border border-transparent rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          onClick={handleSearch}
        >
          <Image src={iconGlass} width={20} height={20} alt="Icon Glass" />
        </button>
      </div>
    </div>
  );
};

export default BoxSearch;
