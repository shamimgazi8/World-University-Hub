import React from "react";
import { RiCheckboxBlankFill } from "react-icons/ri";
const AdmissionReqCourse = ({ id }: any) => {
  return (
    <section id={id} className=" pb-0">
      <div className=" mt-[40px] grid gap-[20px]">
        <h5 className=" mb-0">Admission Requirement & Others</h5>
        <div>
          <h6 className=" mb-4">Exam Scores</h6>
          <div className=" border grid divide-y ">
            {/* <div className=" grid grid-cols-6 p-3">
            <p className=" mb-0 lg:text-c4 text-c5">General</p>
            <p className=" mb-0 lg:text-c4 text-c5">GMAT: 680+</p>
            <p className=" mb-0 lg:text-c4 text-c5">GRE: 6+</p>
            <p className=" mb-0 lg:text-c4 text-c5">GP: 68+</p>
            <p className=" mb-0 lg:text-c4 text-c5">IELTS: 6.5</p>
            <p className=" mb-0 lg:text-c4 text-c5">TOFEL: 64+</p>
          </div> */}
            <div className=" grid grid-cols-7 p-3 gap-3">
              <p className=" mb-0 lg:text-c4 text-c5 col-span-2 row-span-2 text-black">
                Undergraduate
              </p>
              <p className=" mb-0 lg:text-c4 text-c5">GMAT: 680+</p>
              <p className=" mb-0 lg:text-c4 text-c5">GRE: 6+</p>
              <p className=" mb-0 lg:text-c4 text-c5">GP: 68+</p>
              <p className=" mb-0 lg:text-c4 text-c5">IELTS: 6.5</p>
              <p className=" mb-0 lg:text-c4 text-c5">TOFEL: 64+</p>
              <p className=" mb-0 lg:text-c4 text-c5">GMAT: 680+</p>
              <p className=" mb-0 lg:text-c4 text-c5">GRE: 6+</p>
              <p className=" mb-0 lg:text-c4 text-c5">GP: 68+</p>
            </div>
          </div>
        </div>
        <div>
          <h6 className=" mb-4">Admission Date</h6>
          <div className=" flex justify-between  gap-[8px]  p-4 border rounded">
            <div>
              <p className=" mb-0 lg:text-c4 text-c5">Program Duration</p>
              <span className=" mb-0 lg:text-c2 text-c3 font-medium">
                3 Years
              </span>
            </div>
            <div>
              <p className=" mb-0 lg:text-c4 text-c5">Start Month</p>
              <span className=" mb-0 lg:text-c2 text-c3  font-medium">
                March 2023
              </span>
            </div>
            <div>
              <p className=" mb-0 lg:text-c4 text-c5">End Month</p>
              <span className=" mb-0 lg:text-c2 text-c3  font-medium">
                December 2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionReqCourse;
