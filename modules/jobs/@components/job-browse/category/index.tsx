import { useGetRegionQuery } from "@/appstore/country/country-api";
import { useGetSpecializationQuery } from "@/appstore/specialization/specialization-api";
import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import Link from "next/link";
import React from "react";

const JobCategory = () => {
  const countryLimit = 5;
  const queryParams: any = {
    withChild: true,
    page: 1,
    limit: 10,
  };
  const queryString = generateQueryString(queryParams);
  const { data, isLoading, isError } = useGetSpecializationQuery(queryString);

  return (
    <>
      {isLoading && !isError ? (
        <div className="bg-white">
          <div className="gap-[15px] p-4 ">
            <div className="mb-[15px] h-[280px]">
              {new Array(11).fill(1).map((_, i) => {
                return (
                  <Skeleton key={i} className={"h-[20px] rounded-lg mb-2"} />
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white">
          <div className="gap-[15px] p-4 columns-3">
            {data?.data?.map((item: any, i: any) => {
              return (
                <div key={i} className="mb-[15px]">
                  <Link
                    href={`/jobs/search?keyword=${item?.slug}`}
                    className="mb-0 font-medium text-heading"
                  >
                    {item?.name}
                  </Link>

                  <ul className="flex flex-col gap-1">
                    {item?.children
                      ?.slice(0, 5)
                      ?.map((country: any, i: any) => {
                        return (
                          <li key={i}>
                            <Link
                              href={`/jobs/search?keyword=${country?.slug}`}
                              className="block"
                              key={i}
                            >
                              {country?.name}
                            </Link>
                          </li>
                        );
                      })}
                    {item?.children?.length > 4 && (
                      <li key={i}>
                        <Link href="/jobs/category" className="block" key={i}>
                          More
                        </Link>
                      </li>
                    )}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default JobCategory;
