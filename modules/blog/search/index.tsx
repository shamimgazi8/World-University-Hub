"use client";

import AdvertisementLeftSide from "@/modules/@common/advertisement/left_side";
import Link from "next/link";
import { useState, useEffect } from "react";
import BlogCard from "../@components/blog-card";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetBlogBySearchQuery } from "@/appstore/blog/blog-api";
import Skeleton from "@/modules/@common/skeleton";
import BlogRightSide from "../@components/right-side";
import SearchBar from "../@components/search-bar";
import PaginationComponent from "@/modules/@common/pagination";

interface propTypes {
  data: any;
  searchSlug: string;
  total: any;
}

const BlogSearch = ({ data, searchSlug, total }: propTypes) => {
  const router = useRouter();
  const limit = 5;
  const searchParams = useSearchParams();
  const pageFromRoute = searchParams.get("page");
  const [page, setPage] = useState<any>(pageFromRoute || 1);

  const {
    data: searchData,
    isLoading,
    isError,
  } = useGetBlogBySearchQuery({
    page: page,
    limit: limit,
    searchKeyword: searchSlug,
  });
  const dataArray = searchData?.data;

  const onChange = (pageNumber: any) => {
    setPage(pageNumber);
  };

  useEffect(() => {
    router.push(`/blog/search/${searchSlug}?page=${page}`, { scroll: false });
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
                <h1 className="text-center h3 capitalize mb-2">{searchSlug}</h1>
                <p className="text-p2 text-center mb-0">{total} result found</p>
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
                              imageStyle:
                                "!mb-0 !h-full object-cover rounded-md",
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
              <div className="flex flex-col justify-center max-w-[500px] mx-auto w-full">
                <SearchBar />
                <div className="text-center font-medium">
                  <Link className="btn btn-primary rounded" href={"/blog"}>
                    Back to Blog
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default BlogSearch;
