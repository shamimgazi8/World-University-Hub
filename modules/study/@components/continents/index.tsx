"use client";

import { useGetRegionQuery } from "@/appstore/country/country-api";
import { excerpt, generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";
import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

interface propTypes {
  title?: string;
  classes?: any;
  data?: any;
  withCountries?: any;
  regionSlug?: string;
}

const Continents = ({
  withCountries = true,
  title = "Choose a continent",
  classes,
  regionSlug,
}: propTypes) => {
  const countryLimit = 5;
  const queryParams: any = {
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
                      Choose a Right{" "}
                      <span className="text-gradient">Continent</span>
                    </h3>
                    <p>
                      We're here to support you through all stages of the
                      university journey; whether its researching institutions,
                      navigating admissions or submitting your application.
                    </p>
                  </div>
                  <div className="flex flex-col gap-6 lg:gap-10">
                    {filteredArr?.map((item: any, i: any) => {
                      const len = item?.countries?.length;
                      return (
                        <>
                          <div className="grid lg:grid-cols-[1.565fr_1fr] items-center lg:gap-[60px] gap-[20px] group cursor-pointer ">
                            <div>
                              <Link
                                href={`/study-abroad/${item?.slug}`}
                                className="group"
                              >
                                <div className="w-full lg:h-[588px] h-[210px]">
                                  <Image
                                    src={
                                      item?.featuredImage ||
                                      "/misc/placeholder-continent.webp"
                                    }
                                    alt={item?.name}
                                    width={752}
                                    height={588}
                                    className="w-full h-full object-cover rounded-lg"
                                  />
                                </div>
                              </Link>
                            </div>
                            <div>
                              {item?.name && (
                                <h3 className="h4 ">
                                  <span className="group-hover:text-gradient transition-all">
                                    {item?.name}
                                  </span>
                                </h3>
                              )}

                              {item?.content && (
                                <div className="max-w-[640px] mx-auto line-clamp-3 mb-6">
                                  {excerpt(item?.content, 500)}
                                </div>
                              )}
                              {len > 0 && (
                                <div className="flex flex-col gap-4">
                                  {item?.countries?.map((itm: any, i: any) => {
                                    return (
                                      <div key={i}>
                                        <ul>
                                          <li className="flex items-center gap-4">
                                            <HiArrowRight className="text-lg text-secondary transition-all" />

                                            <Link
                                              href={`/study-abroad/${item?.slug}/${itm?.slug}`}
                                              className="text-p1"
                                            >
                                              {itm?.name}
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    );
                                  })}
                                  {item?.countries?.length > 4 && (
                                    <div>
                                      <Link
                                        href={`${`/study-abroad/${item?.slug}`}`}
                                        className="text-p1 text-gradient font-medium  border-b-[2px] border-primary pb-1"
                                      >
                                        Explore More
                                      </Link>
                                    </div>
                                  )}
                                </div>
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

export default Continents;
