import { useGetAllSpecializationQuery } from "@/appstore/user/utility/utility-api";
import { generateQueryString } from "@/helpers/utils";
import SubjectGuidePage from "@/modules/subject-guide";
import React from "react";

const SubjectGuide = () => {
  return (
    <>
      <SubjectGuidePage />
    </>
  );
};

export default SubjectGuide;
