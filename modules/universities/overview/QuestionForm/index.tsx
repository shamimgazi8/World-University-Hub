import { Select, Spin, message } from "antd";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import React, { useState } from "react";
import {
  IoIosCloudDone,
  IoMdArrowForward,
  IoMdCloudDone,
} from "react-icons/io";
import { generateQueryString } from "@/helpers/utils";
import {
  useGetCoursesQuery,
  useGetspecializationQuery,
} from "@/appstore/university/university-api";
import { useGetCountriesQuery } from "@/appstore/global/global-api";
import { useCreateContactFormMutation } from "@/appstore/global-form/form-api";
import { useGetSpecializationQuery } from "@/appstore/specialization/specialization-api";
import { MdDoneAll } from "react-icons/md";
import PhoneInput from "react-phone-input-2";
import SucessMsg from "./@components/SucessMsg";
const initialValues = {
  firstName: "",
  lastName: "",
  help: "",
  interestedSpecialization: "",
  livingCountry: "",
  countryOfPassport: "",
  email: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string()
    .required("Invalid lastName")
    .required("Last Name is required"),
  interestedSpecialization: Yup.string().required(
    "Interested Programs is required"
  ),
  // help: Yup.string().required("How can we help you?"),

  livingCountry: Yup.string().required("Country of Residence  required"),
  passportCountry: Yup.string().required("Passport Country Name required"),
  email: Yup.string().required("E-mail is required"),
});

const QuestionForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const queryParams = {};
  const queryString = generateQueryString(queryParams);
  const { data: courseList } = useGetCoursesQuery(queryString);
  const { data: countryList } = useGetCountriesQuery(queryString);
  const [submitFrom, { isLoading }] = useCreateContactFormMutation();
  const { data: SpecalizedData } = useGetSpecializationQuery("");

  const SpeciOption: any = [];
  SpecalizedData?.data?.map((item: any, i: any) => {
    return SpeciOption.push({
      value: item?.slug,
      label: item?.name,
    });
  });

  const SubmitHandler = async (values: any) => {
    const payload = {
      firstName: values?.firstName,
      lastName: values?.lastName,
      email: values?.email,
      mobile: values?.mobile,
      livingCountry: values?.livingCountry,
      interestedSpecialization: values?.interestedSpecialization,
      countryOfPassport: values?.passportCountry,
      message: values?.message,
      tAndC: true,
    };

    try {
      const response: any = await submitFrom(payload);
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      if (response.error) {
        if (response.error.status === 400) {
          message.error(response.error.data.message);
        } else {
          message.error(
            response.error.data.message
              ? response.error.data.message
              : "Something went wront. Please try again!"
          );
        }
      }
    } catch (error) {}
  };

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
    <div className=" mx-0  self-start  top-[72px] lg:top-[75px] z-[100] transition-all ">
      {isSubmitted ? (
        <SucessMsg />
      ) : (
        <div className=" p-6 border rounded">
          <h1 className="  text-h5 leading-[1.4] mb-4">
            Complete this form and the school's admissions team will reply to
            you.
          </h1>
          <div>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={(values, { resetForm }) => {
                SubmitHandler(values);
              }}
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
                        errors.interestedSpecialization &&
                        touched.interestedSpecialization
                          ? "border-red-500"
                          : "focus:border-blue-500"
                      }`}
                      onChange={(val) => {
                        setFieldValue("help", val);
                      }}
                      value={values?.help ? values?.help : undefined}
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
                        errors.interestedSpecialization &&
                        touched.interestedSpecialization
                          ? "border-red-500"
                          : "focus:border-blue-500"
                      }`}
                      onChange={(val) => {
                        setFieldValue("interestedSpecialization", val);
                      }}
                      value={
                        values?.interestedSpecialization
                          ? values?.interestedSpecialization
                          : undefined
                      }
                      options={SpeciOption}
                    />
                    {touched.interestedSpecialization &&
                    errors.interestedSpecialization ? (
                      <div style={{ color: "red", fontSize: "14px" }}>
                        {errors.interestedSpecialization}
                      </div>
                    ) : null}
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
                        errors.livingCountry && touched.livingCountry
                          ? "border-red-500"
                          : "focus:border-blue-500"
                      }`}
                      onChange={(val) => {
                        setFieldValue("livingCountry", val);
                      }}
                      value={
                        values?.livingCountry
                          ? values?.livingCountry
                          : undefined
                      }
                      options={countryOption}
                    />
                    {touched.livingCountry && errors.livingCountry ? (
                      <div style={{ color: "red", fontSize: "14px" }}>
                        {errors.livingCountry}
                      </div>
                    ) : null}
                  </div>
                  <div className="mb-4">
                    <label htmlFor="passportCountry" className="block mb-1">
                      Passport Country Name *
                    </label>
                    <Select
                      allowClear
                      placeholder={"Select Residence"}
                      className={`  w-full  ${
                        errors.countryOfPassport && touched.countryOfPassport
                          ? "border-red-500"
                          : "focus:border-blue-500"
                      }`}
                      onChange={(val) => {
                        setFieldValue("passportCountry", val);
                      }}
                      value={
                        values?.countryOfPassport
                          ? values?.countryOfPassport
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
                  <div className="w-full">
                    <PhoneInput
                      country={"bd"}
                      onChange={(value) => setFieldValue("mobile", value)}
                      containerClass="w-full"
                      inputClass="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                  </div>

                  <div className="my-4">
                    <label htmlFor="message" className="block mb-1">
                      Message
                    </label>
                    {/* <Field
                      type="text"
                      id="message"
                      name="message"
                      placeholder="message"
                      className={`form-input px-[15px] py-[10px] border w-full h-[123px] !placeholder:text-start  ${
                        errors.message && touched.message
                          ? "border-red-500"
                          : "focus:border-blue-500"
                      }`}
                    /> */}
                    <textarea
                      rows={4}
                      name="message"
                      onChange={(e) => setFieldValue("message", e.target.value)}
                      value={
                        values.message && values.message !== ""
                          ? values.message
                          : ""
                      }
                      placeholder="Message"
                      className="w-full px-3 p-2 focus:outline-none placeholder:text-body rounded border focus:border-purple-300"
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
                        Your contact details will only be used for the
                        admissions process.
                      </p>
                    </div>
                    <div className=" flex gap-[10px]">
                      <div className=" w-[30px] mt-1">
                        <IoMdArrowForward className=" text-[#A965E9] " />
                      </div>
                      <p className=" mb-0 text-c4 ">
                        Your information will be sent directly to the program
                        provider. If available, we will also send you
                        information about the requested and relevant programs
                        and a link where you can sign up for the program
                        directly.
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
                  {isSubmitted ? (
                    <button
                      className={` w-full py-3 px-[24px] rounded ${
                        isLoading ? "disabled border " : "btn btn-primary"
                      }`}
                      disabled
                    >
                      {isLoading ? (
                        <Spin />
                      ) : (
                        <>
                          {" "}
                          <MdDoneAll className=" text-xl" /> Done{" "}
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      disabled={isSubmitted}
                      type="submit"
                      className={` w-full py-3 px-[24px] rounded ${
                        isLoading ? "disabled border " : "btn btn-primary"
                      }`}
                    >
                      {isLoading ? <Spin /> : "Submit"}
                    </button>
                  )}
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}

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
