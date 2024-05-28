"use client";

import SectionBlog from "@/modules/@common/section-blog";
import EmployeeSlider from "../@components/employee-carousel";
import JobHero from "../@components/hero";
import { useGetJobQuery } from "@/appstore/job/job-api";
import { generateQueryString } from "@/helpers/utils";
import { useState } from "react";

import JobList from "../@components/list";
import JobFilter from "../@components/filter";

const JobsCategory = ({ params }: any) => {
  const initParams = (): any => {
    const { job_slug, cat_slug } = params;
    return {
      ...(job_slug === "location" && { countrySlug: cat_slug }),
      ...(job_slug === "type" && { jobtypeSlug: cat_slug }),
      ...(job_slug === "region" && { regionSlug: cat_slug }),
      ...(job_slug === "category" && { specializationSlug: cat_slug }),
    };
  };
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [current, setCurrent] = useState(3);
  const [queryParams, setQueryParams] = useState({
    ...initParams(),
    page,
    limit,
  });

  const queryString = generateQueryString(queryParams);
  const { data, isFetching: isLoading, isError } = useGetJobQuery(queryString);

  const onChange = (pageNumber: any) => {
    setPage(pageNumber);
    setQueryParams((prev: any) => ({ ...prev, page: pageNumber }));
  };
  return (
    <div>
      <JobHero total={data?.totalCount} />
      <JobFilter
        setQueryParams={setQueryParams}
        jobQueryParams={queryParams}
        limit={limit}
        initParams={initParams}
      />
      <JobList
        isLoading={isLoading}
        isError={isError}
        data={data}
        limit={limit}
        onChange={onChange}
        page={page}
      />
      <EmployeeSlider />
      <SectionBlog classes={{ root: "mt-8 lg:mt-[60px]" }} />
    </div>
  );
};

export default JobsCategory;
