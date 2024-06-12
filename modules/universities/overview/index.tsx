"use client";
import * as Yup from "yup";
import ShowRanking from "@/modules/@common/show-ranking";
import UniversityHero from "../@components/hero";
import SectionUniversityCampus from "../@components/section-campus";
import SectionUniversityGallery from "../@components/section-gallery";
import Sidebar from "../@components/sidebar";
import ProgramByLevel from "./program-by-level";
import UniversityOverviewDescription from "./description";
import useHeading from "@/hooks/use-heading";
import KeyInfo from "./KeyInfo";
import AvailableProgram from "./availablePrograms";
import AdmissionReq from "./Admission";
import ToutionFees from "./ToutionFees";
import QuestionForm from "./QuestionForm";
import { useState } from "react";
import { generateQueryString } from "@/helpers/utils";
import { useGetUniversityRankingQuery } from "@/appstore/university/university-api";

interface propTypes {
  data: any;
}

const UniversityOverview = ({ data }: propTypes) => {
  const queryString = generateQueryString({
    uniSlug: data?.slug,
  });
  const { data: dataRank } = useGetUniversityRankingQuery(queryString);
  const dataRankArr: any = dataRank && dataRank?.data;
  useHeading();
  const [color, setColor] = useState(true);
  const colorChange = () => {
    if (window.scrollY < 370) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", colorChange);
  return (
    <>
      <UniversityHero isFeaturedImage data={data} />
      <div className="lg:pt-8 pb-8 lg:pb-[80px]">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[863px_1fr] gap-7">
            <div>
              <div
                className={` border-b mb-[20px] flex  justify-start mx-[-20px] lg:mx-0 items-center sticky  ${
                  !color && "bg-[#F8F9FD]"
                }  rounded px-[15px] top-[68px] lg:top-[75px] z-[100]`}
              >
                <Sidebar isShowActive data={data} />
              </div>

              <KeyInfo data={data} rank={dataRankArr} id="overview" />
              <UniversityOverviewDescription
                className="uni-section mt-[40px]"
                data={data}
              />
              <AvailableProgram />
              <AdmissionReq
                id="admission-req"
                data={data}
                testScore={data?.testScore}
              />
              <ToutionFees data={data?.tuitionFee} id="fees" />

              <ShowRanking
                className={{ rootDetail: "uni-section" }}
                id="ranking"
                isDetail={true}
                dataArr={dataRankArr}
                universitySlug={data?.slug}
              />
              {/* <ProgramByLevel universitySlug={data?.slug} /> */}
              <SectionUniversityCampus
                className="uni-section"
                id="contact"
                universitySlug={data?.slug}
                universityName={data?.name}
              />
              <SectionUniversityGallery
                className="uni-section"
                id="gallery"
                universitySlug={data?.slug}
              />
            </div>
            <div className="mx-[-20px] lg:mx-0  self-start  top-[72px] lg:top-[75px] z-[100] ">
              <QuestionForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UniversityOverview;
