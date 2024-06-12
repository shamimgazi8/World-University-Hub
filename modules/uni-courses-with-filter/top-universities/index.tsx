"use client";
import { useGetAllUniversitiesQuery } from "@/appstore/university/university-api";
import { generateQueryString } from "@/helpers/utils";
import PaginationComponent from "@/modules/@common/pagination";
import Skeleton from "@/modules/@common/skeleton";
import UniCourseCard from "@/modules/@common/uni-course-card";
import { useEffect, useState } from "react";
import UniCoursesHero from "../@components/hero";
import Breadcrumbs from "@/modules/@common/breadcrumbs";
import { Drawer, Select } from "antd";
import {
  useGetCountriesDataQuery,
  useGetRegionQuery,
} from "@/appstore/country/country-api";
import { useRouter, useSearchParams } from "next/navigation";
import { useGetRankingCompanyQuery } from "@/appstore/university/university-api";
import UniCoursesSearchByNameTwo from "../@components/search-by-name/indexTwo";
import { FiSliders } from "react-icons/fi";
import DataNotFound from "@/modules/@common/loading/dataNotFound";
import NoDataFound from "@/modules/@common/no-data-found-page";

const heroDescription =
  "Below you will find top university by ranking. Narrow your search further by selecting a specific year, region and location.";

