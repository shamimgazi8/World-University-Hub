"use client";

import Breadcrumbs from "@/modules/@common/breadcrumbs";
import BlogCardTwo from "../../@components/blog-card-two";
import Skeleton from "@/modules/@common/skeleton";
const dataBreadcrumbs = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Blog",
  },
];

const BlogLandingHero = ({ data, loading }: any) => {
  const dataTop = data && data?.data?.slice(0, 5);
  return (
    <section className=" pb-[60px] pt-[42px] bg-[#F8F9FD]">
      {loading ? (
        <div className="container">
          <div className="grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-8 grid-rows-2 gap-5 lg:gap-x-[30px] lg:gap-y-[16px] pt-[25px]">
            {new Array(5).fill(1).map((_, i) => {
              const isFeature = i == 1;
              return (
                <Skeleton
                  key={i}
                  className={`self-start transition-all ${
                    isFeature ? "!mb-0 !h-[360px]" : "!mb-0 !h-[171px]"
                  } ${isFeature ? " col-span-4 row-span-2 " : "col-span-2"}`}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <div className="container">
          <Breadcrumbs data={dataBreadcrumbs} classes={{ root: "mb-3" }} />
          <div className="  grid xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-8 grid-rows-2 gap-5 lg:gap-x-[30px] lg:gap-y-[16px] pt-[25px]">
            {dataTop?.map((item: any, i: any) => {
              const isFeature = i == 1;
              return (
                <BlogCardTwo
                  key={i}
                  data={item}
                  classes={{
                    root: `self-start transition-all ${
                      isFeature
                        ? " lg:col-span-4 lg:row-span-2 "
                        : "lg:col-span-2"
                    }`,
                    imageWrapper: isFeature
                      ? "!mb-0 lg:!h-[360px] !h-[210px]  "
                      : "!mb-0 lg:!h-[171px] !h-[210px] ",
                    imageStyle: "!mb-0 !h-full object-cover",
                    category: ` text-[#3378FE] font-medium  ${
                      isFeature ? "text-c3" : "text-c5"
                    }`,
                    tag: "!hidden",
                    title: `!line-clamp-2  ${
                      isFeature
                        ? "lg:text-h2-sm text-c2  mt-2 leading-[1.2] "
                        : " text-c2 mt-[6px] !mb-0 leading-[1.28] overflow-hidden"
                    }`,
                    description: ` !hidden  ${
                      isFeature ? "  lg:!block lg:text-p3  leading-[1.6] " : ""
                    }`,
                    descStyle: " !line-clamp-2",
                    date: isFeature ? "text-p3 " : "text-p5 mt-[8px]",
                    cardBody: `bg-white   border-b-[1px] border-l-[1px] border-r-[1px] border-[#E7E7E7] p-4 rounded-b-[6px] ${
                      isFeature ? "!p-6 lg:h-[43%]" : ""
                    }`,
                  }}
                />
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default BlogLandingHero;
