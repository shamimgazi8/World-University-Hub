"use client";
import UniversityHero from "../@components/hero";
import DetailAside from "./aside";
import useHeading from "@/hooks/use-heading";
import QuestionForm from "../overview/QuestionForm";
import KeyInfoCourse from "../overview/KeyInfo/keyiinfocourse";
import CourseOverviewDescription from "../overview/description/describtionCourse";
import AdmissionReqCourse from "../overview/Admission/indexCourse";
import ToutionFees from "../overview/ToutionFees";
import ShowRankingCourse from "@/modules/@common/show-ranking/indexCourse";
import MorePrograms from "../overview/availablePrograms/indexCourse";
import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
interface propTypes {
  data?: any;
  dataCourse?: any;
}
const UniversityCourseDetails = ({ data, dataCourse }: propTypes) => {
  useHeading();
  const [color, setColor] = useState(true);
  const colorChange = () => {
    if (window.scrollY < 400) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", colorChange);
  return (
    <>
      <UniversityHero data={data} />
      <div className="lg:pt-8 pb-8 lg:pb-[80px]">
        <div className="container">
          <div className="grid grid-cols-1">
            <div className=" grid lg:grid-cols-[1fr_417px] mt-[20px] gap-[30px]">
              <div className=" ">
                <div
                  className={` border-b mb-[20px] flex justify-between mx-[-20px] lg:mx-0  self-start sticky ${
                    !color && "bg-[#F8F9FD]"
                  }  rounded px-[15px] pt-[15px] top-[68px] lg:top-[75px] z-[100]`}
                >
                  <DetailAside data={dataCourse} />
                  <Link href={`/top-universities`}>
                    <button className=" mb-3 flex justify-center items-center gap-[6px] group ">
                      <IoIosArrowRoundBack className=" group-hover:scale-150 transition-all" />{" "}
                      Back to University Page
                    </button>
                  </Link>
                </div>
                <h4 className=" mb-0 ">{dataCourse?.displayName}</h4>
                <KeyInfoCourse id="key-info" />
                <CourseOverviewDescription
                  className="uni-section mt-[40px]"
                  data={data}
                />
                <AdmissionReqCourse id="admission-req" />
                <ToutionFees id="tuition-fee" />
                <ShowRankingCourse
                  className={{ rootDetail: "uni-section" }}
                  id="ranking"
                  isDetail={true}
                  universitySlug={data?.slug}
                />
                <MorePrograms data={dataCourse} id="more-programs" />
                {/* <div>
                  <ProgramOverview
                    id="program-overview"
                    data={data}
                    dataCourse={dataCourse}
                  />
                  <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
                    <div>
                      <ProgramAbout data={dataCourse} />
                      <ProgramDescription
                        id="program-description"
                        data={dataCourse}
                      />
                      <ProgramAdmissionRequirements
                        id="admission-requirements"
                        data={dataCourse}
                      />
                      <ProgramContent id="program-content" data={dataCourse} />
                      <TutionFeesAndScholarships
                        id="tuition-fees-and-scholarships"
                        data={dataCourse}
                      />
                      <ContinuingStudies data={dataCourse} />
                      <CareerPaths data={dataCourse} />
                    </div>
                  </div>
                </div> */}
              </div>
              <div>
                <QuestionForm />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <ViewCourse
        universitySlug={data?.slug}
        classes={{ root: "!mb-0", title: "h3" }}
      /> */}
    </>
  );
};

export default UniversityCourseDetails;
