"use client";

import AdvertisementLeftSide from "@/modules/@common/advertisement/left_side";
import AdvertisementSideSm from "@/modules/@common/advertisement/side_sm";
import PaginationComponent from "@/modules/@common/pagination";
import Skeleton from "@/modules/@common/skeleton";
import JobCard from "../@common/job-card";

interface propTypes {
  isLoading?: boolean;
  isError?: boolean;
  data?: any;
  limit?: any;
  onChange?: any;
  page?: any;
}

const JobList = ({
  isError,
  isLoading,
  data,
  limit,
  onChange,
  page,
}: propTypes) => {
  const dataArr = data?.data;
  const total = data?.totalCount;

  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_300px] gap-7">
          {/* <AdvertisementLeftSide /> */}
          <div>
            {isLoading && !isError ? (
              <div className="flex flex-col gap-5 lg:gap-7">
                {new Array(5).fill(1).map((_, i) => {
                  return (
                    <Skeleton key={i} className={"h-[170px] rounded-lg"} />
                  );
                })}
              </div>
            ) : (
              <>
                <div className="flex flex-col gap-5 lg:gap-7">
                  {dataArr?.map((item: any, i: number) => {
                    return <JobCard key={i} data={item} />;
                  })}
                </div>
              </>
            )}
            {total > limit ? (
              <div className="mt-2 lg:mt-4">
                <PaginationComponent
                  onChange={onChange}
                  total={total}
                  page={page}
                  limit={limit}
                />
              </div>
            ) : null}
          </div>
          {/* <AdvertisementSideSm /> */}
        </div>
      </div>
    </section>
  );
};

export default JobList;
