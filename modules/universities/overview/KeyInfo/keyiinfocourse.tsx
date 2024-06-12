"use client";
import React from "react";

const KeyInfoCourse = ({ data, id }: any) => {
  return (
    <section className=" pb-0" id={id}>
      <div className="  rounded mt-[20px]">
        <div className=" bg-[#F8F9FD] px-6 py-4 ">
          <h5 className=" mb-0">Key Information</h5>
        </div>
        <div className=" py-4 px-6 grid gap-5  divide-solid">
          <h6 className=" mb-0 text-gradient"> Program Overview</h6>
          <div className=" grid lg:grid-cols-4 lg:gap-0 gap-4 ">
            <div className=" grid gap-1 ">
              <p className=" mb-0  text-[14px]">Intake</p>
              <h6 className=" mb-0 ">
                {data?.importantDates
                  ? data?.importantDates?.startingMonth.join(", ")
                  : ""}
              </h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Duration</p>
              <h6 className=" mb-0 ">
                {data?.duration ? `${data?.duration} Years` : "N/A"}{" "}
              </h6>
            </div>
            <div className=" grid gap-1 overflow-ellipsis">
              <p className=" mb-0 text-[14px]">Attendance</p>
              <h6 className=" mb-0 ">
                {data?.deliveryMethods
                  ? data?.deliveryMethods?.map((item: any, i: any) => {
                      return (
                        <>{`${item?.deliveryMethod?.name} ${
                          i == 0 ? "," : ""
                        } `}</>
                      );
                    })
                  : ""}
              </h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Intensity</p>
              <h6 className=" mb-0 ">
                {data?.studyPace
                  ? data?.studyPace == "FULL_TIME"
                    ? "Full Time"
                    : data?.studyPace == "PART_TIME"
                    ? "Part Time"
                    : ""
                  : ""}
              </h6>
            </div>
          </div>
          <div className=" grid lg:grid-cols-4  lg:gap-0 gap-4">
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Domestic Tuition Fees</p>
              <h6 className=" mb-0 ">
                {data?.tuitionFees
                  ? data?.tuitionFees?.domesticStudents
                  : "N/A"}{" "}
                {data?.tuitionFees?.currencyCode
                  ? data?.tuitionFees?.currencyCode
                  : ""}
              </h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Scholarship</p>
              <h6 className=" mb-0 ">{data?.hasScholarship ? "YES" : "NO"}</h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Application Deadline</p>
              <h6 className=" mb-0 ">
                {data?.importantDates?.applicationDeadline
                  ? data?.importantDates?.applicationDeadline
                  : "N/A"}
              </h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Internationl Tuition Fees</p>
              <h6 className=" mb-0 ">
                {" "}
                {data?.tuitionFees
                  ? data?.tuitionFees?.internationalStudents
                  : "N/A"}{" "}
                {data?.tuitionFees?.currencyCode
                  ? data?.tuitionFees?.currencyCode
                  : ""}
              </h6>
            </div>
          </div>
          <div className=" grid lg:grid-cols-4   lg:gap-0 gap-4">
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Ranking</p>
              <h6 className=" mb-0 ">
                {data?.ranks[0] ? `#${data?.ranks[0]?.displayRank}` : ""}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInfoCourse;
