"use client";
import React, { useState } from "react";
import ToolsHero from "./@components/toolsHero";
import Breadcrumbs from "@/modules/@common/breadcrumbs";
import Stepper from "./@components/Stepper";
import { generateQueryString } from "@/helpers/utils";
import { useGetUniversityCourseQuery } from "@/appstore/university/university-api";
import { useSearchParams } from "next/navigation";
import Skeleton from "@/modules/@common/skeleton";
import ResultList from "./@components/Form";

const CourseMatchingResultPage = () => {
  const searchParams = useSearchParams();
  const pageFromRoute = searchParams.get("page");
  const [queryParams, setQueryParams] = useState<any>({
    page: pageFromRoute || 1,
    limit: 10,
  });

  const queryStringload = generateQueryString(queryParams);
  const { data, isFetching: isLoading } =
    useGetUniversityCourseQuery(queryStringload);
  const dataArr = data?.results;
  const total = data && data?.total;
  const heroDescription = "0 schools and 0 programs";
  const dataBreadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: `Course Matching Tools`,
    },
  ];
  return (
    <div>
      <ToolsHero
        title="So far, you have matched…"
        shortDescription={heroDescription}
        placeholder="Search University"
        breadcrumb={<Breadcrumbs data={dataBreadcrumbs} />}
      />
      <Stepper />
      <div className=" max-w-[964px] m-auto mt-[20px] mb-[60px]">
        {total === 0 ? (
          <div> No Data Found</div>
        ) : isLoading ? (
          <div className="flex flex-col gap-2 mt-4">
            {new Array(6).fill(1).map((_, i) => {
              return <Skeleton key={i} className={"h-[180px]"} />;
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-4  ">
            {dataArr?.map((item: any, i: any) => {
              return (
                <ResultList
                  totalUniversity={total}
                  showCourse={false}
                  data={item}
                  key={i}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseMatchingResultPage;
