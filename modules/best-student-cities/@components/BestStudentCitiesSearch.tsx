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

const BestStudentCitiesSearch = ({
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
        <input
          className={`py-[12px] px-[15px]   rounded-md w-full shadow   focus:outline-gray-300 ${
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
        <FiSearch className="absolute right-[20px] top-[50%] -translate-y-1/2 text-[#9ca3af]" />
      </div>
    </div>
  );
};

export default BestStudentCitiesSearch;
