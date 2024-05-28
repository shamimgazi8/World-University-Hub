"use client";
import { htmlParse } from "@/helpers/utils";
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
              <h6 className=" mb-0 ">March, June, Nov</h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Duration</p>
              <h6 className=" mb-0 ">4 Years</h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Attendance</p>
              <h6 className=" mb-0 ">On Campus</h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Intensity</p>
              <h6 className=" mb-0 ">Full Time</h6>
            </div>
          </div>
          <div className=" grid lg:grid-cols-4  lg:gap-0 gap-4">
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Tuition Fees/Year</p>
              <h6 className=" mb-0 ">$320-$250</h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Scholarship</p>
              <h6 className=" mb-0 ">Yesv</h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Application Deadline</p>
              <h6 className=" mb-0 ">May 20, 2015</h6>
            </div>
            {/* <div className=" grid gap-1">
            <p className=" mb-0 text-[14px]">Intake</p>
            <h6 className=" mb-0 ">March, June, Nov</h6>
          </div> */}
          </div>
          <div className=" grid lg:grid-cols-4   lg:gap-0 gap-4">
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Ranking</p>
              <h6 className=" mb-0 ">$320-$250</h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Undergraduate Program</p>
              <h6 className=" mb-0 ">109</h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Post Graduate Program</p>
              <h6 className=" mb-0 ">108</h6>
            </div>
            <div className=" grid gap-1">
              <p className=" mb-0 text-[14px]">Tuition Fees</p>
              <h6 className=" mb-0 ">300000 AUD</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KeyInfoCourse;
