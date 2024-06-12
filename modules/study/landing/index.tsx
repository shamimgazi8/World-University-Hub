"use client";

import { useGetCountriesQuery } from "@/appstore/global/global-api";
import { generateQueryString } from "@/helpers/utils";
import SectionBlog from "@/modules/@common/section-blog";
import Skeleton from "@/modules/@common/skeleton";
import Image from "next/image";
import Link from "next/link";
import Continents from "../@components/continents";
import CountryHero from "./country-hero";

const StudyLanding = () => {
  const queryParams: any = {
    limit: 6,
    // topCountries: true,
  };
  const queryString = generateQueryString(queryParams);
  const { data, isLoading, isError } = useGetCountriesQuery(queryString);
  const dataArr = data?.data;

  return (
    <>
      <CountryHero />
      {isLoading && !isError ? (
        <>
          <section>
            <div className="container">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-7 mt-5">
                {new Array(6).fill(1).map((_, i) => {
                  return (
                    <div key={i} className="flex flex-col">
                      <Skeleton className={"h-[250px]"} />
                      <Skeleton className={"h-[30px] mt-4 w-9/12 mx-auto"} />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {dataArr && dataArr?.length > 0 && (
            <section className="lg:pb-[90px]">
              <div className="container">
                <h3 className="text-center mb-5 lg:mb-[30px]">
                  Top Destinations
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-7">
                  {dataArr?.map((item: any, i: any) => {
                    return (
                      <Link
                        href={`/study-abroad/${item?.region?.slug}/${item?.slug}`}
                        className="group"
                        key={i}
                      >
                        <div>
                          <Image
                            src={
                              item?.featureImage ||
                              "/misc/placeholder-country-sm.webp"
                            }
                            alt={item?.title}
                            width={200}
                            height={250}
                            className="rounded-lg object-cover w-full h-[250px]"
                          />
                        </div>
                        <h5 className="text-center mb-0 mt-[15px] font-semibold">
                          <span className="group-hover:text-gradient transition-all">
                            {item?.name}
                          </span>
                        </h5>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          )}
        </>
      )}
      <Continents />
      <SectionBlog />
    </>
  );
};

export default StudyLanding;
