"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const InsightIcons = ({ data }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const onMouseEnterHandler = () => {
    setIsHovered(true);
  };
  const onMouseLeaveHandler = () => {
    setIsHovered(false);
  };
  return (
    <Link
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      href={data?.link}
      className="btn rounded hover:bg-gradient-to-l from-primary to-secondary flex justify-start items-center shrink-0 gap-[10px] bg-white hover:text-white transition-all w-full"
    >
      <Image
        src={isHovered ? data?.iconWhite : data?.iconColor}
        width={22}
        height={22}
        alt={data?.title}
        className="w-[22px] h-[22px]"
      />
      <span className="text-lg font-medium">{data?.title}</span>
    </Link>
  );
};

export default InsightIcons;
