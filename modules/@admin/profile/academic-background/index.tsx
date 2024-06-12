"use client";
import {
  useGetAllLevelQuery,
  useGetAllSpecializationQuery,
} from "@/appstore/user/utility/utility-api";
import { generateQueryString } from "@/helpers/utils";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Input, Select, TreeSelect } from "antd";
import { Field, Form, Formik } from "formik";
import "react-phone-input-2/lib/style.css";
import * as Yup from "yup";
import genderOptions from "../../../../data/gender.json";
import britishGradeOptions from "../../../../data/british-grade-options.json";
import gradingStystemOptions from "../../../../data/gradding-options.json";
const AcademicBackground = () => {
  const [parent] = useAutoAnimate();

  const queryParams: any = {
    limit: 300,
    withChild: true,
  };
  const queryString = generateQueryString(queryParams);

  const {
    data: specializationOptions,
    isLoading: specializationLoading,
    isError: specializationError,
  } = useGetAllSpecializationQuery(queryString);

  const { data: levelOptions, isLoading: levelLoading } = useGetAllLevelQuery(
    {}
  );

  const profileInit = {
    courseLevelId: undefined,
    specializationIds: [],
    gradingStystem: undefined,
    graduationYear: undefined,
    score: undefined,
    gender: undefined,
    dob: "",
    mobileNumber: "",
    username: "",
    countryId: undefined,
    zipCode: "",
    socialLink: {
      platform: "LinkedIn",
      link: "",
    },
    language: {
      primaryLanguage: undefined,
      secondaryLanguage: undefined,
    },
  };
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    mobileNumber: Yup.string()
      .required("Mobile number is required")
      .min(9, "Mobile number not valid"),
  });

  const academicDataHandler = async (values: any) => {};

  const getYearsArray = () => {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - 5;
    const endYear = currentYear + 1;
    const years = [];

    for (let year = startYear; year <= endYear; year++) {
      years.push({
        label: year.toString(),
        value: year.toString(),
      });
    }

    return years;
  };

  return (
    <div>
      <h4 className="mb-5">
        <span className="text-gradient">Academic Background</span>
      </h4>

      <Formik
        initialValues={profileInit}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          academicDataHandler(values);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="w-full">
            <div className=" gap-x-4 gap-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="email" className="font-medium">
                    Highest Level
                  </label>
                  <div>
                    <Select
                      className="w-full rounded-none mt-1"
                      allowClear
                      showSearch
                      optionFilterProp="label"
                      placeholder="Course Level"
                      size="large"
                      onChange={(val: any) => {
                        setFieldValue("courseLevelId", val);
                      }}
                      options={levelOptions}
                      value={values.courseLevelId ?? []}
                    />
                  </div>
                </div>
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="email" className="font-medium">
                    Specializations
                  </label>
                  <div className="mt-1">
                    <TreeSelect
                      showSearch
                      filterTreeNode={(inputValue: string, treeNode: any) =>
                        treeNode.title
                          .toLowerCase()
                          .includes(inputValue.toLowerCase())
                      }
                      treeNodeFilterProp="title"
                      style={{ width: "100%" }}
                      value={values?.specializationIds ?? []}
                      dropdownStyle={{ maxHeight: 400, overflow: "auto" }}
                      placeholder="Specializations"
                      allowClear
                      multiple
                      size="large"
                      onChange={(e: any) => {
                        setFieldValue("specializationIds", e);
                      }}
                      treeData={specializationOptions}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="email" className="font-medium">
                    Grading System
                  </label>
                  <Select
                    className="w-full rounded-none mt-1"
                    allowClear
                    placeholder="Grading System"
                    size="large"
                    onChange={(val: any) => {
                      setFieldValue("gradingStystem", val);
                      setFieldValue("score", undefined);
                    }}
                    options={gradingStystemOptions}
                    value={values.gradingStystem ?? undefined}
                  />
                </div>
                <div ref={parent} className="form_group relative mt-0 md:mt-3">
                  <label htmlFor="username" className="font-medium">
                    Achieved Score
                  </label>

                  {values?.gradingStystem === "British Degree" ? (
                    <Select
                      className="w-full rounded-none mt-1"
                      allowClear
                      placeholder="Achieved Score"
                      size="large"
                      onChange={(val: any) => {
                        setFieldValue("score", val);
                      }}
                      options={britishGradeOptions}
                      value={values.score ?? undefined}
                    />
                  ) : (
                    <Field
                      type="number"
                      name="score"
                      placeholder="Achieved Score"
                      className={`border mt-1 px-4 py-2 w-full`}
                    />
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
                <div ref={parent} className="form_group relative mt-0 md:mt-3">
                  <label htmlFor="username" className="font-medium">
                    Graduation Year
                  </label>

                  <div>
                    <Select
                      className="w-full rounded-none mt-1"
                      allowClear
                      placeholder="Graduation Year"
                      size="large"
                      onChange={(val: any) =>
                        setFieldValue("graduationYear", val)
                      }
                      options={getYearsArray()}
                      value={values.graduationYear ?? undefined}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-3 mb-3">
                <label className="font-medium">English Test Scores</label>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <div ref={parent} className="form_group relative">
                  <Input
                    className="exam_score"
                    size="large"
                    addonBefore="IELTS"
                    defaultValue="50"
                    max={1000}
                    min={1}
                    type="number"
                    onChange={(e: any) => console.log(e)}
                  />
                </div>
              </div>

              <div className="mt-3 mb-3">
                <label className="font-medium">Academic Test Scores</label>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <div ref={parent} className="form_group relative">
                  <Input
                    className="exam_score"
                    size="large"
                    addonBefore="SAT"
                    defaultValue="50"
                    max={1000}
                    min={1}
                    type="number"
                  />
                </div>
              </div>
            </div>
            <div className="flex">
              <button
                type="submit"
                className={`btn btn-primary w-full md:w-1/4 mt-5 mb-3 ml-auto`}
              >
                Update
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AcademicBackground;
