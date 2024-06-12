import ViewCourseCard from "@/modules/home/@components/view-course-card";
import UniversityCard from "@/modules/universities/@components/university-card";
import { Tabs } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import Link from "next/link";
import React, { FC } from "react";
import dataCourseArray from "@/data/temp-course-admin.json";
import PaginationComponent from "@/modules/@common/pagination";
import { useAllShortListQuery } from "@/appstore/user/shortList/shorList-api";

interface AdminUniversitiesProps {
  dashboard: boolean;
}

const AdminCourses: FC<AdminUniversitiesProps> = ({ dashboard }) => {
  const dataCourseArrays: any = [];
  const {
    data: shortList,
    isError,
    isLoading,
  } = useAllShortListQuery("?reference=COURSE");

  let total = 3;
  const maxWidth = () => {
    if (total == 1) {
      return "sm:max-w-[400px] grid-cols-1";
    } else if (total == 2) {
      return "sm:max-w-[800px] grid-cols-1 sm:grid-cols-2";
    } else if (total == 3) {
      return "lg:max-w-[1280px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    } else {
      return "lg:max-w-[1310px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
    }
  };
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h4>
            <span className="text-gradient">Courses</span>
          </h4>
        </div>
        <div>
          {dashboard &&
            shortList &&
            shortList?.data &&
            shortList?.data?.length > 4 && (
              <Link
                href="/user/courses"
                className="btn btn-primary-outline rounded"
              >
                View All
              </Link>
            )}
        </div>
      </div>

      <Tabs defaultActiveKey="1">
        <TabPane tab={`Shortlisted (${shortList?.data?.length})`} key="1">
          <div>
            <div
              className={`grid gap-2 lg:gap-[30px] ${maxWidth()} mx-auto py-5 pb-10`}
            >
              {/* {dataCourseArray?.map((uni: any, i: number) => {
                return (
                  <ViewCourseCard
                    key={i}
                    classes={{ root: "border" }}
                    data={uni}
                  />
                );
              })} */}
              {dashboard
                ? shortList?.data?.slice(0, 4).map((uni: any, i: number) => {
                    return (
                      <ViewCourseCard
                        data={uni?.course}
                        key={i}
                        classes={{ root: "border" }}
                      />
                    );
                  })
                : shortList?.data?.map((uni: any, i: number) => {
                    return (
                      <ViewCourseCard
                        data={uni?.course}
                        key={i}
                        classes={{ root: "border" }}
                      />
                    );
                  })}
            </div>
          </div>
        </TabPane>
        <TabPane tab="Recommended" key="2">
          <div>
            <div
              className={`grid gap-2 lg:gap-[30px] ${maxWidth()} mx-auto py-5 pb-10`}
            >
              {dataCourseArrays?.map((uni: any, i: number) => {
                return (
                  <ViewCourseCard
                    key={i}
                    classes={{ root: "border" }}
                    data={uni}
                  />
                );
              })}
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AdminCourses;
