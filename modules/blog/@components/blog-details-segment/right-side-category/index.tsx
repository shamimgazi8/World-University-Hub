"use client";

import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import React, { Fragment } from "react";
import BlogCard from "../../blog-card";
import { useGetBlogByCategoryQuery } from "@/appstore/blog/blog-api";
import Skeleton from "@/modules/@common/skeleton";
import SearchBar from "../../search-bar";

interface propTypes {
  catSlug?: string;
  id?: any;
}

const BlogRightSideCategory = ({ catSlug, id }: propTypes) => {
  const {
    data: catData,
    isLoading,
    isError,
  } = useGetBlogByCategoryQuery({
    limit: 4,
    category: catSlug,
  });
  const data = catData?.data;
  const len = catData?.data && catData?.data?.length;

  return (
    <div className="lg:sticky lg:top-[72px] lg:self-start overflow-auto scrollbar show_hide max-h-[calc(100vh-72px)]">
      <SearchBar />
      <AdvertisementSideSm className={"!mb-2"} />
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
            <div className="flex flex-col gap-1.5">
              {data
                ?.filter((item: any) => item.id !== id)
                .map((item: any, i: number) => {
                  const isAddTrue = i == 3;
                  return (
                    <Fragment key={i}>
                      {isAddTrue ? (
                        <>
                          <AdvertisementSideSm className={"!mb-2 !mt-5"} />
                        </>
                      ) : (
                        <>
                          <BlogCard
                            key={i}
                            classes={{
                              root: "grid grid-cols-[110px_1fr] gap-4",
                              imageWrapper: "rounded-[2px]",
                              imageStyle: "rounded-[2px]",
                              category: "hidden",
                              tag: "hidden",
                              title: "text-p4 line-clamp-2 mb-1",
                              description: "hidden line-clamp-3",
                              extraDesc: " text-p4 leading-[24px]",
                              date: "mb-0 text-p5",
                            }}
                            data={item}
                            isExtraDescription={true}
                          />
                        </>
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

export default BlogRightSideCategory;
