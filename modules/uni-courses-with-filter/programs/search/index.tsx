"use client";

import { generateQueryString } from "@/helpers/utils";
import PaginationComponent from "@/modules/@common/pagination";
import Skeleton from "@/modules/@common/skeleton";
import { useEffect, useState } from "react";
import Breadcrumbs from "@/modules/@common/breadcrumbs";
import { useRouter, useSearchParams } from "next/navigation";
import UniCoursesHero from "../../@components/hero";
import UniCoursesSearchByNameTwo from "../../@components/search-by-name/indexTwo";
import UniProgramCard from "./@components/UniProgramCard";
import ProgramsFilter from "./@components/Filter";
import DataNotFound from "@/modules/@common/loading/dataNotFound";
import { Drawer } from "antd";
import { useAllShortListQuery } from "@/appstore/user/shortList/shorList-api";
import { useGetAllUniversitiesBySearchQuery } from "@/appstore/university/university-api";

const heroDescription =
  "Below you will find top university by ranking. Narrow your search further by selecting a specific year, region and location.";

const ProgramSearchpage = () => {
  const [Filteropen, setFilterOpen] = useState(false);
  const showDrawer = () => {
    setFilterOpen(true);
  };
  const onClose = () => {
    setFilterOpen(false);
  };
  const limit = 15;
  const router = useRouter();
  const searchParams = useSearchParams();
  const countrySlug = searchParams.get("countrySlug");
  const pageFromRoute = searchParams.get("page");
  const studyLevel = searchParams.get("studyLevel");
  const subjectlvl = searchParams.get("subject");
  const specializaion = searchParams.get("specialization");
  const season = searchParams.get("intake");
  const duration = searchParams.get("duration");
  const englishTest = searchParams.get("englishTest");
  const academicTest = searchParams.get("academicTest");
  const scholarship = searchParams.get("scholarship");
  const attendance = searchParams.get("attendance");

  const countrySlugArr = countrySlug ? countrySlug.split(",") : [];
  const studyLevelArr = studyLevel ? studyLevel.split(",") : [];
  const durationArr = duration ? duration.split(",") : [];
  const seasonArr = season ? season.split(",") : [];
  const englishTestArr = englishTest ? englishTest.split(",") : [];
  const academicTestArr = academicTest ? academicTest.split(",") : [];
  const scholarshipArr = scholarship ? scholarship.split(",") : [];
  const specializationSlug = specializaion ? specializaion.split(",") : [];

  const AllSearch = [
    countrySlug,
    studyLevel,
    subjectlvl,
    season,
    duration,
    englishTest,
    academicTest,
    attendance,
    scholarship,
    specializaion,
  ];

  const [queryParams, setQueryParams] = useState<any>({
    page: pageFromRoute || 1,
    limit: 10,
    countrySlug: countrySlugArr,
    studyLevel: studyLevelArr,
    specialization: specializationSlug,
    duration: durationArr,
    season: seasonArr,
    englishTest: englishTestArr,
    academicTest: academicTestArr,
    scholarship: scholarshipArr,
  });

  const queryString = generateQueryString(queryParams);

  const { data, isFetching: isLoading } =
    useGetAllUniversitiesBySearchQuery(queryString);
  // const { data: shortList } = useAllShortListQuery("?reference=UNIVERSITY");

  const dataArr = data?.results;
  const total = data && data?.total;

  const onChange = (pageNumber: any) => {
    setQueryParams((prev: any) => ({ ...prev, page: pageNumber }));
  };

  useEffect(() => {
    const seasonStr = queryParams.intake && queryParams.intake.join(",");
    const academicTestStr =
      queryParams.academicTest && queryParams.academicTest.join(",");
    const englishTestStr =
      queryParams.englishTest && queryParams.englishTest.join(",");
    const durationStr = queryParams.duration && queryParams.duration.join(",");
    const subjectStr = queryParams.subject && queryParams.subject.join(",");
    const studyLevelStr =
      queryParams.studyLevel && queryParams.studyLevel.join(",");
    const specializaionStr =
      queryParams.specialization && queryParams.specialization.join(",");
    const countrySTR =
      queryParams.countrySlug && queryParams.countrySlug.join(",");
    const scholarshipSTR =
      queryParams.scholarship && queryParams.scholarship.join(",");
    const attendanceSTR =
      queryParams.attendance && queryParams.attendance.join(",");
    const queryStringSearch = generateQueryString({
      totalUniversity: total,
      ...queryParams,
      limit: "",
      countrySlug: countrySTR,
      studyLevel: studyLevelStr,
      subject: subjectStr,
      specialization: specializaionStr,
      intake: seasonStr,
      duration: durationStr,
      englishTest: englishTestStr,
      academicTest: academicTestStr,
      scholarship: scholarshipSTR,
      attendance: attendanceSTR,
    });
    router.push(`/programs/search/${queryStringSearch}`, { scroll: false });
  }, [queryString, total]);

  const dataBreadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: `Search Programs`,
    },
  ];

  return (
    <div>
      <UniCoursesHero
        title="Search Programs"
        shortDescription={heroDescription}
        placeholder="Search University"
        breadcrumb={<Breadcrumbs data={dataBreadcrumbs} />}
      />

      <section className=" lg:pt-[60px] pt-[20px]">
        <div className="container">
          <div className="grid lg:grid-cols-[305px_1fr] gap-[30px]">
            <div className="self-start row-span-2">
              <div className=" lg:hidden block">
                <button
                  className=" btn btn-primary-outline"
                  onClick={showDrawer}
                >
                  Filter
                </button>
                <Drawer
                  title="Programs Search Filter"
                  onClose={onClose}
                  placement={"left"}
                  open={Filteropen}
                >
                  <ProgramsFilter
                    selectedSearch={AllSearch}
                    setQueryParams={setQueryParams}
                    jobQueryParams={queryParams}
                    limit={limit}
                  />
                </Drawer>
              </div>
              <div className=" lg:block hidden">
                <ProgramsFilter
                  selectedSearch={AllSearch}
                  setQueryParams={setQueryParams}
                  jobQueryParams={queryParams}
                  limit={limit}
                />
              </div>
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
                We found <span className="font-bold">{total | 0}</span> results
                for you
              </div>
            </div>
            {total === 0 ? (
              <div className=" row-span-2">
                <DataNotFound />
              </div>
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