const TopUniversities = () => {
  const [drawer, setDrawer] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const countrySlug = searchParams.get("countrySlug");
  const regionSlug = searchParams.get("regionSlug");
  const pageFromRoute = searchParams.get("page");

  const [queryParams, setQueryParams] = useState<any>({
    page: pageFromRoute || 1,
    countrySlug,
    limit: 10,
    regionSlug: regionSlug,
  });

  const handleReset = () => {
    setQueryParams({
      page: 1,
      courseSlug: "",
      limit: 10,
    });
  };

  const queryString = generateQueryString(queryParams);

  const {
    data,
    isError,
    isFetching: isLoading,
  } = useGetAllUniversitiesQuery(queryString);

  const dataArr = data?.universities;
  const total = data && data?.count;

  const onChange = (pageNumber: any) => {
    setQueryParams((prev: any) => ({ ...prev, page: pageNumber }));
  };

  useEffect(() => {
    const queryString = generateQueryString({
      totalUniversity: total,
      ...queryParams,
      limit: "",
    });

    router.push(`/top-universities${queryString}`, { scroll: false });
  }, [queryString, total]);

  const countryQueryParams = {
    page: 1,
    limit: 500,
    hasUniversity: "true",
  };

  const countryQueryString = generateQueryString(countryQueryParams);
  const { data: rankingCompanyList } = useGetRankingCompanyQuery("");
  const { data: countryData, isLoading: isCountryLoading } =
    useGetCountriesDataQuery(countryQueryString);
  const years = {
    year: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024],
  };
  const YearOption = years?.year?.map((item: any) => {
    return {
      value: item,
      lable: item,
    };
  });
  const countryOption = countryData?.data?.map((item: any, i: any) => {
    return {
      value: item?.slug,
      label: item?.name,
    };
  });
  const rankCompanys = rankingCompanyList?.map((item: any, i: any) => {
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
      title: `Top Universities`,
    },
  ];

  return (
    <div>
      <UniCoursesHero
        title="Top Universities by Ranking"
        shortDescription={heroDescription}
        placeholder="Search University"
        breadcrumb={<Breadcrumbs data={dataBreadcrumbs} />}
      />
      <div className=" pt-5 pl-5 lg:hidden block">
        <button
          type="button"
          onClick={() => setDrawer(true)}
          className="btn btn-outline rounded text-sm"
        >
          <FiSliders size={15} />
          Filters
        </button>

        <Drawer
          title="Filters"
          placement={"left"}
          onClose={() => setDrawer(false)}
          open={drawer}
          contentWrapperStyle={{ width: "80%", maxWidth: "450px" }}
          // footer={}
        >
          <div className="p-6 bg-grey self-start row-span-2">
            <div className="flex items-center justify-between mb-6">
              <h5 className="text-black font-medium mb-0">Filter</h5>
              <button onClick={handleReset}>
                <span className="text-sm text-gradient">Clear All</span>
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <div>
                <Select
                  allowClear
                  placeholder={"Rank By"}
                  loading={isCountryLoading}
                  className="custom_country"
                  style={{ width: `100%` }}
                  size="large"
                  value={
                    queryParams?.rankCompanySlug
                      ? queryParams?.rankCompanySlug
                      : null
                  }
                  onChange={(val) =>
                    setQueryParams((prev: any) => ({
                      ...prev,
                      rankCompanySlug: val,
                    }))
                  }
                  options={rankCompanys}
                />
              </div>
              <div>
                <Select
                  allowClear
                  placeholder={"Year"}
                  loading={isCountryLoading}
                  className="custom_country"
                  style={{ width: `100%` }}
                  size="large"
                  value={queryParams?.rankYear ? queryParams?.rankYear : null}
                  onChange={(val) =>
                    setQueryParams((prev: any) => ({
                      ...prev,
                      rankYear: val,
                    }))
                  }
                  options={YearOption}
                />
              </div>

              <div>
                <Select
                  size="large"
                  showSearch
                  allowClear
                  className="custom_country"
                  style={{ width: `100%` }}
                  placeholder="Search by Region"
                  options={regionOptions}
                  onChange={(val) =>
                    setQueryParams((prev: any) => ({
                      ...prev,
                      regionSlug: val,
                      countrySlugs: undefined,
                    }))
                  }
                  value={
                    queryParams?.regionSlug
                      ? queryParams?.regionSlug
                      : undefined
                  }
                />
              </div>
              <div>
                <Select
                  showSearch
                  allowClear
                  placeholder={"Country"}
                  loading={isCountryLoading}
                  className="custom_country"
                  style={{ width: `100%` }}
                  size="large"
                  value={
                    queryParams?.countrySlug ? queryParams?.countrySlug : null
                  }
                  onChange={(val) =>
                    setQueryParams((prev: any) => ({
                      ...prev,
                      countrySlug: val,
                    }))
                  }
                  options={countryOption}
                />
              </div>
            </div>
          </div>
        </Drawer>
      </div>
      {/* <UniCoursesFilter
        queryParams={queryParams}
        setQueryParams={setQueryParams}
        isSearchByName
        isSearchByCompany
        isSearchByYear
        isSearchByCountry
        isSearchByRegion
      /> */}
      <section className=" pt-[60px]">
        <div className="container">
          <div className="grid lg:grid-cols-[305px_1fr] gap-[30px]">
            <div className="lg:block hidden p-6 bg-grey self-start row-span-2">
              <div className="flex items-center justify-between mb-6">
                <h5 className="text-black font-medium mb-0">Filter</h5>
                <button onClick={handleReset}>
                  <span className="text-sm text-gradient">Clear All</span>
                </button>
              </div>
              <div className="flex flex-col gap-4">
                <div>
                  <Select
                    allowClear
                    placeholder={"Rank By"}
                    loading={isCountryLoading}
                    className="custom_country"
                    style={{ width: `100%` }}
                    size="large"
                    value={
                      queryParams?.rankCompanySlug
                        ? queryParams?.rankCompanySlug
                        : null
                    }
                    onChange={(val) =>
                      setQueryParams((prev: any) => ({
                        ...prev,
                        rankCompanySlug: val,
                      }))
                    }
                    options={rankCompanys}
                  />
                </div>
                <div>
                  <Select
                    allowClear
                    placeholder={"Year"}
                    loading={isCountryLoading}
                    className="custom_country"
                    style={{ width: `100%` }}
                    size="large"
                    value={queryParams?.rankYear ? queryParams?.rankYear : null}
                    onChange={(val) =>
                      setQueryParams((prev: any) => ({
                        ...prev,
                        rankYear: val,
                      }))
                    }
                    options={YearOption}
                  />
                </div>

                <div>
                  <Select
                    size="large"
                    showSearch
                    allowClear
                    className="custom_country"
                    style={{ width: `100%` }}
                    placeholder="Search by Region"
                    options={regionOptions}
                    onChange={(val) =>
                      setQueryParams((prev: any) => ({
                        ...prev,
                        regionSlug: val,
                        countrySlugs: undefined,
                      }))
                    }
                    value={
                      queryParams?.regionSlug
                        ? queryParams?.regionSlug
                        : undefined
                    }
                  />
                </div>
                <div>
                  <Select
                    showSearch
                    allowClear
                    placeholder={"Country"}
                    loading={isCountryLoading}
                    className="custom_country"
                    style={{ width: `100%` }}
                    size="large"
                    value={
                      queryParams?.countrySlug ? queryParams?.countrySlug : null
                    }
                    onChange={(val) =>
                      setQueryParams((prev: any) => ({
                        ...prev,
                        countrySlug: val,
                      }))
                    }
                    options={countryOption}
                  />
                </div>
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
              <div className="mb-0 flex justify-center items-center gap-2 ">
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
              <div className="flex flex-col gap-4 row-span-2 ">
                {dataArr ? (
                  dataArr?.map((item: any, i: any) => {
                    return (
                      <UniCourseCard showCourse={false} data={item} key={i} />
                    );
                  })
                ) : (
                  <DataNotFound />
                )}
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

export default TopUniversities;
