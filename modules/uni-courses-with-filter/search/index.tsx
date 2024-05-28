"use client";

import { useEffect, useState } from "react";
import { useGetAllUniversitiesQuery } from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import UniCourseCard from "@/modules/@common/uni-course-card";
import PaginationComponent from "@/modules/@common/pagination";
import UniCoursesHero from "../@components/hero";
import UniCoursesFilter from "../@components/filters";

const Search = () => {
  const limit = 10;
  const [page, setPage] = useState<any>(1);
  const [queryParams, setQueryParams] = useState<any>({
    uniPage: page,
    uniLimit: limit,
    courseLimit: 3,
  });

  const queryString = generateQueryString(queryParams);
  const {
    data,
    isError,
    isFetching: isLoading,
  } = useGetAllUniversitiesQuery(queryString);
  const dataArr = data?.data;
  const total = data && data?.totalCount;

  const onChange = (pageNumber: any) => {
    setPage(pageNumber);
    setQueryParams((prev: any) => ({ ...prev, uniPage: pageNumber }));
  };

  return (
    <div>
      <UniCoursesHero />
      <UniCoursesFilter
        queryParams={queryParams}
        setQueryParams={setQueryParams}
      />
      <section>
        <div className="container">
          <div className="wrapper-small">
            {!isError && isLoading ? (
              <div className="flex flex-col gap-2 mt-4">
                {new Array(6).fill(1).map((_, i) => {
                  return <Skeleton key={i} className={"h-[180px]"} />;
                })}
              </div>
            ) : (
              <>
                {total > 0 ? (
                  <>
                    <div className="mb-5">
                      We found <span className="font-bold">{total}</span>{" "}
                      results for you
                    </div>
                    <div>
                      <div className="flex flex-col gap-4">
                        {dataArr?.map((item: any, i: any) => {
                          return <UniCourseCard data={item} key={i} />;
                        })}
                      </div>
                      {total > limit ? (
                        <div className="mt-6 lg:mt-10">
                          <PaginationComponent
                            onChange={onChange}
                            total={total}
                            page={page}
                            limit={limit}
                          />
                        </div>
                      ) : null}
                    </div>
                  </>
                ) : (
                  <div>No Data Found</div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
