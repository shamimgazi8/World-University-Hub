"use client";
import { useProfileQuery } from "@/appstore/user/auth/auth-api";
import { useCreatecollegePreferenceMutation } from "@/appstore/user/collegePreference/collegePreference-api";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Slider, Spin, message } from "antd";
import { SliderMarks } from "antd/es/slider";
import { Form, Formik } from "formik";
import "react-phone-input-2/lib/style.css";
const CollegePreferencePage = () => {
  const [parent] = useAutoAnimate();
  const [createcollegePreference, { isLoading }] =
    useCreatecollegePreferenceMutation();
  const { data: profileInfoAll, isLoading: profileLoading } = useProfileQuery(
    {}
  );
  const collegePreference =
    !profileLoading && profileInfoAll?.collegePreference[0];
  const profileInit = {
    academicReputation: collegePreference?.academicReputation
      ? parseInt(collegePreference?.academicReputation)
      : undefined,
    employerReputaiton: collegePreference?.employerReputaiton
      ? parseInt(collegePreference?.employerReputaiton)
      : undefined,
    citationPerFaculty: collegePreference?.citationPerFaculty
      ? parseInt(collegePreference?.citationPerFaculty)
      : undefined,
    internationalResearchNetwork:
      collegePreference?.internationalResearchNetwork
        ? parseInt(collegePreference?.internationalResearchNetwork)
        : undefined,
    employmentOutcum: collegePreference?.employmentOutcum
      ? parseInt(collegePreference?.employmentOutcum)
      : undefined,
  };

  const collegePreferenceHandler = async (values: any) => {
    const payload = {
      academicReputation: values?.academicReputation,
      employerReputaiton: values?.employerReputaiton,
      citationPerFaculty: values?.citationPerFaculty,
      internationalResearchNetwork: `${values?.internationalResearchNetwork}`,
      employmentOutcum: values?.employmentOutcum,
    };
    try {
      const response: any = await createcollegePreference(payload);

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

  const marks: SliderMarks = {
    0.0: "0",
    25.0: "25",
    50.0: "50",
    75.0: "75",
    100.0: "100",
  };

  return (
    <div>
      <h4 className="mb-5">
        <span className="text-gradient">College Preference</span>
      </h4>

      <Formik
        initialValues={profileInit}
        enableReinitialize={true}
        onSubmit={(values) => {
          collegePreferenceHandler(values);
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form className="w-full">
            <div className="lg:max-w-lg gap-x-4 gap-y-10">
              <div ref={parent} className="form_group relative lg:max-w-xl">
                <label htmlFor="firstName" className="font-medium">
                  Academic Reputation
                </label>
                <div>
                  <Slider
                    marks={marks}
                    value={values?.academicReputation ?? undefined}
                    step={null}
                    defaultValue={0}
                    onAfterChange={(e: number) => {
                      setFieldValue("academicReputation", e);
                    }}
                  />
                </div>
              </div>
              <div ref={parent} className="form_group relative lg:max-w-xl">
                <label htmlFor="firstName" className="font-medium">
                  Employer Reputation
                </label>
                <div>
                  <Slider
                    marks={marks}
                    value={values?.employerReputaiton ?? undefined}
                    step={null}
                    defaultValue={0}
                    onAfterChange={(e: number) => {
                      setFieldValue("employerReputaiton", e);
                    }}
                  />
                </div>
              </div>
              <div ref={parent} className="form_group relative lg:max-w-xl">
                <label htmlFor="firstName" className="font-medium">
                  Citation Per Faculty
                </label>
                <div>
                  <Slider
                    marks={marks}
                    value={values?.citationPerFaculty ?? undefined}
                    step={null}
                    defaultValue={0}
                    onAfterChange={(e: number) => {
                      setFieldValue("citationPerFaculty", e);
                    }}
                  />
                </div>
              </div>
              <div ref={parent} className="form_group relative lg:max-w-xl">
                <label htmlFor="firstName" className="font-medium">
                  International Research Network
                </label>
                <div>
                  <Slider
                    marks={marks}
                    value={values?.internationalResearchNetwork ?? undefined}
                    step={null}
                    defaultValue={0}
                    onAfterChange={(e: number) => {
                      setFieldValue("internationalResearchNetwork", e);
                    }}
                  />
                </div>
              </div>
              <div ref={parent} className="form_group relative lg:max-w-xl">
                <label htmlFor="firstName" className="font-medium">
                  Employment Outcome
                </label>
                <div>
                  <Slider
                    marks={marks}
                    value={values?.employmentOutcum ?? undefined}
                    step={null}
                    defaultValue={0}
                    onAfterChange={(e: number) => {
                      setFieldValue("employmentOutcum", e);
                    }}
                  />
                </div>
              </div>
            </div>
            <div>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">
                0: Not Important
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">
                25: Slightly Important
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">
                50: Important
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 mr-2">
                75: Very Important
              </span>
              <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                100: Extremely Important
              </span>
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

export default CollegePreferencePage;
