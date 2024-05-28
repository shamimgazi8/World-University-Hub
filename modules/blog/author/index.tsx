"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import PaginationComponent from "@/modules/@common/pagination";
import AdvertisementLeftSide from "@/modules/@common/advertisement/left_side";
import { useGetBlogByAuthorQuery } from "@/appstore/blog/blog-api";
import Skeleton from "@/modules/@common/skeleton";

import { useRouter, useSearchParams } from "next/navigation";
import BlogCard from "../@components/blog-card";
import BlogRightSide from "../@components/right-side";

const BlogAuthor = ({ data, authorSlug }: any) => {
  const router = useRouter();
  const limit = 6;
  const searchParams = useSearchParams();
  const pageFromRoute = searchParams.get("page");
  const [page, setPage] = useState<any>(pageFromRoute || 1);

  const {
    data: dataList,
    isLoading,
    isError,
  } = useGetBlogByAuthorQuery({
    page: page,
    limit: limit,
    authorSlug: authorSlug,
  });
  const len = dataList?.totalCount;
  const dataArray = dataList?.data;

  const onChange = (pageNumber: any) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    router.push(`/author/${authorSlug}?page=${page}`, { scroll: false });
  }, [page]);

  return (
    <>
      {!data?.response?.error ? (
        <>
          <section className="py-8">
            <div className="container">
              <div className="grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 lg:gap-8 items-center">
                <div className="w-[82px] h-[82px] rounded-full">
                  <Image
                    src={data?.picture || "/misc/avatar-lg.png"}
                    width={82}
                    height={82}
                    alt={data?.firstName || "Author"}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div>
                  {data?.firstName && (
                    <h1 className="h5 mb-1">
                      {data?.firstName} {data?.lastName}{" "}
                    </h1>
                  )}
                  {data?.about && <p className="mb-1 text-p4">{data?.about}</p>}
                  {data?.designation && (
                    <div className="text-p5 mb-0">{data?.designation}</div>
                  )}
                </div>
                <div>
                  <h3 className="mb-0">
                    <span className="text-gradient">{len}</span>
                  </h3>
                  <p className="mb-1 text-p4 lg:text-end">Articles</p>
                </div>
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

                  {len > limit ? (
                    <div className="mt-6 lg:mt-10">
                      <PaginationComponent
                        onChange={onChange}
                        total={len}
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
        <section>
          <div className="container">
            <div className="text-center my-10">No Data Found</div>
          </div>
        </section>
      )}
    </>
  );
};

export default BlogAuthor;
