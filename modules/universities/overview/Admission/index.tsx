import React from "react";
import { RiCheckboxBlankFill } from "react-icons/ri";
const AdmissionReq = ({ id }: any) => {
  return (
    <section className=" pb-0 uni-section" id={id}>
      <div className=" mt-[40px] grid gap-[20px]">
        <h5 className=" mb-0">Admission Requirement & Others</h5>
        <div>
          <h6 className=" mb-4">Exam Scores</h6>
          <div className=" border grid divide-y ">
            <div className=" grid grid-cols-6 p-3">
              <p className=" mb-0 lg:text-c4 text-c5">General</p>
              <p className=" mb-0 lg:text-c4 text-c5">GMAT: 680+</p>
              <p className=" mb-0 lg:text-c4 text-c5">GRE: 6+</p>
              <p className=" mb-0 lg:text-c4 text-c5">GP: 68+</p>
              <p className=" mb-0 lg:text-c4 text-c5">IELTS: 6.5</p>
              <p className=" mb-0 lg:text-c4 text-c5">TOFEL: 64+</p>
            </div>
            <div className=" grid grid-cols-6 p-3">
              <p className=" mb-0 lg:text-c4 text-c5">Bachelor</p>
              <p className=" mb-0 lg:text-c4 text-c5">GMAT: 680+</p>
              <p className=" mb-0 lg:text-c4 text-c5">GRE: 6+</p>
              <p className=" mb-0 lg:text-c4 text-c5">GP: 68+</p>
              <p className=" mb-0 lg:text-c4 text-c5">IELTS: 6.5</p>
              <p className=" mb-0 lg:text-c4 text-c5">TOFEL: 64+</p>
            </div>
            <div className=" grid grid-cols-6 p-3">
              <p className=" mb-0 lg:text-c4 text-c5">Master’s</p>
              <p className=" mb-0 lg:text-c4 text-c5">GMAT: 680+</p>
              <p className=" mb-0 lg:text-c4 text-c5">GRE: 6+</p>
              <p className=" mb-0 lg:text-c4 text-c5">GP: 68+</p>
              <p className=" mb-0 lg:text-c4 text-c5">IELTS: 6.5</p>
              <p className=" mb-0 lg:text-c4 text-c5">TOFEL: 64+</p>
            </div>
          </div>
        </div>
        <div>
          <h6 className=" mb-4">Student and Staff</h6>
          <div className="  grid lg:grid-cols-3 gap-4">
            <div className=" flex flex-col gap-[8px] justify-center items-center p-4 border rounded">
              <p className=" mb-0 lg:text-c4 text-c5">Total Student</p>
              <span className=" mb-0 text-c2 font-medium">35,995</span>
              <div className=" w-full h-1 rounded-full bg-blue-600"></div>
              <div className=" flex gap-3 items-center justify-between">
                <p className=" mb-0 text-[12px] flex items-center gap-1">
                  {" "}
                  <RiCheckboxBlankFill className=" text-blue-600" />
                  UG Students 79%
                </p>
                <p className=" m-0 text-[12px] flex items-center gap-1">
                  {" "}
                  <RiCheckboxBlankFill className=" text-[#A965E9] " />
                  PG Students 21%
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-[8px] justify-center items-center p-4 border rounded">
              <p className=" mb-0 text-c4">International Student</p>
              <span className=" mb-0 text-c2 font-medium">35,995</span>
              <div className=" w-full h-1 rounded-full bg-blue-600"></div>
              <div className=" flex gap-3 items-center justify-between">
                <p className=" mb-0 text-[12px] flex items-center gap-1">
                  {" "}
                  <RiCheckboxBlankFill className=" text-blue-600" />
                  UG Students 79%
                </p>
                <p className=" m-0 text-[12px] flex items-center gap-1">
                  {" "}
                  <RiCheckboxBlankFill className=" text-[#A965E9] " />
                  PG Students 21%
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-[8px] justify-center items-center p-4 border rounded">
              <p className=" mb-0 text-c4">Total faculty staff</p>
              <span className=" mb-0 text-c2 font-medium">1751</span>
              <div className=" w-full h-1 rounded-full bg-blue-600"></div>
              <div className=" flex gap-3 items-center justify-between">
                <p className=" mb-0 text-[12px] flex items-center gap-1">
                  {" "}
                  <RiCheckboxBlankFill className=" text-blue-600" />
                  UG Students 79%
                </p>
                <p className=" m-0 text-[12px] flex items-center gap-1">
                  {" "}
                  <RiCheckboxBlankFill className=" text-[#A965E9] " />
                  PG Students 21%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionReq;
