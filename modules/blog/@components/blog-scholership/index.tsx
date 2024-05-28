"use client";
import React from "react";
import BlogCardTwo from "../blog-card-two";
import Skeleton from "@/modules/@common/skeleton";
import Link from "next/link";
import { generateQueryString } from "@/helpers/utils";
import { useGetBlogByCategoryQuery } from "@/appstore/blog/blog-api";
interface propTypes {
  id?: any;
  data?: any;
  loading?: any;
}

const BlogScholership = ({ data, loading }: propTypes) => {
  const excludedIds: any = [];
  const dataScholership = data?.data && data?.data?.slice(0, 3);
  dataScholership?.map((item: any, i: any) => {
    return excludedIds.push(item?.id);
  });
  const excludedIdstr = excludedIds?.toString();
  const queryParamsScholershipLatest: any = {
    category: "scholarships",
    excludeBlogIds: excludedIdstr,
  };
  const queryStringLatest = generateQueryString(queryParamsScholershipLatest);
  const { data: scholershipsLatestData } =
    useGetBlogByCategoryQuery(queryStringLatest);
  const len = dataScholership?.length;
  return (
    <section className=" bg-[#F8F9FD] py-[60px]">
      <div className=" container ">
        <Link href="/blog/category/scholarships">
          <h1 className=" text-h3-md mb-0 hover:underline">Scholarship</h1>
        </Link>
        {loading ? (
          <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-8 grid-rows-2 gap-5 lg:gap-x-[30px] lg:gap-y-[16px] pt-[25px]">
            {new Array(4).fill(1).map((_, i) => {
              const isFeature = i == 1;
              const isThired = i == 2;
              return (
                <Skeleton
                  key={i}
                  className={`self-start transition-all ${
                    isFeature
                      ? "!mb-0 !h-[360px]"
                      : isThired
                      ? "h-full w-[250px]"
                      : "!mb-0 !h-[171px]"
                  } ${
                    isFeature
                      ? " col-span-4 row-span-2 "
                      : isThired
                      ? "row-span-2"
                      : "col-span-2"
                  }`}
                />
              );
            })}
          </div>
        ) : (
          <div className=" grid lg:grid-cols-[1fr_305px] gap-[30px]">
            <div>
              {" "}
              <div className=" grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-12 grid-rows-2 gap-5 lg:gap-x-[30px] lg:gap-y-[16px] pt-[32px]">
                {dataScholership?.map((item: any, i: any) => {
                  const isFeature = i == 0;
                  return (
                    <BlogCardTwo
                      key={i}
                      data={item}
                      classes={{
                        root: `self-start ${
                          isFeature ? " col-span-8 row-span-2 " : "col-span-4"
                        }`,
                        imageWrapper: isFeature
                          ? "!mb-0 !h-[360px]"
                          : "!mb-0 !h-[171px]",
                        imageStyle: "!mb-0 !h-full object-cover",
                        category: ` text-[#3378FE] font-medium  ${
                          isFeature ? "text-c3" : "text-c5"
                        }`,
                        tag: "!hidden",
                        title: `!line-clamp-2 leading-[1.3]    ${
                          isFeature
                            ? "lg:text-h2-sm text-c2 !mb-4 mt-2 "
                            : " lg:text-c2  text-c3  mt-[8px] !mb-0"
                        }`,
                        description: isFeature
                          ? " lg:text-p3 text-p4 mb-4 line-clamp-2"
                          : "hidden",
                        date: isFeature
                          ? "text-p3"
                          : "lg:text-p5 text-[8px] mt-2 ",
                        cardBody: `bg-white  border-b-[1px] border-l-[1px] border-r-[1px] border-[#E7E7E7] p-4 rounded-b-[6px] ${
                          isFeature ? "!p-6" : ""
                        }`,
                      }}
                    />
                  );
                })}
              </div>
            </div>
            <div className=" ">
              <span className=" cursor-pointer mt-[25px] text-h5 font-semibold flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="19"
                  viewBox="0 0 18 19"
                  fill="none"
                >
                  <path
                    d="M0.999999 1.64776L9 9.49966L1 17.3516"
                    stroke="url(#paint0_linear_2696_4401)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.33337 1.64776L16.3334 9.49966L8.33337 17.3516"
                    stroke="url(#paint1_linear_2696_4401)"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_2696_4401"
                      x1="1"
                      y1="9.49966"
                      x2="9"
                      y2="9.49966"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#A965E9" />
                      <stop offset="1" stop-color="#3B5AEF" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_2696_4401"
                      x1="8.33337"
                      y1="9.49966"
                      x2="16.3334"
                      y2="9.49966"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#A965E9" />
                      <stop offset="1" stop-color="#3B5AEF" />
                    </linearGradient>
                  </defs>
                </svg>
                Letest
              </span>
              <div className="lg:sticky lg:top-[72px] lg:self-start ">
                {
                  <>
                    {len > 0 && (
                      <div className="flex flex-col mt-[21px] ">
                        {scholershipsLatestData?.data
                          ?.slice(0, 7)
                          ?.map((item: any, i: number) => {
                            const isFirst = i == 0;
                            return (
                              <div key={i}>
                                <div>
                                  <BlogCardTwo
                                    key={i}
                                    classes={{
                                      root: "gap-4",
                                      imageWrapper: "hidden",
                                      category: "hidden",
                                      tag: "hidden",
                                      title:
                                        "text-p2 line-clamp-2 mb-0 leading-[1.28]",
                                      description: "hidden",
                                      extraDesc: " hidden",
                                      date: "hidden",
                                    }}
                                    data={item}
                                    isExtraDescription={isFirst ? false : true}
                                  />
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    )}
                  </>
                }
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogScholership;
