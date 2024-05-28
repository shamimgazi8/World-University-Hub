"use client";
import { useGetUniversityCourseQuery } from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import PaginationComponent from "@/modules/@common/pagination";
import Skeleton from "@/modules/@common/skeleton";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/modules/@common/breadcrumbs";
import {
  useGetCountriesDataQuery,
  useGetRegionQuery,
} from "@/appstore/country/country-api";
import { useRouter, useSearchParams } from "next/navigation";
import UniCoursesHero from "../../@components/hero";
import UniCoursesSearchByNameTwo from "../../@components/search-by-name/indexTwo";
import UniProgramCard from "./@components/UniProgramCard";
import ProgramsFilter from "./@components/Filter";

const heroDescription =
  "Below you will find top university by ranking. Narrow your search further by selecting a specific year, region and location.";

const ProgramSearchpage = () => {
  const limit = 10;
  const router = useRouter();
  const searchParams = useSearchParams();
  const regionSlug = searchParams.get("regionSlug");
  const pageFromRoute = searchParams.get("page");
  const country = searchParams.get("countrySlug");
  const studyLevel = searchParams.get("studyLevel");
  const subjectlvl = searchParams.get("subject");
  const season = searchParams.get("intake");
  const duration = searchParams.get("duration");
  const englishTest = searchParams.get("englishTest");
  const academicTest = searchParams.get("academicTest");
  const Scholarship = searchParams.get("Scholarship");
  const Attendance = searchParams.get("Attendance");

  const CountryStr = country ? country.split(",") : [];
  const academicTeststr = academicTest ? academicTest.split(",") : [];
  const englishTestStr = englishTest ? englishTest.split(",") : [];
  const durationStr = duration ? duration.split(",") : [];
  const seasonStr = season ? season.split(",") : [];
  const studyLevelStr = studyLevel ? studyLevel.split(",") : [];
  const subjectStr = subjectlvl ? subjectlvl.split(",") : [];
  const ScholarshipStr = Scholarship ? Scholarship.split(",") : [];
  const AttendanceStr = Attendance ? Attendance.split(",") : [];
  const [queryParams, setQueryParams] = useState<any>({
    page: pageFromRoute || 1,
    limit: 10,
    regionSlug: regionSlug,
    countrySlug: CountryStr,
    studyLevel: studyLevelStr,
    subject: subjectStr,
    intake: seasonStr,
    duration: durationStr,
    englishTest: englishTestStr,
    academicTest: academicTeststr,
    Scholarship: ScholarshipStr,
    Attendance: AttendanceStr,
  });

  const queryStringload = generateQueryString(queryParams);
  const { data, isFetching: isLoading } =
    useGetUniversityCourseQuery(queryStringload);
  const dataArr = data?.results;
  const total = data && data?.total;
  const onChange = (pageNumber: any) => {
    setQueryParams((prev: any) => ({ ...prev, page: pageNumber }));
  };
  const seasonStrload = queryParams.intake && queryParams.intake.join(",");
  const academicTestStr =
    queryParams.academicTest && queryParams.academicTest.join(",");
  const englishTestStrload =
    queryParams.englishTest && queryParams.englishTest.join(",");
  const durationStrload =
    queryParams.duration && queryParams.duration.join(",");
  const subjectStrload = queryParams.subject && queryParams.subject.join(",");
  const studyLevelStrload =
    queryParams.studyLevel && queryParams.studyLevel.join(",");
  const countrySTR =
    queryParams.countrySlug && queryParams.countrySlug.join(",");
  const ScholarshipSTR =
    queryParams.Scholarship && queryParams.Scholarship.join(",");
  const AttendanceSTR =
    queryParams.Attendance && queryParams.Attendance.join(",");
  const queryString = generateQueryString({
    ...queryParams,
    limit: "",
    countrySlug: countrySTR,
    studyLevel: studyLevelStrload,
    subject: subjectStrload,
    intake: seasonStrload,
    duration: durationStrload,
    englishTest: englishTestStrload,
    academicTest: academicTestStr,
    Scholarship: ScholarshipSTR,
    Attendance: AttendanceSTR,
  });
  const AllSearch = [
    country,
    studyLevel,
    subjectlvl,
    season,
    duration,
    englishTest,
    academicTest,
    Attendance,
    Scholarship,
  ];
  useEffect(() => {
    router.push(`/programs/search/${queryString}`, { scroll: false });
  }, [queryString, total]);
  const countryQueryParams = {
    page: 1,
    limit: 500,
    hasUniversity: "true",
  };
  const countryQueryString = generateQueryString(countryQueryParams);

  const { data: countryData, isLoading: isCountryLoading } =
    useGetCountriesDataQuery(countryQueryString);

  const countryOption = countryData?.data?.map((item: any, i: any) => {
    return {
      value: item?.slug,
      label: item?.name,
    };
  });

  // Region

  const { data: regionData, isLoading: isRegionLoading } =
    useGetRegionQuery("?page=1&limit=50");

  const regionOptions = regionData?.data?.map((item: any) => {
    return {
      label: item?.name,
      value: item?.slug,
    };
  });

  const dataBreadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: `Health Care`,
    },
  ];

  return (
    <div>
      <UniCoursesHero
        title="Health Care"
        shortDescription={heroDescription}
        placeholder="Search University"
        breadcrumb={<Breadcrumbs data={dataBreadcrumbs} />}
      />

      <section className=" pt-[60px]">
        <div className="container">
          <div className="grid lg:grid-cols-[305px_1fr] gap-[30px]">
            <div className="self-start row-span-2">
              <ProgramsFilter
                selectedSearch={AllSearch}
                setQueryParams={setQueryParams}
                jobQueryParams={queryParams}
                limit={limit}
              />
            </div>
            <div className=" flex lg:flex-row flex-col justify-between">
              <div className="lg:mb-0 mb-5 lg:w-[400px]">
                <UniCoursesSearchByNameTwo
                  setQueryParams={setQueryParams}
                  queryParams={queryParams}
                  isUniversity={true}
                  placeholder={"Enter University Name"}
                />
              </div>
              <div className="mb-0 flex  gap-2 ">
                We found <span className="font-bold">{total}</span> results for
                you
              </div>
            </div>
            {total === 0 ? (
              <div> No Data Found</div>
            ) : isLoading ? (
              <div className="flex flex-col gap-2 mt-4 row-span-2">
                {new Array(6).fill(1).map((_, i) => {
                  return <Skeleton key={i} className={"h-[180px]"} />;
                })}
              </div>
            ) : (
              <div className="flex flex-col gap-4 row-span-2  ">
                {dataArr?.map((item: any, i: any) => {
                  return (
                    <UniProgramCard
                      totalUniversity={total}
                      showCourse={false}
                      data={item}
                      key={i}
                    />
                  );
                })}
              </div>
            )}
          </div>
          {/* {total > limit ? (
                        <div className="mt-6 lg:mt-10">
                          <PaginationComponent
                            onChange={onChange}
                            total={total}
                            page={page}
                            limit={limit}
                          />
                        </div>
                      ) : null} */}

          {total > queryParams.limit ? (
            <div className="mt-6 lg:mt-10">
              <PaginationComponent
                onChange={onChange}
                total={total}
                page={queryParams.page}
                limit={queryParams.limit}
              />
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default ProgramSearchpage;
