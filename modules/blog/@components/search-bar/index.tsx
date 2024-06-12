"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const submitHandler = (e: any) => {
    e.preventDefault();
    router.push(`/blog/search/${searchTerm}`);
    setSearchTerm("");
  };

  {
    /* <div className="rounded-md  mb-[30px] flex flex-col gap-[26px]">
          <span className="h5 mb-0">Search Here</span>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Here"
              className="w-full rounded py-3 px-4 border-[1px] border-gray-300 focus:outline-gray-300 "
            />
            <CiSearch className="text-lg absolute right-[10px] top-[50%] translate-y-[-50%]" />
          </div>
        </div> */
  }

  return (
    <div className="rounded-md  lg:mb-[30px] mb-4 flex flex-col lg:gap-[26px] gap-4">
      <span className="h5 mb-0">Search Here</span>
      <form onSubmit={submitHandler}>
        <div className="relative">
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Search..."
            className="w-full rounded py-3 px-4 border-[1px] border-gray-300 focus:outline-gray-300 "
          />
          <CiSearch className="text-lg absolute right-[10px] top-[50%] translate-y-[-50%]" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
