import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

function Header() {
  return (
    <div className="bg-white h-16 px-4 flex items-center justify-between border-b border-gray-200">
      <div className="relative">
        <HiOutlineSearch fontSize={20} className="absolute text-gray-400 top-1/2 left-3  -translate-y-1/2" />
        <input type="text" placeholder="Search" className="text-sm focus:outline-none border border-gray-300 h-10 w-[24rem] rounded-sm px-4 pl-10" />
      </div>
      <div>Side Buttons</div>
    </div>
  );
}

export default Header;
