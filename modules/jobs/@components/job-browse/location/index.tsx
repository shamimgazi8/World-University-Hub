import { useGetRegionQuery } from "@/appstore/country/country-api";
import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import Link from "next/link";
import React from "react";

const JobLoaction = () => {
  const countryLimit = 5;
  const queryParams: any = {
    withCountries: true,
    countryLimit,
    page: 1,
    limit: 10,
  };
  const queryString = generateQueryString(queryParams);
  const { data, isLoading, isError } = useGetRegionQuery(queryString);

  return data?.length > 0 ? (
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
                    href={`/jobs/search?countrySlug=${item?.slug}`}
                    className="mb-0 font-medium text-heading"
                  >
                    {item?.name}
                  </Link>

                  <ul className="flex flex-col gap-1">
                    {item?.countries?.map((country: any, i: any) => {
                      return (
                        <li key={i}>
                          <Link
                            href={`/jobs/search?countrySlug=${country?.slug}`}
                            className="block"
                            key={i}
                          >
                            {country?.name}
                          </Link>
                        </li>
                      );
                    })}
                    {item?.countries?.length >= countryLimit && (
                      <li key={i}>
                        <Link
                          href={`/jobs/region/${item?.slug}`}
                          className="block"
                          key={i}
                        >
                          More...
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
  ) : (
    <div className=" p-5">No Location Found</div>
  );
};

export default JobLoaction;
