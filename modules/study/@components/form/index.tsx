"use client";
import MOKTER from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Alert, Checkbox, Select } from "antd";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validationSchema } from "../../utils";
import { useCreateContactFormMutation } from "@/appstore/global-form/form-api";
import { generateQueryString } from "@/helpers/utils";
import { useGetUniversitiesQuery } from "@/appstore/university/university-api";
import { useGetAllCityQuery } from "@/appstore/city/city-api";
import { useGetCountriesQuery } from "@/appstore/global/global-api";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

interface propTypes {
  className?: string;
  isTitle?: boolean;
  path?: any;
}

const PhoneInput =
  (MOKTER as any).default !== undefined ? (MOKTER as any) : MOKTER;

const MessageForm = ({ isTitle = true, path, className }: propTypes) => {
  const [cityName, setCityName] = useState("");
  const sourcePath = `${baseUrl}${path}`;

  const [message, setMessage] = useState("");

  const [country, setCountry] = useState("");

  const [createForm, { isLoading: createLoading }] =
    useCreateContactFormMutation();

  // Country Query Param
  const queryParams: any = {
    page: 1,
    limit: 500,
  };
  // Country Query String
  const queryString = generateQueryString(queryParams);
  const { data, isFetching } = useGetCountriesQuery(queryString);

  const countryOption =
    data &&
    data?.data?.map((item: any) => {
      return {
        label: item?.name,
        value: item?.slug?.toString(),
      };
    });

  //city query Params
  const cityQueryParams = {
    name: cityName,
    page: 1,
    limit: 100,
  };

  const cityQueryString = generateQueryString(cityQueryParams);
  const { data: cityData, isFetching: isCityFetching } =
    useGetAllCityQuery(cityQueryString);

  console.log("cityData", cityData);

  const createHandler = async (values: any, resetForm: any) => {
    try {
      const res: any = await createForm({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        mobile: parseInt(values.mobile),
        age: 0,
        country: "bangladesh",
        city: values.city,
        intakeYear: 2024,
        livingCountry: "string",
        livingCity: values.livingCity,
        sourceSlug: "string",
        reference: "COUNTRY",
        message: values.message,
        tAndC: values.tAndC,
      });

      if (!res?.error) {
        resetForm();
        <Alert
          message={`${
            res?.success?.data?.message
              ? res?.success?.data?.message
              : "Form Submit Successful"
          }`}
          type="success"
        />;
      } else {
        <Alert
          message={`${
            res?.error?.data?.message
              ? res?.error?.data?.message
              : "Somthing went wrong"
          }`}
          type="error"
        />;
      }
    } catch (err) {}
  };

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    sourceSlug: sourcePath,
    reference: ["COUNTRY"],

    message: "",
    tAndC: false,
  };

  return (
    <div
      className={`bg-grey px-7 py-8 rounded-md ${className ? className : ""}`}
    >
      {isTitle ? <h4 className="text-center">Message the School</h4> : null}
      <Formik
        initialValues={initialValues}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values: any, { resetForm }) => {
          createHandler(values, resetForm);
          console.log("values", values);
        }}
      >
        {({ handleSubmit, setFieldValue, errors, values, touched }: any) => (
          <Form>
            <div className="mt-4">
              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                className="w-full px-3 p-2 focus:outline-none placeholder:text-body rounded border focus:border-purple-300"
              />
              {errors?.firstName && touched?.firstName ? (
                <span className="text-danger text-xs">{errors?.firstName}</span>
              ) : null}
            </div>
            <div className="mt-4">
              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                className="w-full px-3 p-2 focus:outline-none placeholder:text-body rounded border focus:border-purple-300"
              />
            </div>
            <div className="mt-4">
              <Field
                type="text"
                name="email"
                placeholder="Email"
                className="w-full px-3 p-2 focus:outline-none placeholder:text-body rounded border focus:border-purple-300"
              />
            </div>
            <div className="mt-4">
              <Field
                type="text"
                name="mobile"
                placeholder="Phone Number"
                className="w-full px-3 p-2 focus:outline-none placeholder:text-body rounded border focus:border-purple-300"
              />
            </div>
            <div className="my-4">
              <Select
                allowClear
                placeholder={"Country"}
                className={`  w-full outline-none focus:outline-none border-none  ${
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
            <div className="mt-4">
              <Field
                type="text"
                name="Passport"
                placeholder="Passport"
                className="w-full px-3 p-2 focus:outline-none placeholder:text-body rounded border focus:border-purple-300"
              />
            </div>
            <div className="mt-4">
              <Field
                type="text"
                name="town"
                placeholder="Town"
                className="w-full px-3 p-2 focus:outline-none placeholder:text-body rounded border focus:border-purple-300"
              />
            </div>
            <div className="my-4">
              <Select
                allowClear
                placeholder={"Country"}
                className={`  w-full outline-none focus:outline-none border-none  ${
                  errors.country && touched.country
                    ? "border-red-500"
                    : "focus:border-blue-500"
                }`}
                onChange={(val) => {
                  setFieldValue("country", val);
                }}
                value={values?.country ? values?.country : undefined}
                options={[
                  {
                    label: "Male",
                    value: "male",
                  },
                  {
                    label: "Female",
                    value: "female",
                  },
                ]}
              />
              <ErrorMessage
                name="country"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            {/* <div className="antd_select_border_remove mt-4 w-full">
              <Select
                placeholder="Country"
                size={"large"}
                className="w-full !border-0 bg-white "
                showSearch
                allowClear
                onChange={(val) => setFieldValue("country", val)}
                filterOption={(input: any, option: any) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                options={countryOption}
                value={
                  values?.country && values?.country != ""
                    ? values?.country
                    : ""
                }
              />
            </div> */}
            {/* <div className="mt-4">
              <Select
                placeholder="City/Town"
                size={"large"}
                className="w-full !border-0"
                onChange={(val) => setFieldValue("city", val)}
                filterOption={(input: any, option: any) =>
                  (option?.label ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }
                value={values?.city && values?.city != "" ? values?.city : ""}
                options={countryOption}
              />
            </div>
            <div className="antd_select_border_remove mt-4">
              <Select
                placeholder="Gender"
                size={"large"}
                className="w-full !border-0"
                onChange={(val) => console.log(val)}
                options={[{ label: "Australia", value: "test" }]}
              />
            </div> */}

            <div className="mt-4">
              <textarea
                rows={4}
                name="message"
                onChange={(e) => setFieldValue("message", e.target.value)}
                value={
                  values.message && values.message !== "" ? values.message : ""
                }
                placeholder="Message"
                className="w-full px-3 p-2 focus:outline-none placeholder:text-body rounded border focus:border-purple-300"
              />
              {errors?.message && touched?.message ? (
                <span className="text-danger text-xs">{errors?.message}</span>
              ) : null}
            </div>
            <div className="mt-4">
              <Checkbox
                onChange={(e) => setFieldValue("tAndC", e.target?.checked)}
              >
                <span> I accept the Terms and Conditions & Privacy Policy</span>
              </Checkbox>
            </div>
            <div className="mt-4">
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="btn btn-primary w-full rounded"
              >
                Send Message
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MessageForm;
