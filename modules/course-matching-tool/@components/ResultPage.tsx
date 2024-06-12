import DataNotFound from "@/modules/@common/loading/dataNotFound";
import { Skeleton } from "antd";
import React, { useEffect } from "react";
import ResultList from "./resultListForm";
import { useGetAllUniversitiesBySearchQuery } from "@/appstore/university/university-api";

const ResultPage = ({ queryStringload }: any) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // This effect runs only once after the component mounts
  const { data, isFetching: isLoading } =
    useGetAllUniversitiesBySearchQuery(queryStringload);
  const dataArr = data?.results;
  const total = data && data?.total;
  return (
    <div className=" max-w-[964px] m-auto mt-[20px] mb-[60px]">
      {total === 0 ? (
        <div>
          <DataNotFound />
        </div>
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
  );
};

export default ResultPage;
