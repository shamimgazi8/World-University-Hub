import Image from "next/image";
import React from "react";

interface propTypes {
  classes?: {
    root?: string;
    overlay?: string;
  };
  data?: any;
}
const ViewCourseCard2 = ({ classes, data }: propTypes) => {
  return (
    <div
      className={`p-6 shadow-one rounded-lg bg-white ${
        classes?.root ? classes.root : ""
      }`}
    >
      <div className="mb-[15px]">
        <h3 className="text-h5 mb-2">
          Applied mathematics with specialization in computing in English
        </h3>
        <div className="flex items-center gap-2">
          <Image
            src="/images/icons/university.png"
            width={18}
            height={18}
            alt="View Course"
            className="object-contain max-w-[18px] shrink-0"
          />

          <p className="mb-0">Harvard University</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-[10px] mb-5">
        <div>
          <div className="flex items-center gap-[6px]">
            <Image
              src="/images/icons/university.png"
              width={14}
              height={14}
              alt="View Course"
              className="object-contain max-w-[18px] shrink-0	"
            />
            <p className="text-c5 mb-0">Duration</p>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="w-[14px]"></div>
            <span>18 Months</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[6px]">
            <Image
              src="/images/icons/university.png"
              width={14}
              height={14}
              alt="View Course"
              className="object-contain max-w-[18px] shrink-0	"
            />
            <p className="text-c5 mb-0">1st Year Tuition Fee</p>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="w-[14px]"></div>
            <span>$33,000</span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[6px]">
            <Image
              src="/images/icons/university.png"
              width={14}
              height={14}
              alt="View Course"
              className="object-contain max-w-[18px] shrink-0	"
            />
            <p className="text-c5 mb-0">Exam</p>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="w-[14px]"></div>
            <div className="mb-0  group relative">
              <span className="text-gradient font-medium">
                IELTS, GRE +2 more
              </span>
              <div className="absolute top-[-20px] right-0 hidden group-hover:block transition-hover">
                tooltip
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-[6px]">
            <Image
              src="/images/icons/university.png"
              width={14}
              height={14}
              alt="View Course"
              className="object-contain max-w-[18px] shrink-0	"
            />
            <p className="text-c5 mb-0">Rank</p>
          </div>
          <div className="flex items-center gap-[6px]">
            <div className="w-[14px]"></div>
            <span>125</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-[15px]">
        <button className="btn btn-primary w-full">Rate My Chances</button>
        <button className="btn btn-outline w-full">Download Brochure</button>
      </div>
    </div>
  );
};

export default ViewCourseCard2;
