"use client";

import { useGetBlogQuery } from "@/appstore/blog/blog-api";
import BlogCard from "@/modules/blog/@components/blog-card";
import Slider from "react-slick";
import Skeleton from "../skeleton";
import BlogCardTwo from "@/modules/blog/@components/blog-card-two";

interface propTypes {
  classes?: {
    root?: string;
    title?: string;
  };
  title?: string;
}

const SectionBlog = ({ classes, title = "Blogs" }: propTypes) => {
  const { data: blogData, isLoading, isError } = useGetBlogQuery({ limit: 15 });
  const data = blogData?.data;
  const len = blogData?.data && blogData?.data?.length;

  const maxWidth = () => {
    if (len == 1) {
      return "sm:max-w-[400px] grid-cols-1";
    } else if (len == 2) {
      return "sm:max-w-[800px] grid-cols-1 sm:grid-cols-2";
    } else if (len == 3) {
      return "lg:max-w-[1200px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    } else {
      return "lg:max-w-[1310px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }
  };

  const settings = {
    dots: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1380,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
          dots: false,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      {!isError && isLoading ? (
        <section>
          <div className="grid grid-cols-3 lg:grid-cols-5 gap-6">
            {new Array(5).fill(1).map((_, i) => {
              return <Skeleton key={i} className={"h-[350px]"} />;
            })}
          </div>
        </section>
      ) : (
        <>
          {len > 0 && (
            <section
              className={`pb-5 lg:pb-[120px] overflow-hidden bg-white ${
                classes?.root ? classes.root : ""
              }`}
            >
              <div className="lg:px-5">
                <h2
                  className={`text-center mb-5 lg:mb-10 ${
                    classes?.title ? classes?.title : ""
                  }`}
                >
                  {title}
                </h2>
                {len > 100 ? (
                  <Slider className="section_blog" {...settings}>
                    {data?.map((item: any, i: any) => {
                      return (
                        <BlogCardTwo
                          key={i}
                          classes={{
                            root: "grid grid-cols-1 gap-[15px] px-[15px] transition-all",
                            imageWrapper: "w-full rounded-md mb-[15px]",
                            imageStyle: "rounded-md",
                            category: "hidden",
                            tag: "block text-p4 font-medium",
                            title:
                              "h5 line-clamp-2 mb-[10px] font-semibold leading-[30px]",
                            description: "line-clamp-3 mb-0 text-black hidden",
                            date: "mb-0 hidden",
                          }}
                          data={item}
                        />
                      );
                    })}
                  </Slider>
                ) : (
                  <div className="container">
                    <div
                      className={`  grid gap-5 lg:gap-[30px] ${maxWidth()} mx-auto`}
                    >
                      {data?.slice(0, 3)?.map((item: any, i: any) => {
                        return (
                          <BlogCardTwo
                            key={i}
                            classes={{
                              imageWrapper: "!mb-0 !h-[235px]",
                              imageStyle: "!mb-0 !h-full object-cover",
                              category: ` text-[#3378FE] font-medium text-c3`,
                              tag: "!hidden",
                              title: `hover:text-gradient !line-clamp-2  text-h5 py-[8px] !mb-0 leading-[1.4]`,
                              description: "line-clamp-2 text-p3 leading-[1.6]",
                              date: "text-p5",
                              cardBody: `flex flex-col bg-white  border-b-[1px] border-l-[1px] border-r-[1px] border-[#E7E7E7] p-4 rounded-b-[6px] `,
                            }}
                            data={item}
                          />
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default SectionBlog;
