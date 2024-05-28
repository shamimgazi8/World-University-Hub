import { Select } from "antd";

const data = [
  {
    label: "QS Rank",
    value: "qs",
  },
  {
    label: "THE Rank",
    value: "the",
  },
  {
    label: "US Rank",
    value: "us",
  },
  {
    label: "ARWU",
    value: "arwu",
  },
];

const UniCoursesSearchByCompany = ({ setQueryParams, queryParams }: any) => {
  return (
    <div>
      <label htmlFor="uniyear" className="mb-1 block font-medium">
        Search by Ranking Company
      </label>
      <Select
        size="large"
        showSearch
        allowClear
        style={{ width: "100%" }}
        placeholder="Search by Ranking Company"
        onChange={(val) =>
          setQueryParams((prev: any) => ({ ...prev, rankCompanySlug: val }))
        }
        options={data}
        value={
          queryParams?.rankCompanySlug
            ? queryParams?.rankCompanySlug
            : undefined
        }
      />
    </div>
  );
};

export default UniCoursesSearchByCompany;
