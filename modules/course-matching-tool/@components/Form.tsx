"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "tailwindcss/tailwind.css";
import { Checkbox, Radio, RadioChangeEvent, Select } from "antd";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useGetSpecializationQuery } from "@/appstore/specialization/specialization-api";
import { generateQueryString } from "@/helpers/utils";
import {
  useGetDeliveryMethodsQuery,
  useGetLevelsOptionsDataQuery,
} from "@/appstore/university/university-api";
import { useGetCountriesQuery } from "@/appstore/global/global-api";
import { CheckboxValueType } from "antd/es/checkbox/Group";
import { start } from "repl";

const onSearch = (value: string) => {};

// Filter `option.label` match the user type `input`
const filterOption = (
  input: string,
  option?: { label: string; value: string }
) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());

const StudyPlansForm = ({
  setStudyPlan,
  setPage,
  setspecialization,
  specialization,
  setstudyLevel,
  setattendance,
  setcountrySlug,
  settuitionTo,
  settuitionFrom,
  setscholarship,
}: any) => {
  const router = useRouter();
  const validationSchema = Yup.object({
    subject: Yup.array()
      .of(Yup.string().required("Subject is required"))
      .required("At least one subject is required"),
    // studyLevel: Yup.string().required("Study Level is required"),
    // learningType: Yup.string().required("Learning Type is required"),
    // destination: Yup.string().required("Destination is required"),
    // nationality: Yup.string().required("Nationality is required"),
    // startDate: Yup.string().required("Start Date is required"),
    // fundingType: Yup.string().required("Type of Funding is required"),
    // budget: Yup.string().required("Budget is required"),
  });
  const submitHandaler = (value: any) => {
    setPage(2);
    // router.push("/course-matching-tool/academy");
  };

  const { data: levelData } = useGetLevelsOptionsDataQuery("");
  const SpecializationParams = generateQueryString({
    name: "",
    page: 1,
  });
  const countryParams = generateQueryString({
    name: "",
    page: 1,
    limit: 500,
  });
  const { data: countryData } = useGetCountriesQuery(countryParams);
  const countryOptions = countryData?.data?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });

  const { data: deliveryMethodsData } = useGetDeliveryMethodsQuery("");

  const { data: specializationData } =
    useGetSpecializationQuery(SpecializationParams);
  const specializationOptions = specializationData?.data?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });
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
                mode="multiple"
                className=" w-full"
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={(value: any) => {
                  setspecialization(value);
                  setFieldValue("subject", value);
                }}
                onSearch={onSearch}
                value={specialization ? specialization : undefined}
                filterOption={filterOption}
                options={specializationOptions}
              />

              <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>
            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">Study Level</p>

              <Checkbox.Group
                className=" flex gap-2 "
                onChange={(checkedValues) => {
                  setstudyLevel(checkedValues);
                  setFieldValue("studyLevel", checkedValues);
                }}
              >
                {levelData?.map((level: any) => (
                  <Checkbox
                    key={level}
                    value={level?.slug}
                    checked={values.studyLevel.includes(level?.slug)}
                    className={`custom-checkbox-button ${
                      values.studyLevel.includes(level?.slug) ? "checked" : ""
                    }`}
                  >
                    {level?.name}
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </div>

            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">
                Learning Type
              </p>
              <Checkbox.Group
                className=" flex gap-2 "
                onChange={(checkedValues) => {
                  setattendance(checkedValues);
                  setFieldValue("learningType", checkedValues);
                }}
              >
                {deliveryMethodsData?.data?.map((level: any) => (
                  <Checkbox
                    key={level}
                    value={level?.slug}
                    checked={values.learningType.includes(level?.slug)}
                    className={`custom-checkbox-button ${
                      values.learningType.includes(level?.slug) ? "checked" : ""
                    }`}
                  >
                    {level?.name}
                  </Checkbox>
                ))}
              </Checkbox.Group>

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
                mode="multiple"
                className=" w-full h-[45px]"
                showSearch
                placeholder="Select Countries"
                optionFilterProp="children"
                onChange={(value: any) => {
                  setcountrySlug(value);
                  setFieldValue("destination", value);
                }}
                onSearch={onSearch}
                filterOption={filterOption}
                options={countryOptions}
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
                options={countryOptions}
              />

              {/* <ErrorMessage
                name="subject"
                component="div"
                className="text-red-500 text-sm"
              /> */}
            </div>

            <div className=" border rounded p-6 ">
              <p className=" text-h5 font-bold text-black mb-4">Start Date</p>
              <Checkbox.Group
                className=" flex gap-2 "
                onChange={(checkedValues) => {
                  setstudyLevel(checkedValues);
                  setFieldValue("startDate", checkedValues);
                }}
              >
                {["2020", "2021", "2022", "2023", "2024"]?.map((level: any) => (
                  <Checkbox
                    key={level}
                    value={level}
                    checked={values.startDate.includes(level)}
                    className={`custom-checkbox-button ${
                      values.startDate.includes(level) ? "checked" : ""
                    }`}
                  >
                    {level}
                  </Checkbox>
                ))}
              </Checkbox.Group>

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
                  setscholarship(
                    e.target.value === "Scholarship" ? true : false
                  );
                  setFieldValue("Scholarship", e.target.value);
                }}
              >
                <Radio.Button className="" value="Personal ">
                  Personal Funding
                </Radio.Button>
                <Radio.Button value="Loan">Loan</Radio.Button>
                <Radio.Button value="Scholarship">Scholarship</Radio.Button>
                <Radio.Button className="" value="Family">
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
                  if (e?.target.value === "1") {
                    settuitionFrom(0);
                    settuitionTo(6000);
                  } else if (e?.target.value === "2") {
                    settuitionFrom(6000);
                    settuitionTo(12000);
                  } else if (e?.target.value === "3") {
                    settuitionFrom(2000);
                    settuitionTo(60000);
                  }
                  setFieldValue("budget", e.target.value);
                }}
              >
                <Radio.Button value="1">Less then $6,000</Radio.Button>
                <Radio.Button value="2">
                  Between $6,000 and $12,000
                </Radio.Button>
                <Radio.Button value="3">More than $20,000</Radio.Button>
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

export default StudyPlansForm;
