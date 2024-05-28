"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";
import { Radio, RadioChangeEvent, Select } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";

const onSearch = (value: string) => {
  console.log("search:", value);
};

// Filter `option.label` match the user type `input`
const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const StudyPlansForm = () => {
  const router = useRouter();
  const validationSchema = Yup.object({
    subject: Yup.string().required("Subject is required"),
    // studyLevel: Yup.string().required("Study Level is required"),
    // learningType: Yup.string().required("Learning Type is required"),
    // destination: Yup.string().required("Destination is required"),
    // nationality: Yup.string().required("Nationality is required"),
    // startDate: Yup.string().required("Start Date is required"),
    // fundingType: Yup.string().required("Type of Funding is required"),
    // budget: Yup.string().required("Budget is required"),
  });
  const submitHandaler = (value: any) => {
    console.log(value);
    router.push("/course-matching-tool/academy");
  };

  return (
    <div className=" lg:p-5 mt-5 flex justify-center items-center gap-[20px] flex-col">
      <h1 className=" mb-0 lg:text-h4 text-h6 leading-[1.2] font-bold">
        Tell us your study plans
      </h1>
      <Formik
        initialValues={{
          subject: "",
          studyLevel: "",
          learningType: "",
          destination: "",
          nationality: "",
          startDate: "",
          fundingType: "",
          budget: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          submitHandaler(values);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="lg:w-[816px] w-full p-4 bg-white srounded-md flex flex-col justify-center gap-[30px]">
            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">Subject</p>
              <label className="block text-[#4E4E4E] mb-2">
                Subject/Specialization
                <span className=" text-red-500"> * </span>
              </label>
              <Select
                className=" w-full"
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={(value: any) => {
                  setFieldValue("subject", value);
                }}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                  {
                    value: "jack",
                    label: "aa",
                  },
                  {
                    value: "tom",
                    label: "ccc",
                  },
                  {
                    value: "lucy",
                    label: "bb",
                  },
                ]}
              />

              <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">Study Level</p>

              <Radio.Group
                className=" flex gap-2 "
                onChange={(e: any) => {
                  setFieldValue("studyLevel", e.target.value);
                }}
              >
                <Radio.Button value="Bachelor ">Bachelor's</Radio.Button>
                <Radio.Button value="Master">Master’s</Radio.Button>
                <Radio.Button value="PHD">PHD</Radio.Button>
              </Radio.Group>

              {/* <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-sm"
              /> */}
            </div>

            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">
                Learning Type
              </p>
              <Radio.Group
                className=" flex gap-2 "
                onChange={(e: any) => {
                  setFieldValue("learningType", e.target.value);
                }}
              >
                <Radio.Button value="Bachelor ">On Campus</Radio.Button>
                <Radio.Button value="Master">Online</Radio.Button>
              </Radio.Group>

              {/* <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-sm"
              /> */}
            </div>

            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">Destination</p>
              <label className="block text-[#4E4E4E] mb-2">
                Destination
                {/* <span className=" text-red-500"> * </span> */}
              </label>
              <Select
                className=" w-full h-[45px]"
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={(value: any) => {
                  setFieldValue("destination", value);
                }}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />

              {/* <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-sm"
              /> */}
            </div>

            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">Nationality</p>
              <label className="block text-[#4E4E4E] mb-2">
                Nationality
                {/* <span className=" text-red-500"> * </span> */}
              </label>
              <Select
                className=" w-full h-[45px]"
                showSearch
                placeholder="Please select your Nationality"
                optionFilterProp="children"
                onSearch={onSearch}
                onChange={(value: any) => {
                  setFieldValue("nationality", value);
                }}
                filterOption={filterOption}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                  {
                    value: "lucy",
                    label: "Lucy",
                  },
                  {
                    value: "tom",
                    label: "Tom",
                  },
                ]}
              />

              {/* <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-sm"
              /> */}
            </div>

            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">Start Date</p>
              <Radio.Group
                className=" flex gap-2  flex-wrap "
                onChange={(e: any) => {
                  setFieldValue("startDate", e.target.value);
                }}
              >
                <Radio.Button value="2024">2024</Radio.Button>
                <Radio.Button value="2023">2023</Radio.Button>
                <Radio.Button value="2022">2022</Radio.Button>
                <Radio.Button value="2021">2021</Radio.Button>
                <Radio.Button value="2020">2020</Radio.Button>
              </Radio.Group>

              {/* <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-sm"
              /> */}
            </div>

            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">
                Type of Funding
              </p>

              <Radio.Group
                className=" flex gap-2 flex-wrap "
                onChange={(e: any) => {
                  setFieldValue("studyLevel", e.target.value);
                }}
              >
                <Radio.Button value="Personal ">Personal Funding</Radio.Button>
                <Radio.Button value="Loan">Loan</Radio.Button>
                <Radio.Button value="Scholarship">Scholarship</Radio.Button>
                <Radio.Button value="Family">
                  Parent/Family Support
                </Radio.Button>
              </Radio.Group>

              {/* <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-sm"
              /> */}
            </div>

            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">Budget</p>

              <Radio.Group
                className=" flex gap-2 flex-wrap "
                onChange={(e: any) => {
                  setFieldValue("budget", e.target.value);
                }}
              >
                <Radio.Button value="6,000">Less then $6,000</Radio.Button>
                <Radio.Button value="12,000">
                  Between $6,000 and $12,000
                </Radio.Button>
                <Radio.Button value="20,000">More than $20,000</Radio.Button>
              </Radio.Group>

              {/* <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-sm"
              /> */}
            </div>

            <div className="flex items-center justify-center gap-[20px] pb-[60px]">
              <Link
                href="/"
                className="btn btn-primary-outline rounded hover:text-white text-gradient w-[170px]  px-4 py-[10px] "
              >
                <span className="">Back</span>
              </Link>

              <button
                // type="submit"
                className="btn btn-primary  px-4 py-[10px]  w-[170px] "
              >
                Next
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StudyPlansForm;
