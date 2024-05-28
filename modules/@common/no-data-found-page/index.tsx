import React from "react";

const NoDataFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 13h6m2 0a2 2 0 110 4H7a2 2 0 110-4h10zm-6-8h6m2 0a2 2 0 110 4H7a2 2 0 110-4h10zm-6 8h6m2 0a2 2 0 110 4H7a2 2 0 110-4h10z"
          />
        </svg>
        <h1 className="mt-2 text-2xl font-bold text-gray-900">No Data Found</h1>
        <p className="mt-1 text-sm text-gray-600">
          Sorry, we couldn't find any data for your request.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow-md hover:from-purple-500 hover:to-pink-500 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Retry
        </button>
      </div>
    </div>
  );
};

export default NoDataFound;
