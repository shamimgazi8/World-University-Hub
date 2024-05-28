"use client";

import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import { useGetBlogByGroupQuery } from "@/appstore/blog/blog-api";
import Skeleton from "@/modules/@common/skeleton";
import BlogGroupSegment from "./group-segment";

const BlogByGroup = () => {
  const { data, isLoading, isError } = useGetBlogByGroupQuery({});
  const len = data && data?.length;

  return (
    <>
      {!isError && isLoading ? (
        <section>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {new Array(8).fill(1).map((_, i) => {
                return <Skeleton key={i} className={"h-[500px]"} />;
              })}
            </div>
          </div>
        </section>
      ) : (
        <>
          {len > 0 && (
            <section>
              <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-[30px]">
                  <div>
                    {data?.map((item: any, i: number) => {
                      return (
                        <div key={i} className="mb-10 lg:mb-[60px]">
                          <BlogGroupSegment data={item} groupIndex={i} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="sticky self-start lg:top-[70px]">
                    <AdvertisementSideSm />
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

export default BlogByGroup;
