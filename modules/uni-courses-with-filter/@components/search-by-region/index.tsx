import { Select } from "antd";

import { useGetRegionQuery } from "@/appstore/country/country-api";

const UniCoursesSearchByRegion = ({ setQueryParams, queryParams }: any) => {
  const { data, isLoading } = useGetRegionQuery("?page=1&limit=50");
  const regionOptions = data?.data?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });
  return (
    <div>
      <label htmlFor="uniyear" className="mb-1 block font-medium">
        Search by Region
      </label>
      <Select
        size="large"
        showSearch
        allowClear
        style={{ width: "100%" }}
        placeholder="Search by Region"
        options={regionOptions}
        onChange={(val) =>
          setQueryParams((prev: any) => ({
            ...prev,
            regionSlug: val,
            countrySlugs: undefined,
          }))
        }
        value={queryParams?.regionSlug ? queryParams?.regionSlug : undefined}
      />
    </div>
  );
};

export default UniCoursesSearchByRegion;
