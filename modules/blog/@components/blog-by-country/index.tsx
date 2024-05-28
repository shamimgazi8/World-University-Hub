"use client";

import { useGetBlogByCountryQuery } from "@/appstore/blog/blog-api";
import Skeleton from "@/modules/@common/skeleton";
import { generateQueryString } from "@/helpers/utils";
import { Fragment } from "react";
import BlogCardTwo from "../blog-card-two";
import Link from "next/link";

const BlogByCountry = () => {
  const limit = 4;
  const queryParams: any = {
    limit: limit,
    countrySlugs: [
      "canada",
      "australia",
      "usa",
      "united-kingdom",
      "new-zealand",
      "ireland",
      "india",
      "sweden",
    ],
  };
  const queryString = generateQueryString(queryParams);

  const { data, isLoading, isError } = useGetBlogByCountryQuery(queryString);
  const len = data && data?.length;

  return (
    <>
      {!isError && isLoading ? (
        <section>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 pt-[60px]">
              {new Array(4).fill(1).map((_, i) => {
                return <Skeleton key={i} className={"h-[500px]"} />;
              })}
            </div>
          </div>
        </section>
      ) : (
        <>
          {len > 0 && (
            <section className=" py-[60px]">
              <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-6 lg:gap-y-[60px]">
                  {data?.map((item: any, i: any) => {
                    return (
                      <div key={i}>
                        <Link href={`/blog/category/${item?.slug}`}>
                          <h3 className="text-[26px] mb-5 line-clamp-1 hover:underline transition-all">
                            {item?.name}
                          </h3>
                        </Link>
                        <div className="flex flex-col">
                          {item?.blogs?.map((itm: any, i: any) => {
                            const isFirst = i == 0;
                            const lastItem = item?.blogs?.length - 1 === i;
                            return (
                              <Fragment key={i}>
                                <BlogCardTwo
                                  data={itm}
                                  classes={{
                                    root: isFirst
                                      ? "grid grid-cols-1 gap-[15px] mb-1"
                                      : "",
                                    imageWrapper: isFirst
                                      ? "rounded"
                                      : "!hidden",
                                    imageStyle: isFirst ? "rounded" : "",
                                    category: "hidden",
                                    tag: "hidden",
                                    title: `mb-1 lg:mb-0  text-c2 mb-0 line-clamp-2 font-medium ${
                                      isFirst ? "!mb-1" : ""
                                    }`,
                                    description: "hidden",
                                    date: ` ${
                                      isFirst ? "visible mt-2" : " hidden"
                                    }`,
                                  }}
                                />
                                {lastItem ? null : (
                                  <div className="w-full h-[1px] border-b my-[24px] border-[#DADADA]"></div>
                                )}
                              </Fragment>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default BlogByCountry;
