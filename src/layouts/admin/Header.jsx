import React from "react";
import { HiOutlineSearch } from "react-icons/hi";
import AvatarMenu from "../../components/client/AvatarMenu";

function Header() {
  return (
    <div className="bg-white h-20 px-8 flex items-center justify-between border-b border-gray-200 shadow-md">
      <div className="relative">
        <HiOutlineSearch
          fontSize={20}
          className="absolute text-gray-400 top-1/2 left-3  -translate-y-1/2"
        />
        <input
          type="text"
          placeholder="Search"
          className="text-sm focus:outline-none border border-gray-300 h-10 w-[24rem] rounded-sm px-4 pl-10"
        />
      </div>
      <div className="flex flex-row items-center gap-x-4">
        <div className="flex flex-col items-end">
          <h5 className="text-sm font-medium">Amrut Gawade</h5>
          <h6 className="text-xs font-medium text-end text-slate-500">
            Logged as Admin
          </h6>
        </div>

        <AvatarMenu />
      </div>
    </div>
  );
}

export default Header;
