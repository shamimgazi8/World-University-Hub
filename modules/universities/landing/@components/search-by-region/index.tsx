import { useGetRegionQuery } from "@/appstore/country/country-api";
import { Select } from "antd";

interface propTypes {
  setQueryParams?: any;
}

const UniSearchByRegion = ({ setQueryParams }: propTypes) => {
  const { data, isLoading } = useGetRegionQuery("?page=1&limit=20");
  const dataArr = data && data?.data;
  const formatedData = dataArr?.map((item: any) => ({
    label: item?.name,
    value: item?.slug,
  }));

  const handleChange = (value: string) => {
    setQueryParams((prev: any) => ({ ...prev, regionName: value }));
  };

  return (
    <div>
      <label htmlFor="region" className="mb-1 block font-medium">
        Search by Region
      </label>
      <Select
        size="large"
        showSearch
        allowClear
        style={{ width: "100%" }}
        placeholder="Search by Region"
        options={formatedData || []}
        onChange={handleChange}
        loading={isLoading}
      />
    </div>
  );
};

export default UniSearchByRegion;
