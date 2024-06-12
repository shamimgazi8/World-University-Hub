"use client";
import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";
import { Input, Radio, RadioChangeEvent, Select } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";

const onSearch = (value: string) => {
  console.log("search:", value);
};
// Filter `option.label` match the user type `input`
const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const StudyPlansFormAcademy = ({ setEnglishTest, page, setPage }: any) => {
  const [studylvl, setstudylvl] = useState(1);
  const router = useRouter();
  const submitHandaler = (value: any) => {
    setPage(3);
    // router.push("/course-matching-tool/result");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]); // This effect runs only once after the component mounts
  const validationSchema = Yup.object({
    studyLevel: Yup.string().required("Study Level is required"),
    grade: Yup.string().required("Grade is required"),
    gradeResult: Yup.string().required("Point is required"),
    // academicTest: Yup.string().required("academicTest is required"),
  });

  return (
    <div className=" lg:p-5 mt-5 flex justify-center items-center gap-[20px] flex-col">
      <h1 className=" mb-0 lg:text-h4 text-h6 leading-[1.2] font-bold">
        Tell us your academic profile
      </h1>
      <Formik
        initialValues={{
          studyLevel: "",
          grade: "",
          gradeResult: "",
          workExprience: "",
          academicTest: "",
          academicTestStatus: "",
          academicTestResult: "",
          englishTest: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          submitHandaler(values);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="lg:w-[816px] w-full p-4 bg-white srounded-md flex flex-col justify-center gap-[30px]">
            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black ">
                Previous Study Level
              </p>
              {new Array(studylvl).fill(1)?.map((item: any) => {
                return (
                  <>
                    <label
                      className={`${
                        studylvl > 1 ? " border-t-[1px] mt-5 pt-5" : ""
                      } block text-[#4E4E4E] mb-2 mt-4`}
                    >
                      Study Level 
                      <span className=" text-red-500"> * </span>
                    </label>
                    <Select
                      className=" w-full h-[45px]"
                      showSearch
                      placeholder="Please select your study level"
                      optionFilterProp="children"
                      onChange={(value: any) => {
                        setFieldValue("studyLevel", value);
                      }}
                      onSearch={onSearch}
                      filterOption={filterOption}
                      options={[
                        {
                          value: "SSC",
                          label: "SSC",
                        },
                        {
                          value: "HSC",
                          label: "HSC",
                        },
                        {
                          value: "Bacholor",
                          label: "Bacholor",
                        },
                      ]}
                    />
                    <ErrorMessage
                      name="studyLevel"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                    <div className=" mt-4">
                      <label className="block text-[#4E4E4E] mb-2">
                        Grade 
                        <span className=" text-red-500"> * </span>
                      </label>
                      <div className=" grid grid-cols-2 gap-2">
                        <div>
                          <Select
                            className=" w-full h-[45px]"
                            showSearch
                            placeholder="Please select your Grade"
                            optionFilterProp="children"
                            onChange={(value: any) => {
                              setFieldValue("grade", value);
                            }}
                            onSearch={onSearch}
                            filterOption={filterOption}
                            options={[
                              {
                                value: "SSC",
                                label: "SSC",
                              },
                              {
                                value: "HSC",
                                label: "HSC",
                              },
                              {
                                value: "Bacholor",
                                label: "Bacholor",
                              },
                            ]}
                          />

                          <ErrorMessage
                            name="grade"
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>
                        <div>
                          <Field
                            className="border rounded border-gray-300 focus:border-purple-300 outline-none px-[15px] py-[10px] w-full "
                            type="input"
                            name="gradeResult"
                            placeholder=" "
                          />
                          <ErrorMessage
                            name="gradeResult"
                            component="div"
                            className="text-red-500 text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}

              <div className=" mt-4 flex gap-5">
                <span
                  className=" cursor-pointer text-[#3B5AEF] "
                  onClick={() => {
                    setstudylvl(studylvl + 1);
                  }}
                >
                  Add another grade
                </span>
                {studylvl > 1 && (
                  <span
                    className=" cursor-pointer text-[#e74949]  "
                    onClick={() => {
                      studylvl > 1 && setstudylvl(studylvl - 1);
                    }}
                  >
                    Delete Extra feild
                  </span>
                )}
              </div>
            </div>
            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">
                Work Experience
              </p>

              <Radio.Group
                className=" flex gap-2 flex-wrap "
                onChange={(e: any) => {
                  setFieldValue("workExprience", e.target.value);
                }}
              >
                <Radio.Button value="no-experience ">
                  No Experience
                </Radio.Button>
                <Radio.Button value="1"> 1</Radio.Button>
                <Radio.Button value="2-3">2 - 3</Radio.Button>
                <Radio.Button value="2-3">2 - 3</Radio.Button>
                <Radio.Button value="3-4">3 - 4</Radio.Button>
              </Radio.Group>

              <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">
                {" "}
                Test Details
              </p>
              <label className="block text-[#4E4E4E] mb-2">
                Academic Test
                {/* <span className=" text-red-500"> * </span> */}
              </label>
              <Select
                className=" w-full h-[45px]"
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={(value: any) => {
                  setFieldValue("academicTest", value);
                }}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                  {
                    value: "IELTS",
                    label: "IELTS",
                  },
                  {
                    value: "TOFEL",
                    label: "TOFEL",
                  },
                  {
                    value: "GRE",
                    label: "GRE",
                  },
                ]}
              />
              <div className=" mt-4">
                <Radio.Group
                  className=" flex gap-2 "
                  onChange={(e: any) => {
                    setFieldValue("academicTestStatus", e.target.value);
                  }}
                >
                  <Radio.Button value="Taken"> Taken</Radio.Button>
                  <Radio.Button value="Planed">Planed</Radio.Button>
                </Radio.Group>
              </div>
              <div className=" mt-4">
                <Field
                  className="border rounded border-gray-300 focus:border-purple-300 outline-none px-[15px] py-[10px] w-[60%]"
                  type="input"
                  name="academicTestResult"
                  placeholder="Type total score "
                />
              </div>
              <div className=" mt-4">
                <span className=" cursor-pointer text-[#3B5AEF] ">
                  Add another Test
                </span>
              </div>
              <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-sm"
              />
              <div className=" mt-4">
                <label className="block text-[#4E4E4E] mb-2">
                  English Test
                </label>
                <Select
                  mode="multiple"
                  className=" w-full h-[45px]"
                  showSearch
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={(value: any) => {
                    setEnglishTest(value);
                    setFieldValue("englishTest", value);
                  }}
                  onSearch={onSearch}
                  filterOption={filterOption}
                  options={[
                    {
                      value: "IELTS",
                      label: "IELTS",
                    },
                    {
                      value: "TOFEL",
                      label: "TOFEL",
                    },
                    {
                      value: "GRE",
                      label: "GRE",
                    },
                  ]}
                />

                <div className=" mt-4">
                  <span className=" cursor-pointer text-[#3B5AEF] ">
                    Add another Test
                  </span>
                </div>
                <ErrorMessage
                  name="subject"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-center gap-[20px] pb-[60px]">
              <button
                onClick={() => {
                  setPage(1);
                }}
                className="btn btn-primary-outline rounded hover:text-white text-gradient w-[170px]  px-4 py-[10px] "
              >
                <span className="">Back</span>
              </button>

              <button className="btn btn-primary  px-4 py-[10px]  w-[170px] ">
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StudyPlansFormAcademy;
