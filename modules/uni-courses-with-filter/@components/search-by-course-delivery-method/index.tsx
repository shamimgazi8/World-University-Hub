import { useGetCountriesQuery } from "@/appstore/global/global-api";
import {
  useGetDeliveryMethodQuery,
  useGetProgramsByLevelQuery,
} from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import { Select } from "antd";

const UniCoursesSearchByDeliveryMethod = ({
  setQueryParams,
  queryParams,
}: any) => {
  const deliveryMethodParams = generateQueryString({
    name: "",
    page: 1,
    limit: 500,
  });

  const { data } = useGetDeliveryMethodQuery(deliveryMethodParams);

  const deliMethodOptions = data?.data?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });

  return (
    <div>
      <label htmlFor="uniyear" className="mb-1 block font-medium">
        Search by Course Delivery Method
      </label>
      <Select
        size="large"
        showSearch
        allowClear
        style={{ width: "100%" }}
        placeholder="Search by Course Delivery Method"
        options={deliMethodOptions}
        onChange={(val) => {
          setQueryParams((prev: any) => ({
            ...prev,
            courseDeliveryMethod: val,
          }));
        }}
        value={
          queryParams?.courseDeliveryMethod
            ? queryParams?.courseDeliveryMethod
            : undefined
        }
      />
    </div>
  );
};

export default UniCoursesSearchByDeliveryMethod;
