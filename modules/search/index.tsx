"use client";
import { useState } from "react";
import Link from "next/link";
import { generateQueryString } from "@/helpers/utils";
import SearchSpecialization from "./location";
import Searchloction from "./location/indexTwo";

const Search = () => {
  const [input, setinput] = useState("");
  const [queryParams, setQueryParams] = useState<any>({
    courseLevel: "",
    courseSpecialization: "",
    countrySlug: "",
  });
  const queryString = generateQueryString(queryParams);

  return (
    <div className="grid lg:grid-cols-[1fr_1fr_auto] gap-[15px]  lg:bg-[#F2F3F4] bg-[#ffffff05] py-[10px] px-4 rounded-full  w-full  border-[#ffffff92] border-[8px] ">
      <SearchSpecialization
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
      <div className=" rounded">
        <Searchloction
          queryParams={queryParams}
          setQueryParams={setQueryParams}
        />
      </div>

      <Link
        href={`/programs/search${queryString}`}
        className="btn rounded-full btn-primary w-full  lg:py-1 lg:px-5 p-2 "
      >
        Search
      </Link>
    </div>
  );
};

export default Search;
