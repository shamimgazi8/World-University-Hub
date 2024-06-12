import React from "react";
import { IoIosCloudDone } from "react-icons/io";

const SucessMsg = () => {
  return (
    <div className=" flex items-center justify-center mt-10 ">
      <div className="bg-white p-8 rounded-xl border  w-full max-w-md text-center">
        <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
          <IoIosCloudDone className=" text-3xl text-green-400" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Success!</h1>
        <p className="text-gray-700 mb-6">
          Your submission has been successfully completed.
        </p>
        <button
          className="bg-green-500 text-white py-2 px-6 rounded-full shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          onClick={() => window.location.reload()}
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default SucessMsg;
