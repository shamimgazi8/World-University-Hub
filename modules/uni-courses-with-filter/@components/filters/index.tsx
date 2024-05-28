"use client";

import { Drawer, Select } from "antd";
import { useState } from "react";
import { FiSliders } from "react-icons/fi";
import { TbRefresh } from "react-icons/tb";
import UniCoursesSearchByCompany from "../search-by-company";
import UniCoursesSearchByLocation from "../search-by-location";
import UniCoursesSearchByName from "../search-by-name";
import UniCoursesSearchByRegion from "../search-by-region";
import UniCoursesSearchByYear from "../search-by-year";
import UniCoursesSearchByLevel from "../search-by-course-level";
import UniCoursesSearchByDeliveryMethod from "../search-by-course-delivery-method";
interface propsType {
  queryParams: any;
  setQueryParams: any;
  isUniversity?: boolean;

  isSearchByName?: boolean;
  isSearchByCourseName?: boolean;
  isSearchByCompany?: boolean;
  isSearchByYear?: boolean;
  isSearchByRegion?: boolean;
  isSearchByCountry?: boolean;
  isSearchByCourseLevel?: boolean;
  isSearchByCourseDeliveryMethod?: boolean;
  params?: any;
}

const UniCoursesFilter = ({
  isUniversity,
  queryParams,
  setQueryParams,
  isSearchByName = false,
  isSearchByCompany = false,
  isSearchByYear = false,
  isSearchByRegion = false,
  isSearchByCountry = false,
  isSearchByCourseLevel = false,
  isSearchByCourseDeliveryMethod = false,
  params = undefined,
}: propsType) => {
  const [drawer, setDrawer] = useState(false);

  const ResetBtn = () => {
    return (
      <button
        onClick={() =>
          setQueryParams({
            uniPage: 1,
            uniLimit: 10,
            courseLimit: 3,
            searchKeyword: "",
            courseSpecialization: params,
          })
        }
        type="button"
        className="btn btn-outline rounded text-sm"
      >
        <TbRefresh size={15} /> Reset
      </button>
    );
  };
  return (
    <>
      <section className="pb-5">
        <div className="container">
          <div className="wrapper-small">
            <div className="border-b">
              <div className="flex flex-wrap justify-between py-3">
                <div className="flex gap-2 md:gap-4">
                  <button
                    type="button"
                    onClick={() => setDrawer(true)}
                    className="btn btn-outline rounded text-sm"
                  >
                    <FiSliders size={15} />
                    Filters
                  </button>
                  <ResetBtn />
                </div>
                <div className="filtered-select">
                  <Select
                    allowClear
                    placeholder="Sorting"
                    size={"large"}
                    className=" min-w-[180px] !border-0"
                    options={[
                      { label: "Short by Popularity", value: "Popularity" },
                      { label: "Short by Name", value: "Name" },
                      { label: "Short by Rank", value: "Rank" },
                    ]}
                    onChange={(val) =>
                      setQueryParams((prev: any) => ({ ...prev, orderBy: val }))
                    }
                    value={
                      queryParams?.orderBy ? queryParams?.orderBy : undefined
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Drawer
        title="Filters"
        placement={"right"}
        onClose={() => setDrawer(false)}
        open={drawer}
        contentWrapperStyle={{ width: "100%", maxWidth: "450px" }}
        footer={
          <div className="flex justify-between">
            <button
              className="btn btn-cancel rounded text-sm"
              onClick={() => setDrawer(false)}
            >
              Cancel
            </button>
            <div className="flex items-center gap-2">
              <ResetBtn />
              <button
                type="button"
                onClick={() => setDrawer(false)}
                className="btn btn-primary rounded text-sm"
              >
                Filter
              </button>
            </div>
          </div>
        }
      >
        <div className="flex flex-col h-full">
          <div className="flex flex-col gap-5">
            {isSearchByName ? (
              <UniCoursesSearchByName
                isBorder
                isLabel
                setQueryParams={setQueryParams}
                queryParams={queryParams}
                isUniversity={isUniversity}
              />
            ) : null}

            {isSearchByCompany ? (
              <UniCoursesSearchByCompany
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
            ) : null}
            {isSearchByYear ? (
              <UniCoursesSearchByYear
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
            ) : null}
            {isSearchByRegion ? (
              <UniCoursesSearchByRegion
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
            ) : null}
            {isSearchByCountry ? (
              <UniCoursesSearchByLocation
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
            ) : null}
            {isSearchByCourseLevel ? (
              <UniCoursesSearchByLevel
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
            ) : null}
            {isSearchByCourseDeliveryMethod ? (
              <UniCoursesSearchByDeliveryMethod
                queryParams={queryParams}
                setQueryParams={setQueryParams}
              />
            ) : null}
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default UniCoursesFilter;
