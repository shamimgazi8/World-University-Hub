import { Select } from "antd";
import { useState } from "react";

const rankingYearOption: any = [];
const currentYear = new Date().getFullYear() + 1;
for (let year = 2021; year <= currentYear; year++) {
  rankingYearOption.push({
    label: year.toString(),
    value: year,
  });
}

const UniCoursesSearchByYear = ({ setQueryParams, queryParams }: any) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const filteredOptions = rankingYearOption.filter(
    (o: any) => !selectedItems.includes(o.value)
  );
  return (
    <div>
      <label htmlFor="uniyear" className="mb-1 block font-medium">
        Search by Year
      </label>
      <Select
        allowClear
        placeholder="Search by Year"
        className="w-full"
        mode="multiple"
        size="large"
        showSearch
        style={{ width: "100%" }}
        onChange={(val) => {
          setSelectedItems(val);
          setQueryParams((prev: any) => ({ ...prev, rankYears: val }));
        }}
        options={filteredOptions}
        value={queryParams?.rankYears ? queryParams?.rankYears : undefined}
      />
    </div>
  );
};

export default UniCoursesSearchByYear;
