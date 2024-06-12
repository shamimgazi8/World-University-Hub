import { useGetCountriesQuery } from "@/appstore/global/global-api";
import { MultiselectHour, MultiselectRecruit } from "./MultiselectJobFilter";
import { CaretRightOutlined } from "@ant-design/icons";
import {
  useGetJobRecruitersQuery,
  useGetJobTypeQuery,
} from "@/appstore/job/job-api";
import {
  flattenArrayWithLabelValue,
  generateQueryString,
} from "@/helpers/utils";
import { Checkbox, Collapse, Select, theme } from "antd";
import { useState } from "react";
interface propTypes {
  setQueryParams?: any;
  jobQueryParams?: any;
  filterInput?: {
    isSearch?: boolean;
    isRecruiterType?: boolean;
    isHour?: boolean;
    isLocation?: boolean;
    IsSpecialization?: boolean;
  };
  limit?: any;
  initParams?: any;
}
const filterInpDefaultVal = {
  isSearch: true,
  isRecruiterType: true,
  isHour: true,
  isLocation: true,
  IsSpecialization: true,
};

const ContactType = [
  { label: "Permanent", value: "PERMANENT" },
  { label: "Temporary", value: "TEMPORARY" },
  { label: "Fixed Team", value: "FIXED_TERM" },
];
const Joboption = [
  { label: "Full Time", value: "FULL_TIME" },
  { label: "Part Time", value: "PART_TIME" },
  { label: "Sessional", value: "SESSIONAL" },
];
const AcademicOption = {
  data: [
    { name: "Arts & Humanities", slug: "ART" },
    { name: "Business & Economics", slug: "Bus" },
    { name: "Clinical, Pre-clinical & Health", slug: "ali" },
  ],
};
const SaleryOption = [
  { label: "UK Pounds", value: "UK_Pounds" },
  { label: "Australian Dollars", value: "Australian_Dollars" },
  { label: "US Dollars", value: "US_Dollars" },
  { label: "Daily Rate", value: "Daily_Rate" },
  { label: "Hourly Rate", value: "Hourly_Rate" },
];

