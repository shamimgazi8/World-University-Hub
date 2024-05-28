"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useWindowDimensions from "@/hooks/use-window-dimensions";

interface propTypes {
  data: any;
  isShowActive?: boolean;
  setQueryParams?: any;
}
import React from "react";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
const ResponsiveTable = ({}: any) => {
  const data = [
    {
      displayName: "Master of Science in Clinical Health Psychology",
      level: "UG",
      intake: "Jun",
      rank: "500-600",
      duration: "36 Month",
      fees: "3600 AUD",
      englishExam: "IELTS +2",
      scholarship: "Yes",
    },
    {
      displayName: "Bachelor of Engineering in Biomedical Engineering",
      level: "UG",
      intake: "Jun",
      rank: "500-600",
      duration: "36 Month",
      fees: "3600 AUD",
      englishExam: "IELTS +2",
      scholarship: "Yes",
    },
    // Add more data as needed
  ];

  return (
    <div className=" ">
      <div className="hidden md:block">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Course Name</th>
              <th className="py-2 px-4 border-b">Level</th>
              <th className="py-2 px-4 border-b">Intake</th>
              <th className="py-2 px-4 border-b">Rank</th>
              <th className="py-2 px-4 border-b">Duration</th>
              <th className="py-2 px-4 border-b">T. Fees/Year</th>
              <th className="py-2 px-4 border-b">English Exam</th>
              <th className="py-2 px-4 border-b">Scholarship</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className="block md:hidden">
        {data?.map((item: any, index: any) => (
          <div
            key={index}
            className="mb-4 border border-gray-200 rounded-lg overflow-hidden"
          >
            <div className="p-4 bg-gray-100 border-b">
              <p className="font-bold">{item.displayName}</p>
            </div>
            <div className="p-4">
              <p>
                <span className="font-semibold">Level:</span> {item.level}
              </p>
              <p>
                <span className="font-semibold">Intake:</span> {item.intake}
              </p>
              <p>
                <span className="font-semibold">Rank:</span> {item.rank}
              </p>
              <p>
                <span className="font-semibold">Duration:</span> {item.duration}
              </p>
              <p>
                <span className="font-semibold">T. Fees/Year:</span> {item.fees}
              </p>
              <p>
                <span className="font-semibold">English Exam:</span>{" "}
                {item.englishExam}
              </p>
              <p>
                <span className="font-semibold">Scholarship:</span>{" "}
                {item.scholarship}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CourseInfo = ({ data }: any) => {
  return (
    <div className="">
      <table className="table-auto">
        <thead>
          <tr className=" bg-[#F8F9FD] border-none text-[12px]">
            <th className=" text-[#3B5AEF] w-[300px]  ">Course Name</th>
            <th className=" text-[#3B5AEF]  ">Level</th>
            <th className=" text-[#3B5AEF]  ">Intake</th>
            <th className=" text-[#3B5AEF]  ">Rank</th>
            <th className=" text-[#3B5AEF]  ">Duration</th>
            <th className=" text-[#3B5AEF]  ">T. Fees/Year</th>
            <th className=" text-[#3B5AEF]  ">English Exam</th>
            <th className=" text-[#3B5AEF]  ">Scholarship</th>
          </tr>
        </thead>
        <tbody className="border-[0px] text-[12px]">
          {data?.map((data: any, key: any) => (
            <tr className=" text-start " key={key}>
              <td className=" px-4 py-2 font-medium text-[#22343C]">
                {data.displayName}
              </td>
              <td className=" px-4 py-2">
                {data?.courseLevel.name === "undergraduation" ? "UG" : "UG"}
              </td>
              <td className=" px-4 py-2">
                {data?.importantDates?.startingMonth[0]}
              </td>
              <td className=" px-4 py-2">{data?.ranks[0].displayRank}</td>
              <td className=" px-4 py-2">
                {data?.duration ? `${data?.duration} Month` : "N/A"}{" "}
              </td>
              <td className=" px-4 py-2">
                {data?.tuitionFees?.internationalStudents
                  ? `${data?.tuitionFees?.internationalStudents}
                ${data?.tuitionFees?.currencyCode}`
                  : "N/A"}
              </td>
              <td className=" px-4 py-2">{data?.examScores[0]?.exam}</td>
              <td className=" px-4 py-2">
                {data?.hasScholarship ? "YES" : "NO"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ProgramsTabs = ({ setQueryParams, data }: propTypes) => {
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
      children:
        data?.course?.length === 0 ? (
          <>No Data Found</>
        ) : (
          <CourseInfo data={data?.course} />
        ),
    },
    {
      key: "2",
      label: "Masters",
      children:
        data?.course?.length === 0 ? (
          <>No Data Found</>
        ) : (
          <CourseInfo data={data?.course} />
        ),
    },
    {
      key: "3",
      label: "MBA",
      children:
        data?.course?.length === 0 ? (
          <>No Data Found</>
        ) : (
          <CourseInfo data={data?.course} />
        ),
    },
    {
      key: "4",
      label: "PHD",
      children:
        data?.course?.length === 0 ? (
          <>No Data Found</>
        ) : (
          <CourseInfo data={data?.course} />
        ),
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
    // router.push(`/universities/${data?.slug}?section=${pageSection}`, {
    //   scroll: false,
    // });
  }, [pageSection]);

  return (
    <div>
      {isMobile ? (
        <div>
          <ResponsiveTable data={data?.data} />
        </div>
      ) : data?.data?.length === 0 ? (
        <>No Data Found</>
      ) : (
        <CourseInfo data={data?.course} />
      )}
      {/* <Tabs defaultActiveKey="1" items={items} onChange={onChange} /> */}
    </div>
  );
};

export default ProgramsTabs;
