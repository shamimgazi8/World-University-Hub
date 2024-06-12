"use client";
import React, { useEffect, useState } from "react";
import ToolsHero from "./@components/toolsHero";
import Breadcrumbs from "../@common/breadcrumbs";
import Stepper from "./@components/Stepper";
import StudyPlansForm from "./@components/Form";
import ToolsHeroTwo from "./@components/toolsHero";
import { useSearchParams } from "next/navigation";
import { generateQueryString } from "@/helpers/utils";
import { useGetAllUniversitiesBySearchQuery } from "@/appstore/university/university-api";
import ToolsHeroThree from "./@components/toolsHerothree";
import Stepper2 from "./@components/Stepper2";
import Stepperthree from "./@components/Stepperthree";
import StudyPlansFormAcademy from "./@components/AcademyForm";
import ResultPage from "./@components/ResultPage";

const CourseMatchingToolPage = () => {
  const [page, setPage] = useState(1);
  const [countrySlug, setcountrySlug] = useState("");
  const [studyLevel, setstudyLevel] = useState();
  const [specialization, setspecialization] = useState("");
  const [attendance, setattendance] = useState("");
  const [tuitionFrom, settuitionFrom] = useState("");
  const [tuitionTo, settuitionTo] = useState("");
  const [scholarship, setscholarship] = useState(false);
  const [englishTest, setEnglishTest] = useState("");
  const searchParams = useSearchParams();
  const pageFromRoute = searchParams.get("page");

  const [queryParams, setQueryParams] = useState<any>({
    page: pageFromRoute || 1,
    limit: 10,
    countrySlug: countrySlug,
    studyLevel: studyLevel,
    attendance: attendance,
    specialization: specialization,
    tuitionFrom: tuitionFrom,
    tuitionTo: tuitionTo,
    scholarship: scholarship,
    englishTest: englishTest,
  });
  const queryStringload = generateQueryString(queryParams);
  const { data, isFetching: isLoading } =
    useGetAllUniversitiesBySearchQuery(queryStringload);
  const dataArr = data?.results;
  const total = data && data?.total;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    setQueryParams({
      page,
      limit: 10,
      countrySlug,
      studyLevel,
      attendance,
      specialization,
      tuitionTo,
      tuitionFrom,
      scholarship,
      englishTest,
    });
  }, [
    page,
    countrySlug,
    studyLevel,
    attendance,
    specialization,
    tuitionFrom,
    tuitionTo,
    scholarship,
    englishTest,
  ]);

  const heroDescription = "0 schools and 0 programs";
  const dataBreadcrumbs = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: `Course Matching Tools`,
    },
  ];

  return (
    <div className=" ">
      {page === 1 ? (
        <ToolsHero
          title="So far, you have matched…"
          shortDescription={heroDescription}
          placeholder="Search University"
          breadcrumb={<Breadcrumbs data={dataBreadcrumbs} />}
        />
      ) : page === 2 ? (
        <ToolsHeroTwo
          title="So far, you have matched…"
          shortDescription={heroDescription}
          placeholder="Search University"
          breadcrumb={<Breadcrumbs data={dataBreadcrumbs} />}
        />
      ) : page === 3 ? (
        <ToolsHeroThree
          title="So far, you have matched…"
          shortDescription={heroDescription}
          placeholder="Search University"
          breadcrumb={<Breadcrumbs data={dataBreadcrumbs} />}
        />
      ) : (
        ""
      )}

      <div className=" container">
        {page === 1 ? (
          <Stepper />
        ) : page === 2 ? (
          <Stepper2 />
        ) : page === 3 ? (
          <Stepperthree />
        ) : (
          ""
        )}
        {page === 2 ? (
          <StudyPlansFormAcademy
            setEnglishTest={setEnglishTest}
            page={page}
            setPage={setPage}
          />
        ) : page === 1 ? (
          <StudyPlansForm
            page={page}
            setPage={setPage}
            specialization={specialization}
            setspecialization={setspecialization}
            setstudyLevel={setstudyLevel}
            setattendance={setattendance}
            setcountrySlug={setcountrySlug}
            settuitionTo={settuitionTo}
            settuitionFrom={settuitionFrom}
            setscholarship={setscholarship}
          />
        ) : page === 3 ? (
          <ResultPage queryStringload={queryStringload} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default CourseMatchingToolPage;
