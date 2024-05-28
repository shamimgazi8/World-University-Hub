"use client";
import { useProfileQuery } from "@/appstore/user/auth/auth-api";
import { useCreatestudyPreferenceMutation } from "@/appstore/user/studyPreference/studyPreference-api";
import {
  useGetAllCountryQuery,
  useGetAllDeliveryMethodQuery,
  useGetAllLevelQuery,
  useGetAllSpecializationQuery,
} from "@/appstore/user/utility/utility-api";
import { generateQueryString } from "@/helpers/utils";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Select, Spin, TreeSelect, message } from "antd";
import { Form, Formik } from "formik";
import "react-phone-input-2/lib/style.css";
const StudyPreferencePage = () => {
  const [parent] = useAutoAnimate();
  const [createstudyPreference, { isLoading }] =
    useCreatestudyPreferenceMutation();
  const { data: profileInfo, isLoading: profileLoading } = useProfileQuery({});
  const queryParams: any = {
    limit: 300,
  };
  const spQueryParams: any = {
    limit: 300,
    withChild: true,
  };
  const queryString = generateQueryString(queryParams);
  const spQueryString = generateQueryString(spQueryParams);

  const { data: countryOptions, isLoading: countryLoading } =
    useGetAllCountryQuery(queryString);

  const { data: levelOptions, isLoading: levelLoading } = useGetAllLevelQuery(
    {}
  );

  const {
    data: deliveryOptions,
    isLoading: deliveryLoading,
    isError: deliveryError,
  } = useGetAllDeliveryMethodQuery(queryString);

  const {
    data: specializationOptions,
    isLoading: specializationLoading,
    isError: specializationError,
  } = useGetAllSpecializationQuery(spQueryString);

  const profileInit = {
    countryIds:
      profileInfo?.preferenceCountries.length > 0
        ? profileInfo?.preferenceCountries.map((item: any) => item?.countryId)
        : [],
    specializationIds:
      profileInfo?.preferenceSpecializations.length > 0
        ? profileInfo?.preferenceSpecializations.map(
            (item: any) => item?.specId
          )
        : [],
    deliveryMethodIds:
      profileInfo?.preferenceDeliveryMethod.length > 0
        ? profileInfo?.preferenceDeliveryMethod.map(
            (item: any) => item?.dmethodId
          )
        : [],
    intakeYear: profileInfo?.studyPreference?.intakeYear
      ? profileInfo?.studyPreference?.intakeYear
      : undefined,
    funding: profileInfo?.studyPreference?.funding
      ? profileInfo?.studyPreference?.funding
      : undefined,
    courseLevelId: profileInfo?.studyPreference?.courseLevelId
      ? profileInfo?.studyPreference?.courseLevelId
      : undefined,
  };

  const preferenceHandler = async (values: any) => {
    try {
      const response: any = await createstudyPreference(values);

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
      } else {
        message.success(response?.data?.message);
      }
    } catch (error) {
      message.error("Something went wront.");
    }
  };

  const funding = [
    { value: "FULL_COMPANY_SCHOLARSHIP", label: "Full Company Scholarship" },
    { value: "LOAN", label: "Loan" },
    { value: "PARENT", label: "Parent" },
    {
      value: "PARTIAL_COMPANY_SCHOLARSHIP",
      label: "Partial Company Scholarship",
    },
    { value: "PERSONAL_FUNDING", label: "Personal Funding" },
  ];

  const currentYear = new Date().getFullYear();

  const years: { label: string; value: string }[] = [];

  for (let i = 0; i < 4; i++) {
    const year = currentYear + i;
    years.push({ label: year.toString(), value: year.toString() });
  }

  return (
    <div>
      <h4 className="mb-5">
        <span className="text-gradient">Study Preference</span>
      </h4>

      <Formik
        initialValues={profileInit}
        enableReinitialize={true}
        onSubmit={(values) => {
          preferenceHandler(values);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="w-full">
            <div className=" gap-x-4 gap-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="email" className="font-medium">
                    Prefered Countries {countryLoading && <Spin />}
                  </label>
                  <div>
                    <Select
                      mode="multiple"
                      className="w-full rounded-none mt-1"
                      allowClear
                      optionFilterProp="label"
                      placeholder="Countries"
                      size="large"
                      onChange={(val: any) => setFieldValue("countryIds", val)}
                      options={countryOptions}
                      value={values.countryIds ?? []}
                    />
                  </div>
                </div>
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="email" className="font-medium">
                    Prefered Specializations
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
                      placeholder="Prefered Specializations"
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
                    Delivery Methods
                  </label>
                  <div>
                    <Select
                      mode="multiple"
                      className="w-full rounded-none mt-1"
                      allowClear
                      optionFilterProp="label"
                      showSearch
                      placeholder="Delivery Method"
                      size="large"
                      onChange={(val: any) =>
                        setFieldValue("deliveryMethodIds", val)
                      }
                      options={deliveryOptions}
                      value={values.deliveryMethodIds ?? []}
                    />
                  </div>
                </div>
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="email" className="font-medium">
                    Prefered Level
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
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="language" className="font-medium">
                    Intake Year
                  </label>
                  <div>
                    <Select
                      className="w-full rounded-none mt-1"
                      allowClear
                      optionFilterProp="label"
                      placeholder="Intake Year"
                      size="large"
                      onChange={(val: any) => setFieldValue("intakeYear", val)}
                      options={years}
                      value={values?.intakeYear ?? undefined}
                    />
                  </div>
                </div>
                <div ref={parent} className="form_group relative mt-3">
                  <label htmlFor="language" className="font-medium">
                    Funding
                  </label>
                  <div>
                    <Select
                      className="w-full rounded-none mt-1"
                      allowClear
                      optionFilterProp="label"
                      placeholder="Funding"
                      size="large"
                      onChange={(val: any) => setFieldValue("funding", val)}
                      options={funding}
                      value={values?.funding ?? undefined}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex">
              <button
                type="submit"
                className={`btn btn-primary w-full md:w-1/4 mt-5 mb-3 ml-auto ${
                  isLoading ? "disabled" : ""
                }`}
              >
                {isLoading ? <Spin /> : "Update"}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default StudyPreferencePage;
