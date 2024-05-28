import { Drawer } from "antd";
import { useState } from "react";
import FilterDeliveryMethod from "./delivery-method";
import FilterByLevel from "./level";
import { useSearchParams } from "next/navigation";
import { capitalizeFirstLetter } from "@/helpers/utils";

interface propTypes {
  setDrawer?: any;
  drawer?: any;
  setQueryParams: any;
  queryParams: any;
  limit: any;
}

const CourseFiltersDrawer = ({
  drawer,
  setDrawer,
  setQueryParams,
  queryParams,
  limit,
}: propTypes) => {
  const searchParams = useSearchParams();
  const courseLevelFromRoute = searchParams.get("courseLevel");
  const deliveryMethodFromRoute = searchParams.get("deliveryMethod");

  const courseLevel =
    courseLevelFromRoute && capitalizeFirstLetter(courseLevelFromRoute);
  const deliveryMethodLevel =
    deliveryMethodFromRoute && capitalizeFirstLetter(deliveryMethodFromRoute);

  const [currentDMethod, setCurrentDMethod] = useState(
    deliveryMethodLevel ?? "Delivery Method"
  );
  const [deCurrentSlug, setDeCurrentSlug] = useState<any>(
    deliveryMethodFromRoute || undefined
  );

  const [currentLevel, setCurrentLevel] = useState(courseLevel ?? "Level");
  const [leCurrentSlug, setLeCurrentSlug] = useState<any>(
    courseLevelFromRoute || undefined
  );

  return (
    <>
      <Drawer
        title="Filters"
        placement={"left"}
        onClose={() => setDrawer(false)}
        open={drawer}
        contentWrapperStyle={{ width: "100%", maxWidth: "600px" }}
      >
        <div className="flex flex-col h-full">
          <div className="mb-5">
            <label htmlFor="coursetitle" className="mb-1 block font-medium">
              Search by Course Title
            </label>
            <input
              type="text"
              name=""
              id="coursetitle"
              placeholder="Search"
              onChange={(e) =>
                setQueryParams((prev: any) => ({
                  ...prev,
                  searchKeyword: e.target.value,
                }))
              }
              value={queryParams?.searchKeyword}
              className="border focus:outline-none w-full py-2 px-3  rounded-md"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <FilterByLevel
                queryParams={queryParams}
                setQueryParams={setQueryParams}
                currentLevel={currentLevel}
                setCurrentLevel={setCurrentLevel}
                leCurrentSlug={leCurrentSlug}
                setLeCurrentSlug={setLeCurrentSlug}
              />
            </div>
            <div>
              <FilterDeliveryMethod
                queryParams={queryParams}
                setQueryParams={setQueryParams}
                currentDMethod={currentDMethod}
                setCurrentDMethod={setCurrentDMethod}
                deCurrentSlug={deCurrentSlug}
                setDeCurrentSlug={setDeCurrentSlug}
              />
            </div>
          </div>
          <div className="mt-auto">
            <div className="flex justify-between">
              <button
                className="btn btn-cancel rounded text-sm"
                onClick={() => setDrawer(false)}
              >
                Cancel
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setQueryParams({ page: 1, limit, searchKeyword: "" });
                    setCurrentLevel("Level");
                    setCurrentDMethod("Delivery Method");
                    setLeCurrentSlug(null);
                    setDeCurrentSlug(null);
                  }}
                  className="btn btn-outline rounded"
                >
                  Reset
                </button>
                <button
                  onClick={() => setDrawer(false)}
                  className="btn btn-primary rounded text-sm"
                >
                  Filter
                </button>
              </div>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default CourseFiltersDrawer;
