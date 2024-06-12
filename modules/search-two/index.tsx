"use client";

import { useState } from "react";
import Link from "next/link";
import SearchLevel from "./level";
import SearchLocation from "./location";
import SearchSubject from "./subject";
import { generateQueryString } from "@/helpers/utils";

const SearchTwo = () => {
  const [queryParams, setQueryParams] = useState<any>({
    courseLevel: "",
    courseSpecialization: "",
    countrySlug: "",
  });
  const queryString = generateQueryString(queryParams);

  return (
    <div className="grid lg:grid-cols-[2fr_1fr_1fr_1fr_auto] gap-[15px]">
      <div>
        <input
          type="text"
          placeholder="Where do you want to study?"
          className="w-full rounded py-3 px-4  focus:outline-none"
        />
      </div>

      <SearchLevel queryParams={queryParams} setQueryParams={setQueryParams} />
      <SearchSubject
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
      <SearchLocation
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />

      <Link
        href={`/search${queryString}`}
        className="btn rounded btn-primary w-full h-full py-3 px-5 "
      >
        Search
      </Link>
    </div>
  );
};

export default SearchTwo;
