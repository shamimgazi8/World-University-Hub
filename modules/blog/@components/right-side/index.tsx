"use client";
import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import React, { Fragment } from "react";
import { useGetBlogQuery } from "@/appstore/blog/blog-api";
import Skeleton from "@/modules/@common/skeleton";

import BlogCardTwo from "../blog-card-two";

interface propTypes {
  id?: any;
}

const BlogRightSide = ({ id }: propTypes) => {
  const {
    data: latestData,
    isLoading,
    isError,
  } = useGetBlogQuery({
    limit: 5,
  });
  const data = latestData?.data;
  const len = latestData?.data && latestData?.data?.length;

  return (
    <div className="lg:sticky lg:top-[72px] lg:self-start overflow-auto scrollbar show_hide lg:max-h-[calc(100vh-72px)]">
      {!isError && isLoading ? (
        <>
          <div className="flex flex-col gap-5">
            {new Array(5).fill(1).map((_, i) => {
              return <Skeleton key={i} className={"h-[150px]"} />;
            })}
          </div>
        </>
      ) : (
        <>
          {len > 0 && (
            <div className="flex flex-col ">
              {data
                ?.filter((item: any) => item.id !== id)
                .map((item: any, i: number) => {
                  const isAddTrue = i == 7 || i == 0;
                  const isFirst = i == 0;
                  return (
                    <Fragment key={i}>
                      {isAddTrue ? (
                        <>
                          <AdvertisementSideSm
                            className={`!mb-2 ${i !== 0 ? "!mt-5" : ""} `}
                          />
                          <span className=" cursor-pointer mt-[40px] text-h5 font-semibold flex gap-2 items-center">
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
                        </>
                      ) : (
                        <div>
                          <BlogCardTwo
                            key={i}
                            classes={{
                              root: "gap-4",
                              imageWrapper: "hidden",
                              imageStyle: "!mb-0 !h-full object-cover",
                              category: "hidden",
                              tag: "hidden",
                              title: "text-p2 line-clamp-2 mb-0 leading-[1.28]",
                              description: "hidden",
                              extraDesc: " hidden",
                              date: "hidden",
                            }}
                            data={item}
                            isExtraDescription={isFirst ? false : true}
                          />
                        </div>
                      )}
                    </Fragment>
                  );
                })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogRightSide;
