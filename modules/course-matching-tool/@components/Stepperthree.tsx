import React from "react";
import { FaCheck } from "react-icons/fa";

const Stepperthree = () => {
  return (
    <div className="container mt-8">
      <div className="flex items-center lg:flex-row flex-col lg:gap-0 gap-5 justify-evenly relative">
        <div className="flex flex-col items-center">
          <div className="lg:w-[80px] lg:h-[80px] w-[40px] flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full">
            {/* <span className=" text-[32px]  font-bold">02</span> */}
            <FaCheck className="lg:text-[32px] text-[40px] lg:p-0 p-2 font-bold" />
          </div>
          <span className="text-sm font-semibold mt-4">STUDY PREFERENCE</span>
        </div>
        <div className="h-[1px] lg:block hidden bg-gray-200  w-[52%] -z-50 absolute translate-y-[-14px]"></div>
        <div className="flex flex-col items-center">
          <div className="lg:w-[80px] lg:h-[80px] w-[40px] flex items-center justify-center bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full">
            {/* <span className=" text-[32px]  font-bold">02</span> */}
            <FaCheck className="lg:text-[32px] text-[40px] lg:p-0 p-2 font-bold" />
          </div>
          <span className="text-sm mt-4 font-semibold">ACADEMIC PROFILE</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center">
            <div className="lg:w-[80px] lg:h-[80px] w-[40px] flex items-center justify-center bg-gradient-to-r from-green-500 to-green-400 text-white rounded-full">
              {/* <span className=" text-[32px]  font-bold">02</span> */}
              <FaCheck className="lg:text-[32px] text-[40px] lg:p-0 p-2 font-bold" />
            </div>
            <span className="text-sm mt-4 font-semibold">ACADEMIC PROFILE</span>
          </div>
          <span className="text-sm mt-4 font-semibold">RESULTS</span>
        </div>
      </div>
    </div>
  );
};

export default Stepperthree;
