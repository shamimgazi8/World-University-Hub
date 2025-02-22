"use client";
import { useGetJobQuery } from "@/appstore/job/job-api";
import { generateQueryString } from "@/helpers/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import JobFilter from "../@components/filter";
import JobHero from "../@components/hero";
import PaginationComponent from "@/modules/@common/pagination";
import Skeleton from "@/modules/@common/skeleton";
import { useGetCountriesQuery } from "@/appstore/global/global-api";
import JobCardtwo from "../@components/@common/job-card";
import EmployeeSliderTwo from "../@components/employee-carousel/indexTwo";
import { Drawer } from "antd";

const JobSearch = () => {
  const [Filteropen, setFilterOpen] = useState(false);
  const showDrawer = () => {
    setFilterOpen(true);
  };

  const onClose = () => {
    setFilterOpen(false);
  };
  const limit = 10;
  const router = useRouter();
  const searchParams = useSearchParams();
  const pageFromRoute = searchParams.get("page");
  const keywordFromRoute = searchParams.get("keyword");
  const countryNameFromRoute = searchParams.get("countryName");
  const specialization = searchParams.get("specialization");
  const jobTypeSlug = searchParams.get("jobTypeSlug");
  const salaryBand = searchParams.get("salaryBand");
  const contactTyp = searchParams.get("contractType");
  const Hour = searchParams.get("jobHours");
  const recruiter = searchParams.get("recruiterSlug");

  const specializationArr = specialization ? specialization.split(",") : [];
  const jobTypeSlugArr = jobTypeSlug ? jobTypeSlug.split(",") : [];
  const contactTypArr = contactTyp ? contactTyp.split(",") : [];
  const salaryBandArr = salaryBand ? salaryBand.split(",") : [];
  const hourArr = Hour ? Hour.split(",") : [];
  const recruiterArr = recruiter ? recruiter.split(",") : [];

  const [page, setPage] = useState<any>(pageFromRoute || 1);
  const [countryName, setCountryName] = useState("");

  const [queryParams, setQueryParams] = useState<any>({
    limit,
    page,
    keyword: keywordFromRoute,
    jobTypeSlug: jobTypeSlugArr,
    salaryBand: salaryBandArr,
    jobHours: hourArr,
    recruiterSlug: recruiterArr,
    contractType: contactTypArr,
    specialization: specializationArr,
    countryName: countryNameFromRoute,
  });
  const countryParams = generateQueryString({
    name: countryName,
    page: 1,
    limit: 50,
  });

  const { data: countryData } = useGetCountriesQuery(countryParams);

  const queryString = generateQueryString(queryParams);

  const { data, isLoading, isError } = useGetJobQuery(queryString);

  const onChange = (pageNumber: any) => {
    setPage(pageNumber);
    setQueryParams((prev: any) => ({ ...prev, page: pageNumber }));
  };

  const countryOptions = countryData?.data?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });

  const dataArr = data?.data;
  const total = data?.totalCount;

  useEffect(() => {
    const specializationstring =
      queryParams.specialization && queryParams.specialization.join(",");
    const jobTypeString =
      queryParams.jobTypeSlug && queryParams.jobTypeSlug.join(",");
    const salaryBandString =
      queryParams.salaryBand && queryParams.salaryBand.join(",");
    const ContactTypestring =
      queryParams.contractType && queryParams.contractType.join(",");
    const jobHoursString =
      queryParams.jobHours && queryParams.jobHours.join(",");
    const RecuiterString =
      queryParams.recruiterSlug && queryParams.recruiterSlug.join(",");
    const queryString = generateQueryString({
      ...queryParams,
      specializationSlug: specializationstring,
      jobTypeSlug: jobTypeString,
      salaryBand: salaryBandString,
      contractType: ContactTypestring,
      jobHours: jobHoursString,
      recruiterSlug: RecuiterString,
      limit: "",
    });

    router.push(`/jobs/search${queryString}`, { scroll: false });
    // }, [queryString, totalCount]);
  }, [queryString]);

  return (
    <>
      {/* <LoadingScreen /> */}
      <JobHero total={data?.totalCount} />
      <div className=" container lg:my-[60px] my-[20px]">
        <div className="grid lg:grid-cols-[305px_975px] gap-[30px]">
          <div className=" lg:hidden block">
            <button className=" btn btn-primary-outline" onClick={showDrawer}>
              Filter
            </button>
            <Drawer
              title="Job Search Filter"
              onClose={onClose}
              placement={"left"}
              open={Filteropen}
            >
              <JobFilter
                setQueryParams={setQueryParams}
                jobQueryParams={queryParams}
                limit={limit}
              />
            </Drawer>
          </div>
          <div className=" lg:block hidden">
            <JobFilter
              setQueryParams={setQueryParams}
              jobQueryParams={queryParams}
              limit={limit}
            />
          </div>

          <div>
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
                    {data?.data?.map((item: any, i: number) => {
                      return (
                        <JobCardtwo
                          key={i}
                          data={item}
                          classes={{
                            root: `self-start transition-all`,
                          }}
                        />
                      );
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
          </div>
          {/* <JobList
            isLoading={isLoading}
            isError={isError}
            data={data}
            limit={limit}
            onChange={onChange}
            page={page}
          /> */}
        </div>
      </div>
      <EmployeeSliderTwo />
    </>
  );
};

export default JobSearch;
