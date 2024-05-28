"use client";

import { generateQueryString } from "@/helpers/utils";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useGetCountriesQuery } from "@/appstore/global/global-api";
import JobsBrowse from "../../@components/job-browse";
import Search from "@/modules/search";
import SearchTwo from "@/modules/search-two";
import SearchJob from "../jobSearch";

const JobLaningHero = ({ serverData }: any) => {
  const total = serverData?.totalCount;
  const router = useRouter();
  const { data } = useGetCountriesQuery("?limit=150");
  const dataArr = data && data?.data;
  const formatedData = dataArr?.map((item: any) => ({
    label: item?.name,
    value: item?.slug,
  }));

  const [keyword, setKeyword] = useState("");
  const [countrySlug, setCountrySlug] = useState("");
  const queryString = generateQueryString({ keyword, countrySlug });
  const handleFindJob = () => {
    router.push(`/jobs/search${queryString}`);
  };
  const onChange = (value: string) => {
    setCountrySlug(value);
  };

  return (
    <>
      <section className="">
        <div className="bg-gradient-to-b from-primary-light to-secondary-light pt-[30px]  rounded-lg pb-[200px]">
          <div className="max-w-[960px] w-full mx-auto">
            <div className=" px-4 lg:px-0 relative ">
              <div className="flex flex-col items-center">
                <h1 className="mb-0 h2">
                  World University Hub’s global job board
                </h1>
                <p className="mb-0 text-p1 pt-3 md:pt-5">
                  Search {total} academic & university jobs
                </p>
              </div>

              <div className=" mt-[30px]">
                <SearchJob />
              </div>
            </div>
          </div>
        </div>
      </section>
      <JobsBrowse />
    </>
  );
};

export default JobLaningHero;
