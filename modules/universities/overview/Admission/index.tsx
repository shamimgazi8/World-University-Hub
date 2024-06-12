import { Progress } from "antd";
import React from "react";
import { RiCheckboxBlankFill } from "react-icons/ri";
const AdmissionReq = ({ id, data, testScore }: any) => {
  const UgStudentsinPercent =
    (data?.studentAndStaff?.totalUndergraduateStudents /
      data?.studentAndStaff?.totalStudents) *
    100;
  const restofthePercent = 100 - parseInt(UgStudentsinPercent.toFixed(0));

  const UgstudentsInternational =
    (data?.studentAndStaff?.totalPostgraduateInternationalStudents /
      data?.studentAndStaff?.totalInternationalStudents) *
    100;
  const restofthePercentInternational =
    100 - parseInt(UgstudentsInternational.toFixed(0));

  const totalStaff =
    (data?.studentAndStaff?.totalDomesticStaff /
      data?.studentAndStaff?.totalStaff) *
    100;
  const resttotalStaff = 100 - parseInt(UgstudentsInternational.toFixed(0));

  return (
    <section className=" pb-0 uni-section" id={id}>
      <div className=" mt-[40px] grid gap-[20px]">
        <h5 className=" mb-0">Admission Requirement & Others</h5>
        <div>
          <h6 className=" mb-4">Exam Scores</h6>
          <div className=" border grid divide-y ">
            {testScore?.map((item: any, i: any) => {
              return (
                <div key={i} className=" grid grid-cols-6 p-3">
                  <p className=" mb-0 lg:text-c4 text-c5">
                    {item?.admissionType}
                  </p>
                  {item?.examScores?.length > 0
                    ? item?.examScores?.map((item: any, i: any) => {
                        return (
                          <div key={i}>
                            <p className=" mb-0 lg:text-c4 text-c5">
                              {item?.exam?.name}: {item?.score}
                            </p>
                          </div>
                        );
                      })
                    : "N/A"}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <h6 className=" mb-4">Student and Staff</h6>
          <div className="  grid lg:grid-cols-3 gap-4">
            <div className=" flex flex-col gap-[8px] justify-center items-center p-4 border rounded">
              <p className=" mb-0 lg:text-c4 text-c5">Total Student</p>
              <span className=" mb-0 text-c2 font-medium">
                {data?.studentAndStaff?.totalStudents}
              </span>
              <Progress
                size={"small"}
                showInfo={false}
                percent={100}
                strokeColor={"#A965E9"}
                success={{
                  percent: UgStudentsinPercent,
                  strokeColor: "#3B5AEF",
                }}
              />
              <div className=" flex gap-3 items-center justify-between">
                <p className=" mb-0 text-[12px] flex items-center gap-1">
                  {" "}
                  <RiCheckboxBlankFill className=" text-blue-600" />
                  UG Students {UgStudentsinPercent.toFixed(0)}%
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
              <span className=" mb-0 text-c2 font-medium">
                {data?.studentAndStaff?.totalInternationalStudents}
              </span>

              <Progress
                size={"small"}
                showInfo={false}
                percent={100}
                strokeColor={"#A965E9"}
                success={{
                  percent: UgstudentsInternational,
                  strokeColor: "#3B5AEF",
                }}
              />
              <div className=" flex gap-3 items-center justify-between">
                <p className=" mb-0 text-[12px] flex items-center gap-1">
                  {" "}
                  <RiCheckboxBlankFill className=" text-blue-600" />
                  UG Students {UgstudentsInternational.toFixed(0)}
                  {}%
                </p>
                <p className=" m-0 text-[12px] flex items-center gap-1">
                  {" "}
                  <RiCheckboxBlankFill className=" text-[#A965E9] " />
                  PG Students {restofthePercentInternational.toFixed(0)}%
                </p>
              </div>
            </div>
            <div className=" flex flex-col gap-[8px] justify-center items-center p-4 border rounded">
              <p className=" mb-0 text-c4">Total faculty staff</p>
              <span className=" mb-0 text-c2 font-medium">
                {" "}
                {data?.studentAndStaff?.totalStaff}
              </span>

              <Progress
                size={"small"}
                showInfo={false}
                percent={100}
                strokeColor={"#A965E9"}
                success={{
                  percent: totalStaff,
                  strokeColor: "#3B5AEF",
                }}
              />
              <div className=" flex gap-3 items-center justify-between">
                <p className=" mb-0 text-[12px] flex items-center gap-1">
                  {" "}
                  <RiCheckboxBlankFill className=" text-blue-600" />
                  Domestic Staff {totalStaff.toFixed(0)}%
                </p>
                <p className=" m-0 text-[12px] flex items-center gap-1">
                  {" "}
                  <RiCheckboxBlankFill className=" text-[#A965E9] " />
                  INT. Staff {resttotalStaff.toFixed(0)}%
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
