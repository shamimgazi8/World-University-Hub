import { Select } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import React from "react";
import { IoMdArrowForward } from "react-icons/io";
import { generateQueryString } from "@/helpers/utils";
import { useGetCoursesQuery } from "@/appstore/university/university-api";
import { useGetCountriesQuery } from "@/appstore/global/global-api";
const initialValues = {
  firstName: "",
  lastName: "",
  help: "",
  program: "",
  country: "",
  passportCountry: "",
  email: "",
  message: "",
};
const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string()
    .required("Invalid lastName")
    .required("Last Name is required"),
  program: Yup.string().required("program is required"),
  help: Yup.string().required("How can we help you?"),
  country: Yup.string().required("Country of Residence  required"),
  passportCountry: Yup.string().required("Passport Country Name required"),
  email: Yup.string().required("E-mail is required"),
});
const handleSubmit = (values: any, { resetForm }: any) => {
  console.log("Form submitted:", values);
  resetForm();
};

const QuestionForm = () => {
  const queryParams = {};
  const queryString = generateQueryString(queryParams);
  const { data: courseList } = useGetCoursesQuery(queryString);
  const { data: countryList } = useGetCountriesQuery(queryString);

  const courseOption: any = [];
  courseList?.data?.map((item: any, i: any) => {
    courseOption.push({
      value: item?.displayName,
      label: item?.displayName,
    });
  });
  const countryOption: any = [];
  countryList?.data?.map((item: any, i: any) => {
    countryOption.push({
      value: item?.slug,
      label: item?.name,
    });
  });
  return (
    <div className=" mx-0  self-start  top-[72px] lg:top-[75px] z-[100] ">
      <div className=" p-6 border rounded">
        <h1 className="  text-h5 leading-[1.4] mb-4">
          Complete this form and the school's admissions team will reply to you.
        </h1>
        <div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, values, setFieldValue }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="help" className="block mb-1">
                    How can we help you? *
                  </label>

                  <Select
                    allowClear
                    placeholder={"How can we help you?"}
                    className={`  w-full  ${
                      errors.program && touched.program
                        ? "border-red-500"
                        : "focus:border-blue-500"
                    }`}
                    onChange={(val) => {
                      setFieldValue("help", val);
                    }}
                    value={values?.help ? values?.help : undefined}
                    options={[
                      {
                        value: "jack",
                        label: "Jack ",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                    ]}
                  />

                  <ErrorMessage
                    name="help"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="program" className="block mb-1">
                    Program of Interest *
                  </label>
                  <Select
                    allowClear
                    placeholder={"Select Program"}
                    className={`  w-full  ${
                      errors.program && touched.program
                        ? "border-red-500"
                        : "focus:border-blue-500"
                    }`}
                    onChange={(val) => {
                      setFieldValue("program", val);
                    }}
                    value={values?.program ? values?.program : undefined}
                    options={courseOption}
                  />

                  <ErrorMessage
                    name="program"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="firstName" className="block mb-1">
                    First Name
                  </label>
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className={`form-input px-[15px] py-[10px] border w-full  ${
                      errors.firstName && touched.firstName
                        ? "border-red-500"
                        : "focus:border-blue-500"
                    }`}
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="lastName" className="block mb-1">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className={`form-input px-[15px] py-[10px] border w-full ${
                      errors.lastName && touched.lastName
                        ? "border-red-500"
                        : "focus:border-blue-500"
                    }`}
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="country" className="block mb-1">
                    Country of Residence *
                  </label>
                  <Select
                    allowClear
                    placeholder={"Select Residence"}
                    className={`  w-full  ${
                      errors.country && touched.country
                        ? "border-red-500"
                        : "focus:border-blue-500"
                    }`}
                    onChange={(val) => {
                      setFieldValue("country", val);
                    }}
                    value={values?.country ? values?.country : undefined}
                    options={countryOption}
                  />
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="passportCountry" className="block mb-1">
                    Passport Country Name *
                  </label>
                  <Select
                    allowClear
                    placeholder={"Select Residence"}
                    className={`  w-full  ${
                      errors.passportCountry && touched.passportCountry
                        ? "border-red-500"
                        : "focus:border-blue-500"
                    }`}
                    onChange={(val) => {
                      setFieldValue("passportCountry", val);
                    }}
                    value={
                      values?.passportCountry
                        ? values?.passportCountry
                        : undefined
                    }
                    options={countryOption}
                  />
                  <ErrorMessage
                    name="passportCountry"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-1">
                    Email
                  </label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="email"
                    className={`form-input px-[15px] py-[10px] border w-full  ${
                      errors.email && touched.email
                        ? "border-red-500"
                        : "focus:border-blue-500"
                    }`}
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block mb-1">
                    Message
                  </label>
                  <Field
                    type="text"
                    id="message"
                    name="message"
                    placeholder="message"
                    className={`form-input px-[15px] py-[10px] border w-full h-[123px] !placeholder:text-start  ${
                      errors.message && touched.message
                        ? "border-red-500"
                        : "focus:border-blue-500"
                    }`}
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div className=" grid gap-4">
                  <div className=" flex gap-[10px]">
                    <div className=" mt-1">
                      <IoMdArrowForward className=" text-[#A965E9]" />
                    </div>
                    <p className=" mb-0 text-c4 ">
                      Your contact details will only be used for the admissions
                      process.
                    </p>
                  </div>
                  <div className=" flex gap-[10px]">
                    <div className=" w-[30px] mt-1">
                      <IoMdArrowForward className=" text-[#A965E9] " />
                    </div>
                    <p className=" mb-0 text-c4 ">
                      Your information will be sent directly to the program
                      provider. If available, we will also send you information
                      about the requested and relevant programs and a link where
                      you can sign up for the program directly.
                    </p>
                  </div>

                  <p className=" mb-4 text-c4">
                    See Keystone Academic Solutions
                    <Link
                      href={"/privacy"}
                      className=" text-[#A965E9] cursor-pointer"
                    >
                       Terms and Privacy{" "}
                    </Link>
                    statement.
                  </p>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary px-[24px] py-[12px] rounded w-full"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {/* <div className="mt-7 hidden lg:block">
    <AdvertisementSideSm />
  </div> */}
      {/* <UniversityOverviewStatistics
    className="uni-section"
    id="statistics"
    data={data}
  /> */}
    </div>
  );
};

export default QuestionForm;
