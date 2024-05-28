import { useGetCountriesQuery } from "@/appstore/global/global-api";
import { useGetProgramsByLevelQuery } from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import { Select } from "antd";

const UniCoursesSearchByLevel = ({ setQueryParams, queryParams }: any) => {
  const levelParams = generateQueryString({
    name: "",
    page: 1,
    limit: 50,
  });

  const { data } = useGetProgramsByLevelQuery(levelParams);
  const levelOptions = data?.data?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });

  return (
    <div>
      <label htmlFor="uniyear" className="mb-1 block font-medium">
        Search by Course Level
      </label>
      <Select
        size="large"
        showSearch
        allowClear
        style={{ width: "100%" }}
        placeholder="Search by Course Level"
        options={levelOptions}
        onChange={(val) => {
          setQueryParams((prev: any) => ({ ...prev, courseLevel: val }));
        }}
        value={queryParams?.courseLevel ? queryParams?.courseLevel : undefined}
      />
    </div>
  );
};

export default UniCoursesSearchByLevel;
