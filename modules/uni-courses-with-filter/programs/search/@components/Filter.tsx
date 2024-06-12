import { useGetExamQuery } from "@/appstore/exam/exam-api";
import { useGetCountriesQuery } from "@/appstore/global/global-api";
import {
  useGetCourseDurationQuery,
  useGetDeliveryMethodsQuery,
  useGetLevelsOptionsDataQuery,
} from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import { CaretRightOutlined } from "@ant-design/icons";
import { Checkbox, Collapse, Radio, Slider, theme } from "antd";
import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdCancel } from "react-icons/md";
import HandleRemoveFilter from "./SelectiveFilterTop";
import { useGetAllSpecializationQuery } from "@/appstore/user/utility/utility-api";
import { useGetSpecializationQuery } from "@/appstore/specialization/specialization-api";

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

const ProgramsFilter = ({
  setQueryParams,
  limit,
  jobQueryParams,
  filterInput = filterInpDefaultVal,
  selectedSearch,
}: propTypes) => {
  const [slidervalue, setsliderValues] = useState([0, 20000]);
  const [countryName, setCountryName] = useState("");
  const [SpecializationName, setSpecialization] = useState("");
  const countryParams = generateQueryString({
    name: countryName,
    page: 1,
    limit: 500,
  });
  const SpecializationParams = generateQueryString({
    name: SpecializationName,
    page: 1,
    limit: 5,
  });

  const { data: countryData } = useGetCountriesQuery(countryParams);
  const { data: levelData } = useGetLevelsOptionsDataQuery("");
  const { data: durationData } = useGetCourseDurationQuery("");
  const { data: specializationData } =
    useGetSpecializationQuery(SpecializationParams);
  const { data: deliveryMethodsData } = useGetDeliveryMethodsQuery("");

  const { data: ExamData } = useGetExamQuery("?examType=ENGLISH");
  const { data: ExamDataAcademic } = useGetExamQuery("?examType=ACADEMIC");

  const leveloptions = levelData?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });

  const specializationOptions = specializationData?.data?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });

  const durationOptions = durationData?.map((item: any) => {
    return {
      label: `${item?.duration} Months`,
      value: item?.duration,
    };
  });

  const deliverMethodsData = deliveryMethodsData?.data?.map((item: any) => {
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

  const EnglishTestExamOption = ExamData?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });
  const AcademicTestExamDataOption = ExamDataAcademic?.map((item: any) => {
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
  const onChangeSpecialization = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      specialization: checkedValues,
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
  const onChangeAcademicTest = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      academyTest: checkedValues,
    }));
  };
  const onChangeAttendance = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      attendance: checkedValues,
    }));
  };
  const onChangeScholership = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      scholarship: checkedValues,
    }));
  };

  const onChangeCountrySlug = (checkedValues: any) => {
    setQueryParams((prev: any) => ({
      ...prev,
      countrySlug: checkedValues,
    }));
  };

  return (
    <div className=" flex flex-col gap-4 p-2">
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
          onChange={(e) => setCountryName(e.target.value)}
          value={countryName ?? ""}
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
                  options={leveloptions}
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
              label: "Specialization",
              children: (
                <Checkbox.Group
                  name={`Study`}
                  options={specializationOptions}
                  value={
                    jobQueryParams?.specialization
                      ? jobQueryParams?.specialization
                      : []
                  }
                  onChange={onChangeSpecialization}
                  className="flex flex-col gap-[10px]"
                />
              ),
            },
          ]}
        />
      </div>
      <div className=" relative">
        <input
          type="text"
          name=""
          id="location"
          placeholder="Find more Specialization"
          onChange={(e) => setSpecialization(e.target.value)}
          value={SpecializationName ?? ""}
          className="border-none focus:outline-none w-full py-[10px] px-[15px]  bg-[#EFEFEF] placeholder:text-[#4E4E4E] rounded-full"
        />
        <IoSearchOutline className=" cursor-pointer absolute right-[20px] top-[50%] -translate-y-1/2" />
      </div>
      {durationData?.length > 0 && (
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
                    options={durationOptions}
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
      )}
      {EnglishTestExamOption?.length > 0 && (
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
                    options={EnglishTestExamOption}
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
      )}
      {AcademicTestExamDataOption?.length > 0 && (
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
                    name={`english Test`}
                    options={AcademicTestExamDataOption}
                    value={
                      jobQueryParams?.academyTest
                        ? jobQueryParams?.academyTest
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
      )}
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
                    defaultValue={[0, 20000]}
                    max={20000}
                    onChange={(val: any) => {
                      setsliderValues(val);
                      setQueryParams((prev: any) => ({
                        ...prev,
                        tuitionFrom: val[0],
                        tuitionTo: val[1],
                      }));
                    }}
                  />
                  <div className=" flex justify-between items-center">
                    <span>{slidervalue[0]} USD</span>
                    <span>{slidervalue[1]} USD</span>
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
                    { label: "Yes", value: "true" },
                    { label: "No", value: "false" },
                  ]}
                  value={
                    jobQueryParams?.scholarship
                      ? jobQueryParams?.scholarship
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

      {deliverMethodsData?.length > 0 && (
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
                    options={deliverMethodsData}
                    value={
                      jobQueryParams?.attendance
                        ? jobQueryParams?.attendance
                        : []
                    }
                    onChange={onChangeAttendance}
                    className="flex flex-col gap-[10px]"
                  />
                ),
              },
            ]}
          />
        </div>
      )}
    </div>
  );
};

export default ProgramsFilter;
