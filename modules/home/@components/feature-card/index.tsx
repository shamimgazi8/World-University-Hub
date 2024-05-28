import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureCard = ({ data }: any) => {
  return (
    <Link
      href={data?.link}
      className="flex flex-col items-center bg-white p-[25px] hover:shadow-two border border-[#eee] hover:border-transparent rounded-[10px] transition-all group/feature hover:text-inherit"
    >
      <div>
        <Image
          src={data?.iconSrc}
          width={40}
          height={40}
          alt="Picture of the author"
          className="max-w-[40px] object-contain"
        />
        <div className="mt-[15px] mb-10">
          <h5 className="mb-2">
            <span className="group-hover/feature:text-gradient transition-all">
              {data?.title}
            </span>
          </h5>
          <p className="mb-0">{data?.subTitle}</p>
        </div>
      </div>
      <div className="mt-auto w-full">
        <button className="btn btn-full btn-primary-outline w-full ">
          {data?.btnText}
        </button>
      </div>
    </Link>
  );
};

export default FeatureCard;
