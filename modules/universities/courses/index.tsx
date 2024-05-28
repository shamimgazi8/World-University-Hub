"use client";

import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import { useEffect, useState } from "react";
import { useGetCoursesQuery } from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import PaginationComponent from "@/modules/@common/pagination";
import Skeleton from "@/modules/@common/skeleton";
import { useRouter, useSearchParams } from "next/navigation";
import CourseCard from "../@components/course-card";
import UniversityHero from "../@components/hero";
import Sidebar from "../@components/sidebar";
import CourseFilters from "./filters-drawer";
import QuestionForm from "../overview/QuestionForm";
import SidebarCourse from "../@components/sidebar/courseSidebar";
import SidebarPrograms from "../@components/sidebar/sidebarAvailablePrograms";
import SidebarCoursePrograms from "../@components/sidebar/sidebarAvailablePrograms";

interface propTypes {
  data: any;
}

const UniversityCourses = ({ data }: propTypes) => {
  const [drawer, setDrawer] = useState(false);
  const router = useRouter();
  const limit = 10;
  const searchParams = useSearchParams();
  const pageFromRoute = searchParams.get("page");
  const courseLevelFromRoute = searchParams.get("courseLevel");
  const deliveryMethodFromRoute = searchParams.get("deliveryMethod");
  const [page, setPage] = useState<any>(pageFromRoute || 1);
  const [courseLevel, setCourseLevel] = useState<any>(
    courseLevelFromRoute || "undergraduate"
  );
  const [deliveryMethod, setDeliveryMethod] = useState<any>(
    deliveryMethodFromRoute || undefined
  );

  const [queryParams, setQueryParams] = useState<any>({
    courseLevel: courseLevel,
    deliveryMethod,
    limit,
    page,
    uniSlug: data?.slug,
  });

  const queryString = generateQueryString(queryParams);
  const {
    data: dataCourse,
    isLoading,
    isError,
  } = useGetCoursesQuery(queryString);
  const dataArray = dataCourse?.data;

  const total = dataCourse && dataCourse?.totalCount;

  const onChange = (pageNumber: any) => {
    setPage(pageNumber);
    setQueryParams((prev: any) => ({ ...prev, page: pageNumber }));
  };

  useEffect(() => {
    router.push(`/universities/${data?.slug}/courses${queryString}`, {
      scroll: false,
    });
  }, [queryParams]);

  return (
    <>
      <UniversityHero data={data} />
      <section className="lg:pt-8">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_417px] gap-7">
            {/* <div className="mx-[-20px] lg:mx-0  self-start sticky top-[68px] lg:top-[75px] z-[100]">
              <Sidebar data={data} />
              <div className="mt-7 hidden lg:block">
                <AdvertisementSideSm />
              </div>
            </div> */}
            <div>
              {/* <div className="flex justify-between items-center border-b">
                <h2 className="h5">All Courses</h2>
              </div> */}
              <SidebarCourse data={data} isCoursePage={true} />
              {/* <CourseLevel data={data} isCoursePage={true} /> */}
              {!isError && isLoading ? (
                <div className="flex flex-col gap-2 mt-4">
                  {new Array(6).fill(1).map((_, i) => {
                    return <Skeleton key={i} className={"h-[72px]"} />;
                  })}
                </div>
              ) : (
                <>
                  {/* <CourseSorting
                    setQueryParams={setQueryParams}
                    drawer={drawer}
                    setDrawer={setDrawer}
                    limit={limit}
                  /> */}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-0 md:grid-cols-1 lg:grid-cols-1 pt-4 md:pt-0 mb-5 lg:mb-8">
                    <SidebarCoursePrograms
                      setQueryParams={setQueryParams}
                      setCourseLevel={setCourseLevel}
                      courseLevel={courseLevel}
                      data={dataArray}
                    />
                  </div>
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
                </>
              )}
            </div>
            <div>
              <QuestionForm />
            </div>
          </div>
        </div>
      </section>

      <CourseFilters
        drawer={drawer}
        setQueryParams={setQueryParams}
        queryParams={queryParams}
        setDrawer={setDrawer}
        limit={limit}
      />
    </>
  );
};

export default UniversityCourses;
