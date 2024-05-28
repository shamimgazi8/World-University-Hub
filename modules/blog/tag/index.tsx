"use client";

import { useState, useEffect } from "react";
import PaginationComponent from "@/modules/@common/pagination";
import BlogCard from "../@components/blog-card";
import AdvertisementLeftSide from "@/modules/@common/advertisement/left_side";
import { useGetBlogByTagQuery } from "@/appstore/blog/blog-api";
import Skeleton from "@/modules/@common/skeleton";
import BlogRightSide from "../@components/right-side";
import { useRouter, useSearchParams } from "next/navigation";

interface propTypes {
  data: any;
  tagSlug: string;
  total: any;
}

const BlogTag = ({ data, tagSlug, total }: propTypes) => {
  const dataSingle = data && data[0];
  const tagName = dataSingle?.tags?.find((item: any) => item.slug == tagSlug);
  const router = useRouter();
  const limit = 6;
  const searchParams = useSearchParams();
  const pageFromRoute = searchParams.get("page");
  const [page, setPage] = useState<any>(pageFromRoute || 1);

  const {
    data: tagData,
    isLoading,
    isError,
  } = useGetBlogByTagQuery({
    page: page,
    limit: limit,
    tag: tagSlug,
  });
  const dataArray = tagData?.data;

  const onChange = (pageNumber: any) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    router.push(`/blog/tag/${tagSlug}?page=${page}`, { scroll: false });
  }, [page]);

  return (
    <>
      {data && data?.length > 0 ? (
        <>
          <section
            className={`py-6 lg:py-[60px] mb-6 lg:mb-10 bg-gradient-to-b from-primary-light to-secondary-light`}
          >
            <div className="container">
              <div className={`flex flex-col max-w-[640px] w-full mx-auto`}>
                <p className="text-p2 text-center mb-1">Tag</p>
                <h1 className="text-center h3 capitalize mb-0">
                  {tagName?.name}
                </h1>
              </div>
            </div>
          </section>

          <section>
            <div className="container">
              <div className="grid lg:grid-cols-[190px_1fr_300px] gap-[30px]">
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
                        return (
                          <BlogCard
                            key={i}
                            data={item}
                            classes={{
                              root: "grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-[15px] items-center",
                              imageWrapper: "!mb-0 rounded-md",
                              imageStyle: "rounded-md",
                              category:
                                "block text-tertiary font-medium decoration-1 hover:underline hover:underline-offset-2 hover:text-tertiary",
                              tag: "hidden",
                              title: "h5 line-clamp-2 my-[10px] font-semibold",
                              description:
                                "lg:!block mb-0 font-normal leading-[26px]",
                              descStyle: "line-clamp-3",
                              date: "hidden ",
                            }}
                          />
                        );
                      })}
                    </div>
                  )}

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

                {/* right side */}
                <BlogRightSide />
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          <section>
            <div className="container">
              <div className="text-center my-10">No Data Found</div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default BlogTag;
