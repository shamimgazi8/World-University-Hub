import { useGetCountriesQuery } from "@/appstore/global/global-api";
import { useGetRegionQuery } from "@/appstore/country/country-api";
import { CaretRightOutlined } from "@ant-design/icons";
import {
  useGetJobRecruitersQuery,
  useGetJobTypeQuery,
} from "@/appstore/job/job-api";
import {
  flattenArrayWithLabelValue,
  generateQueryString,
} from "@/helpers/utils";
import { Checkbox, Collapse, Select, Slider, theme } from "antd";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import { useParams, useSearchParams } from "next/navigation";
import HandleRemoveFilter from "./SelectiveFilterTop";

interface propTypes {
  selectedSearch?: any;
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
const AcademicOption = [
  { label: "Master (73)", value: "master" },
  { label: "Bachelors (41)s", value: "bacholor" },
  { label: "MSc (92)", value: "msc" },
  { label: "BSc (92)", value: "bsc" },
];
const admissionOption = [
  { label: "March", value: "March" },
  { label: "June", value: "June" },
  { label: "MSc (92)", value: "MSc" },
  { label: "BSc (92)", value: "BSc" },
];
const durationOption = [
  { label: "3 Years (124)", value: "3" },
  { label: "1 Year (47)", value: "1" },
  { label: "2 Year (47)", value: "2" },
];
const englishTestOption = [
  { label: "IELTS", value: "IELTS" },
  { label: "TOFEL", value: "TOFEL" },
  { label: "PTE", value: "PTE" },
];
const attandanceOption = [
  { label: "On-Campus", value: "On-Campus" },
  { label: "Online", value: "Online" },
  { label: "Both", value: "both" },
];

const SubjectOption = [
  {
    label: "Allied Healthcare (494)",
    value: "Allied Healthcare",
    sub: [
      { label: "Dermatological Medicine (10)", value: "TOFEL" },
      { label: "Blended (19)", value: "Dermatological Medicine" },
    ],
  },
  { label: "Dermatological Medicine (10)", value: "TOFEL" },
  { label: "Blended (19)", value: "Dermatological Medicine" },
];
const childoption = SubjectOption?.map((item: any) => {
  return {
    label: item?.name,
    value: item?.slug,
  };
});

const ProgramsFilter = ({
  setQueryParams,
  limit,
  jobQueryParams,
  initParams,
  filterInput = filterInpDefaultVal,
  selectedSearch,
}: propTypes) => {
  const [slidervalue, setsliderValues] = useState([300, 1000]);
  const [countryName, setCountryName] = useState("");
  const [recruiterName, setRecruiterName] = useState("");
  const queryParams = { keyword: "", page: 1, limit: 50 };
  const queryString = generateQueryString(queryParams);
  const countryParams = generateQueryString({
    name: countryName,
    page: 1,
    limit: 50,
  });
  const recruiterParams = generateQueryString({
    keyword: recruiterName,
    status: ["ACTIVE", "INACTIVE"],
    page: 1,
    limit: 50,
  });
  const { data: regionList } = useGetRegionQuery("");
  const { data: jobTypeData } = useGetJobTypeQuery(queryString);
  const { data: countryData } = useGetCountriesQuery(countryParams);
  const { data: recruiterData } = useGetJobRecruitersQuery(recruiterParams);
  const jobTypeArr = jobTypeData?.data;
  const recDataarr = recruiterData?.data;
  const jobTypeOption = jobTypeArr && flattenArrayWithLabelValue(jobTypeArr);

  const JobRecuiterOption =
    recDataarr && flattenArrayWithLabelValue(recDataarr);
  const regionoption = regionList?.data?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });
  const countryOptions = countryData?.data?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });
  const [slice, setslice] = useState(5);
  const sliceCountryList = countryOptions?.slice(0, slice);

  const { token } = theme.useToken();
  const onChangeStudyLvl = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      studyLevel: checkedValues,
    }));
  };
  const onChangeseasson = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      intake: checkedValues,
    }));
  };
  const onChangeSubject = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      subject: checkedValues,
    }));
  };

  const onChange3 = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      salaryBand: checkedValues,
    }));
  };
  const onchangeduration = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      duration: checkedValues,
    }));
  };
  const onChangeEnglishTest = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      englishTest: checkedValues,
    }));
  };
  const onChangeAttendance = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      Attendance: checkedValues,
    }));
  };
  const onChangeScholership = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      Scholarship: checkedValues,
    }));
  };
  const onChangeAcademicTest = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      academicTest: checkedValues,
    }));
  };
  const onChangeCountrySlug = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      countrySlug: checkedValues,
    }));
  };

  return (
    <div className=" flex flex-col gap-4">
      <div className=" flex mb-2 justify-between">
        <span className=" text-[#22343C] text-h5 font-semibold">Filter</span>
        <button
          onClick={() => {
            setslice(5);
            setQueryParams({
              page: 1,
              limit,
              keyword: "",
            });
          }}
          className=" text-p4 text-gradient cursor-pointer"
        >
          Clear All
        </button>
      </div>
      <div className=" flex gap-2 flex-wrap">
        {selectedSearch?.map((item: any, i: any) => {
          const splitItem = item?.split(",");
          return item === null ? (
            " "
          ) : item?.includes(",") ? (
            splitItem?.map((item: any, key: any) => {
              return (
                <span
                  key={key}
                  className=" flex justify-center items-center gap-2 text-[12px] rounded-full p-2  bg-gradient-to-r from-indigo-500 to-purple-500 text-white  shadow-md  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 "
                >
                  {item}
                  <MdCancel
                    onClick={() => {
                      HandleRemoveFilter(item, jobQueryParams, setQueryParams);
                    }}
                    className=" hover:from-purple-500 hover:to-pink-500 hover:scale-125 cursor-pointer transition-all"
                  />
                </span>
              );
            })
          ) : (
            <span
              key={i}
              className=" flex justify-center items-center gap-2 text-[12px] rounded-full p-2  bg-gradient-to-r from-indigo-500 to-purple-500 text-white  shadow-md  focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 "
            >
              {item}
              <MdCancel
                onClick={() => {
                  HandleRemoveFilter(item, jobQueryParams, setQueryParams);
                }}
                className=" hover:from-purple-500 hover:to-pink-500 hover:scale-125 cursor-pointer transition-all"
              />
            </span>
          );
        })}
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
              label: "Location",
              children: (
                <Checkbox.Group
                  name={`jobHours`}
                  options={sliceCountryList}
                  value={
                    jobQueryParams?.countrySlug
                      ? jobQueryParams?.countrySlug
                      : undefined
                  }
                  onChange={onChangeCountrySlug}
                  className="flex flex-col gap-[10px]"
                />
              ),
            },
          ]}
        />
      </div>
      <div className=" flex justify-between">
        <span
          className=" text-c4 cursor-pointer"
          onClick={() => {
            setslice(slice + 5);
          }}
        >
          + Show more locations
        </span>
        {slice > 5 && (
          <span
            className=" text-c4  cursor-pointer leading-[1.7]"
            onClick={() => {
              setslice(5);
            }}
          >
            Hide
          </span>
        )}
      </div>
      <div className=" relative">
        <input
          type="text"
          name=""
          id="location"
          placeholder="Find more location"
          onChange={(e) =>
            setQueryParams((prev: any) => ({
              ...prev,
              countrySlugs: e.target.value,
            }))
          }
          value={
            jobQueryParams?.countrySlugs ? jobQueryParams?.countrySlugs : ""
          }
          className="border-none focus:outline-none w-full py-[10px] px-[15px]  bg-[#EFEFEF] placeholder:text-[#4E4E4E] rounded-full"
        />
        <IoSearchOutline className=" cursor-pointer absolute right-[20px] top-[50%] -translate-y-1/2" />
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
              label: "Study Level",
              children: (
                <Checkbox.Group
                  name={`Study`}
                  options={AcademicOption}
                  value={
                    jobQueryParams?.studyLevel ? jobQueryParams?.studyLevel : []
                  }
                  onChange={onChangeStudyLvl}
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
              label: "Subject",
              children: (
                <Checkbox.Group
                  name={`specializationArr`}
                  options={SubjectOption}
                  value={jobQueryParams?.subject ? jobQueryParams?.subject : []}
                  onChange={onChangeSubject}
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
              label: "Intake",
              children: (
                <Checkbox.Group
                  name={`season`}
                  options={admissionOption}
                  value={jobQueryParams?.intake ? jobQueryParams?.intake : []}
                  onChange={onChangeseasson}
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
              label: "Duration",
              children: (
                <Checkbox.Group
                  name={`salaryBand`}
                  options={durationOption}
                  value={
                    jobQueryParams?.duration ? jobQueryParams?.duration : []
                  }
                  onChange={onchangeduration}
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
              label: "English Test",
              children: (
                <Checkbox.Group
                  name={`english Test`}
                  options={englishTestOption}
                  value={
                    jobQueryParams?.englishTest
                      ? jobQueryParams?.englishTest
                      : []
                  }
                  onChange={onChangeEnglishTest}
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
              label: "Academic Test",
              children: (
                <Checkbox.Group
                  name={`ContactType`}
                  options={englishTestOption}
                  value={
                    jobQueryParams?.academicTest
                      ? jobQueryParams?.academicTest
                      : []
                  }
                  onChange={onChangeAcademicTest}
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
              label: "Tuition Fee",
              children: (
                <div>
                  <Slider
                    range={{ draggableTrack: true }}
                    defaultValue={[300, 1000]}
                    max={1500}
                    onChange={(val: any) => {
                      setsliderValues(val);
                    }}
                  />
                  <div className=" flex justify-between items-center">
                    <span>{slidervalue[0]} AUD</span>
                    <span>{slidervalue[1]} AUD</span>
                  </div>
                </div>
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
              label: "Scholarship",
              children: (
                <Checkbox.Group
                  name={`Scholarship`}
                  options={[
                    { label: "Yes", value: "Yes" },
                    { label: "No", value: "No" },
                  ]}
                  value={
                    jobQueryParams?.Scholarship
                      ? jobQueryParams?.Scholarship
                      : []
                  }
                  onChange={onChangeScholership}
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
              label: "Attendance",
              children: (
                <Checkbox.Group
                  name={`Attendance`}
                  options={attandanceOption}
                  value={
                    jobQueryParams?.Attendance ? jobQueryParams?.Attendance : []
                  }
                  onChange={onChangeAttendance}
                  className="flex flex-col gap-[10px]"
                />
              ),
            },
          ]}
        />
      </div>
    </div>
  );
};

export default ProgramsFilter;
