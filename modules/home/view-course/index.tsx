"use client";
import Slider from "react-slick";
import ViewCourseCard from "../@components/view-course-card";
import { useGetCoursesQuery } from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import Skeleton from "@/modules/@common/skeleton";

interface propTypes {
  universitySlug?: string;
  classes?: {
    root?: string;
    title?: string;
  };
}

const ViewCourse = ({ universitySlug, classes }: propTypes) => {
  const limit = 12;
  const queryParams = { limit, uniSlug: universitySlug };
  const queryString = generateQueryString(queryParams);
  const { data, isLoading, isError } = useGetCoursesQuery(queryString);
  const dataArray = data?.data;
  const total = data && data?.totalCount;

  const maxWidth = () => {
    if (total == 1) {
      return "sm:max-w-[400px] grid-cols-1";
    } else if (total == 2) {
      return "sm:max-w-[800px] grid-cols-1 sm:grid-cols-2";
    } else if (total == 3) {
      return "lg:max-w-[1200px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    } else {
      return "lg:max-w-[1310px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    }
  };

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 2500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
        },
      },
    ],
  };
  return (
    <>
      {!isError && isLoading ? (
        <section>
          <div className="grid grid-cols-3 lg:grid-cols-4 gap-6">
            {new Array(4).fill(1).map((_, i) => {
              return <Skeleton key={i} className={"h-[250px]"} />;
            })}
          </div>
        </section>
      ) : (
        <>
          {total > 0 ? (
            <section
              className={`pt-8 lg:pt-[70px] pb-5 lg:pb-[120px] bg-grey mb-8 lg:mb-[80px] overflow-hidden ${
                classes?.root ? classes?.root : ""
              }`}
            >
              <div className="px-5">
                <div className="px-5 mb-5">
                  <h2
                    className={`text-center ${
                      classes?.title ? classes?.title : ""
                    }`}
                  >
                    Most View Courses
                  </h2>
                </div>
                <div>
                  {total > 4 ? (
                    <Slider {...settings}>
                      {dataArray?.map((item: any, i: any) => {
                        return (
                          <ViewCourseCard
                            key={i}
                            classes={{ root: "mx-2 lg:mx-[15px]" }}
                            data={item}
                          />
                        );
                      })}
                    </Slider>
                  ) : (
                    <div
                      className={`grid gap-5 lg:gap-[30px] ${maxWidth()} mx-auto`}
                    >
                      {dataArray?.map((item: any, i: any) => {
                        return <ViewCourseCard key={i} data={item} />;
                      })}
                    </div>
                  )}
                </div>
              </div>
            </section>
          ) : null}
        </>
      )}
    </>
  );
};

export default ViewCourse;
