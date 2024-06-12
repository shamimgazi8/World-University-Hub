"use client";

import Link from "next/link";
import Skeleton from "@/modules/@common/skeleton";
import { useGetBlogByTrendingQuery } from "@/appstore/blog/blog-api";
import moment from "moment";

const TopTrendingBlog = () => {
  const { data, isLoading, isError } = useGetBlogByTrendingQuery({ limit: 10 });
  const len = data && data?.length;

  return (
    <>
      {!isError && isLoading ? (
        <section>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {new Array(10).fill(1).map((_, i) => {
                return <Skeleton key={i} className={"h-[90px]"} />;
              })}
            </div>
          </div>
        </section>
      ) : (
        <>
          {len > 0 && (
            <section className="pt-8 lg:pt-[60px] bg-grey mb-8 lg:mb-[80px]">
              <div className="container">
                <div className="max-w-[860px] w-full mx-auto">
                  <h1 className="text-center mb-8 lg:mb-[40px] h4">
                    Top Trending Blogs
                  </h1>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-5">
                    {data?.map((item: any, i: number) => {
                      return (
                        <Link
                          key={i}
                          title={item?.title}
                          href={`/blog/${item?.slug}`}
                          className="group/featuredblog border-b flex items-center pb-5 gap-5"
                        >
                          <span className="font-normal mb-0 text-gradient h2">
                            {i < 9 && "0"}
                            {i + 1}
                          </span>
                          <h3 className="text-p1 font-semibold mb-0 line-clamp-2">
                            <span className="group-hover/featuredblog:text-gradient transition-all">
                              {item?.title}
                            </span>
                          </h3>
                        </Link>
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

export default TopTrendingBlog;
