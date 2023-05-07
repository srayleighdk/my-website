"use client";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto py-2 rounded-full shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex items-center bg-gray-100 rounded-md">
        <BiSearch size={18} className="text-gray-500 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-transparent focus:outline-none rounded-full"
        />
      </div>
    </div>
  );
};

export default Search;
