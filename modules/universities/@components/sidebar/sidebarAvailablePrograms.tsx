"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useWindowDimensions from "@/hooks/use-window-dimensions";

interface propTypes {
  data: any;
  isShowActive?: boolean;
  setCourseLevel?: any;
  setQueryParams?: any;
  courseLevel?: any;
}
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Link from "next/link";

const CourseInfo = ({ data }: any) => {
  return data?.length === 0 ? (
    <div> No Data Found 😢</div>
  ) : (
    <div className="">
      <table className="table-auto">
        <thead>
          <tr className=" bg-[#F8F9FD] border-none ">
            <th className="px-4 py-2 text-[#3B5AEF] ">Course Name</th>
            <th className="px-4 py-2 text-[#3B5AEF]  ">Duration</th>
            <th className="px-4 py-2 text-[#3B5AEF] ">Delivery Method</th>
            <th className="px-4 py-2 text-[#3B5AEF] text-center">Language</th>
          </tr>
        </thead>
        <tbody className="border-[0px]  ">
          {data?.map((data: any) => (
            <tr className=" text-start " key={data?.id}>
              <td className=" px-4 py-2 font-medium text-[#22343C]">
                <Link href={`courses/${data?.courseTitle?.slug}`}>
                  {" "}
                  {data?.displayName}
                </Link>
              </td>
              <td className=" px-4 py-2">{data?.duration}</td>
              <td className=" px-4 py-2">{"On Campus"}</td>
              <td className=" px-4 py-2">{"English"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const courses = [
  {
    id: 1,
    name: "Computer Science",
    duration: "1 Year",
    Delivery: "On Campus",
    Language: "English",
  },
  {
    id: 2,
    name: "Bachelor of Engineering in Biomedical Engineering",
    duration: "1 Year",
    Delivery: "On Campus",
    Language: "English",
  },
  {
    id: 3,
    name: "Master of Science in Clinical Health Psychology",
    duration: "1 Year",
    Delivery: "On Campus",
    Language: "English",
  },
];
const coursesMasters = [
  {
    id: 1,
    name: "Master of Business Administration (MBA)",
    duration: "1 Year",
    Delivery: "On Campus",
    Language: "English",
  },
  {
    id: 2,
    name: "Master of Science in Computer Science (MSCS)",
    duration: "1 Year",
    Delivery: "On Campus",
    Language: "English",
  },
  {
    id: 3,
    name: "Master of Arts in Psychology (MAP)",
    duration: "1 Year",
    Delivery: "On Campus",
    Language: "English",
  },
];
const coursesPhd = [
  {
    id: 1,
    name: "Ph.D. in Computer Science",
    duration: "1 Year",
    Delivery: "On Campus",
    Language: "English",
  },
  {
    id: 2,
    name: "Ph.D. in Psychology",
    duration: "1 Year",
    Delivery: "On Campus",
    Language: "English",
  },
  {
    id: 3,
    name: "Ph.D. in Biology",
    duration: "1 Year",
    Delivery: "On Campus",
    Language: "English",
  },
];

const SidebarCoursePrograms = ({ data, setQueryParams }: propTypes) => {
  const onChange = (key: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      courseLevel: `${
        key === "1"
          ? "undergraduate"
          : key === "2"
          ? "postgraduate"
          : key === "3"
          ? "mba"
          : key === "4"
          ? "doctorate-phd"
          : ""
      }`,
    }));
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Bachelor",
      children: <CourseInfo data={data} />,
    },
    {
      key: "2",
      label: "Masters",
      children: <CourseInfo data={data} />,
    },
    {
      key: "3",
      label: "MBA",
      children: <CourseInfo data={data} />,
    },
    {
      key: "4",
      label: "PHD",
      children: <CourseInfo data={data} />,
    },
  ];

  const { width } = useWindowDimensions();
  const isMobile = width < 1024;
  const router = useRouter();
  const searchParams = useSearchParams();
  const fromRoute = searchParams.get("section");

  const [pageSection, setPageSection] = useState(fromRoute || "overview");

  const [isMount, setIsMount] = useState(true);
  useEffect(() => {
    if (isMount) {
      setIsMount(false);
      return;
    }
    router.push(`/universities/${data?.slug}?section=${pageSection}`, {
      scroll: false,
    });
  }, [pageSection]);

  return <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
};

export default SidebarCoursePrograms;
