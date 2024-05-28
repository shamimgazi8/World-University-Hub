import { Select } from "antd";

const data = [
  {
    label: "Australia",
    value: "Australia",
  },
  {
    label: "United Kingdom",
    value: "United Kingdom",
  },
  {
    label: "China",
    value: "China",
  },
];

interface propTypes {
  setQueryParams?: any;
}

const UniSearchByLocation = ({ setQueryParams }: propTypes) => {
  return (
    <div>
      <label htmlFor="uniyear" className="mb-1 block font-medium">
        Search by Location
      </label>
      <Select
        size="large"
        showSearch
        allowClear
        style={{ width: "100%" }}
        placeholder="Search by Location"
        options={data}
      />
    </div>
  );
};

export default UniSearchByLocation;
