"use client";

import { useState } from "react";
import Link from "next/link";

import { generateQueryString } from "@/helpers/utils";
import SearchLocationJob from "./location";

const SearchJob = () => {
  const [queryParams, setQueryParams] = useState<any>({
    keyword: "",
    countrySlug: "",
  });
  const queryString = generateQueryString(queryParams);

  return (
    <div className="grid lg:grid-cols-[1fr_1fr_auto] gap-[15px] lg:bg-[#fff] py-[10px] px-4 rounded-full">
      <div>
        <input
          onChange={(e) => {
            setQueryParams((prev: any) => ({
              ...prev,
              keyword: e.target.value,
            }));
          }}
          type="text"
          placeholder="Job Title, Keywords or Company Name "
          className="w-full  py-3 px-4  focus:outline-none bg-[#FFF] rounded-full"
        />
      </div>

      <SearchLocationJob
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />

      <Link
        href={`jobs/search${queryString}`}
        className="btn rounded-full btn-primary w-full  py-1 px-5 "
      >
        Search
      </Link>
    </div>
  );
};

export default SearchJob;
