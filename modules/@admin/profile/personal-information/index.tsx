"use client";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { DatePicker, Select, Spin, Upload, UploadProps, message } from "antd";
import dayjs from "dayjs";
import { Field, Form, Formik } from "formik";
import moment from "moment";
import Image from "next/image";
import { GrEdit } from "react-icons/gr";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import languageData from "../../../../data/languages.json";
import genderOptions from "../../../../data/gender.json";
import * as Yup from "yup";
import { generateQueryString } from "@/helpers/utils";
import { useGetAllCountryQuery } from "@/appstore/user/utility/utility-api";
import {
  useProfileQuery,
  useUpdateProfileMutation,
} from "@/appstore/user/auth/auth-api";
import { useEffect, useState } from "react";
const PersonalInformationPage = () => {
  const getBase64 = (img: any, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result as string));
    reader.readAsDataURL(img);
  };
  const [imageUrl, setImageUrl] = useState<string>();

  const [parent] = useAutoAnimate();
  const [updateProfile, { isLoading }] = useUpdateProfileMutation();
  const [profileAvatar, setProfileAvatar] = useState<File | null>(null);

  const queryParams: any = {
    limit: 300,
  };
  const queryString = generateQueryString(queryParams);

  const {
    data: countryOptions,
    isLoading: countryLoading,
    isError,
  } = useGetAllCountryQuery(queryString);
  const { data: profileInfo, isLoading: profileLoading } = useProfileQuery({});

  // useEffect(() => {
  //   setImageUrl(profileInfo?.ProfileImage);
  //   if (imageUrl) {
  //     getBase64(profileInfo?.ProfileImage, (url) => {
  //       setImageUrl(url);
  //     });
  //   }
  // }, [profileInfo]);
  useEffect(() => {
    profileInfo?.ProfileImage && setImageUrl(profileInfo?.ProfileImage);
    console.log("img url", imageUrl);
  }, [profileInfo]);
  const language = !profileLoading && (JSON.parse(profileInfo?.language) ?? {});
  const socialLink =
    !profileLoading && (JSON.parse(profileInfo?.socialLink) ?? {});

  const profileInit: any = {
    firstName: profileInfo?.firstName ? profileInfo.firstName : "",
    lastName: profileInfo?.lastName ? profileInfo?.lastName : "",
    email: profileInfo?.email ? profileInfo.email : "",
    gender: profileInfo?.gender ? profileInfo?.gender : undefined,
    dob: profileInfo?.dob ? profileInfo?.dob : "",
    mobileNumber: profileInfo?.mobileNumber ? profileInfo?.mobileNumber : "",
    ProfileImage: profileInfo?.ProfileImage ? profileInfo?.ProfileImage : "",

    username: profileInfo?.username ? profileInfo?.username : "",
    countryId: profileInfo?.countryId ? profileInfo?.countryId : undefined,
    zipCode: profileInfo?.zipCode ? profileInfo?.zipCode : "",
    socialLink: {
      platform: "LinkedIn",
      link: socialLink?.link ? socialLink?.link : "",
    },
    language: {
      primaryLanguage: language?.primaryLanguage
        ? language?.primaryLanguage
        : undefined,
      secondaryLanguage: language?.secondaryLanguage
        ? language?.secondaryLanguage
        : undefined,
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

  const personalDataHandler = async (values: any) => {
    const formData = new FormData();
    formData.append("firstName", values?.firstName);
    formData.append("lastName", values?.lastName);

    if (values?.dialingCode) {
      formData.append("dialingCode", values?.dialingCode);
    }
    if (profileAvatar) formData.append("ProfileImage", profileAvatar);

    formData.append("mobileNumber", values?.mobileNumber);
    formData.append("gender", values?.gender);
    formData.append("dob", values?.dob);

    if (!isNaN(values?.countryId)) {
      formData.append("countryId", values?.countryId);
    }

    // Ensure socialLink is an object
    if (typeof values?.socialLink === "object") {
      formData.append("socialLink", JSON.stringify(values?.socialLink));
    }

    // Ensure language is an object
    if (typeof values?.language === "object") {
      formData.append("language", JSON.stringify(values?.language));
    }

    formData.append("zipCode", values?.zipCode);
    const response: any = await updateProfile(formData);
    console.log(response?.data?.message, "response");
    response && message.success("Profile Update Sucessfully");
  };

  const maxDate = moment().subtract(14, "years");

  const disabledDate = (current: any) => {
    if (!current) {
      return false;
    }
    // Disable dates that are later than the maximum date
    return current > maxDate;
  };

  return (
    <div>
      <h4 className="mb-5">
        <span className="text-gradient">Personal Information</span>
      </h4>

      <Formik
        initialValues={profileInit}
        enableReinitialize={true}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          personalDataHandler(values);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="w-full">
            <div className=" gap-x-4 gap-y-10">
              <div className="lg:max-w-screen-lg mx-auto sm:grid grid-cols-[115px_1fr] gap-5 w-full mb-3">
                <div className="relative w-[115px] h-[115px] flex items-center justify-center cursor-pointer">
                  <Upload
                    maxCount={1}
                    accept="jpg"
                    showUploadList={false}
                    beforeUpload={(file) => {
                      const acceptedFormats = [
                        "image/jpeg",
                        "image/jpg",
                        "image/png",
                      ];
                      const maxFileSize = 1 * 1024 * 1024; // 1MB in bytes

                      if (!acceptedFormats.includes(file.type)) {
                        message.error(
                          "Invalid file format. Please upload a JPG, JPEG, or PNG file."
                        );
                        return false;
                      }

                      if (file.size > maxFileSize) {
                        message.error(
                          "File size exceeds the maximum limit of 1MB."
                        );
                        return false;
                      }

                      setProfileAvatar(file);
                      getBase64(file, (url) => {
                        setImageUrl(url);
                      });
                      return false;
                    }}
                  >
                    <div className="rounded-full h-[130px] w-[130px]">
                      <Image
                        src={imageUrl ?? "/misc/avatar-lg.png"}
                        width={500}
                        height={500}
                        alt="profile"
                        className="rounded-full z-100 object-cover h-full w-full"
                      />
                    </div>

                    <div className="flex justify-center items-center absolute bottom-0 right-0 w-[35px] h-[35px] rounded-full bg-white z-20">
                      <GrEdit />
                    </div>
                  </Upload>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div ref={parent} className="form_group relative">
                  <label htmlFor="firstName" className="font-medium">
                    First Name <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    className={`border mt-1 px-4 py-2 w-full ${
                      errors?.firstName && touched?.firstName
                        ? "border-red-500"
                        : undefined
                    }`}
                  />
                  {errors?.firstName && touched?.firstName ? (
                    <div className="text-danger">
                      {errors?.firstName as React.ReactNode}
                    </div>
                  ) : null}
                </div>
                <div className="form_group relative">
                  <label htmlFor="lastName" className="font-medium">
                    Last Name
                  </label>
                  <Field
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    className="border mt-1 px-4 py-2 w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="email" className="font-medium">
                    Email <span className="text-danger">*</span>
                  </label>
                  <Field
                    disabled
                    type="text"
                    name="email"
                    placeholder="Email"
                    className={`border mt-1 px-4 py-2 w-full cursor-not-allowed	 ${
                      errors?.email && touched?.email
                        ? "border-red-500"
                        : undefined
                    }`}
                  />
                  {errors?.email && touched?.email ? (
                    <div className="text-danger">
                      {errors?.email as React.ReactNode}
                    </div>
                  ) : null}
                </div>
                <div ref={parent} className="form_group relative mt-0 md:mt-3">
                  <label htmlFor="username" className="font-medium">
                    Username <span className="text-danger">*</span>
                  </label>
                  <Field
                    disabled
                    type="text"
                    name="username"
                    placeholder="Username"
                    className={`border mt-1 px-4 py-2 w-full cursor-not-allowed	 ${
                      errors?.username && touched?.username
                        ? "border-red-500"
                        : undefined
                    }`}
                  />
                  {errors?.username && touched?.username ? (
                    <div className="text-danger">
                      {errors?.username as React.ReactNode}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="email" className="font-medium">
                    Gender
                  </label>
                  <div>
                    <Select
                      className="w-full rounded-none mt-1"
                      allowClear
                      placeholder="Gender"
                      size="large"
                      onChange={(val: any) => setFieldValue("gender", val)}
                      options={genderOptions}
                      value={values.gender ?? undefined}
                      labelInValue
                    />
                  </div>
                </div>
                <div ref={parent} className="form_group relative mt-0 md:mt-3">
                  <label htmlFor="username" className="font-medium">
                    Date Of Birth
                  </label>

                  <div>
                    <DatePicker
                      defaultPickerValue={
                        values?.dob && values?.dob !== ""
                          ? dayjs(values.dob, "YYYY-MM-DD")
                          : dayjs().subtract(14, "years")
                      }
                      value={
                        values?.dob && values?.dob !== ""
                          ? dayjs(values.dob, "YYYY-MM-DD")
                          : undefined
                      }
                      className="w-full rounded-none mt-1 p-2"
                      onChange={(_, dateString) => {
                        setFieldValue("dob", dateString);
                      }}
                      disabledDate={disabledDate}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="email" className="font-medium">
                    Country {countryLoading && <Spin />}
                  </label>
                  <div>
                    <Select
                      className="w-full rounded-none mt-1"
                      allowClear
                      placeholder="Country"
                      size="large"
                      onChange={(val: any) => setFieldValue("countryId", val)}
                      options={countryOptions}
                      value={values.countryId ?? undefined}
                    />
                  </div>
                </div>
                <div ref={parent} className="form_group relative mt-0 md:mt-3">
                  <label htmlFor="username" className="font-medium">
                    Zip Code
                  </label>

                  <div>
                    <Field
                      type="text"
                      name="zipCode"
                      placeholder="Zip Code"
                      className={`border mt-1 px-4 py-2 w-full`}
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="email" className="font-medium">
                    LinkedIn Profile Link
                  </label>
                  <div>
                    <Field
                      type="text"
                      name="linkedIn"
                      placeholder=" LinkedIn Profile Link"
                      className={`border mt-1 px-4 py-2 w-full`}
                      onChange={(e: any) => {
                        setFieldValue("socialLink.link", e.target.value);
                      }}
                      value={values.socialLink.link}
                    />
                  </div>
                </div>
                <div ref={parent} className="form_group relative  mt-3">
                  <label htmlFor="mobileNumber" className="font-medium">
                    Mobile <span className="text-danger">*</span>
                  </label>

                  <PhoneInput
                    inputClass={`!w-full !h-auto py-2 !rounded-none !border ${
                      errors?.mobileNumber && touched?.mobileNumber
                        ? "!border-red-500"
                        : "!border-[#e5e7eb]"
                    }`}
                    country={"bd"}
                    value={values?.mobileNumber ?? undefined}
                    onChange={(phone) => {
                      setFieldValue("mobileNumber", phone);
                    }}
                    inputProps={{
                      name: "mobileNumber",
                      required: true,
                    }}
                  />
                  {errors?.mobileNumber && touched?.mobileNumber ? (
                    <div className="text-danger">
                      {errors?.mobileNumber as React.ReactNode}
                    </div>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="language" className="font-medium">
                    Primary language
                  </label>
                  <div>
                    <Select
                      className="w-full rounded-none mt-1"
                      allowClear
                      placeholder="Primary language"
                      size="large"
                      onChange={(val: any) =>
                        setFieldValue("language.primaryLanguage", val)
                      }
                      options={languageData}
                      value={values.language?.primaryLanguage ?? undefined}
                    />
                  </div>
                </div>
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="language" className="font-medium">
                    Secondary language
                  </label>
                  <div>
                    <Select
                      className="w-full rounded-none mt-1"
                      allowClear
                      placeholder="Secondary language"
                      size="large"
                      onChange={(val: any) =>
                        setFieldValue("language.secondaryLanguage", val)
                      }
                      options={languageData}
                      value={values.language?.secondaryLanguage ?? undefined}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <button
                type="submit"
                className={` w-full mt-5 mb-4 ${
                  isLoading ? "disabled btn-secondary" : "btn btn-primary"
                }`}
              >
                {isLoading ? <Spin className=" text-white z-50" /> : "Update"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default PersonalInformationPage;
