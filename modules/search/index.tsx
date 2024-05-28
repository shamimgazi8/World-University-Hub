"use client";

import { useState } from "react";
import Link from "next/link";
import SearchLevel from "./level";
import SearchLocation from "./location";
import SearchSubject from "./subject";
import { generateQueryString } from "@/helpers/utils";

const Search = () => {
  const [queryParams, setQueryParams] = useState<any>({
    courseLevel: "",
    courseSpecialization: "",
    countrySlug: "",
  });
  const queryString = generateQueryString(queryParams);
  console.log({ queryString });

  return (
    <div className="grid lg:grid-cols-[1fr_1fr_auto] gap-[15px]  lg:bg-[#F2F3F4] bg-white py-[10px] px-4 rounded-full  w-full ">
      {/* <SearchLevel queryParams={queryParams} setQueryParams={setQueryParams} /> */}
      {/* <SearchSubject
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      /> */}
      <SearchLocation
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
      <div className=" rounded">
        <input
          type="text"
          placeholder="Enter Course, University or Exam"
          className="w-full rounded-[32px] py-3 px-4  focus:outline-none bg-[#F2F3F4] "
        />
      </div>

      <Link
        href={`/search${queryString}`}
        className="btn rounded-full btn-primary w-full  py-1 px-5 "
      >
        Search
      </Link>
    </div>
  );
};

export default Search;
