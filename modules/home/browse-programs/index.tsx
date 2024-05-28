"use client";
import React from "react";
import ProgramsCard from "../@components/programs-card";
import { useGetSpecializationQuery } from "../../../appstore/specialization/specialization-api";
import { generateQueryString } from "../../../helpers/utils";
import Skeleton from "@/modules/@common/skeleton";

const browseProgramData = [
  {
    iconSrc: "/temp/business.png",
    title: "Business",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/fine-arts.png",
    title: "Fine Arts",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/low.png",
    title: "Law",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/computer-science.png",
    title: "Computer Science",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/business.png",
    title: "Business",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/fine-arts.png",
    title: "Fine Arts",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/business.png",
    title: "Business",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/computer-science.png",
    title: "Computer Science",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/business.png",
    title: "Business",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/fine-arts.png",
    title: "Fine Arts",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/computer-science.png",
    title: "Computer Science",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/fine-arts.png",
    title: "Fine Arts",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/low.png",
    title: "Law",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/computer-science.png",
    title: "Computer Science",
    subTitle: "200 Courses",
  },

  {
    iconSrc: "/temp/fine-arts.png",
    title: "Fine Arts",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/low.png",
    title: "Law",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/fine-arts.png",
    title: "Fine Arts",
    subTitle: "200 Courses",
  },
  {
    iconSrc: "/temp/low.png",
    title: "Law",
    subTitle: "200 Courses",
  },
];
const BrowsePrograms = () => {
  const queryParams: any = {
    limit: 6,
  };
  const queryString = generateQueryString(queryParams);

  const { data, isLoading, isError } = useGetSpecializationQuery(queryString);
  const dataArr = data && data?.data;
  const len = dataArr && dataArr?.length;

  const maxWidth = () => {
    if (len == 1) {
      return "sm:max-w-[305px] grid-cols-1";
    } else if (len == 2) {
      return "sm:max-w-[676px] grid-cols-1 sm:grid-cols-2";
    } else if (len == 3) {
      return "lg:max-w-[1014px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    } else if (len == 4) {
      return "lg:max-w-[1350px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    } else if (len == 5) {
      return "lg:max-w-[1350px] grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5";
    } else if (len > 5) {
      return "xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6";
    }
  };

  return (
    <>
      {isLoading && !isError ? (
        <>
          <section className="bg-grey pt-8 lg:pt-[60px] px-[30px] mb-8 lg:mb-[80px]">
            <div className="max-w-[500px] mx-auto mb-6 lg:mb-10">
              <Skeleton className={"h-[50px]"} />
            </div>
            <div className="grid grid-cols-5 gap-[30px]">
              {new Array(5).fill(1).map((_, i) => {
                return <Skeleton key={i} className={"h-[94px]"} />;
              })}
            </div>
          </section>
        </>
      ) : (
        <>
          <section className="bg-grey pt-8 lg:pt-[60px] px-[30px] mb-8 lg:mb-[80px]">
            <h2 className="text-center h3 mb-6 lg:mb-10">Browse Programs</h2>
            {/* <div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-6  gap-4 lg:gap-[30px]"> */}
            <div className={`grid  ${maxWidth()} gap-4 lg:gap-[30px] mx-auto`}>
              {dataArr?.map((item: any, i: any) => {
                return <ProgramsCard data={item} key={i} />;
              })}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default BrowsePrograms;
