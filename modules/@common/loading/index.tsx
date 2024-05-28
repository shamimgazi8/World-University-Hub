"use client";
import { Spin } from "antd";
import { useEffect, useState } from "react";

const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulating a 3-second loading time

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-[#f9f9f9ba] flex items-center justify-center transition-opacity ${
        loading ? "" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="text-black text-2xl font-bold">
        {" "}
        <Spin /> Loading...
      </div>
    </div>
  );
};
export default LoadingScreen;
