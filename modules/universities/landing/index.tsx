"use client";

import { useState, useEffect } from "react";
import PaginationComponent from "@/modules/@common/pagination";
import Skeleton from "@/modules/@common/skeleton";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import UniversityCard from "../@components/university-card";
import {
  useGetRegionForUniQuery,
  useGetUniversitiesQuery,
} from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import UniversityLandingFilters from "./filters";
import CountryCardLatest from "../@components/country-card-latest";
import { useGetCountriesQuery } from "@/appstore/global/global-api";
import { useGetRegionQuery } from "@/appstore/country/country-api";

const UniversityLanding = () => {
  const router = useRouter();
  const limit = 3;
  const uniLimit = 8;
  const searchParams = useSearchParams();
  const pageFromRoute = searchParams.get("page");
  const [page, setPage] = useState<any>(pageFromRoute || 1);

  const [queryParams, setQueryParams] = useState({
    page: page,
    limit: limit,
  });

  const queryString = generateQueryString(queryParams);
  const { data, isLoading, isError } = useGetCountriesQuery(queryString);
  const dataArray = data?.data;
  const total: any = data?.totalCount;

  const onChange = (pageNumber: any) => {
    setPage(pageNumber);
    setQueryParams((prev: any) => ({ ...prev, page: pageNumber }));
  };

  const countryLimit = 8;
  const regionQueryParams: any = {
    withCountries: true,
    // topCountries: true,
    countryLimit,
  };

  const regionQueryString = generateQueryString(regionQueryParams);

  const {
    data: regionData,
    isLoading: isRegionLoading,
    isError: isRegionError,
  } = useGetRegionForUniQuery(regionQueryString);

  const dataArr = regionData?.data;

  // useEffect(() => {
  //   router.push(`/universities${queryString}`, { scroll: false });
  // }, [queryParams]);

  return (
    <>
      <section className="bg-gradient-to-b from-primary-light to-secondary-light pt-8 pb-8 lg:pt-[60px] lg:pb-[70px]">
        <div className="container">
          <div className="wrapper-small text-center">
            <h2 className="h3 text-center">Explore University</h2>
            <p className="mb-0">
              There’s a perfect university out there for every student. And
              we’re here to help you find yours. World University Hub brings
              together universities and institutions from major study abroad
              destinations to a single place - right here! Explore the options
              available to you, using our intuitive filters to shortlist the
              study abroad choices best matching your requirements. Our
              AI-powered search engine helps you turn hours of unproductive
              research into a matter of minutes, with precise, personalised
              results to give you that definitive head start toward your dream
              university.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {isLoading && !isError ? (
            <div className="mt-5 lg:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
              {new Array(12).fill(1).map((_, i) => {
                return <Skeleton key={i} className={"h-[400px]"} />;
              })}
            </div>
          ) : (
            <>
              <div className="h-[40px]"></div>
              {/* <UniversityLandingFilters setQueryParams={setQueryParams} /> */}
              {total == 0 ? (
                <div className="text-center py-10">No data found</div>
              ) : (
                <div className="flex flex-col gap-7 lg:gap-[50px]">
                  {dataArr?.map((item: any, i: number) => {
                    return (
                      <div key={i}>
                        <div className="flex flex-col lg:flex-row justify-between items-center">
                          <h2 className="h4">
                            {item?.name}
                            <span className="ml-2 font-normal text-body inline-block text-p3">
                              {`( ${item?._count?.universities} ${
                                item?._count?.universities > 1
                                  ? "Universities "
                                  : "University "
                              })`}
                            </span>
                          </h2>
                          {item?._count?.universities > uniLimit ? (
                            <Link
                              href={`/${item?.slug}-universities` || "#"}
                              className="btn btn-primary rounded"
                            >
                              View All Universities
                            </Link>
                          ) : null}
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[30px]">
                          {item?.countries?.map((uni: any, i: number) => {
                            const formatedData = {
                              ...uni,
                              country: {
                                name: item?.name,
                                slug: item?.slug,
                              },
                            };
                            return (
                              <CountryCardLatest data={formatedData} key={i} />
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
          {/* 
          {total > limit ? (
            <div className="mt-6 lg:mt-10">
              <PaginationComponent
                onChange={onChange}
                total={total}
                page={page}
                limit={limit}
              />
            </div>
          ) : null} */}
        </div>
      </section>
    </>
  );
};

export default UniversityLanding;
