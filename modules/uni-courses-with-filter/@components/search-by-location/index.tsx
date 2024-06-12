import { useGetCountriesQuery } from "@/appstore/global/global-api";
import { generateQueryString } from "@/helpers/utils";
import { Select } from "antd";

const UniCoursesSearchByLocation = ({ setQueryParams, queryParams }: any) => {
  const countryParams = generateQueryString({
    name: "",
    region: queryParams?.regionSlug,
    page: 1,
    limit: 50,
  });

  const { data: countryData } = useGetCountriesQuery(countryParams);
  const countryOptions = countryData?.data?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });
  const filteredOptions = countryOptions?.filter(
    (o: any) => !queryParams?.countrySlugs?.includes(o.value)
  );

  return (
    <div>
      <label htmlFor="uniyear" className="mb-1 block font-medium">
        Search by Location
      </label>
      <Select
        size="large"
        mode="multiple"
        showSearch
        allowClear
        style={{ width: "100%" }}
        placeholder="Search by Location"
        options={filteredOptions}
        onChange={(val) => {
          setQueryParams((prev: any) => ({ ...prev, countrySlugs: val }));
        }}
        value={
          queryParams?.countrySlugs ? queryParams?.countrySlugs : undefined
        }
      />
    </div>
  );
};

export default UniCoursesSearchByLocation;
