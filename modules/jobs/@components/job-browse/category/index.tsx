import { useGetRegionQuery } from "@/appstore/country/country-api";
import { useGetSpecializationQuery } from "@/appstore/specialization/specialization-api";
import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

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
          <div className=" pt-[15px]  grid grid-cols-3 ">
            {data?.data?.slice(0, 8).map((item: any, i: any) => {
              return item?.children?.length > 0 ? (
                <div key={i} className="mb-[15px]">
                  <Link
                    href={`/jobs/search?keyword=${item?.slug}`}
                    className="mb-2 font-medium text-heading"
                  >
                    {item?.name}
                  </Link>

                  <ul className="flex flex-col gap-2 mt-[10px]">
                    {item?.children
                      ?.slice(0, 3)
                      ?.map((country: any, i: any) => {
                        return (
                          <li key={i}>
                            <Link
                              href={`/jobs/search?keyword=${country?.slug}`}
                              className="flex items-center gap-2"
                              key={i}
                            >
                              <IoIosArrowForward />
                              {country?.name}
                            </Link>
                          </li>
                        );
                      })}
                    {item?.children?.length > 4 && (
                      <li key={i}>
                        <button className="block  text-gradient" key={i}>
                          More
                        </button>
                      </li>
                    )}
                  </ul>
                </div>
              ) : (
                ""
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default JobCategory;
