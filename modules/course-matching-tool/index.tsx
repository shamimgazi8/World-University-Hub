import React from "react";
import ToolsHero from "./@components/toolsHero";
import Breadcrumbs from "../@common/breadcrumbs";
import Stepper from "./@components/Stepper";
import CourseMactchingForm from "./@components/Form";
import StudyPlansForm from "./@components/Form";

const CourseMatchingToolPage = () => {
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
      <ToolsHero
        title="So far, you have matched…"
        shortDescription={heroDescription}
        placeholder="Search University"
        breadcrumb={<Breadcrumbs data={dataBreadcrumbs} />}
      />
      <div className=" container">
        <Stepper />
        <StudyPlansForm />
      </div>
    </div>
  );
};

export default CourseMatchingToolPage;
