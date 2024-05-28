"use client";

import { useState, useEffect } from "react";
import AdvertisementLeftSide from "@/modules/@common/advertisement/left_side";
import { useGetBlogByCategoryQuery } from "@/appstore/blog/blog-api";
import PaginationComponent from "@/modules/@common/pagination";
import Skeleton from "@/modules/@common/skeleton";
import BlogRightSide from "../../@components/right-side";
import { useRouter, useSearchParams } from "next/navigation";
import { generateQueryString } from "@/helpers/utils";
import BlogCardTwo from "../../@components/blog-card-two";

interface propTypes {
  catSlug?: any;
  total?: any;
  excludeBlogIds?: any;
  catName?: any;
}

const BlogCatList = ({
  catSlug,
  total,
  excludeBlogIds,
  catName,
}: propTypes) => {
  const router = useRouter();
  const limit = 6;
  const searchParams = useSearchParams();
  const pageFromRoute = searchParams.get("page");
  const [page, setPage] = useState<any>(pageFromRoute || 1);

  const queryParams: any = {
    page: page,
    limit: limit,
    category: catSlug,
    excludeBlogIds: excludeBlogIds,
  };
  const queryString = generateQueryString(queryParams);

  const {
    data: categoryData,
    isLoading,
    isError,
  } = useGetBlogByCategoryQuery(queryString);
  const dataArray = categoryData?.data;

  const onChange = (pageNumber: any) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    if (total > limit) {
      router.push(`/blog/category/${catSlug}?page=${page}`, { scroll: false });
    }
  }, [page]);

  return (
    <section>
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_640px_305px] gap-[30px]">
          <div>
            <AdvertisementLeftSide />
          </div>

          <div>
            {!isError && isLoading ? (
              <div className="flex flex-col gap-5 lg:gap-8">
                {new Array(10).fill(1).map((_, i) => {
                  return <Skeleton key={i} className={"h-[300px]"} />;
                })}
              </div>
            ) : (
              <div className="flex flex-col gap-5 lg:gap-[30px]">
                {dataArray?.map((item: any, i: any) => {
                  const correctFormat = {
                    ...item,
                    categories: [{ name: catName, slug: catSlug }],
                  };
                  return (
                    <BlogCardTwo
                      key={i}
                      data={correctFormat}
                      classes={{
                        root: "grid grid-cols-1 lg:grid-cols-[230px_1fr] gap-[15px] items-center self-start",
                        imageWrapper: "!mb-0 !h-[130px] !w-[230px]",
                        imageStyle: "object-cover",
                        category:
                          "text-c5 text-[#3378FE]    hover:underline hover:underline-offset-2 hover:text-tertiary",
                        tag: "hidden",
                        title:
                          "text-[20px] line-clamp-2 leading-[1.3] mt-[2px] mb-3 font-semibold line-clamp-2",
                        description: "lg:!block mb-0 text-p3 ",
                        descStyle: "line-clamp-2",
                        date: "hidden ",
                      }}
                    />
                  );
                })}
              </div>
            )}

            <div className="mt-6 lg:mt-10">
              {total > limit ? (
                <div className="mt-6 lg:mt-10">
                  <PaginationComponent
                    onChange={onChange}
                    total={total}
                    page={page}
                    limit={limit}
                  />
                </div>
              ) : null}
            </div>
          </div>

          {/* right side */}
          <BlogRightSide />
        </div>
      </div>
    </section>
  );
};

export default BlogCatList;
