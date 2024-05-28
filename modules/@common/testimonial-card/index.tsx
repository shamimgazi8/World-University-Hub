"use client";
import { htmlParse, remove_tags } from "@/helpers/utils";
import { Popover } from "antd";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";

interface propTypes {
  classes?: {
    root?: string;
    overlay?: string;
  };
  data?: any;
}

const TestimonialCard = ({ classes, data }: propTypes) => {
  const text = data?.message && remove_tags(data?.message);
  const textLength = text?.length;
  const [more, setMore] = useState(false);
  useEffect(() => {
    if (textLength > 180) {
      setMore(true);
    } else {
      setMore(false);
    }
  }, [textLength]);

  const yellowStar = parseInt(data.rating);
  const greyStar = 5 - data.rating;

  return (
    <div
      className={`flex flex-col bg-white rounded-lg p-6 h-full relative ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div className="top-[100%] left-0 z-40 w-[30px] h-[30px] absolute bg-white clip-path mt-[-8px] "></div>
      <div className="flex items-center gap-4 mb-4">
        <div className="w-[52px] h-[52px]">
          <Image
            src={`${data?.picture}`}
            width={52}
            height={52}
            alt="Testimonial"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <div>
          <div className="text-lg text-black font-semibold">{data?.name}</div>
          <div className="text-sm">{data?.country}</div>
        </div>
      </div>
      <div
        className={`text-lg font-normal mb-1 ${
          more ? "line-clamp-[3] lg:line-clamp-[5]" : ""
        }`}
      >
        {htmlParse(data?.message)}
      </div>
      <>
        {more && (
          <Popover
            placement="top"
            title={false}
            content={
              <div className="max-w-[320px] px-2 py-1">
                {htmlParse(data?.message)}
              </div>
            }
            trigger="click"
          >
            <span className="cursor-pointer text-primary hover:text-gradient transition-all ">
              Read More
            </span>
          </Popover>
        )}
      </>
      <div className="flex items-center gap-1 mt-auto pt-5">
        {new Array(yellowStar).fill(1).map((_, i) => {
          return <MdOutlineStar key={i} className="text-lg text-[#FFB636] " />;
        })}
        {new Array(greyStar).fill(1).map((_, i) => {
          return <MdOutlineStar key={i} className="text-lg text-[#FFB636]" />;
        })}
      </div>
    </div>
  );
};

export default TestimonialCard;
