import React from "react";
import { PiCloudXFill } from "react-icons/pi";

const DataNotFound = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center ">
      <PiCloudXFill className=" text-[100px] text-red-500" />
      <h1 className="text-3xl font-bold text-gray-800">
        Whoops! Nothing found here.
      </h1>
      <p className="text-lg text-gray-600 mb-8">
        We couldn't find any data matching your search. Try refining your search
        terms or browsing other categories.
      </p>
    </div>
  );
};

export default DataNotFound;
