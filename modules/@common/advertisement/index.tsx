import Image from "next/image";
import React, { useState } from "react";
import { FiX } from "react-icons/fi";

interface propsTypes {
  url?: string;
  src?: string;
  width?: number;
  height?: number;
  className?: string;
}

const Advertisement = ({
  url = "https://m4yours.com",
  src = "/temp/add-home-side-bottom-m4.webp",
  width = 300,
  height = 250,
  className,
}: propsTypes) => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <div
          className={`flex justify-center mb-5 lg:mb-8 ${
            className ? className : ""
          }`}
        >
          <div className="relative">
            <button
              onClick={() => setShow(false)}
              className="absolute right-[1px] top-[1px] hover:text-secondary bg-white"
            >
              <FiX />
            </button>
            <a href={url} rel="nofollow" target="_blank">
              <Image
                alt="Advertisement"
                src={src}
                width={width}
                height={height}
              />
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Advertisement;
