"use client";
import { RxDoubleArrowRight } from "react-icons/rx";
import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import React, { Fragment } from "react";
import BlogCard from "../blog-card";
import { useGetBlogQuery, useGetCategoryQuery } from "@/appstore/blog/blog-api";
import Skeleton from "@/modules/@common/skeleton";
import SearchBar from "../search-bar";
import SocialLinks from "@/modules/@common/social-links";
import BlogCardTwo from "../blog-card-two";
import { CiSearch } from "react-icons/ci";
import Link from "next/link";
const categories = [
  { name: "Study in Canada", count: 12 },
  { name: "Canadian Work Permit", count: 12 },
  { name: "Express Entry Representation", count: 12 },
  { name: "Refugee Claim Assistance", count: 12 },
  { name: "Start-Up Visa", count: 12 },
  { name: "Immigration to Canada", count: 12 },
  { name: "LMIA Application", count: 12 },
  { name: "Study in Canada", count: 12 },
];
interface propTypes {
  id?: any;
}
const CategoryItem = ({ name, count, slug }: any) => {
  return (
    <Link href={`/blog/category/${slug}`}>
      <div className="flex justify-between items-center mt-0 py-[6px] font-medium hover:bg-gradient-to-r from-[#3B5AEF] to-[#A965E9] hover:text-transparent hover:bg-clip-text cursor-pointer ">
        <p className=" mb-0 mt-0 text-h5-sm leading-[1.4]">{name}</p>
        <p className=" mb-0 mt-0 text-h5-sm"> ({count})</p>
      </div>
    </Link>
  );
};

const BlogRightSideTwo = ({ id }: propTypes) => {
  const {
    data: latestData,
    isLoading,
    isError,
  } = useGetBlogQuery({
    limit: 5,
  });

  const {
    data: catData,
    isLoading: catLoading,
    isError: catError,
  } = useGetCategoryQuery({ limit: 20 });
  const categoryData = catData?.data;
  const data = latestData?.data;
  const len = latestData?.data && latestData?.data?.length;

  return (
    <>
      <div>
        {/* <div className="rounded-md  mb-[30px] flex flex-col gap-[26px]">
          <span className="h5 mb-0">Search Here</span>
          <div className="relative">
            <input
              type="text"
              placeholder="Search Here"
              className="w-full rounded py-3 px-4 border-[1px] border-gray-300 focus:outline-gray-300 "
            />
            <CiSearch className="text-lg absolute right-[10px] top-[50%] translate-y-[-50%]" />
          </div>
        </div> */}
        <SearchBar />
        <div>
          <div className="max-w-lg mx-auto mt-8 p-6 border-[1px] border-[#DADADA] rounded-md mb-[30px]">
            <h1 className="text-lg font-bold mb-4">Categories</h1>
            <div className="space-y-2">
              {categoryData?.map((category: any, index: number) => (
                <>
                  <CategoryItem
                    key={index}
                    name={category.name}
                    slug={category.slug}
                    count={category.postCount}
                  />
                  {categoryData?.length > index + 1 && (
                    <div className=" !mb-[8px] w-full h-[1px] bg-[#DADADA]"></div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
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
                                root: "grid grid-cols-[132px_1fr] gap-4",
                                imageWrapper: "!h-[75px] !w-[132px]",
                                imageStyle: "!mb-0 !h-full object-cover",
                                category: "hidden",
                                tag: "hidden",
                                title: "text-p2 line-clamp-2 mb-[8px]",
                                description: "hidden",
                                extraDesc: " hidden",
                                date: "text-c5",
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
    </>
  );
};

export default BlogRightSideTwo;
