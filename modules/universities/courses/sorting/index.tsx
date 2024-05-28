import { Select } from "antd";
import React from "react";
import { FiSliders } from "react-icons/fi";
import { TbRefresh } from "react-icons/tb";

interface propTypes {
  setDrawer?: any;
  drawer?: any;
  setQueryParams?: any;
  limit?: any;
}

const CourseSorting = ({
  drawer,
  setQueryParams,
  setDrawer,
  limit,
}: propTypes) => {
  return (
    <>
      <div className="flex flex-wrap justify-between py-3">
        <div className="flex gap-2 md:gap-4">
          <button
            onClick={() => setDrawer(true)}
            className="btn btn-outline rounded text-sm"
          >
            <FiSliders size={15} />
            Filters
          </button>
          <button
            onClick={() =>
              setQueryParams({ page: 1, limit, searchKeyword: "" })
            }
            className="btn btn-outline rounded text-sm"
          >
            <TbRefresh size={15} /> Reset
          </button>
        </div>
        <div className="filtered-select">
          <Select
            allowClear
            placeholder="Sorting"
            size={"large"}
            className=" min-w-[150px] !border-0"
            onChange={(val) =>
              setQueryParams((prev: any) => ({
                ...prev,
                sortBy: val,
              }))
            }
            options={[
              { label: "Short by Popularity", value: null },
              { label: "Short by Name", value: "displayName" },
            ]}
          />
        </div>
      </div>
    </>
  );
};

export default CourseSorting;