const JobFilter = ({
  setQueryParams,
  limit,
  jobQueryParams,
  initParams,
  filterInput = filterInpDefaultVal,
}: propTypes) => {
  const [countryName, setCountryName] = useState("");

  const countryParams = generateQueryString({
    name: countryName,
    page: 1,
    limit: 50,
  });
  const recruiterParams = generateQueryString({
    status: ["ACTIVE", "INACTIVE"],
    page: 1,
    limit: 50,
  });

  const { data: jobTypeData } = useGetJobTypeQuery("");
  const { data: countryData } = useGetCountriesQuery(countryParams);
  const { data: recruiterData } = useGetJobRecruitersQuery(recruiterParams);
  const jobTypeArr = jobTypeData?.data;
  const recDataarr = recruiterData?.data;
  const jobTypeOption = jobTypeArr && flattenArrayWithLabelValue(jobTypeArr);
  const AcaDesArr = AcademicOption?.data;
  const AcademicOptionArr = AcaDesArr && flattenArrayWithLabelValue(AcaDesArr);

  const JobRecuiterOption =
    recDataarr && flattenArrayWithLabelValue(recDataarr);

  const countryOptions = countryData?.data?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.name,
    };
  });

  const { token } = theme.useToken();
  const onChangeJobTyp = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      jobTypeSlug: checkedValues,
    }));
  };
  const onChangeHour = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      jobHours: checkedValues,
    }));
  };
  const onChangeRecuiter = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      recruiterSlug: checkedValues,
    }));
  };
  const onChangeAcademicDisipline = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      specializationSlug: checkedValues,
    }));
  };
  const onChange3 = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      salaryBand: checkedValues,
    }));
  };
  const onChange4 = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      contractType: checkedValues,
    }));
  };
  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex mb-2 justify-between">
        <span className=" text-[#22343C] text-h5 font-semibold">Filter</span>
        <button
          onClick={() => {
            setQueryParams({
              page: 1,
              limit,
              keyword: "",
              specializationArr: [],
            });
          }}
          className=" text-p4 text-gradient cursor-pointer"
        >
          Clear All
        </button>
      </div>
      <div className="">
        <label
          htmlFor="jobTitle"
          className="mb-2 block font-medium text-[#22343C]"
        >
          Keywords
        </label>
        <input
          type="text"
          name=""
          id="jobTitle"
          placeholder="Job Title or Company"
          onChange={(e) =>
            setQueryParams((prev: any) => ({
              ...prev,
              keyword: e.target.value,
            }))
          }
          value={jobQueryParams?.keyword ? jobQueryParams?.keyword : ""}
          className="border-none focus:outline-none w-full py-[10px] px-[15px]  rounded-md bg-[#F8F9FD] placeholder:text-[#4E4E4E]"
        />
      </div>
      <div>
        <label
          htmlFor="uniyear"
          className="mb-2 block font-medium text-[#22343C]"
        >
          Location
        </label>
        <Select
          showSearch
          allowClear
          size="large"
          placeholder="Country"
          className="w-full "
          optionFilterProp="children"
          onChange={(val) =>
            setQueryParams((prev: any) => ({
              ...prev,
              countryName: val,
            }))
          }
          onSearch={(searchText) => setCountryName(searchText)}
          filterOption={(
            input: string,
            option?: { label: string; value: string }
          ) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={countryOptions}
          value={
            jobQueryParams?.countryName
              ? jobQueryParams?.countryName
              : undefined
          }
        />
      </div>
      <div>
        <Collapse
          bordered={false}
          expandIconPosition={"end"}
          defaultActiveKey={["1"]}
          style={{ background: token.colorBgContainer }}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          items={[
            {
              key: "1",
              label: "Academic Discipline",
              children: (
                <Checkbox.Group
                  name={`specializationSlug`}
                  options={AcademicOptionArr}
                  value={
                    jobQueryParams?.specializationSlug
                      ? jobQueryParams?.specializationSlug
                      : []
                  }
                  onChange={onChangeAcademicDisipline}
                  className="flex flex-col gap-[10px]"
                />
              ),
            },
          ]}
        />
      </div>
      <div>
        <Collapse
          bordered={false}
          expandIconPosition={"end"}
          defaultActiveKey={["1"]}
          style={{ background: token.colorBgContainer }}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          items={[
            {
              key: "1",
              label: "Job Type",
              children: (
                <Checkbox.Group
                  name={`job Type`}
                  options={jobTypeOption}
                  value={
                    jobQueryParams?.jobTypeSlug
                      ? jobQueryParams?.jobTypeSlug
                      : []
                  }
                  onChange={onChangeJobTyp}
                  className="flex flex-col gap-[10px]"
                />
              ),
            },
          ]}
        />
      </div>

      <div>
        <Collapse
          bordered={false}
          expandIconPosition={"end"}
          defaultActiveKey={["1"]}
          style={{ background: token.colorBgContainer }}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          items={[
            {
              key: "1",
              label: "Salary Band",
              children: (
                <Checkbox.Group
                  name={`salaryBand`}
                  options={SaleryOption}
                  value={
                    jobQueryParams?.salaryBand ? jobQueryParams?.salaryBand : []
                  }
                  onChange={onChange3}
                  className="flex flex-col gap-[10px]"
                />
              ),
            },
          ]}
        />
      </div>

      <div>
        <Collapse
          bordered={false}
          expandIconPosition={"end"}
          defaultActiveKey={["1"]}
          style={{ background: token.colorBgContainer }}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          items={[
            {
              key: "1",
              label: "Contact Type",
              children: (
                <Checkbox.Group
                  name={`contractType`}
                  options={ContactType}
                  value={
                    jobQueryParams?.contractType
                      ? jobQueryParams?.contractType
                      : []
                  }
                  onChange={onChange4}
                  className="flex flex-col gap-[10px]"
                />
              ),
            },
          ]}
        />
      </div>
      <div>
        <Collapse
          bordered={false}
          expandIconPosition={"end"}
          defaultActiveKey={["1"]}
          style={{ background: token.colorBgContainer }}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          items={[
            {
              key: "1",
              label: "Hours",
              children: (
                <Checkbox.Group
                  name={`jobHours`}
                  options={Joboption}
                  value={
                    jobQueryParams?.jobHours
                      ? jobQueryParams?.jobHours
                      : undefined
                  }
                  onChange={onChangeHour}
                  className="flex flex-col gap-[10px]"
                />
              ),
            },
          ]}
        />
      </div>

      {/* <div>
        <Collapse
          bordered={false}
          expandIconPosition={"end"}
          defaultActiveKey={["1"]}
          style={{ background: token.colorBgContainer }}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          items={[
            {
              key: "1",
              label: "Hours",
              children: (
                <div className="flex flex-col gap-3 mt-4">
                  {Joboption.map((item: any, i: any) => {
                    return (
                      <div key={i}>
                        <Checkbox
                          onChange={(val) =>
                            setQueryParams((prev: any) => ({
                              ...prev,
                              jobHours: MultiselectHour(val, item?.value),
                            }))
                          }
                          value={
                            jobQueryParams?.jobHours
                              ? jobQueryParams?.jobHours
                              : undefined
                          }
                        >
                          {item?.label}
                        </Checkbox>
                      </div>
                    );
                  })}
                </div>
              ),
            },
          ]}
        />
      </div> */}
      <div>
        <Collapse
          bordered={false}
          expandIconPosition={"end"}
          defaultActiveKey={["1"]}
          style={{ background: token.colorBgContainer }}
          expandIcon={({ isActive }) => (
            <CaretRightOutlined rotate={isActive ? 90 : 0} />
          )}
          items={[
            {
              key: "1",
              label: "Recruiter Type",
              children: (
                <Checkbox.Group
                  name={`Recruiter`}
                  options={JobRecuiterOption}
                  value={
                    jobQueryParams?.recruiterSlug
                      ? jobQueryParams?.recruiterSlug
                      : undefined
                  }
                  onChange={onChangeRecuiter}
                  className="flex flex-col gap-[10px]"
                />
              ),

              //   <div className="flex flex-col gap-3 mt-4">
              //     {JobRecuiterOption?.map((item: any, i: any) => {
              //       return (
              //         <div key={i}>
              //           <Checkbox
              //             checked={jobQueryParams?.recruiterSlug ? true : false}
              //             onChange={(val) =>
              //               setQueryParams((prev: any) => ({
              //                 ...prev,
              //                 recruiterSlug: MultiselectRecruit(
              //                   val,
              //                   item?.value
              //                 ),
              //               }))
              //             }
              //             value={
              //               jobQueryParams?.recruiterSlug
              //                 ? jobQueryParams?.recruiterSlug
              //                 : undefined
              //             }
              //           >
              //             {item?.label}
              //           </Checkbox>
              //         </div>
              //       );
              //     })}
              //   </div>
              // ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default JobFilter;
