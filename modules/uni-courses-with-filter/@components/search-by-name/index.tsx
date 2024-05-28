import React from "react";
import { FiSearch } from "react-icons/fi";

interface propTypes {
  placeholder?: string;
  isLabel?: boolean;
  isBorder?: boolean;
  queryParams?: any;
  setQueryParams?: any;
  isSearchByCourseName?: any;
  isUniversity?: any;
}

const UniCoursesSearchByName = ({
  placeholder,
  isLabel,
  isBorder,
  queryParams,
  setQueryParams,
  isUniversity = true,
}: propTypes) => {
  return (
    <div>
      {isLabel ? (
        <label className="mb-1 block font-medium">
          Search by {isUniversity ? "University" : "Course"} Title
        </label>
      ) : null}
      <div className="relative">
        <FiSearch className="absolute left-[12px] top-[50%] -translate-y-1/2 text-[#9ca3af]" />

        <input
          className={`py-3 pl-9 pr-4 rounded-md w-full ${
            isBorder ? "border" : ""
          }`}
          type="text"
          placeholder={placeholder ?? "Search"}
          onChange={(e) =>
            setQueryParams((prev: any) => ({
              ...prev,
              ...(isUniversity
                ? { searchKeyword: e.target.value }
                : { courseSearchKeyword: e.target.value }),
            }))
          }
          value={
            isUniversity
              ? queryParams?.searchKeyword
                ? queryParams?.searchKeyword
                : ""
              : queryParams?.courseSearchKeyword
              ? queryParams?.courseSearchKeyword
              : ""
          }
        />
      </div>
    </div>
  );
};

export default UniCoursesSearchByName;
