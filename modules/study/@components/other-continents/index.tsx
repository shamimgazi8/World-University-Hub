"use client";

import { useGetRegionQuery } from "@/appstore/country/country-api";
import { excerpt, generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import Image from "next/image";
import Link from "next/link";
import CountryCard from "../country-card";
import { HiArrowRight } from "react-icons/hi";

interface propTypes {
  title?: string;
  classes?: any;
  data?: any;
  withCountries?: any;
  regionSlug?: string;
}

const OtherContinents = ({
  withCountries = true,
  title = "Choose a continent",
  classes,
  regionSlug,
}: propTypes) => {
  const countryLimit = 5;
  const queryParams: any = {
    withCountries: withCountries,
    // topCountries: true,
    countryLimit,
  };
  const queryString = generateQueryString(queryParams);

  const { data, isLoading, isError } = useGetRegionQuery(queryString);
  const dataArr = data?.data;

  const filteredArr = regionSlug
    ? dataArr?.filter((item: any) => item.slug !== regionSlug)
    : dataArr;

  return (
    <>
      {!isError && isLoading ? (
        <section className={`${classes?.root ? classes.root : ""}`}>
          <div className="container">
            <div className="max-w-[864px] mx-auto">
              <h2 className="h3 text-center mb-5 lg:mb-8">{title}</h2>
              <div className="flex flex-col gap-6 lg:gap-10">
                {new Array(6).fill(1).map((_, i) => {
                  return (
                    <div className="rounded-lg text-center" key={i}>
                      <div className="mb-4">
                        {new Array(1).fill(1).map((_, i) => {
                          return <Skeleton key={i} className={"h-[200px]"} />;
                        })}
                      </div>

                      <div className="max-w-[200px] mx-auto mb-4">
                        {new Array(1).fill(1).map((_, i) => {
                          return <Skeleton key={i} className={"h-[50px]"} />;
                        })}
                      </div>

                      <div className=" mb-8">
                        {new Array(1).fill(1).map((_, i) => {
                          return <Skeleton key={i} className={"h-[80px]"} />;
                        })}
                      </div>

                      <div
                        className={
                          "max-w-[864px] mx-auto flex items-center justify-center  gap-4"
                        }
                      >
                        {new Array(5).fill(1).map((_, i) => {
                          return (
                            <Skeleton key={i} className={"h-[180px] w-full"} />
                          );
                        })}
                      </div>

                      {/* {item?.length > 3 && (
                        <Link
                          href={`/study-abroad/${item?.slug}`}
                          className="font-medium inline-flex flex-col text-sm pt-6 group/countrylink"
                        >
                          <span className="group-hover/countrylink:text-gradient">
                            View All Country
                          </span>
                          <span className="w-full h-[2px] inline-block invisible bg-gradient-to-r from-primary to-secondary group-hover/countrylink:visible"></span>
                        </Link>
                      )} */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {filteredArr && filteredArr?.length > 0 && (
            <section className={`${classes?.root ? classes.root : ""}`}>
              <div className="container">
                <div className=" mx-auto">
                  <div className="max-w-[752px] mb-[30px]">
                    <h3 className="mb-2">
                      Check Other
                      <span className="text-gradient"> Continent</span>
                    </h3>
                    <p>
                      We're here to support you through all stages of the
                      university journey; whether its researching institutions,
                      navigating admissions or submitting your application.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-[30px]">
                    {filteredArr?.map((item: any, i: any) => {
                      const len = item?.countries?.length;
                      return (
                        <>
                          <div>
                            <div className="mb-4">
                              <Link
                                href={`/study-abroad/${item?.slug}`}
                                className="group "
                              >
                                <div className="w-full h-[326px]">
                                  <Image
                                    src={
                                      item?.featuredImage ||
                                      "/misc/placeholder-continent.webp"
                                    }
                                    alt={item?.name}
                                    width={417}
                                    height={326}
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                </div>
                              </Link>
                            </div>
                            <div>
                              {item?.name && (
                                <h3 className="h5 mb-0 text-center">
                                  <span className="group-hover:text-gradient transition-all">
                                    {item?.name}
                                  </span>
                                </h3>
                              )}
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default OtherContinents;
